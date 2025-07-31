# Cloud DNS API - Apps Script Client Library

Auto-generated client library for using the **Cloud DNS API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:33:47 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:31:54 GMT
- **Created:** Sun, 20 Jul 2025 16:32:08 GMT



---

## API Reference

### `resourceRecordSets`

#### `resourceRecordSets.list()`

Enumerates ResourceRecordSets that you have created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.name` | `string` | No | Restricts the list to return only records with this fully qualified domain name. |
| `params.type` | `string` | No | Restricts the list to return only records of this type. If present, the "name" parameter must also be present. |

#### `resourceRecordSets.create()`

Creates a new ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `resourceRecordSets.get()`

Fetches the representation of an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `resourceRecordSets.delete()`

Deletes a previously created ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `resourceRecordSets.patch()`

Applies a partial update to an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

### `changes`

#### `changes.create()`

Atomically updates the ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

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
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported value is change sequence. |
| `params.sortOrder` | `string` | No | Sorting order direction: 'ascending' or 'descending'. |

### `dnsKeys`

#### `dnsKeys.get()`

Fetches the representation of an existing DnsKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.dnsKeyId` | `string` | Yes | The identifier of the requested DnsKey. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |

#### `dnsKeys.list()`

Enumerates DnsKeys to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |

### `projects`

#### `projects.get()`

Fetches the representation of an existing Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

### `managedZoneOperations`

#### `managedZoneOperations.get()`

Fetches the representation of an existing Operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.operation` | `string` | Yes | Identifies the operation addressed by this request (ID of the operation). |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `managedZoneOperations.list()`

Enumerates Operations for the given ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported values are START_TIME and ID. |

### `managedZones`

#### `managedZones.create()`

Creates a new ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedZones.get()`

Fetches the representation of an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `managedZones.list()`

Enumerates ManagedZones that have been created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.dnsName` | `string` | No | Restricts the list to return only zones with this domain name. |

#### `managedZones.delete()`

Deletes a previously created ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `managedZones.patch()`

Applies a partial update to an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedZones.update()`

Updates an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedZones.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedZones.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `managedZones.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `policies`

#### `policies.create()`

Creates a new Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `policies.get()`

Fetches the representation of an existing Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `policies.list()`

Enumerates all Policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `policies.delete()`

Deletes a previously created Policy. Fails if the policy is still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `policies.patch()`

Applies a partial update to an existing Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `policies.update()`

Updates an existing Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

### `responsePolicies`

#### `responsePolicies.create()`

Creates a new Response Policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `responsePolicies.get()`

Fetches the representation of an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicies.list()`

Enumerates all Response Policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `responsePolicies.delete()`

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicies.patch()`

Applies a partial update to an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the response policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `responsePolicies.update()`

Updates an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

### `responsePolicyRules`

#### `responsePolicyRules.create()`

Creates a new Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `responsePolicyRules.get()`

Fetches the representation of an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicyRules.delete()`

Deletes a previously created Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicyRules.list()`

Enumerates all Response Policy Rules associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy to list. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `responsePolicyRules.patch()`

Applies a partial update to an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `responsePolicyRules.update()`

Updates an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.resource` | `object` | Yes | The request body. |