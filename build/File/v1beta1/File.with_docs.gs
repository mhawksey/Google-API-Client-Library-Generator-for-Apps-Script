
/**
 * Google Apps Script client library for the Cloud Filestore API
 * Documentation URL: https://cloud.google.com/filestore/
 * @class
 */
class File {
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
    this._rootUrl = 'https://file.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};

    /**
     * Lists all instances in a project for either a specified location or for all locations.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve instance information, in the format `projects/{project_id}/locations/{location}`. In Cloud Filestore, locations map to Google Cloud zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the `{location}` value.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'GET', params);

    /**
     * Gets the details of a specific instance.
     * @param {string} params.name - (Required) Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
     * @param {string} params.instanceId - Required. The ID of the instance to create. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     * @param {string} params.parent - (Required) Required. The instance's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, locations map to Google Cloud zones, for example **us-west1-b**.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'POST', params);

    /**
     * Updates the settings of a specific instance.
     * @param {string} params.name - (Required) Output only. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: * "description" * "directory_services" * "file_shares" * "labels" * "performance_config" * "deletion_protection_enabled" * "deletion_protection_reason"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
     * @param {string} params.name - (Required) Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'POST', params);

    /**
     * Revert an existing instance's file system to a specified snapshot.
     * @param {string} params.name - (Required) Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.revert = (params) => this._makeRequest('v1beta1/{+name}:revert', 'POST', params);

    /**
     * Promote the standby instance (replica).
     * @param {string} params.name - (Required) Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.promoteReplica = (params) => this._makeRequest('v1beta1/{+name}:promoteReplica', 'POST', params);

    /**
     * Pause the standby instance (replica). WARNING: This operation makes the standby instance's NFS filesystem writable. Any data written to the standby instance while paused will be lost when the replica is resumed or promoted.
     * @param {string} params.name - (Required) Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.pauseReplica = (params) => this._makeRequest('v1beta1/{+name}:pauseReplica', 'POST', params);

    /**
     * Resume the standby instance (replica). WARNING: Any data written to the standby instance while paused will be lost when the replica is resumed.
     * @param {string} params.name - (Required) Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.resumeReplica = (params) => this._makeRequest('v1beta1/{+name}:resumeReplica', 'POST', params);

    /**
     * Deletes an instance.
     * @param {boolean} params.force - If set to true, any snapshots of the instance will also be deleted. (Otherwise, the request will only work if the instance has no snapshots.)
     * @param {string} params.name - (Required) Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.instances.snapshots = {};

    /**
     * Lists all snapshots in a project for either a specified location or for all locations.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The instance for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.snapshots.list = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'GET', params);

    /**
     * Gets the details of a specific snapshot.
     * @param {string} params.name - (Required) Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.snapshots.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a snapshot.
     * @param {string} params.parent - (Required) Required. The Filestore Instance to create the snapshots of, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {string} params.snapshotId - Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.snapshots.create = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'POST', params);

    /**
     * Deletes a snapshot.
     * @param {string} params.name - (Required) Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.snapshots.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates the settings of a specific snapshot.
     * @param {string} params.name - (Required) Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.snapshots.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.instances.shares = {};

    /**
     * Lists all shares for a specified instance.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The instance for which to retrieve share information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.shares.list = (params) => this._makeRequest('v1beta1/{+parent}/shares', 'GET', params);

    /**
     * Gets the details of a specific share.
     * @param {string} params.name - (Required) Required. The share resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/shares/{share_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.shares.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a share.
     * @param {string} params.parent - (Required) Required. The Filestore Instance to create the share for, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {string} params.shareId - Required. The ID to use for the share. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.shares.create = (params) => this._makeRequest('v1beta1/{+parent}/shares', 'POST', params);

    /**
     * Deletes a share.
     * @param {string} params.name - (Required) Required. The share resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/share/{share_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.shares.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates the settings of a specific share.
     * @param {string} params.name - (Required) Output only. The resource name of the share, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/shares/{share_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: * "description" * "capacity_gb" * "labels" * "nfs_export_options"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.shares.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.backups = {};

    /**
     * Lists all backups in a project for either a specified location or for all locations.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve backup information, in the format `projects/{project_id}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the `{location}` value.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);

    /**
     * Gets the details of a specific backup.
     * @param {string} params.name - (Required) Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backups/{backup_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a backup.
     * @param {string} params.backupId - Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     * @param {string} params.parent - (Required) Required. The backup's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.create = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', params);

    /**
     * Deletes a backup.
     * @param {string} params.name - (Required) Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates the settings of a specific backup.
     * @param {string} params.name - (Required) Output only. The resource name of the backup, in the format `projects/{project_id}/locations/{location_id}/backups/{backup_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
