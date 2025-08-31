
/**
 * Google Apps Script client library for the Google Cloud Memorystore for Redis API
 * Documentation URL: https://cloud.google.com/memorystore/docs/redis/
 * @class
 */
class Redis {
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
    this._rootUrl = 'https://redis.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.clusters = {};

    /**
     * Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
     * @param {integer} params.pageSize - The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried.
     * @param {string} params.pageToken - The `next_page_token` value returned from a previous ListClusters request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);

    /**
     * Gets the details of a specific Redis cluster.
     * @param {string} params.name - (Required) Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.name - (Required) Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Cluster: * `size_gb` * `replica_count` * `cluster_endpoints`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a specific Redis cluster. Cluster stops serving and data is deleted.
     * @param {string} params.name - (Required) Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region.
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.clusterId - Required. The logical name of the Redis cluster in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
     * @param {string} params.parent - (Required) Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region.
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);

    /**
     * Gets the details of certificate authority information for Redis cluster.
     * @param {string} params.name - (Required) Required. Redis cluster certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}/certificateAuthority` where `location_id` refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.getCertificateAuthority = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Reschedules upcoming maintenance event.
     * @param {string} params.name - (Required) Required. Redis Cluster instance resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.rescheduleClusterMaintenance = (params) => this._makeRequest('v1/{+name}:rescheduleClusterMaintenance', 'POST', params);

    /**
     * Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.
     * @param {string} params.name - (Required) Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.backup = (params) => this._makeRequest('v1/{+name}:backup', 'POST', params);

    this.projects.locations.backupCollections = {};

    /**
     * Lists all backup collections owned by a consumer project in either the specified location (region) or all locations. If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried.
     * @param {string} params.pageToken - Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the backupCollection location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.list = (params) => this._makeRequest('v1/{+parent}/backupCollections', 'GET', params);

    /**
     * Get a backup collection.
     * @param {string} params.name - (Required) Required. Redis backupCollection resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}` where `location_id` refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.backupCollections.backups = {};

    /**
     * Lists all backups owned by a backup collection.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried.
     * @param {string} params.pageToken - Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the backupCollection using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * Gets the details of a specific backup.
     * @param {string} params.name - (Required) Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a specific backup.
     * @param {string} params.name - (Required) Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Exports a specific backup to a customer target Cloud Storage URI.
     * @param {string} params.name - (Required) Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupCollections.backups.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);

    this.projects.locations.instances = {};

    /**
     * Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
     * @param {integer} params.pageSize - The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - The `next_page_token` value returned from a previous ListInstances request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);

    /**
     * Gets the details of a specific Redis instance.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getAuthString = (params) => this._makeRequest('v1/{+name}/authString', 'GET', params);

    /**
     * Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.instanceId - Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
     * @param {string} params.parent - (Required) Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.name - (Required) Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Upgrades Redis instance to the newer Redis version specified in the request.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);

    /**
     * Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.import = (params) => this._makeRequest('v1/{+name}:import', 'POST', params);

    /**
     * Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);

    /**
     * Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.failover = (params) => this._makeRequest('v1/{+name}:failover', 'POST', params);

    /**
     * Deletes a specific Redis instance. Instance stops serving and data is deleted.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Reschedule maintenance for a given instance in a given project and location.
     * @param {string} params.name - (Required) Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.rescheduleMaintenance = (params) => this._makeRequest('v1/{+name}:rescheduleMaintenance', 'POST', params);
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
