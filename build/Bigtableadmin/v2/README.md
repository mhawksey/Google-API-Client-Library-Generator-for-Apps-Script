# Cloud Bigtable Admin API - Apps Script Client Library

Auto-generated client library for using the **Cloud Bigtable Admin API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:54:28 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:54:28 GMT
- **Created:** Sun, 20 Jul 2025 16:14:22 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `operations.projects`

### `operations.projects.operations`

#### `operations.projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

### `projects`

### `projects.instances`

#### `projects.instances.create()`

Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.get()`

Gets information about an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested instance. Values are of the form `projects/{project}/instances/{instance}`. |

#### `projects.instances.list()`

Lists information about instances in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`. |
| `params.pageToken` | `string` | No | DEPRECATED: This field is unused and ignored. |

#### `projects.instances.update()`

Updates an instance within a project. This method updates only the display name and type for an Instance. To update other Instance properties, such as labels, use PartialUpdateInstance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.partialUpdateInstance()`

Partially updates an instance within a project. This method can modify all fields of an Instance and is the preferred way to update an Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`. |
| `params.updateMask` | `string` | No | Required. The subset of Instance fields which should be replaced. Must be explicitly set. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.delete()`

Delete an instance from a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the instance to be deleted. Values are of the form `projects/{project}/instances/{instance}`. |

#### `projects.instances.getIamPolicy()`

Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.setIamPolicy()`

Sets the access control policy on an instance resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.testIamPermissions()`

Returns permissions that the caller has on the specified instance resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.clusters`

#### `projects.instances.clusters.create()`

Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.clusterId` | `string` | No | Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.get()`

Gets information about a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. |

#### `projects.instances.clusters.list()`

Lists information about clusters in an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`. |
| `params.pageToken` | `string` | No | DEPRECATED: This field is unused and ignored. |

#### `projects.instances.clusters.update()`

Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.partialUpdateCluster()`

Partially updates a cluster within a project. This method is the preferred way to update a Cluster. To enable and update autoscaling, set cluster_config.cluster_autoscaling_config. When autoscaling is enabled, serve_nodes is treated as an OUTPUT_ONLY field, meaning that updates to it are ignored. Note that an update cannot simultaneously set serve_nodes to non-zero and cluster_config.cluster_autoscaling_config to non-empty, and also specify both in the update_mask. To disable autoscaling, clear cluster_config.cluster_autoscaling_config, and explicitly set a serve_node count via the update_mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`. |
| `params.updateMask` | `string` | No | Required. The subset of Cluster fields which should be replaced. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.delete()`

Deletes a cluster from an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the cluster to be deleted. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. |

### `projects.instances.clusters.hotTablets`

#### `projects.instances.clusters.hotTablets.list()`

Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The cluster name to list hot tablets. Value is in the following form: `projects/{project}/instances/{instance}/clusters/{cluster}`. |
| `params.startTime` | `string` | No | The start time to list hot tablets. The hot tablets in the response will have start times between the requested start time and end time. Start time defaults to Now if it is unset, and end time defaults to Now - 24 hours if it is unset. The start time should be less than the end time, and the maximum allowed time range between start time and end time is 48 hours. Start time and end time should have values between Now and Now - 14 days. |
| `params.endTime` | `string` | No | The end time to list hot tablets. |
| `params.pageSize` | `integer` | No | Maximum number of results per page. A page_size that is empty or zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls do not need a page_size field. If a page_size is set in subsequent calls, it must match the page_size given in the first request. |
| `params.pageToken` | `string` | No | The value of `next_page_token` returned by a previous call. |

### `projects.instances.clusters.backups`

#### `projects.instances.clusters.backups.create()`

Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. |
| `params.backupId` | `string` | No | Required. The id of the backup to be created. The `backup_id` along with the parent `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.backups.get()`

Gets metadata on a pending or completed Cloud Bigtable Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup}`. |

#### `projects.instances.clusters.backups.patch()`

Updates a pending or completed Cloud Bigtable Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. |
| `params.updateMask` | `string` | No | Required. A mask specifying which fields (e.g. `expire_time`) in the Backup resource should be updated. This mask is relative to the Backup resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally by clients that do not know about them. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.backups.delete()`

Deletes a pending or completed Cloud Bigtable backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup to delete. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup}`. |

#### `projects.instances.clusters.backups.list()`

Lists Cloud Bigtable backups. Returns both completed and pending backups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The cluster to list backups from. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. Use `{cluster} = '-'` to list backups for all clusters in an instance, e.g., `projects/{project}/instances/{instance}/clusters/-`. |
| `params.filter` | `string` | No | A filter expression that filters backups listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =, or :. Colon ':' represents a HAS operator which is roughly synonymous with equality. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `source_table` * `state` * `start_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `end_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` To filter on multiple expressions, provide each separate expression within parentheses. By default, each expression is an AND expression. However, you can include AND, OR, and NOT expressions explicitly. Some examples of using filters are: * `name:"exact"` --> The backup's name is the string "exact". * `name:howl` --> The backup's name contains the string "howl". * `source_table:prod` --> The source_table's name contains the string "prod". * `state:CREATING` --> The backup is pending creation. * `state:READY` --> The backup is fully created and ready for use. * `(name:howl) AND (start_time < \"2018-03-28T14:50:00Z\")` --> The backup name contains the string "howl" and start_time of the backup is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` --> The backup's size is greater than 10GB |
| `params.orderBy` | `string` | No | An expression for specifying the sort order of the results of the request. The string value should specify one or more fields in Backup. The full syntax is described at https://aip.dev/132#ordering. Fields supported are: * name * source_table * expire_time * start_time * end_time * size_bytes * state For example, "start_time". The default sorting order is ascending. To specify descending order for the field, a suffix " desc" should be appended to the field name. For example, "start_time desc". Redundant space characters in the syntax are insigificant. If order_by is empty, results will be sorted by `start_time` in descending order starting from the most recently created backup. |
| `params.pageSize` | `integer` | No | Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`. |

#### `projects.instances.clusters.backups.copy()`

Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the destination cluster that will contain the backup copy. The cluster must already exist. Values are of the form: `projects/{project}/instances/{instance}/clusters/{cluster}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.backups.getIamPolicy()`

Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.backups.setIamPolicy()`

Sets the access control policy on a Bigtable resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.clusters.backups.testIamPermissions()`

Returns permissions that the caller has on the specified Bigtable resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.appProfiles`

#### `projects.instances.appProfiles.create()`

Creates an app profile within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance in which to create the new app profile. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.appProfileId` | `string` | No | Required. The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`. |
| `params.ignoreWarnings` | `boolean` | No | If true, ignore safety checks when creating the app profile. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.appProfiles.get()`

Gets information about an app profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/{app_profile}`. |

#### `projects.instances.appProfiles.list()`

Lists information about app profiles in an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`. |
| `params.pageSize` | `integer` | No | Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request. |
| `params.pageToken` | `string` | No | The value of `next_page_token` returned by a previous call. |

#### `projects.instances.appProfiles.patch()`

Updates an app profile within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the app profile, up to 50 characters long. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`. |
| `params.updateMask` | `string` | No | Required. The subset of app profile fields which should be replaced. If unset, all fields will be replaced. |
| `params.ignoreWarnings` | `boolean` | No | If true, ignore safety checks when updating the app profile. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.appProfiles.delete()`

Deletes an app profile from an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the app profile to be deleted. Values are of the form `projects/{project}/instances/{instance}/appProfiles/{app_profile}`. |
| `params.ignoreWarnings` | `boolean` | No | Required. If true, ignore safety checks when deleting the app profile. |

### `projects.instances.materializedViews`

#### `projects.instances.materializedViews.getIamPolicy()`

Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.materializedViews.setIamPolicy()`

Sets the access control policy on an instance resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.materializedViews.testIamPermissions()`

Returns permissions that the caller has on the specified instance resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.materializedViews.create()`

Creates a materialized view within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent instance where this materialized view will be created. Format: `projects/{project}/instances/{instance}`. |
| `params.materializedViewId` | `string` | No | Required. The ID to use for the materialized view, which will become the final component of the materialized view's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.materializedViews.get()`

Gets information about a materialized view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested materialized view. Values are of the form `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`. |

#### `projects.instances.materializedViews.list()`

Lists information about materialized views in an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance for which the list of materialized views is requested. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of materialized views to return. The service may return fewer than this value |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMaterializedViews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMaterializedViews` must match the call that provided the page token. |

#### `projects.instances.materializedViews.patch()`

Updates a materialized view within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique name of the materialized view. Format: `projects/{project}/instances/{instance}/materializedViews/{materialized_view}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.materializedViews.delete()`

Deletes a materialized view from an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the materialized view to be deleted. Format: `projects/{project}/instances/{instance}/materializedViews/{materialized_view}`. |
| `params.etag` | `string` | No | Optional. The current etag of the materialized view. If an etag is provided and does not match the current etag of the materialized view, deletion will be blocked and an ABORTED error will be returned. |

### `projects.instances.logicalViews`

#### `projects.instances.logicalViews.getIamPolicy()`

Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.logicalViews.setIamPolicy()`

Sets the access control policy on an instance resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.logicalViews.testIamPermissions()`

Returns permissions that the caller has on the specified instance resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.logicalViews.create()`

Creates a logical view within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent instance where this logical view will be created. Format: `projects/{project}/instances/{instance}`. |
| `params.logicalViewId` | `string` | No | Required. The ID to use for the logical view, which will become the final component of the logical view's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.logicalViews.get()`

Gets information about a logical view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested logical view. Values are of the form `projects/{project}/instances/{instance}/logicalViews/{logical_view}`. |

#### `projects.instances.logicalViews.list()`

Lists information about logical views in an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance for which the list of logical views is requested. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of logical views to return. The service may return fewer than this value |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLogicalViews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalViews` must match the call that provided the page token. |

#### `projects.instances.logicalViews.patch()`

Updates a logical view within an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique name of the logical view. Format: `projects/{project}/instances/{instance}/logicalViews/{logical_view}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.logicalViews.delete()`

Deletes a logical view from an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the logical view to be deleted. Format: `projects/{project}/instances/{instance}/logicalViews/{logical_view}`. |
| `params.etag` | `string` | No | Optional. The current etag of the logical view. If an etag is provided and does not match the current etag of the logical view, deletion will be blocked and an ABORTED error will be returned. |

### `projects.instances.tables`

#### `projects.instances.tables.create()`

Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance in which to create the table. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.list()`

Lists all tables served from a specified instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`. |
| `params.view` | `string` | No | The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported. |
| `params.pageSize` | `integer` | No | Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request. |
| `params.pageToken` | `string` | No | The value of `next_page_token` returned by a previous call. |

#### `projects.instances.tables.get()`

Gets metadata information about the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested table. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.view` | `string` | No | The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified. |

#### `projects.instances.tables.patch()`

Updates a specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL` |
| `params.updateMask` | `string` | No | Required. The list of fields to update. A mask specifying which fields (e.g. `change_stream_config`) in the `table` field should be updated. This mask is relative to the `table` field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: * `change_stream_config` * `change_stream_config.retention_period` * `deletion_protection` * `automated_backup_policy` * `automated_backup_policy.retention_period` * `automated_backup_policy.frequency` * `row_key_schema` If `column_families` is set in `update_mask`, it will return an UNIMPLEMENTED error. |
| `params.ignoreWarnings` | `boolean` | No | Optional. If true, ignore safety checks when updating the table. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.delete()`

Permanently deletes a specified table and all of its data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the table to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |

#### `projects.instances.tables.undelete()`

Restores a specified table which was accidentally deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the table to be restored. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.modifyColumnFamilies()`

Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the table whose families should be modified. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.dropRowRange()`

Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix. Note that row key prefixes used here are treated as service data. For more information about how service data is handled, see the [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the table on which to drop a range of rows. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.generateConsistencyToken()`

Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.checkConsistency()`

Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.restore()`

Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the instance in which to create the restored table. Values are of the form `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.getIamPolicy()`

Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.setIamPolicy()`

Sets the access control policy on a Bigtable resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.testIamPermissions()`

Returns permissions that the caller has on the specified Bigtable resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.tables.authorizedViews`

#### `projects.instances.tables.authorizedViews.create()`

Creates a new AuthorizedView in a table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. This is the name of the table the AuthorizedView belongs to. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.authorizedViewId` | `string` | No | Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The `authorized_view_id` appended to `parent` forms the full AuthorizedView name of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.authorizedViews.list()`

Lists all AuthorizedViews from a specific table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the table for which AuthorizedViews should be listed. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request. |
| `params.pageToken` | `string` | No | Optional. The value of `next_page_token` returned by a previous call. |
| `params.view` | `string` | No | Optional. The resource_view to be applied to the returned AuthorizedViews' fields. Default to NAME_ONLY. |

#### `projects.instances.tables.authorizedViews.get()`

Gets information from a specified AuthorizedView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the requested AuthorizedView. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`. |
| `params.view` | `string` | No | Optional. The resource_view to be applied to the returned AuthorizedView's fields. Default to BASIC. |

#### `projects.instances.tables.authorizedViews.patch()`

Updates an AuthorizedView in a table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of this AuthorizedView. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. A mask specifying which fields in the AuthorizedView resource should be updated. This mask is relative to the AuthorizedView resource, not to the request message. A field will be overwritten if it is in the mask. If empty, all fields set in the request will be overwritten. A special value `*` means to overwrite all fields (including fields not set in the request). |
| `params.ignoreWarnings` | `boolean` | No | Optional. If true, ignore the safety checks when updating the AuthorizedView. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.authorizedViews.delete()`

Permanently deletes a specified AuthorizedView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the AuthorizedView to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view}`. |
| `params.etag` | `string` | No | Optional. The current etag of the AuthorizedView. If an etag is provided and does not match the current etag of the AuthorizedView, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.instances.tables.authorizedViews.getIamPolicy()`

Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.authorizedViews.setIamPolicy()`

Sets the access control policy on a Bigtable resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.authorizedViews.testIamPermissions()`

Returns permissions that the caller has on the specified Bigtable resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.tables.schemaBundles`

#### `projects.instances.tables.schemaBundles.getIamPolicy()`

Gets the access control policy for a Bigtable resource. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.schemaBundles.setIamPolicy()`

Sets the access control policy on a Bigtable resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.schemaBundles.testIamPermissions()`

Returns permissions that the caller has on the specified Bigtable resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.schemaBundles.create()`

Creates a new schema bundle in the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this schema bundle will be created. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.schemaBundleId` | `string` | No | Required. The unique ID to use for the schema bundle, which will become the final component of the schema bundle's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.schemaBundles.patch()`

Updates a schema bundle in the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique name identifying this schema bundle. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.ignoreWarnings` | `boolean` | No | Optional. If set, ignore the safety checks when updating the Schema Bundle. The safety checks are: - The new Schema Bundle is backwards compatible with the existing Schema Bundle. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.tables.schemaBundles.get()`

Gets metadata information about the specified schema bundle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the schema bundle to retrieve. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}` |

#### `projects.instances.tables.schemaBundles.list()`

Lists all schema bundles associated with the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of schema bundles. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`. |
| `params.pageSize` | `integer` | No | The maximum number of schema bundles to return. If the value is positive, the server may return at most this value. If unspecified, the server will return the maximum allowed page size. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSchemaBundles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSchemaBundles` must match the call that provided the page token. |
| `params.view` | `string` | No | Optional. The resource_view to be applied to the returned SchemaBundles' fields. Defaults to NAME_ONLY. |

#### `projects.instances.tables.schemaBundles.delete()`

Deletes a schema bundle in the specified table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the schema bundle to delete. Values are of the form `projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle}` |
| `params.etag` | `string` | No | Optional. The etag of the schema bundle. If this is provided, it must match the server's etag. The server returns an ABORTED error on a mismatched etag. |

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |