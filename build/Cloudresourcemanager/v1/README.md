# Cloud Resource Manager API - Apps Script Client Library

Auto-generated client library for using the **Cloud Resource Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:25:22 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:02:56 GMT
- **Created:** Sun, 20 Jul 2025 16:22:23 GMT



---

## API Reference

### `liens`

#### `liens.list()`

List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The name of the resource to list all attached Liens. For example, `projects/1234`. (google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous List request, if any. |

#### `liens.get()`

Retrieve a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name/identifier of the Lien. |

#### `liens.create()`

Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `liens.delete()`

Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name/identifier of the Lien to delete. |

### `projects`

#### `projects.listAvailableOrgPolicyConstraints()`

Lists `Constraints` that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list `Constraints` for. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.listOrgPolicies()`

Lists all the `Policies` set for a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list Policies for. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getOrgPolicy()`

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource the `Policy` is set on. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getEffectiveOrgPolicy()`

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | The name of the resource to start computing the effective `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.setOrgPolicy()`

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Resource name of the resource to attach the `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.clearOrgPolicy()`

Clears a `Policy` from a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource for the `Policy` to clear. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.get()`

Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The Project ID (for example, `my-project-123`). |

#### `projects.list()`

Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter rules are case insensitive. If multiple fields are included in a filter query, the query will return results that match any of the fields. Some eligible fields for filtering are: + `name` + `id` + `labels.` (where *key* is the name of a label) + `parent.type` + `parent.id` + `lifecycleState` Some examples of filter queries: | Query | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | | lifecycleState:DELETE_REQUESTED | Only show projects that are pending deletion.| If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission. NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results. |

#### `projects.create()`

Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `projects.update()`

Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project ID (for example, `my-project-123`). Required. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.delete()`

Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The Project ID (for example, `foo-bar-123`). Required. |

#### `projects.undelete()`

Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The project ID (for example, `foo-bar-123`). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getAncestry()`

Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The Project ID (for example, `my-project-123`). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getIamPolicy()`

Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.setIamPolicy()`

Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the Google Cloud console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.testIamPermissions()`

Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `folders`

#### `folders.listAvailableOrgPolicyConstraints()`

Lists `Constraints` that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list `Constraints` for. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.listOrgPolicies()`

Lists all the `Policies` set for a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list Policies for. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.getOrgPolicy()`

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource the `Policy` is set on. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.getEffectiveOrgPolicy()`

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | The name of the resource to start computing the effective `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.setOrgPolicy()`

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Resource name of the resource to attach the `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.clearOrgPolicy()`

Clears a `Policy` from a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource for the `Policy` to clear. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations`

#### `organizations.listAvailableOrgPolicyConstraints()`

Lists `Constraints` that could be applied on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list `Constraints` for. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.listOrgPolicies()`

Lists all the `Policies` set for a particular resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource to list Policies for. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.getOrgPolicy()`

Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource the `Policy` is set on. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.getEffectiveOrgPolicy()`

Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | The name of the resource to start computing the effective `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.setOrgPolicy()`

Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Resource name of the resource to attach the `Policy`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.clearOrgPolicy()`

Clears a `Policy` from a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name of the resource for the `Policy` to clear. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.search()`

Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.get()`

Fetches an Organization resource identified by the specified resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234". |

#### `organizations.setIamPolicy()`

Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.getIamPolicy()`

Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.testIamPermissions()`

Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |