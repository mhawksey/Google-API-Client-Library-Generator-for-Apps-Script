
/**
 * Google Apps Script client library for the Drive Labels API
 * Documentation URL: https://developers.google.com/workspace/drive/labels
 * @class
 */
class Drivelabels {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://drivelabels.googleapis.com/';
    this._servicePath = '';


    this.users = {};

    /**
     * Gets the user capabilities.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - The customer to scope this request to. For example: `customers/abcd1234`. If unset, it will return settings within the current customer.
     * @param {string} apiParams.name - (Required) Required. The resource name of the user. Only "users/me/capabilities" is supported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.getCapabilities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}', 'GET', apiParams, clientConfig);

    this.labels = {};

    /**
     * List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - The customer to scope this list request to. For example: `customers/abcd1234`. If unset, will return all labels within the current customer.
     * @param {string} apiParams.languageCode - The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     * @param {string} apiParams.minimumRole - Specifies the level of access the user must have on the returned labels. The minimum role a user must have on a label. Defaults to `READER`.
     * @param {integer} apiParams.pageSize - Maximum number of labels to return per page. Default: 50. Max: 200.
     * @param {string} apiParams.pageToken - The token of the page to return.
     * @param {boolean} apiParams.publishedOnly - Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. This will return all labels within the customer.
     * @param {string} apiParams.view - When specified, only certain fields belonging to the indicated view are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/labels', 'GET', apiParams, clientConfig);

    /**
     * Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). Resource name may be any of: * `labels/{id}` - See `labels/{id}@latest` * `labels/{id}@latest` - Gets the latest revision of the label. * `labels/{id}@published` - Gets the current published revision of the label. * `labels/{id}@{revision_id}` - Gets the label at the specified revision ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     * @param {string} apiParams.name - (Required) Required. Label resource name. May be any of: * `labels/{id}` (equivalent to labels/{id}@latest) * `labels/{id}@latest` * `labels/{id}@published` * `labels/{id}@{revision_id}`
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
     * @param {string} apiParams.view - When specified, only certain fields belonging to the indicated view are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a label. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The BCP-47 language code to use for evaluating localized field labels in response. When not specified, values in the default configured language will be used.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/labels', 'POST', apiParams, clientConfig);

    /**
     * Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](https://developers.google.com/workspace/drive/labels/guides/update-label). The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the label to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.delta = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:delta', 'POST', apiParams, clientConfig);

    /**
     * Updates a label's `CopyMode`. Changes to this policy aren't revisioned, don't require publishing, and take effect immediately.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the label to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.updateLabelCopyMode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:updateLabelCopyMode', 'POST', apiParams, clientConfig);

    /**
     * Publish all draft changes to the label. Once published, the label may not return to its draft state. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). Publishing a label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle). Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label will be rejected. For example, the following changes to a label will be rejected after the label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * `Field.FieldType` cannot be changed. * Changes to field validation options cannot reject something that was previously accepted. * Reducing the maximum entries.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:publish', 'POST', apiParams, clientConfig);

    /**
     * Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Enable a disabled label and restore it to its published state. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). This will result in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label resource name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Permanently deletes a label and related metadata on Drive items. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Once deleted, the label and related Drive item metadata will be deleted. Only draft labels and disabled labels may be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label resource name.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {string} apiParams.writeControl.requiredRevisionId - The revision ID of the label that the write request will be applied to. If this isn't the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.updatePermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a label's `EnabledAppSettings`. Enabling a label in a Google Workspace app allows it to be used in that app. This change isn't revisioned, doesn't require publishing, and takes effect immediately.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the label to update. The resource name of the label to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.updateLabelEnabledAppSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}:updateLabelEnabledAppSettings', 'POST', apiParams, clientConfig);

    this.labels.permissions = {};

    /**
     * Lists a label's permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of permissions to return per page. Default: 50. Max: 200.
     * @param {string} apiParams.pageToken - The token of the page to return.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'GET', apiParams, clientConfig);

    /**
     * Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name on the label permission is created. Format: `labels/{label}`.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'POST', apiParams, clientConfig);

    /**
     * Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label permission resource name.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.permissions.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.permissions.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions:batchDelete', 'POST', apiParams, clientConfig);

    this.labels.revisions = {};

    /**
     * Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.updatePermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'PATCH', apiParams, clientConfig);

    this.labels.revisions.permissions = {};

    /**
     * Lists a label's permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of permissions to return per page. Default: 50. Max: 200.
     * @param {string} apiParams.pageToken - The token of the page to return.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'GET', apiParams, clientConfig);

    /**
     * Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name on the label permission is created. Format: `labels/{label}`.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions', 'POST', apiParams, clientConfig);

    /**
     * Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Label permission resource name.
     * @param {boolean} apiParams.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.permissions.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.permissions.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/permissions:batchDelete', 'POST', apiParams, clientConfig);

    this.labels.revisions.locks = {};

    /**
     * Lists the label locks on a label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of locks to return per page. Default: 100. Max: 200.
     * @param {string} apiParams.pageToken - The token of the page to return.
     * @param {string} apiParams.parent - (Required) Required. Label on which locks are applied. Format: `labels/{label}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.revisions.locks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/locks', 'GET', apiParams, clientConfig);

    this.labels.locks = {};

    /**
     * Lists the label locks on a label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of locks to return per page. Default: 100. Max: 200.
     * @param {string} apiParams.pageToken - The token of the page to return.
     * @param {string} apiParams.parent - (Required) Required. Label on which locks are applied. Format: `labels/{label}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.labels.locks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/{+parent}/locks', 'GET', apiParams, clientConfig);

    this.limits = {};

    /**
     * Get the constraints on the structure of a label; such as, the maximum number of fields allowed and maximum length of the label title.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - Required. Label revision resource name must be: "limits/label".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.limits.getLabel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta/limits/label', 'GET', apiParams, clientConfig);
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
