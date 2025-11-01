# Google Drive API - Apps Script Client Library

Auto-generated client library for using the **Google Drive API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:44:23 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:44:23 GMT
- **Created:** Sun, 20 Jul 2025 16:32:36 GMT



---

## API Reference

### `teamdrives`

#### `teamdrives.get()`

Deprecated: Use `drives.get` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |

#### `teamdrives.create()`

Deprecated: Use `drives.create` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `teamdrives.delete()`

Deprecated: Use `drives.delete` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |

#### `teamdrives.list()`

Deprecated: Use `drives.list` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. |
| `params.pageSize` | `integer` | No | Maximum number of Team Drives to return. |
| `params.q` | `string` | No | Query string for searching Team Drives. |
| `params.pageToken` | `string` | No | Page token for Team Drives. |

#### `teamdrives.update()`

Deprecated: Use `drives.update` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |
| `params.teamDriveId` | `string` | Yes | The ID of the Team Drive |
| `params.requestBody` | `object` | Yes | The request body. |

### `accessproposals`

#### `accessproposals.list()`

List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The number of results per page. |
| `params.pageToken` | `string` | No | Optional. The continuation token on the list of access requests. |
| `params.fileId` | `string` | Yes | Required. The ID of the item the request is on. |

#### `accessproposals.get()`

Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.proposalId` | `string` | Yes | Required. The ID of the access proposal to resolve. |
| `params.fileId` | `string` | Yes | Required. The ID of the item the request is on. |

#### `accessproposals.resolve()`

Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The ID of the item the request is on. |
| `params.proposalId` | `string` | Yes | Required. The ID of the access proposal to resolve. |
| `params.requestBody` | `object` | Yes | The request body. |

### `files`

#### `files.delete()`

Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. |

#### `files.modifyLabels()`

Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file to which the labels belong. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `files.update()`

 Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the uploaded content as indexable text. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.removeParents` | `string` | No | A comma-separated list of parent IDs to remove. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.addParents` | `string` | No | A comma-separated list of parent IDs to add. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `files.download()`

Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | Required. The ID of the file to download. |
| `params.revisionId` | `string` | No | Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported. |
| `params.mimeType` | `string` | No | Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). If not set, a Google Workspace document is downloaded with a default MIME type. The default MIME type might change in the future. |

#### `files.export()`

Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mimeType` | `string` | Yes | Required. The MIME type of the format requested for this export. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). |
| `params.fileId` | `string` | Yes | The ID of the file. |

#### `files.watch()`

Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `files.generateIds()`

Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.type` | `string` | No | The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |
| `params.space` | `string` | No | The space in which the IDs can be used to create files. Supported values are `drive` and `appDataFolder`. (Default: `drive`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |
| `params.count` | `integer` | No | The number of IDs to return. |

#### `files.list()`

 Lists the user's files. For more information, see [Search for files and folders](/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.q` | `string` | No | A query for filtering the file results. For supported syntax, see [Search for files and folders](/workspace/drive/api/guides/search-files). |
| `params.driveId` | `string` | No | ID of the shared drive to search. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.corpus` | `string` | No | Deprecated: The source of files to list. Use `corpora` instead. |
| `params.pageSize` | `integer` | No | The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.orderBy` | `string` | No | A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. * `folder`: The folder ID. This field is sorted using alphabetical ordering. * `modifiedByMeTime`: The last time the file was modified by the user. * `modifiedTime`: The last time the file was modified by anyone. * `name`: The name of the file. This field is sorted using alphabetical ordering, so 1, 12, 2, 22. * `name_natural`: The name of the file. This field is sorted using natural sort ordering, so 1, 2, 12, 22. * `quotaBytesUsed`: The number of storage quota bytes used by the file. * `recency`: The most recent timestamp from the file's date-time fields. * `sharedWithMeTime`: When the file was shared with the user, if applicable. * `starred`: Whether the user has starred the file. * `viewedByMeTime`: The last time the file was viewed by the user. Each key sorts ascending by default, but can be reversed with the `desc` modifier. Example usage: `?orderBy=folder,modifiedTime desc,name`. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.corpora` | `string` | No | Bodies of items (files or documents) to which the query applies. Supported bodies are: * `user` * `domain` * `drive` * `allDrives` Prefer `user` or `drive` to `allDrives` for efficiency. By default, corpora is set to `user`. However, this can change depending on the filter set through the `q` parameter. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are `drive` and `appDataFolder`. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |

#### `files.emptyTrash()`

Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enforceSingleParent` | `boolean` | No | Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. |
| `params.driveId` | `string` | No | If set, empties the trash of the provided shared drive. |

#### `files.get()`

 Gets a file's metadata or content by ID. For more information, see [Search for files and folders](/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](/workspace/drive/api/guides/manage-downloads).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |

#### `files.listLabels()`

Lists the labels on a file. For more information, see [List labels on a file](https://developers.google.com/workspace/drive/api/guides/list-labels).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID for the file. |
| `params.maxResults` | `integer` | No | The maximum number of labels to return per page. When not set, defaults to 100. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |

#### `files.create()`

 Creates a file. For more information, see [Create and manage files](/workspace/drive/api/guides/create-file). This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Creating files in multiple folders is no longer supported. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.useContentAsIndexableText` | `boolean` | No | Whether to use the uploaded content as indexable text. |
| `params.ignoreDefaultVisibility` | `boolean` | No | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `files.copy()`

Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.ignoreDefaultVisibility` | `boolean` | No | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `params.keepRevisionForever` | `boolean` | No | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.ocrLanguage` | `string` | No | A language hint for OCR processing during image import (ISO 639-1 code). |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.requestBody` | `object` | Yes | The request body. |

### `revisions`

#### `revisions.get()`

Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.acknowledgeAbuse` | `boolean` | No | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |
| `params.fileId` | `string` | Yes | The ID of the file. |

#### `revisions.delete()`

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.revisionId` | `string` | Yes | The ID of the revision. |

#### `revisions.list()`

Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.pageSize` | `integer` | No | The maximum number of revisions to return per page. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |

#### `revisions.update()`

Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.revisionId` | `string` | Yes | The ID of the revision. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.requestBody` | `object` | Yes | The request body. |

### `channels`

#### `channels.stop()`

Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `drives`

#### `drives.create()`

Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | Yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `drives.unhide()`

Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |

#### `drives.update()`

Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |
| `params.driveId` | `string` | Yes | The ID of the shared drive. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `drives.delete()`

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |
| `params.allowItemDeletion` | `boolean` | No | Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |

#### `drives.hide()`

Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | Yes | The ID of the shared drive. |

#### `drives.get()`

Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |
| `params.driveId` | `string` | Yes | The ID of the shared drive. |

#### `drives.list()`

 Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/workspace/drive/api/guides/search-shareddrives) guide.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. |
| `params.q` | `string` | No | Query string for searching shared drives. |
| `params.pageToken` | `string` | No | Page token for shared drives. |
| `params.pageSize` | `integer` | No | Maximum number of shared drives to return per page. |

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `replies`

#### `replies.create()`

Creates a reply to a comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `replies.get()`

Gets a reply by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.includeDeleted` | `boolean` | No | Whether to return deleted replies. Deleted replies will not include their original content. |
| `params.replyId` | `string` | Yes | The ID of the reply. |

#### `replies.list()`

Lists a comment's replies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |
| `params.includeDeleted` | `boolean` | No | Whether to include deleted replies. Deleted replies will not include their original content. |
| `params.pageSize` | `integer` | No | The maximum number of replies to return per page. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |

#### `replies.delete()`

Deletes a reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.replyId` | `string` | Yes | The ID of the reply. |

#### `replies.update()`

Updates a reply with patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.replyId` | `string` | Yes | The ID of the reply. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.requestBody` | `object` | Yes | The request body. |

### `permissions`

#### `permissions.delete()`

Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). |

#### `permissions.create()`

Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.enforceSingleParent` | `boolean` | No | Deprecated: See `moveToNewOwnersRoot` for details. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.emailMessage` | `string` | No | A plain text custom message to include in the notification email. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). |
| `params.sendNotificationEmail` | `boolean` | No | Whether to send a notification email when sharing to users or groups. This defaults to `true` for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. |
| `params.transferOwnership` | `boolean` | No | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com/workspace/drive/api/guides/transfer-file). |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.moveToNewOwnersRoot` | `boolean` | No | This parameter only takes effect if the item isn't in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item is moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents aren't changed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `permissions.get()`

Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |

#### `permissions.update()`

Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.transferOwnership` | `boolean` | No | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com//workspace/drive/api/guides/transfer-file). |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.enforceExpansiveAccess` | `boolean` | No | Whether the request should enforce expansive access rules. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). |
| `params.removeExpiration` | `boolean` | No | Whether to remove the expiration date. |
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `permissions.list()`

Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |
| `params.fileId` | `string` | Yes | The ID of the file or shared drive. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.pageSize` | `integer` | No | The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. |
| `params.useDomainAdminAccess` | `boolean` | No | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more information, see [Manage shared drives as domain administrators](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives#manage-administrators). |

### `comments`

#### `comments.update()`

Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `comments.create()`

Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `comments.list()`

Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of comments to return per page. |
| `params.includeDeleted` | `boolean` | No | Whether to include deleted comments. Deleted comments will not include their original content. |
| `params.startModifiedTime` | `string` | No | The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.pageToken` | `string` | No | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |

#### `comments.get()`

Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |
| `params.includeDeleted` | `boolean` | No | Whether to return deleted comments. Deleted comments will not include their original content. |

#### `comments.delete()`

Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentId` | `string` | Yes | The ID of the comment. |
| `params.fileId` | `string` | Yes | The ID of the file. |

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
| `params.appFilterMimeTypes` | `string` | No | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. |
| `params.appFilterExtensions` | `string` | No | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. |
| `params.languageCode` | `string` | No | A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). |

### `changes`

#### `changes.list()`

Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.restrictToMyDrive` | `boolean` | No | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.pageToken` | `string` | Yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.pageSize` | `integer` | No | The maximum number of changes to return per page. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.includeRemoved` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |

#### `changes.watch()`

Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.pageToken` | `string` | Yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `params.includeTeamDriveItems` | `boolean` | No | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |
| `params.includeCorpusRemovals` | `boolean` | No | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `params.driveId` | `string` | No | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `params.includeLabels` | `string` | No | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `params.spaces` | `string` | No | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `params.pageSize` | `integer` | No | The maximum number of changes to return per page. |
| `params.includeItemsFromAllDrives` | `boolean` | No | Whether both My Drive and shared drive items should be included in results. |
| `params.includeRemoved` | `boolean` | No | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `params.restrictToMyDrive` | `boolean` | No | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `params.includePermissionsForView` | `string` | No | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `changes.getStartPageToken()`

Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.driveId` | `string` | No | The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. |
| `params.supportsAllDrives` | `boolean` | No | Whether the requesting application supports both My Drives and shared drives. |
| `params.supportsTeamDrives` | `boolean` | No | Deprecated: Use `supportsAllDrives` instead. |
| `params.teamDriveId` | `string` | No | Deprecated: Use `driveId` instead. |

### `about`

#### `about.get()`

Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

| Parameter | Type | Required | Description |
|---|---|---|---|