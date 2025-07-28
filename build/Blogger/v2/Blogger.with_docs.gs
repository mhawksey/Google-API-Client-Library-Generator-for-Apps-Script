
/**
 * Google Apps Script client library for the Blogger API
 * Documentation URL: https://developers.google.com/blogger/docs/3.0/getting_started
 * @class
 */
class Blogger {
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
    this._rootUrl = 'https://blogger.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.blogs = {};

    /**
     * Gets a blog by id.
     * @param {string} params.blogId - (Required)
     * @return {object} The API response object.
     */
    this.blogs.get = (params) => this._makeRequest('v2/blogs/{blogId}', 'GET', params);

    /**
     * Lists blogs by user id, possibly filtered.
     * @param {string} params.userId - (Required)
     * @return {object} The API response object.
     */
    this.blogs.list = (params) => this._makeRequest('v2/users/{userId}/blogs', 'GET', params);

    this.comments = {};

    /**
     * Gets a comment by blog id, post id and comment id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.comments.get = (params) => this._makeRequest('v2/blogs/{blogId}/posts/{postId}/comments/{commentId}', 'GET', params);

    /**
     * Lists comments.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBodies - 
     * @param {integer} params.maxResults - 
     * @param {string} params.pageToken - 
     * @param {string} params.postId - (Required)
     * @param {string} params.startDate - 
     * @return {object} The API response object.
     */
    this.comments.list = (params) => this._makeRequest('v2/blogs/{blogId}/posts/{postId}/comments', 'GET', params);

    this.pages = {};

    /**
     * Gets a page by blog id and page id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @return {object} The API response object.
     */
    this.pages.get = (params) => this._makeRequest('v2/blogs/{blogId}/pages/{pageId}', 'GET', params);

    /**
     * Lists pages.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBodies - 
     * @return {object} The API response object.
     */
    this.pages.list = (params) => this._makeRequest('v2/blogs/{blogId}/pages', 'GET', params);

    this.posts = {};

    /**
     * Gets a post by blog id and post id
     * @param {string} params.blogId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.posts.get = (params) => this._makeRequest('v2/blogs/{blogId}/posts/{postId}', 'GET', params);

    /**
     * Lists posts.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBodies - 
     * @param {integer} params.maxResults - 
     * @param {string} params.pageToken - 
     * @param {string} params.startDate - 
     * @return {object} The API response object.
     */
    this.posts.list = (params) => this._makeRequest('v2/blogs/{blogId}/posts', 'GET', params);

    this.users = {};

    /**
     * Gets a user by user id.
     * @param {string} params.userId - (Required)
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('v2/users/{userId}', 'GET', params);
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
