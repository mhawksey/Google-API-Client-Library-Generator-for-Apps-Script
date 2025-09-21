
/**
 * Google Apps Script client library for the Parameter Manager API
 * Documentation URL: https://cloud.google.com/secret-manager/parameter-manager/docs/overview
 * @class
 */
class Parametermanager {
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
    this._rootUrl = 'https://parametermanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
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

    this.projects.locations.parameters = {};

    /**
     * Lists Parameters in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListParametersRequest in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.list = (params) => this._makeRequest('v1/{+parent}/parameters', 'GET', params);

    /**
     * Gets details of a single Parameter.
     * @param {string} params.name - (Required) Required. Name of the resource in the format `projects/*\/locations/*\/parameters/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Parameter in a given project and location.
     * @param {string} params.parameterId - Required. Id of the Parameter resource
     * @param {string} params.parent - (Required) Required. Value for parent in the format `projects/*\/locations/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.create = (params) => this._makeRequest('v1/{+parent}/parameters', 'POST', params);

    /**
     * Updates a single Parameter.
     * @param {string} params.name - (Required) Identifier. [Output only] The resource name of the Parameter in the format `projects/*\/locations/*\/parameters/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Parameter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Parameter.
     * @param {string} params.name - (Required) Required. Name of the resource in the format `projects/*\/locations/*\/parameters/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.parameters.versions = {};

    /**
     * Lists ParameterVersions in a given project, location, and parameter.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListParameterVersionsRequest in the format `projects/*\/locations/*\/parameters/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Gets details of a single ParameterVersion.
     * @param {string} params.name - (Required) Required. Name of the resource in the format `projects/*\/locations/*\/parameters/*\/versions/*`.
     * @param {string} params.view - Optional. View of the ParameterVersion. In the default FULL view, all metadata & payload associated with the ParameterVersion will be returned.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets rendered version of a ParameterVersion.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.render = (params) => this._makeRequest('v1/{+name}:render', 'GET', params);

    /**
     * Creates a new ParameterVersion in a given project, location, and parameter.
     * @param {string} params.parameterVersionId - Required. Id of the ParameterVersion resource
     * @param {string} params.parent - (Required) Required. Value for parent in the format `projects/*\/locations/*\/parameters/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Updates a single ParameterVersion.
     * @param {string} params.name - (Required) Identifier. [Output only] The resource name of the ParameterVersion in the format `projects/*\/locations/*\/parameters/*\/versions/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ParameterVersion resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ParameterVersion.
     * @param {string} params.name - (Required) Required. Name of the resource in the format `projects/*\/locations/*\/parameters/*\/versions/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.parameters.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
