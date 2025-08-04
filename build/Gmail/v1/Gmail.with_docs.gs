
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gmail.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.users = {};

    /**
     * Gets the current user's Gmail profile.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.getProfile = (params) => this._makeRequest('gmail/v1/users/{userId}/profile', 'GET', params);

    /**
     * Set up or update a push notification watch on the given user mailbox.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.watch = (params) => this._makeRequest('gmail/v1/users/{userId}/watch', 'POST', params);

    /**
     * Stop receiving push notifications for the given user mailbox.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.stop = (params) => this._makeRequest('gmail/v1/users/{userId}/stop', 'POST', params);

    this.users.drafts = {};

    /**
     * Immediately and permanently deletes the specified draft. Does not simply trash it.
     * @param {string} params.id - (Required) The ID of the draft to delete.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.drafts.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'DELETE', params);

    /**
     * Creates a new draft with the `DRAFT` label.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.drafts.create = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'POST', params);

    /**
     * Gets the specified draft.
     * @param {string} params.format - The format to return the draft in.
     * @param {string} params.id - (Required) The ID of the draft to retrieve.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.drafts.get = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'GET', params);

    /**
     * Lists the drafts in the user's mailbox.
     * @param {boolean} params.includeSpamTrash - Include drafts from `SPAM` and `TRASH` in the results.
     * @param {integer} params.maxResults - Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} params.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} params.q - Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.drafts.list = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'GET', params);

    /**
     * Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.drafts.send = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/send', 'POST', params);

    /**
     * Replaces a draft's content.
     * @param {string} params.id - (Required) The ID of the draft to update.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.drafts.update = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'PUT', params);

    this.users.history = {};

    /**
     * Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
     * @param {string} params.historyTypes - History types to be returned by the function
     * @param {string} params.labelId - Only return messages with a label matching the ID.
     * @param {integer} params.maxResults - Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} params.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} params.startHistoryId - Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.history.list = (params) => this._makeRequest('gmail/v1/users/{userId}/history', 'GET', params);

    this.users.messages = {};

    /**
     * Moves the specified message to the trash.
     * @param {string} params.id - (Required) The ID of the message to Trash.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.trash = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/trash', 'POST', params);

    /**
     * Removes the specified message from the trash.
     * @param {string} params.id - (Required) The ID of the message to remove from Trash.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.untrash = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/untrash', 'POST', params);

    /**
     * Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
     * @param {string} params.id - (Required) The ID of the message to delete.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'DELETE', params);

    /**
     * Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.batchDelete = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/batchDelete', 'POST', params);

    /**
     * Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message.
     * @param {boolean} params.deleted - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     * @param {string} params.internalDateSource - Source for Gmail's internal date of the message.
     * @param {boolean} params.neverMarkSpam - Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
     * @param {boolean} params.processForCalendar - Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.import = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/import', 'POST', params);

    /**
     * Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
     * @param {boolean} params.deleted - Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     * @param {string} params.internalDateSource - Source for Gmail's internal date of the message.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.insert = (params) => this._makeRequest('gmail/v1/users/{userId}/messages', 'POST', params);

    /**
     * Gets the specified message.
     * @param {string} params.format - The format to return the message in.
     * @param {string} params.id - (Required) The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).
     * @param {string} params.metadataHeaders - When given and format is `METADATA`, only include headers specified.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.get = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'GET', params);

    /**
     * Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/workspace/gmail/api/guides/sending).
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.send = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/send', 'POST', params);

    /**
     * Lists the messages in the user's mailbox. For example usage, see [List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages).
     * @param {boolean} params.includeSpamTrash - Include messages from `SPAM` and `TRASH` in the results.
     * @param {string} params.labelIds - Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/workspace/gmail/api/guides/labels#manage_labels_on_messages_threads).
     * @param {integer} params.maxResults - Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} params.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} params.q - Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.list = (params) => this._makeRequest('gmail/v1/users/{userId}/messages', 'GET', params);

    /**
     * Modifies the labels on the specified message.
     * @param {string} params.id - (Required) The ID of the message to modify.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.modify = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/modify', 'POST', params);

    /**
     * Modifies the labels on the specified messages.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.messages.batchModify = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/batchModify', 'POST', params);

    this.users.messages.attachments = {};

    /**
     * Gets the specified message attachment.
     * @param {string} params.id - (Required) The ID of the attachment.
     * @param {string} params.messageId - (Required) The ID of the message containing the attachment.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.messages.attachments.get = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}', 'GET', params);

    this.users.labels = {};

    /**
     * Creates a new label.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.labels.create = (params) => this._makeRequest('gmail/v1/users/{userId}/labels', 'POST', params);

    /**
     * Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
     * @param {string} params.id - (Required) The ID of the label to delete.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.labels.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'DELETE', params);

    /**
     * Gets the specified label.
     * @param {string} params.id - (Required) The ID of the label to retrieve.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.labels.get = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'GET', params);

    /**
     * Lists all labels in the user's mailbox.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.labels.list = (params) => this._makeRequest('gmail/v1/users/{userId}/labels', 'GET', params);

    /**
     * Updates the specified label.
     * @param {string} params.id - (Required) The ID of the label to update.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.labels.update = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PUT', params);

    /**
     * Patch the specified label.
     * @param {string} params.id - (Required) The ID of the label to update.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.labels.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PATCH', params);

    this.users.threads = {};

    /**
     * Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
     * @param {string} params.id - (Required) The ID of the thread to Trash.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.threads.trash = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/trash', 'POST', params);

    /**
     * Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
     * @param {string} params.id - (Required) The ID of the thread to remove from Trash.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.threads.untrash = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/untrash', 'POST', params);

    /**
     * Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
     * @param {string} params.id - (Required) ID of the Thread to delete.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.threads.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'DELETE', params);

    /**
     * Gets the specified thread.
     * @param {string} params.format - The format to return the messages in.
     * @param {string} params.id - (Required) The ID of the thread to retrieve.
     * @param {string} params.metadataHeaders - When given and format is METADATA, only include headers specified.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.threads.get = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'GET', params);

    /**
     * Lists the threads in the user's mailbox.
     * @param {boolean} params.includeSpamTrash - Include threads from `SPAM` and `TRASH` in the results.
     * @param {string} params.labelIds - Only return threads with labels that match all of the specified label IDs.
     * @param {integer} params.maxResults - Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.
     * @param {string} params.pageToken - Page token to retrieve a specific page of results in the list.
     * @param {string} params.q - Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.threads.list = (params) => this._makeRequest('gmail/v1/users/{userId}/threads', 'GET', params);

    /**
     * Modifies the labels applied to the thread. This applies to all messages in the thread.
     * @param {string} params.id - (Required) The ID of the thread to modify.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.threads.modify = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/modify', 'POST', params);

    this.users.settings = {};

    /**
     * Gets IMAP settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.getImap = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'GET', params);

    /**
     * Updates IMAP settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.updateImap = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'PUT', params);

    /**
     * Gets POP settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.getPop = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'GET', params);

    /**
     * Updates POP settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.updatePop = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'PUT', params);

    /**
     * Gets vacation responder settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.getVacation = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'GET', params);

    /**
     * Updates vacation responder settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.updateVacation = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'PUT', params);

    /**
     * Gets language settings.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.getLanguage = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'GET', params);

    /**
     * Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.updateLanguage = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'PUT', params);

    /**
     * Gets the auto-forwarding setting for the specified account.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.getAutoForwarding = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'GET', params);

    /**
     * Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.updateAutoForwarding = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'PUT', params);

    this.users.settings.sendAs = {};

    /**
     * Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'GET', params);

    /**
     * Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
     * @param {string} params.sendAsEmail - (Required) The send-as alias to be retrieved.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'GET', params);

    /**
     * Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'POST', params);

    /**
     * Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
     * @param {string} params.sendAsEmail - (Required) The send-as alias to be updated.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.update = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PUT', params);

    /**
     * Patch the specified send-as alias.
     * @param {string} params.sendAsEmail - (Required) The send-as alias to be updated.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PATCH', params);

    /**
     * Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.sendAsEmail - (Required) The send-as alias to be deleted.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'DELETE', params);

    /**
     * Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.sendAsEmail - (Required) The send-as alias to be verified.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.verify = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify', 'POST', params);

    this.users.settings.sendAs.smimeInfo = {};

    /**
     * Lists S/MIME configs for the specified send-as alias.
     * @param {string} params.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.smimeInfo.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'GET', params);

    /**
     * Gets the specified S/MIME config for the specified send-as alias.
     * @param {string} params.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.smimeInfo.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'GET', params);

    /**
     * Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
     * @param {string} params.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.smimeInfo.insert = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'POST', params);

    /**
     * Deletes the specified S/MIME config for the specified send-as alias.
     * @param {string} params.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.smimeInfo.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'DELETE', params);

    /**
     * Sets the default S/MIME config for the specified send-as alias.
     * @param {string} params.id - (Required) The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail - (Required) The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId - (Required) The user's email address. The special value `me` can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.sendAs.smimeInfo.setDefault = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault', 'POST', params);

    this.users.settings.cse = {};

    this.users.settings.cse.identities = {};

    /**
     * Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.identities.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'POST', params);

    /**
     * Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.cseEmailAddress - (Required) The primary email address associated with the client-side encryption identity configuration that's removed.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @return {object} The API response object.
     */
    this.users.settings.cse.identities.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'DELETE', params);

    /**
     * Retrieves a client-side encryption identity configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.cseEmailAddress - (Required) The primary email address associated with the client-side encryption identity configuration that's retrieved.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @return {object} The API response object.
     */
    this.users.settings.cse.identities.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'GET', params);

    /**
     * Lists the client-side encrypted identities for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {integer} params.pageSize - The number of identities to return. If not provided, the page size will default to 20 entries.
     * @param {string} params.pageToken - Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @return {object} The API response object.
     */
    this.users.settings.cse.identities.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'GET', params);

    /**
     * Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.emailAddress - (Required) The email address of the client-side encryption identity to update.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.identities.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}', 'PATCH', params);

    this.users.settings.cse.keypairs = {};

    /**
     * Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'POST', params);

    /**
     * Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.keyPairId - (Required) The identifier of the key pair to turn off.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.disable = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable', 'POST', params);

    /**
     * Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.keyPairId - (Required) The identifier of the key pair to turn on.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.enable = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable', 'POST', params);

    /**
     * Retrieves an existing client-side encryption key pair. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.keyPairId - (Required) The identifier of the key pair to retrieve.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}', 'GET', params);

    /**
     * Lists client-side encryption key pairs for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {integer} params.pageSize - The number of key pairs to return. If not provided, the page size will default to 20 entries.
     * @param {string} params.pageToken - Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'GET', params);

    /**
     * Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.
     * @param {string} params.keyPairId - (Required) The identifier of the key pair to obliterate.
     * @param {string} params.userId - (Required) The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.cse.keypairs.obliterate = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate', 'POST', params);

    this.users.settings.filters = {};

    /**
     * Lists the message filters of a Gmail user.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.filters.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'GET', params);

    /**
     * Gets a filter.
     * @param {string} params.id - (Required) The ID of the filter to be fetched.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.filters.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'GET', params);

    /**
     * Creates a filter. Note: you can only create a maximum of 1,000 filters.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.filters.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'POST', params);

    /**
     * Immediately and permanently deletes the specified filter.
     * @param {string} params.id - (Required) The ID of the filter to be deleted.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.filters.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'DELETE', params);

    this.users.settings.forwardingAddresses = {};

    /**
     * Lists the forwarding addresses for the specified account.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.forwardingAddresses.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'GET', params);

    /**
     * Gets the specified forwarding address.
     * @param {string} params.forwardingEmail - (Required) The forwarding address to be retrieved.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.forwardingAddresses.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'GET', params);

    /**
     * Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.forwardingAddresses.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'POST', params);

    /**
     * Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.forwardingEmail - (Required) The forwarding address to be deleted.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.forwardingAddresses.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'DELETE', params);

    this.users.settings.delegates = {};

    /**
     * Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.delegates.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'GET', params);

    /**
     * Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.delegateEmail - (Required) The email address of the user whose delegate relationship is to be retrieved.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.delegates.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'GET', params);

    /**
     * Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.settings.delegates.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'POST', params);

    /**
     * Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @param {string} params.delegateEmail - (Required) The email address of the user to be removed as a delegate.
     * @param {string} params.userId - (Required) User's email address. The special value "me" can be used to indicate the authenticated user.
     * @return {object} The API response object.
     */
    this.users.settings.delegates.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'DELETE', params);
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
