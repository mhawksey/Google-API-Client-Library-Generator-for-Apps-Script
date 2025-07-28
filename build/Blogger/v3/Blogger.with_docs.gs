
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

    this.comments = {};

    /**
     * Marks a comment as not spam by blog id, post id and comment id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.comments.approve = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve', 'POST', params);

    /**
     * Deletes a comment by blog id, post id and comment id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.comments.delete = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}', 'DELETE', params);

    /**
     * Gets a comment by id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.comments.get = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}', 'GET', params);

    /**
     * Lists comments.
     * @param {string} params.blogId - (Required)
     * @param {string} params.endDate - 
     * @param {boolean} params.fetchBodies - 
     * @param {integer} params.maxResults - 
     * @param {string} params.pageToken - 
     * @param {string} params.postId - (Required)
     * @param {string} params.startDate - 
     * @param {string} params.status - 
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.comments.list = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments', 'GET', params);

    /**
     * Lists comments by blog.
     * @param {string} params.blogId - (Required)
     * @param {string} params.endDate - 
     * @param {boolean} params.fetchBodies - 
     * @param {integer} params.maxResults - 
     * @param {string} params.pageToken - 
     * @param {string} params.startDate - 
     * @param {string} params.status - 
     * @return {object} The API response object.
     */
    this.comments.listByBlog = (params) => this._makeRequest('v3/blogs/{blogId}/comments', 'GET', params);

    /**
     * Marks a comment as spam by blog id, post id and comment id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.comments.markAsSpam = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam', 'POST', params);

    /**
     * Removes the content of a comment by blog id, post id and comment id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.commentId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.comments.removeContent = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent', 'POST', params);

    this.pages = {};

    /**
     * Deletes a page by blog id and page id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @param {boolean} params.useTrash - Move to Trash if possible
     * @return {object} The API response object.
     */
    this.pages.delete = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'DELETE', params);

    /**
     * Gets a page by blog id and page id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.pages.get = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'GET', params);

    /**
     * Inserts a page.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.isDraft - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pages.insert = (params) => this._makeRequest('v3/blogs/{blogId}/pages', 'POST', params);

    /**
     * Lists pages.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBodies - 
     * @param {integer} params.maxResults - 
     * @param {string} params.pageToken - 
     * @param {string} params.status - 
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.pages.list = (params) => this._makeRequest('v3/blogs/{blogId}/pages', 'GET', params);

    /**
     * Patches a page.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @param {boolean} params.publish - 
     * @param {boolean} params.revert - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pages.patch = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'PATCH', params);

    /**
     * Publishes a page.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @return {object} The API response object.
     */
    this.pages.publish = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}/publish', 'POST', params);

    /**
     * Reverts a published or scheduled page to draft state.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @return {object} The API response object.
     */
    this.pages.revert = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}/revert', 'POST', params);

    /**
     * Updates a page by blog id and page id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.pageId - (Required)
     * @param {boolean} params.publish - 
     * @param {boolean} params.revert - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pages.update = (params) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'PUT', params);

    this.posts = {};

    /**
     * Deletes a post by blog id and post id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.postId - (Required)
     * @param {boolean} params.useTrash - Move to Trash if possible
     * @return {object} The API response object.
     */
    this.posts.delete = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'DELETE', params);

    /**
     * Gets a post by blog id and post id
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBody - 
     * @param {boolean} params.fetchImages - 
     * @param {integer} params.maxComments - 
     * @param {string} params.postId - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.posts.get = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'GET', params);

    /**
     * Gets a post by path.
     * @param {string} params.blogId - (Required)
     * @param {integer} params.maxComments - 
     * @param {string} params.path - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.posts.getByPath = (params) => this._makeRequest('v3/blogs/{blogId}/posts/bypath', 'GET', params);

    /**
     * Inserts a post.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBody - 
     * @param {boolean} params.fetchImages - 
     * @param {boolean} params.isDraft - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.posts.insert = (params) => this._makeRequest('v3/blogs/{blogId}/posts', 'POST', params);

    /**
     * Lists posts.
     * @param {string} params.blogId - (Required)
     * @param {string} params.endDate - 
     * @param {boolean} params.fetchBodies - 
     * @param {boolean} params.fetchImages - 
     * @param {string} params.labels - 
     * @param {integer} params.maxResults - 
     * @param {string} params.orderBy - 
     * @param {string} params.pageToken - 
     * @param {string} params.sortOption - Sort direction applied to post list.
     * @param {string} params.startDate - 
     * @param {string} params.status - 
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.posts.list = (params) => this._makeRequest('v3/blogs/{blogId}/posts', 'GET', params);

    /**
     * Patches a post.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBody - 
     * @param {boolean} params.fetchImages - 
     * @param {integer} params.maxComments - 
     * @param {string} params.postId - (Required)
     * @param {boolean} params.publish - 
     * @param {boolean} params.revert - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.posts.patch = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'PATCH', params);

    /**
     * Publishes a post.
     * @param {string} params.blogId - (Required)
     * @param {string} params.postId - (Required)
     * @param {string} params.publishDate - 
     * @return {object} The API response object.
     */
    this.posts.publish = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/publish', 'POST', params);

    /**
     * Reverts a published or scheduled post to draft state.
     * @param {string} params.blogId - (Required)
     * @param {string} params.postId - (Required)
     * @return {object} The API response object.
     */
    this.posts.revert = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/revert', 'POST', params);

    /**
     * Searches for posts matching given query terms in the specified blog.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBodies - 
     * @param {string} params.orderBy - 
     * @param {string} params.q - (Required)
     * @return {object} The API response object.
     */
    this.posts.search = (params) => this._makeRequest('v3/blogs/{blogId}/posts/search', 'GET', params);

    /**
     * Updates a post by blog id and post id.
     * @param {string} params.blogId - (Required)
     * @param {boolean} params.fetchBody - 
     * @param {boolean} params.fetchImages - 
     * @param {integer} params.maxComments - 
     * @param {string} params.postId - (Required)
     * @param {boolean} params.publish - 
     * @param {boolean} params.revert - 
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.posts.update = (params) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'PUT', params);

    this.blogs = {};

    /**
     * Gets a blog by id.
     * @param {string} params.blogId - (Required)
     * @param {integer} params.maxPosts - 
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.blogs.get = (params) => this._makeRequest('v3/blogs/{blogId}', 'GET', params);

    /**
     * Gets a blog by url.
     * @param {string} params.url - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.blogs.getByUrl = (params) => this._makeRequest('v3/blogs/byurl', 'GET', params);

    /**
     * Lists blogs by user.
     * @param {boolean} params.fetchUserInfo - 
     * @param {string} params.role - 
     * @param {string} params.status - Default value of status is LIVE.
     * @param {string} params.userId - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.blogs.listByUser = (params) => this._makeRequest('v3/users/{userId}/blogs', 'GET', params);

    this.blogUserInfos = {};

    /**
     * Gets one blog and user info pair by blog id and user id.
     * @param {string} params.blogId - (Required)
     * @param {integer} params.maxPosts - 
     * @param {string} params.userId - (Required)
     * @return {object} The API response object.
     */
    this.blogUserInfos.get = (params) => this._makeRequest('v3/users/{userId}/blogs/{blogId}', 'GET', params);

    this.pageViews = {};

    /**
     * Gets page views by blog id.
     * @param {string} params.blogId - (Required)
     * @param {string} params.range - 
     * @return {object} The API response object.
     */
    this.pageViews.get = (params) => this._makeRequest('v3/blogs/{blogId}/pageviews', 'GET', params);

    this.postUserInfos = {};

    /**
     * Gets one post and user info pair, by post_id and user_id.
     * @param {string} params.blogId - (Required)
     * @param {integer} params.maxComments - 
     * @param {string} params.postId - (Required)
     * @param {string} params.userId - (Required)
     * @return {object} The API response object.
     */
    this.postUserInfos.get = (params) => this._makeRequest('v3/users/{userId}/blogs/{blogId}/posts/{postId}', 'GET', params);

    /**
     * Lists post and user info pairs.
     * @param {string} params.blogId - (Required)
     * @param {string} params.endDate - 
     * @param {boolean} params.fetchBodies - 
     * @param {string} params.labels - 
     * @param {integer} params.maxResults - 
     * @param {string} params.orderBy - 
     * @param {string} params.pageToken - 
     * @param {string} params.startDate - 
     * @param {string} params.status - 
     * @param {string} params.userId - (Required)
     * @param {string} params.view - 
     * @return {object} The API response object.
     */
    this.postUserInfos.list = (params) => this._makeRequest('v3/users/{userId}/blogs/{blogId}/posts', 'GET', params);

    this.users = {};

    /**
     * Gets one user by user_id.
     * @param {string} params.userId - (Required)
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('v3/users/{userId}', 'GET', params);
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
