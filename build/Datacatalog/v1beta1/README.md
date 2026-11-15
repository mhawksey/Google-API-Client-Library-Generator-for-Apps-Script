# Google Cloud Data Catalog API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Data Catalog API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:59:00 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:59:00 GMT
- **Created:** Sun, 20 Jul 2025 16:24:36 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.taxonomies`

#### `projects.locations.taxonomies.list()`

Lists all taxonomies in a project in a particular location that the caller has permission to view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex. |
| `params.parent` | `string` | Yes | Required. Resource name of the project to list the taxonomies of. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50. |

#### `projects.locations.taxonomies.import()`

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of project that the imported taxonomies will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.create()`

Creates a taxonomy in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the taxonomy will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.getIamPolicy()`

Gets the IAM policy for a taxonomy or a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.setIamPolicy()`

Sets the IAM policy for a taxonomy or a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.delete()`

Deletes a taxonomy. This operation will also delete all policy tags in this taxonomy along with their associated policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to be deleted. All policy tags in this taxonomy will also be deleted. |

#### `projects.locations.taxonomies.patch()`

Updates a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.name` | `string` | Yes | Identifier. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.get()`

Gets a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the requested taxonomy. |

#### `projects.locations.taxonomies.export()`

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that taxonomies to be exported will share. |
| `params.serializedTaxonomies` | `boolean` | No | Export taxonomies as serialized taxonomies. |
| `params.taxonomies` | `string` | No | Required. Resource names of the taxonomies to be exported. |

#### `projects.locations.taxonomies.testIamPermissions()`

Returns the permissions that a caller has on the specified taxonomy or policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.taxonomies.policyTags`

#### `projects.locations.taxonomies.policyTags.get()`

Gets a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the requested policy tag. |

#### `projects.locations.taxonomies.policyTags.getIamPolicy()`

Gets the IAM policy for a taxonomy or a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.create()`

Creates a policy tag in the specified taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy that the policy tag will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.setIamPolicy()`

Sets the IAM policy for a taxonomy or a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.list()`

Lists all policy tags in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy to list the policy tags of. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string. |

#### `projects.locations.taxonomies.policyTags.patch()`

Updates a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.name` | `string` | Yes | Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.testIamPermissions()`

Returns the permissions that a caller has on the specified taxonomy or policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.delete()`

Deletes a policy tag. Also deletes all of its descendant policy tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted. |

### `catalog`

#### `catalog.search()`

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |