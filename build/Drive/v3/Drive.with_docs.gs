
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
    this._servicePath = 'drive/v3/';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('operations/{name}', 'GET', params);

    this.about = {};

    /**
     * Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @return {object} The API response object.
     */
    this.about.get = (params) => this._makeRequest('about', 'GET', params);

    this.apps = {};

    /**
     * Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @param {string} params.appId - (Required) The ID of the app.
     * @return {object} The API response object.
     */
    this.apps.get = (params) => this._makeRequest('apps/{appId}', 'GET', params);

    /**
     * Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @param {string} params.appFilterExtensions - A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} params.appFilterMimeTypes - A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} params.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @return {object} The API response object.
     */
    this.apps.list = (params) => this._makeRequest('apps', 'GET', params);

    this.changes = {};

    /**
     * Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
     * @param {string} params.driveId - The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.changes.getStartPageToken = (params) => this._makeRequest('changes/startPageToken', 'GET', params);

    /**
     * Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
     * @param {string} params.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} params.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.includeRemoved - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} params.pageSize - The maximum number of changes to return per page.
     * @param {string} params.pageToken - (Required) The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean} params.restrictToMyDrive - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string} params.spaces - A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @return {object} The API response object.
     */
    this.changes.list = (params) => this._makeRequest('changes', 'GET', params);

    /**
     * Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @param {string} params.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} params.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.includeRemoved - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} params.pageSize - The maximum number of changes to return per page.
     * @param {string} params.pageToken - (Required) The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean} params.restrictToMyDrive - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string} params.spaces - A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} params.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.changes.watch = (params) => this._makeRequest('changes/watch', 'POST', params);

    this.channels = {};

    /**
     * Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.comments = {};

    /**
     * Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.create = (params) => this._makeRequest('files/{fileId}/comments', 'POST', params);

    /**
     * Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @return {object} The API response object.
     */
    this.comments.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', params);

    /**
     * Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - Whether to return deleted comments. Deleted comments will not include their original content.
     * @return {object} The API response object.
     */
    this.comments.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', params);

    /**
     * Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - Whether to include deleted comments. Deleted comments will not include their original content.
     * @param {integer} params.pageSize - The maximum number of comments to return per page.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string} params.startModifiedTime - The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     * @return {object} The API response object.
     */
    this.comments.list = (params) => this._makeRequest('files/{fileId}/comments', 'GET', params);

    /**
     * Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', params);

    this.drives = {};

    /**
     * Creates a shared drive.
     * @param {string} params.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.drives.create = (params) => this._makeRequest('drives', 'POST', params);

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
     * Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @param {integer} params.pageSize - Maximum number of shared drives to return per page.
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
    this.drives.update = (params) => this._makeRequest('drives/{driveId}', 'PATCH', params);

    this.files = {};

    /**
     * Creates a copy of a file and applies any requested updates with patch semantics.
     * @param {boolean} params.enforceSingleParent - Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.ignoreDefaultVisibility - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.keepRevisionForever - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} params.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.copy = (params) => this._makeRequest('files/{fileId}/copy', 'POST', params);

    /**
     * Creates a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @param {boolean} params.enforceSingleParent - Deprecated. Creating files in multiple folders is no longer supported.
     * @param {boolean} params.ignoreDefaultVisibility - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.keepRevisionForever - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} params.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useContentAsIndexableText - Whether to use the uploaded content as indexable text.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.create = (params) => this._makeRequest('files', 'POST', params);

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.delete = (params) => this._makeRequest('files/{fileId}', 'DELETE', params);

    /**
     * Permanently deletes all of the user's trashed files.
     * @param {string} params.driveId - If set, empties the trash of the provided shared drive.
     * @param {boolean} params.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.
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
     * Generates a set of file IDs which can be provided in create or copy requests.
     * @param {integer} params.count - The number of IDs to return.
     * @param {string} params.space - The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')
     * @param {string} params.type - The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files')
     * @return {object} The API response object.
     */
    this.files.generateIds = (params) => this._makeRequest('files/generateIds', 'GET', params);

    /**
     * Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).
     * @param {boolean} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @return {object} The API response object.
     */
    this.files.get = (params) => this._makeRequest('files/{fileId}', 'GET', params);

    /**
     * Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @param {string} params.corpora - Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.
     * @param {string} params.corpus - Deprecated: The source of files to list. Use 'corpora' instead.
     * @param {string} params.driveId - ID of the shared drive to search.
     * @param {boolean} params.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {string} params.orderBy - A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`.
     * @param {integer} params.pageSize - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string} params.q - A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.
     * @param {string} params.spaces - A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
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
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
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
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @param {string} params.addParents - A comma-separated list of parent IDs to add.
     * @param {boolean} params.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.keepRevisionForever - Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} params.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {string} params.removeParents - A comma-separated list of parent IDs to remove.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useContentAsIndexableText - Whether to use the uploaded content as indexable text.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.update = (params) => this._makeRequest('files/{fileId}', 'PATCH', params);

    /**
     * Subscribes to changes to a file.
     * @param {boolean} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.files.watch = (params) => this._makeRequest('files/{fileId}/watch', 'POST', params);

    /**
     * Downloads content of a file. Operations are valid for 24 hours from the time of creation.
     * @param {string} params.fileId - (Required) Required. The ID of the file to download.
     * @param {string} params.mimeType - Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. See [Export MIME types for Google Workspace documents](/drive/api/guides/ref-export-formats) for the list of supported MIME types. If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future.
     * @param {string} params.revisionId - Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported.
     * @return {object} The API response object.
     */
    this.files.download = (params) => this._makeRequest('files/{fileId}/download', 'POST', params);

    this.permissions = {};

    /**
     * Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {string} params.emailMessage - A plain text custom message to include in the notification email.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {boolean} params.enforceSingleParent - Deprecated: See `moveToNewOwnersRoot` for details.
     * @param {string} params.fileId - (Required) The ID of the file or shared drive.
     * @param {boolean} params.moveToNewOwnersRoot - This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     * @param {boolean} params.sendNotificationEmail - Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.transferOwnership - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.create = (params) => this._makeRequest('files/{fileId}/permissions', 'POST', params);

    /**
     * Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} params.fileId - (Required) The ID of the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID of the permission.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.delete = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'DELETE', params);

    /**
     * Gets a permission by ID.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.permissionId - (Required) The ID of the permission.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.get = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', params);

    /**
     * Lists a file's or shared drive's permissions.
     * @param {string} params.fileId - (Required) The ID of the file or shared drive.
     * @param {string} params.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {integer} params.pageSize - The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @return {object} The API response object.
     */
    this.permissions.list = (params) => this._makeRequest('files/{fileId}/permissions', 'GET', params);

    /**
     * Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {boolean} params.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} params.fileId - (Required) The ID of the file or shared drive.
     * @param {string} params.permissionId - (Required) The ID of the permission.
     * @param {boolean} params.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} params.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} params.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} params.transferOwnership - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean} params.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.permissions.update = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', params);

    this.replies = {};

    /**
     * Creates a reply to a comment.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.replies.create = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', params);

    /**
     * Deletes a reply.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @return {object} The API response object.
     */
    this.replies.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'DELETE', params);

    /**
     * Gets a reply by ID.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - Whether to return deleted replies. Deleted replies will not include their original content.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @return {object} The API response object.
     */
    this.replies.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', params);

    /**
     * Lists a comment's replies.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {boolean} params.includeDeleted - Whether to include deleted replies. Deleted replies will not include their original content.
     * @param {integer} params.pageSize - The maximum number of replies to return per page.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @return {object} The API response object.
     */
    this.replies.list = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', params);

    /**
     * Updates a reply with patch semantics.
     * @param {string} params.commentId - (Required) The ID of the comment.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.replyId - (Required) The ID of the reply.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.replies.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', params);

    this.revisions = {};

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.revisionId - (Required) The ID of the revision.
     * @return {object} The API response object.
     */
    this.revisions.delete = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', params);

    /**
     * Gets a revision's metadata or content by ID.
     * @param {boolean} params.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.revisionId - (Required) The ID of the revision.
     * @return {object} The API response object.
     */
    this.revisions.get = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', params);

    /**
     * Lists a file's revisions.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {integer} params.pageSize - The maximum number of revisions to return per page.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @return {object} The API response object.
     */
    this.revisions.list = (params) => this._makeRequest('files/{fileId}/revisions', 'GET', params);

    /**
     * Updates a revision with patch semantics.
     * @param {string} params.fileId - (Required) The ID of the file.
     * @param {string} params.revisionId - (Required) The ID of the revision.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.revisions.update = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', params);

    this.teamdrives = {};

    /**
     * Deprecated: Use `drives.create` instead.
     * @param {string} params.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.teamdrives.create = (params) => this._makeRequest('teamdrives', 'POST', params);

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
     * Deprecated: Use `drives.list` instead.
     * @param {integer} params.pageSize - Maximum number of Team Drives to return.
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
    this.teamdrives.update = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'PATCH', params);

    this.accessproposals = {};

    /**
     * Retrieves an AccessProposal by ID.
     * @param {string} params.fileId - (Required) Required. The id of the item the request is on.
     * @param {string} params.proposalId - (Required) Required. The id of the access proposal to resolve.
     * @return {object} The API response object.
     */
    this.accessproposals.get = (params) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}', 'GET', params);

    /**
     * Used to approve or deny an Access Proposal.
     * @param {string} params.fileId - (Required) Required. The id of the item the request is on.
     * @param {string} params.proposalId - (Required) Required. The id of the access proposal to resolve.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessproposals.resolve = (params) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}:resolve', 'POST', params);

    /**
     * List the AccessProposals on a file. Note: Only approvers are able to list AccessProposals on a file. If the user is not an approver, returns a 403.
     * @param {string} params.fileId - (Required) Required. The id of the item the request is on.
     * @param {integer} params.pageSize - Optional. The number of results per page
     * @param {string} params.pageToken - Optional. The continuation token on the list of access requests.
     * @return {object} The API response object.
     */
    this.accessproposals.list = (params) => this._makeRequest('files/{fileId}/accessproposals', 'GET', params);
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
