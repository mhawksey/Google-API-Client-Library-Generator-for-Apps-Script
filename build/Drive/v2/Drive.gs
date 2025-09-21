
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'drive/v2/';


    this.about = {};

    /**
     * Gets the information about the current user along with Drive API settings
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSubscribed - Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`.
     * @param {string} apiParams.maxChangeIdCount - Maximum number of remaining change IDs to count
     * @param {string} apiParams.startChangeId - Change ID to start counting from when calculating number of remaining change IDs
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.about.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('about', 'GET', apiParams, clientConfig);

    this.apps = {};

    /**
     * Gets a specific app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appId - (Required) The ID of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/{appId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a user's installed apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appFilterExtensions - A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} apiParams.appFilterMimeTypes - A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} apiParams.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps', 'GET', apiParams, clientConfig);

    this.changes = {};

    /**
     * Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.changeId - (Required) The ID of the change.
     * @param {string} apiParams.driveId - The shared drive from which the change will be returned.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/{changeId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the starting pageToken for listing future changes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.getStartPageToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/startPageToken', 'GET', apiParams, clientConfig);

    /**
     * Lists the changes for a user or shared drive.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} apiParams.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} apiParams.includeDeleted - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.includeSubscribed - Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} apiParams.maxResults - Maximum number of changes to return.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     * @param {string} apiParams.startChangeId - Deprecated: Use `pageToken` instead.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes', 'GET', apiParams, clientConfig);

    /**
     * Subscribe to changes for a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} apiParams.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} apiParams.includeDeleted - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.includeSubscribed - Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} apiParams.maxResults - Maximum number of changes to return.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
     * @param {string} apiParams.startChangeId - Deprecated: Use `pageToken` instead.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/watch', 'POST', apiParams, clientConfig);

    this.channels = {};

    /**
     * Stops watching resources through this channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.children = {};

    /**
     * Removes a child from a folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.childId - (Required) The ID of the child.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     * @param {string} apiParams.folderId - (Required) The ID of the folder.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.children.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children/{childId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a specific child reference.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.childId - (Required) The ID of the child.
     * @param {string} apiParams.folderId - (Required) The ID of the folder.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.children.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children/{childId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a file into a folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} apiParams.folderId - (Required) The ID of the folder.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.children.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children', 'POST', apiParams, clientConfig);

    /**
     * Lists a folder's children.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.folderId - (Required) The ID of the folder.
     * @param {integer} apiParams.maxResults - Maximum number of children to return.
     * @param {string} apiParams.orderBy - A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {string} apiParams.pageToken - Page token for children.
     * @param {string} apiParams.q - Query string for searching children.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.children.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children', 'GET', apiParams, clientConfig);

    this.comments = {};

    /**
     * Deletes a comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a comment by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new comment on the given file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'POST', apiParams, clientConfig);

    /**
     * Lists a file's comments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     * @param {integer} apiParams.maxResults - The maximum number of discussions to include in the response, used for paging.
     * @param {string} apiParams.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} apiParams.updatedMin - Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PUT', apiParams, clientConfig);

    this.drives = {};

    /**
     * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowItemDeletion - Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a shared drive's metadata by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'GET', apiParams, clientConfig);

    /**
     * Hides a shared drive from the default view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.hide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/hide', 'POST', apiParams, clientConfig);

    /**
     * Creates a new shared drive.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'POST', apiParams, clientConfig);

    /**
     * Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of shared drives to return per page.
     * @param {string} apiParams.pageToken - Page token for shared drives.
     * @param {string} apiParams.q - Query string for searching shared drives.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'GET', apiParams, clientConfig);

    /**
     * Restores a shared drive to the default view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.unhide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/unhide', 'POST', apiParams, clientConfig);

    /**
     * Updates the metadata for a shared drive.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'PUT', apiParams, clientConfig);

    this.files = {};

    /**
     * Creates a copy of the specified file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.convert - Whether to convert this file to the corresponding Docs Editors format.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file to copy.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} apiParams.ocrLanguage - If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} apiParams.pinned - Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.timedTextLanguage - The language of the timed text.
     * @param {string} apiParams.timedTextTrackName - The timed text track name.
     * @param {string} apiParams.visibility - The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/copy', 'POST', apiParams, clientConfig);

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     * @param {string} apiParams.fileId - (Required) The ID of the file to delete.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'DELETE', apiParams, clientConfig);

    /**
     * Permanently deletes all of the user's trashed files.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - If set, empties the trash of the provided shared drive.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.emptyTrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/trash', 'DELETE', apiParams, clientConfig);

    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.mimeType - (Required) Required. The MIME type of the format requested for this export.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/export', 'GET', apiParams, clientConfig);

    /**
     * Generates a set of file IDs which can be provided in insert or copy requests.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of IDs to return.
     * @param {string} apiParams.space - The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`)
     * @param {string} apiParams.type - The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.generateIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/generateIds', 'GET', apiParams, clientConfig);

    /**
     * Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} apiParams.fileId - (Required) The ID for the file in question.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} apiParams.projection - Deprecated: This parameter has no function.
     * @param {string} apiParams.revisionId - Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.updateViewedDate - Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.convert - Whether to convert this file to the corresponding Docs Editors format.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Creating files in multiple folders is no longer supported.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} apiParams.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} apiParams.pinned - Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.timedTextLanguage - The language of the timed text.
     * @param {string} apiParams.timedTextTrackName - The timed text track name.
     * @param {boolean} apiParams.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {string} apiParams.visibility - The visibility of the new file. This parameter is only relevant when convert=false.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v2/files' : 'files';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Lists the user's files. For more information, see [Search for files and folders](/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.corpora - Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency.
     * @param {string} apiParams.corpus - Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead.
     * @param {string} apiParams.driveId - ID of the shared drive to search.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} apiParams.maxResults - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string} apiParams.orderBy - A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored.
     * @param {string} apiParams.pageToken - Page token for files.
     * @param {string} apiParams.projection - Deprecated: This parameter has no function.
     * @param {string} apiParams.q - Query string for searching files.
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files', 'GET', apiParams, clientConfig);

    /**
     * Lists the labels on a file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID for the file.
     * @param {integer} apiParams.maxResults - The maximum number of labels to return per page. When not set, defaults to 100.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.listLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/listLabels', 'GET', apiParams, clientConfig);

    /**
     * Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file to which the labels belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.modifyLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/modifyLabels', 'POST', apiParams, clientConfig);

    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.addParents - Comma-separated list of parent IDs to add.
     * @param {boolean} apiParams.convert - Deprecated: This parameter has no function.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file to update.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} apiParams.modifiedDateBehavior - Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     * @param {boolean} apiParams.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request.
     * @param {boolean} apiParams.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} apiParams.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} apiParams.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
     * @param {string} apiParams.removeParents - Comma-separated list of parent IDs to remove.
     * @param {boolean} apiParams.setModifiedDate - Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.timedTextLanguage - The language of the timed text.
     * @param {string} apiParams.timedTextTrackName - The timed text track name.
     * @param {boolean} apiParams.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param {boolean} apiParams.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'PATCH', apiParams, clientConfig);

    /**
     * Set the file's updated time to the current server time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file to update.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.touch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/touch', 'POST', apiParams, clientConfig);

    /**
     * Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file to trash.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/trash', 'POST', apiParams, clientConfig);

    /**
     * Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file to untrash.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/untrash', 'POST', apiParams, clientConfig);

    /**
     * Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*\/*` (Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.addParents - Comma-separated list of parent IDs to add.
     * @param {boolean} apiParams.convert - Deprecated: This parameter has no function.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file to update.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} apiParams.modifiedDateBehavior - Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
     * @param {boolean} apiParams.newRevision - Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045).
     * @param {boolean} apiParams.ocr - Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string} apiParams.ocrLanguage - If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
     * @param {boolean} apiParams.pinned - Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
     * @param {string} apiParams.removeParents - Comma-separated list of parent IDs to remove.
     * @param {boolean} apiParams.setModifiedDate - Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.timedTextLanguage - The language of the timed text.
     * @param {string} apiParams.timedTextTrackName - The timed text track name.
     * @param {boolean} apiParams.updateViewedDate - Whether to update the view date after successfully updating the file.
     * @param {boolean} apiParams.useContentAsIndexableText - Whether to use the content as indexable text.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v2/files/{fileId}' : 'files/{fileId}';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };

    /**
     * Subscribes to changes to a file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} apiParams.fileId - (Required) The ID for the file in question.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {string} apiParams.projection - Deprecated: This parameter has no function.
     * @param {string} apiParams.revisionId - Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.updateViewedDate - Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/watch', 'POST', apiParams, clientConfig);

    this.parents = {};

    /**
     * Removes a parent from a file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.parentId - (Required) The ID of the parent.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.parents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents/{parentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a specific parent reference.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.parentId - (Required) The ID of the parent.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.parents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents/{parentId}', 'GET', apiParams, clientConfig);

    /**
     * Adds a parent folder for a file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.parents.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents', 'POST', apiParams, clientConfig);

    /**
     * Lists a file's parents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.parents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents', 'GET', apiParams, clientConfig);

    this.permissions = {};

    /**
     * Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID for the permission.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a permission by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID for the permission.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', apiParams, clientConfig);

    /**
     * Returns the permission ID for an email address.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.email - (Required) The email address for which to return a permission ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.getIdForEmail = async (apiParams = {}, clientConfig = {}) => this._makeRequest('permissionIds/{email}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.emailMessage - A plain text custom message to include in notification emails.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: See `moveToNewOwnersRoot` for details.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {boolean} apiParams.moveToNewOwnersRoot - This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     * @param {boolean} apiParams.sendNotificationEmails - Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'POST', apiParams, clientConfig);

    /**
     * Lists a file's or shared drive's permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {integer} apiParams.maxResults - The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'GET', apiParams, clientConfig);

    /**
     * Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID for the permission.
     * @param {boolean} apiParams.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.transferOwnership - Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} apiParams.fileId - (Required) The ID for the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID for the permission.
     * @param {boolean} apiParams.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.transferOwnership - Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PUT', apiParams, clientConfig);

    this.properties = {};

    /**
     * Deletes a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.propertyKey - (Required) The key of the property.
     * @param {string} apiParams.visibility - The visibility of the property.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a property by its key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.propertyKey - (Required) The key of the property.
     * @param {string} apiParams.visibility - The visibility of the property.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'GET', apiParams, clientConfig);

    /**
     * Adds a property to a file, or updates it if it already exists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties', 'POST', apiParams, clientConfig);

    /**
     * Lists a file's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties', 'GET', apiParams, clientConfig);

    /**
     * Updates a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.propertyKey - (Required) The key of the property.
     * @param {string} apiParams.visibility - The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.propertyKey - (Required) The key of the property.
     * @param {string} apiParams.visibility - The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PUT', apiParams, clientConfig);

    this.replies = {};

    /**
     * Deletes a reply.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a reply.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - If set, this will succeed when retrieving a deleted reply.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new reply to the given comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', apiParams, clientConfig);

    /**
     * Lists all of the replies to a comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - If set, all replies, including deleted replies (with content stripped) will be returned.
     * @param {integer} apiParams.maxResults - The maximum number of replies to include in the response, used for paging.
     * @param {string} apiParams.pageToken - The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing reply.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing reply.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PUT', apiParams, clientConfig);

    this.revisions = {};

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.revisionId - (Required) The ID of the revision.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a specific revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.revisionId - (Required) The ID of the revision.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a file's revisions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {integer} apiParams.maxResults - Maximum number of revisions to return.
     * @param {string} apiParams.pageToken - Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions', 'GET', apiParams, clientConfig);

    /**
     * Updates a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID for the file.
     * @param {string} apiParams.revisionId - (Required) The ID for the revision.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID for the file.
     * @param {string} apiParams.revisionId - (Required) The ID for the revision.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PUT', apiParams, clientConfig);

    this.teamdrives = {};

    /**
     * Deprecated: Use `drives.delete` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.teamDriveId - (Required) The ID of the Team Drive
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'DELETE', apiParams, clientConfig);

    /**
     * Deprecated: Use `drives.get` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.teamDriveId - (Required) The ID of the Team Drive
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'GET', apiParams, clientConfig);

    /**
     * Deprecated: Use `drives.insert` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives', 'POST', apiParams, clientConfig);

    /**
     * Deprecated: Use `drives.list` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of Team Drives to return.
     * @param {string} apiParams.pageToken - Page token for Team Drives.
     * @param {string} apiParams.q - Query string for searching Team Drives.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives', 'GET', apiParams, clientConfig);

    /**
     * Deprecated: Use `drives.update` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.teamDriveId - (Required) The ID of the Team Drive
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'PUT', apiParams, clientConfig);
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
