# Google Cloud Data Catalog API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Data Catalog API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:32:41 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:15:35 GMT
- **Created:** Sun, 20 Jul 2025 16:24:36 GMT



---

## API Reference

### `catalog`

#### `catalog.search()`

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `projects`

### `projects.locations`

### `projects.locations.entryGroups`

#### `projects.locations.entryGroups.create()`

A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name. |
| `params.entryGroupId` | `string` | No | Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.patch()`

Updates an EntryGroup. The user should enable the Data Catalog API in the project identified by the `entry_group.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.get()`

Gets an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`. |
| `params.readMask` | `string` | No | The fields to return. If not set or empty, all fields are returned. |

#### `projects.locations.entryGroups.delete()`

Deletes an EntryGroup. Only entry groups that do not contain entries can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`. |
| `params.force` | `boolean` | No | Optional. If true, deletes all entries in the entry group. |

#### `projects.locations.entryGroups.list()`

Lists entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`. |
| `params.pageToken` | `string` | No | Optional. Token that specifies which page is requested. If empty, the first page is returned. |

#### `projects.locations.entryGroups.setIamPolicy()`

Sets the access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entries.setIamPolicy` to set policies on entries. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.getIamPolicy()`

Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.testIamPermissions()`

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.entries`

#### `projects.locations.entryGroups.entries.create()`

Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name. |
| `params.entryId` | `string` | No | Required. The id of the entry to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.patch()`

Updates an existing entry. Users should enable the Data Catalog API in the project identified by the `entry.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. The following fields are modifiable: * For entries with type `DATA_STREAM`: * `schema` * For entries with type `FILESET`: * `schema` * `display_name` * `description` * `gcs_fileset_spec` * `gcs_fileset_spec.file_patterns` * For entries with `user_specified_type`: * `schema` * `display_name` * `description` * `user_specified_type` * `user_specified_system` * `linked_resource` * `source_system_timestamps` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.delete()`

Deletes an existing entry. Only entries created through CreateEntry method can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} |

#### `projects.locations.entryGroups.entries.get()`

Gets an entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} |

#### `projects.locations.entryGroups.entries.list()`

Lists entries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`. |
| `params.pageToken` | `string` | No | Token that specifies which page is requested. If empty, the first page is returned. |
| `params.readMask` | `string` | No | The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field. |

#### `projects.locations.entryGroups.entries.getIamPolicy()`

Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.testIamPermissions()`

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.entries.tags`

#### `projects.locations.entryGroups.entries.tags.create()`

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.tags.patch()`

Updates an existing tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name. |
| `params.updateMask` | `string` | No | Note: Currently, this parameter can only take `"fields"` as value. Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.tags.delete()`

Deletes a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag to delete. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} |

#### `projects.locations.entryGroups.entries.tags.list()`

Lists tags assigned to an Entry. The columns in the response are lowercased.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} |
| `params.pageSize` | `integer` | No | The maximum number of tags to return. Default is 10. Max limit is 1000. |
| `params.pageToken` | `string` | No | Token that specifies which page is requested. If empty, the first page is returned. |

### `projects.locations.entryGroups.tags`

#### `projects.locations.entryGroups.tags.create()`

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.tags.patch()`

Updates an existing tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name. |
| `params.updateMask` | `string` | No | Note: Currently, this parameter can only take `"fields"` as value. Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.tags.delete()`

Deletes a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag to delete. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} |

#### `projects.locations.entryGroups.tags.list()`

Lists tags assigned to an Entry. The columns in the response are lowercased.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} |
| `params.pageSize` | `integer` | No | The maximum number of tags to return. Default is 10. Max limit is 1000. |
| `params.pageToken` | `string` | No | Token that specifies which page is requested. If empty, the first page is returned. |

### `projects.locations.tagTemplates`

#### `projects.locations.tagTemplates.create()`

Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1 |
| `params.tagTemplateId` | `string` | No | Required. The id of the tag template to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.get()`

Gets a tag template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} |

#### `projects.locations.tagTemplates.patch()`

Updates a tag template. This method cannot be used to update the fields of a template. The tag template fields are represented as separate resources and should be updated using their own create/update/delete methods. Users should enable the Data Catalog API in the project identified by the `tag_template.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on a tag template. Currently, only `display_name` can be overwritten. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.delete()`

Deletes a tag template and all tags using the template. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template to delete. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} |
| `params.force` | `boolean` | No | Required. Currently, this field must always be set to `true`. This confirms the deletion of any possible tags using this template. `force = false` will be supported in the future. |

#### `projects.locations.tagTemplates.setIamPolicy()`

Sets the access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entries.setIamPolicy` to set policies on entries. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.getIamPolicy()`

Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.testIamPermissions()`

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.tagTemplates.fields`

#### `projects.locations.tagTemplates.fields.create()`

Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id} |
| `params.tagTemplateFieldId` | `string` | No | Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.patch()`

Updates a field in a tag template. This method cannot be used to update the field type. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template field. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id} |
| `params.updateMask` | `string` | No | Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: * `display_name` * `type.enum_type` * `is_required` If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is *not* allowed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.rename()`

Renames a field in a tag template. The user should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.delete()`

Deletes a field in a tag template and all uses of that field. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template field to delete. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id} |
| `params.force` | `boolean` | No | Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future. |

### `projects.locations.tagTemplates.fields.enumValues`

#### `projects.locations.tagTemplates.fields.enumValues.rename()`

Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.taxonomies`

#### `projects.locations.taxonomies.create()`

Creates a taxonomy in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the taxonomy will belong to. |
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
| `params.name` | `string` | Yes | Identifier. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}". |
| `params.updateMask` | `string` | No | The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.list()`

Lists all taxonomies in a project in a particular location that the caller has permission to view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project to list the taxonomies of. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string. |
| `params.filter` | `string` | No | Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex. |

#### `projects.locations.taxonomies.get()`

Gets a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the requested taxonomy. |

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

#### `projects.locations.taxonomies.testIamPermissions()`

Returns the permissions that a caller has on the specified taxonomy or policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.import()`

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of project that the imported taxonomies will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.export()`

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that taxonomies to be exported will share. |
| `params.taxonomies` | `string` | No | Required. Resource names of the taxonomies to be exported. |
| `params.serializedTaxonomies` | `boolean` | No | Export taxonomies as serialized taxonomies. |

### `projects.locations.taxonomies.policyTags`

#### `projects.locations.taxonomies.policyTags.create()`

Creates a policy tag in the specified taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy that the policy tag will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.delete()`

Deletes a policy tag. Also deletes all of its descendant policy tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted. |

#### `projects.locations.taxonomies.policyTags.patch()`

Updates a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}". |
| `params.updateMask` | `string` | No | The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.list()`

Lists all policy tags in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy to list the policy tags of. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string. |

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

#### `projects.locations.taxonomies.policyTags.setIamPolicy()`

Sets the IAM policy for a taxonomy or a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.testIamPermissions()`

Returns the permissions that a caller has on the specified taxonomy or policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `entries`

#### `entries.lookup()`

Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.linkedResource` | `string` | No | The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId |
| `params.sqlResource` | `string` | No | The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s should satisfy the GoogleSQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical. |