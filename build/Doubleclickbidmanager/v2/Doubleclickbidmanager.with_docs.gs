
/**
 * Google Apps Script client library for the DoubleClick Bid Manager API
 * Documentation URL: https://developers.google.com/bid-manager/
 * @class
 */
class Doubleclickbidmanager {
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
    this._rootUrl = 'https://doubleclickbidmanager.googleapis.com/';
    this._servicePath = 'v2/';

    // --- Public Interface Initialization ---

    this.queries = {};

    /**
     * Creates a new query.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.queries.create = (params) => this._makeRequest('queries', 'POST', params);

    /**
     * Deletes an existing query as well as its generated reports.
     * @param {string} params.queryId - (Required) Required. The ID of the query to delete.
     * @return {object} The API response object.
     */
    this.queries.delete = (params) => this._makeRequest('queries/{queryId}', 'DELETE', params);

    /**
     * Retrieves a query.
     * @param {string} params.queryId - (Required) Required. The ID of the query to retrieve.
     * @return {object} The API response object.
     */
    this.queries.get = (params) => this._makeRequest('queries/{queryId}', 'GET', params);

    /**
     * Lists queries created by the current user.
     * @param {string} params.orderBy - Field to sort the list by. Accepts the following values: * `queryId` (default) * `metadata.title` The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `queryId desc`.
     * @param {integer} params.pageSize - Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     * @param {string} params.pageToken - A token identifying which page of results the server should return. Typically, this is the value of nextPageToken, returned from the previous call to the `queries.list` method. If unspecified, the first page of results is returned.
     * @return {object} The API response object.
     */
    this.queries.list = (params) => this._makeRequest('queries', 'GET', params);

    /**
     * Runs an existing query to generate a report.
     * @param {string} params.queryId - (Required) Required. The ID of the query to run.
     * @param {boolean} params.synchronous - Whether the query should be run synchronously. When `true`, the request won't return until the resulting report has finished running. This parameter is `false` by default. Setting this parameter to `true` is **not recommended**.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.queries.run = (params) => this._makeRequest('queries/{queryId}:run', 'POST', params);

    this.queries.reports = {};

    /**
     * Lists reports generated by the provided query.
     * @param {string} params.orderBy - Field to sort the list by. Accepts the following values: * `key.reportId` (default) The default sorting order is ascending. To specify descending order for a field, add the suffix `desc` to the field name. For example, `key.reportId desc`.
     * @param {integer} params.pageSize - Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     * @param {string} params.pageToken - A token identifying which page of results the server should return. Typically, this is the value of nextPageToken returned from the previous call to the `queries.reports.list` method. If unspecified, the first page of results is returned.
     * @param {string} params.queryId - (Required) Required. The ID of the query that generated the reports.
     * @return {object} The API response object.
     */
    this.queries.reports.list = (params) => this._makeRequest('queries/{queryId}/reports', 'GET', params);

    /**
     * Retrieves a report.
     * @param {string} params.queryId - (Required) Required. The ID of the query that generated the report.
     * @param {string} params.reportId - (Required) Required. The ID of the query to retrieve.
     * @return {object} The API response object.
     */
    this.queries.reports.get = (params) => this._makeRequest('queries/{queryId}/reports/{reportId}', 'GET', params);
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
