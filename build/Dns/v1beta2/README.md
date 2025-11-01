# Cloud DNS API - Apps Script Client Library

Auto-generated client library for using the **Cloud DNS API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:43:30 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:43:30 GMT
- **Created:** Sun, 20 Jul 2025 16:32:05 GMT



---

## API Reference

### `resourceRecordSets`

#### `resourceRecordSets.patch()`

Applies a partial update to an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resourceRecordSets.delete()`

Deletes a previously created ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |

#### `resourceRecordSets.create()`

Creates a new ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resourceRecordSets.get()`

Fetches the representation of an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `resourceRecordSets.list()`

Enumerates ResourceRecordSets that you have created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | No | Restricts the list to return only records with this fully qualified domain name. Mutually exclusive with the {@code filter} field. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.type` | `string` | No | Restricts the list to return only records of this type. If present, the "name" parameter must also be present. Mutually exclusive with the {@code filter} field. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |

### `changes`

#### `changes.list()`

Enumerates Changes to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.sortOrder` | `string` | No | Sorting order direction: 'ascending' or 'descending'. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported value is change sequence. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `changes.create()`

Atomically updates the ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `changes.get()`

Fetches the representation of an existing Change.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.changeId` | `string` | Yes | The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse. |

### `policies`

#### `policies.list()`

Enumerates all policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `policies.get()`

Fetches the representation of an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `policies.update()`

Updates an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
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
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |

#### `policies.patch()`

Applies a partial update to an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects`

#### `projects.get()`

Fetches the representation of an existing Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

### `dnsKeys`

#### `dnsKeys.get()`

Fetches the representation of an existing DnsKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.dnsKeyId` | `string` | Yes | The identifier of the requested DnsKey. |

#### `dnsKeys.list()`

Enumerates DnsKeys to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |

### `responsePolicyRules`

#### `responsePolicyRules.update()`

Updates an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.delete()`

Deletes a previously created Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicyRules.patch()`

Applies a partial update to an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.list()`

Enumerates all Response Policy Rules associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy to list. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |

#### `responsePolicyRules.get()`

Fetches the representation of an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |

#### `responsePolicyRules.create()`

Creates a new Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.requestBody` | `object` | Yes | The request body. |

### `managedZones`

#### `managedZones.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.delete()`

Deletes a previously created ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `managedZones.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.get()`

Fetches the representation of an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |

#### `managedZones.patch()`

Applies a partial update to an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.update()`

Updates an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.create()`

Creates a new ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.list()`

Enumerates ManagedZones that have been created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.dnsName` | `string` | No | Restricts the list to return only zones with this domain name. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

### `managedZoneOperations`

#### `managedZoneOperations.get()`

Fetches the representation of an existing Operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.operation` | `string` | Yes | Identifies the operation addressed by this request (ID of the operation). |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `managedZoneOperations.list()`

Enumerates Operations for the given ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sortBy` | `string` | No | Sorting criterion. The only supported values are START_TIME and ID. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `responsePolicies`

#### `responsePolicies.list()`

Enumerates all Response Policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `responsePolicies.update()`

Updates an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.patch()`

Applies a partial update to an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the response policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.delete()`

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `responsePolicies.get()`

Fetches the representation of an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |

#### `responsePolicies.create()`

Creates a new Response Policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |