# Cloud Workstations API - Apps Script Client Library

Auto-generated client library for using the **Cloud Workstations API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:28:54 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:52 GMT
- **Created:** Sun, 20 Jul 2025 17:03:29 GMT



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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workstationClusters`

#### `projects.locations.workstationClusters.get()`

Returns the requested workstation cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested resource. |

#### `projects.locations.workstationClusters.list()`

Returns all workstation clusters in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter the WorkstationClusters to be listed. Possible filters are described in https://google.aip.dev/160. |

#### `projects.locations.workstationClusters.create()`

Creates a new workstation cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.workstationClusterId` | `string` | No | Required. ID to use for the workstation cluster. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.patch()`

Updates an existing workstation cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Full name of this workstation cluster. |
| `params.updateMask` | `string` | No | Required. Mask that specifies which fields in the workstation cluster should be updated. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.allowMissing` | `boolean` | No | Optional. If set, and the workstation cluster is not found, a new workstation cluster will be created. In this situation, update_mask is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.delete()`

Deletes the specified workstation cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workstation cluster to delete. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not apply it. |
| `params.etag` | `string` | No | Optional. If set, the request will be rejected if the latest version of the workstation cluster on the server does not have this ETag. |
| `params.force` | `boolean` | No | Optional. If set, any workstation configurations and workstations in the workstation cluster are also deleted. Otherwise, the request only works if the workstation cluster has no configurations or workstations. |

### `projects.locations.workstationClusters.workstationConfigs`

#### `projects.locations.workstationClusters.workstationConfigs.get()`

Returns the requested workstation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested resource. |

#### `projects.locations.workstationClusters.workstationConfigs.list()`

Returns all workstation configurations in the specified cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter the WorkstationConfigs to be listed. Possible filters are described in https://google.aip.dev/160. |

#### `projects.locations.workstationClusters.workstationConfigs.listUsable()`

Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. next_page_token value returned from a previous List request, if any. |

#### `projects.locations.workstationClusters.workstationConfigs.create()`

Creates a new workstation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.workstationConfigId` | `string` | No | Required. ID to use for the workstation configuration. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.patch()`

Updates an existing workstation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Full name of this workstation configuration. |
| `params.updateMask` | `string` | No | Required. Mask specifying which fields in the workstation configuration should be updated. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.allowMissing` | `boolean` | No | Optional. If set and the workstation configuration is not found, a new workstation configuration will be created. In this situation, update_mask is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.delete()`

Deletes the specified workstation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workstation configuration to delete. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.etag` | `string` | No | Optional. If set, the request is rejected if the latest version of the workstation configuration on the server does not have this ETag. |
| `params.force` | `boolean` | No | Optional. If set, any workstations in the workstation configuration are also deleted. Otherwise, the request works only if the workstation configuration has no workstations. |

#### `projects.locations.workstationClusters.workstationConfigs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.workstationClusters.workstationConfigs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workstationClusters.workstationConfigs.workstations`

#### `projects.locations.workstationClusters.workstationConfigs.workstations.get()`

Returns the requested workstation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested resource. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.list()`

Returns all Workstations using the specified workstation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. Filter the Workstations to be listed. Possible filters are described in https://google.aip.dev/160. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.listUsable()`

Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. next_page_token value returned from a previous List request, if any. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.create()`

Creates a new workstation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. |
| `params.workstationId` | `string` | No | Required. ID to use for the workstation. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.patch()`

Updates an existing workstation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Full name of this workstation. |
| `params.updateMask` | `string` | No | Required. Mask specifying which fields in the workstation configuration should be updated. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.allowMissing` | `boolean` | No | Optional. If set and the workstation configuration is not found, a new workstation configuration is created. In this situation, update_mask is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.delete()`

Deletes the specified workstation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workstation to delete. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually apply it. |
| `params.etag` | `string` | No | Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.start()`

Starts running a workstation so that users can connect to it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workstation to start. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.stop()`

Stops running a workstation, reducing costs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workstation to stop. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken()`

Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation. Once generated this token cannot be revoked and is good for the lifetime of the token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workstation` | `string` | Yes | Required. Name of the workstation for which the access token should be generated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |