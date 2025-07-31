# AlloyDB API - Apps Script Client Library

Auto-generated client library for using the **AlloyDB API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:21:40 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:44 GMT
- **Created:** Sun, 20 Jul 2025 16:11:42 GMT



---

## API Reference

### `projects`

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

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.clusters`

#### `projects.locations.clusters.restoreFromCloudSQL()`

Restores an AlloyDB cluster from a CloudSQL resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of the new cluster. For the required format, see the comment on Cluster.name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.list()`

Lists Clusters in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. Additionally, you can perform an aggregated list operation by specifying a value with the following format: * projects/{project}/locations/- |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.clusters.get()`

Gets details of a single Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Cluster.name field. |
| `params.view` | `string` | No | Optional. The view of the cluster to return. Returns all default fields if not set. |

#### `projects.locations.clusters.create()`

Creates a new Cluster in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field. |
| `params.clusterId` | `string` | No | Required. ID of the requesting object. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.patch()`

Updates the parameters of a single Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region} |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, update succeeds even if cluster is not found. In that case, a new cluster is created and `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.export()`

Exports data from the cluster. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the cluster. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.import()`

Imports data to the cluster. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the cluster. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.upgrade()`

Upgrades a single Cluster. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the cluster. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.delete()`

Deletes a single Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Cluster.name field. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned. |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.force` | `boolean` | No | Optional. Whether to cascade delete child instances for given cluster. |

#### `projects.locations.clusters.promote()`

Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Cluster.name field |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.switchover()`

Switches the roles of PRIMARY and SECONDARY clusters without any data loss. This promotes the SECONDARY cluster to PRIMARY and sets up the original PRIMARY cluster to replicate from this newly promoted cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Cluster.name field |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.restore()`

Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.createsecondary()`

Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field. |
| `params.clusterId` | `string` | No | Required. ID of the requesting object (the secondary cluster). |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.clusters.instances`

#### `projects.locations.clusters.instances.list()`

Lists Instances in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: * projects/{project}/locations/-/clusters/- * projects/{project}/locations/{region}/clusters/- |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.clusters.instances.get()`

Gets details of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Instance.name field. |
| `params.view` | `string` | No | The view of the instance to return. |

#### `projects.locations.clusters.instances.create()`

Creates a new Instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. |
| `params.instanceId` | `string` | No | Required. ID of the requesting object. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.createsecondary()`

Creates a new SECONDARY Instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. |
| `params.instanceId` | `string` | No | Required. ID of the requesting object. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.patch()`

Updates the parameters of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id} |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, update succeeds even if instance is not found. In that case, a new instance is created and `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.delete()`

Deletes a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Instance.name field. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. The current etag of the Instance. If an etag is provided and does not match the current etag of the Instance, deletion will be blocked and an ABORTED error will be returned. |
| `params.validateOnly` | `boolean` | No | Optional. If set, performs request validation, for example, permission checks and any other type of validation, but does not actually execute the create request. |

#### `projects.locations.clusters.instances.failover()`

Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Instance.name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.injectFault()`

Injects fault in an instance. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Instance.name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.restart()`

Restart an Instance in a cluster. Imperative only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the Instance.name field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.instances.getConnectionInfo()`

Get instance metadata used for a connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. The required format is: projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance} |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.clusters.users`

#### `projects.locations.clusters.users.list()`

Lists Users in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListUsersRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.clusters.users.get()`

Gets details of a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the User.name field. |

#### `projects.locations.clusters.users.create()`

Creates a new User in a given project, location, and cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.userId` | `string` | No | Required. ID of the requesting object. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.users.patch()`

Updates the parameters of a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |
| `params.allowMissing` | `boolean` | No | Optional. Allow missing fields in the update mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clusters.users.delete()`

Deletes a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource. For the required format, see the comment on the User.name field. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |

### `projects.locations.backups`

#### `projects.locations.backups.list()`

Lists Backups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListBackupsRequest |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `projects.locations.backups.get()`

Gets details of a single Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.backups.create()`

Creates a new Backup in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.backupId` | `string` | No | Required. ID of the requesting object. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backups.patch()`

Updates the parameters of a single Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project}/locations/{region} |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, update succeeds even if instance is not found. In that case, a new backup is created and `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backups.delete()`

Deletes a single Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. For the required format, see the comment on the Backup.name field. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server ignores the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, the backend validates the request, but doesn't actually execute it. |
| `params.etag` | `string` | No | Optional. The current etag of the Backup. If an etag is provided and does not match the current etag of the Backup, deletion will be blocked and an ABORTED error will be returned. |

### `projects.locations.supportedDatabaseFlags`

#### `projects.locations.supportedDatabaseFlags.list()`

Lists SupportedDatabaseFlags for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource. The required format is: * projects/{project}/locations/{location} Regardless of the parent specified here, as long it is contains a valid project and location, the service will return a static list of supported flags resources. Note that we do not yet support region-specific flags. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.scope` | `string` | No | Optional. The scope for which supported flags are requested. If not specified, default is DATABASE. |