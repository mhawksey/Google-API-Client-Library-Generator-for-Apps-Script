# Google Drive API - Apps Script Client Library

Auto-generated client library for using the **Google Drive API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:48:06 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:13 GMT
- **Created:** Sun, 20 Jul 2025 16:32:33 GMT



---

## API Reference

### `about`

#### `about.get()`

Gets the information about the current user along with Drive API settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.includeSubscribed` | `boolean` | No | Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`. |
| `params.maxChangeIdCount` | `string` | No | Maximum number of remaining change IDs to count |
| `params.startChangeId` | `string` | No | Change ID to start counting from when calculating number of remaining change IDs |

### `apps`

#### `apps.get()`

Gets a specific app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appId` | `string` | Yes | The ID of the app. |

#### `apps.list()`

Lists a user's installed apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appFilterExtensions` | `string` | No | A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. |
| `params.appFilterMimeTypes` | `string` | No | A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. |
| `params.languageCode` | `string` | No | A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). |

### `changes`

#### `changes.get()`

Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.changeId` | `string` | Yes | The ID of the change. |
| `params.driveId` | `string` | No | The shared drive from which the change will be returned. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |

#### `changes.getStartPageToken()`

Gets the starting pageToken for listing future changes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |

#### `changes.list()`

Lists the changes for a user or shared drive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.includeDeleted` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeSubscribed` | `boolean` | No | Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.maxResults` | `integer` | No | Maximum number of changes to return. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. |
| `params.startChangeId` | `string` | No | Deprecated: Use `pageToken` instead. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `changes.watch()`

Subscribe to changes for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.includeDeleted` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeSubscribed` | `boolean` | No | Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.maxResults` | `integer` | No | Maximum number of changes to return. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`. |
| `params.startChangeId` | `string` | No | Deprecated: Use `pageToken` instead. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

### `channels`

#### `channels.stop()`

Stops watching resources through this channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `children`

#### `children.delete()`

Removes a child from a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The ID of the folder. |
| `params.childId` | `string` | Yes | The ID of the child. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root. |

#### `children.get()`

Gets a specific child reference.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The ID of the folder. |
| `params.childId` | `string` | Yes | The ID of the child. |

#### `children.insert()`

Inserts a file into a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The ID of the folder. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.resource` | `object` | Yes | The request body. |

#### `children.list()`

Lists a folder's children.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The ID of the folder. |
| `params.maxResults` | `integer` | No | Maximum number of children to return. |
| `params.orderBy` | `string` | No | A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored. |
| `params.pageToken` | `string` | No | Page token for children. |
| `params.q` | `string` | No | Query string for searching children. |

### `comments`

#### `comments.delete()`

Deletes a comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |

#### `comments.get()`

Gets a comment by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.includeDeleted` | `boolean` | No | If set, this will succeed when retrieving a deleted comment, and will include any deleted replies. |

#### `comments.insert()`

Creates a new comment on the given file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.resource` | `object` | Yes | The request body. |

#### `comments.list()`

Lists a file's comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.includeDeleted` | `boolean` | No | If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned. |
| `params.maxResults` | `integer` | No | The maximum number of discussions to include in the response, used for paging. |
| `params.pageToken` | `string` | No | The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. |
| `params.updatedMin` | `string` | No | Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp. |

#### `comments.patch()`

Updates an existing comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.resource` | `object` | Yes | The request body. |

#### `comments.update()`

Updates an existing comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.resource` | `object` | Yes | The request body. |

### `drives`

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

#### `drives.insert()`

Creates a new shared drive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `drives.list()`

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of shared drives to return per page. |
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

Creates a copy of the specified file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to copy. |
| `params.convert` | `boolean` | No | Whether to convert this file to the corresponding Docs Editors format. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. |
| `params.ocr` | `boolean` | No | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. |
| `params.ocrLanguage` | `string` | No | If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes. |
| `params.pinned` | `boolean` | No | Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.timedTextLanguage` | `string` | No | The language of the timed text. |
| `params.timedTextTrackName` | `string` | No | The timed text track name. |
| `params.visibility` | `string` | No | The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.delete()`

Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to delete. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. |

#### `files.emptyTrash()`

Permanently deletes all of the user's trashed files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root. |
| `params.driveId` | `string` | No | If set, empties the trash of the provided shared drive. |

#### `files.export()`

Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.mimeType` | `string` | Yes | Required. The MIME type of the format requested for this export. |

#### `files.generateIds()`

Generates a set of file IDs which can be provided in insert or copy requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of IDs to return. |
| `params.space` | `string` | No | The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`) |
| `params.type` | `string` | No | The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`) |

#### `files.get()`

 Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/workspace/drive/api/guides/manage-downloads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file in question. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.projection` | `string` | No | Deprecated: This parameter has no function. |
| `params.revisionId` | `string` | No | Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.updateViewedDate` | `boolean` | No | Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.insert()`

 Inserts a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.convert` | `boolean` | No | Whether to convert this file to the corresponding Docs Editors format. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Creating files in multiple folders is no longer supported. |
| `params.ocr` | `boolean` | No | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. |
| `params.ocrLanguage` | `string` | No | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. |
| `params.pinned` | `boolean` | No | Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.timedTextLanguage` | `string` | No | The language of the timed text. |
| `params.timedTextTrackName` | `string` | No | The timed text track name. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the content as indexable text. |
| `params.visibility` | `string` | No | The visibility of the new file. This parameter is only relevant when convert=false. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.list()`

 Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/workspace/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.corpora` | `string` | No | Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency. |
| `params.corpus` | `string` | No | Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead. |
| `params.driveId` | `string` | No | ID of the shared drive to search. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.maxResults` | `integer` | No | The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. |
| `params.orderBy` | `string` | No | A comma-separated list of sort keys. Valid keys are: * `createdDate`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `lastViewedByMeDate`: The last time the file was viewed by the user. * `modifiedByMeDate`: The last time the file was modified by the user. * `modifiedDate`: The last time the file was modified by anyone. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeDate`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `title`: The title of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `title_natural`: The title of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: `?orderBy=folder,modifiedDate desc,title`. Note that there's a current limitation for users with approximately one million files in which the requested sort order is ignored. |
| `params.pageToken` | `string` | No | Page token for files. |
| `params.projection` | `string` | No | Deprecated: This parameter has no function. |
| `params.q` | `string` | No | Query string for searching files. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.listLabels()`

Lists the labels on a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file. |
| `params.maxResults` | `integer` | No | The maximum number of labels to return per page. When not set, defaults to 100. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |

#### `files.modifyLabels()`

Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to which the labels belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.patch()`

Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to update. |
| `params.addParents` | `string` | No | Comma-separated list of parent IDs to add. |
| `params.convert` | `boolean` | No | Deprecated: This parameter has no function. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. |
| `params.modifiedDateBehavior` | `string` | No | Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. |
| `params.newRevision` | `boolean` | No | Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request. |
| `params.ocr` | `boolean` | No | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. |
| `params.ocrLanguage` | `string` | No | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. |
| `params.pinned` | `boolean` | No | Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request. |
| `params.removeParents` | `string` | No | Comma-separated list of parent IDs to remove. |
| `params.setModifiedDate` | `boolean` | No | Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.timedTextLanguage` | `string` | No | The language of the timed text. |
| `params.timedTextTrackName` | `string` | No | The timed text track name. |
| `params.updateViewedDate` | `boolean` | No | Whether to update the view date after successfully updating the file. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the content as indexable text. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.touch()`

Set the file's updated time to the current server time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to update. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.trash()`

Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to trash. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.untrash()`

Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to untrash. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.update()`

 Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to update. |
| `params.addParents` | `string` | No | Comma-separated list of parent IDs to add. |
| `params.convert` | `boolean` | No | Deprecated: This parameter has no function. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. |
| `params.modifiedDateBehavior` | `string` | No | Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`. |
| `params.newRevision` | `boolean` | No | Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). |
| `params.ocr` | `boolean` | No | Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads. |
| `params.ocrLanguage` | `string` | No | If ocr is true, hints at the language to use. Valid values are BCP 47 codes. |
| `params.pinned` | `boolean` | No | Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. |
| `params.removeParents` | `string` | No | Comma-separated list of parent IDs to remove. |
| `params.setModifiedDate` | `boolean` | No | Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.timedTextLanguage` | `string` | No | The language of the timed text. |
| `params.timedTextTrackName` | `string` | No | The timed text track name. |
| `params.updateViewedDate` | `boolean` | No | Whether to update the view date after successfully updating the file. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the content as indexable text. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

#### `files.watch()`

Subscribes to changes to a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file in question. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.revisionId` | `string` | No | Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified. |
| `params.updateViewedDate` | `boolean` | No | Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body. |
| `params.projection` | `string` | No | Deprecated: This parameter has no function. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.resource` | `object` | Yes | The request body. |

### `parents`

#### `parents.delete()`

Removes a parent from a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.parentId` | `string` | Yes | The ID of the parent. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root. |

#### `parents.get()`

Gets a specific parent reference.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.parentId` | `string` | Yes | The ID of the parent. |

#### `parents.insert()`

Adds a parent folder for a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.resource` | `object` | Yes | The request body. |

#### `parents.list()`

Lists a file's parents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |

### `permissions`

#### `permissions.delete()`

Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID for the permission. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |

#### `permissions.get()`

Gets a permission by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID for the permission. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |

#### `permissions.getIdForEmail()`

Returns the permission ID for an email address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.email` | `string` | Yes | The email address for which to return a permission ID |

#### `permissions.insert()`

Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.emailMessage` | `string` | No | A plain text custom message to include in notification emails. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: See `moveToNewOwnersRoot` for details. |
| `params.moveToNewOwnersRoot` | `boolean` | No | This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed. |
| `params.sendNotificationEmails` | `boolean` | No | Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.resource` | `object` | Yes | The request body. |

#### `permissions.list()`

Lists a file's or shared drive's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.maxResults` | `integer` | No | The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |

#### `permissions.patch()`

Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID for the permission. |
| `params.removeExpiration` | `boolean` | No | Whether to remove the expiration date. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.transferOwnership` | `boolean` | No | Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.resource` | `object` | Yes | The request body. |

#### `permissions.update()`

Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file or shared drive. |
| `params.permissionId` | `string` | Yes | The ID for the permission. |
| `params.removeExpiration` | `boolean` | No | Whether to remove the expiration date. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.transferOwnership` | `boolean` | No | Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.resource` | `object` | Yes | The request body. |

### `properties`

#### `properties.delete()`

Deletes a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.propertyKey` | `string` | Yes | The key of the property. |
| `params.visibility` | `string` | No | The visibility of the property. |

#### `properties.get()`

Gets a property by its key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.propertyKey` | `string` | Yes | The key of the property. |
| `params.visibility` | `string` | No | The visibility of the property. |

#### `properties.insert()`

Adds a property to a file, or updates it if it already exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.list()`

Lists a file's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |

#### `properties.patch()`

Updates a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.propertyKey` | `string` | Yes | The key of the property. |
| `params.visibility` | `string` | No | The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.update()`

Updates a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.propertyKey` | `string` | Yes | The key of the property. |
| `params.visibility` | `string` | No | The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE) |
| `params.resource` | `object` | Yes | The request body. |

### `replies`

#### `replies.delete()`

Deletes a reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |

#### `replies.get()`

Gets a reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.includeDeleted` | `boolean` | No | If set, this will succeed when retrieving a deleted reply. |

#### `replies.insert()`

Creates a new reply to the given comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.resource` | `object` | Yes | The request body. |

#### `replies.list()`

Lists all of the replies to a comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.includeDeleted` | `boolean` | No | If set, all replies, including deleted replies (with content stripped) will be returned. |
| `params.maxResults` | `integer` | No | The maximum number of replies to include in the response, used for paging. |
| `params.pageToken` | `string` | No | The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. |

#### `replies.patch()`

Updates an existing reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.resource` | `object` | Yes | The request body. |

#### `replies.update()`

Updates an existing reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.resource` | `object` | Yes | The request body. |

### `revisions`

#### `revisions.delete()`

Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |

#### `revisions.get()`

Gets a specific revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |

#### `revisions.list()`

Lists a file's revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.maxResults` | `integer` | No | Maximum number of revisions to return. |
| `params.pageToken` | `string` | No | Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. |

#### `revisions.patch()`

Updates a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file. |
| `params.revisionId` | `string` | Yes | The ID for the revision. |
| `params.resource` | `object` | Yes | The request body. |

#### `revisions.update()`

Updates a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file. |
| `params.revisionId` | `string` | Yes | The ID for the revision. |
| `params.resource` | `object` | Yes | The request body. |

### `teamdrives`

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

#### `teamdrives.insert()`

Deprecated: Use `drives.insert` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `teamdrives.list()`

Deprecated: Use `drives.list` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of Team Drives to return. |
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