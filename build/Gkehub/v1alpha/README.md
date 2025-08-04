# GKE Hub API - Apps Script Client Library

Auto-generated client library for using the **GKE Hub API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:22:20 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:22:20 GMT
- **Created:** Sun, 20 Jul 2025 16:34:18 GMT



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

### `projects.locations.memberships`

#### `projects.locations.memberships.list()`

Lists Memberships in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/*/locations/*`. `projects/*/locations/-` list memberships in all the regions. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING |
| `params.orderBy` | `string` | No | Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |

#### `projects.locations.memberships.listAdmin()`

Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Memberships of admin cluster will be listed. Specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListAdminClusterMemberships` which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Optional. Lists Memberships of admin clusters that match the filter expression. |
| `params.orderBy` | `string` | No | Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |

#### `projects.locations.memberships.get()`

Gets the details of a Membership.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Membership resource name in the format `projects/*/locations/*/memberships/*`. |

#### `projects.locations.memberships.create()`

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*/locations/*`. |
| `params.membershipId` | `string` | No | Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.delete()`

Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Membership resource name in the format `projects/*/locations/*/memberships/*`. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource. |

#### `projects.locations.memberships.patch()`

Updates an existing Membership.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Membership resource name in the format `projects/*/locations/*/memberships/*`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.generateConnectManifest()`

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Membership resource name the Agent will associate with, in the format `projects/*/locations/*/memberships/*`. |
| `params.namespace` | `string` | No | Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding. |
| `params.proxy` | `string` | No | Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy. |
| `params.version` | `string` | No | Optional. The Connect agent version to use. Defaults to the most current version. |
| `params.isUpgrade` | `boolean` | No | Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded. |
| `params.registry` | `string` | No | Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect. |
| `params.imagePullSecretContent` | `string` | No | Optional. The image pull secret content for the registry, if not public. |

#### `projects.locations.memberships.validateCreate()`

ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.validateExclusivity()`

ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*/locations/*`. |
| `params.crManifest` | `string` | No | Optional. The YAML of the membership CR in the cluster. Empty if the membership CR does not exist. |
| `params.intendedMembership` | `string` | No | Required. The intended membership name under the `parent`. This method only does validation in anticipation of a CreateMembership call with the same name. |

#### `projects.locations.memberships.generateExclusivityManifest()`

GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Membership resource name in the format `projects/*/locations/*/memberships/*`. |
| `params.crdManifest` | `string` | No | Optional. The YAML manifest of the membership CRD retrieved by `kubectl get customresourcedefinitions membership`. Leave empty if the resource does not exist. |
| `params.crManifest` | `string` | No | Optional. The YAML manifest of the membership CR retrieved by `kubectl get memberships membership`. Leave empty if the resource does not exist. |

#### `projects.locations.memberships.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.memberships.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.memberships.bindings`

#### `projects.locations.memberships.bindings.get()`

Returns the details of a MembershipBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The MembershipBinding resource name in the format `projects/*/locations/*/memberships/*/bindings/*`. |

#### `projects.locations.memberships.bindings.create()`

Creates a MembershipBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the MembershipBinding will be created. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.membershipBindingId` | `string` | No | Required. The ID to use for the MembershipBinding. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.bindings.patch()`

Updates a MembershipBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}` |
| `params.updateMask` | `string` | No | Required. The fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.bindings.delete()`

Deletes a MembershipBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The MembershipBinding resource name in the format `projects/*/locations/*/memberships/*/bindings/*`. |

#### `projects.locations.memberships.bindings.list()`

Lists MembershipBindings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Membership for which the MembershipBindings will be listed. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListMembershipBindings` which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Optional. Lists MembershipBindings that match the filter expression, following the syntax outlined in https://google.aip.dev/160. |

### `projects.locations.memberships.rbacrolebindings`

#### `projects.locations.memberships.rbacrolebindings.get()`

Returns the details of a Membership RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The RBACRoleBinding resource name in the format `projects/*/locations/*/memberships/*/rbacrolebindings/*`. |

#### `projects.locations.memberships.rbacrolebindings.create()`

Creates a Membership RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.rbacrolebindingId` | `string` | No | Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.rbacrolebindings.patch()`

Updates a Membership RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` |
| `params.updateMask` | `string` | No | Required. The fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.memberships.rbacrolebindings.delete()`

Deletes a Membership RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The RBACRoleBinding resource name in the format `projects/*/locations/*/memberships/*/rbacrolebindings/*`. |

#### `projects.locations.memberships.rbacrolebindings.list()`

Lists all Membership RBACRoleBindings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListMembershipRBACRoleBindings` which specifies the position in the list from where to continue listing the resources. |

#### `projects.locations.memberships.rbacrolebindings.generateMembershipRBACRoleBindingYAML()`

Generates a YAML of the RBAC policies for the specified RoleBinding and its associated impersonation resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.rbacrolebindingId` | `string` | No | Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.scopes`

#### `projects.locations.scopes.listMemberships()`

Lists Memberships bound to a Scope. The response includes relevant Memberships from all regions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scopeName` | `string` | Yes | Required. Name of the Scope, in the format `projects/*/locations/global/scopes/*`, to which the Memberships are bound. |
| `params.filter` | `string` | No | Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Currently, filtering can be done only based on Memberships's `name`, `labels`, `create_time`, `update_time`, and `unique_id`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. Pagination is currently not supported; therefore, setting this field does not have any impact for now. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListBoundMemberships` which specifies the position in the list from where to continue listing the resources. |

#### `projects.locations.scopes.get()`

Returns the details of a Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Scope resource name in the format `projects/*/locations/*/scopes/*`. |

#### `projects.locations.scopes.create()`

Creates a Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Scope will be created. Specified in the format `projects/*/locations/*`. |
| `params.scopeId` | `string` | No | Required. Client chosen ID for the Scope. `scope_id` must be a ???? |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.patch()`

Updates a scopes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}` |
| `params.updateMask` | `string` | No | Required. The fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.delete()`

Deletes a Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Scope resource name in the format `projects/*/locations/*/scopes/*`. |

#### `projects.locations.scopes.list()`

Lists Scopes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListScopes` which specifies the position in the list from where to continue listing the resources. |

#### `projects.locations.scopes.listPermitted()`

Lists permitted Scopes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListPermittedScopes` which specifies the position in the list from where to continue listing the resources. |

#### `projects.locations.scopes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.scopes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.scopes.namespaces`

#### `projects.locations.scopes.namespaces.get()`

Returns the details of a fleet namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Namespace resource name in the format `projects/*/locations/*/scopes/*/namespaces/*`. |

#### `projects.locations.scopes.namespaces.create()`

Creates a fleet namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/*/locations/*/scopes/*`. |
| `params.scopeNamespaceId` | `string` | No | Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.namespaces.patch()`

Updates a fleet namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}` |
| `params.updateMask` | `string` | No | Required. The fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.namespaces.delete()`

Deletes a fleet namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Namespace resource name in the format `projects/*/locations/*/scopes/*/namespaces/*`. |

#### `projects.locations.scopes.namespaces.list()`

Lists fleet namespaces.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*/locations/*/scopes/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. |

### `projects.locations.scopes.rbacrolebindings`

#### `projects.locations.scopes.rbacrolebindings.get()`

Returns the details of a Scope RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The RBACRoleBinding resource name in the format `projects/*/locations/*/scopes/*/rbacrolebindings/*`. |

#### `projects.locations.scopes.rbacrolebindings.create()`

Creates a Scope RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*/locations/*/scopes/*`. |
| `params.rbacrolebindingId` | `string` | No | Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.rbacrolebindings.patch()`

Updates a Scope RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` |
| `params.updateMask` | `string` | No | Required. The fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.scopes.rbacrolebindings.delete()`

Deletes a Scope RBACRoleBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The RBACRoleBinding resource name in the format `projects/*/locations/*/scopes/*/rbacrolebindings/*`. |

#### `projects.locations.scopes.rbacrolebindings.list()`

Lists all Scope RBACRoleBindings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*/locations/*/scopes/*`. |
| `params.pageSize` | `integer` | No | Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Optional. Token returned by previous call to `ListScopeRBACRoleBindings` which specifies the position in the list from where to continue listing the resources. |

### `projects.locations.features`

#### `projects.locations.features.list()`

Lists Features in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Lists Features that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "servicemesh" in project "foo-proj": name = "projects/foo-proj/locations/global/features/servicemesh" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar |
| `params.orderBy` | `string` | No | One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable. |

#### `projects.locations.features.get()`

Gets details of a single Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Feature resource name in the format `projects/*/locations/*/features/*` |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable. |

#### `projects.locations.features.create()`

Adds a new Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Feature will be created. Specified in the format `projects/*/locations/*`. |
| `params.featureId` | `string` | No | The ID of the feature to create. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.features.delete()`

Removes a Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Feature resource name in the format `projects/*/locations/*/features/*`. |
| `params.force` | `boolean` | No | If set to true, the delete will ignore any outstanding resources for this Feature (that is, `FeatureState.has_resources` is set to true). These resources will NOT be cleaned up or modified in any way. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.features.patch()`

Updates an existing Feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Feature resource name in the format `projects/*/locations/*/features/*`. |
| `params.updateMask` | `string` | No | Mask of fields to update. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.features.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.features.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.features.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.fleets`

#### `projects.locations.fleets.create()`

Creates a fleet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) where the Fleet will be created. Specified in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.fleets.get()`

Returns the details of a fleet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Fleet resource name in the format `projects/*/locations/*/fleets/*`. |

#### `projects.locations.fleets.patch()`

Updates a fleet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default". |
| `params.updateMask` | `string` | No | Required. The fields to be updated; |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.fleets.delete()`

Removes a Fleet. There must be no memberships remaining in the Fleet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Fleet resource name in the format `projects/*/locations/*/fleets/*`. |

#### `projects.locations.fleets.list()`

Returns all fleets within an organization or a project that the caller has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The organization or project to list for Fleets under, in the format `organizations/*/locations/*` or `projects/*/locations/*`. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `organizations`

### `organizations.locations`

### `organizations.locations.fleets`

#### `organizations.locations.fleets.list()`

Returns all fleets within an organization or a project that the caller has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The organization or project to list for Fleets under, in the format `organizations/*/locations/*` or `projects/*/locations/*`. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |