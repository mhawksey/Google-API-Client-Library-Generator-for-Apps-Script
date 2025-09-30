# Google Cloud Data Catalog API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Data Catalog API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:32:44 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:15:39 GMT
- **Created:** Sun, 20 Jul 2025 16:24:39 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.setConfig()`

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization or project whose config is being specified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.retrieveEffectiveConfig()`

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource whose effective config is being retrieved. |

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

### `projects.locations.entryGroups`

#### `projects.locations.entryGroups.create()`

Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources:

* BigQuery entries (`@bigquery`)

* Pub/Sub topics (`@pubsub`)

* Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The names of the project and location that the new entry group belongs to. Note: The entry group itself and its child resources might not be stored in the location specified in its name. |
| `params.entryGroupId` | `string` | No | Required. The ID of the entry group to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.get()`

Gets an entry group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry group to get. |
| `params.readMask` | `string` | No | The fields to return. If empty or omitted, all fields are returned. |

#### `projects.locations.entryGroups.patch()`

Updates an entry group. You must enable the Data Catalog API in the project identified by the `entry_group.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.delete()`

Deletes an entry group. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry group to delete. |
| `params.force` | `boolean` | No | Optional. If true, deletes all entries in the entry group. |

#### `projects.locations.entryGroups.list()`

Lists entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location that contains the entry groups to list. Can be provided as a URL. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is greater than 1000. |
| `params.pageToken` | `string` | No | Optional. Pagination token that specifies the next page to return. If empty, returns the first page. |

#### `projects.locations.entryGroups.setIamPolicy()`

Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.getIamPolicy()`

Gets the access control policy for a resource. May return:

* A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it.

* An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.testIamPermissions()`

Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.entries`

#### `projects.locations.entryGroups.entries.create()`

Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entry group this entry belongs to. Note: The entry itself and its child resources might not be stored in the location specified in its name. |
| `params.entryId` | `string` | No | Required. The ID of the entry to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (_). The maximum size is 64 bytes when encoded in UTF-8. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.patch()`

Updates an existing entry. You must enable the Data Catalog API in the project identified by the `entry.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. You can modify only the fields listed below. For entries with type `DATA_STREAM`: * `schema` For entries with type `FILESET`: * `schema` * `display_name` * `description` * `gcs_fileset_spec` * `gcs_fileset_spec.file_patterns` For entries with `user_specified_type`: * `schema` * `display_name` * `description` * `user_specified_type` * `user_specified_system` * `linked_resource` * `source_system_timestamps` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.delete()`

Deletes an existing entry. You can delete only the entries created by the CreateEntry method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry to delete. |

#### `projects.locations.entryGroups.entries.get()`

Gets an entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry to get. |

#### `projects.locations.entryGroups.entries.list()`

Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entry group that contains the entries to list. Can be provided in URL format. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is more than 1000. |
| `params.pageToken` | `string` | No | Pagination token that specifies the next page to return. If empty, the first page is returned. |
| `params.readMask` | `string` | No | The fields to return for each entry. If empty or omitted, all fields are returned. For example, to return a list of entries with only the `name` field, set `read_mask` to only one path with the `name` value. |

#### `projects.locations.entryGroups.entries.modifyEntryOverview()`

Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the entry. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.modifyEntryContacts()`

Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the entry. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.star()`

Marks an Entry as starred by the current user. Starring information is private to each user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry to mark as starred. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.unstar()`

Marks an Entry as NOT starred by the current user. Starring information is private to each user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entry to mark as **not** starred. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.getIamPolicy()`

Gets the access control policy for a resource. May return:

* A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it.

* An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.testIamPermissions()`

Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.import()`

Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Target entry group for ingested entries. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.entries.tags`

#### `projects.locations.entryGroups.entries.tags.create()`

Creates a tag and assigns it to:

* An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`.

* Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.tags.patch()`

Updates an existing tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.tags.delete()`

Deletes a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag to delete. |

#### `projects.locations.entryGroups.entries.tags.list()`

Lists tags assigned to an Entry. The columns in the response are lowercased.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end). |
| `params.pageSize` | `integer` | No | The maximum number of tags to return. Default is 10. Maximum limit is 1000. |
| `params.pageToken` | `string` | No | Pagination token that specifies the next page to return. If empty, the first page is returned. |

#### `projects.locations.entryGroups.entries.tags.reconcile()`

`ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message. Note: SearchCatalog might return stale search results for up to 24 hours after the `ReconcileTags` operation completes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of Entry to be tagged. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.tags`

#### `projects.locations.entryGroups.tags.create()`

Creates a tag and assigns it to:

* An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`.

* Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.tags.patch()`

Updates an existing tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.tags.delete()`

Deletes a tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag to delete. |

#### `projects.locations.entryGroups.tags.list()`

Lists tags assigned to an Entry. The columns in the response are lowercased.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end). |
| `params.pageSize` | `integer` | No | The maximum number of tags to return. Default is 10. Maximum limit is 1000. |
| `params.pageToken` | `string` | No | Pagination token that specifies the next page to return. If empty, the first page is returned. |

### `projects.locations.tagTemplates`

#### `projects.locations.tagTemplates.create()`

Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). |
| `params.tagTemplateId` | `string` | No | Required. The ID of the tag template to create. The ID must contain only lowercase letters (a-z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.get()`

Gets a tag template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template to get. |

#### `projects.locations.tagTemplates.patch()`

Updates a tag template. You can't update template fields with this method. These fields are separate resources with their own create, update, and delete methods. You must enable the Data Catalog API in the project identified by the `tag_template.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name. |
| `params.updateMask` | `string` | No | Names of fields whose values to overwrite on a tag template. Currently, only `display_name` and `is_publicly_readable` can be overwritten. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. Note: Updating the `is_publicly_readable` field may require up to 12 hours to take effect in search results. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.delete()`

Deletes a tag template and all tags that use it. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template to delete. |
| `params.force` | `boolean` | No | Required. If true, deletes all tags that use this template. Currently, `true` is the only supported value. |

#### `projects.locations.tagTemplates.setIamPolicy()`

Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.getIamPolicy()`

Gets the access control policy for a resource. May return:

* A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it.

* An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.testIamPermissions()`

Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.tagTemplates.fields`

#### `projects.locations.tagTemplates.fields.create()`

Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). |
| `params.tagTemplateFieldId` | `string` | No | Required. The ID of the tag template field to create. Note: Adding a required field to an existing template is *not* allowed. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.patch()`

Updates a field in a tag template. You can't update the field type with this method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template field. |
| `params.updateMask` | `string` | No | Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: * `display_name` * `type.enum_type` * `is_required` If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is *not* allowed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.rename()`

Renames a field in a tag template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tagTemplates.fields.delete()`

Deletes a field in a tag template and all uses of this field from the tags based on this template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tag template field to delete. |
| `params.force` | `boolean` | No | Required. If true, deletes this field from any tags that use it. Currently, `true` is the only supported value. |

### `projects.locations.tagTemplates.fields.enumValues`

#### `projects.locations.tagTemplates.fields.enumValues.rename()`

Renames an enum value in a tag template. Within a single enum field, enum values must be unique.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enum field value. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.taxonomies`

#### `projects.locations.taxonomies.create()`

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the taxonomy will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.delete()`

Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to delete. Note: All policy tags in this taxonomy are also deleted. |

#### `projects.locations.taxonomies.patch()`

Updates a taxonomy, including its display name, description, and activated policy types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs. |
| `params.updateMask` | `string` | No | Specifies fields to update. If not set, defaults to all fields you can update. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.list()`

Lists all taxonomies in a project in a particular location that you have a permission to view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project to list the taxonomies of. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The pagination token of the next results page. If not set, the first page is returned. The token is returned in the response to a previous list request. |
| `params.filter` | `string` | No | Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex. |

#### `projects.locations.taxonomies.get()`

Gets a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to get. |

#### `projects.locations.taxonomies.getIamPolicy()`

Gets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.setIamPolicy()`

Sets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.testIamPermissions()`

Returns your permissions on a specified policy tag or taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.replace()`

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.import()`

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of project that the imported taxonomies will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.export()`

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the exported taxonomies belong to. |
| `params.taxonomies` | `string` | No | Required. Resource names of the taxonomies to export. |
| `params.serializedTaxonomies` | `boolean` | No | Serialized export taxonomies that contain all the policy tags as nested protocol buffers. |

### `projects.locations.taxonomies.policyTags`

#### `projects.locations.taxonomies.policyTags.create()`

Creates a policy tag in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy that the policy tag will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.delete()`

Deletes a policy tag together with the following:

* All of its descendant policy tags, if any

* Policies associated with the policy tag and its descendants

* References from BigQuery table schema of the policy tag and its descendants

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag to delete. Note: All of its descendant policy tags are also deleted. |

#### `projects.locations.taxonomies.policyTags.patch()`

Updates a policy tag, including its display name, description, and parent policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs. |
| `params.updateMask` | `string` | No | Specifies the fields to update. You can update only display name, description, and parent policy tag. If not set, defaults to all updatable fields. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.list()`

Lists all policy tags in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy to list the policy tags of. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The pagination token of the next results page. If not set, returns the first page. The token is returned in the response to a previous list request. |

#### `projects.locations.taxonomies.policyTags.get()`

Gets a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag. |

#### `projects.locations.taxonomies.policyTags.getIamPolicy()`

Gets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.setIamPolicy()`

Sets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.testIamPermissions()`

Returns your permissions on a specified policy tag or taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `catalog`

#### `catalog.search()`

Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `entries`

#### `entries.lookup()`

Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.linkedResource` | `string` | No | The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). Full names are case-sensitive. For example: * `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` * `//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}` |
| `params.sqlResource` | `string` | No | The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.topic.{PROJECT_ID}.{TOPIC_ID}` * `pubsub.topic.{PROJECT_ID}.`\``{TOPIC.ID.SEPARATED.WITH.DOTS}`\` * `bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` * `bigquery.dataset.{PROJECT_ID}.{DATASET_ID}` * `datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}` Identifiers (`*_ID`) should comply with the [Lexical structure in GoogleSQL] (https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical). |
| `params.fullyQualifiedName` | `string` | No | [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}` |
| `params.project` | `string` | No | Project where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. |
| `params.location` | `string` | No | Location where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. |

### `organizations`

### `organizations.locations`

#### `organizations.locations.setConfig()`

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization or project whose config is being specified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.retrieveConfig()`

Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization whose config is being retrieved. |

#### `organizations.locations.retrieveEffectiveConfig()`

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource whose effective config is being retrieved. |