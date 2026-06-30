# Cloud Number Registry API - Apps Script Client Library

Auto-generated client library for using the **Cloud Number Registry API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Jun 2026 23:35:06 GMT
- **Last Modified:** Tue, 30 Jun 2026 23:35:06 GMT
- **Created:** Sun, 31 May 2026 23:33:41 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.filter` | `string` | No | The standard list filter. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.ipamAdminScopes`

#### `projects.locations.ipamAdminScopes.checkAvailability()`

Checks the availability of IpamAdminScopes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |
| `params.scopes` | `string` | No | Required. The administrative scopes to check for availability. |

#### `projects.locations.ipamAdminScopes.patch()`

Updates the parameters of a single IpamAdminScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the IpamAdminScope. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the IpamAdminScope resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ipamAdminScopes.delete()`

Deletes a single IpamAdminScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, all associated resources will be deleted. |
| `params.name` | `string` | Yes | Required. The resource name of the IpamAdminScope to delete. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.ipamAdminScopes.disable()`

Disables a single IpamAdminScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IpamAdminScope to disable. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ipamAdminScopes.cleanup()`

Cleans up a single IpamAdminScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IpamAdminScope to clean up. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ipamAdminScopes.get()`

Gets details of a single IpamAdminScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IpamAdminScope to retrieve. |

#### `projects.locations.ipamAdminScopes.create()`

Creates a new IpamAdminScope in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the IpamAdminScope will be created. |
| `params.ipamAdminScopeId` | `string` | No | Required. The ID to use for the IpamAdminScope, which will become the final segment of the resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ipamAdminScopes.list()`

Lists IpamAdminScopes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.filter` | `string` | No | Optional. Filter expression to filter the results. |
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |

### `projects.locations.registryBooks`

#### `projects.locations.registryBooks.delete()`

Deletes a single RegistryBook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, all associated resources will be deleted. |
| `params.name` | `string` | Yes | Required. The resource name of the RegistryBook to delete. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.registryBooks.patch()`

Updates the parameters of a single RegistryBook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the RegistryBook. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the RegistryBook resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.registryBooks.list()`

Lists RegistryBooks in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |
| `params.view` | `string` | No | Optional. The view of the RegistryBook to retrieve. |
| `params.filter` | `string` | No | Optional. Filter expression to filter the results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.registryBooks.searchIpResources()`

Searches IP resources in a given RegistryBook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the RegistryBook to search in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.registryBooks.create()`

Creates a new RegistryBook in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the RegistryBook will be created. |
| `params.registryBookId` | `string` | No | Required. The ID to use for the RegistryBook, which will become the final segment of the resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.registryBooks.get()`

Gets details of a single RegistryBook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the RegistryBook to retrieve. |
| `params.view` | `string` | No | Optional. The view of the RegistryBook to retrieve. |

### `projects.locations.customRanges`

#### `projects.locations.customRanges.findFreeIpRanges()`

Finds free IP ranges in a single CustomRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CustomRange to search within. |
| `params.cidrPrefixLength` | `integer` | No | Required. The prefix length of the free IP ranges to find. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.rangeCount` | `integer` | No | Optional. The number of free IP ranges to find. |

#### `projects.locations.customRanges.patch()`

Updates the parameters of a single CustomRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the CustomRange, in the format `projects/{project}/locations/{location}/customRanges/{custom_range}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the CustomRange resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.customRanges.showUtilization()`

Gets the details of a single CustomRange and its utilization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CustomRange. |

#### `projects.locations.customRanges.delete()`

Deletes a single CustomRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, all associated resources will be deleted. |
| `params.name` | `string` | Yes | Required. The resource name of the CustomRange to delete. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.customRanges.get()`

Gets details of a single CustomRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CustomRange to retrieve. |

#### `projects.locations.customRanges.create()`

Creates a new CustomRange in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the CustomRange will be created. |
| `params.customRangeId` | `string` | No | Required. The ID to use for the CustomRange, which will become the final segment of the resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.customRanges.list()`

Lists CustomRanges in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |
| `params.filter` | `string` | No | Optional. Filter expression to filter the results. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.discoveredRanges`

#### `projects.locations.discoveredRanges.get()`

Gets details of a single DiscoveredRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DiscoveredRange to retrieve. |

#### `projects.locations.discoveredRanges.findFreeIpRanges()`

Finds free IP ranges in a single DiscoveredRange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DiscoveredRange to search within. |
| `params.cidrPrefixLength` | `integer` | No | Required. The prefix length of the free IP ranges to find. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.rangeCount` | `integer` | No | Optional. The number of free IP ranges to find. |

#### `projects.locations.discoveredRanges.showUtilization()`

Gets the details of a single DiscoveredRange and its utilization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the DiscoveredRange. |

#### `projects.locations.discoveredRanges.list()`

Lists DiscoveredRanges in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |
| `params.filter` | `string` | No | Optional. Filter expression to filter the results. |

### `projects.locations.realms`

#### `projects.locations.realms.delete()`

Deletes a single Realm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, all associated resources will be deleted. |
| `params.name` | `string` | Yes | Required. The resource name of the Realm to delete. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. |

#### `projects.locations.realms.patch()`

Updates the parameters of a single Realm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the Realm. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Realm resource by the update. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.realms.list()`

Lists Realms in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.parent` | `string` | Yes | Required. The parent resource name, for example `projects/*/locations/*`. |
| `params.view` | `string` | No | Optional. The view of the Realm to retrieve. |
| `params.filter` | `string` | No | Optional. Filter expression to filter the results. |

#### `projects.locations.realms.create()`

Creates a new Realm in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.realmId` | `string` | No | Required. The ID to use for the Realm, which will become the final segment of the resource name. |
| `params.parent` | `string` | Yes | Required. The parent resource name where the Realm will be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.realms.get()`

Gets details of a single Realm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Realm to retrieve. |
| `params.view` | `string` | No | Optional. The view of the Realm to retrieve. |