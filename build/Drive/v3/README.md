# Google Drive API - Apps Script Client Library

Auto-generated client library for using the **Google Drive API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:34:10 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:15 GMT
- **Created:** Sun, 20 Jul 2025 16:32:36 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `about`

#### `about.get()`

Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|

### `apps`

#### `apps.get()`

Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appId` | `string` | Yes | The ID of the app. |

#### `apps.list()`

Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appFilterExtensions` | `string` | No | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. |
| `params.appFilterMimeTypes` | `string` | No | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. |
| `params.languageCode` | `string` | No | A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). |

### `changes`

#### `changes.getStartPageToken()`

Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |

#### `changes.list()`

Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeRemoved` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.pageSize` | `integer` | No | The maximum number of changes to return per page. |
| `params.pageToken` | `string` | Yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `params.restrictToMyDrive` | `boolean` | No | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `changes.watch()`

Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeRemoved` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.pageSize` | `integer` | No | The maximum number of changes to return per page. |
| `params.pageToken` | `string` | Yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `params.restrictToMyDrive` | `boolean` | No | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

### `channels`

#### `channels.stop()`

Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `comments`

#### `comments.create()`

Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.resource` | `object` | Yes | The request body. |

#### `comments.delete()`

Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |

#### `comments.get()`

Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.includeDeleted` | `boolean` | No | Whether to return deleted comments. Deleted comments will not include their original content. |

#### `comments.list()`

Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.includeDeleted` | `boolean` | No | Whether to include deleted comments. Deleted comments will not include their original content. |
| `params.pageSize` | `integer` | No | The maximum number of comments to return per page. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |
| `params.startModifiedTime` | `string` | No | The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). |

#### `comments.update()`

Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.resource` | `object` | Yes | The request body. |

### `drives`

#### `drives.create()`

Creates a shared drive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `drives.delete()`

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |
| `params.allowItemDeletion` | `boolean` | No | Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`. |

#### `drives.get()`

Gets a shared drive's metadata by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |

#### `drives.hide()`

Hides a shared drive from the default view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |

#### `drives.list()`

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of shared drives to return per page. |
| `params.pageToken` | `string` | No | Page token for shared drives. |
| `params.q` | `string` | No | Query string for searching shared drives. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. |

#### `drives.unhide()`

Restores a shared drive to the default view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |

#### `drives.update()`

Updates the metadata for a shared drive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |
| `params.resource` | `object` | Yes | The request body. |

### `files`

#### `files.copy()`

Creates a copy of a file and applies any requested updates with patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead. |
| `params.ignoreDefaultVisibility` | `boolean` | No | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.create()`

 Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enforceSingleParent` | `boolean` | No | Deprecated. Creating files in multiple folders is no longer supported. |
| `params.ignoreDefaultVisibility` | `boolean` | No | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the uploaded content as indexable text. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.delete()`

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. |

#### `files.emptyTrash()`

Permanently deletes all of the user's trashed files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root. |
| `params.driveId` | `string` | No | If set, empties the trash of the provided shared drive. |

#### `files.export()`

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.mimeType` | `string` | Yes | Required. The MIME type of the format requested for this export. |

#### `files.generateIds()`

Generates a set of file IDs which can be provided in create or copy requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.count` | `integer` | No | The number of IDs to return. |
| `params.space` | `string` | No | The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive') |
| `params.type` | `string` | No | The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files') |

#### `files.get()`

 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.list()`

 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.corpora` | `string` | No | Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter. |
| `params.corpus` | `string` | No | Deprecated: The source of files to list. Use 'corpora' instead. |
| `params.driveId` | `string` | No | ID of the shared drive to search. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.orderBy` | `string` | No | A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`. |
| `params.pageSize` | `integer` | No | The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |
| `params.q` | `string` | No | A query for filtering the file results. See the "Search for files & folders" guide for supported syntax. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.listLabels()`

Lists the labels on a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file. |
| `params.maxResults` | `integer` | No | The maximum number of labels to return per page. When not set, defaults to 100. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |

#### `files.modifyLabels()`

Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to which the labels belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.update()`

 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.addParents` | `string` | No | A comma-separated list of parent IDs to add. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.removeParents` | `string` | No | A comma-separated list of parent IDs to remove. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the uploaded content as indexable text. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.watch()`

Subscribes to changes to a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.download()`

Downloads content of a file. Operations are valid for 24 hours from the time of creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The ID of the file to download. |
| `params.mimeType` | `string` | No | Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. See [Export MIME types for Google Workspace documents](/drive/api/guides/ref-export-formats) for the list of supported MIME types. If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future. |
| `params.revisionId` | `string` | No | Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported. |

### `permissions`

#### `permissions.create()`

Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.emailMessage` | `string` | No | A plain text custom message to include in the notification email. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: See `moveToNewOwnersRoot` for details. |
| `params.moveToNewOwnersRoot` | `boolean` | No | This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed. |
| `params.sendNotificationEmail` | `boolean` | No | Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.transferOwnership` | `boolean` | No | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.resource` | `object` | Yes | The request body. |

#### `permissions.delete()`

Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |

#### `permissions.get()`

Gets a permission by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |

#### `permissions.list()`

Lists a file's or shared drive's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.pageSize` | `integer` | No | The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |

#### `permissions.update()`

Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.removeExpiration` | `boolean` | No | Whether to remove the expiration date. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.transferOwnership` | `boolean` | No | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.resource` | `object` | Yes | The request body. |

### `replies`

#### `replies.create()`

Creates a reply to a comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.resource` | `object` | Yes | The request body. |

#### `replies.delete()`

Deletes a reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |

#### `replies.get()`

Gets a reply by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.includeDeleted` | `boolean` | No | Whether to return deleted replies. Deleted replies will not include their original content. |

#### `replies.list()`

Lists a comment's replies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.includeDeleted` | `boolean` | No | Whether to include deleted replies. Deleted replies will not include their original content. |
| `params.pageSize` | `integer` | No | The maximum number of replies to return per page. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |

#### `replies.update()`

Updates a reply with patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.resource` | `object` | Yes | The request body. |

### `revisions`

#### `revisions.delete()`

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |

#### `revisions.get()`

Gets a revision's metadata or content by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |

#### `revisions.list()`

Lists a file's revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.pageSize` | `integer` | No | The maximum number of revisions to return per page. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |

#### `revisions.update()`

Updates a revision with patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |
| `params.resource` | `object` | Yes | The request body. |

### `teamdrives`

#### `teamdrives.create()`

Deprecated: Use `drives.create` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `teamdrives.delete()`

Deprecated: Use `drives.delete` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |

#### `teamdrives.get()`

Deprecated: Use `drives.get` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |

#### `teamdrives.list()`

Deprecated: Use `drives.list` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of Team Drives to return. |
| `params.pageToken` | `string` | No | Page token for Team Drives. |
| `params.q` | `string` | No | Query string for searching Team Drives. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. |

#### `teamdrives.update()`

Deprecated: Use `drives.update` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |
| `params.resource` | `object` | Yes | The request body. |

### `accessproposals`

#### `accessproposals.get()`

Retrieves an AccessProposal by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The id of the item the request is on. |
| `params.proposalId` | `string` | Yes | Required. The id of the access proposal to resolve. |

#### `accessproposals.resolve()`

Used to approve or deny an Access Proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The id of the item the request is on. |
| `params.proposalId` | `string` | Yes | Required. The id of the access proposal to resolve. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessproposals.list()`

List the AccessProposals on a file. Note: Only approvers are able to list AccessProposals on a file. If the user is not an approver, returns a 403.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The id of the item the request is on. |
| `params.pageToken` | `string` | No | Optional. The continuation token on the list of access requests. |
| `params.pageSize` | `integer` | No | Optional. The number of results per page |