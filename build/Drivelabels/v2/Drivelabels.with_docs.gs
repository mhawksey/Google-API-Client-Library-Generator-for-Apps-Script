
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://drivelabels.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.users = {};

    /**
     * Gets the user capabilities.
     * @param {string} params.customer - The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.
     * @param {string} params.name - (Required) Required. The resource name of the user. Only "users/me/capabilities" is supported.
     * @return {object} The API response object.
     */
    this.users.getCapabilities = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.labels = {};

    /**
     * List labels.
     * @param {string} params.customer - The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
     * @param {string} params.languageCode - The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     * @param {string} params.minimumRole - Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
     * @param {integer} params.pageSize - Maximum number of labels to return per page. Default: 50. Max: 200.
     * @param {string} params.pageToken - The token of the page to return.
     * @param {boolean} params.publishedOnly - Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
     * @param {string} params.view - When specified, only certain fields belonging to the indicated view are returned.
     * @return {object} The API response object.
     */
    this.labels.list = (params) => this._makeRequest('v2/labels', 'GET', params);

    /**
     * Get a label by its resource name. Resource name may be any of: * `labels/{id}` - See `labels/{id}@latest` * `labels/{id}@latest` - Gets the latest revision of the label. * `labels/{id}@published` - Gets the current published revision of the label. * `labels/{id}@{revision_id}` - Gets the label at the specified revision ID.
     * @param {string} params.languageCode - The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     * @param {string} params.name - (Required) Required. Label resource name. May be any of: * `labels/{id}` (equivalent to labels/{id}@latest) * `labels/{id}@latest` * `labels/{id}@published` * `labels/{id}@{revision_id}`
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
     * @param {string} params.view - When specified, only certain fields belonging to the indicated view are returned.
     * @return {object} The API response object.
     */
    this.labels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new Label.
     * @param {string} params.languageCode - The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.create = (params) => this._makeRequest('v2/labels', 'POST', params);

    /**
     * Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
     * @param {string} params.name - (Required) Required. The resource name of the Label to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.delta = (params) => this._makeRequest('v2/{+name}:delta', 'POST', params);

    /**
     * Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
     * @param {string} params.name - (Required) Required. The resource name of the Label to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.updateLabelCopyMode = (params) => this._makeRequest('v2/{+name}:updateLabelCopyMode', 'POST', params);

    /**
     * Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
     * @param {string} params.name - (Required) Required. Label resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.publish = (params) => this._makeRequest('v2/{+name}:publish', 'POST', params);

    /**
     * Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
     * @param {string} params.name - (Required) Required. Label resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.disable = (params) => this._makeRequest('v2/{+name}:disable', 'POST', params);

    /**
     * Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
     * @param {string} params.name - (Required) Required. Label resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.enable = (params) => this._makeRequest('v2/{+name}:enable', 'POST', params);

    /**
     * Permanently deletes a Label and related metadata on Drive Items. Once deleted, the Label and related Drive item metadata will be deleted. Only draft Labels, and disabled Labels may be deleted.
     * @param {string} params.name - (Required) Required. Label resource name.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @param {string} params.writeControl.requiredRevisionId - The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     * @return {object} The API response object.
     */
    this.labels.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.updatePermissions = (params) => this._makeRequest('v2/{+parent}/permissions', 'PATCH', params);

    /**
     * Updates a Label's EabledAppSettings. Enabling a Label in a Workspace Application allows it to be used in that application. This change is not revisioned, does not require publishing, and takes effect immediately.
     * @param {string} params.name - (Required) Required. The resource name of the Label to update. The resource name of the Label to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.updateLabelEnabledAppSettings = (params) => this._makeRequest('v2/{+name}:updateLabelEnabledAppSettings', 'POST', params);

    this.labels.permissions = {};

    /**
     * Lists a Label's permissions.
     * @param {integer} params.pageSize - Maximum number of permissions to return per page. Default: 50. Max: 200.
     * @param {string} params.pageToken - The token of the page to return.
     * @param {string} params.parent - (Required) Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @return {object} The API response object.
     */
    this.labels.permissions.list = (params) => this._makeRequest('v2/{+parent}/permissions', 'GET', params);

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.permissions.create = (params) => this._makeRequest('v2/{+parent}/permissions', 'POST', params);

    /**
     * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.name - (Required) Required. Label Permission resource name.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @return {object} The API response object.
     */
    this.labels.permissions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.permissions.batchUpdate = (params) => this._makeRequest('v2/{+parent}/permissions:batchUpdate', 'POST', params);

    /**
     * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.permissions.batchDelete = (params) => this._makeRequest('v2/{+parent}/permissions:batchDelete', 'POST', params);

    this.labels.revisions = {};

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.revisions.updatePermissions = (params) => this._makeRequest('v2/{+parent}/permissions', 'PATCH', params);

    this.labels.revisions.permissions = {};

    /**
     * Lists a Label's permissions.
     * @param {integer} params.pageSize - Maximum number of permissions to return per page. Default: 50. Max: 200.
     * @param {string} params.pageToken - The token of the page to return.
     * @param {string} params.parent - (Required) Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @return {object} The API response object.
     */
    this.labels.revisions.permissions.list = (params) => this._makeRequest('v2/{+parent}/permissions', 'GET', params);

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.revisions.permissions.create = (params) => this._makeRequest('v2/{+parent}/permissions', 'POST', params);

    /**
     * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.name - (Required) Required. Label Permission resource name.
     * @param {boolean} params.useAdminAccess - Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     * @return {object} The API response object.
     */
    this.labels.revisions.permissions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.revisions.permissions.batchUpdate = (params) => this._makeRequest('v2/{+parent}/permissions:batchUpdate', 'POST', params);

    /**
     * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @param {string} params.parent - (Required) Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.labels.revisions.permissions.batchDelete = (params) => this._makeRequest('v2/{+parent}/permissions:batchDelete', 'POST', params);

    this.labels.revisions.locks = {};

    /**
     * Lists the LabelLocks on a Label.
     * @param {integer} params.pageSize - Maximum number of Locks to return per page. Default: 100. Max: 200.
     * @param {string} params.pageToken - The token of the page to return.
     * @param {string} params.parent - (Required) Required. Label on which Locks are applied. Format: labels/{label}
     * @return {object} The API response object.
     */
    this.labels.revisions.locks.list = (params) => this._makeRequest('v2/{+parent}/locks', 'GET', params);

    this.labels.locks = {};

    /**
     * Lists the LabelLocks on a Label.
     * @param {integer} params.pageSize - Maximum number of Locks to return per page. Default: 100. Max: 200.
     * @param {string} params.pageToken - The token of the page to return.
     * @param {string} params.parent - (Required) Required. Label on which Locks are applied. Format: labels/{label}
     * @return {object} The API response object.
     */
    this.labels.locks.list = (params) => this._makeRequest('v2/{+parent}/locks', 'GET', params);

    this.limits = {};

    /**
     * Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
     * @param {string} params.name - Required. Label revision resource name Must be: "limits/label"
     * @return {object} The API response object.
     */
    this.limits.getLabel = (params) => this._makeRequest('v2/limits/label', 'GET', params);
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
