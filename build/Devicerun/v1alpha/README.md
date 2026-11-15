# Device Run API - Apps Script Client Library

Auto-generated client library for using the **Device Run API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:07:34 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:07:34 GMT
- **Created:** Sun, 15 Nov 2026 16:07:34 GMT



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
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |

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
| `params.filter` | `string` | No | Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which devices are returned. An empty filter returns all devices. Filtering is supported over the `Device` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `platform = "ANDROID"` * `platform = "ANDROID" AND os_version = "34"` * `hardware_type = "PHYSICAL" AND form_factor = "PHONE"` * `android_details.build_type = "userdebug"` * `availability.capacity = "HIGH"` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of devices to return. The server may return fewer items than this value. |
| `params.parent` | `string` | Yes | Required. The parent of the collection of devices. Format: `projects/{project}/locations/global`. |

### `projects.locations.softwareVersions`

#### `projects.locations.softwareVersions.list()`

Lists all software versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the collection of software versions. Format: `projects/{project}/locations/global`. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSoftwareVersions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSoftwareVersions` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of software versions to return. The server may return fewer items than this value. |
| `params.filter` | `string` | No | Optional. An AIP-160 (https://google.aip.dev/160) filter expression restricting which software versions are returned. An empty filter returns all software versions. Filtering is supported over the `SoftwareVersion` fields, including nested fields via dot-path. Enum and string values must be double-quoted. Examples: * `software_type = "ANDROIDX_TEST_ORCHESTRATOR"` * `software_type = "ANDROIDX_TEST_ORCHESTRATOR" AND is_default = true` * `lifecycle.state = "ACTIVE"` * `version = "1.4.1"` |

#### `projects.locations.softwareVersions.get()`

Returns information about a specific software version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the software version. Format: `projects/{project}/locations/global/softwareVersions/{software_version}`. |

### `projects.locations.operations`

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

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |

### `projects.locations.sessions`

#### `projects.locations.sessions.cancel()`

Cancels an in-progress automation session. This RPC returns immediately and cancellation proceeds asynchronously. If the session is already finished, this RPC will have no effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session. Format: "projects/{project}/locations/{location}/sessions/{session}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessions.delete()`

Deletes a session. This RPC returns immediately and deletion proceeds asynchronously. It will cancel the session at first if it is still running.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session. Format: `projects/{project}/locations/{location}/sessions/{session}`. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided, i.e. if a request with the same `request_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details. |

#### `projects.locations.sessions.list()`

Lists previously created automation sessions. Sessions may still be in-progress, or may have finished successfully, or unsuccessfully.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListSessionsRequest The parent of the collection of sessions. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sessions to return. The server may return fewer items than this value. If unspecified, at most 500 sessions will be returned. The maximum value is 1000, values above will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSessions` call. Provide this to receive the subsequent page. When paginating, all other parameters provided to `ListSessions` must match the call that provided the page token. |
| `params.view` | `string` | No | Optional. The view of the sessions to return. If not set, the `FULL` view will be returned. |
| `params.filter` | `string` | No | Optional. The raw filter text to constrain the results. |
| `params.orderBy` | `string` | No | Optional. The order to sort results by. Supported values: `name`, `name desc`, `create_time`, `create_time desc`. Values must use the snake_case field name; `createTime` is not accepted. Ordering by `create_time` is not supported when listing across all locations (`locations/-`). If unspecified, results are returned in an unspecified order. |

#### `projects.locations.sessions.create()`

Starts an automation session with the specified configuration. This method returns a long-running `Operation`, awaiting the completion of all jobs in the session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this session will be created. Format: `projects/{project}/locations/{location}`. |
| `params.sessionId` | `string` | No | Optional. The ID to use for the session, which will become the final component of the resource name. If not provided, the server will generate a value for this field. To make the request idempotent when `request_id` is specified, callers must also provide `session_id` so that retries target the same resource name. When provided, this value must be between 4 and 63 characters, and match the following regex: ^a-z{2,61}[a-z0-9]$. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. This request is only idempotent if both `request_id` and `session_id` are provided. If a retry with the same `request_id` and `session_id` is received, then the previous result will be returned. The server will guarantee that for at least 60 minutes after the first request. If `request_id` is provided without `session_id`, the server generates a new `session_id` on each attempt, and retries with the same `request_id` will fail with `INVALID_ARGUMENT`. The value must be a UUID (e.g., 123e4567-e89b-12d3-a456-426655440000). See github.com/google/uuid for more details. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sessions.batchGet()`

Retrieves multiple automation sessions in a single batch request. Sessions are returned in the same order as the `names` in the request. If any of the requested sessions does not exist, the whole request fails with `NOT_FOUND` and no sessions are returned. When calling this method over HTTP/REST with a large number of `names`, the request URL may exceed the maximum URL length (about 16 KB) and be rejected. In that case, send a `POST` request to the same URL with the `X-HTTP-Method-Override: GET` header and pass the request parameters in a JSON (`application/json`) or form-encoded (`application/x-www-form-urlencoded`) body. See https://cloud.google.com/apis/docs/http#long_request_urls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.names` | `string` | No | Required. The names of the sessions to retrieve. A maximum of 500 sessions can be retrieved in a batch. Format: `projects/{project}/locations/{location}/sessions/{session}`. |
| `params.parent` | `string` | Yes | Required. The parent resource shared by all sessions being retrieved. Format: `projects/{project}/locations/{location}`. The `parent` field in the `BatchGetSessionsRequest` message must match the `parent` of all `Session` resource names in `names`. |

#### `projects.locations.sessions.get()`

Returns information about a previously created automation session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Optional. The view of the session to return. If not set, the `FULL` view will be returned. |
| `params.name` | `string` | Yes | Required. The name of the session. Format: `projects/{project}/locations/{location}/sessions/{session}`. |