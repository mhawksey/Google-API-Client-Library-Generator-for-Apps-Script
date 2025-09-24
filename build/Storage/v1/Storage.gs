
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://storage.googleapis.com/';
    this._servicePath = 'storage/v1/';


    this.anywhereCaches = {};

    /**
     * Creates an Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches', 'POST', apiParams, clientConfig);

    /**
     * Updates the config(ttl and admissionPolicy) of an Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns the metadata of an Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of Anywhere Cache instances of the bucket matching the criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {integer} apiParams.pageSize - Maximum number of items to return in a single page of responses. Maximum 1000.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches', 'GET', apiParams, clientConfig);

    /**
     * Pauses an Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/pause', 'POST', apiParams, clientConfig);

    /**
     * Resumes a paused or disabled Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/resume', 'POST', apiParams, clientConfig);

    /**
     * Disables an Anywhere Cache instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.anywhereCacheId - (Required) The ID of requested Anywhere Cache instance.
     * @param {string} apiParams.bucket - (Required) Name of the parent bucket.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.anywhereCaches.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/disable', 'POST', apiParams, clientConfig);

    this.bucketAccessControls = {};

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the ACL entry for the specified entity on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl', 'POST', apiParams, clientConfig);

    /**
     * Retrieves ACL entries on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl', 'GET', apiParams, clientConfig);

    /**
     * Patches an ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bucketAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'PUT', apiParams, clientConfig);

    this.buckets = {};

    /**
     * Deletes an empty bucket. Deletions are permanent unless soft delete is enabled on the bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.ifMetagenerationMatch - If set, only deletes the bucket if its metageneration matches this value.
     * @param {string} apiParams.ifMetagenerationNotMatch - If set, only deletes the bucket if its metageneration does not match this value.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'DELETE', apiParams, clientConfig);

    /**
     * Restores a soft-deleted bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.generation - (Required) Generation of a bucket.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/restore', 'POST', apiParams, clientConfig);

    /**
     * Initiates a long-running Relocate Bucket operation on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket to be moved.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.relocate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/relocate', 'POST', apiParams, clientConfig);

    /**
     * Returns metadata for the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.generation - If present, specifies the generation of the bucket. This is required if softDeleted is true.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} apiParams.softDeleted - If true, return the soft-deleted version of this bucket. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'GET', apiParams, clientConfig);

    /**
     * Returns an IAM policy for the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {integer} apiParams.optionsRequestedPolicyVersion - The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam', 'GET', apiParams, clientConfig);

    /**
     * Returns the storage layout configuration for the specified bucket. Note that this operation requires storage.objects.list permission.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.prefix - An optional prefix used for permission check. It is useful when the caller only has storage.objects.list permission under a specific prefix.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.getStorageLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/storageLayout', 'GET', apiParams, clientConfig);

    /**
     * Creates a new bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.enableObjectRetention - When set to true, object retention is enabled for this bucket.
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} apiParams.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} apiParams.project - (Required) A valid API project identifier.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of buckets for a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.prefix - Filter results to buckets whose names begin with this prefix.
     * @param {string} apiParams.project - (Required) A valid API project identifier.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} apiParams.softDeleted - If true, only soft-deleted bucket versions will be returned. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b', 'GET', apiParams, clientConfig);

    /**
     * Locks retention policy on a bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.ifMetagenerationMatch - (Required) Makes the operation conditional on whether bucket's current metageneration matches the given value.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.lockRetentionPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/lockRetentionPolicy', 'POST', apiParams, clientConfig);

    /**
     * Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} apiParams.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an IAM policy for the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam', 'PUT', apiParams, clientConfig);

    /**
     * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.permissions - (Required) Permissions to test.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam/testPermissions', 'GET', apiParams, clientConfig);

    /**
     * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param {string} apiParams.predefinedDefaultObjectAcl - Apply a predefined set of default object access controls to this bucket.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buckets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'PUT', apiParams, clientConfig);

    this.operations = {};

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) The parent bucket of the operation resource.
     * @param {string} apiParams.operationId - (Required) The ID of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}/cancel', 'POST', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) The parent bucket of the operation resource.
     * @param {string} apiParams.operationId - (Required) The ID of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous advancement of the relocate bucket operation in the case of required write downtime, to allow it to lock the bucket at the source location, and proceed with the bucket location swap. The server makes a best effort to advance the relocate bucket operation, but success is not guaranteed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket to advance the relocate for.
     * @param {string} apiParams.operationId - (Required) ID of the operation resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.advanceRelocateBucket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}/advanceRelocateBucket', 'POST', apiParams, clientConfig);

    /**
     * Lists operations that match the specified filter in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which to look for operations.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - Maximum number of items to return in a single page of responses. Fewer total results may be returned than requested. The service uses this parameter or 100 items, whichever is smaller.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations', 'GET', apiParams, clientConfig);

    this.channels = {};

    /**
     * Stop watching resources through this channel
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.defaultObjectAccessControls = {};

    /**
     * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the default object ACL entry for the specified entity on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new default object ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'POST', apiParams, clientConfig);

    /**
     * Retrieves default object ACL entries on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.ifMetagenerationMatch - If present, only return default ACL listing if the bucket's current metageneration matches this value.
     * @param {string} apiParams.ifMetagenerationNotMatch - If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'GET', apiParams, clientConfig);

    /**
     * Patches a default object ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a default object ACL entry on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.defaultObjectAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PUT', apiParams, clientConfig);

    this.folders = {};

    /**
     * Permanently deletes a folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {string} apiParams.folder - (Required) Name of a folder.
     * @param {string} apiParams.ifMetagenerationMatch - If set, only deletes the folder if its metageneration matches this value.
     * @param {string} apiParams.ifMetagenerationNotMatch - If set, only deletes the folder if its metageneration does not match this value.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{folder}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns metadata for the specified folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {string} apiParams.folder - (Required) Name of a folder.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the return of the folder metadata conditional on whether the folder's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the return of the folder metadata conditional on whether the folder's current metageneration does not match the given value.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{folder}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the folder resides.
     * @param {boolean} apiParams.recursive - If true, any parent folder which doesn't exist will be created automatically.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of folders matching the criteria. Only applicable to buckets with hierarchical namespace enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which to look for folders.
     * @param {string} apiParams.delimiter - Returns results in a directory-like mode. The only supported value is '/'. If set, items will only contain folders that either exactly match the prefix, or are one level below the prefix.
     * @param {string} apiParams.endOffset - Filter results to folders whose names are lexicographically before endOffset. If startOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {integer} apiParams.pageSize - Maximum number of items to return in a single page of responses.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.prefix - Filter results to folders whose paths begin with this prefix. If set, the value must either be an empty string or end with a '/'.
     * @param {string} apiParams.startOffset - Filter results to folders whose names are lexicographically equal to or after startOffset. If endOffset is also set, the folders listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders', 'GET', apiParams, clientConfig);

    /**
     * Renames a source folder to a destination folder. Only applicable to buckets with hierarchical namespace enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the folders are in.
     * @param {string} apiParams.destinationFolder - (Required) Name of the destination folder.
     * @param {string} apiParams.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} apiParams.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} apiParams.sourceFolder - (Required) Name of the source folder.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}', 'POST', apiParams, clientConfig);

    this.managedFolders = {};

    /**
     * Permanently deletes a managed folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowNonEmpty - Allows the deletion of a managed folder even if it is not empty. A managed folder is empty if there are no objects or managed folders that it applies to. Callers must have storage.managedFolders.setIamPolicy permission.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} apiParams.ifMetagenerationMatch - If set, only deletes the managed folder if its metageneration matches this value.
     * @param {string} apiParams.ifMetagenerationNotMatch - If set, only deletes the managed folder if its metageneration does not match this value.
     * @param {string} apiParams.managedFolder - (Required) The managed folder name/path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns metadata of the specified managed folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the return of the managed folder metadata conditional on whether the managed folder's current metageneration does not match the given value.
     * @param {string} apiParams.managedFolder - (Required) The managed folder name/path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'GET', apiParams, clientConfig);

    /**
     * Returns an IAM policy for the specified managed folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} apiParams.managedFolder - (Required) The managed folder name/path.
     * @param {integer} apiParams.optionsRequestedPolicyVersion - The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'GET', apiParams, clientConfig);

    /**
     * Creates a new managed folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders', 'POST', apiParams, clientConfig);

    /**
     * Lists managed folders in the given bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {integer} apiParams.pageSize - Maximum number of items to return in a single page of responses.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.prefix - The managed folder name/path prefix to filter the output list of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders', 'GET', apiParams, clientConfig);

    /**
     * Updates an IAM policy for the specified managed folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} apiParams.managedFolder - (Required) The managed folder name/path.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'PUT', apiParams, clientConfig);

    /**
     * Tests a set of permissions on the given managed folder to see which, if any, are held by the caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket containing the managed folder.
     * @param {string} apiParams.managedFolder - (Required) The managed folder name/path.
     * @param {string} apiParams.permissions - (Required) Permissions to test.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedFolders.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions', 'GET', apiParams, clientConfig);

    this.notifications = {};

    /**
     * Permanently deletes a notification subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) The parent bucket of the notification.
     * @param {string} apiParams.notification - (Required) ID of the notification to delete.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.notifications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'DELETE', apiParams, clientConfig);

    /**
     * View a notification configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) The parent bucket of the notification.
     * @param {string} apiParams.notification - (Required) Notification ID
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.notifications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'GET', apiParams, clientConfig);

    /**
     * Creates a notification subscription for a given bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) The parent bucket of the notification.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.notifications.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of notification subscriptions for a given bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a Google Cloud Storage bucket.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.notifications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs', 'GET', apiParams, clientConfig);

    this.objectAccessControls = {};

    /**
     * Permanently deletes the ACL entry for the specified entity on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the ACL entry for the specified entity on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new ACL entry on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl', 'POST', apiParams, clientConfig);

    /**
     * Retrieves ACL entries on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl', 'GET', apiParams, clientConfig);

    /**
     * Patches an ACL entry on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an ACL entry on the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of a bucket.
     * @param {string} apiParams.entity - (Required) The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objectAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PUT', apiParams, clientConfig);

    this.objects = {};

    /**
     * Concatenates a list of existing objects into a new object in the same bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinationBucket - (Required) Name of the bucket containing the source objects. The destination object is stored in this bucket.
     * @param {string} apiParams.destinationObject - (Required) Name of the new object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.kmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.compose = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{destinationBucket}/o/{destinationObject}/compose', 'POST', apiParams, clientConfig);

    /**
     * Copies a source object to a destination object. Optionally overrides metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinationBucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.destinationKmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} apiParams.destinationObject - (Required) Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param {string} apiParams.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param {string} apiParams.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value.
     * @param {string} apiParams.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value.
     * @param {string} apiParams.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} apiParams.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} apiParams.sourceBucket - (Required) Name of the bucket in which to find the source object.
     * @param {string} apiParams.sourceGeneration - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param {string} apiParams.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}', 'POST', apiParams, clientConfig);

    /**
     * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves an object or its metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} apiParams.restoreToken - Restore token used to differentiate soft-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets and if softDeleted is set to true. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation.
     * @param {boolean} apiParams.softDeleted - If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'GET', apiParams, clientConfig);

    /**
     * Returns an IAM policy for the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam', 'GET', apiParams, clientConfig);

    /**
     * Stores a new object and metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string} apiParams.contentEncoding - If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} apiParams.kmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} apiParams.name - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/storage/v1/b/{bucket}/o' : 'b/{bucket}/o';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Retrieves a list of objects matching the criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which to look for objects.
     * @param {string} apiParams.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {string} apiParams.endOffset - Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} apiParams.filter - Filter the returned objects. Currently only supported for the contexts field. If delimiter is set, the returned prefixes are exempt from this filter.
     * @param {boolean} apiParams.includeFoldersAsPrefixes - Only applicable if delimiter is set to '/'. If true, will also include folders and managed folders (besides objects) in the returned prefixes.
     * @param {boolean} apiParams.includeTrailingDelimiter - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     * @param {string} apiParams.matchGlob - Filter results to objects and prefixes that match this glob pattern.
     * @param {integer} apiParams.maxResults - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.prefix - Filter results to objects whose names begin with this prefix.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {boolean} apiParams.softDeleted - If true, only soft-deleted object versions will be listed. The default is false. For more information, see [Soft Delete](https://cloud.google.com/storage/docs/soft-delete).
     * @param {string} apiParams.startOffset - Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {boolean} apiParams.versions - If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o', 'GET', apiParams, clientConfig);

    /**
     * Patches an object's metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {boolean} apiParams.overrideUnlockedRetention - Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request, for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'PATCH', apiParams, clientConfig);

    /**
     * Rewrites a source object to a destination object. Optionally overrides metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinationBucket - (Required) Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param {string} apiParams.destinationKmsKeyName - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     * @param {string} apiParams.destinationObject - (Required) Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param {string} apiParams.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value.
     * @param {string} apiParams.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value.
     * @param {string} apiParams.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param {string} apiParams.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param {string} apiParams.maxBytesRewrittenPerCall - The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param {string} apiParams.rewriteToken - Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
     * @param {string} apiParams.sourceBucket - (Required) Name of the bucket in which to find the source object.
     * @param {string} apiParams.sourceGeneration - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param {string} apiParams.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.rewrite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}', 'POST', apiParams, clientConfig);

    /**
     * Moves the source object to the destination object in the same bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.destinationObject - (Required) Name of the destination object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object. `ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.`ifGenerationMatch` and `ifGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value. `ifMetagenerationMatch` and `ifMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's current generation matches the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's current generation does not match the given value. `ifSourceGenerationMatch` and `ifSourceGenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value. `ifSourceMetagenerationMatch` and `ifSourceMetagenerationNotMatch` conditions are mutually exclusive: it's an error for both of them to be set in the request.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} apiParams.sourceObject - (Required) Name of the source object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{sourceObject}/moveTo/o/{destinationObject}', 'POST', apiParams, clientConfig);

    /**
     * Updates an IAM policy for the specified object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam', 'PUT', apiParams, clientConfig);

    /**
     * Tests a set of permissions on the given object to see which, if any, are held by the caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.permissions - (Required) Permissions to test.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam/testPermissions', 'GET', apiParams, clientConfig);

    /**
     * Updates an object's metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {string} apiParams.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {boolean} apiParams.overrideUnlockedRetention - Must be true to remove the retention configuration, reduce its unlocked retention period, or change its mode from unlocked to locked.
     * @param {string} apiParams.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'PUT', apiParams, clientConfig);

    /**
     * Watch for changes on all objects in a bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which to look for objects.
     * @param {string} apiParams.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param {string} apiParams.endOffset - Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {boolean} apiParams.includeTrailingDelimiter - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
     * @param {integer} apiParams.maxResults - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.prefix - Filter results to objects whose names begin with this prefix.
     * @param {string} apiParams.projection - Set of properties to return. Defaults to noAcl.
     * @param {string} apiParams.startOffset - Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {boolean} apiParams.versions - If true, lists all versions of an object as distinct results. The default is false. For more information, see [Object Versioning](https://cloud.google.com/storage/docs/object-versioning).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.watchAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/watch', 'POST', apiParams, clientConfig);

    /**
     * Restores a soft-deleted object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {boolean} apiParams.copySourceAcl - If true, copies the source object's ACL; otherwise, uses the bucket's default object ACL. The default is false.
     * @param {string} apiParams.generation - (Required) Selects a specific revision of this object.
     * @param {string} apiParams.ifGenerationMatch - Makes the operation conditional on whether the object's one live generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     * @param {string} apiParams.ifGenerationNotMatch - Makes the operation conditional on whether none of the object's live generations match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     * @param {string} apiParams.ifMetagenerationMatch - Makes the operation conditional on whether the object's one live metageneration matches the given value.
     * @param {string} apiParams.ifMetagenerationNotMatch - Makes the operation conditional on whether none of the object's live metagenerations match the given value.
     * @param {string} apiParams.object - (Required) Name of the object. For information about how to URL encode object names to be path safe, see [Encoding URI Path Parts](https://cloud.google.com/storage/docs/request-endpoints#encoding).
     * @param {string} apiParams.projection - Set of properties to return. Defaults to full.
     * @param {string} apiParams.restoreToken - Restore token used to differentiate sof-deleted objects with the same name and generation. Only applicable for hierarchical namespace buckets. This parameter is optional, and is only required in the rare case when there are multiple soft-deleted objects with the same name and generation.
     * @param {string} apiParams.userProject - The project to be billed for this request. Required for Requester Pays buckets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/restore', 'POST', apiParams, clientConfig);

    /**
     * Initiates a long-running bulk restore operation on the specified bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bucket - (Required) Name of the bucket in which the object resides.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.objects.bulkRestore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/bulkRestore', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.hmacKeys = {};

    /**
     * Creates a new HMAC key for the specified service account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Project ID owning the service account.
     * @param {string} apiParams.serviceAccountEmail - (Required) Email address of the service account.
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.hmacKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys', 'POST', apiParams, clientConfig);

    /**
     * Deletes an HMAC key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accessId - (Required) Name of the HMAC key to be deleted.
     * @param {string} apiParams.projectId - (Required) Project ID owning the requested key
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.hmacKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves an HMAC key's metadata
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accessId - (Required) Name of the HMAC key.
     * @param {string} apiParams.projectId - (Required) Project ID owning the service account of the requested key.
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.hmacKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of HMAC keys matching the criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.
     * @param {string} apiParams.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param {string} apiParams.projectId - (Required) Name of the project in which to look for HMAC keys.
     * @param {string} apiParams.serviceAccountEmail - If present, only keys for the given service account are returned.
     * @param {boolean} apiParams.showDeletedKeys - Whether or not to show keys in the DELETED state.
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.hmacKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of an HMAC key. See the [HMAC Key resource descriptor](https://cloud.google.com/storage/docs/json_api/v1/projects/hmacKeys/update#request-body) for valid states.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accessId - (Required) Name of the HMAC key being updated.
     * @param {string} apiParams.projectId - (Required) Project ID owning the service account of the updated key.
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.hmacKeys.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'PUT', apiParams, clientConfig);

    this.projects.serviceAccount = {};

    /**
     * Get the email address of this project's Google Cloud Storage service account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Project ID
     * @param {string} apiParams.userProject - The project to be billed for this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.serviceAccount.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/serviceAccount', 'GET', apiParams, clientConfig);
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
