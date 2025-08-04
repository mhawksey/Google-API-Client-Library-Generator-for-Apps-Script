# Cloud Storage JSON API - Apps Script Client Library

Auto-generated client library for using the **Cloud Storage JSON API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:47:20 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:47:20 GMT
- **Created:** Sun, 20 Jul 2025 16:55:09 GMT



---

## API Reference

### `anywhereCaches`

#### `anywhereCaches.insert()`

Creates an Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.resource` | `object` | Yes | The request body. |

#### `anywhereCaches.update()`

Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.anywhereCacheId` | `string` | Yes | The ID of requested Anywhere Cache instance. |
| `params.resource` | `object` | Yes | The request body. |

#### `anywhereCaches.get()`

Returns the metadata of an Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.anywhereCacheId` | `string` | Yes | The ID of requested Anywhere Cache instance. |

#### `anywhereCaches.list()`

Returns a list of Anywhere Cache instances of the bucket matching the criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.pageSize` | `integer` | No | Maximum number of items to return in a single page of responses. Maximum 1000. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

#### `anywhereCaches.pause()`

Pauses an Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.anywhereCacheId` | `string` | Yes | The ID of requested Anywhere Cache instance. |

#### `anywhereCaches.resume()`

Resumes a paused or disabled Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.anywhereCacheId` | `string` | Yes | The ID of requested Anywhere Cache instance. |

#### `anywhereCaches.disable()`

Disables an Anywhere Cache instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the parent bucket. |
| `params.anywhereCacheId` | `string` | Yes | The ID of requested Anywhere Cache instance. |

### `bucketAccessControls`

#### `bucketAccessControls.delete()`

Permanently deletes the ACL entry for the specified entity on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `bucketAccessControls.get()`

Returns the ACL entry for the specified entity on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `bucketAccessControls.insert()`

Creates a new ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `bucketAccessControls.list()`

Retrieves ACL entries on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `bucketAccessControls.patch()`

Patches an ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `bucketAccessControls.update()`

Updates an ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

### `buckets`

#### `buckets.delete()`

Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.ifMetagenerationMatch` | `string` | No | If set, only deletes the bucket if its metageneration matches this value. |
| `params.ifMetagenerationNotMatch` | `string` | No | If set, only deletes the bucket if its metageneration does not match this value. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.restore()`

Restores a soft-deleted bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.generation` | `string` | Yes | Generation of a bucket. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.relocate()`

Initiates a long-running Relocate Bucket operation on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket to be moved. |
| `params.resource` | `object` | Yes | The request body. |

#### `buckets.get()`

Returns metadata for the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.generation` | `string` | No | If present, specifies the generation of the bucket. This is required if softDeleted is true. |
| `params.softDeleted` | `boolean` | No | If true, return the soft-deleted version of this bucket. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete). |
| `params.ifMetagenerationMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.getIamPolicy()`

Returns an IAM policy for the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.optionsRequestedPolicyVersion` | `integer` | No | The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.getStorageLayout()`

Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.list permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.prefix` | `string` | No | An optional prefix used for permission check. It is useful when the caller only has storage.objects.list permission under a specific prefix. |

#### `buckets.insert()`

Creates a new bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this bucket. |
| `params.predefinedDefaultObjectAcl` | `string` | No | Apply a predefined set of default object access controls to this bucket. |
| `params.project` | `string` | Yes | A valid API project identifier. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. |
| `params.enableObjectRetention` | `boolean` | No | When set to true, object retention is enabled for this bucket. |
| `params.resource` | `object` | Yes | The request body. |

#### `buckets.list()`

Retrieves a list of buckets for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.prefix` | `string` | No | Filter results to buckets whose names begin with this prefix. |
| `params.softDeleted` | `boolean` | No | If true, only soft-deleted bucket versions will be returned. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete). |
| `params.project` | `string` | Yes | A valid API project identifier. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.userProject` | `string` | No | The project to be billed for this request. |

#### `buckets.lockRetentionPolicy()`

Locks retention policy on a bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.ifMetagenerationMatch` | `string` | Yes | Makes the operation conditional on whether bucket's current metageneration matches the given value. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.patch()`

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. |
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this bucket. |
| `params.predefinedDefaultObjectAcl` | `string` | No | Apply a predefined set of default object access controls to this bucket. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `buckets.setIamPolicy()`

Updates an IAM policy for the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `buckets.testIamPermissions()`

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.permissions` | `string` | Yes | Permissions to test. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `buckets.update()`

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value. |
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this bucket. |
| `params.predefinedDefaultObjectAcl` | `string` | No | Apply a predefined set of default object access controls to this bucket. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

### `operations`

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | The parent bucket of the operation resource. |
| `params.operationId` | `string` | Yes | The ID of the operation resource. |

#### `operations.get()`

Gets the latest state of a long-running operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | The parent bucket of the operation resource. |
| `params.operationId` | `string` | Yes | The ID of the operation resource. |

#### `operations.advanceRelocateBucket()`

Starts asynchronous advancement of the relocate bucket operation in the case of required write downtime, to allow it to lock the bucket at the source location, and proceed with the bucket location swap. The server makes a best effort to advance the relocate bucket operation, but success is not guaranteed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket to advance the relocate for. |
| `params.operationId` | `string` | Yes | ID of the operation resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `operations.list()`

Lists operations that match the specified filter in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.bucket` | `string` | Yes | Name of the bucket in which to look for operations. |
| `params.pageSize` | `integer` | No | Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |

### `channels`

#### `channels.stop()`

Stop watching resources through this channel

| `params.resource` | `object` | Yes | The request body. |

### `defaultObjectAccessControls`

#### `defaultObjectAccessControls.delete()`

Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `defaultObjectAccessControls.get()`

Returns the default object ACL entry for the specified entity on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `defaultObjectAccessControls.insert()`

Creates a new default object ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `defaultObjectAccessControls.list()`

Retrieves default object ACL entries on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.ifMetagenerationMatch` | `string` | No | If present, only return default ACL listing if the bucket's current metageneration matches this value. |
| `params.ifMetagenerationNotMatch` | `string` | No | If present, only return default ACL listing if the bucket's current metageneration does not match the given value. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `defaultObjectAccessControls.patch()`

Patches a default object ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `defaultObjectAccessControls.update()`

Updates a default object ACL entry on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

### `folders`

#### `folders.delete()`

Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the folder resides. |
| `params.folder` | `string` | Yes | Name of a folder. |
| `params.ifMetagenerationMatch` | `string` | No | If set, only deletes the folder if its metageneration matches this value. |
| `params.ifMetagenerationNotMatch` | `string` | No | If set, only deletes the folder if its metageneration does not match this value. |

#### `folders.get()`

Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the folder resides. |
| `params.folder` | `string` | Yes | Name of a folder. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the return of the folder metadata conditional on whether the folder's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the return of the folder metadata conditional on whether the folder's current metageneration does not match the given value. |

#### `folders.insert()`

Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the folder resides. |
| `params.recursive` | `boolean` | No | If true, any parent folder which doesn't exist will be created automatically. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.list()`

Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which to look for folders. |
| `params.delimiter` | `string` | No | Returns results in a directory-like mode. The only supported value is '/'. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix. |
| `params.endOffset` | `string` | No | Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). |
| `params.pageSize` | `integer` | No | Maximum number of items to return in a single page of responses. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.prefix` | `string` | No | Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a '/'. |
| `params.startOffset` | `string` | No | Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive). |

#### `folders.rename()`

Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the folders are in. |
| `params.destinationFolder` | `string` | Yes | Name of the destination folder. |
| `params.ifSourceMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration matches the given value. |
| `params.ifSourceMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration does not match the given value. |
| `params.sourceFolder` | `string` | Yes | Name of the source folder. |

### `managedFolders`

#### `managedFolders.delete()`

Permanently deletes a managed folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.managedFolder` | `string` | Yes | The managed folder name/path. |
| `params.ifMetagenerationMatch` | `string` | No | If set, only deletes the managed folder if its metageneration matches this value. |
| `params.ifMetagenerationNotMatch` | `string` | No | If set, only deletes the managed folder if its metageneration does not match this value. |
| `params.allowNonEmpty` | `boolean` | No | Allows the deletion of a managed folder even if it is not empty. A managed folder is empty if there are no objects or managed folders that it applies to. Callers must have storage.managedFolders.setIamPolicy permission. |

#### `managedFolders.get()`

Returns metadata of the specified managed folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.managedFolder` | `string` | Yes | The managed folder name/path. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration does not match the given value. |

#### `managedFolders.getIamPolicy()`

Returns an IAM policy for the specified managed folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.optionsRequestedPolicyVersion` | `integer` | No | The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails. |
| `params.managedFolder` | `string` | Yes | The managed folder name/path. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `managedFolders.insert()`

Creates a new managed folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedFolders.list()`

Lists managed folders in the given bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.pageSize` | `integer` | No | Maximum number of items to return in a single page of responses. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.prefix` | `string` | No | The managed folder name/path prefix to filter the output list of results. |

#### `managedFolders.setIamPolicy()`

Updates an IAM policy for the specified managed folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.managedFolder` | `string` | Yes | The managed folder name/path. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedFolders.testIamPermissions()`

Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket containing the managed folder. |
| `params.managedFolder` | `string` | Yes | The managed folder name/path. |
| `params.permissions` | `string` | Yes | Permissions to test. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

### `notifications`

#### `notifications.delete()`

Permanently deletes a notification subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | The parent bucket of the notification. |
| `params.notification` | `string` | Yes | ID of the notification to delete. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `notifications.get()`

View a notification configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | The parent bucket of the notification. |
| `params.notification` | `string` | Yes | Notification ID |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `notifications.insert()`

Creates a notification subscription for a given bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | The parent bucket of the notification. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `notifications.list()`

Retrieves a list of notification subscriptions for a given bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a Google Cloud Storage bucket. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

### `objectAccessControls`

#### `objectAccessControls.delete()`

Permanently deletes the ACL entry for the specified entity on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objectAccessControls.get()`

Returns the ACL entry for the specified entity on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objectAccessControls.insert()`

Creates a new ACL entry on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objectAccessControls.list()`

Retrieves ACL entries on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objectAccessControls.patch()`

Patches an ACL entry on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objectAccessControls.update()`

Updates an ACL entry on the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of a bucket. |
| `params.entity` | `string` | Yes | The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

### `objects`

#### `objects.compose()`

Concatenates a list of existing objects into a new object in the same bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destinationBucket` | `string` | Yes | Name of the bucket containing the source objects. The destination object is stored in this bucket. |
| `params.destinationObject` | `string` | Yes | Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.destinationPredefinedAcl` | `string` | No | Apply a predefined set of access controls to the destination object. |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.kmsKeyName` | `string` | No | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.copy()`

Copies a source object to a destination object. Optionally overrides metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destinationBucket` | `string` | Yes | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.destinationKmsKeyName` | `string` | No | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. |
| `params.destinationObject` | `string` | Yes | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. |
| `params.destinationPredefinedAcl` | `string` | No | Apply a predefined set of access controls to the destination object. |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. |
| `params.ifSourceGenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation matches the given value. |
| `params.ifSourceGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation does not match the given value. |
| `params.ifSourceMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration matches the given value. |
| `params.ifSourceMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration does not match the given value. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. |
| `params.sourceBucket` | `string` | Yes | Name of the bucket in which to find the source object. |
| `params.sourceGeneration` | `string` | No | If present, selects a specific revision of the source object (as opposed to the latest version, the default). |
| `params.sourceObject` | `string` | Yes | Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.delete()`

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default). |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration does not match the given value. |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objects.get()`

Retrieves an object or its metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration does not match the given value. |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.softDeleted` | `boolean` | No | If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete). |
| `params.restoreToken` | `string` | No | Restore token used to differentiate soft-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets and if softDeleted is set to true. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation. |

#### `objects.getIamPolicy()`

Returns an IAM policy for the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objects.insert()`

Stores a new object and metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any. |
| `params.contentEncoding` | `string` | No | If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded. |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration does not match the given value. |
| `params.kmsKeyName` | `string` | No | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. |
| `params.name` | `string` | No | Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this object. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.list()`

Retrieves a list of objects matching the criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which to look for objects. |
| `params.delimiter` | `string` | No | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. |
| `params.endOffset` | `string` | No | Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). |
| `params.includeTrailingDelimiter` | `boolean` | No | If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. |
| `params.maxResults` | `integer` | No | Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.prefix` | `string` | No | Filter results to objects whose names begin with this prefix. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.startOffset` | `string` | No | Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.versions` | `boolean` | No | If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning). |
| `params.matchGlob` | `string` | No | Filter results to objects and prefixes that match this glob pattern. |
| `params.filter` | `string` | No | Filter the returned objects. Currently only supported for the contexts field. If delimiter is set, the returned prefixes are exempt from this filter. |
| `params.softDeleted` | `boolean` | No | If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete). |
| `params.includeFoldersAsPrefixes` | `boolean` | No | Only applicable if delimiter is set to '/'. If true, will also include folders and managed folders (besides objects) in the returned prefixes. |

#### `objects.patch()`

Patches an object's metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration does not match the given value. |
| `params.overrideUnlockedRetention` | `boolean` | No | Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this object. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request, for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.rewrite()`

Rewrites a source object to a destination object. Optionally overrides metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destinationBucket` | `string` | Yes | Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any. |
| `params.destinationKmsKeyName` | `string` | No | Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any. |
| `params.destinationObject` | `string` | Yes | Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.destinationPredefinedAcl` | `string` | No | Apply a predefined set of access controls to the destination object. |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. |
| `params.ifSourceGenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation matches the given value. |
| `params.ifSourceGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation does not match the given value. |
| `params.ifSourceMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration matches the given value. |
| `params.ifSourceMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration does not match the given value. |
| `params.maxBytesRewrittenPerCall` | `string` | No | The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full. |
| `params.rewriteToken` | `string` | No | Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request. |
| `params.sourceBucket` | `string` | Yes | Name of the bucket in which to find the source object. |
| `params.sourceGeneration` | `string` | No | If present, selects a specific revision of the source object (as opposed to the latest version, the default). |
| `params.sourceObject` | `string` | Yes | Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.move()`

Moves the source object to the destination object in the same bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.sourceObject` | `string` | Yes | Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.destinationObject` | `string` | Yes | Name of the destination object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.ifSourceGenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation matches the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifSourceGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current generation does not match the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifSourceMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration matches the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifSourceMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the source object's current metageneration does not match the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. `ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.`ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration matches the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the destination object's current metageneration does not match the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objects.setIamPolicy()`

Updates an IAM policy for the specified object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.testIamPermissions()`

Tests a set of permissions on the given object to see which, if any, are held by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.permissions` | `string` | Yes | Permissions to test. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |

#### `objects.update()`

Updates an object's metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | No | If present, selects a specific revision of this object (as opposed to the latest version, the default). |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether the object's current metageneration does not match the given value. |
| `params.overrideUnlockedRetention` | `boolean` | No | Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked. |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.predefinedAcl` | `string` | No | Apply a predefined set of access controls to this object. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.watchAll()`

Watch for changes on all objects in a bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which to look for objects. |
| `params.delimiter` | `string` | No | Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted. |
| `params.endOffset` | `string` | No | Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). |
| `params.includeTrailingDelimiter` | `boolean` | No | If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes. |
| `params.maxResults` | `integer` | No | Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.prefix` | `string` | No | Filter results to objects whose names begin with this prefix. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to noAcl. |
| `params.startOffset` | `string` | No | Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive). |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.versions` | `boolean` | No | If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning). |
| `params.resource` | `object` | Yes | The request body. |

#### `objects.restore()`

Restores a soft-deleted object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.generation` | `string` | Yes | Selects a specific revision of this object. |
| `params.object` | `string` | Yes | Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding). |
| `params.ifGenerationMatch` | `string` | No | Makes the operation conditional on whether the object's one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. |
| `params.ifGenerationNotMatch` | `string` | No | Makes the operation conditional on whether none of the object's live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object. |
| `params.ifMetagenerationMatch` | `string` | No | Makes the operation conditional on whether the object's one live metageneration matches the given value. |
| `params.ifMetagenerationNotMatch` | `string` | No | Makes the operation conditional on whether none of the object's live metagenerations match the given value. |
| `params.copySourceAcl` | `boolean` | No | If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false. |
| `params.projection` | `string` | No | Set of properties to return. Defaults to full. |
| `params.userProject` | `string` | No | The project to be billed for this request. Required for Requester Pays buckets. |
| `params.restoreToken` | `string` | No | Restore token used to differentiate sof-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation. |

#### `objects.bulkRestore()`

Initiates a long-running bulk restore operation on the specified bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Name of the bucket in which the object resides. |
| `params.resource` | `object` | Yes | The request body. |

### `projects`

### `projects.hmacKeys`

#### `projects.hmacKeys.create()`

Creates a new HMAC key for the specified service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project ID owning the service account. |
| `params.serviceAccountEmail` | `string` | Yes | Email address of the service account. |
| `params.userProject` | `string` | No | The project to be billed for this request. |

#### `projects.hmacKeys.delete()`

Deletes an HMAC key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessId` | `string` | Yes | Name of the HMAC key to be deleted. |
| `params.projectId` | `string` | Yes | Project ID owning the requested key |
| `params.userProject` | `string` | No | The project to be billed for this request. |

#### `projects.hmacKeys.get()`

Retrieves an HMAC key's metadata

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessId` | `string` | Yes | Name of the HMAC key. |
| `params.projectId` | `string` | Yes | Project ID owning the service account of the requested key. |
| `params.userProject` | `string` | No | The project to be billed for this request. |

#### `projects.hmacKeys.list()`

Retrieves a list of HMAC keys matching the criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned. |
| `params.pageToken` | `string` | No | A previously-returned page token representing part of the larger set of results to view. |
| `params.projectId` | `string` | Yes | Name of the project in which to look for HMAC keys. |
| `params.serviceAccountEmail` | `string` | No | If present, only keys for the given service account are returned. |
| `params.showDeletedKeys` | `boolean` | No | Whether or not to show keys in the DELETED state. |
| `params.userProject` | `string` | No | The project to be billed for this request. |

#### `projects.hmacKeys.update()`

Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys/update#request-body) for valid states.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accessId` | `string` | Yes | Name of the HMAC key being updated. |
| `params.projectId` | `string` | Yes | Project ID owning the service account of the updated key. |
| `params.userProject` | `string` | No | The project to be billed for this request. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.serviceAccount`

#### `projects.serviceAccount.get()`

Get the email address of this project's Google Cloud Storage service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project ID |
| `params.userProject` | `string` | No | The project to be billed for this request. |