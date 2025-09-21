
/**
 * Google Apps Script client library for the Gmail API
 * Documentation URL: https://developers.google.com/workspace/gmail/api/
 * @class
 */
class Gmail {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gmail.googleapis.com/';
    this._servicePath = '';


    this.users = {};

    /**
     * Gets the current user's Gmail profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.getProfile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/profile', 'GET', apiParams, clientConfig);

    /**
     * Set up or update a push notification watch on the given user mailbox.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/watch', 'POST', apiParams, clientConfig);

    /**
     * Stop receiving push notifications for the given user mailbox.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/stop', 'POST', apiParams, clientConfig);

    this.users.drafts = {};

    /**
     * Immediately and permanently deletes the specified draft. Does not simply trash it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the draft to delete.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new draft with the `DRAFT` label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.create = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts' : 'gmail/v1/users/{userId}/drafts';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Gets the specified draft.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.format - The format to return the draft in.
     * @param {string} apiParams.id - (Required) The ID of the draft to retrieve.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'GET', apiParams, clientConfig);

    /**
     * Lists the drafts in the user's mailbox.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSpamTrash - Include drafts from `SPAM` and `TRASH` in the results.
     * @param {integer} apiParams.maxResults - Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} apiParams.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} apiParams.q - Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'GET', apiParams, clientConfig);

    /**
     * Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.send = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts/send' : 'gmail/v1/users/{userId}/drafts/send';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Replaces a draft's content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the draft to update.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.drafts.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts/{id}' : 'gmail/v1/users/{userId}/drafts/{id}';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };

    this.users.history = {};

    /**
     * Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.historyTypes - History types to be returned by the function
     * @param {string} apiParams.labelId - Only return messages with a label matching the ID.
     * @param {integer} apiParams.maxResults - Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} apiParams.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} apiParams.startHistoryId - Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.history.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/history', 'GET', apiParams, clientConfig);

    this.users.messages = {};

    /**
     * Moves the specified message to the trash.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the message to Trash.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/trash', 'POST', apiParams, clientConfig);

    /**
     * Removes the specified message from the trash.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the message to remove from Trash.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/untrash', 'POST', apiParams, clientConfig);

    /**
     * Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the message to delete.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     * @param {string} apiParams.internalDateSource - Source for Gmail's internal date of the message.
     * @param {boolean} apiParams.neverMarkSpam - Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
     * @param {boolean} apiParams.processForCalendar - Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.import = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages/import' : 'gmail/v1/users/{userId}/messages/import';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleted - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     * @param {string} apiParams.internalDateSource - Source for Gmail's internal date of the message.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages' : 'gmail/v1/users/{userId}/messages';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Gets the specified message.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.format - The format to return the message in.
     * @param {string} apiParams.id - (Required) The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).
     * @param {string} apiParams.metadataHeaders - When given and format is `METADATA`, only include headers specified.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'GET', apiParams, clientConfig);

    /**
     * Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/workspace/gmail/api/guides/sending).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.send = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages/send' : 'gmail/v1/users/{userId}/messages/send';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Lists the messages in the user's mailbox. For example usage, see [List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSpamTrash - Include messages from `SPAM` and `TRASH` in the results.
     * @param {string} apiParams.labelIds - Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/workspace/gmail/api/guides/labels#manage_labels_on_messages_threads).
     * @param {integer} apiParams.maxResults - Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} apiParams.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} apiParams.q - Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages', 'GET', apiParams, clientConfig);

    /**
     * Modifies the labels on the specified message.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the message to modify.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.modify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/modify', 'POST', apiParams, clientConfig);

    /**
     * Modifies the labels on the specified messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.batchModify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/batchModify', 'POST', apiParams, clientConfig);

    this.users.messages.attachments = {};

    /**
     * Gets the specified message attachment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the attachment.
     * @param {string} apiParams.messageId - (Required) The ID of the message containing the attachment.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.messages.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}', 'GET', apiParams, clientConfig);

    this.users.labels = {};

    /**
     * Creates a new label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels', 'POST', apiParams, clientConfig);

    /**
     * Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the label to delete.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the label to retrieve.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'GET', apiParams, clientConfig);

    /**
     * Lists all labels in the user's mailbox.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the label to update.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PUT', apiParams, clientConfig);

    /**
     * Patch the specified label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the label to update.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.labels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PATCH', apiParams, clientConfig);

    this.users.threads = {};

    /**
     * Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the thread to Trash.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/trash', 'POST', apiParams, clientConfig);

    /**
     * Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the thread to remove from Trash.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/untrash', 'POST', apiParams, clientConfig);

    /**
     * Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) ID of the Thread to delete.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified thread.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.format - The format to return the messages in.
     * @param {string} apiParams.id - (Required) The ID of the thread to retrieve.
     * @param {string} apiParams.metadataHeaders - When given and format is METADATA, only include headers specified.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'GET', apiParams, clientConfig);

    /**
     * Lists the threads in the user's mailbox.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSpamTrash - Include threads from `SPAM` and `TRASH` in the results.
     * @param {string} apiParams.labelIds - Only return threads with labels that match all of the specified label IDs.
     * @param {integer} apiParams.maxResults - Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} apiParams.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} apiParams.q - Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads', 'GET', apiParams, clientConfig);

    /**
     * Modifies the labels applied to the thread. This applies to all messages in the thread.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the thread to modify.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.threads.modify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/modify', 'POST', apiParams, clientConfig);

    this.users.settings = {};

    /**
     * Gets IMAP settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.getImap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'GET', apiParams, clientConfig);

    /**
     * Updates IMAP settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.updateImap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'PUT', apiParams, clientConfig);

    /**
     * Gets POP settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.getPop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'GET', apiParams, clientConfig);

    /**
     * Updates POP settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.updatePop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'PUT', apiParams, clientConfig);

    /**
     * Gets vacation responder settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.getVacation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'GET', apiParams, clientConfig);

    /**
     * Updates vacation responder settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.updateVacation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'PUT', apiParams, clientConfig);

    /**
     * Gets language settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.getLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'GET', apiParams, clientConfig);

    /**
     * Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.updateLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'PUT', apiParams, clientConfig);

    /**
     * Gets the auto-forwarding setting for the specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.getAutoForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'GET', apiParams, clientConfig);

    /**
     * Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.updateAutoForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'PUT', apiParams, clientConfig);

    this.users.settings.sendAs = {};

    /**
     * Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The send-as alias to be retrieved.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'GET', apiParams, clientConfig);

    /**
     * Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'POST', apiParams, clientConfig);

    /**
     * Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The send-as alias to be updated.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PUT', apiParams, clientConfig);

    /**
     * Patch the specified send-as alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The send-as alias to be updated.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The send-as alias to be deleted.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'DELETE', apiParams, clientConfig);

    /**
     * Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The send-as alias to be verified.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify', 'POST', apiParams, clientConfig);

    this.users.settings.sendAs.smimeInfo = {};

    /**
     * Lists S/MIME configs for the specified send-as alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.smimeInfo.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified S/MIME config for the specified send-as alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} apiParams.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.smimeInfo.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'GET', apiParams, clientConfig);

    /**
     * Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.smimeInfo.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified S/MIME config for the specified send-as alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} apiParams.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.smimeInfo.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'DELETE', apiParams, clientConfig);

    /**
     * Sets the default S/MIME config for the specified send-as alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} apiParams.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} apiParams.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.sendAs.smimeInfo.setDefault = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault', 'POST', apiParams, clientConfig);

    this.users.settings.cse = {};

    this.users.settings.cse.identities = {};

    /**
     * Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.identities.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'POST', apiParams, clientConfig);

    /**
     * Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cseEmailAddress - (Required) The primary email address associated with the client-side encryption identity configuration that's removed.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.identities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a client-side encryption identity configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cseEmailAddress - (Required) The primary email address associated with the client-side encryption identity configuration that's retrieved.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.identities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'GET', apiParams, clientConfig);

    /**
     * Lists the client-side encrypted identities for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The number of identities to return. If not provided, the page size will default to 20 entries.
     * @param {string} apiParams.pageToken - Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.identities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'GET', apiParams, clientConfig);

    /**
     * Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.emailAddress - (Required) The email address of the client-side encryption identity to update.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.identities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}', 'PATCH', apiParams, clientConfig);

    this.users.settings.cse.keypairs = {};

    /**
     * Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'POST', apiParams, clientConfig);

    /**
     * Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.keyPairId - (Required) The identifier of the key pair to turn off.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable', 'POST', apiParams, clientConfig);

    /**
     * Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.keyPairId - (Required) The identifier of the key pair to turn on.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable', 'POST', apiParams, clientConfig);

    /**
     * Retrieves an existing client-side encryption key pair. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.keyPairId - (Required) The identifier of the key pair to retrieve.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}', 'GET', apiParams, clientConfig);

    /**
     * Lists client-side encryption key pairs for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The number of key pairs to return. If not provided, the page size will default to 20 entries.
     * @param {string} apiParams.pageToken - Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'GET', apiParams, clientConfig);

    /**
     * Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.keyPairId - (Required) The identifier of the key pair to obliterate.
     * @param {string} apiParams.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.cse.keypairs.obliterate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate', 'POST', apiParams, clientConfig);

    this.users.settings.filters = {};

    /**
     * Lists the message filters of a Gmail user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.filters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'GET', apiParams, clientConfig);

    /**
     * Gets a filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the filter to be fetched.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.filters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'GET', apiParams, clientConfig);

    /**
     * Creates a filter. Note: you can only create a maximum of 1,000 filters.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.filters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'POST', apiParams, clientConfig);

    /**
     * Immediately and permanently deletes the specified filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the filter to be deleted.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.filters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'DELETE', apiParams, clientConfig);

    this.users.settings.forwardingAddresses = {};

    /**
     * Lists the forwarding addresses for the specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.forwardingAddresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified forwarding address.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.forwardingEmail - (Required) The forwarding address to be retrieved.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.forwardingAddresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'GET', apiParams, clientConfig);

    /**
     * Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.forwardingAddresses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.forwardingEmail - (Required) The forwarding address to be deleted.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.forwardingAddresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'DELETE', apiParams, clientConfig);

    this.users.settings.delegates = {};

    /**
     * Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.delegates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.delegateEmail - (Required) The email address of the user whose delegate relationship is to be retrieved.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.delegates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'GET', apiParams, clientConfig);

    /**
     * Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.delegates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'POST', apiParams, clientConfig);

    /**
     * Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.delegateEmail - (Required) The email address of the user to be removed as a delegate.
     * @param {string} apiParams.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.settings.delegates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'DELETE', apiParams, clientConfig);
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
