# Security Command Center API - Apps Script Client Library

Auto-generated client library for using the **Security Command Center API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:45:46 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:45:46 GMT
- **Created:** Sun, 20 Jul 2025 16:53:46 GMT



---

## API Reference

### `organizations`

#### `organizations.getOrganizationSettings()`

Gets the settings for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the organization to get organization settings for. Its format is "organizations/[organization_id]/organizationSettings". |

#### `organizations.updateOrganizationSettings()`

Updates an organization's settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings". |
| `params.updateMask` | `string` | No | The FieldMask to use when updating the settings resource. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.operations`

#### `organizations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.sources`

#### `organizations.sources.create()`

Creates a source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the new source's parent. Its format should be "organizations/[organization_id]". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.getIamPolicy()`

Gets the access control policy on the specified Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.get()`

Gets a source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Relative resource name of the source. Its format is "organizations/[organization_id]/source/[source_id]". |

#### `organizations.sources.list()`

Lists all sources belonging to an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the parent of sources to list. Its format should be "organizations/[organization_id]". |
| `params.pageToken` | `string` | No | The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. |

#### `organizations.sources.setIamPolicy()`

Sets the access control policy on the specified Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.testIamPermissions()`

 Returns the permissions that a caller has on the specified source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.patch()`

Updates a source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}" |
| `params.updateMask` | `string` | No | The FieldMask to use when updating the source resource. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.sources.findings`

#### `organizations.sources.findings.create()`

Creates a finding. The corresponding source must exist for finding creation to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the new finding's parent. Its format should be "organizations/[organization_id]/sources/[source_id]". |
| `params.findingId` | `string` | No | Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.findings.group()`

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the source to groupBy. Its format is "organizations/[organization_id]/sources/[source_id]". To groupBy across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/- |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.findings.list()`

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the source the findings belong to. Its format is "organizations/[organization_id]/sources/[source_id]". To list across all sources provide a source_id of `-`. For example: organizations/{organization_id}/sources/- |
| `params.filter` | `string` | No | Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `source_properties.size = 100` is a valid filter string. |
| `params.orderBy` | `string` | No | Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. |
| `params.readTime` | `string` | No | Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. |
| `params.fieldMask` | `string` | No | Optional. A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields. |
| `params.pageToken` | `string` | No | The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. |

#### `organizations.sources.findings.setState()`

Updates the state of a finding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of the finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.findings.patch()`

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" |
| `params.updateMask` | `string` | No | The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.sources.findings.updateSecurityMarks()`

Updates security marks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". |
| `params.updateMask` | `string` | No | The FieldMask to use when updating the security marks resource. |
| `params.startTime` | `string` | No | The time at which the updated SecurityMarks take effect. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.assets`

#### `organizations.assets.group()`

Filters an organization's assets and groups them by their specified properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization to groupBy. Its format is "organizations/[organization_id]". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.assets.list()`

Lists an organization's assets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization assets should belong to. Its format is "organizations/[organization_id]". |
| `params.filter` | `string` | No | Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are not supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. For example, `resource_properties.size = 100` is a valid filter string. |
| `params.orderBy` | `string` | No | Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. |
| `params.readTime` | `string` | No | Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW. |
| `params.compareDuration` | `string` | No | When compare_duration is set, the ListAssetResult's "state" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state" values when compare_duration is specified: * "ADDED": indicates that the asset was not present before compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state is "UNUSED", which indicates that the asset is present at read_time. |
| `params.fieldMask` | `string` | No | Optional. A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. |

#### `organizations.assets.runDiscovery()`

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization to run asset discovery for. Its format is "organizations/[organization_id]". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.assets.updateSecurityMarks()`

Updates security marks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". |
| `params.updateMask` | `string` | No | The FieldMask to use when updating the security marks resource. |
| `params.startTime` | `string` | No | The time at which the updated SecurityMarks take effect. |
| `params.resource` | `object` | Yes | The request body. |