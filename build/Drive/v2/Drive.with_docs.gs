
/**
 * Google Apps Script client library for the Google Drive API
 * Documentation URL: https://developers.google.com/workspace/drive/
 * @class
 */
class Drive {
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
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'drive/v2/';

    // --- Public Interface Initialization ---

    this.about = {};

    /**
     * Gets the information about the current user along with Drive API settings
     * @param {boolean} params.includeSubscribed - Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`.
     * @param {string} params.maxChangeIdCount - Maximum number of remaining change IDs to count
     * @param {string} params.startChangeId - Change ID to start counting from when calculating number of remaining change IDs
     * @return {object} The API response object.
     */
    this.about.get = (params) => this._makeRequest('about', 'GET', params);

    this.apps = {};

    /**
     * Gets a specific app.
     * @param {string} params.appId - (Required) The ID of the app.
     * @return {object} The API response object.
     */
    this.apps.get = (params) => this._makeRequest('apps/{appId}', 'GET', params);

    /**
     * Lists a user's installed apps.
     * @param {string} params.appFilterExtensions - A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} params.appFilterMimeTypes - A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} params.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @return {object} The API response object.
     */
    this.apps.list = (params) => this._makeRequest('apps', 'GET', params);

    this.changes = {};

    /**
     * Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
     * @param {string} params.changeId - (Required) The ID of the change.
     * @param {string} params.driveId - The shared drive from which the change will be returned.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.changes.get = (params) => this._makeRequest('changes/{changeId}', 'GET', params);

    /**
     * Gets the starting pageToken for listing future changes.
     * @param {string} params.driveId - The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.changes.getStartPageToken = (params) => this._makeRequest('changes/startPageToken', 'GET', params);

    /**
     * Lists the changes for a user or shared drive.
     * @param {string} params.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} params.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} params.includeDeleted - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.includeSubscribed - Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} params.maxResults - Maximum number of changes to return.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     * @param {string} params.spaces - A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     * @param {string} params.startChangeId - Deprecated: Use `pageToken` instead.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.changes.list = (params) => this._makeRequest('changes', 'GET', params);

    /**
     * Subscribe to changes for a user.
     * @param {string} params.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} params.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} params.includeDeleted - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.includeSubscribed - Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} params.maxResults - Maximum number of changes to return.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     * @param {string} params.spaces - A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     * @param {string} params.startChangeId - Deprecated: Use `pageToken` instead.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.changes.watch = (params) => this._makeRequest('changes/watch', 'POST', params);

    this.channels = {};

    /**
     * Stops watching resources through this channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.children = {};

    /**
     * Removes a child from a folder.
     * @param {string} params.childId - (Required) The ID of the child.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     * @param {string} params.folderId - (Required) The ID of the folder.
     * @return {object} The API response object.
     */
    this.children.delete = (params) => this._makeRequest('files/{folderId}/children/{childId}', 'DELETE', params);

    /**
     * Gets a specific child reference.
     * @param {string} params.childId - (Required) The ID of the child.
     * @param {string} params.folderId - (Required) The ID of the folder.
     * @return {object} The API response object.
     */
    this.children.get = (params) => this._makeRequest('files/{folderId}/children/{childId}', 'GET', params);

    /**
     * Inserts a file into a folder.
     * @param {boolean} params.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} params.folderId - (Required) The ID of the folder.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.children.insert = (params) => this._makeRequest('files/{folderId}/children', 'POST', params);

    /**
     * Lists a folder's children.
     * @param {string} params.folderId - (Required) The ID of the folder.
     * @param {integer} params.maxResults - Maximum number of children to return.
     * @param {string} params.orderBy - A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {string} params.pageToken - Page token for children.
     * @param {string} params.q - Query string for searching children.
     * @return {object} The API response object.
     */
    this.children.list = (params) => this._makeRequest('files/{folderId}/children', 'GET', params);

    this.comments = {};

    /**
     * Deletes a comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @return {object} The API response object.
     */
    this.comments.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', params);

    /**
     * Gets a comment by ID.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     * @return {object} The API response object.
     */
    this.comments.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', params);

    /**
     * Creates a new comment on the given file.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.insert = (params) => this._makeRequest('files/{fileId}/comments', 'POST', params);

    /**
     * Lists a file's comments.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     * @param {integer} params.maxResults - The maximum number of discussions to include in the response, used for paging.
     * @param {string} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.updatedMin - Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     * @return {object} The API response object.
     */
    this.comments.list = (params) => this._makeRequest('files/{fileId}/comments', 'GET', params);

    /**
     * Updates an existing comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.patch = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', params);

    /**
     * Updates an existing comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PUT', params);

    this.drives = {};

    /**
     * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
     * @param {boolean} params.allowItemDeletion - Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     * @param {string} params.driveId - (Required) The ID of the shared drive.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.drives.delete = (params) => this._makeRequest('drives/{driveId}', 'DELETE', params);

    /**
     * Gets a shared drive's metadata by ID.
     * @param {string} params.driveId - (Required) The ID of the shared drive.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.drives.get = (params) => this._makeRequest('drives/{driveId}', 'GET', params);

    /**
     * Hides a shared drive from the default view.
     * @param {string} params.driveId - (Required) The ID of the shared drive.
     * @return {object} The API response object.
     */
    this.drives.hide = (params) => this._makeRequest('drives/{driveId}/hide', 'POST', params);

    /**
     * Creates a new shared drive.
     * @param {string} params.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.drives.insert = (params) => this._makeRequest('drives', 'POST', params);

    /**
     * Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @param {integer} params.maxResults - Maximum number of shared drives to return per page.
     * @param {string} params.pageToken - Page token for shared drives.
     * @param {string} params.q - Query string for searching shared drives.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     * @return {object} The API response object.
     */
    this.drives.list = (params) => this._makeRequest('drives', 'GET', params);

    /**
     * Restores a shared drive to the default view.
     * @param {string} params.driveId - (Required) The ID of the shared drive.
     * @return {object} The API response object.
     */
    this.drives.unhide = (params) => this._makeRequest('drives/{driveId}/unhide', 'POST', params);

    /**
     * Updates the metadata for a shared drive.
     * @param {string} params.driveId - (Required) The ID of the shared drive.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.drives.update = (params) => this._makeRequest('drives/{driveId}', 'PUT', params);

    this.files = {};

    /**
     * Creates a copy of the specified file.
     * @param {boolean} params.convert - Whether to convert this file to the corresponding Docs Editors format.
     * @param {boolean} params.enforceSingleParent - Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} params.fileId - (Required) The ID of the file to copy.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} params.ocrLanguage - If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} params.pinned - Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.timedTextLanguage - The language of the timed text.
     * @param {string} params.timedTextTrackName - The timed text track name.
     * @param {string} params.visibility - The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.copy = (params) => this._makeRequest('files/{fileId}/copy', 'POST', params);

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     * @param {string} params.fileId - (Required) The ID of the file to delete.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.delete = (params) => this._makeRequest('files/{fileId}', 'DELETE', params);

    /**
     * Permanently deletes all of the user's trashed files.
     * @param {string} params.driveId - If set, empties the trash of the provided shared drive.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     * @return {object} The API response object.
     */
    this.files.emptyTrash = (params) => this._makeRequest('files/trash', 'DELETE', params);

    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.mimeType - (Required) Required. The MIME type of the format requested for this export.
     * @return {object} The API response object.
     */
    this.files.export = (params) => this._makeRequest('files/{fileId}/export', 'GET', params);

    /**
     * Generates a set of file IDs which can be provided in insert or copy requests.
     * @param {integer} params.maxResults - Maximum number of IDs to return.
     * @param {string} params.space - The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`)
     * @param {string} params.type - The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`)
     * @return {object} The API response object.
     */
    this.files.generateIds = (params) => this._makeRequest('files/generateIds', 'GET', params);

    /**
     * Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).
     * @param {boolean} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} params.fileId - (Required) The ID for the file in question.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} params.projection - Deprecated: This parameter has no function.
     * @param {string} params.revisionId - Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.updateViewedDate - Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body.
     * @return {object} The API response object.
     */
    this.files.get = (params) => this._makeRequest('files/{fileId}', 'GET', params);

    /**
     * Inserts a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @param {boolean} params.convert - Whether to convert this file to the corresponding Docs Editors format.
     * @param {boolean} params.enforceSingleParent - Deprecated: Creating files in multiple folders is no longer supported.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} params.pinned - Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.timedTextLanguage - The language of the timed text.
     * @param {string} params.timedTextTrackName - The timed text track name.
     * @param {boolean} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {string} params.visibility - The visibility of the new file. This parameter is only relevant when convert=false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.insert = (params) => this._makeRequest('files', 'POST', params);

    /**
     * Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @param {string} params.corpora - Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency.
     * @param {string} params.corpus - Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead.
     * @param {string} params.driveId - ID of the shared drive to search.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} params.maxResults - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string} params.orderBy - A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {string} params.pageToken - Page token for files.
     * @param {string} params.projection - Deprecated: This parameter has no function.
     * @param {string} params.q - Query string for searching files.
     * @param {string} params.spaces - A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.files.list = (params) => this._makeRequest('files', 'GET', params);

    /**
     * Lists the labels on a file.
     * @param {string} params.fileId - (Required) The ID for the file.
     * @param {integer} params.maxResults - The maximum number of labels to return per page. When not set, defaults to 100.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     * @return {object} The API response object.
     */
    this.files.listLabels = (params) => this._makeRequest('files/{fileId}/listLabels', 'GET', params);

    /**
     * Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
     * @param {string} params.fileId - (Required) The ID of the file to which the labels belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.modifyLabels = (params) => this._makeRequest('files/{fileId}/modifyLabels', 'POST', params);

    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
     * @param {string} params.addParents - Comma-separated list of parent IDs to add.
     * @param {boolean} params.convert - Deprecated: This parameter has no function.
     * @param {boolean} params.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} params.fileId - (Required) The ID of the file to update.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} params.modifiedDateBehavior - Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     * @param {boolean} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request.
     * @param {boolean} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} params.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
     * @param {string} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param {boolean} params.setModifiedDate - Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.timedTextLanguage - The language of the timed text.
     * @param {string} params.timedTextTrackName - The timed text track name.
     * @param {boolean} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param {boolean} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.patch = (params) => this._makeRequest('files/{fileId}', 'PATCH', params);

    /**
     * Set the file's updated time to the current server time.
     * @param {string} params.fileId - (Required) The ID of the file to update.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.touch = (params) => this._makeRequest('files/{fileId}/touch', 'POST', params);

    /**
     * Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @param {string} params.fileId - (Required) The ID of the file to trash.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.trash = (params) => this._makeRequest('files/{fileId}/trash', 'POST', params);

    /**
     * Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @param {string} params.fileId - (Required) The ID of the file to untrash.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.untrash = (params) => this._makeRequest('files/{fileId}/untrash', 'POST', params);

    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @param {string} params.addParents - Comma-separated list of parent IDs to add.
     * @param {boolean} params.convert - Deprecated: This parameter has no function.
     * @param {boolean} params.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} params.fileId - (Required) The ID of the file to update.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} params.modifiedDateBehavior - Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     * @param {boolean} params.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045).
     * @param {boolean} params.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} params.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} params.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     * @param {string} params.removeParents - Comma-separated list of parent IDs to remove.
     * @param {boolean} params.setModifiedDate - Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.timedTextLanguage - The language of the timed text.
     * @param {string} params.timedTextTrackName - The timed text track name.
     * @param {boolean} params.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param {boolean} params.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.update = (params) => this._makeRequest('files/{fileId}', 'PUT', params);

    /**
     * Subscribes to changes to a file.
     * @param {boolean} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} params.fileId - (Required) The ID for the file in question.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} params.projection - Deprecated: This parameter has no function.
     * @param {string} params.revisionId - Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.updateViewedDate - Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.watch = (params) => this._makeRequest('files/{fileId}/watch', 'POST', params);

    this.parents = {};

    /**
     * Removes a parent from a file.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.parentId - (Required) The ID of the parent.
     * @return {object} The API response object.
     */
    this.parents.delete = (params) => this._makeRequest('files/{fileId}/parents/{parentId}', 'DELETE', params);

    /**
     * Gets a specific parent reference.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.parentId - (Required) The ID of the parent.
     * @return {object} The API response object.
     */
    this.parents.get = (params) => this._makeRequest('files/{fileId}/parents/{parentId}', 'GET', params);

    /**
     * Adds a parent folder for a file.
     * @param {boolean} params.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.parents.insert = (params) => this._makeRequest('files/{fileId}/parents', 'POST', params);

    /**
     * Lists a file's parents.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @return {object} The API response object.
     */
    this.parents.list = (params) => this._makeRequest('files/{fileId}/parents', 'GET', params);

    this.permissions = {};

    /**
     * Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID for the permission.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.delete = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'DELETE', params);

    /**
     * Gets a permission by ID.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID for the permission.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.get = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', params);

    /**
     * Returns the permission ID for an email address.
     * @param {string} params.email - (Required) The email address for which to return a permission ID
     * @return {object} The API response object.
     */
    this.permissions.getIdForEmail = (params) => this._makeRequest('permissionIds/{email}', 'GET', params);

    /**
     * Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {string} params.emailMessage - A plain text custom message to include in notification emails.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {boolean} params.enforceSingleParent - Deprecated: See `moveToNewOwnersRoot` for details.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {boolean} params.moveToNewOwnersRoot - This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     * @param {boolean} params.sendNotificationEmails - Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.insert = (params) => this._makeRequest('files/{fileId}/permissions', 'POST', params);

    /**
     * Lists a file's or shared drive's permissions.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {integer} params.maxResults - The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.list = (params) => this._makeRequest('files/{fileId}/permissions', 'GET', params);

    /**
     * Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID for the permission.
     * @param {boolean} params.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.transferOwnership - Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.patch = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', params);

    /**
     * Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} params.fileId - (Required) The ID for the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID for the permission.
     * @param {boolean} params.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.transferOwnership - Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.update = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PUT', params);

    this.properties = {};

    /**
     * Deletes a property.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.propertyKey - (Required) The key of the property.
     * @param {string} params.visibility - The visibility of the property.
     * @return {object} The API response object.
     */
    this.properties.delete = (params) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'DELETE', params);

    /**
     * Gets a property by its key.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.propertyKey - (Required) The key of the property.
     * @param {string} params.visibility - The visibility of the property.
     * @return {object} The API response object.
     */
    this.properties.get = (params) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'GET', params);

    /**
     * Adds a property to a file, or updates it if it already exists.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.insert = (params) => this._makeRequest('files/{fileId}/properties', 'POST', params);

    /**
     * Lists a file's properties.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @return {object} The API response object.
     */
    this.properties.list = (params) => this._makeRequest('files/{fileId}/properties', 'GET', params);

    /**
     * Updates a property.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.propertyKey - (Required) The key of the property.
     * @param {string} params.visibility - The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.patch = (params) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PATCH', params);

    /**
     * Updates a property.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.propertyKey - (Required) The key of the property.
     * @param {string} params.visibility - The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.update = (params) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PUT', params);

    this.replies = {};

    /**
     * Deletes a reply.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @return {object} The API response object.
     */
    this.replies.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'DELETE', params);

    /**
     * Gets a reply.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - If set, this will succeed when retrieving a deleted reply.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @return {object} The API response object.
     */
    this.replies.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', params);

    /**
     * Creates a new reply to the given comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.replies.insert = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', params);

    /**
     * Lists all of the replies to a comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - If set, all replies, including deleted replies (with content stripped) will be returned.
     * @param {integer} params.maxResults - The maximum number of replies to include in the response, used for paging.
     * @param {string} params.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @return {object} The API response object.
     */
    this.replies.list = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', params);

    /**
     * Updates an existing reply.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.replies.patch = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', params);

    /**
     * Updates an existing reply.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.replies.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PUT', params);

    this.revisions = {};

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.revisionId - (Required) The ID of the revision.
     * @return {object} The API response object.
     */
    this.revisions.delete = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', params);

    /**
     * Gets a specific revision.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.revisionId - (Required) The ID of the revision.
     * @return {object} The API response object.
     */
    this.revisions.get = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', params);

    /**
     * Lists a file's revisions.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {integer} params.maxResults - Maximum number of revisions to return.
     * @param {string} params.pageToken - Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @return {object} The API response object.
     */
    this.revisions.list = (params) => this._makeRequest('files/{fileId}/revisions', 'GET', params);

    /**
     * Updates a revision.
     * @param {string} params.fileId - (Required) The ID for the file.
     * @param {string} params.revisionId - (Required) The ID for the revision.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.revisions.patch = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', params);

    /**
     * Updates a revision.
     * @param {string} params.fileId - (Required) The ID for the file.
     * @param {string} params.revisionId - (Required) The ID for the revision.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.revisions.update = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PUT', params);

    this.teamdrives = {};

    /**
     * Deprecated: Use `drives.delete` instead.
     * @param {string} params.teamDriveId - (Required) The ID of the Team Drive
     * @return {object} The API response object.
     */
    this.teamdrives.delete = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'DELETE', params);

    /**
     * Deprecated: Use `drives.get` instead.
     * @param {string} params.teamDriveId - (Required) The ID of the Team Drive
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @return {object} The API response object.
     */
    this.teamdrives.get = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'GET', params);

    /**
     * Deprecated: Use `drives.insert` instead.
     * @param {string} params.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.teamdrives.insert = (params) => this._makeRequest('teamdrives', 'POST', params);

    /**
     * Deprecated: Use `drives.list` instead.
     * @param {integer} params.maxResults - Maximum number of Team Drives to return.
     * @param {string} params.pageToken - Page token for Team Drives.
     * @param {string} params.q - Query string for searching Team Drives.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     * @return {object} The API response object.
     */
    this.teamdrives.list = (params) => this._makeRequest('teamdrives', 'GET', params);

    /**
     * Deprecated: Use `drives.update` instead.
     * @param {string} params.teamDriveId - (Required) The ID of the Team Drive
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.teamdrives.update = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'PUT', params);
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
