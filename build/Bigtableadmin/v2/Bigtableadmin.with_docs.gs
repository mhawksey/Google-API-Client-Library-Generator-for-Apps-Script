
/**
 * Google Apps Script client library for the Cloud Bigtable Admin API
 * Documentation URL: https://cloud.google.com/bigtable/
 * @class
 */
class Bigtableadmin {
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
    this._rootUrl = 'https://bigtableadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.operations.projects = {};

    this.operations.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.projects.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    this.projects = {};

    this.projects.instances = {};

    /**
     * Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
     * @param {string} params.parent - (Required) Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.create = (params) => this._makeRequest('v2/{+parent}/instances', 'POST', params);

    /**
     * Gets information about an instance.
     * @param {string} params.name - (Required) Required. The unique name of the requested instance. Values are of the form `projects/{project}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.instances.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about instances in a project.
     * @param {string} params.pageToken - DEPRECATED: This field is unused and ignored.
     * @param {string} params.parent - (Required) Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`.
     * @return {object} The API response object.
     */
    this.projects.instances.list = (params) => this._makeRequest('v2/{+parent}/instances', 'GET', params);

    /**
     * Updates an instance within a project. This method updates only the display name and type for an Instance. To update other Instance properties, such as labels, use PartialUpdateInstance.
     * @param {string} params.name - (Required) The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.update = (params) => this._makeRequest('v2/{+name}', 'PUT', params);

    /**
     * Partially updates an instance within a project. This method can modify all fields of an Instance and is the preferred way to update an Instance.
     * @param {string} params.name - (Required) The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.
     * @param {string} params.updateMask - Required. The subset of Instance fields which should be replaced. Must be explicitly set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.partialUpdateInstance = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Delete an instance from a project.
     * @param {string} params.name - (Required) Required. The unique name of the instance to be deleted. Values are of the form `projects/{project}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.instances.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on an instance resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified instance resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.clusters = {};

    /**
     * Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
     * @param {string} params.clusterId - Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
     * @param {string} params.parent - (Required) Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.create = (params) => this._makeRequest('v2/{+parent}/clusters', 'POST', params);

    /**
     * Gets information about a cluster.
     * @param {string} params.name - (Required) Required. The unique name of the requested cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about clusters in an instance.
     * @param {string} params.pageToken - DEPRECATED: This field is unused and ignored.
     * @param {string} params.parent - (Required) Required. The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.list = (params) => this._makeRequest('v2/{+parent}/clusters', 'GET', params);

    /**
     * Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
     * @param {string} params.name - (Required) The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.update = (params) => this._makeRequest('v2/{+name}', 'PUT', params);

    /**
     * Partially updates a cluster within a project. This method is the preferred way to update a Cluster. To enable and update autoscaling, set cluster_config.cluster_autoscaling_config. When autoscaling is enabled, serve_nodes is treated as an OUTPUT_ONLY field, meaning that updates to it are ignored. Note that an update cannot simultaneously set serve_nodes to non-zero and cluster_config.cluster_autoscaling_config to non-empty, and also specify both in the update_mask. To disable autoscaling, clear cluster_config.cluster_autoscaling_config, and explicitly set a serve_node count via the update_mask.
     * @param {string} params.name - (Required) The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
     * @param {string} params.updateMask - Required. The subset of Cluster fields which should be replaced.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.partialUpdateCluster = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a cluster from an instance.
     * @param {string} params.name - (Required) Required. The unique name of the cluster to be deleted. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.clusters.hotTablets = {};

    /**
     * Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
     * @param {string} params.endTime - The end time to list hot tablets.
     * @param {integer} params.pageSize - Maximum number of results per page. A page_size that is empty or zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls do not need a page_size field. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string} params.pageToken - The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent - (Required) Required. The cluster name to list hot tablets. Value is in the following form: `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @param {string} params.startTime - The start time to list hot tablets. The hot tablets in the response will have start times between the requested start time and end time. Start time defaults to Now if it is unset, and end time defaults to Now - 24 hours if it is unset. The start time should be less than the end time, and the maximum allowed time range between start time and end time is 48 hours. Start time and end time should have values between Now and Now - 14 days.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.hotTablets.list = (params) => this._makeRequest('v2/{+parent}/hotTablets', 'GET', params);

    this.projects.instances.clusters.backups = {};

    /**
     * Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
     * @param {string} params.backupId - Required. The id of the backup to be created. The `backup_id` along with the parent `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.
     * @param {string} params.parent - (Required) Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.create = (params) => this._makeRequest('v2/{+parent}/backups', 'POST', params);

    /**
     * Gets metadata on a pending or completed Cloud Bigtable Backup.
     * @param {string} params.name - (Required) Required. Name of the backup. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup}`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates a pending or completed Cloud Bigtable Backup.
     * @param {string} params.name - (Required) A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @param {string} params.updateMask - Required. A mask specifying which fields (e.g. `expire_time`) in the Backup resource should be updated. This mask is relative to the Backup resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally by clients that do not know about them.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a pending or completed Cloud Bigtable backup.
     * @param {string} params.name - (Required) Required. Name of the backup to delete. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup}`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Lists Cloud Bigtable backups. Returns both completed and pending backups.
     * @param {string} params.filter - A filter expression that filters backups listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =, or :. Colon ':' represents a HAS operator which is roughly synonymous with equality. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `source_table` * `state` * `start_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `end_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` To filter on multiple expressions, provide each separate expression within parentheses. By default, each expression is an AND expression. However, you can include AND, OR, and NOT expressions explicitly. Some examples of using filters are: * `name:"exact"` --> The backup's name is the string "exact". * `name:howl` --> The backup's name contains the string "howl". * `source_table:prod` --> The source_table's name contains the string "prod". * `state:CREATING` --> The backup is pending creation. * `state:READY` --> The backup is fully created and ready for use. * `(name:howl) AND (start_time < \"2018-03-28T14:50:00Z\")` --> The backup name contains the string "howl" and start_time of the backup is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` --> The backup's size is greater than 10GB
     * @param {string} params.orderBy - An expression for specifying the sort order of the results of the request. The string value should specify one or more fields in Backup. The full syntax is described at https://aip.dev/132#ordering. Fields supported are: * name * source_table * expire_time * start_time * end_time * size_bytes * state For example, "start_time". The default sorting order is ascending. To specify descending order for the field, a suffix " desc" should be appended to the field name. For example, "start_time desc". Redundant space characters in the syntax are insigificant. If order_by is empty, results will be sorted by `start_time` in descending order starting from the most recently created backup.
     * @param {integer} params.pageSize - Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
     * @param {string} params.pageToken - If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.
     * @param {string} params.parent - (Required) Required. The cluster to list backups from. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. Use `{cluster} = '-'` to list backups for all clusters in an instance, e.g., `projects/{project}/instances/{instance}/clusters/-`.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.list = (params) => this._makeRequest('v2/{+parent}/backups', 'GET', params);

    /**
     * Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
     * @param {string} params.parent - (Required) Required. The name of the destination cluster that will contain the backup copy. The cluster must already exist. Values are of the form: `projects/{project}/instances/{instance}/clusters/{cluster}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.copy = (params) => this._makeRequest('v2/{+parent}/backups:copy', 'POST', params);

    /**
     * Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a Bigtable resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified Bigtable resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.clusters.backups.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.appProfiles = {};

    /**
     * Creates an app profile within an instance.
     * @param {string} params.appProfileId - Required. The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.
     * @param {boolean} params.ignoreWarnings - If true, ignore safety checks when creating the app profile.
     * @param {string} params.parent - (Required) Required. The unique name of the instance in which to create the new app profile. Values are of the form `projects/{project}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.appProfiles.create = (params) => this._makeRequest('v2/{+parent}/appProfiles', 'POST', params);

    /**
     * Gets information about an app profile.
     * @param {string} params.name - (Required) Required. The unique name of the requested app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/{app_profile}`.
     * @return {object} The API response object.
     */
    this.projects.instances.appProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about app profiles in an instance.
     * @param {integer} params.pageSize - Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string} params.pageToken - The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent - (Required) Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.
     * @return {object} The API response object.
     */
    this.projects.instances.appProfiles.list = (params) => this._makeRequest('v2/{+parent}/appProfiles', 'GET', params);

    /**
     * Updates an app profile within an instance.
     * @param {boolean} params.ignoreWarnings - If true, ignore safety checks when updating the app profile.
     * @param {string} params.name - (Required) The unique name of the app profile, up to 50 characters long. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.
     * @param {string} params.updateMask - Required. The subset of app profile fields which should be replaced. If unset, all fields will be replaced.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.appProfiles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an app profile from an instance.
     * @param {boolean} params.ignoreWarnings - Required. If true, ignore safety checks when deleting the app profile.
     * @param {string} params.name - (Required) Required. The unique name of the app profile to be deleted. Values are of the form `projects/{project}/instances/{instance}/appProfiles/{app_profile}`.
     * @return {object} The API response object.
     */
    this.projects.instances.appProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.materializedViews = {};

    /**
     * Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on an instance resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified instance resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a materialized view within an instance.
     * @param {string} params.materializedViewId - Required. The ID to use for the materialized view, which will become the final component of the materialized view's resource name.
     * @param {string} params.parent - (Required) Required. The parent instance where this materialized view will be created. Format: `projects/{project}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.create = (params) => this._makeRequest('v2/{+parent}/materializedViews', 'POST', params);

    /**
     * Gets information about a materialized view.
     * @param {string} params.name - (Required) Required. The unique name of the requested materialized view. Values are of the form `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about materialized views in an instance.
     * @param {integer} params.pageSize - Optional. The maximum number of materialized views to return. The service may return fewer than this value
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMaterializedViews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMaterializedViews` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The unique name of the instance for which the list of materialized views is requested. Values are of the form `projects/{project}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.list = (params) => this._makeRequest('v2/{+parent}/materializedViews', 'GET', params);

    /**
     * Updates a materialized view within an instance.
     * @param {string} params.name - (Required) Identifier. The unique name of the materialized view. Format: `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a materialized view from an instance.
     * @param {string} params.etag - Optional. The current etag of the materialized view. If an etag is provided and does not match the current etag of the materialized view, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The unique name of the materialized view to be deleted. Format: `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`.
     * @return {object} The API response object.
     */
    this.projects.instances.materializedViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.logicalViews = {};

    /**
     * Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on an instance resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified instance resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a logical view within an instance.
     * @param {string} params.logicalViewId - Required. The ID to use for the logical view, which will become the final component of the logical view's resource name.
     * @param {string} params.parent - (Required) Required. The parent instance where this logical view will be created. Format: `projects/{project}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.create = (params) => this._makeRequest('v2/{+parent}/logicalViews', 'POST', params);

    /**
     * Gets information about a logical view.
     * @param {string} params.name - (Required) Required. The unique name of the requested logical view. Values are of the form `projects/{project}/instances/{instance}/logicalViews/{logical_view}`.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about logical views in an instance.
     * @param {integer} params.pageSize - Optional. The maximum number of logical views to return. The service may return fewer than this value
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListLogicalViews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalViews` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The unique name of the instance for which the list of logical views is requested. Values are of the form `projects/{project}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.list = (params) => this._makeRequest('v2/{+parent}/logicalViews', 'GET', params);

    /**
     * Updates a logical view within an instance.
     * @param {string} params.name - (Required) Identifier. The unique name of the logical view. Format: `projects/{project}/instances/{instance}/logicalViews/{logical_view}`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a logical view from an instance.
     * @param {string} params.etag - Optional. The current etag of the logical view. If an etag is provided and does not match the current etag of the logical view, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The unique name of the logical view to be deleted. Format: `projects/{project}/instances/{instance}/logicalViews/{logical_view}`.
     * @return {object} The API response object.
     */
    this.projects.instances.logicalViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.tables = {};

    /**
     * Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
     * @param {string} params.parent - (Required) Required. The unique name of the instance in which to create the table. Values are of the form `projects/{project}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.create = (params) => this._makeRequest('v2/{+parent}/tables', 'POST', params);

    /**
     * Lists all tables served from a specified instance.
     * @param {integer} params.pageSize - Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string} params.pageToken - The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent - (Required) Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.
     * @param {string} params.view - The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.list = (params) => this._makeRequest('v2/{+parent}/tables', 'GET', params);

    /**
     * Gets metadata information about the specified table.
     * @param {string} params.name - (Required) Required. The unique name of the requested table. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {string} params.view - The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates a specified table.
     * @param {boolean} params.ignoreWarnings - Optional. If true, ignore safety checks when updating the table.
     * @param {string} params.name - (Required) The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`
     * @param {string} params.updateMask - Required. The list of fields to update. A mask specifying which fields (e.g. `change_stream_config`) in the `table` field should be updated. This mask is relative to the `table` field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: * `change_stream_config` * `change_stream_config.retention_period` * `deletion_protection` * `automated_backup_policy` * `automated_backup_policy.retention_period` * `automated_backup_policy.frequency` * `row_key_schema` If `column_families` is set in `update_mask`, it will return an UNIMPLEMENTED error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Permanently deletes a specified table and all of its data.
     * @param {string} params.name - (Required) Required. The unique name of the table to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Restores a specified table which was accidentally deleted.
     * @param {string} params.name - (Required) Required. The unique name of the table to be restored. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    /**
     * Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
     * @param {string} params.name - (Required) Required. The unique name of the table whose families should be modified. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.modifyColumnFamilies = (params) => this._makeRequest('v2/{+name}:modifyColumnFamilies', 'POST', params);

    /**
     * Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix. Note that row key prefixes used here are treated as service data. For more information about how service data is handled, see the [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).
     * @param {string} params.name - (Required) Required. The unique name of the table on which to drop a range of rows. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.dropRowRange = (params) => this._makeRequest('v2/{+name}:dropRowRange', 'POST', params);

    /**
     * Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
     * @param {string} params.name - (Required) Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.generateConsistencyToken = (params) => this._makeRequest('v2/{+name}:generateConsistencyToken', 'POST', params);

    /**
     * Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
     * @param {string} params.name - (Required) Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.checkConsistency = (params) => this._makeRequest('v2/{+name}:checkConsistency', 'POST', params);

    /**
     * Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
     * @param {string} params.parent - (Required) Required. The name of the instance in which to create the restored table. Values are of the form `projects//instances/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.restore = (params) => this._makeRequest('v2/{+parent}/tables:restore', 'POST', params);

    /**
     * Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a Bigtable resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified Bigtable resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.tables.authorizedViews = {};

    /**
     * Creates a new AuthorizedView in a table.
     * @param {string} params.authorizedViewId - Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`.
     * @param {string} params.parent - (Required) Required. This is the name of the table the AuthorizedView belongs to. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.create = (params) => this._makeRequest('v2/{+parent}/authorizedViews', 'POST', params);

    /**
     * Lists all AuthorizedViews from a specific table.
     * @param {integer} params.pageSize - Optional. Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
     * @param {string} params.pageToken - Optional. The value of `next_page_token` returned by a previous call.
     * @param {string} params.parent - (Required) Required. The unique name of the table for which AuthorizedViews should be listed. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {string} params.view - Optional. The resource_view to be applied to the returned AuthorizedViews' fields. Default to NAME_ONLY.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.list = (params) => this._makeRequest('v2/{+parent}/authorizedViews', 'GET', params);

    /**
     * Gets information from a specified AuthorizedView.
     * @param {string} params.name - (Required) Required. The unique name of the requested AuthorizedView. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`.
     * @param {string} params.view - Optional. The resource_view to be applied to the returned AuthorizedView's fields. Default to BASIC.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates an AuthorizedView in a table.
     * @param {boolean} params.ignoreWarnings - Optional. If true, ignore the safety checks when updating the AuthorizedView.
     * @param {string} params.name - (Required) Identifier. The name of this AuthorizedView. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`
     * @param {string} params.updateMask - Optional. The list of fields to update. A mask specifying which fields in the AuthorizedView resource should be updated. This mask is relative to the AuthorizedView resource, not to the request message. A field will be overwritten if it is in the mask. If empty, all fields set in the request will be overwritten. A special value `*` means to overwrite all fields (including fields not set in the request).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Permanently deletes a specified AuthorizedView.
     * @param {string} params.etag - Optional. The current etag of the AuthorizedView. If an etag is provided and does not match the current etag of the AuthorizedView, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The unique name of the AuthorizedView to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a Bigtable resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified Bigtable resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.authorizedViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.tables.schemaBundles = {};

    /**
     * Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a Bigtable resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that the caller has on the specified Bigtable resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a new schema bundle in the specified table.
     * @param {string} params.parent - (Required) Required. The parent resource where this schema bundle will be created. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @param {string} params.schemaBundleId - Required. The unique ID to use for the schema bundle, which will become the final component of the schema bundle's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.create = (params) => this._makeRequest('v2/{+parent}/schemaBundles', 'POST', params);

    /**
     * Updates a schema bundle in the specified table.
     * @param {boolean} params.ignoreWarnings - Optional. If set, ignore the safety checks when updating the Schema Bundle. The safety checks are: - The new Schema Bundle is backwards compatible with the existing Schema Bundle.
     * @param {string} params.name - (Required) Identifier. The unique name identifying this schema bundle. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets metadata information about the specified schema bundle.
     * @param {string} params.name - (Required) Required. The unique name of the schema bundle to retrieve. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}`
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all schema bundles associated with the specified table.
     * @param {integer} params.pageSize - The maximum number of schema bundles to return. If the value is positive, the server may return at most this value. If unspecified, the server will return the maximum allowed page size.
     * @param {string} params.pageToken - A page token, received from a previous `ListSchemaBundles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSchemaBundles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of schema bundles. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.list = (params) => this._makeRequest('v2/{+parent}/schemaBundles', 'GET', params);

    /**
     * Deletes a schema bundle in the specified table.
     * @param {string} params.etag - Optional. The etag of the schema bundle. If this is provided, it must match the server's etag. The server returns an ABORTED error on a mismatched etag.
     * @param {string} params.name - (Required) Required. The unique name of the schema bundle to delete. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}`
     * @return {object} The API response object.
     */
    this.projects.instances.tables.schemaBundles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

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
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
