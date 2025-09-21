# Organization Policy API - Apps Script Client Library

Auto-generated client library for using the **Organization Policy API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:45:45 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:34:54 GMT
- **Created:** Sun, 20 Jul 2025 16:44:33 GMT



---

## API Reference

### `projects`

### `projects.constraints`

#### `projects.constraints.list()`

Lists constraints that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

### `projects.policies`

#### `projects.policies.list()`

Retrieves all of the policies that exist on a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

#### `projects.policies.get()`

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy. See Policy for naming requirements. |

#### `projects.policies.getEffectivePolicy()`

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The effective policy to compute. See Policy for naming requirements. |

#### `projects.policies.create()`

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.policies.patch()`

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. |
| `params.updateMask` | `string` | No | Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.policies.delete()`

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the policy to delete. See the policy entry for naming rules. |
| `params.etag` | `string` | No | Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned. |

### `folders`

### `folders.constraints`

#### `folders.constraints.list()`

Lists constraints that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

### `folders.policies`

#### `folders.policies.list()`

Retrieves all of the policies that exist on a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

#### `folders.policies.get()`

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy. See Policy for naming requirements. |

#### `folders.policies.getEffectivePolicy()`

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The effective policy to compute. See Policy for naming requirements. |

#### `folders.policies.create()`

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.policies.patch()`

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. |
| `params.updateMask` | `string` | No | Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.policies.delete()`

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the policy to delete. See the policy entry for naming rules. |
| `params.etag` | `string` | No | Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned. |

### `organizations`

### `organizations.constraints`

#### `organizations.constraints.list()`

Lists constraints that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

### `organizations.policies`

#### `organizations.policies.list()`

Retrieves all of the policies that exist on a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

#### `organizations.policies.get()`

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy. See Policy for naming requirements. |

#### `organizations.policies.getEffectivePolicy()`

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The effective policy to compute. See Policy for naming requirements. |

#### `organizations.policies.create()`

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.policies.patch()`

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. |
| `params.updateMask` | `string` | No | Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.policies.delete()`

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the policy to delete. See the policy entry for naming rules. |
| `params.etag` | `string` | No | Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned. |

### `organizations.customConstraints`

#### `organizations.customConstraints.create()`

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Must be in the following form: * `organizations/{organization_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.customConstraints.patch()`

Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.customConstraints.get()`

Gets a custom or managed constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom or managed constraint does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the custom or managed constraint. See the custom constraint entry for naming requirements. |

#### `organizations.customConstraints.list()`

Retrieves all of the custom constraints that exist on a particular organization resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id}` |
| `params.pageSize` | `integer` | No | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. |
| `params.pageToken` | `string` | No | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. |

#### `organizations.customConstraints.delete()`

Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the custom constraint to delete. See the custom constraint entry for naming rules. |