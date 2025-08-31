# Database Migration API - Apps Script Client Library

Auto-generated client library for using the **Database Migration API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:33:01 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:11:43 GMT
- **Created:** Sun, 20 Jul 2025 16:25:08 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.fetchStaticIps()`

Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Maximum number of IPs to return. |
| `params.pageToken` | `string` | No | A page token, received from a previous `FetchStaticIps` call. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.migrationJobs`

#### `projects.locations.migrationJobs.list()`

Lists migration jobs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of migrationJobs. |
| `params.pageSize` | `integer` | No | The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token. |
| `params.filter` | `string` | No | A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion. |
| `params.orderBy` | `string` | No | Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc". |

#### `projects.locations.migrationJobs.get()`

Gets details of a single migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the migration job resource to get. |

#### `projects.locations.migrationJobs.create()`

Creates a new migration job in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of migration jobs. |
| `params.migrationJobId` | `string` | No | Required. The ID of the instance to create. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.patch()`

Updates the parameters of a single migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.delete()`

Deletes a single migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the migration job resource to delete. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.force` | `boolean` | No | The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted. |

#### `projects.locations.migrationJobs.start()`

Start an already created migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to start. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.stop()`

Stops a running migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to stop. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.resume()`

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to resume. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.promote()`

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to promote. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.demoteDestination()`

Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL for MySQL 2. PostgreSQL to Cloud SQL for PostgreSQL 3. PostgreSQL to AlloyDB for PostgreSQL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to demote its destination. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.verify()`

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to verify. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.restart()`

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to restart. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.generateSshScript()`

Generate a SSH configuration script to configure the reverse SSH connectivity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migrationJob` | `string` | Yes | Name of the migration job resource to generate the SSH script. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.generateTcpProxyScript()`

Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migrationJob` | `string` | Yes | Name of the migration job resource to generate the TCP Proxy script. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.fetchSourceObjects()`

Retrieves objects from the source database that can be selected for data migration. This is applicable for the following migrations: 1. PostgreSQL to Cloud SQL for PostgreSQL 2. PostgreSQL to AlloyDB for PostgreSQL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name for the migration job for which source objects should be returned. |

#### `projects.locations.migrationJobs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.migrationJobs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.migrationJobs.objects`

#### `projects.locations.migrationJobs.objects.get()`

Use this method to get details about a migration job object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the migration job object resource to get. |

#### `projects.locations.migrationJobs.objects.lookup()`

Use this method to look up a migration job object by its source object identifier.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent migration job that owns the collection of objects. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.objects.list()`

Use this method to list the objects of a specific migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent migration job that owns the collection of objects. |
| `params.pageSize` | `integer` | No | Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListMigrationJObObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigrationJobObjectsRequest` must match the call that provided the page token. |

#### `projects.locations.migrationJobs.objects.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.objects.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.migrationJobs.objects.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.connectionProfiles`

#### `projects.locations.connectionProfiles.list()`

Retrieves a list of all connection profiles in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of connection profiles. |
| `params.pageSize` | `integer` | No | The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. |
| `params.filter` | `string` | No | A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username. |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order results according to. |

#### `projects.locations.connectionProfiles.get()`

Gets details of a single connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the connection profile resource to get. |

#### `projects.locations.connectionProfiles.create()`

Creates a new connection profile in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of connection profiles. |
| `params.connectionProfileId` | `string` | No | Required. The connection profile identifier. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the connection profile, but don't create any resources. The default is false. Only supported for Oracle connection profiles. |
| `params.skipValidation` | `boolean` | No | Optional. Create the connection profile without validating it. The default is false. Only supported for Oracle connection profiles. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.patch()`

Update the configuration of a single connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the connection profile, but don't update any resources. The default is false. Only supported for Oracle connection profiles. |
| `params.skipValidation` | `boolean` | No | Optional. Update the connection profile without validating it. The default is false. Only supported for Oracle connection profiles. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.delete()`

Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the connection profile resource to delete. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.force` | `boolean` | No | In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile). |

#### `projects.locations.connectionProfiles.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.connectionProfiles.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.privateConnections`

#### `projects.locations.privateConnections.create()`

Creates a new private connection in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of PrivateConnections. |
| `params.privateConnectionId` | `string` | No | Required. The private connection identifier. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.skipValidation` | `boolean` | No | Optional. If set to true, will skip validations. |
| `params.validateOnly` | `boolean` | No | Optional. For PSC Interface only - get the tenant project before creating the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.privateConnections.get()`

Gets details of a single private connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the private connection to get. |

#### `projects.locations.privateConnections.list()`

Retrieves a list of private connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of private connections. |
| `params.pageSize` | `integer` | No | Maximum number of private connections to return. If unspecified, at most 50 private connections that are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. |
| `params.filter` | `string` | No | A filter expression that filters private connections listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list private connections created this year by specifying **createTime %gt; 2021-01-01T00:00:00.000000000Z**. |
| `params.orderBy` | `string` | No | Order by fields for the result. |

#### `projects.locations.privateConnections.delete()`

Deletes a single Database Migration Service private connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the private connection to delete. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |

#### `projects.locations.privateConnections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.privateConnections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.privateConnections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversionWorkspaces`

#### `projects.locations.conversionWorkspaces.get()`

Gets details of a single conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the conversion workspace resource to get. |

#### `projects.locations.conversionWorkspaces.list()`

Lists conversion workspaces in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of conversion workspaces. |
| `params.pageSize` | `integer` | No | The maximum number of conversion workspaces to return. The service may return fewer than this value. If unspecified, at most 50 sets are returned. |
| `params.pageToken` | `string` | No | The nextPageToken value received in the previous call to conversionWorkspaces.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspaces.list must match the call that provided the page token. |
| `params.filter` | `string` | No | A filter expression that filters conversion workspaces listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list conversion workspaces created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **source.version = "12.c.1"** to select all conversion workspaces with source database version equal to 12.c.1. |

#### `projects.locations.conversionWorkspaces.create()`

Creates a new conversion workspace in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of conversion workspaces. |
| `params.conversionWorkspaceId` | `string` | No | Required. The ID of the conversion workspace to create. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.patch()`

Updates the parameters of a single conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.delete()`

Deletes a single conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the conversion workspace resource to delete. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.force` | `boolean` | No | Force delete the conversion workspace, even if there's a running migration that is using the workspace. |

#### `projects.locations.conversionWorkspaces.seed()`

Imports a snapshot of the source database into the conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the conversion workspace resource to seed with new database structure, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.convert()`

Creates a draft tree schema for the destination database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the conversion workspace resource to convert in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.commit()`

Marks all the data in the conversion workspace as committed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the conversion workspace resource to commit. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.rollback()`

Rolls back a conversion workspace to the last committed snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the conversion workspace resource to roll back to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.apply()`

Applies draft tree onto a specific destination database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversion workspace resource for which to apply the draft tree. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.describeDatabaseEntities()`

Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversionWorkspace` | `string` | Yes | Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of entities to return. The service may return fewer entities than the value specifies. |
| `params.pageToken` | `string` | No | Optional. The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token. |
| `params.tree` | `string` | No | Required. The tree to fetch. |
| `params.uncommitted` | `boolean` | No | Optional. Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified. |
| `params.commitId` | `string` | No | Optional. Request a specific commit ID. If not specified, the entities from the latest commit are returned. |
| `params.filter` | `string` | No | Optional. Filter the returned entities based on AIP-160 standard. |
| `params.view` | `string` | No | Optional. Results view based on AIP-157 |

#### `projects.locations.conversionWorkspaces.searchBackgroundJobs()`

Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversionWorkspace` | `string` | Yes | Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.returnMostRecentPerJobType` | `boolean` | No | Optional. Whether or not to return just the most recent job per job type, |
| `params.maxSize` | `integer` | No | Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100. |
| `params.completedUntilTime` | `string` | No | Optional. If provided, only returns jobs that completed until (not including) the given timestamp. |

#### `projects.locations.conversionWorkspaces.describeConversionWorkspaceRevisions()`

Retrieves a list of committed revisions of a specific conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversionWorkspace` | `string` | Yes | Required. Name of the conversion workspace resource whose revisions are listed. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.commitId` | `string` | No | Optional. Optional filter to request a specific commit ID. |

#### `projects.locations.conversionWorkspaces.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.conversionWorkspaces.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversionWorkspaces.mappingRules`

#### `projects.locations.conversionWorkspaces.mappingRules.create()`

Creates a new mapping rule for a given conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of mapping rules. |
| `params.mappingRuleId` | `string` | No | Required. The ID of the rule to create. |
| `params.requestId` | `string` | No | A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversionWorkspaces.mappingRules.delete()`

Deletes a single mapping rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the mapping rule resource to delete. |
| `params.requestId` | `string` | No | Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |

#### `projects.locations.conversionWorkspaces.mappingRules.list()`

Lists the mapping rules for a specific conversion workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the conversion workspace resource whose mapping rules are listed in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.pageSize` | `integer` | No | The maximum number of rules to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | The nextPageToken value received in the previous call to mappingRules.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to mappingRules.list must match the call that provided the page token. |

#### `projects.locations.conversionWorkspaces.mappingRules.get()`

Gets the details of a mapping rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the mapping rule resource to get. Example: conversionWorkspaces/123/mappingRules/rule123 In order to retrieve a previous revision of the mapping rule, also provide the revision ID. Example: conversionWorkspace/123/mappingRules/rule123@c7cfa2a8c7cfa2a8c7cfa2a8c7cfa2a8 |

#### `projects.locations.conversionWorkspaces.mappingRules.import()`

Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. |
| `params.resource` | `object` | Yes | The request body. |