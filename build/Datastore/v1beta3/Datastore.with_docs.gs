
/**
 * Google Apps Script client library for the Cloud Datastore API
 * Documentation URL: https://cloud.google.com/datastore/
 * @class
 */
class Datastore {
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
    this._rootUrl = 'https://datastore.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Looks up entities by key.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.lookup = (params) => this._makeRequest('v1beta3/projects/{projectId}:lookup', 'POST', params);

    /**
     * Queries for entities.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.runQuery = (params) => this._makeRequest('v1beta3/projects/{projectId}:runQuery', 'POST', params);

    /**
     * Runs an aggregation query.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.runAggregationQuery = (params) => this._makeRequest('v1beta3/projects/{projectId}:runAggregationQuery', 'POST', params);

    /**
     * Begins a new transaction.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.beginTransaction = (params) => this._makeRequest('v1beta3/projects/{projectId}:beginTransaction', 'POST', params);

    /**
     * Commits a transaction, optionally creating, deleting or modifying some entities.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.commit = (params) => this._makeRequest('v1beta3/projects/{projectId}:commit', 'POST', params);

    /**
     * Rolls back a transaction.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.rollback = (params) => this._makeRequest('v1beta3/projects/{projectId}:rollback', 'POST', params);

    /**
     * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.allocateIds = (params) => this._makeRequest('v1beta3/projects/{projectId}:allocateIds', 'POST', params);

    /**
     * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.reserveIds = (params) => this._makeRequest('v1beta3/projects/{projectId}:reserveIds', 'POST', params);
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
