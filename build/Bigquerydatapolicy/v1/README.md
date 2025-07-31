# BigQuery Data Policy API - Apps Script Client Library

Auto-generated client library for using the **BigQuery Data Policy API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:23:14 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:15 GMT
- **Created:** Sun, 20 Jul 2025 16:14:12 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.dataPolicies`

#### `projects.locations.dataPolicies.create()`

Creates a new data policy under a project with the given `dataPolicyId` (used as the display name), policy tag, and data policy type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the data policy will belong to. The format is `projects/{project_number}/locations/{location_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataPolicies.patch()`

Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. Updates to the `name` and `dataPolicyId` fields are not allowed. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the data policy is not found, a new data policy will be created. In this situation, update_mask is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataPolicies.rename()`

Renames the id (display name) of the specified data policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the data policy to rename. The format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataPolicies.delete()`

Deletes the data policy specified by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the data policy to delete. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. |
| `params.force` | `boolean` | No | Optional. If true, the data policy will be deleted even when it is referenced by one or more table columns. |

#### `projects.locations.dataPolicies.get()`

Gets the data policy specified by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the requested data policy. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`. |

#### `projects.locations.dataPolicies.list()`

List all of the data policies in the specified parent project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project for which to list data policies. Format is `projects/{project_number}/locations/{location_id}`. |
| `params.pageSize` | `integer` | No | The maximum number of data policies to return. Must be a value between 1 and 1000. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The `nextPageToken` value returned from a previous list request, if any. If not set, defaults to an empty string. |
| `params.filter` | `string` | No | Filters the data policies by policy tags that they are associated with. Currently filter only supports "policy_tag" based filtering and OR based predicates. Sample filter can be "policy_tag: projects/1/locations/us/taxonomies/2/policyTags/3". You may also use wildcard such as "policy_tag: projects/1/locations/us/taxonomies/2*". Please note that OR predicates cannot be used with wildcard filters. |

#### `projects.locations.dataPolicies.getIamPolicy()`

Gets the IAM policy for the specified data policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataPolicies.setIamPolicy()`

Sets the IAM policy for the specified data policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataPolicies.testIamPermissions()`

Returns the caller's permission on the specified data policy resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |