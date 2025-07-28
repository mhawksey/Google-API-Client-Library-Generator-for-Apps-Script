# Infrastructure Manager API - Apps Script Client Library

Auto-generated client library for using the **Infrastructure Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:44:50 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:24:37 GMT
- **Created:** Sun, 20 Jul 2025 16:23:42 GMT



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

### `projects.locations.deployments`

#### `projects.locations.deployments.list()`

Lists Deployments in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Deployments are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'. |
| `params.pageSize` | `integer` | No | When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Token returned by previous call to 'ListDeployments' which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Lists the Deployments that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Deployments in CREATING state. state=CREATING |
| `params.orderBy` | `string` | No | Field to use to sort the list. |

#### `projects.locations.deployments.get()`

Gets details about a Deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. Format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |

#### `projects.locations.deployments.create()`

Creates a Deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Deployment is created. The parent value is in the format: 'projects/{project_id}/locations/{location}'. |
| `params.deploymentId` | `string` | No | Required. The Deployment ID. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.patch()`

Updates a Deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}` |
| `params.updateMask` | `string` | No | Optional. Field mask used to specify the fields to be overwritten in the Deployment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.delete()`

Deletes a Deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, any revisions for this deployment will also be deleted. (Otherwise, the request will only work if the deployment has no revisions.) |
| `params.deletePolicy` | `string` | No | Optional. Policy on how resources actuated by the deployment should be deleted. If unspecified, the default behavior is to delete the underlying resources. |

#### `projects.locations.deployments.exportState()`

Exports Terraform state file from a given deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.importState()`

Imports Terraform state file in a given deployment. The state file does not take effect until the Deployment has been unlocked.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.deleteState()`

Deletes Terraform state file in a given deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.lock()`

Locks a deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.unlock()`

Unlocks a locked deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.exportLock()`

Exports the lock info on a locked deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |

#### `projects.locations.deployments.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deployments.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.deployments.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.deployments.revisions`

#### `projects.locations.deployments.revisions.list()`

Lists Revisions of a deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Revisions are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'. |
| `params.pageSize` | `integer` | No | When requesting a page of resources, `page_size` specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Token returned by previous call to 'ListRevisions' which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Lists the Revisions that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/dep/revisions/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Revisions in CREATING state. state=CREATING |
| `params.orderBy` | `string` | No | Field to use to sort the list. |

#### `projects.locations.deployments.revisions.get()`

Gets details about a Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Revision in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'. |

#### `projects.locations.deployments.revisions.exportState()`

Exports Terraform state file from a given revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.deployments.revisions.resources`

#### `projects.locations.deployments.revisions.resources.get()`

Gets details about a Resource deployed by Infra Manager.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Resource in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}/resource/{resource}'. |

#### `projects.locations.deployments.revisions.resources.list()`

Lists Resources in a given revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Resources are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'. |
| `params.pageSize` | `integer` | No | When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Token returned by previous call to 'ListResources' which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Lists the Resources that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/dep/revisions/bar/resources/baz |
| `params.orderBy` | `string` | No | Field to use to sort the list. |

### `projects.locations.previews`

#### `projects.locations.previews.create()`

Creates a Preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Preview is created. The parent value is in the format: 'projects/{project_id}/locations/{location}'. |
| `params.previewId` | `string` | No | Optional. The preview ID. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.previews.get()`

Gets details about a Preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the preview. Format: 'projects/{project_id}/locations/{location}/previews/{preview}'. |

#### `projects.locations.previews.list()`

Lists Previews in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the Previews are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'. |
| `params.pageSize` | `integer` | No | Optional. When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to 'ListDeployments' which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Optional. Lists the Deployments that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Deployments in CREATING state. state=CREATING |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `projects.locations.previews.delete()`

Deletes a Preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Preview in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.previews.export()`

Export Preview results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The preview whose results should be exported. The preview value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.previews.resourceChanges`

#### `projects.locations.previews.resourceChanges.list()`

Lists ResourceChanges for a given preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the ResourceChanges are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'. |
| `params.pageSize` | `integer` | No | Optional. When requesting a page of resource changes, 'page_size' specifies number of resource changes to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to 'ListResourceChanges' which specifies the position in the list from where to continue listing the resource changes. |
| `params.filter` | `string` | No | Optional. Lists the resource changes that match the filter expression. A filter expression filters the resource changes listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/previews/dep/resourceChanges/baz |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `projects.locations.previews.resourceChanges.get()`

Get a ResourceChange for a given preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource change to retrieve. Format: 'projects/{project_id}/locations/{location}/previews/{preview}/resourceChanges/{resource_change}'. |

### `projects.locations.previews.resourceDrifts`

#### `projects.locations.previews.resourceDrifts.list()`

List ResourceDrifts for a given preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the ResourceDrifts are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'. |
| `params.pageSize` | `integer` | No | Optional. When requesting a page of resource drifts, 'page_size' specifies number of resource drifts to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to 'ListResourceDrifts' which specifies the position in the list from where to continue listing the resource drifts. |
| `params.filter` | `string` | No | Optional. Lists the resource drifts that match the filter expression. A filter expression filters the resource drifts listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/previews/dep/resourceDrifts/baz |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `projects.locations.previews.resourceDrifts.get()`

Get a ResourceDrift for a given preview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource drift to retrieve. Format: 'projects/{project_id}/locations/{location}/previews/{preview}/resourceDrifts/{resource_drift}'. |

### `projects.locations.terraformVersions`

#### `projects.locations.terraformVersions.list()`

Lists TerraformVersions in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent in whose context the TerraformVersions are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'. |
| `params.pageSize` | `integer` | No | Optional. When requesting a page of terraform versions, 'page_size' specifies number of terraform versions to return. If unspecified, at most 500 will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to 'ListTerraformVersions' which specifies the position in the list from where to continue listing the terraform versions. |
| `params.filter` | `string` | No | Optional. Lists the TerraformVersions that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `projects.locations.terraformVersions.get()`

Gets details about a TerraformVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TerraformVersion. Format: 'projects/{project_id}/locations/{location}/terraformVersions/{terraform_version}' |