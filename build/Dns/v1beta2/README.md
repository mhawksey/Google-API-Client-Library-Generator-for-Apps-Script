# Cloud DNS API - Apps Script Client Library

Auto-generated client library for using the **Cloud DNS API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:10:25 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:10:25 GMT
- **Created:** Sun, 20 Jul 2025 16:32:05 GMT



---

## API Reference

### `dnsKeys`

#### `dnsKeys.get()`

Fetches the representation of an existing DnsKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dnsKeyId` | `string` | Yes | The identifier of the requested DnsKey. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `dnsKeys.list()`

Enumerates DnsKeys to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.digestType` | `string` | No | An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type is computed and displayed. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `projects`

#### `projects.get()`

Fetches the representation of an existing Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

### `policies`

#### `policies.list()`

Enumerates all policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `policies.get()`

Fetches the representation of an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `policies.patch()`

Applies a partial update to an existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.policy` | `string` | Yes | User given friendly name of the policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

### `responsePolicies`

#### `responsePolicies.list()`

Enumerates all Response Policies associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |

#### `responsePolicies.patch()`

Applies a partial update to an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the response policy addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.get()`

Fetches the representation of an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |

#### `responsePolicies.create()`

Creates a new Response Policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicies.delete()`

Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `responsePolicies.update()`

Updates an existing Response Policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

### `outboundEndpoints`

#### `outboundEndpoints.get()`

Fetches the representation of an existing Outbound Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OutboundEndpoint to retrieve. Format: projects/{project}/locations/{location}/outboundEndpoints/{outboundEndpoint} |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `outboundEndpoints.list()`

Enumerates all Outbound Endpoints associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. |
| `params.parent` | `string` | Yes | Required. The parent project and location from which to list resources. Format: projects/{project}/locations/{location} |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous List call. |
| `params.clientOperationId` | `string` | No |  |

#### `outboundEndpoints.create()`

Creates a new Outbound Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project and location where this OutboundEndpoint will be created. Format: projects/{project}/locations/{location} |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.outboundEndpointId` | `string` | No | Required. The ID to use for the OutboundEndpoint, which will become the final component of the OutboundEndpoint's resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `outboundEndpoints.delete()`

Deletes a previously created Outbound Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OutboundEndpoint to delete. Format: projects/{project}/locations/{location}/outboundEndpoints/{outboundEndpoint} |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. |

#### `outboundEndpoints.patch()`

Updates an existing Outbound Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. |
| `params.name` | `string` | Yes | Identifier. The resource name of the OutboundEndpoint. Format: `projects/{project}/locations/{location}/outboundEndpoints/{outboundEndpoint}` |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `managedZoneOperations`

#### `managedZoneOperations.get()`

Fetches the representation of an existing Operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.operation` | `string` | Yes | Identifies the operation addressed by this request (ID of the operation). |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `managedZoneOperations.list()`

Enumerates Operations for the given ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported values are START_TIME and ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `responsePolicyRules`

#### `responsePolicyRules.list()`

Enumerates all Response Policy Rules associated with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy to list. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |

#### `responsePolicyRules.update()`

Updates an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.get()`

Fetches the representation of an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |

#### `responsePolicyRules.create()`

Creates a new Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `responsePolicyRules.delete()`

Deletes a previously created Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `responsePolicyRules.patch()`

Applies a partial update to an existing Response Policy Rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.responsePolicy` | `string` | Yes | User assigned name of the Response Policy containing the Response Policy Rule. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.responsePolicyRule` | `string` | Yes | User assigned name of the Response Policy Rule addressed by this request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.requestBody` | `object` | Yes | The request body. |

### `managedZones`

#### `managedZones.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.get()`

Fetches the representation of an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `managedZones.patch()`

Applies a partial update to an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.create()`

Creates a new ManagedZone. Note: While `dns.managedZones.create` is the baseline permission required to invoke this method, additional permissions are required if the managed zone configuration references other resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.delete()`

Deletes a previously created ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |

#### `managedZones.update()`

Updates an existing ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.list()`

Enumerates ManagedZones that have been created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.dnsName` | `string` | No | Restricts the list to return only zones with this domain name. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |

#### `managedZones.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `managedZones.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `locations`

#### `locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |

#### `locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `changes`

#### `changes.list()`

Enumerates Changes to a ResourceRecordSet collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.sortBy` | `string` | No | Sorting criterion. The only supported value is change sequence. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.sortOrder` | `string` | No | Sorting order direction: 'ascending' or 'descending'. |

#### `changes.get()`

Fetches the representation of an existing Change.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.changeId` | `string` | Yes | The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |

#### `changes.create()`

Atomically updates the ResourceRecordSet collection. Note: While `dns.changes.create` is the baseline permission required to invoke this method, additional permissions are checked depending on the specific additions or deletions contained in the payload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.requestBody` | `object` | Yes | The request body. |

### `resourceRecordSets`

#### `resourceRecordSets.get()`

Fetches the representation of an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.type` | `string` | Yes | RRSet type. |

#### `resourceRecordSets.list()`

Enumerates ResourceRecordSets that you have created but not yet deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Specify a fully qualified domain name to view only those records. The `name` parameter is not supported and must be omitted when you use `filter`. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.pageToken` | `string` | No | Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.maxResults` | `integer` | No | Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return. |
| `params.type` | `string` | No | Specify a record type to view only those records. You must also specify the `name` parameter. The `type` parameter is not supported and must be omitted when you use `filter`. |
| `params.filter` | `string` | No | Specify a filter expression to view records that exactly match the specified domain. Both the `name` and `type` parameters are not supported and must be omitted when you use `filter`. Your `filter` expression must conform to AIP-160 and you must specify a domain in the `name` field. Optionally, you can include the `type` field to filter records by type. You can also include the `has_suffix` function to view records that match by domain suffix. Examples: * `name`="example.com." * `name`="example.com." AND type="A" * `name`=`has_suffix`("example.com.") * `name`=`has_suffix`("example.com.") AND type="A" |

#### `resourceRecordSets.create()`

Creates a new ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resourceRecordSets.delete()`

Deletes a previously created ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |

#### `resourceRecordSets.patch()`

Applies a partial update to an existing ResourceRecordSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Identifies the project addressed by this request. |
| `params.name` | `string` | Yes | Fully qualified domain name. |
| `params.clientOperationId` | `string` | No | For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection. |
| `params.managedZone` | `string` | Yes | Identifies the managed zone addressed by this request. Can be the managed zone name or ID. |
| `params.type` | `string` | Yes | RRSet type. |
| `params.requestBody` | `object` | Yes | The request body. |