# Google Cloud Memorystore for Redis API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Memorystore for Redis API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:26:06 GMT
- **Last Modified:** Fri, 01 May 2026 00:26:06 GMT
- **Created:** Sun, 20 Jul 2025 16:52:32 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |

#### `projects.locations.getSharedRegionalCertificateAuthority()`

Gets the details of regional certificate authority information for Redis cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Regional certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/sharedRegionalCertificateAuthority` where `location_id` refers to a Google Cloud region. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.aclPolicies`

#### `projects.locations.aclPolicies.delete()`

Deletes a specific Acl Policy. This action will delete the Acl Policy and all the rules associated with it. An ACL policy cannot be deleted if it is attached to a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis ACL Policy resource name using the form: `projects/{project_id}/locations/{location_id}/aclPolicies/{acl_policy_id}` where `location_id` refers to a GCP region. |
| `params.etag` | `string` | No | Optional. Etag of the ACL policy. If this is different from the server's etag, the request will fail with an ABORTED error. |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |

#### `projects.locations.aclPolicies.list()`

Lists all ACL Policies owned by a project in either the specified location (region) or all locations. The location should have the following format:

* `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` value returned from a previous `ListAclPolicies` request, if any. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more ACL policies left to be queried. The maximum value is 1000; values above 1000 will be coerced to 1000. |

#### `projects.locations.aclPolicies.patch()`

Updates the ACL policy. The operation applies the updated ACL policy to all of the linked clusters. If Memorystore can apply the policy to all clusters, then the operation returns a SUCCESS status. If Memorystore can't apply the policy to all clusters, then to ensure eventual consistency, Memorystore uses reconciliation to apply the policy to the failed clusters. Completed longrunning.Operation will contain the new ACL Policy object in the response field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |
| `params.updateMask` | `string` | No | Optional. Mask of fields to be updated. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from `AclPolicy`: * `rules` |
| `params.name` | `string` | Yes | Identifier. Full resource path of the ACL policy. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.aclPolicies.get()`

Gets the details of a specific Redis Cluster ACL Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis ACL Policy resource name using the form: `projects/{project_id}/locations/{location_id}/aclPolicies/{acl_policy_id}` where `location_id` refers to a GCP region. |

#### `projects.locations.aclPolicies.create()`

Creates an ACL Policy. The creation is executed synchronously and the policy is available for use immediately after the RPC returns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. . |
| `params.parent` | `string` | Yes | Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. |
| `params.aclPolicyId` | `string` | No | Required. The logical name of the ACL Policy in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.instances`

#### `projects.locations.instances.delete()`

Deletes a specific Redis instance. Instance stops serving and data is deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |

#### `projects.locations.instances.import()`

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.getAuthString()`

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |

#### `projects.locations.instances.create()`

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region. |
| `params.instanceId` | `string` | No | Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.failover()`

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.upgrade()`

Upgrades Redis instance to the newer Redis version specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.list()`

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format:

* `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried. |
| `params.parent` | `string` | Yes | Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous ListInstances request, if any. |

#### `projects.locations.instances.patch()`

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.rescheduleMaintenance()`

Reschedule maintenance for a given instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.instances.get()`

Gets the details of a specific Redis instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |

#### `projects.locations.instances.export()`

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters`

#### `projects.locations.clusters.get()`

Gets the details of a specific Redis cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. |

#### `projects.locations.clusters.list()`

Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format:

* `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous `ListClusters` request, if any. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. |

#### `projects.locations.clusters.rescheduleClusterMaintenance()`

Reschedules upcoming maintenance event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis Cluster instance resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.clusters.patch()`

Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Cluster: * `size_gb` * `replica_count` * `cluster_endpoints` |
| `params.name` | `string` | Yes | Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.clusters.addTokenAuthUser()`

Adds a token auth user for a token based auth enabled cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cluster` | `string` | Yes | Required. The cluster resource that this token auth user will be added for. Format: projects/{project}/locations/{location}/clusters/{cluster} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.clusters.getCertificateAuthority()`

Gets the details of certificate authority information for Redis cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis cluster certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}/certificateAuthority` where `location_id` refers to a Google Cloud region. |

#### `projects.locations.clusters.create()`

Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. |
| `params.clusterId` | `string` | No | Required. The logical name of the Redis cluster in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.clusters.delete()`

Deletes a specific Redis cluster. Cluster stops serving and data is deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |

#### `projects.locations.clusters.backup()`

Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters.tokenAuthUsers`

#### `projects.locations.clusters.tokenAuthUsers.get()`

Gets a specific token auth user for a basic auth enabled cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of token auth user for a token based auth enabled cluster. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} |

#### `projects.locations.clusters.tokenAuthUsers.delete()`

Deletes a token auth user for a token based auth enabled cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The name of the token auth user to delete. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} |
| `params.force` | `boolean` | No | Optional. If set to true, any child auth tokens of this user will also be deleted. Otherwise, the request will only work if the user has no auth tokens. |

#### `projects.locations.clusters.tokenAuthUsers.list()`

Lists all the token auth users for a token based auth enabled cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Sort results by a defined order. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's The maximum value is 1000; values above 1000 will be coerced to 1000. `next_page_token` to determine if there are more clusters left to be queried. |
| `params.filter` | `string` | No | Optional. Expression for filtering results. |
| `params.parent` | `string` | Yes | Required. The parent resource that this token based auth user will be listed for. Format: projects/{project}/locations/{location}/clusters/{cluster} |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` value returned from a previous [ListTokenAuthUsers] request, if any. |

#### `projects.locations.clusters.tokenAuthUsers.addAuthToken()`

Adds a auth token for a user of a token based auth enabled cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tokenAuthUser` | `string` | Yes | Required. The name of the token auth user resource that this auth token will be added for. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.clusters.tokenAuthUsers.authTokens`

#### `projects.locations.clusters.tokenAuthUsers.authTokens.list()`

Lists all the auth tokens for a specific token auth user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource that this auth token will be listed for. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` value returned from a previous [ListTokenAuthUsers] request, if any. |
| `params.filter` | `string` | No | Optional. Expression for filtering results. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. The maximum value is 1000; values above 1000 will be coerced to 1000. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. |
| `params.orderBy` | `string` | No | Optional. Sort results by a defined order. |

#### `projects.locations.clusters.tokenAuthUsers.authTokens.get()`

Gets a specific auth token for a specific token auth user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of auth token for a token based auth enabled cluster. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user}/authTokens/{auth_token} |

#### `projects.locations.clusters.tokenAuthUsers.authTokens.delete()`

Removes a auth token for a user of a token based auth enabled instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the token auth user resource that this auth token will be deleted from. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user}/authTokens/{auth_token} |

### `projects.locations.operations`

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

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

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.filter` | `string` | No | The standard list filter. |

### `projects.locations.backupCollections`

#### `projects.locations.backupCollections.list()`

Lists all backup collections owned by a consumer project in either the specified location (region) or all locations. If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. |
| `params.parent` | `string` | Yes | Required. The resource name of the backupCollection location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any. |

#### `projects.locations.backupCollections.get()`

Get a backup collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis backupCollection resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}` where `location_id` refers to a Google Cloud region. |

### `projects.locations.backupCollections.backups`

#### `projects.locations.backupCollections.backups.export()`

Exports a specific backup to a customer target Cloud Storage URI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.backupCollections.backups.get()`

Gets the details of a specific backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` |

#### `projects.locations.backupCollections.backups.delete()`

Deletes a specific backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |

#### `projects.locations.backupCollections.backups.list()`

Lists all backups owned by a backup collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the backupCollection using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}` |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. |