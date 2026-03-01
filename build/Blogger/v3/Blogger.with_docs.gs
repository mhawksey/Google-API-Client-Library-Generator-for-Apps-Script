
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://blogger.googleapis.com/';
    this._servicePath = '';


    this.comments = {};

    /**
     * Marks a comment as not spam by blog id, post id and comment id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.commentId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve', 'POST', apiParams, clientConfig);

    /**
     * Deletes a comment by blog id, post id and comment id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.commentId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a comment by id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.commentId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}', 'GET', apiParams, clientConfig);

    /**
     * Lists comments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.endDate - 
     * @param {boolean} apiParams.fetchBodies - 
     * @param {integer} apiParams.maxResults - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.postId - (Required)
     * @param {string} apiParams.startDate - 
     * @param {string} apiParams.status - 
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments', 'GET', apiParams, clientConfig);

    /**
     * Lists comments by blog.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.endDate - 
     * @param {boolean} apiParams.fetchBodies - 
     * @param {integer} apiParams.maxResults - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.startDate - 
     * @param {string} apiParams.status - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.listByBlog = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/comments', 'GET', apiParams, clientConfig);

    /**
     * Marks a comment as spam by blog id, post id and comment id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.commentId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.markAsSpam = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam', 'POST', apiParams, clientConfig);

    /**
     * Removes the content of a comment by blog id, post id and comment id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.commentId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.removeContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent', 'POST', apiParams, clientConfig);

    this.pages = {};

    /**
     * Deletes a page by blog id and page id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {boolean} apiParams.useTrash - Move to Trash if possible
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a page by blog id and page id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.isDraft - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages', 'POST', apiParams, clientConfig);

    /**
     * Lists pages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBodies - 
     * @param {integer} apiParams.maxResults - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.status - 
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages', 'GET', apiParams, clientConfig);

    /**
     * Patches a page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {boolean} apiParams.publish - 
     * @param {boolean} apiParams.revert - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'PATCH', apiParams, clientConfig);

    /**
     * Publishes a page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}/publish', 'POST', apiParams, clientConfig);

    /**
     * Reverts a published or scheduled page to draft state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}/revert', 'POST', apiParams, clientConfig);

    /**
     * Updates a page by blog id and page id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.pageId - (Required)
     * @param {boolean} apiParams.publish - 
     * @param {boolean} apiParams.revert - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pages/{pageId}', 'PUT', apiParams, clientConfig);

    this.posts = {};

    /**
     * Deletes a post by blog id and post id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {boolean} apiParams.useTrash - Move to Trash if possible
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a post by blog id and post id
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBody - 
     * @param {boolean} apiParams.fetchImages - 
     * @param {integer} apiParams.maxComments - 
     * @param {string} apiParams.postId - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'GET', apiParams, clientConfig);

    /**
     * Gets a post by path.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {integer} apiParams.maxComments - 
     * @param {string} apiParams.path - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.getByPath = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/bypath', 'GET', apiParams, clientConfig);

    /**
     * Inserts a post.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBody - 
     * @param {boolean} apiParams.fetchImages - 
     * @param {boolean} apiParams.isDraft - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts', 'POST', apiParams, clientConfig);

    /**
     * Lists posts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.endDate - 
     * @param {boolean} apiParams.fetchBodies - 
     * @param {boolean} apiParams.fetchImages - 
     * @param {string} apiParams.labels - 
     * @param {integer} apiParams.maxResults - 
     * @param {string} apiParams.orderBy - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.sortOption - Sort direction applied to post list.
     * @param {string} apiParams.startDate - 
     * @param {string} apiParams.status - 
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts', 'GET', apiParams, clientConfig);

    /**
     * Patches a post.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBody - 
     * @param {boolean} apiParams.fetchImages - 
     * @param {integer} apiParams.maxComments - 
     * @param {string} apiParams.postId - (Required)
     * @param {boolean} apiParams.publish - 
     * @param {boolean} apiParams.revert - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'PATCH', apiParams, clientConfig);

    /**
     * Publishes a post.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {string} apiParams.publishDate - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/publish', 'POST', apiParams, clientConfig);

    /**
     * Reverts a published or scheduled post to draft state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.postId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}/revert', 'POST', apiParams, clientConfig);

    /**
     * Searches for posts matching given query terms in the specified blog.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBodies - 
     * @param {string} apiParams.orderBy - 
     * @param {string} apiParams.q - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/search', 'GET', apiParams, clientConfig);

    /**
     * Updates a post by blog id and post id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {boolean} apiParams.fetchBody - 
     * @param {boolean} apiParams.fetchImages - 
     * @param {integer} apiParams.maxComments - 
     * @param {string} apiParams.postId - (Required)
     * @param {boolean} apiParams.publish - 
     * @param {boolean} apiParams.revert - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.posts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/posts/{postId}', 'PUT', apiParams, clientConfig);

    this.blogs = {};

    /**
     * Gets a blog by id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {integer} apiParams.maxPosts - 
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.blogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}', 'GET', apiParams, clientConfig);

    /**
     * Gets a blog by url.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.url - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.blogs.getByUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/byurl', 'GET', apiParams, clientConfig);

    /**
     * Lists blogs by user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.fetchUserInfo - 
     * @param {string} apiParams.role - 
     * @param {string} apiParams.status - Default value of status is LIVE.
     * @param {string} apiParams.userId - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.blogs.listByUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/users/{userId}/blogs', 'GET', apiParams, clientConfig);

    this.blogUserInfos = {};

    /**
     * Gets one blog and user info pair by blog id and user id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {integer} apiParams.maxPosts - 
     * @param {string} apiParams.userId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.blogUserInfos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/users/{userId}/blogs/{blogId}', 'GET', apiParams, clientConfig);

    this.pageViews = {};

    /**
     * Gets page views by blog id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.range - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pageViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/blogs/{blogId}/pageviews', 'GET', apiParams, clientConfig);

    this.postUserInfos = {};

    /**
     * Gets one post and user info pair, by post_id and user_id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {integer} apiParams.maxComments - 
     * @param {string} apiParams.postId - (Required)
     * @param {string} apiParams.userId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.postUserInfos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/users/{userId}/blogs/{blogId}/posts/{postId}', 'GET', apiParams, clientConfig);

    /**
     * Lists post and user info pairs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.blogId - (Required)
     * @param {string} apiParams.endDate - 
     * @param {boolean} apiParams.fetchBodies - 
     * @param {string} apiParams.labels - 
     * @param {integer} apiParams.maxResults - 
     * @param {string} apiParams.orderBy - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.startDate - 
     * @param {string} apiParams.status - 
     * @param {string} apiParams.userId - (Required)
     * @param {string} apiParams.view - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.postUserInfos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/users/{userId}/blogs/{blogId}/posts', 'GET', apiParams, clientConfig);

    this.users = {};

    /**
     * Gets one user by user_id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/users/{userId}', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
