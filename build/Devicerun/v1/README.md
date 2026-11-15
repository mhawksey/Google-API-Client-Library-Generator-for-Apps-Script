# Device Run API - Apps Script Client Library

Auto-generated client library for using the **Device Run API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:07:42 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:07:42 GMT
- **Created:** Sun, 15 Nov 2026 16:07:42 GMT



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
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.devices`

#### `projects.locations.devices.get()`

Returns information about a specific device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device. Format: `projects/{project}/locations/global/devices/{device}`. |

#### `projects.locations.devices.list()`

Lists all devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDevices` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent of the collection of devices. Format: `projects/{project}/locations/global`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of devices to return. The server may return fewer items than this value. |
| `params.filter` | `string` | No | Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which devices are returned. An empty filter returns all devices. Filtering is supported over the `Device` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `platform = "ANDROID"` * `platform = "ANDROID" AND os_version = "34"` * `hardware_type = "PHYSICAL" AND form_factor = "PHONE"` * `android_details.build_type = "userdebug"` * `availability.capacity = "HIGH"` |

### `projects.locations.softwareVersions`

#### `projects.locations.softwareVersions.get()`

Returns information about a specific software version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the software version. Format: `projects/{project}/locations/global/softwareVersions/{software_version}`. |

#### `projects.locations.softwareVersions.list()`

Lists all software versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which software versions are returned. An empty filter returns all software versions. Filtering is supported over the `SoftwareVersion` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `software_type = "ANDROIDX_TEST_ORCHESTRATOR"` * `software_type = "ANDROIDX_TEST_ORCHESTRATOR" AND is_default = true` * `lifecycle.state = "ACTIVE"` * `version = "1.4.1"` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSoftwareVersions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSoftwareVersions` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of software versions to return. The server may return fewer items than this value. |
| `params.parent` | `string` | Yes | Required. The parent of the collection of software versions. Format: `projects/{project}/locations/global`. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |