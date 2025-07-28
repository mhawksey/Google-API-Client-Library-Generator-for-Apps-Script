
/**
 * Google Apps Script client library for the Cloud Storage JSON API
 * Documentation URL: https://developers.google.com/storage/docs/json_api/
 * @class
 */
class Storage {
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
    this._rootUrl = 'https://storage.googleapis.com/';
    this._servicePath = 'storage/v1/';

    // --- Public Interface Initialization ---

    this.anywhereCaches = {};

    /**
     * Creates an Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.anywhereCaches.insert = (params) => this._makeRequest('b/{bucket}/anywhereCaches', 'POST', params);

    /**
     * Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.
     * @param {string} params.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.anywhereCaches.update = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'PATCH', params);

    /**
     * Returns the metadata of an Anywhere Cache instance.
     * @param {string} params.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @return {object} The API response object.
     */
    this.anywhereCaches.get = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'GET', params);

    /**
     * Returns a list of Anywhere Cache instances of the bucket matching the criteria.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @param {integer} params.pageSize - Maximum number of items to return in a single page of responses. Maximum 1000.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @return {object} The API response object.
     */
    this.anywhereCaches.list = (params) => this._makeRequest('b/{bucket}/anywhereCaches', 'GET', params);

    /**
     * Pauses an Anywhere Cache instance.
     * @param {string} params.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @return {object} The API response object.
     */
    this.anywhereCaches.pause = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/pause', 'POST', params);

    /**
     * Resumes a paused or disabled Anywhere Cache instance.
     * @param {string} params.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @return {object} The API response object.
     */
    this.anywhereCaches.resume = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/resume', 'POST', params);

    /**
     * Disables an Anywhere Cache instance.
     * @param {string} params.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} params.bucket - (Required) Name of the parent bucket.
     * @return {object} The API response object.
     */
    this.anywhereCaches.disable = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/disable', 'POST', params);

    this.bucketAccessControls = {};

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.delete = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'DELETE', params);

    /**
     * Returns the ACL entry for the specified entity on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.get = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'GET', params);

    /**
     * Creates a new ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.insert = (params) => this._makeRequest('b/{bucket}/acl', 'POST', params);

    /**
     * Retrieves ACL entries on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.list = (params) => this._makeRequest('b/{bucket}/acl', 'GET', params);

    /**
     * Patches an ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.patch = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'PATCH', params);

    /**
     * Updates an ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bucketAccessControls.update = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'PUT', params);

    this.buckets = {};

    /**
     * Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.ifMetagenerationMatch - If set, only deletes the bucket if its metageneration matches this value.
     * @param {string} params.ifMetagenerationNotMatch - If set, only deletes the bucket if its metageneration does not match this value.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.delete = (params) => this._makeRequest('b/{bucket}', 'DELETE', params);

    /**
     * Restores a soft-deleted bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.generation - (Required) Generation of a bucket.
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.restore = (params) => this._makeRequest('b/{bucket}/restore', 'POST', params);

    /**
     * Initiates a long-running Relocate Bucket operation on the specified bucket.
     * @param {string} params.bucket - (Required) Name of the bucket to be moved.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buckets.relocate = (params) => this._makeRequest('b/{bucket}/relocate', 'POST', params);

    /**
     * Returns metadata for the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.generation - If present, specifies the generation of the bucket. This is required if softDeleted is true.
     * @param {string} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} params.softDeleted - If true, return the soft-deleted version of this bucket. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.get = (params) => this._makeRequest('b/{bucket}', 'GET', params);

    /**
     * Returns an IAM policy for the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {integer} params.optionsRequestedPolicyVersion - The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.getIamPolicy = (params) => this._makeRequest('b/{bucket}/iam', 'GET', params);

    /**
     * Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.list permission.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.prefix - An optional prefix used for permission check. It is useful when the caller only has storage.objects.list permission under a specific prefix.
     * @return {object} The API response object.
     */
    this.buckets.getStorageLayout = (params) => this._makeRequest('b/{bucket}/storageLayout', 'GET', params);

    /**
     * Creates a new bucket.
     * @param {boolean} params.enableObjectRetention - When set to true, object retention is enabled for this bucket.
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} params.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} params.project - (Required) A valid API project identifier.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     * @param {string} params.userProject - The project to be billed for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buckets.insert = (params) => this._makeRequest('b', 'POST', params);

    /**
     * Retrieves a list of buckets for a given project.
     * @param {integer} params.maxResults - Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.prefix - Filter results to buckets whose names begin with this prefix.
     * @param {string} params.project - (Required) A valid API project identifier.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} params.softDeleted - If true, only soft-deleted bucket versions will be returned. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.buckets.list = (params) => this._makeRequest('b', 'GET', params);

    /**
     * Locks retention policy on a bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.ifMetagenerationMatch - (Required) Makes the operation conditional on whether bucket's current metageneration matches the given value.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.lockRetentionPolicy = (params) => this._makeRequest('b/{bucket}/lockRetentionPolicy', 'POST', params);

    /**
     * Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} params.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buckets.patch = (params) => this._makeRequest('b/{bucket}', 'PATCH', params);

    /**
     * Updates an IAM policy for the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buckets.setIamPolicy = (params) => this._makeRequest('b/{bucket}/iam', 'PUT', params);

    /**
     * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.permissions - (Required) Permissions to test.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.buckets.testIamPermissions = (params) => this._makeRequest('b/{bucket}/iam/testPermissions', 'GET', params);

    /**
     * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} params.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buckets.update = (params) => this._makeRequest('b/{bucket}', 'PUT', params);

    this.operations = {};

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed.
     * @param {string} params.bucket - (Required) The parent bucket of the operation resource.
     * @param {string} params.operationId - (Required) The ID of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('b/{bucket}/operations/{operationId}/cancel', 'POST', params);

    /**
     * Gets the latest state of a long-running operation.
     * @param {string} params.bucket - (Required) The parent bucket of the operation resource.
     * @param {string} params.operationId - (Required) The ID of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('b/{bucket}/operations/{operationId}', 'GET', params);

    /**
     * Starts asynchronous advancement of the relocate bucket operation in the case of required write downtime, to allow it to lock the bucket at the source location, and proceed with the bucket location swap. The server makes a best effort to advance the relocate bucket operation, but success is not guaranteed.
     * @param {string} params.bucket - (Required) Name of the bucket to advance the relocate for.
     * @param {string} params.operationId - (Required) ID of the operation resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.operations.advanceRelocateBucket = (params) => this._makeRequest('b/{bucket}/operations/{operationId}/advanceRelocateBucket', 'POST', params);

    /**
     * Lists operations that match the specified filter in the request.
     * @param {string} params.bucket - (Required) Name of the bucket in which to look for operations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('b/{bucket}/operations', 'GET', params);

    this.channels = {};

    /**
     * Stop watching resources through this channel
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.defaultObjectAccessControls = {};

    /**
     * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.delete = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'DELETE', params);

    /**
     * Returns the default object ACL entry for the specified entity on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.get = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'GET', params);

    /**
     * Creates a new default object ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.insert = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'POST', params);

    /**
     * Retrieves default object ACL entries on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.ifMetagenerationMatch - If present, only return default ACL listing if the bucket's current metageneration matches this value.
     * @param {string} params.ifMetagenerationNotMatch - If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.list = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'GET', params);

    /**
     * Patches a default object ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.patch = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PATCH', params);

    /**
     * Updates a default object ACL entry on the specified bucket.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.defaultObjectAccessControls.update = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PUT', params);

    this.folders = {};

    /**
     * Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {string} params.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {string} params.folder - (Required) Name of a folder.
     * @param {string} params.ifMetagenerationMatch - If set, only deletes the folder if its metageneration matches this value.
     * @param {string} params.ifMetagenerationNotMatch - If set, only deletes the folder if its metageneration does not match this value.
     * @return {object} The API response object.
     */
    this.folders.delete = (params) => this._makeRequest('b/{bucket}/folders/{folder}', 'DELETE', params);

    /**
     * Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {string} params.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {string} params.folder - (Required) Name of a folder.
     * @param {string} params.ifMetagenerationMatch - Makes the return of the folder metadata conditional on whether the folder's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the return of the folder metadata conditional on whether the folder's current metageneration does not match the given value.
     * @return {object} The API response object.
     */
    this.folders.get = (params) => this._makeRequest('b/{bucket}/folders/{folder}', 'GET', params);

    /**
     * Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {string} params.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {boolean} params.recursive - If true, any parent folder which doesn't exist will be created automatically.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.insert = (params) => this._makeRequest('b/{bucket}/folders', 'POST', params);

    /**
     * Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.
     * @param {string} params.bucket - (Required) Name of the bucket in which to look for folders.
     * @param {string} params.delimiter - Returns results in a directory-like mode. The only supported value is '/'. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix.
     * @param {string} params.endOffset - Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {integer} params.pageSize - Maximum number of items to return in a single page of responses.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.prefix - Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a '/'.
     * @param {string} params.startOffset - Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @return {object} The API response object.
     */
    this.folders.list = (params) => this._makeRequest('b/{bucket}/folders', 'GET', params);

    /**
     * Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {string} params.bucket - (Required) Name of the bucket in which the folders are in.
     * @param {string} params.destinationFolder - (Required) Name of the destination folder.
     * @param {string} params.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} params.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} params.sourceFolder - (Required) Name of the source folder.
     * @return {object} The API response object.
     */
    this.folders.rename = (params) => this._makeRequest('b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}', 'POST', params);

    this.managedFolders = {};

    /**
     * Permanently deletes a managed folder.
     * @param {boolean} params.allowNonEmpty - Allows the deletion of a managed folder even if it is not empty. A managed folder is empty if there are no objects or managed folders that it applies to. Callers must have storage.managedFolders.setIamPolicy permission.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} params.ifMetagenerationMatch - If set, only deletes the managed folder if its metageneration matches this value.
     * @param {string} params.ifMetagenerationNotMatch - If set, only deletes the managed folder if its metageneration does not match this value.
     * @param {string} params.managedFolder - (Required) The managed folder name/path.
     * @return {object} The API response object.
     */
    this.managedFolders.delete = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'DELETE', params);

    /**
     * Returns metadata of the specified managed folder.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} params.ifMetagenerationMatch - Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration does not match the given value.
     * @param {string} params.managedFolder - (Required) The managed folder name/path.
     * @return {object} The API response object.
     */
    this.managedFolders.get = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'GET', params);

    /**
     * Returns an IAM policy for the specified managed folder.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} params.managedFolder - (Required) The managed folder name/path.
     * @param {integer} params.optionsRequestedPolicyVersion - The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.managedFolders.getIamPolicy = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'GET', params);

    /**
     * Creates a new managed folder.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedFolders.insert = (params) => this._makeRequest('b/{bucket}/managedFolders', 'POST', params);

    /**
     * Lists managed folders in the given bucket.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {integer} params.pageSize - Maximum number of items to return in a single page of responses.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.prefix - The managed folder name/path prefix to filter the output list of results.
     * @return {object} The API response object.
     */
    this.managedFolders.list = (params) => this._makeRequest('b/{bucket}/managedFolders', 'GET', params);

    /**
     * Updates an IAM policy for the specified managed folder.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} params.managedFolder - (Required) The managed folder name/path.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedFolders.setIamPolicy = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'PUT', params);

    /**
     * Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.
     * @param {string} params.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} params.managedFolder - (Required) The managed folder name/path.
     * @param {string} params.permissions - (Required) Permissions to test.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.managedFolders.testIamPermissions = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions', 'GET', params);

    this.notifications = {};

    /**
     * Permanently deletes a notification subscription.
     * @param {string} params.bucket - (Required) The parent bucket of the notification.
     * @param {string} params.notification - (Required) ID of the notification to delete.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.notifications.delete = (params) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'DELETE', params);

    /**
     * View a notification configuration.
     * @param {string} params.bucket - (Required) The parent bucket of the notification.
     * @param {string} params.notification - (Required) Notification ID
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.notifications.get = (params) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'GET', params);

    /**
     * Creates a notification subscription for a given bucket.
     * @param {string} params.bucket - (Required) The parent bucket of the notification.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.notifications.insert = (params) => this._makeRequest('b/{bucket}/notificationConfigs', 'POST', params);

    /**
     * Retrieves a list of notification subscriptions for a given bucket.
     * @param {string} params.bucket - (Required) Name of a Google Cloud Storage bucket.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.notifications.list = (params) => this._makeRequest('b/{bucket}/notificationConfigs', 'GET', params);

    this.objectAccessControls = {};

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objectAccessControls.delete = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'DELETE', params);

    /**
     * Returns the ACL entry for the specified entity on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objectAccessControls.get = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'GET', params);

    /**
     * Creates a new ACL entry on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objectAccessControls.insert = (params) => this._makeRequest('b/{bucket}/o/{object}/acl', 'POST', params);

    /**
     * Retrieves ACL entries on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objectAccessControls.list = (params) => this._makeRequest('b/{bucket}/o/{object}/acl', 'GET', params);

    /**
     * Patches an ACL entry on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objectAccessControls.patch = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PATCH', params);

    /**
     * Updates an ACL entry on the specified object.
     * @param {string} params.bucket - (Required) Name of a bucket.
     * @param {string} params.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objectAccessControls.update = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PUT', params);

    this.objects = {};

    /**
     * Concatenates a list of existing objects into a new object in the same bucket.
     * @param {string} params.destinationBucket - (Required) Name of the bucket containing the source objects. The destination object is stored in this bucket.
     * @param {string} params.destinationObject - (Required) Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.kmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.compose = (params) => this._makeRequest('b/{destinationBucket}/o/{destinationObject}/compose', 'POST', params);

    /**
     * Copies a source object to a destination object. Optionally overrides metadata.
     * @param {string} params.destinationBucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.destinationKmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} params.destinationObject - (Required) Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param {string} params.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param {string} params.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value.
     * @param {string} params.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value.
     * @param {string} params.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} params.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} params.sourceBucket - (Required) Name of the bucket in which to find the source object.
     * @param {string} params.sourceGeneration - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param {string} params.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.copy = (params) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}', 'POST', params);

    /**
     * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.delete = (params) => this._makeRequest('b/{bucket}/o/{object}', 'DELETE', params);

    /**
     * Retrieves an object or its metadata.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} params.restoreToken - Restore token used to differentiate soft-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets and if softDeleted is set to true. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation.
     * @param {boolean} params.softDeleted - If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.get = (params) => this._makeRequest('b/{bucket}/o/{object}', 'GET', params);

    /**
     * Returns an IAM policy for the specified object.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.getIamPolicy = (params) => this._makeRequest('b/{bucket}/o/{object}/iam', 'GET', params);

    /**
     * Stores a new object and metadata.
     * @param {string} params.bucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string} params.contentEncoding - If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.kmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} params.name - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.insert = (params) => this._makeRequest('b/{bucket}/o', 'POST', params);

    /**
     * Retrieves a list of objects matching the criteria.
     * @param {string} params.bucket - (Required) Name of the bucket in which to look for objects.
     * @param {string} params.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {string} params.endOffset - Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} params.filter - Filter the returned objects. Currently only supported for the contexts field. If delimiter is set, the returned prefixes are exempt from this filter.
     * @param {boolean} params.includeFoldersAsPrefixes - Only applicable if delimiter is set to '/'. If true, will also include folders and managed folders (besides objects) in the returned prefixes.
     * @param {boolean} params.includeTrailingDelimiter - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     * @param {string} params.matchGlob - Filter results to objects and prefixes that match this glob pattern.
     * @param {integer} params.maxResults - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.prefix - Filter results to objects whose names begin with this prefix.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} params.softDeleted - If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} params.startOffset - Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {boolean} params.versions - If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning).
     * @return {object} The API response object.
     */
    this.objects.list = (params) => this._makeRequest('b/{bucket}/o', 'GET', params);

    /**
     * Patches an object's metadata.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {boolean} params.overrideUnlockedRetention - Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.userProject - The project to be billed for this request, for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.patch = (params) => this._makeRequest('b/{bucket}/o/{object}', 'PATCH', params);

    /**
     * Rewrites a source object to a destination object. Optionally overrides metadata.
     * @param {string} params.destinationBucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string} params.destinationKmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} params.destinationObject - (Required) Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param {string} params.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value.
     * @param {string} params.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value.
     * @param {string} params.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} params.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} params.maxBytesRewrittenPerCall - The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} params.rewriteToken - Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
     * @param {string} params.sourceBucket - (Required) Name of the bucket in which to find the source object.
     * @param {string} params.sourceGeneration - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param {string} params.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.rewrite = (params) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}', 'POST', params);

    /**
     * Moves the source object to the destination object in the same bucket.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.destinationObject - (Required) Name of the destination object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. `ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.`ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} params.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.move = (params) => this._makeRequest('b/{bucket}/o/{sourceObject}/moveTo/o/{destinationObject}', 'POST', params);

    /**
     * Updates an IAM policy for the specified object.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.setIamPolicy = (params) => this._makeRequest('b/{bucket}/o/{object}/iam', 'PUT', params);

    /**
     * Tests a set of permissions on the given object to see which, if any, are held by the caller.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.permissions - (Required) Permissions to test.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.testIamPermissions = (params) => this._makeRequest('b/{bucket}/o/{object}/iam/testPermissions', 'GET', params);

    /**
     * Updates an object's metadata.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {boolean} params.overrideUnlockedRetention - Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     * @param {string} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.update = (params) => this._makeRequest('b/{bucket}/o/{object}', 'PUT', params);

    /**
     * Watch for changes on all objects in a bucket.
     * @param {string} params.bucket - (Required) Name of the bucket in which to look for objects.
     * @param {string} params.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {string} params.endOffset - Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {boolean} params.includeTrailingDelimiter - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     * @param {integer} params.maxResults - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.prefix - Filter results to objects whose names begin with this prefix.
     * @param {string} params.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} params.startOffset - Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {boolean} params.versions - If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.watchAll = (params) => this._makeRequest('b/{bucket}/o/watch', 'POST', params);

    /**
     * Restores a soft-deleted object.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {boolean} params.copySourceAcl - If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false.
     * @param {string} params.generation - (Required) Selects a specific revision of this object.
     * @param {string} params.ifGenerationMatch - Makes the operation conditional on whether the object's one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} params.ifGenerationNotMatch - Makes the operation conditional on whether none of the object's live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's one live metageneration matches the given value.
     * @param {string} params.ifMetagenerationNotMatch - Makes the operation conditional on whether none of the object's live metagenerations match the given value.
     * @param {string} params.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} params.projection - Set of properties to return. Defaults to full.
     * @param {string} params.restoreToken - Restore token used to differentiate sof-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation.
     * @param {string} params.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @return {object} The API response object.
     */
    this.objects.restore = (params) => this._makeRequest('b/{bucket}/o/{object}/restore', 'POST', params);

    /**
     * Initiates a long-running bulk restore operation on the specified bucket.
     * @param {string} params.bucket - (Required) Name of the bucket in which the object resides.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.objects.bulkRestore = (params) => this._makeRequest('b/{bucket}/o/bulkRestore', 'POST', params);

    this.projects = {};

    this.projects.hmacKeys = {};

    /**
     * Creates a new HMAC key for the specified service account.
     * @param {string} params.projectId - (Required) Project ID owning the service account.
     * @param {string} params.serviceAccountEmail - (Required) Email address of the service account.
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.projects.hmacKeys.create = (params) => this._makeRequest('projects/{projectId}/hmacKeys', 'POST', params);

    /**
     * Deletes an HMAC key.
     * @param {string} params.accessId - (Required) Name of the HMAC key to be deleted.
     * @param {string} params.projectId - (Required) Project ID owning the requested key
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.projects.hmacKeys.delete = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'DELETE', params);

    /**
     * Retrieves an HMAC key's metadata
     * @param {string} params.accessId - (Required) Name of the HMAC key.
     * @param {string} params.projectId - (Required) Project ID owning the service account of the requested key.
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.projects.hmacKeys.get = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'GET', params);

    /**
     * Retrieves a list of HMAC keys matching the criteria.
     * @param {integer} params.maxResults - Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.
     * @param {string} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.projectId - (Required) Name of the project in which to look for HMAC keys.
     * @param {string} params.serviceAccountEmail - If present, only keys for the given service account are returned.
     * @param {boolean} params.showDeletedKeys - Whether or not to show keys in the DELETED state.
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.projects.hmacKeys.list = (params) => this._makeRequest('projects/{projectId}/hmacKeys', 'GET', params);

    /**
     * Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys/update#request-body) for valid states.
     * @param {string} params.accessId - (Required) Name of the HMAC key being updated.
     * @param {string} params.projectId - (Required) Project ID owning the service account of the updated key.
     * @param {string} params.userProject - The project to be billed for this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.hmacKeys.update = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'PUT', params);

    this.projects.serviceAccount = {};

    /**
     * Get the email address of this project's Google Cloud Storage service account.
     * @param {string} params.projectId - (Required) Project ID
     * @param {string} params.userProject - The project to be billed for this request.
     * @return {object} The API response object.
     */
    this.projects.serviceAccount.get = (params) => this._makeRequest('projects/{projectId}/serviceAccount', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
