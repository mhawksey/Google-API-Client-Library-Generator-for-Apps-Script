
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://tasks.googleapis.com/';
    this._servicePath = '';


    this.tasks = {};

    /**
     * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.clear = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/clear', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified task from the task list. If the task is assigned, both the assigned task and the original task (in Docs, Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.task - (Required) Task identifier.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the specified task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.task - (Required) Task identifier.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional.
     * @param {string} apiParams.previous - Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks', 'POST', apiParams, clientConfig);

    /**
     * Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.completedMax - Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param {string} apiParams.completedMin - Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param {string} apiParams.dueMax - Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param {string} apiParams.dueMin - Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param {integer} apiParams.maxResults - Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
     * @param {string} apiParams.pageToken - Token specifying the result page to return. Optional.
     * @param {boolean} apiParams.showAssigned - Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False.
     * @param {boolean} apiParams.showCompleted - Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True.
     * @param {boolean} apiParams.showDeleted - Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     * @param {boolean} apiParams.showHidden - Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {string} apiParams.updatedMin - Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks', 'GET', apiParams, clientConfig);

    /**
     * Moves the specified task to another position in the destination task list. If the destination list is not specified, the task is moved within its current list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinationTasklist - Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists.
     * @param {string} apiParams.parent - Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden. Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty.
     * @param {string} apiParams.previous - Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden. Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty.
     * @param {string} apiParams.task - (Required) Task identifier.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}/move', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified task. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.task - (Required) Task identifier.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the specified task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.task - (Required) Task identifier.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/lists/{tasklist}/tasks/{task}', 'PUT', apiParams, clientConfig);

    this.tasklists = {};

    /**
     * Deletes the authenticated user's specified task list. If the list contains assigned tasks, both the assigned tasks and the original tasks in the assignment surface (Docs, Chat Spaces) are deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the authenticated user's specified task list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists', 'POST', apiParams, clientConfig);

    /**
     * Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000).
     * @param {string} apiParams.pageToken - Token specifying the result page to return. Optional.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists', 'GET', apiParams, clientConfig);

    /**
     * Updates the authenticated user's specified task list. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the authenticated user's specified task list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.tasklist - (Required) Task list identifier.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tasklists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tasks/v1/users/@me/lists/{tasklist}', 'PUT', apiParams, clientConfig);
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
