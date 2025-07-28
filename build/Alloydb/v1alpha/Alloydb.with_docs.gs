
/**
 * Google Apps Script client library for the AlloyDB API
 * Documentation URL: https://cloud.google.com/alloydb/
 * @class
 */
class Alloydb {
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
    this._rootUrl = 'https://alloydb.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.clusters = {};

    /**
     * Restores an AlloyDB cluster from a CloudSQL resource.
     * @param {string} params.parent - (Required) Required. The location of the new cluster. For the required format, see the comment on Cluster.name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.restoreFromCloudSQL = (params) => this._makeRequest('v1alpha/{+parent}/clusters:restoreFromCloudSQL', 'POST', params);

    /**
     * Lists Clusters in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. Additionally, you can perform an aggregated list operation by specifying a value with the following format: * projects/{project}/locations/-
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1alpha/{+parent}/clusters', 'GET', params);

    /**
     * Gets details of a single Cluster.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Cluster.name field.
     * @param {string} params.view - Optional. The view of the cluster to return. Returns all default fields if not set.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Cluster in a given project and location.
     * @param {string} params.clusterId - Required. ID of the requesting object.
     * @param {string} params.parent - (Required) Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1alpha/{+parent}/clusters', 'POST', params);

    /**
     * Updates the parameters of a single Cluster.
     * @param {boolean} params.allowMissing - Optional. If set to true, update succeeds even if cluster is not found. In that case, a new cluster is created and `update_mask` is ignored.
     * @param {string} params.name - (Required) Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Exports data from the cluster. Imperative only.
     * @param {string} params.name - (Required) Required. The resource name of the cluster.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.export = (params) => this._makeRequest('v1alpha/{+name}:export', 'POST', params);

    /**
     * Imports data to the cluster. Imperative only.
     * @param {string} params.name - (Required) Required. The resource name of the cluster.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.import = (params) => this._makeRequest('v1alpha/{+name}:import', 'POST', params);

    /**
     * Upgrades a single Cluster. Imperative only.
     * @param {string} params.name - (Required) Required. The resource name of the cluster.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.upgrade = (params) => this._makeRequest('v1alpha/{+name}:upgrade', 'PATCH', params);

    /**
     * Deletes a single Cluster.
     * @param {string} params.etag - Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned.
     * @param {boolean} params.force - Optional. Whether to cascade delete child instances for given cluster.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Cluster.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Cluster.name field
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.promote = (params) => this._makeRequest('v1alpha/{+name}:promote', 'POST', params);

    /**
     * Switches the roles of PRIMARY and SECONDARY clusters without any data loss. This promotes the SECONDARY cluster to PRIMARY and sets up the original PRIMARY cluster to replicate from this newly promoted cluster.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Cluster.name field
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.switchover = (params) => this._makeRequest('v1alpha/{+name}:switchover', 'POST', params);

    /**
     * Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.restore = (params) => this._makeRequest('v1alpha/{+parent}/clusters:restore', 'POST', params);

    /**
     * Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
     * @param {string} params.clusterId - Required. ID of the requesting object (the secondary cluster).
     * @param {string} params.parent - (Required) Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.createsecondary = (params) => this._makeRequest('v1alpha/{+parent}/clusters:createsecondary', 'POST', params);

    this.projects.locations.clusters.instances = {};

    /**
     * Lists Instances in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: * projects/{project}/locations/-/clusters/- * projects/{project}/locations/{region}/clusters/-
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.list = (params) => this._makeRequest('v1alpha/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single Instance.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Instance.name field.
     * @param {string} params.view - The view of the instance to return.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Instance in a given project and location.
     * @param {string} params.instanceId - Required. ID of the requesting object.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.create = (params) => this._makeRequest('v1alpha/{+parent}/instances', 'POST', params);

    /**
     * Creates a new SECONDARY Instance in a given project and location.
     * @param {string} params.instanceId - Required. ID of the requesting object.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.createsecondary = (params) => this._makeRequest('v1alpha/{+parent}/instances:createsecondary', 'POST', params);

    /**
     * Updates the parameters of a single Instance.
     * @param {boolean} params.allowMissing - Optional. If set to true, update succeeds even if instance is not found. In that case, a new instance is created and `update_mask` is ignored.
     * @param {string} params.name - (Required) Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single Instance.
     * @param {string} params.etag - Optional. The current etag of the Instance. If an etag is provided and does not match the current etag of the Instance, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Instance.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Instance.name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.failover = (params) => this._makeRequest('v1alpha/{+name}:failover', 'POST', params);

    /**
     * Injects fault in an instance. Imperative only.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Instance.name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.injectFault = (params) => this._makeRequest('v1alpha/{+name}:injectFault', 'POST', params);

    /**
     * Restart an Instance in a cluster. Imperative only.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the Instance.name field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.restart = (params) => this._makeRequest('v1alpha/{+name}:restart', 'POST', params);

    /**
     * Get instance metadata used for a connection.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. The required format is: projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.instances.getConnectionInfo = (params) => this._makeRequest('v1alpha/{+parent}/connectionInfo', 'GET', params);

    this.projects.locations.clusters.users = {};

    /**
     * Lists Users in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListUsersRequest
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.users.list = (params) => this._makeRequest('v1alpha/{+parent}/users', 'GET', params);

    /**
     * Gets details of a single User.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the User.name field.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.users.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new User in a given project, location, and cluster.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.userId - Required. ID of the requesting object.
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.users.create = (params) => this._makeRequest('v1alpha/{+parent}/users', 'POST', params);

    /**
     * Updates the parameters of a single User.
     * @param {boolean} params.allowMissing - Optional. Allow missing fields in the update mask.
     * @param {string} params.name - (Required) Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.users.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single User.
     * @param {string} params.name - (Required) Required. The name of the resource. For the required format, see the comment on the User.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.users.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.backups = {};

    /**
     * Lists Backups in a given project and location.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListBackupsRequest
     * @return {object} The API response object.
     */
    this.projects.locations.backups.list = (params) => this._makeRequest('v1alpha/{+parent}/backups', 'GET', params);

    /**
     * Gets details of a single Backup.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.backups.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Backup in a given project and location.
     * @param {string} params.backupId - Required. ID of the requesting object.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.create = (params) => this._makeRequest('v1alpha/{+parent}/backups', 'POST', params);

    /**
     * Updates the parameters of a single Backup.
     * @param {boolean} params.allowMissing - Optional. If set to true, update succeeds even if instance is not found. In that case, a new backup is created and `update_mask` is ignored.
     * @param {string} params.name - (Required) Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project}/locations/{region}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single Backup.
     * @param {string} params.etag - Optional. The current etag of the Backup. If an etag is provided and does not match the current etag of the Backup, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the resource. For the required format, see the comment on the Backup.name field.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, the backend validates the request, but doesn't actually execute it.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.supportedDatabaseFlags = {};

    /**
     * Lists SupportedDatabaseFlags for a given project and location.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The name of the parent resource. The required format is: * projects/{project}/locations/{location} Regardless of the parent specified here, as long it is contains a valid project and location, the service will return a static list of supported flags resources. Note that we do not yet support region-specific flags.
     * @param {string} params.scope - Optional. The scope for which supported flags are requested. If not specified, default is DATABASE.
     * @return {object} The API response object.
     */
    this.projects.locations.supportedDatabaseFlags.list = (params) => this._makeRequest('v1alpha/{+parent}/supportedDatabaseFlags', 'GET', params);
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
