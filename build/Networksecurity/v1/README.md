# Network Security API - Apps Script Client Library

Auto-generated client library for using the **Network Security API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:45:23 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:34:13 GMT
- **Created:** Sun, 20 Jul 2025 16:44:06 GMT



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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.addressGroups`

#### `projects.locations.addressGroups.list()`

Lists address groups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of AddressGroups to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. |

#### `projects.locations.addressGroups.get()`

Gets details of a single address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AddressGroup to get. Must be in the format `projects/*/locations/{location}/addressGroups/*`. |

#### `projects.locations.addressGroups.create()`

Creates a new address group in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AddressGroup. Must be in the format `projects/*/locations/{location}`. |
| `params.addressGroupId` | `string` | No | Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.patch()`

Updates the parameters of a single address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/{location}/addressGroups/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.addItems()`

Adds items to an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.removeItems()`

Removes items from an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.cloneItems()`

Clones items from one address group to another.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.delete()`

Deletes a single address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AddressGroup to delete. Must be in the format `projects/*/locations/{location}/addressGroups/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.addressGroups.listReferences()`

Lists references of an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.pageSize` | `integer` | No | The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.addressGroups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.addressGroups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.addressGroups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.firewallEndpointAssociations`

#### `projects.locations.firewallEndpointAssociations.list()`

Lists Associations in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListAssociationsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `projects.locations.firewallEndpointAssociations.get()`

Gets details of a single FirewallEndpointAssociation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.firewallEndpointAssociations.create()`

Creates a new FirewallEndpointAssociation in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.firewallEndpointAssociationId` | `string` | No | Optional. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_association_id from the method_signature of Create RPC. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.firewallEndpointAssociations.delete()`

Deletes a single FirewallEndpointAssociation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.firewallEndpointAssociations.patch()`

Update a single FirewallEndpointAssociation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. name of resource |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Association resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.interceptEndpointGroups`

#### `projects.locations.interceptEndpointGroups.list()`

Lists endpoint groups in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.interceptEndpointGroups.get()`

Gets a specific endpoint group. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroups/{intercept_endpoint_group} |

#### `projects.locations.interceptEndpointGroups.create()`

Creates an endpoint group in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} |
| `params.interceptEndpointGroupId` | `string` | No | Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptEndpointGroups.patch()`

Updates an endpoint group. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `intercept_endpoint_group.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptEndpointGroups.delete()`

Deletes an endpoint group. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The endpoint group to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.interceptEndpointGroupAssociations`

#### `projects.locations.interceptEndpointGroupAssociations.list()`

Lists associations in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.interceptEndpointGroupAssociations.get()`

Gets a specific association. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroupAssociations/{intercept_endpoint_group_association} |

#### `projects.locations.interceptEndpointGroupAssociations.create()`

Creates an association in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} |
| `params.interceptEndpointGroupAssociationId` | `string` | No | Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptEndpointGroupAssociations.patch()`

Updates an association. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `intercept_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptEndpointGroupAssociations.delete()`

Deletes an association. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The association to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.interceptDeploymentGroups`

#### `projects.locations.interceptDeploymentGroups.list()`

Lists deployment groups in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListInterceptDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.interceptDeploymentGroups.get()`

Gets a specific deployment group. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/interceptDeploymentGroups/{intercept_deployment_group} |

#### `projects.locations.interceptDeploymentGroups.create()`

Creates a deployment group in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} |
| `params.interceptDeploymentGroupId` | `string` | No | Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptDeploymentGroups.patch()`

Updates a deployment group. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `intercept_deployment_group.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptDeploymentGroups.delete()`

Deletes a deployment group. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The deployment group to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.interceptDeployments`

#### `projects.locations.interceptDeployments.list()`

Lists deployments in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListInterceptDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.interceptDeployments.get()`

Gets a specific deployment. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment} |

#### `projects.locations.interceptDeployments.create()`

Creates a deployment in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} |
| `params.interceptDeploymentId` | `string` | No | Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptDeployments.patch()`

Updates a deployment. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `intercept_deployment.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.interceptDeployments.delete()`

Deletes a deployment. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.mirroringEndpointGroups`

#### `projects.locations.mirroringEndpointGroups.list()`

Lists endpoint groups in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.mirroringEndpointGroups.get()`

Gets a specific endpoint group. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroring_endpoint_group} |

#### `projects.locations.mirroringEndpointGroups.create()`

Creates an endpoint group in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} |
| `params.mirroringEndpointGroupId` | `string` | No | Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringEndpointGroups.patch()`

Updates an endpoint group. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `mirroring_endpoint_group.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringEndpointGroups.delete()`

Deletes an endpoint group. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The endpoint group to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.mirroringEndpointGroupAssociations`

#### `projects.locations.mirroringEndpointGroupAssociations.list()`

Lists associations in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.mirroringEndpointGroupAssociations.get()`

Gets a specific association. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroupAssociations/{mirroring_endpoint_group_association} |

#### `projects.locations.mirroringEndpointGroupAssociations.create()`

Creates an association in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} |
| `params.mirroringEndpointGroupAssociationId` | `string` | No | Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringEndpointGroupAssociations.patch()`

Updates an association. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `mirroring_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringEndpointGroupAssociations.delete()`

Deletes an association. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The association to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.mirroringDeploymentGroups`

#### `projects.locations.mirroringDeploymentGroups.list()`

Lists deployment groups in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMirroringDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.mirroringDeploymentGroups.get()`

Gets a specific deployment group. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/mirroringDeploymentGroups/{mirroring_deployment_group} |

#### `projects.locations.mirroringDeploymentGroups.create()`

Creates a deployment group in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} |
| `params.mirroringDeploymentGroupId` | `string` | No | Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringDeploymentGroups.patch()`

Updates a deployment group. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `mirroring_deployment_group.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringDeploymentGroups.delete()`

Deletes a deployment group. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The deployment group to delete. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.mirroringDeployments`

#### `projects.locations.mirroringDeployments.list()`

Lists deployments in a given project and location. See https://google.aip.dev/132.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMirroringDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. |
| `params.filter` | `string` | No | Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. |
| `params.orderBy` | `string` | No | Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.mirroringDeployments.get()`

Gets a specific deployment. See https://google.aip.dev/131.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment} |

#### `projects.locations.mirroringDeployments.create()`

Creates a deployment in a given project and location. See https://google.aip.dev/133.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} |
| `params.mirroringDeploymentId` | `string` | No | Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringDeployments.patch()`

Updates a deployment. See https://google.aip.dev/134.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `mirroring_deployment.description`). See https://google.aip.dev/161 for more details. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.mirroringDeployments.delete()`

Deletes a deployment. See https://google.aip.dev/135.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. |

### `projects.locations.authorizationPolicies`

#### `projects.locations.authorizationPolicies.list()`

Lists AuthorizationPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of AuthorizationPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data. |

#### `projects.locations.authorizationPolicies.get()`

Gets details of a single AuthorizationPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AuthorizationPolicy to get. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. |

#### `projects.locations.authorizationPolicies.create()`

Creates a new AuthorizationPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`. |
| `params.authorizationPolicyId` | `string` | No | Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizationPolicies.patch()`

Updates the parameters of a single AuthorizationPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the AuthorizationPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizationPolicies.delete()`

Deletes a single AuthorizationPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AuthorizationPolicy to delete. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. |

#### `projects.locations.authorizationPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizationPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.authorizationPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backendAuthenticationConfigs`

#### `projects.locations.backendAuthenticationConfigs.list()`

Lists BackendAuthenticationConfigs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the BackendAuthenticationConfigs should be listed, specified in the format `projects/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of BackendAuthenticationConfigs to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListBackendAuthenticationConfigsResponse` Indicates that this is a continuation of a prior `ListBackendAuthenticationConfigs` call, and that the system should return the next page of data. |

#### `projects.locations.backendAuthenticationConfigs.get()`

Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the BackendAuthenticationConfig to get. Must be in the format `projects/*/locations/{location}/backendAuthenticationConfigs/*`. |

#### `projects.locations.backendAuthenticationConfigs.create()`

Creates a new BackendAuthenticationConfig in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the BackendAuthenticationConfig. Must be in the format `projects/*/locations/{location}`. |
| `params.backendAuthenticationConfigId` | `string` | No | Required. Short name of the BackendAuthenticationConfig resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "backend-auth-config". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backendAuthenticationConfigs.patch()`

Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/*/locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the BackendAuthenticationConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backendAuthenticationConfigs.delete()`

Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the BackendAuthenticationConfig to delete. Must be in the format `projects/*/locations/{location}/backendAuthenticationConfigs/*`. |
| `params.etag` | `string` | No | Optional. Etag of the resource. If this is provided, it must match the server's etag. |

### `projects.locations.serverTlsPolicies`

#### `projects.locations.serverTlsPolicies.list()`

Lists ServerTlsPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of ServerTlsPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. Setting this field to `true` will opt the request into returning the resources that are reachable, and into including the names of those that were unreachable in the [ListServerTlsPoliciesResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. |

#### `projects.locations.serverTlsPolicies.get()`

Gets details of a single ServerTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServerTlsPolicy to get. Must be in the format `projects/*/locations/{location}/serverTlsPolicies/*`. |

#### `projects.locations.serverTlsPolicies.create()`

Creates a new ServerTlsPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/*/locations/{location}`. |
| `params.serverTlsPolicyId` | `string` | No | Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serverTlsPolicies.patch()`

Updates the parameters of a single ServerTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*/locations/{location}/serverTlsPolicies/{server_tls_policy}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serverTlsPolicies.delete()`

Deletes a single ServerTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServerTlsPolicy to delete. Must be in the format `projects/*/locations/{location}/serverTlsPolicies/*`. |

#### `projects.locations.serverTlsPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serverTlsPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.serverTlsPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.clientTlsPolicies`

#### `projects.locations.clientTlsPolicies.list()`

Lists ClientTlsPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of ClientTlsPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data. |

#### `projects.locations.clientTlsPolicies.get()`

Gets details of a single ClientTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ClientTlsPolicy to get. Must be in the format `projects/*/locations/{location}/clientTlsPolicies/*`. |

#### `projects.locations.clientTlsPolicies.create()`

Creates a new ClientTlsPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/*/locations/{location}`. |
| `params.clientTlsPolicyId` | `string` | No | Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clientTlsPolicies.patch()`

Updates the parameters of a single ClientTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ClientTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clientTlsPolicies.delete()`

Deletes a single ClientTlsPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ClientTlsPolicy to delete. Must be in the format `projects/*/locations/{location}/clientTlsPolicies/*`. |

#### `projects.locations.clientTlsPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clientTlsPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.clientTlsPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.gatewaySecurityPolicies`

#### `projects.locations.gatewaySecurityPolicies.list()`

Lists GatewaySecurityPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of GatewaySecurityPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data. |

#### `projects.locations.gatewaySecurityPolicies.get()`

Gets details of a single GatewaySecurityPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the GatewaySecurityPolicy to get. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. |

#### `projects.locations.gatewaySecurityPolicies.create()`

Creates a new GatewaySecurityPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`. |
| `params.gatewaySecurityPolicyId` | `string` | No | Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gatewaySecurityPolicies.patch()`

Updates the parameters of a single GatewaySecurityPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gatewaySecurityPolicies.delete()`

Deletes a single GatewaySecurityPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the GatewaySecurityPolicy to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. |

### `projects.locations.gatewaySecurityPolicies.rules`

#### `projects.locations.gatewaySecurityPolicies.rules.list()`

Lists GatewaySecurityPolicyRules in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`. |
| `params.pageSize` | `integer` | No | Maximum number of GatewaySecurityPolicyRules to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data. |

#### `projects.locations.gatewaySecurityPolicies.rules.get()`

Gets details of a single GatewaySecurityPolicyRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GatewaySecurityPolicyRule to retrieve. Format: projects/{project}/location/{location}/gatewaySecurityPolicies/*/rules/* |

#### `projects.locations.gatewaySecurityPolicies.rules.create()`

Creates a new GatewaySecurityPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/* |
| `params.gatewaySecurityPolicyRuleId` | `string` | No | The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gatewaySecurityPolicies.rules.patch()`

Updates the parameters of a single GatewaySecurityPolicyRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gatewaySecurityPolicies.rules.delete()`

Deletes a single GatewaySecurityPolicyRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the GatewaySecurityPolicyRule to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}/rules/*`. |

### `projects.locations.urlLists`

#### `projects.locations.urlLists.list()`

Lists UrlLists in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of UrlLists to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data. |

#### `projects.locations.urlLists.get()`

Gets details of a single UrlList.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the UrlList to get. Must be in the format `projects/*/locations/{location}/urlLists/*`. |

#### `projects.locations.urlLists.create()`

Creates a new UrlList in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the UrlList. Must be in the format `projects/*/locations/{location}`. |
| `params.urlListId` | `string` | No | Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.urlLists.patch()`

Updates the parameters of a single UrlList.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.urlLists.delete()`

Deletes a single UrlList.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the UrlList to delete. Must be in the format `projects/*/locations/{location}/urlLists/*`. |

### `projects.locations.tlsInspectionPolicies`

#### `projects.locations.tlsInspectionPolicies.list()`

Lists TlsInspectionPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of TlsInspectionPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data. |

#### `projects.locations.tlsInspectionPolicies.get()`

Gets details of a single TlsInspectionPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TlsInspectionPolicy to get. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. |

#### `projects.locations.tlsInspectionPolicies.create()`

Creates a new TlsInspectionPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`. |
| `params.tlsInspectionPolicyId` | `string` | No | Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tlsInspectionPolicies.patch()`

Updates the parameters of a single TlsInspectionPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the TlsInspectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tlsInspectionPolicies.delete()`

Deletes a single TlsInspectionPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TlsInspectionPolicy to delete. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. |
| `params.force` | `boolean` | No | If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.) |

### `projects.locations.authzPolicies`

#### `projects.locations.authzPolicies.list()`

Lists AuthzPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `AuthzPolicy` resources are listed, specified in the following format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results that the server returns. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `projects.locations.authzPolicies.get()`

Gets details of a single AuthzPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `AuthzPolicy` resource to get. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. |

#### `projects.locations.authzPolicies.create()`

Creates a new AuthzPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `AuthzPolicy` resource. Must be in the format `projects/{project}/locations/{location}`. |
| `params.authzPolicyId` | `string` | No | Required. User-provided ID of the `AuthzPolicy` resource to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authzPolicies.patch()`

Updates the parameters of a single AuthzPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. |
| `params.updateMask` | `string` | No | Required. Used to specify the fields to be overwritten in the `AuthzPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authzPolicies.delete()`

Deletes a single AuthzPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `AuthzPolicy` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.authzPolicies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authzPolicies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.authzPolicies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.addressGroups`

#### `organizations.locations.addressGroups.list()`

Lists address groups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of AddressGroups to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. |

#### `organizations.locations.addressGroups.get()`

Gets details of a single address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AddressGroup to get. Must be in the format `projects/*/locations/{location}/addressGroups/*`. |

#### `organizations.locations.addressGroups.create()`

Creates a new address group in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AddressGroup. Must be in the format `projects/*/locations/{location}`. |
| `params.addressGroupId` | `string` | No | Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.addressGroups.patch()`

Updates parameters of an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AddressGroup resource. It matches pattern `projects/*/locations/{location}/addressGroups/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.addressGroups.addItems()`

Adds items to an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.addressGroups.removeItems()`

Removes items from an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.addressGroups.cloneItems()`

Clones items from one address group to another.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.addressGroups.delete()`

Deletes an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the AddressGroup to delete. Must be in the format `projects/*/locations/{location}/addressGroups/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `organizations.locations.addressGroups.listReferences()`

Lists references of an address group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.addressGroup` | `string` | Yes | Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*/locations/{location}/addressGroups/*`. |
| `params.pageSize` | `integer` | No | The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

### `organizations.locations.firewallEndpoints`

#### `organizations.locations.firewallEndpoints.list()`

Lists FirewallEndpoints in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListEndpointsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `organizations.locations.firewallEndpoints.get()`

Gets details of a single Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `organizations.locations.firewallEndpoints.create()`

Creates a new FirewallEndpoint in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.firewallEndpointId` | `string` | No | Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.firewallEndpoints.delete()`

Deletes a single Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `organizations.locations.firewallEndpoints.patch()`

Update a single Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. Name of resource. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.securityProfileGroups`

#### `organizations.locations.securityProfileGroups.list()`

Lists SecurityProfileGroups in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of SecurityProfileGroups to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data. |

#### `organizations.locations.securityProfileGroups.get()`

Gets details of a single SecurityProfileGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/*/locations/{location}/securityProfileGroups/{security_profile_group}`. |

#### `organizations.locations.securityProfileGroups.create()`

Creates a new SecurityProfileGroup in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/*/locations/{location}`. |
| `params.securityProfileGroupId` | `string` | No | Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.securityProfileGroups.patch()`

Updates the parameters of a single SecurityProfileGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/*/locations/{location}/securityProfileGroups/{security_profile_group}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.securityProfileGroups.delete()`

Deletes a single SecurityProfileGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/*/locations/{location}/securityProfileGroups/{security_profile_group}`. |
| `params.etag` | `string` | No | Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. |

### `organizations.locations.securityProfiles`

#### `organizations.locations.securityProfiles.list()`

Lists SecurityProfiles in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/*/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of SecurityProfiles to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data. |

#### `organizations.locations.securityProfiles.get()`

Gets details of a single SecurityProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/*/locations/{location}/securityProfiles/{security_profile_id}`. |

#### `organizations.locations.securityProfiles.create()`

Creates a new SecurityProfile in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/*/locations/{location}`. |
| `params.securityProfileId` | `string` | No | Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.securityProfiles.patch()`

Updates the parameters of a single SecurityProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/*/locations/{location}/securityProfiles/{security_profile}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.securityProfiles.delete()`

Deletes a single SecurityProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/*/locations/{location}/securityProfiles/{security_profile_id}`. |
| `params.etag` | `string` | No | Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. |