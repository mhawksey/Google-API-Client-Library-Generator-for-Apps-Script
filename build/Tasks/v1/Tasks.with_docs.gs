
/**
 * Google Apps Script client library for the Google Tasks API
 * Documentation URL: https://developers.google.com/workspace/tasks/
 * @class
 */
class Tasks {
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
    this._rootUrl = 'https://tasks.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.tasks = {};

    /**
     * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasks.clear = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/clear', 'POST', params);

    /**
     * Deletes the specified task from the task list. If the task is assigned, both the assigned task and the original task (in Docs, Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there.
     * @param {string} params.task - (Required) Task identifier.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasks.delete = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'DELETE', params);

    /**
     * Returns the specified task.
     * @param {string} params.task - (Required) Task identifier.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasks.get = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'GET', params);

    /**
     * Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @param {string} params.parent - Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.
     * @param {string} params.previous - Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasks.insert = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks', 'POST', params);

    /**
     * Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @param {string} params.completedMax - Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param {string} params.completedMin - Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param {string} params.dueMax - Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param {string} params.dueMin - Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param {integer} params.maxResults - Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
     * @param {string} params.pageToken - Token specifying the result page to return. Optional.
     * @param {boolean} params.showAssigned - Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.
     * @param {boolean} params.showCompleted - Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.
     * @param {boolean} params.showDeleted - Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     * @param {boolean} params.showHidden - Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {string} params.updatedMin - Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
     * @return {object} The API response object.
     */
    this.tasks.list = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks', 'GET', params);

    /**
     * Moves the specified task to another position in the destination task list. If the destination list is not specified, the task is moved within its current list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.
     * @param {string} params.destinationTasklist - Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists.
     * @param {string} params.parent - Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden. Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty.
     * @param {string} params.previous - Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden. Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty.
     * @param {string} params.task - (Required) Task identifier.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasks.move = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}/move', 'POST', params);

    /**
     * Updates the specified task. This method supports patch semantics.
     * @param {string} params.task - (Required) Task identifier.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasks.patch = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'PATCH', params);

    /**
     * Updates the specified task.
     * @param {string} params.task - (Required) Task identifier.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasks.update = (params) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'PUT', params);

    this.tasklists = {};

    /**
     * Deletes the authenticated user's specified task list. If the list contains assigned tasks, both the assigned tasks and the original tasks in the assignment surface (Docs, Chat Spaces) are deleted.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasklists.delete = (params) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'DELETE', params);

    /**
     * Returns the authenticated user's specified task list.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @return {object} The API response object.
     */
    this.tasklists.get = (params) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'GET', params);

    /**
     * Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasklists.insert = (params) => this._makeRequest('tasks/v1/users/@me/lists', 'POST', params);

    /**
     * Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @param {integer} params.maxResults - Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).
     * @param {string} params.pageToken - Token specifying the result page to return. Optional.
     * @return {object} The API response object.
     */
    this.tasklists.list = (params) => this._makeRequest('tasks/v1/users/@me/lists', 'GET', params);

    /**
     * Updates the authenticated user's specified task list. This method supports patch semantics.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasklists.patch = (params) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'PATCH', params);

    /**
     * Updates the authenticated user's specified task list.
     * @param {string} params.tasklist - (Required) Task list identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tasklists.update = (params) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'PUT', params);
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
