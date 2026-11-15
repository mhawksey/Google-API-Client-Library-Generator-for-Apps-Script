# Agent Identity API - Apps Script Client Library

Auto-generated client library for using the **Agent Identity API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:25:49 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:25:49 GMT
- **Created:** Sun, 15 Nov 2026 15:25:49 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |

### `projects.locations.accessSummaries`

#### `projects.locations.accessSummaries.list()`

Lists access summaries in a given project and location. Supported filters: - `workload_id`: Filter by the SPIFFE ID of the agent. Example: `workload_id="spiffe://example.com/ns/default/sa/my-agent"`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum page size is 1000. |
| `params.filter` | `string` | No | Optional. Filter string to restrict the results. Currently supports filtering by `workload_id` or `auth_provider_name`. If no filter is provided, returns all access summaries for the requested project and location. Format: `workload_id=""` or `auth_provider_name=""` |
| `params.orderBy` | `string` | No | Optional. This field is currently ignored. Defaults to ordering by (auth_provider_id, user_id) in ascending order. |
| `params.parent` | `string` | Yes | Required. The parent resource where the search is performed. Format: projects/{project}/locations/{location} |

#### `projects.locations.accessSummaries.get()`

Gets details of a single access summary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the access summary. |

### `projects.locations.authProviders`

#### `projects.locations.authProviders.resolveAuthorization()`

Resolves an authorization for a user on an auth provider, creating one if it does not exist or returning an existing one.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the auth provider to resolve authorization for. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.query()`

Queries which auth providers are used by a given workload ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workloadId` | `string` | No | Required. The workload identifier to filter by. |
| `params.pageToken` | `string` | No | Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, the first page is returned. A page token, received from a previous QueryAuthProviders call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to QueryAuthProviders must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent resource where the search is performed. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum page size is 1000. |

#### `projects.locations.authProviders.delete()`

Deletes a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.authProviders.revokeAuthorization()`

Revokes all authorizations for a specific user on an auth provider. This deletes all authorization records associated with the user and auth provider, effectively revoking access across all agents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.undelete()`

Undeletes a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.disable()`

Disables a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.queryWorkloads()`

Queries which workloads are using a given auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the auth provider to query. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum page size is 1000. |
| `params.pageToken` | `string` | No | Optional. A token, which can be sent as `page_token` to retrieve the next page. When paginating, all other parameters provided to `QueryWorkloads` must match the call that provided the page token. If this field is omitted, the first page is returned. |

#### `projects.locations.authProviders.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.authProviders.patch()`

Updates the parameters of a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The full resource name of the auth provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the auth provider resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.create()`

Creates a new auth provider in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.authProviderId` | `string` | No | Required. The ID to use for the auth provider, which will become the final segment of the auth provider's resource name. This value should be 1-63 characters, and valid characters are /a-z-/. The first character must be a lowercase letter, and the last character must be a lowercase letter or a number. |
| `params.parent` | `string` | Yes | Required. The parent resource where the auth provider is created. Format: projects/{project}/locations/{location} |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.list()`

Lists auth providers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum page size is 1000. |
| `params.pageToken` | `string` | No | Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, the first page is returned. |
| `params.parent` | `string` | Yes | Required. The parent resource where the search is performed. Format: projects/{project}/locations/{location} |
| `params.showDeleted` | `boolean` | No | Optional. Deleted auth providers will be kept with a soft-delete for 30 days before being purged. If this field is set to `true`, deleted auth providers will also be returned. |
| `params.filter` | `string` | No | Optional. Filter results. This field is currently ignored. |
| `params.orderBy` | `string` | No | Optional. Currently ignored. Defaults to ordering by auth_provider_id in ascending order. |

#### `projects.locations.authProviders.get()`

Gets details of a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. |

#### `projects.locations.authProviders.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.enable()`

Enables a single auth provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the auth provider. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.authProviders.authorizations`

#### `projects.locations.authProviders.authorizations.delete()`

Deletes a single authorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the authorization to delete. Format: projects/{project}/locations/{location}/authProviders/{auth_provider}/authorizations/{authorization} |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.authProviders.authorizations.list()`

Lists authorizations in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. This field is currently ignored. Defaults to ordering by authorization_id in ascending order. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAuthorizations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAuthorizations` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter string to restrict the results. Currently supports filtering by `client_user_id` only. Format: `client_user_id=""` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum page size is 1000. |
| `params.parent` | `string` | Yes | Required. The parent resource where the search is performed. Format: projects/{project}/locations/{location}/authProviders/{auth_provider} |

#### `projects.locations.authProviders.authorizations.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.authorizations.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.authorizations.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

#### `projects.locations.authProviders.authorizations.get()`

Gets details of a single authorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the authorization. |