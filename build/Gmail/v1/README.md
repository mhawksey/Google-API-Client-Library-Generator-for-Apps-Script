# Gmail API - Apps Script Client Library

Auto-generated client library for using the **Gmail API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:06:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:49 GMT
- **Created:** Sun, 20 Jul 2025 16:34:40 GMT



---

## API Reference

### `users`

#### `users.getProfile()`

Gets the current user's Gmail profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |

#### `users.watch()`

Set up or update a push notification watch on the given user mailbox.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.stop()`

Stop receiving push notifications for the given user mailbox.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |

### `users.drafts`

#### `users.drafts.delete()`

Immediately and permanently deletes the specified draft. Does not simply trash it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the draft to delete. |

#### `users.drafts.create()`

Creates a new draft with the `DRAFT` label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.drafts.get()`

Gets the specified draft.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the draft to retrieve. |
| `params.format` | `string` | No | The format to return the draft in. |

#### `users.drafts.list()`

Lists the drafts in the user's mailbox.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.maxResults` | `integer` | No | Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500. |
| `params.pageToken` | `string` | No | Page token to retrieve a specific page of results in the list. |
| `params.q` | `string` | No | Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. |
| `params.includeSpamTrash` | `boolean` | No | Include drafts from `SPAM` and `TRASH` in the results. |

#### `users.drafts.send()`

Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.drafts.update()`

Replaces a draft's content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the draft to update. |
| `params.resource` | `object` | Yes | The request body. |

### `users.history`

#### `users.history.list()`

Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.maxResults` | `integer` | No | Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500. |
| `params.pageToken` | `string` | No | Page token to retrieve a specific page of results in the list. |
| `params.startHistoryId` | `string` | No | Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request. |
| `params.labelId` | `string` | No | Only return messages with a label matching the ID. |
| `params.historyTypes` | `string` | No | History types to be returned by the function |

### `users.messages`

#### `users.messages.trash()`

Moves the specified message to the trash.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the message to Trash. |

#### `users.messages.untrash()`

Removes the specified message from the trash.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the message to remove from Trash. |

#### `users.messages.delete()`

Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the message to delete. |

#### `users.messages.batchDelete()`

Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.messages.import()`

Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.internalDateSource` | `string` | No | Source for Gmail's internal date of the message. |
| `params.neverMarkSpam` | `boolean` | No | Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox. |
| `params.processForCalendar` | `boolean` | No | Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user. |
| `params.deleted` | `boolean` | No | Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.messages.insert()`

Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.internalDateSource` | `string` | No | Source for Gmail's internal date of the message. |
| `params.deleted` | `boolean` | No | Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.messages.get()`

Gets the specified message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`). |
| `params.format` | `string` | No | The format to return the message in. |
| `params.metadataHeaders` | `string` | No | When given and format is `METADATA`, only include headers specified. |

#### `users.messages.send()`

Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/workspace/gmail/api/guides/sending).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.messages.list()`

Lists the messages in the user's mailbox. For example usage, see [List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.maxResults` | `integer` | No | Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500. |
| `params.pageToken` | `string` | No | Page token to retrieve a specific page of results in the list. |
| `params.q` | `string` | No | Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope. |
| `params.labelIds` | `string` | No | Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/workspace/gmail/api/guides/labels#manage_labels_on_messages_threads). |
| `params.includeSpamTrash` | `boolean` | No | Include messages from `SPAM` and `TRASH` in the results. |

#### `users.messages.modify()`

Modifies the labels on the specified message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the message to modify. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.messages.batchModify()`

Modifies the labels on the specified messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

### `users.messages.attachments`

#### `users.messages.attachments.get()`

Gets the specified message attachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.messageId` | `string` | Yes | The ID of the message containing the attachment. |
| `params.id` | `string` | Yes | The ID of the attachment. |

### `users.labels`

#### `users.labels.create()`

Creates a new label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.labels.delete()`

Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the label to delete. |

#### `users.labels.get()`

Gets the specified label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the label to retrieve. |

#### `users.labels.list()`

Lists all labels in the user's mailbox.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |

#### `users.labels.update()`

Updates the specified label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the label to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.labels.patch()`

Patch the specified label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the label to update. |
| `params.resource` | `object` | Yes | The request body. |

### `users.threads`

#### `users.threads.trash()`

Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the thread to Trash. |

#### `users.threads.untrash()`

Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the thread to remove from Trash. |

#### `users.threads.delete()`

Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | ID of the Thread to delete. |

#### `users.threads.get()`

Gets the specified thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the thread to retrieve. |
| `params.format` | `string` | No | The format to return the messages in. |
| `params.metadataHeaders` | `string` | No | When given and format is METADATA, only include headers specified. |

#### `users.threads.list()`

Lists the threads in the user's mailbox.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.maxResults` | `integer` | No | Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500. |
| `params.pageToken` | `string` | No | Page token to retrieve a specific page of results in the list. |
| `params.q` | `string` | No | Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope. |
| `params.labelIds` | `string` | No | Only return threads with labels that match all of the specified label IDs. |
| `params.includeSpamTrash` | `boolean` | No | Include threads from `SPAM` and `TRASH` in the results. |

#### `users.threads.modify()`

Modifies the labels applied to the thread. This applies to all messages in the thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the thread to modify. |
| `params.resource` | `object` | Yes | The request body. |

### `users.settings`

#### `users.settings.getImap()`

Gets IMAP settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.updateImap()`

Updates IMAP settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.getPop()`

Gets POP settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.updatePop()`

Updates POP settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.getVacation()`

Gets vacation responder settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.updateVacation()`

Updates vacation responder settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.getLanguage()`

Gets language settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.updateLanguage()`

Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.getAutoForwarding()`

Gets the auto-forwarding setting for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.updateAutoForwarding()`

Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

### `users.settings.sendAs`

#### `users.settings.sendAs.list()`

Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.sendAs.get()`

Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The send-as alias to be retrieved. |

#### `users.settings.sendAs.create()`

Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.sendAs.update()`

Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The send-as alias to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.sendAs.patch()`

Patch the specified send-as alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The send-as alias to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.sendAs.delete()`

Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The send-as alias to be deleted. |

#### `users.settings.sendAs.verify()`

Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The send-as alias to be verified. |

### `users.settings.sendAs.smimeInfo`

#### `users.settings.sendAs.smimeInfo.list()`

Lists S/MIME configs for the specified send-as alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The email address that appears in the "From:" header for mail sent using this alias. |

#### `users.settings.sendAs.smimeInfo.get()`

Gets the specified S/MIME config for the specified send-as alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The email address that appears in the "From:" header for mail sent using this alias. |
| `params.id` | `string` | Yes | The immutable ID for the SmimeInfo. |

#### `users.settings.sendAs.smimeInfo.insert()`

Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The email address that appears in the "From:" header for mail sent using this alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.sendAs.smimeInfo.delete()`

Deletes the specified S/MIME config for the specified send-as alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The email address that appears in the "From:" header for mail sent using this alias. |
| `params.id` | `string` | Yes | The immutable ID for the SmimeInfo. |

#### `users.settings.sendAs.smimeInfo.setDefault()`

Sets the default S/MIME config for the specified send-as alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The user's email address. The special value `me` can be used to indicate the authenticated user. |
| `params.sendAsEmail` | `string` | Yes | The email address that appears in the "From:" header for mail sent using this alias. |
| `params.id` | `string` | Yes | The immutable ID for the SmimeInfo. |

### `users.settings.cse`

### `users.settings.cse.identities`

#### `users.settings.cse.identities.create()`

Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.cse.identities.delete()`

Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.cseEmailAddress` | `string` | Yes | The primary email address associated with the client-side encryption identity configuration that's removed. |

#### `users.settings.cse.identities.get()`

Retrieves a client-side encryption identity configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.cseEmailAddress` | `string` | Yes | The primary email address associated with the client-side encryption identity configuration that's retrieved. |

#### `users.settings.cse.identities.list()`

Lists the client-side encrypted identities for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.pageToken` | `string` | No | Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results. |
| `params.pageSize` | `integer` | No | The number of identities to return. If not provided, the page size will default to 20 entries. |

#### `users.settings.cse.identities.patch()`

Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.emailAddress` | `string` | Yes | The email address of the client-side encryption identity to update. |
| `params.resource` | `object` | Yes | The request body. |

### `users.settings.cse.keypairs`

#### `users.settings.cse.keypairs.create()`

Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.cse.keypairs.disable()`

Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.keyPairId` | `string` | Yes | The identifier of the key pair to turn off. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.cse.keypairs.enable()`

Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.keyPairId` | `string` | Yes | The identifier of the key pair to turn on. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.cse.keypairs.get()`

Retrieves an existing client-side encryption key pair. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.keyPairId` | `string` | Yes | The identifier of the key pair to retrieve. |

#### `users.settings.cse.keypairs.list()`

Lists client-side encryption key pairs for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.pageToken` | `string` | No | Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results. |
| `params.pageSize` | `integer` | No | The number of key pairs to return. If not provided, the page size will default to 20 entries. |

#### `users.settings.cse.keypairs.obliterate()`

Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. |
| `params.keyPairId` | `string` | Yes | The identifier of the key pair to obliterate. |
| `params.resource` | `object` | Yes | The request body. |

### `users.settings.filters`

#### `users.settings.filters.list()`

Lists the message filters of a Gmail user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.filters.get()`

Gets a filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the filter to be fetched. |

#### `users.settings.filters.create()`

Creates a filter. Note: you can only create a maximum of 1,000 filters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.filters.delete()`

Immediately and permanently deletes the specified filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.id` | `string` | Yes | The ID of the filter to be deleted. |

### `users.settings.forwardingAddresses`

#### `users.settings.forwardingAddresses.list()`

Lists the forwarding addresses for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.forwardingAddresses.get()`

Gets the specified forwarding address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.forwardingEmail` | `string` | Yes | The forwarding address to be retrieved. |

#### `users.settings.forwardingAddresses.create()`

Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.forwardingAddresses.delete()`

Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.forwardingEmail` | `string` | Yes | The forwarding address to be deleted. |

### `users.settings.delegates`

#### `users.settings.delegates.list()`

Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |

#### `users.settings.delegates.get()`

Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.delegateEmail` | `string` | Yes | The email address of the user whose delegate relationship is to be retrieved. |

#### `users.settings.delegates.create()`

Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.settings.delegates.delete()`

Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | User's email address. The special value "me" can be used to indicate the authenticated user. |
| `params.delegateEmail` | `string` | Yes | The email address of the user to be removed as a delegate. |