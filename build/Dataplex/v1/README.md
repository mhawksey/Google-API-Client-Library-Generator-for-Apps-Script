# Cloud Dataplex API - Apps Script Client Library

Auto-generated client library for using the **Cloud Dataplex API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:46:05 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:30:46 GMT
- **Created:** Sun, 20 Jul 2025 16:25:17 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.lookupEntry()`

Looks up an entry by name using the permission on the source system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project to which the request should be attributed in the following form: projects/{project}/locations/{location}. |
| `params.view` | `string` | No | Optional. View to control which parts of an entry the service should return. |
| `params.aspectTypes` | `string` | No | Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view. |
| `params.paths` | `string` | No | Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view. |
| `params.entry` | `string` | No | Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. |

#### `projects.locations.searchEntries()`

Searches for Entries matching the given query and scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The project to which the request should be attributed in the following form: projects/{project}/locations/global. |
| `params.query` | `string` | No | Required. The query against which entries in scope should be matched. The query syntax is defined in Search syntax for Dataplex Catalog (https://cloud.google.com/dataplex/docs/search-syntax). |
| `params.pageSize` | `integer` | No | Optional. Number of results in the search page. If <=0, then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous SearchEntries call. Provide this to retrieve the subsequent page. |
| `params.orderBy` | `string` | No | Optional. Specifies the ordering of results. Supported values are: relevance (default) last_modified_timestamp last_modified_timestamp asc |
| `params.scope` | `string` | No | Optional. The scope under which the search should be operating. It must either be organizations/ or projects/. If it is unspecified, it defaults to the organization where the project provided in name is located. |
| `params.semanticSearch` | `boolean` | No | Optional. Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.entryTypes`

#### `projects.locations.entryTypes.create()`

Creates an EntryType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.entryTypeId` | `string` | No | Required. EntryType identifier. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryTypes.patch()`

Updates an EntryType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryTypes.delete()`

Deletes an EntryType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. |
| `params.etag` | `string` | No | Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response. |

#### `projects.locations.entryTypes.list()`

Lists EntryType resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the EntryType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of EntryTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryTypes. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEntryTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provided to ListEntryTypes must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions. |
| `params.orderBy` | `string` | No | Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined. |

#### `projects.locations.entryTypes.get()`

Gets an EntryType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. |

#### `projects.locations.entryTypes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryTypes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.entryTypes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.aspectTypes`

#### `projects.locations.aspectTypes.create()`

Creates an AspectType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.aspectTypeId` | `string` | No | Required. AspectType identifier. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.aspectTypes.patch()`

Updates an AspectType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.aspectTypes.delete()`

Deletes an AspectType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. |
| `params.etag` | `string` | No | Optional. If the client provided etag value does not match the current etag value, the DeleteAspectTypeRequest method returns an ABORTED error response. |

#### `projects.locations.aspectTypes.list()`

Lists AspectType resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the AspectType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of AspectTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 AspectTypes. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListAspectTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListAspectTypes must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions. |
| `params.orderBy` | `string` | No | Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined. |

#### `projects.locations.aspectTypes.get()`

Gets an AspectType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. |

#### `projects.locations.aspectTypes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.aspectTypes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.aspectTypes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.entryGroups`

#### `projects.locations.entryGroups.create()`

Creates an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the entryGroup, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.entryGroupId` | `string` | No | Required. EntryGroup identifier. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.patch()`

Updates an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the EntryGroup, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request, without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.delete()`

Deletes an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| `params.etag` | `string` | No | Optional. If the client provided etag value does not match the current etag value, the DeleteEntryGroupRequest method returns an ABORTED error response. |

#### `projects.locations.entryGroups.list()`

Lists EntryGroup resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the entryGroup location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of EntryGroups to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryGroups. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEntryGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListEntryGroups must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.entryGroups.get()`

Gets an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}. |

#### `projects.locations.entryGroups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.entryGroups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.entryGroups.entries`

#### `projects.locations.entryGroups.entries.create()`

Creates an Entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}. |
| `params.entryId` | `string` | No | Required. Entry identifier. It has to be unique within an Entry Group.Entries corresponding to Google Cloud resources use an Entry ID format based on full resource names (https://cloud.google.com/apis/design/resource_names#full_resource_name). The format is a full resource name of the resource without the prefix double slashes in the API service name part of the full resource name. This allows retrieval of entries using their associated resource name.For example, if the full resource name of a resource is //library.googleapis.com/shelves/shelf1/books/book2, then the suggested entry_id is library.googleapis.com/shelves/shelf1/books/book2.It is also suggested to follow the same convention for entries corresponding to resources from providers or systems other than Google Cloud.The maximum size of the field is 4000 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.patch()`

Updates an Entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The relative resource name of the entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. |
| `params.updateMask` | `string` | No | Optional. Mask of fields to update. To update Aspects, the update_mask must contain the value "aspects".If the update_mask is empty, the service will update all modifiable fields present in the request. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true and the entry doesn't exist, the service will create it. |
| `params.deleteMissingAspects` | `boolean` | No | Optional. If set to true and the aspect_keys specify aspect ranges, the service deletes any existing aspects from that range that weren't provided in the request. |
| `params.aspectKeys` | `string` | No | Optional. The map keys of the Aspects which the service should modify. It supports the following syntaxes: - matches an aspect of the given type and empty path. @path - matches an aspect of the given type and specified path. For example, to attach an aspect to a field that is specified by the schema aspect, the path should have the format Schema.. @* - matches aspects of the given type for all paths. *@path - matches aspects of all types on the given path.The service will not remove existing aspects matching the syntax unless delete_missing_aspects is set to true.If this field is left empty, the service treats it as specifying exactly those Aspects present in the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entries.delete()`

Deletes an Entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. |

#### `projects.locations.entryGroups.entries.list()`

Lists Entries within an EntryGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}. |
| `params.pageSize` | `integer` | No | Optional. Number of items to return per page. If there are remaining results, the service returns a next_page_token. If unspecified, the service returns at most 10 Entries. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEntries call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter on the entries to return. Filters are case-sensitive. You can filter the request by the following fields: entry_type entry_source.display_nameThe comparison operators are =, !=, <, >, <=, >=. The service compares strings according to lexical order.You can use the logical operators AND, OR, NOT in the filter.You can use Wildcard "*", but for entry_type you need to provide the full project id or number.Example filter expressions: "entry_source.display_name=AnExampleDisplayName" "entry_type=projects/example-project/locations/global/entryTypes/example-entry_type" "entry_type=projects/example-project/locations/us/entryTypes/a* OR entry_type=projects/another-project/locations/*" "NOT entry_source.display_name=AnotherExampleDisplayName" |

#### `projects.locations.entryGroups.entries.get()`

Gets an Entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. |
| `params.view` | `string` | No | Optional. View to control which parts of an entry the service should return. |
| `params.aspectTypes` | `string` | No | Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view. |
| `params.paths` | `string` | No | Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view. |

### `projects.locations.entryGroups.entryLinks`

#### `projects.locations.entryGroups.entryLinks.create()`

Creates an Entry Link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent Entry Group: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| `params.entryLinkId` | `string` | No | Required. Entry Link identifier * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the EntryGroup. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryGroups.entryLinks.delete()`

Deletes an Entry Link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}. |

#### `projects.locations.entryGroups.entryLinks.get()`

Gets an Entry Link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}. |

### `projects.locations.metadataJobs`

#### `projects.locations.metadataJobs.create()`

Creates a metadata job. For example, use a metadata job to import Dataplex Catalog entries and aspects from a third-party system into Dataplex.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} |
| `params.metadataJobId` | `string` | No | Optional. The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| `params.validateOnly` | `boolean` | No | Optional. The service validates the request without performing any mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.metadataJobs.get()`

Gets a metadata job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the metadata job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id}. |

#### `projects.locations.metadataJobs.list()`

Lists metadata jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of metadata jobs to return. The service might return fewer jobs than this value. If unspecified, at most 10 jobs are returned. The maximum value is 1,000. |
| `params.pageToken` | `string` | No | Optional. The page token received from a previous ListMetadataJobs call. Provide this token to retrieve the subsequent page of results. When paginating, all other parameters that are provided to the ListMetadataJobs request must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"You can combine filters with AND, OR, and NOT operators. |
| `params.orderBy` | `string` | No | Optional. The field to sort the results by, either name or create_time. If not specified, the ordering is undefined. |

#### `projects.locations.metadataJobs.cancel()`

Cancels a metadata job.If you cancel a metadata import job that is in progress, the changes in the job might be partially applied. We recommend that you reset the state of the entry groups in your project by running another metadata job that reverts the changes from the canceled job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.glossaries`

#### `projects.locations.glossaries.create()`

Creates a new Glossary resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this Glossary will be created. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.glossaryId` | `string` | No | Required. Glossary ID: Glossary identifier. |
| `params.validateOnly` | `boolean` | No | Optional. Validates the request without actually creating the Glossary. Default: false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.patch()`

Updates a Glossary resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the Glossary. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Validates the request without actually updating the Glossary. Default: false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.delete()`

Deletes a Glossary resource. All the categories and terms within the Glossary must be deleted before the Glossary can be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Glossary to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} |
| `params.etag` | `string` | No | Optional. The etag of the Glossary. If this is provided, it must match the server's etag. If the etag is provided and does not match the server-computed etag, the request must fail with a ABORTED error code. |

#### `projects.locations.glossaries.get()`

Gets a Glossary resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Glossary to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} |

#### `projects.locations.glossaries.list()`

Lists Glossary resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which has this collection of Glossaries. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Glossaries to return. The service may return fewer than this value. If unspecified, at most 50 Glossaries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListGlossaries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaries must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter expression that filters Glossaries listed in the response. Filters on proto fields of Glossary are supported. Examples of using a filter are: - display_name="my-glossary" - categoryCount=1 - termCount=0 |
| `params.orderBy` | `string` | No | Optional. Order by expression that orders Glossaries listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. |

#### `projects.locations.glossaries.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.glossaries.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.glossaries.categories`

#### `projects.locations.glossaries.categories.create()`

Creates a new GlossaryCategory resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this GlossaryCategory will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where locationId refers to a Google Cloud region. |
| `params.categoryId` | `string` | No | Required. GlossaryCategory identifier. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.categories.patch()`

Updates a GlossaryCategory resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.categories.delete()`

Deletes a GlossaryCategory resource. All the GlossaryCategories and GlossaryTerms nested directly under the specified GlossaryCategory will be moved one level up to the parent in the hierarchy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GlossaryCategory to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} |

#### `projects.locations.glossaries.categories.get()`

Gets a GlossaryCategory resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GlossaryCategory to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} |

#### `projects.locations.glossaries.categories.list()`

Lists GlossaryCategory resources in a Glossary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which has this collection of GlossaryCategories. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} Location is the Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of GlossaryCategories to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryCategories will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListGlossaryCategories call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryCategories must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter expression that filters GlossaryCategories listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryCategories that are directly nested under the specified parent. |
| `params.orderBy` | `string` | No | Optional. Order by expression that orders GlossaryCategories listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. |

#### `projects.locations.glossaries.categories.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.categories.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.glossaries.categories.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.glossaries.terms`

#### `projects.locations.glossaries.terms.create()`

Creates a new GlossaryTerm resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the GlossaryTerm will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. |
| `params.termId` | `string` | No | Required. GlossaryTerm identifier. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.terms.patch()`

Updates a GlossaryTerm resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the GlossaryTerm. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.terms.delete()`

Deletes a GlossaryTerm resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GlossaryTerm to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} |

#### `projects.locations.glossaries.terms.get()`

Gets a GlossaryTerm resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GlossaryTerm to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} |

#### `projects.locations.glossaries.terms.list()`

Lists GlossaryTerm resources in a Glossary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which has this collection of GlossaryTerms. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of GlossaryTerms to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryTerms will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListGlossaryTerms call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryTerms must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter expression that filters GlossaryTerms listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryTerms that are directly nested under the specified parent. |
| `params.orderBy` | `string` | No | Optional. Order by expression that orders GlossaryTerms listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. |

#### `projects.locations.glossaries.terms.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.terms.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.glossaries.terms.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.lakes`

#### `projects.locations.lakes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.create()`

Creates a lake resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.lakeId` | `string` | No | Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.patch()`

Updates a lake resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.delete()`

Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |

#### `projects.locations.lakes.list()`

Lists lake resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.lakes.get()`

Retrieves a lake resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |

### `projects.locations.lakes.zones`

#### `projects.locations.lakes.zones.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.zones.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.create()`

Creates a zone resource within a lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.zoneId` | `string` | No | Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp") |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.patch()`

Updates a zone resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.delete()`

Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |

#### `projects.locations.lakes.zones.list()`

Lists zone resources in a lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.lakes.zones.get()`

Retrieves a zone resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |

### `projects.locations.lakes.zones.assets`

#### `projects.locations.lakes.zones.assets.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.assets.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.zones.assets.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.assets.create()`

Creates an asset resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.assetId` | `string` | No | Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.assets.patch()`

Updates an asset resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.assets.delete()`

Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. |

#### `projects.locations.lakes.zones.assets.list()`

Lists asset resources in a zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.lakes.zones.assets.get()`

Retrieves an asset resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. |

### `projects.locations.lakes.zones.assets.actions`

#### `projects.locations.lakes.zones.assets.actions.list()`

Lists action resources in an asset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token. |

### `projects.locations.lakes.zones.entities`

#### `projects.locations.lakes.zones.entities.create()`

Create a metadata entity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.entities.update()`

Update a metadata entity. Only supports full resource update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.entities.delete()`

Delete a metadata entity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. |
| `params.etag` | `string` | No | Required. The etag associated with the entity, which can be retrieved with a GetEntity request. |

#### `projects.locations.lakes.zones.entities.get()`

Get a metadata entity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. |
| `params.view` | `string` | No | Optional. Used to select the subset of entity information to return. Defaults to BASIC. |

#### `projects.locations.lakes.zones.entities.list()`

List metadata entities in a zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.view` | `string` | No | Required. Specify the entity view to make a partial list request. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true" |

### `projects.locations.lakes.zones.entities.partitions`

#### `projects.locations.lakes.zones.entities.partitions.create()`

Create a metadata partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.zones.entities.partitions.delete()`

Delete a metadata partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the partition. format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided. |
| `params.etag` | `string` | No | Optional. The etag associated with the partition. |

#### `projects.locations.lakes.zones.entities.partitions.get()`

Get a metadata partition of an entity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the partition: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided. |

#### `projects.locations.lakes.zones.entities.partitions.list()`

List metadata partitions of an entity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter. |

### `projects.locations.lakes.zones.actions`

#### `projects.locations.lakes.zones.actions.list()`

Lists action resources in a zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListZoneActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZoneActions must match the call that provided the page token. |

### `projects.locations.lakes.tasks`

#### `projects.locations.lakes.tasks.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.tasks.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.tasks.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.tasks.create()`

Creates a task resource within a lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.taskId` | `string` | No | Required. Task identifier. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.tasks.patch()`

Update the task resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.tasks.delete()`

Delete the task resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}. |

#### `projects.locations.lakes.tasks.list()`

Lists tasks under the given lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.lakes.tasks.get()`

Get task resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{tasks_id}. |

#### `projects.locations.lakes.tasks.run()`

Run an on demand execution of a Task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.lakes.tasks.jobs`

#### `projects.locations.lakes.tasks.jobs.list()`

Lists Jobs under the given task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token. |

#### `projects.locations.lakes.tasks.jobs.get()`

Get job resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. |

#### `projects.locations.lakes.tasks.jobs.cancel()`

Cancel jobs running for the task resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}/job/{job_id}. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.lakes.environments`

#### `projects.locations.lakes.environments.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.environments.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.environments.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.environments.create()`

Create an environment resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}. |
| `params.environmentId` | `string` | No | Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.environments.patch()`

Update the environment resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id} |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.environments.delete()`

Delete the environment resource. All the child resources must have been deleted before environment deletion can be initiated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the environment: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environments/{environment_id}. |

#### `projects.locations.lakes.environments.list()`

Lists environments under the given lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.lakes.environments.get()`

Get environment resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the environment: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environments/{environment_id}. |

### `projects.locations.lakes.environments.sessions`

#### `projects.locations.lakes.environments.sessions.list()`

Lists session resources in an environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER |

### `projects.locations.lakes.contentitems`

#### `projects.locations.lakes.contentitems.create()`

Create a content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id} |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.contentitems.patch()`

Update a content. Only supports full resource update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.contentitems.delete()`

Delete a content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |

#### `projects.locations.lakes.contentitems.get()`

Get a content resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |
| `params.view` | `string` | No | Optional. Specify content view to make a partial request. |

#### `projects.locations.lakes.contentitems.getIamPolicy()`

Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.contentitems.setIamPolicy()`

Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.contentitems.testIamPermissions()`

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.contentitems.list()`

List content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id} |
| `params.pageSize` | `integer` | No | Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions. |

### `projects.locations.lakes.content`

#### `projects.locations.lakes.content.create()`

Create a content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id} |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.content.patch()`

Update a content. Only supports full resource update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.content.delete()`

Delete a content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |

#### `projects.locations.lakes.content.get()`

Get a content resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} |
| `params.view` | `string` | No | Optional. Specify content view to make a partial request. |

#### `projects.locations.lakes.content.getIamPolicy()`

Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.lakes.content.setIamPolicy()`

Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.content.testIamPermissions()`

Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lakes.content.list()`

List content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id} |
| `params.pageSize` | `integer` | No | Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions. |

### `projects.locations.lakes.actions`

#### `projects.locations.lakes.actions.list()`

Lists action resources in a lake.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListLakeActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakeActions must match the call that provided the page token. |

### `projects.locations.dataScans`

#### `projects.locations.dataScans.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataScans.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.dataScans.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataScans.create()`

Creates a DataScan resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.dataScanId` | `string` | No | Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataScans.patch()`

Updates a DataScan resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.updateMask` | `string` | No | Optional. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataScans.delete()`

Deletes a DataScan resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.force` | `boolean` | No | Optional. If set to true, any child resources of this data scan will also be deleted. (Otherwise, the request will only work if the data scan has no child resources.) |

#### `projects.locations.dataScans.get()`

Gets a DataScan resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.view` | `string` | No | Optional. Select the DataScan view to return. Defaults to BASIC. |

#### `projects.locations.dataScans.list()`

Lists DataScans.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined. |

#### `projects.locations.dataScans.run()`

Runs an on-demand execution of a DataScan

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}. where project refers to a project_id or project_number and location_id refers to a Google Cloud region.Only OnDemand data scans are allowed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataScans.generateDataQualityRules()`

Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling) |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataScans.jobs`

#### `projects.locations.dataScans.jobs.get()`

Gets a DataScanJob resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataScanJob: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}/jobs/{data_scan_job_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.view` | `string` | No | Optional. Select the DataScanJob view to return. Defaults to BASIC. |

#### `projects.locations.dataScans.jobs.list()`

Lists DataScanJobs under the given DataScan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent environment: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of DataScanJobs to return. The service may return fewer than this value. If unspecified, at most 10 DataScanJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListDataScanJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScanJobs must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the ListDataScanJobs request.If unspecified, all datascan jobs will be returned. Multiple filters can be applied (with AND, OR logical operators). Filters are case-sensitive.Allowed fields are: start_time end_timestart_time and end_time expect RFC-3339 formatted strings (e.g. 2018-10-08T18:30:00-07:00).For instance, 'start_time > 2018-10-08T00:00:00.123456789Z AND end_time < 2018-10-09T00:00:00.123456789Z' limits results to DataScanJobs between specified start and end times. |

#### `projects.locations.dataScans.jobs.generateDataQualityRules()`

Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling) |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataTaxonomies`

#### `projects.locations.dataTaxonomies.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.dataTaxonomies.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.create()`

Create a DataTaxonomy resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.dataTaxonomyId` | `string` | No | Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.patch()`

Updates a DataTaxonomy resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.delete()`

Deletes a DataTaxonomy resource. All attributes within the DataTaxonomy must be deleted before the DataTaxonomy can be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} |
| `params.etag` | `string` | No | Optional. If the client provided etag value does not match the current etag value,the DeleteDataTaxonomy method returns an ABORTED error. |

#### `projects.locations.dataTaxonomies.list()`

Lists DataTaxonomy resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.dataTaxonomies.get()`

Retrieves a DataTaxonomy resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

### `projects.locations.dataTaxonomies.attributes`

#### `projects.locations.dataTaxonomies.attributes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.attributes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.dataTaxonomies.attributes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.attributes.create()`

Create a DataAttribute resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} |
| `params.dataAttributeId` | `string` | No | Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.attributes.patch()`

Updates a DataAttribute resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataTaxonomies.attributes.delete()`

Deletes a Data Attribute resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} |
| `params.etag` | `string` | No | Optional. If the client provided etag value does not match the current etag value, the DeleteDataAttribute method returns an ABORTED error response. |

#### `projects.locations.dataTaxonomies.attributes.list()`

Lists Data Attribute resources in a DataTaxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} |
| `params.pageSize` | `integer` | No | Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.dataTaxonomies.attributes.get()`

Retrieves a Data Attribute resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the dataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} |

### `projects.locations.dataAttributeBindings`

#### `projects.locations.dataAttributeBindings.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataAttributeBindings.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.dataAttributeBindings.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataAttributeBindings.create()`

Create a DataAttributeBinding resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id} |
| `params.dataAttributeBindingId` | `string` | No | Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataAttributeBindings.patch()`

Updates a DataAttributeBinding resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the request, but do not perform mutations. The default is false. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataAttributeBindings.delete()`

Deletes a DataAttributeBinding resource. All attributes within the DataAttributeBinding must be deleted before the DataAttributeBinding can be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id} |
| `params.etag` | `string` | No | Required. If the client provided etag value does not match the current etag value, the DeleteDataAttributeBindingRequest method returns an ABORTED error response. Etags must be used when calling the DeleteDataAttributeBinding. |

#### `projects.locations.dataAttributeBindings.list()`

Lists DataAttributeBinding resources in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Location: projects/{project_number}/locations/{location_id} |
| `params.pageSize` | `integer` | No | Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name" |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `projects.locations.dataAttributeBindings.get()`

Retrieves a DataAttributeBinding resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id} |

### `projects.locations.entryLinkTypes`

#### `projects.locations.entryLinkTypes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.entryLinkTypes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.entryLinkTypes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.governanceRules`

#### `projects.locations.governanceRules.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.governanceRules.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.governanceRules.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.encryptionConfigs`

#### `organizations.locations.encryptionConfigs.create()`

Create an EncryptionConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location at which the EncryptionConfig is to be created. |
| `params.encryptionConfigId` | `string` | No | Required. The ID of the EncryptionConfig to create. Currently, only a value of "default" is supported. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.encryptionConfigs.patch()`

Update an EncryptionConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the EncryptionConfig. Format: organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config} Global location is not supported. |
| `params.updateMask` | `string` | No | Optional. Mask of fields to update. The service treats an omitted field mask as an implied field mask equivalent to all fields that are populated (have a non-empty value). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.encryptionConfigs.delete()`

Delete an EncryptionConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EncryptionConfig to delete. |
| `params.etag` | `string` | No | Optional. Etag of the EncryptionConfig. This is a strong etag. |

#### `organizations.locations.encryptionConfigs.list()`

List EncryptionConfigs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location for which the EncryptionConfig is to be listed. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of EncryptionConfigs to return. The service may return fewer than this value. If unspecified, at most 10 EncryptionConfigs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListEncryptionConfigs call. Provide this to retrieve the subsequent page. When paginating, the parameters - filter and order_by provided to ListEncryptionConfigs must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter the EncryptionConfigs to be returned. Using bare literals: (These values will be matched anywhere it may appear in the object's field values) * filter=some_value Using fields: (These values will be matched only in the specified field) * filter=some_field=some_value Supported fields: * name, key, create_time, update_time, encryption_state Example: * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config conjunctions: (AND, OR, NOT) * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config AND mode=CMEK logical operators: (>, <, >=, <=, !=, =, :), * filter=create_time>2024-05-01T00:00:00.000Z |
| `params.orderBy` | `string` | No | Optional. Order by fields for the result. |

#### `organizations.locations.encryptionConfigs.get()`

Get an EncryptionConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EncryptionConfig to fetch. |

#### `organizations.locations.encryptionConfigs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.encryptionConfigs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `organizations.locations.encryptionConfigs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |