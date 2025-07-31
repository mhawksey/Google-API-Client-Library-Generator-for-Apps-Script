# Access Context Manager API - Apps Script Client Library

Auto-generated client library for using the **Access Context Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:20:57 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:04 GMT
- **Created:** Sun, 20 Jul 2025 16:10:36 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

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
| `params.resource` | `object` | Yes | The request body. |

### `accessPolicies`

#### `accessPolicies.list()`

Lists all access policies in an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}` |
| `params.pageSize` | `integer` | No | Number of AccessPolicy instances to include in the list. Default 100. |
| `params.pageToken` | `string` | No | Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results. |

#### `accessPolicies.get()`

Returns an access policy based on the name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the access policy to get. Format `accessPolicies/{policy_id}` |

#### `accessPolicies.create()`

Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.patch()`

Updates an access policy. The long-running operation from this RPC has a successful status after the changes to the access policy propagate to long-lasting storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` |
| `params.updateMask` | `string` | No | Required. Mask to control which fields get updated. Must be non-empty. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.delete()`

Deletes an access policy based on the resource name. The long-running operation has a successful status after the access policy is removed from long-lasting storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the access policy to delete. Format `accessPolicies/{policy_id}` |

#### `accessPolicies.setIamPolicy()`

Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.getIamPolicy()`

Gets the IAM policy for the specified Access Context Manager access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.testIamPermissions()`

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `accessPolicies.accessLevels`

#### `accessPolicies.accessLevels.list()`

Lists all access levels for an access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}` |
| `params.pageSize` | `integer` | No | Number of Access Levels to include in the list. Default 100. |
| `params.pageToken` | `string` | No | Next page token for the next batch of Access Level instances. Defaults to the first page of results. |
| `params.accessLevelFormat` | `string` | No | Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined. |

#### `accessPolicies.accessLevels.get()`

Gets an access level based on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Access Level. Format: `accessPolicies/{policy_id}/accessLevels/{access_level_id}` |
| `params.accessLevelFormat` | `string` | No | Whether to return `BasicLevels` in the Cloud Common Expression Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where Access Levels are returned as `BasicLevels` or `CustomLevels` based on how they were created. If set to CEL, all Access Levels are returned as `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent `CustomLevels`. |

#### `accessPolicies.accessLevels.create()`

Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.accessLevels.patch()`

Updates an access level. The long-running operation from this RPC has a successful status after the changes to the access level propagate to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`. |
| `params.updateMask` | `string` | No | Required. Mask to control which fields get updated. Must be non-empty. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.accessLevels.delete()`

Deletes an access level based on the resource name. The long-running operation from this RPC has a successful status after the access level has been removed from long-lasting storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Access Level. Format: `accessPolicies/{policy_id}/accessLevels/{access_level_id}` |

#### `accessPolicies.accessLevels.replaceAll()`

Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy which owns these Access Levels. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.accessLevels.testIamPermissions()`

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `accessPolicies.servicePerimeters`

#### `accessPolicies.servicePerimeters.list()`

Lists all service perimeters for an access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}` |
| `params.pageSize` | `integer` | No | Number of Service Perimeters to include in the list. Default 100. |
| `params.pageToken` | `string` | No | Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results. |

#### `accessPolicies.servicePerimeters.get()`

Gets a service perimeter based on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeters_id}` |

#### `accessPolicies.servicePerimeters.create()`

Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.servicePerimeters.patch()`

Updates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`. |
| `params.updateMask` | `string` | No | Required. Mask to control which fields get updated. Must be non-empty. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.servicePerimeters.delete()`

Deletes a service perimeter based on the resource name. The long-running operation from this RPC has a successful status after the service perimeter is removed from long-lasting storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}` |

#### `accessPolicies.servicePerimeters.replaceAll()`

Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy which owns these Service Perimeters. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.servicePerimeters.commit()`

Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the parent Access Policy which owns all Service Perimeters in scope for the commit operation. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.servicePerimeters.testIamPermissions()`

Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `accessPolicies.authorizedOrgsDescs`

#### `accessPolicies.authorizedOrgsDescs.list()`

Lists all authorized orgs descs for an access policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy to list Authorized Orgs Desc from. Format: `accessPolicies/{policy_id}` |
| `params.pageSize` | `integer` | No | Number of Authorized Orgs Descs to include in the list. Default 100. |
| `params.pageToken` | `string` | No | Next page token for the next batch of Authorized Orgs Desc instances. Defaults to the first page of results. |

#### `accessPolicies.authorizedOrgsDescs.get()`

Gets an authorized orgs desc based on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Authorized Orgs Desc. Format: `accessPolicies/{policy_id}/authorizedOrgsDescs/{authorized_orgs_descs_id}` |

#### `accessPolicies.authorizedOrgsDescs.create()`

Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name for the access policy which owns this Authorized Orgs Desc. Format: `accessPolicies/{policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.authorizedOrgsDescs.patch()`

Updates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. Only the organization list in `AuthorizedOrgsDesc` can be updated. The name, authorization_type, asset_type and authorization_direction cannot be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`. |
| `params.updateMask` | `string` | No | Required. Mask to control which fields get updated. Must be non-empty. |
| `params.resource` | `object` | Yes | The request body. |

#### `accessPolicies.authorizedOrgsDescs.delete()`

Deletes an authorized orgs desc based on the resource name. The long-running operation from this RPC has a successful status after the authorized orgs desc is removed from long-lasting storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the Authorized Orgs Desc. Format: `accessPolicies/{policy_id}/authorizedOrgsDesc/{authorized_orgs_desc_id}` |

### `services`

#### `services.list()`

Lists all VPC-SC supported services.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | This flag specifies the maximum number of services to return per page. Default is 100. |
| `params.pageToken` | `string` | No | Token to start on a later page. Default is the first page. |

#### `services.get()`

Returns a VPC-SC supported service based on the service name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the service to get information about. The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`. |

### `organizations`

### `organizations.gcpUserAccessBindings`

#### `organizations.gcpUserAccessBindings.list()`

Lists all GcpUserAccessBindings for a Google Cloud organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example: "organizations/256" |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return. The server may return fewer items. If left blank, the server may return any number of items. |
| `params.pageToken` | `string` | No | Optional. If left blank, returns the first page. To enumerate all items, use the next_page_token from your previous list operation. |

#### `organizations.gcpUserAccessBindings.get()`

Gets the GcpUserAccessBinding with the given name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N" |

#### `organizations.gcpUserAccessBindings.create()`

Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example: "organizations/256" |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.gcpUserAccessBindings.patch()`

Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N" |
| `params.updateMask` | `string` | No | Required. Only the fields specified in this mask are updated. Because name and group_key cannot be changed, update_mask is required and may only contain the following fields: `access_levels`, `dry_run_access_levels`, `session_settings`, `scoped_access_settings`. update_mask { paths: "access_levels" } |
| `params.append` | `boolean` | No | Optional. This field controls whether or not certain repeated settings in the update request overwrite or append to existing settings on the binding. If true, then append. Otherwise overwrite. So far, only scoped_access_settings with session_settings supports appending. Global access_levels, access_levels in scoped_access_settings, dry_run_access_levels, and session_settings are not compatible with append functionality, and the request will return an error if append=true when these settings are in the update_mask. The request will also return an error if append=true when "scoped_access_settings" is not set in the update_mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.gcpUserAccessBindings.delete()`

Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N" |