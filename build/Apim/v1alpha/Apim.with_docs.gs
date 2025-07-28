
/**
 * Google Apps Script client library for the API Management API
 * Documentation URL: https://cloud.google.com/apigee/
 * @class
 */
class Apim {
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
    this._rootUrl = 'https://apim.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * ListApiObservationTags lists all extant tags on any observation in the given project.
     * @param {integer} params.pageSize - Optional. The maximum number of tags to return. The service may return fewer than this value. If unspecified, at most 10 tags will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListApiObservationTags` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservationTags` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of tags. Format: projects/{project}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.listApiObservationTags = (params) => this._makeRequest('v1alpha/{+parent}:listApiObservationTags', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.observationSources = {};

    /**
     * CreateObservationSource creates a new ObservationSource but does not affect any deployed infrastructure. It is a configuration that can be used in an Observation Job to collect data about APIs running in user's dataplane.
     * @param {string} params.observationSourceId - Required. The ID to use for the Observation Source. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.observationSources.create = (params) => this._makeRequest('v1alpha/{+parent}/observationSources', 'POST', params);

    /**
     * GetObservationSource retrieves a single ObservationSource by name.
     * @param {string} params.name - (Required) Required. The name of the ObservationSource to retrieve. Format: projects/{project}/locations/{location}/observationSources/{source}
     * @return {object} The API response object.
     */
    this.projects.locations.observationSources.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * ListObservationSources gets all ObservationSources for a given project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of ObservationSources to return. The service may return fewer than this value. If unspecified, at most 10 ObservationSources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListObservationSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationSources` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of ObservationSources. Format: projects/{project}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.observationSources.list = (params) => this._makeRequest('v1alpha/{+parent}/observationSources', 'GET', params);

    /**
     * DeleteObservationSource deletes an observation source. This method will fail if the observation source is currently being used by any ObservationJob, even if not enabled.
     * @param {string} params.name - (Required) Required. Name of the resource Format: projects/{project}/locations/{location}/observationSources/{source}
     * @return {object} The API response object.
     */
    this.projects.locations.observationSources.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.observationJobs = {};

    /**
     * CreateObservationJob creates a new ObservationJob but does not have any effecton its own. It is a configuration that can be used in an Observation Job to collect data about existing APIs.
     * @param {string} params.observationJobId - Required. The ID to use for the Observation Job. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {string} params.parent - (Required) Required. The parent resource where this ObservationJob will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.create = (params) => this._makeRequest('v1alpha/{+parent}/observationJobs', 'POST', params);

    /**
     * GetObservationJob retrieves a single ObservationJob by name.
     * @param {string} params.name - (Required) Required. The name of the ObservationJob to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{job}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * ListObservationJobs gets all ObservationJobs for a given project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of ObservationJobs to return. The service may return fewer than this value. If unspecified, at most 10 ObservationJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListObservationJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationJobs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of ObservationJobs. Format: projects/{project}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.list = (params) => this._makeRequest('v1alpha/{+parent}/observationJobs', 'GET', params);

    /**
     * DeleteObservationJob deletes an ObservationJob. This method will fail if the observation job is currently being used by any ObservationSource, even if not enabled.
     * @param {string} params.name - (Required) Required. Name of the resource Format: projects/{project}/locations/{location}/observationJobs/{observation_job}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Enables the given ObservationJob.
     * @param {string} params.name - (Required) Required. The name of the ObservationJob to enable. Format: projects/{project}/locations/{location}/observationJobs/{job}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.enable = (params) => this._makeRequest('v1alpha/{+name}:enable', 'POST', params);

    /**
     * Disables the given ObservationJob.
     * @param {string} params.name - (Required) Required. The name of the ObservationJob to disable. Format: projects/{project}/locations/{location}/observationJobs/{job}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.disable = (params) => this._makeRequest('v1alpha/{+name}:disable', 'POST', params);

    this.projects.locations.observationJobs.apiObservations = {};

    /**
     * GetApiObservation retrieves a single ApiObservation by name.
     * @param {string} params.name - (Required) Required. The name of the ApiObservation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.apiObservations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * ListApiObservations gets all ApiObservations for a given project and location and ObservationJob.
     * @param {integer} params.pageSize - Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListApiObservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservations` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of ApiObservations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.apiObservations.list = (params) => this._makeRequest('v1alpha/{+parent}/apiObservations', 'GET', params);

    /**
     * BatchEditTagsApiObservations adds or removes Tags for ApiObservations.
     * @param {string} params.parent - (Required) Required. The parent resource shared by all ApiObservations being edited. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.apiObservations.batchEditTags = (params) => this._makeRequest('v1alpha/{+parent}/apiObservations:batchEditTags', 'POST', params);

    this.projects.locations.observationJobs.apiObservations.apiOperations = {};

    /**
     * GetApiOperation retrieves a single ApiOperation by name.
     * @param {string} params.name - (Required) Required. The name of the ApiOperation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation}/apiOperation/{api_operation}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.apiObservations.apiOperations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * ListApiOperations gets all ApiOperations for a given project and location and ObservationJob and ApiObservation.
     * @param {integer} params.pageSize - Optional. The maximum number of ApiOperations to return. The service may return fewer than this value. If unspecified, at most 10 ApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListApiApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiApiOperations` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of ApiOperations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation}
     * @return {object} The API response object.
     */
    this.projects.locations.observationJobs.apiObservations.apiOperations.list = (params) => this._makeRequest('v1alpha/{+parent}/apiOperations', 'GET', params);
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
