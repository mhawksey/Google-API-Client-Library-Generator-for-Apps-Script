
/**
 * Google Apps Script client library for the Admin SDK API
 * Documentation URL: https://developers.google.com/workspace/admin/
 * @class
 */
class AdminDatatransfer {
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
    this._rootUrl = 'https://admin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.applications = {};

    /**
     * Retrieves information about an application for the given application ID.
     * @param {string} params.applicationId - (Required) ID of the application resource to be retrieved.
     * @return {object} The API response object.
     */
    this.applications.get = (params) => this._makeRequest('admin/datatransfer/v1/applications/{applicationId}', 'GET', params);

    /**
     * Lists the applications available for data transfer for a customer.
     * @param {string} params.customerId - Immutable ID of the Google Workspace account.
     * @param {integer} params.maxResults - Maximum number of results to return. Default is 100.
     * @param {string} params.pageToken - Token to specify next page in the list.
     * @return {object} The API response object.
     */
    this.applications.list = (params) => this._makeRequest('admin/datatransfer/v1/applications', 'GET', params);

    this.transfers = {};

    /**
     * Retrieves a data transfer request by its resource ID.
     * @param {string} params.dataTransferId - (Required) ID of the resource to be retrieved. This is returned in the response from the insert method.
     * @return {object} The API response object.
     */
    this.transfers.get = (params) => this._makeRequest('admin/datatransfer/v1/transfers/{dataTransferId}', 'GET', params);

    /**
     * Inserts a data transfer request. See the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference for specific application requirements.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transfers.insert = (params) => this._makeRequest('admin/datatransfer/v1/transfers', 'POST', params);

    /**
     * Lists the transfers for a customer by source user, destination user, or status.
     * @param {string} params.customerId - Immutable ID of the Google Workspace account.
     * @param {integer} params.maxResults - Maximum number of results to return. Default is 100.
     * @param {string} params.newOwnerUserId - Destination user's profile ID.
     * @param {string} params.oldOwnerUserId - Source user's profile ID.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @param {string} params.status - Status of the transfer.
     * @return {object} The API response object.
     */
    this.transfers.list = (params) => this._makeRequest('admin/datatransfer/v1/transfers', 'GET', params);
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
