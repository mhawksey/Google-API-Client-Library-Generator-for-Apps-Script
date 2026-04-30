# Cloud DNS API - Apps Script Client Library

Auto-generated client library for using the **Cloud DNS API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:53:35 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:53:35 GMT
- **Created:** Sun, 20 Jul 2025 16:32:08 GMT



---

## API Reference

### `changes`

#### `changes.create()`

Atomically updates the ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `changes.get()`

Fetches the representation of an existing Change.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.changeId` | `string` | Yes | The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `changes.list()`

Enumerates Changes to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.sortOrder` | `string` | No | Sorting order direction: 'ascending' or 'descending'. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported value is change sequence. |

### `dnsKeys`

#### `dnsKeys.list()`

Enumerates DnsKeys to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `dnsKeys.get()`

Fetches the representation of an existing DnsKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dnsKeyId` | `string` | Yes | The identifier of the requested DnsKey. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `resourceRecordSets`

#### `resourceRecordSets.list()`

Enumerates ResourceRecordSets that you have created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | No | Specify a fully qualified domain name to view only those records. The `name` parameter is not supported and must be omitted when you use `filter`. |
| `params.type` | `string` | No | Specify a record type to view only those records. You must also specify the `name` parameter. The `type` parameter is not supported and must be omitted when you use `filter`. |
| `params.filter` | `string` | No | Specify a filter expression to view records that exactly match the specified domain. Both the `name` and `type` parameters are not supported and must be omitted when you use `filter`. Your `filter` expression must conform to AIP-160 and you must specify a domain in the `name` field. Optionally, you can include the `type` field to filter records by type. You can also include the `has_suffix` function to view records that match by domain suffix. Examples: * `name`="example.com." * `name`="example.com." AND type="A" * `name`=`has_suffix`("example.com.") * `name`=`has_suffix`("example.com.") AND type="A" |

#### `resourceRecordSets.get()`

Fetches the representation of an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |

#### `resourceRecordSets.patch()`

Applies a partial update to an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resourceRecordSets.create()`

Creates a new ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resourceRecordSets.delete()`

Deletes a previously created ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `managedZones`

#### `managedZones.get()`

Fetches the representation of an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `managedZones.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.list()`

Enumerates ManagedZones that have been created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.dnsName` | `string` | No | Restricts the list to return only zones with this domain name. |

#### `managedZones.update()`

Updates an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.delete()`

Deletes a previously created ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `managedZones.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.patch()`

Applies a partial update to an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.create()`

Creates a new ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `policies`

#### `policies.get()`

Fetches the representation of an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |

#### `policies.list()`

Enumerates all policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `policies.update()`

Updates an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `policies.create()`

Creates a new policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `policies.delete()`

Deletes a previously created policy. Fails if the policy is still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `policies.patch()`

Applies a partial update to an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

### `responsePolicies`

#### `responsePolicies.update()`

Updates an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.list()`

Enumerates all Response Policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `responsePolicies.get()`

Fetches the representation of an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicies.patch()`

Applies a partial update to an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the response policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.create()`

Creates a new Response Policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.delete()`

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `responsePolicyRules`

#### `responsePolicyRules.update()`

Updates an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.list()`

Enumerates all Response Policy Rules associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy to list. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `responsePolicyRules.get()`

Fetches the representation of an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |

#### `responsePolicyRules.patch()`

Applies a partial update to an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.create()`

Creates a new Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.delete()`

Deletes a previously created Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |

### `projects`

#### `projects.get()`

Fetches the representation of an existing Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `managedZoneOperations`

#### `managedZoneOperations.get()`

Fetches the representation of an existing Operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.operation` | `string` | Yes | Identifies the operation addressed by this request (ID of the operation). |

#### `managedZoneOperations.list()`

Enumerates Operations for the given ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported values are START_TIME and ID. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |