# Database Migration API - Apps Script Client Library

Auto-generated client library for using the **Database Migration API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:33:01 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:16:02 GMT
- **Created:** Sun, 20 Jul 2025 16:25:04 GMT



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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.migrationJobs`

#### `projects.locations.migrationJobs.list()`

Lists migration jobs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of migrationJobs. |
| `params.pageSize` | `integer` | No | The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
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
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of migration jobs. |
| `params.migrationJobId` | `string` | No | Required. The ID of the instance to create. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.patch()`

Updates the parameters of a single migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the migration job resource by the update. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.delete()`

Deletes a single migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the migration job resource to delete. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.force` | `boolean` | No | The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted. |

#### `projects.locations.migrationJobs.start()`

Start an already created migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to start. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.stop()`

Stops a running migration job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to stop. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.resume()`

Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to resume. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.promote()`

Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to promote. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.verify()`

Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to verify. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.restart()`

Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the migration job resource to restart. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.generateSshScript()`

Generate a SSH configuration script to configure the reverse SSH connectivity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migrationJob` | `string` | Yes | Name of the migration job resource to generate the SSH script. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.migrationJobs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.connectionProfiles`

#### `projects.locations.connectionProfiles.list()`

Retrieve a list of all connection profiles in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of connection profiles. |
| `params.pageSize` | `integer` | No | The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. |
| `params.filter` | `string` | No | A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username. |
| `params.orderBy` | `string` | No | the order by fields for the result. |

#### `projects.locations.connectionProfiles.get()`

Gets details of a single connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the connection profile resource to get. |

#### `projects.locations.connectionProfiles.create()`

Creates a new connection profile in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of connection profiles. |
| `params.connectionProfileId` | `string` | No | Required. The connection profile identifier. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.patch()`

Update the configuration of a single connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the connection profile resource by the update. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.delete()`

Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the connection profile resource to delete. |
| `params.requestId` | `string` | No | A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored. It is recommended to always set this value to a UUID. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. |
| `params.force` | `boolean` | No | In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile). |

#### `projects.locations.connectionProfiles.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |