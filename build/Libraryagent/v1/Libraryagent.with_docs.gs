
/**
 * Google Apps Script client library for the Library Agent API
 * Documentation URL: https://cloud.google.com/docs/quota
 * @class
 */
class Libraryagent {
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
    this._rootUrl = 'https://libraryagent.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.shelves = {};

    /**
     * Gets a shelf. Returns NOT_FOUND if the shelf does not exist.
     * @param {string} params.name - (Required) Required. The name of the shelf to retrieve.
     * @return {object} The API response object.
     */
    this.shelves.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method.
     * @return {object} The API response object.
     */
    this.shelves.list = (params) => this._makeRequest('v1/shelves', 'GET', params);

    this.shelves.books = {};

    /**
     * Gets a book. Returns NOT_FOUND if the book does not exist.
     * @param {string} params.name - (Required) Required. The name of the book to retrieve.
     * @return {object} The API response object.
     */
    this.shelves.books.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method.
     * @param {string} params.parent - (Required) Required. The name of the shelf whose books we'd like to list.
     * @return {object} The API response object.
     */
    this.shelves.books.list = (params) => this._makeRequest('v1/{+parent}/books', 'GET', params);

    /**
     * Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
     * @param {string} params.name - (Required) Required. The name of the book to borrow.
     * @return {object} The API response object.
     */
    this.shelves.books.borrow = (params) => this._makeRequest('v1/{+name}:borrow', 'POST', params);

    /**
     * Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
     * @param {string} params.name - (Required) Required. The name of the book to return.
     * @return {object} The API response object.
     */
    this.shelves.books.return = (params) => this._makeRequest('v1/{+name}:return', 'POST', params);
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
