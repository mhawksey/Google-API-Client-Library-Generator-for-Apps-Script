
/**
 * Google Apps Script client library for the API Keys API
 * Documentation URL: https://cloud.google.com/api-keys/docs
 * @class
 */
class Apikeys {
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
    this._rootUrl = 'https://apikeys.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.keys = {};

    /**
     * Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.
     * @param {string} params.keyString - Required. Finds the project that owns the key string value.
     * @return {object} The API response object.
     */
    this.keys.lookupKey = (params) => this._makeRequest('v2/keys:lookupKey', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.keys = {};

    /**
     * Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.etag - Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency.
     * @param {string} params.name - (Required) Required. The resource name of the API key to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Required. The resource name of the API key to be undeleted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    /**
     * Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Required. The resource name of the API key to be retrieved.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.getKeyString = (params) => this._makeRequest('v2/{+name}/keyString', 'GET', params);

    /**
     * Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.keyId - User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. The id must NOT be a UUID-like string.
     * @param {string} params.parent - (Required) Required. The project in which the API key is created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.create = (params) => this._makeRequest('v2/{+parent}/keys', 'POST', params);

    /**
     * Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Required. The resource name of the API key to get.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {integer} params.pageSize - Optional. Specifies the maximum number of results to be returned at a time.
     * @param {string} params.pageToken - Optional. Requests a specific page of results.
     * @param {string} params.parent - (Required) Required. Lists all API keys associated with this project.
     * @param {boolean} params.showDeleted - Optional. Indicate that keys deleted in the past 30 days should also be returned.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.list = (params) => this._makeRequest('v2/{+parent}/keys', 'GET', params);

    /**
     * Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.updateMask - The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: `display_name`, `restrictions`, and `annotations`. If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.keys.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
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
