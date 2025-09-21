# Cloud Testing API - Apps Script Client Library

Auto-generated client library for using the **Cloud Testing API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:56:02 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:53:30 GMT
- **Created:** Sun, 20 Jul 2025 16:55:39 GMT



---

## API Reference

### `projects`

### `projects.testMatrices`

#### `projects.testMatrices.create()`

Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The GCE project under which this job will run. |
| `params.requestId` | `string` | No | A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.testMatrices.get()`

Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Cloud project that owns the test matrix. |
| `params.testMatrixId` | `string` | Yes | Unique test matrix id which was assigned by the service. |

#### `projects.testMatrices.cancel()`

Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Cloud project that owns the test. |
| `params.testMatrixId` | `string` | Yes | Test matrix that will be canceled. |

### `projects.deviceSessions`

#### `projects.deviceSessions.create()`

POST /v1/projects/{project_id}/deviceSessions

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Compute Engine project under which this device will be allocated. "projects/{project_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.deviceSessions.list()`

GET /v1/projects/{project_id}/deviceSessions Lists device Sessions owned by the project user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent to request, e.g. "projects/{project_id}" |
| `params.pageSize` | `integer` | No | Optional. The maximum number of DeviceSessions to return. |
| `params.pageToken` | `string` | No | Optional. A continuation token for paging. |
| `params.filter` | `string` | No | Optional. If specified, responses will be filtered by the given filter. Allowed fields are: session_state. |

#### `projects.deviceSessions.get()`

GET /v1/projects/{project_id}/deviceSessions/{device_session_id} Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" |

#### `projects.deviceSessions.cancel()`

POST /v1/projects/{project_id}/deviceSessions/{device_session_id}:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.deviceSessions.patch()`

PATCH /v1/projects/{projectId}/deviceSessions/deviceSessionId}:updateDeviceSession Updates the current device session to the fields described by the update_mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}" |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `applicationDetailService`

#### `applicationDetailService.getApkDetails()`

Gets the details of an Android application APK.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bundleLocation.gcsPath` | `string` | No | A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) |
| `params.resource` | `object` | Yes | The request body. |

### `testEnvironmentCatalog`

#### `testEnvironmentCatalog.get()`

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environmentType` | `string` | Yes | Required. The type of environment that should be listed. |
| `params.projectId` | `string` | No | For authorization, the cloud project requesting the TestEnvironmentCatalog. |
| `params.includeViewableModels` | `boolean` | No | Optional. Whether to include viewable only models in the response. This is only applicable for Android models. |