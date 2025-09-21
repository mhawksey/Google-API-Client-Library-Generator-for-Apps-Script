
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
    this._servicePath = 'drive/v3/';


    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('operations/{name}', 'GET', apiParams, clientConfig);

    this.about = {};

    /**
     * Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.about.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('about', 'GET', apiParams, clientConfig);

    this.apps = {};

    /**
     * Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appId - (Required) The ID of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/{appId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appFilterExtensions - A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} apiParams.appFilterMimeTypes - A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
     * @param {string} apiParams.languageCode - A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps', 'GET', apiParams, clientConfig);

    this.changes = {};

    /**
     * Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
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
     * Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} apiParams.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} apiParams.includeRemoved - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} apiParams.pageSize - The maximum number of changes to return per page.
     * @param {string} apiParams.pageToken - (Required) The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean} apiParams.restrictToMyDrive - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes', 'GET', apiParams, clientConfig);

    /**
     * Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
     * @param {boolean} apiParams.includeCorpusRemovals - Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {boolean} apiParams.includeRemoved - Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {integer} apiParams.pageSize - The maximum number of changes to return per page.
     * @param {string} apiParams.pageToken - (Required) The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
     * @param {boolean} apiParams.restrictToMyDrive - Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.
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
     * Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.comments = {};

    /**
     * Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'POST', apiParams, clientConfig);

    /**
     * Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - Whether to return deleted comments. Deleted comments will not include their original content.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - Whether to include deleted comments. Deleted comments will not include their original content.
     * @param {integer} apiParams.pageSize - The maximum number of comments to return per page.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {string} apiParams.startModifiedTime - The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'GET', apiParams, clientConfig);

    /**
     * Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', apiParams, clientConfig);

    this.drives = {};

    /**
     * Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'POST', apiParams, clientConfig);

    /**
     * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
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
     * Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'GET', apiParams, clientConfig);

    /**
     * Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.hide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/hide', 'POST', apiParams, clientConfig);

    /**
     * Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of shared drives to return per page.
     * @param {string} apiParams.pageToken - Page token for shared drives.
     * @param {string} apiParams.q - Query string for searching shared drives.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'GET', apiParams, clientConfig);

    /**
     * Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.unhide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/unhide', 'POST', apiParams, clientConfig);

    /**
     * Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - (Required) The ID of the shared drive.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.drives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'PATCH', apiParams, clientConfig);

    this.files = {};

    /**
     * Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.ignoreDefaultVisibility - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.keepRevisionForever - Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} apiParams.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/copy', 'POST', apiParams, clientConfig);

    /**
     * Creates a file. For more information, see [Create and manage files](/workspace/drive/api/guides/create-file). This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*\/*` (Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Creating files in multiple folders is no longer supported.
     * @param {boolean} apiParams.ignoreDefaultVisibility - Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.keepRevisionForever - Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} apiParams.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useContentAsIndexableText - Whether to use the uploaded content as indexable text.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.create = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v3/files' : 'files';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'DELETE', apiParams, clientConfig);

    /**
     * Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.driveId - If set, empties the trash of the provided shared drive.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.emptyTrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/trash', 'DELETE', apiParams, clientConfig);

    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.mimeType - (Required) Required. The MIME type of the format requested for this export. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/export', 'GET', apiParams, clientConfig);

    /**
     * Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.count - The number of IDs to return.
     * @param {string} apiParams.space - The space in which the IDs can be used to create files. Supported values are `drive` and `appDataFolder`. (Default: `drive`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization).
     * @param {string} apiParams.type - The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.generateIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/generateIds', 'GET', apiParams, clientConfig);

    /**
     * Gets a file's metadata or content by ID. For more information, see [Search for files and folders](/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](/workspace/drive/api/guides/manage-downloads).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the user's files. For more information, see [Search for files and folders](/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.corpora - Bodies of items (files or documents) to which the query applies. Supported bodies are: * `user` * `domain` * `drive` * `allDrives` Prefer `user` or `drive` to `allDrives` for efficiency. By default, corpora is set to `user`. However, this can change depending on the filter set through the `q` parameter. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization).
     * @param {string} apiParams.corpus - Deprecated: The source of files to list. Use `corpora` instead.
     * @param {string} apiParams.driveId - ID of the shared drive to search.
     * @param {boolean} apiParams.includeItemsFromAllDrives - Whether both My Drive and shared drive items should be included in results.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.includeTeamDriveItems - Deprecated: Use `includeItemsFromAllDrives` instead.
     * @param {string} apiParams.orderBy - A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the `desc` modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`.
     * @param {integer} apiParams.pageSize - The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
     * @param {string} apiParams.q - A query for filtering the file results. For supported syntax, see [Search for files and folders](/workspace/drive/api/guides/search-files).
     * @param {string} apiParams.spaces - A comma-separated list of spaces to query within the corpora. Supported values are `drive` and `appDataFolder`. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization).
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {string} apiParams.teamDriveId - Deprecated: Use `driveId` instead.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files', 'GET', apiParams, clientConfig);

    /**
     * Lists the labels on a file. For more information, see [List labels on a file](https://developers.google.com/workspace/drive/api/guides/list-labels).
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
     * Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file to which the labels belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.modifyLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/modifyLabels', 'POST', apiParams, clientConfig);

    /**
     * Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*\/*` (Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.addParents - A comma-separated list of parent IDs to add.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.keepRevisionForever - Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @param {string} apiParams.ocrLanguage - A language hint for OCR processing during image import (ISO 639-1 code).
     * @param {string} apiParams.removeParents - A comma-separated list of parent IDs to remove.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useContentAsIndexableText - Whether to use the uploaded content as indexable text.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v3/files/{fileId}' : 'files/{fileId}';
      return this._makeRequest(path, 'PATCH', apiParams, clientConfig);
    };

    /**
     * Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.includeLabels - A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only `published` is supported.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/watch', 'POST', apiParams, clientConfig);

    /**
     * Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) Required. The ID of the file to download.
     * @param {string} apiParams.mimeType - Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future.
     * @param {string} apiParams.revisionId - Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/download', 'POST', apiParams, clientConfig);

    this.permissions = {};

    /**
     * Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.emailMessage - A plain text custom message to include in the notification email.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {boolean} apiParams.enforceSingleParent - Deprecated: See `moveToNewOwnersRoot` for details.
     * @param {string} apiParams.fileId - (Required) The ID of the file or shared drive.
     * @param {boolean} apiParams.moveToNewOwnersRoot - This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
     * @param {boolean} apiParams.sendNotificationEmail - Whether to send a notification email when sharing to users or groups. This defaults to `true` for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.transferOwnership - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'POST', apiParams, clientConfig);

    /**
     * Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} apiParams.fileId - (Required) The ID of the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID of the permission.
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
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.permissionId - (Required) The ID of the permission.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a file's or shared drive's permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file or shared drive.
     * @param {string} apiParams.includePermissionsForView - Specifies which additional view's permissions to include in the response. Only 'published' is supported.
     * @param {integer} apiParams.pageSize - The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'GET', apiParams, clientConfig);

    /**
     * Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enforceExpansiveAccess - Whether the request should enforce expansive access rules.
     * @param {string} apiParams.fileId - (Required) The ID of the file or shared drive.
     * @param {string} apiParams.permissionId - (Required) The ID of the permission.
     * @param {boolean} apiParams.removeExpiration - Whether to remove the expiration date.
     * @param {boolean} apiParams.supportsAllDrives - Whether the requesting application supports both My Drives and shared drives.
     * @param {boolean} apiParams.supportsTeamDrives - Deprecated: Use `supportsAllDrives` instead.
     * @param {boolean} apiParams.transferOwnership - Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
     * @param {boolean} apiParams.useDomainAdminAccess - Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', apiParams, clientConfig);

    this.replies = {};

    /**
     * Creates a reply to a comment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', apiParams, clientConfig);

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
     * Gets a reply by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - Whether to return deleted replies. Deleted replies will not include their original content.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a comment's replies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {boolean} apiParams.includeDeleted - Whether to include deleted replies. Deleted replies will not include their original content.
     * @param {integer} apiParams.pageSize - The maximum number of replies to return per page.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', apiParams, clientConfig);

    /**
     * Updates a reply with patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commentId - (Required) The ID of the comment.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.replyId - (Required) The ID of the reply.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.replies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', apiParams, clientConfig);

    this.revisions = {};

    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.revisionId - (Required) The ID of the revision.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgeAbuse - Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.revisionId - (Required) The ID of the revision.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {integer} apiParams.pageSize - The maximum number of revisions to return per page.
     * @param {string} apiParams.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions', 'GET', apiParams, clientConfig);

    /**
     * Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the file.
     * @param {string} apiParams.revisionId - (Required) The ID of the revision.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', apiParams, clientConfig);

    this.teamdrives = {};

    /**
     * Deprecated: Use `drives.create` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - (Required) Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.teamdrives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives', 'POST', apiParams, clientConfig);

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
     * Deprecated: Use `drives.list` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of Team Drives to return.
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
    this.teamdrives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'PATCH', apiParams, clientConfig);

    this.accessproposals = {};

    /**
     * Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) Required. The ID of the item the request is on.
     * @param {string} apiParams.proposalId - (Required) Required. The ID of the access proposal to resolve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accessproposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}', 'GET', apiParams, clientConfig);

    /**
     * Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) Required. The ID of the item the request is on.
     * @param {string} apiParams.proposalId - (Required) Required. The ID of the access proposal to resolve.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accessproposals.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}:resolve', 'POST', apiParams, clientConfig);

    /**
     * List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) Required. The ID of the item the request is on.
     * @param {integer} apiParams.pageSize - Optional. The number of results per page.
     * @param {string} apiParams.pageToken - Optional. The continuation token on the list of access requests.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accessproposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/accessproposals', 'GET', apiParams, clientConfig);
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
