
/**
 * Google Apps Script client library for the BigQuery Connection API
 * Documentation URL: https://cloud.google.com/bigquery/docs/connections-api-intro
 * @class
 */
class Bigqueryconnection {
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
    this._rootUrl = 'https://bigqueryconnection.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.connections = {};

    /**
     * Creates a new connection.
     * @param {string} params.connectionId - Optional. Connection id that should be assigned to the created connection.
     * @param {string} params.parent - (Required) Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);

    /**
     * Returns specified connection.
     * @param {string} params.name - (Required) Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of connections in the given project.
     * @param {integer} params.pageSize - Required. Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);

    /**
     * Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.
     * @param {string} params.name - (Required) Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     * @param {string} params.updateMask - Required. Update mask for the connection fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes connection and associated credential.
     * @param {string} params.name - (Required) Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
