# Checks API - Apps Script Client Library

Auto-generated client library for using the **Checks API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:43 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:48 GMT
- **Created:** Sun, 20 Jul 2025 16:15:07 GMT



---

## API Reference

### `accounts`

### `accounts.apps`

#### `accounts.apps.get()`

Gets an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the app. Example: `accounts/123/apps/456` |

#### `accounts.apps.list()`

Lists the apps under the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account. Example: `accounts/123` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. The server may further constrain the maximum number of results returned in a single page. If unspecified, the server will decide the number of results to be returned. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListApps` call. Provide this to retrieve the subsequent page. |

### `accounts.apps.operations`

#### `accounts.apps.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `accounts.apps.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `accounts.apps.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `accounts.apps.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.apps.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.apps.reports`

#### `accounts.apps.reports.get()`

Gets a report. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,checks` will return the name and checks fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the report. Example: `accounts/123/apps/456/reports/789` |
| `params.checksFilter` | `string` | No | Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within the report. Only checks that match the filter string are included in the response. Example: `state = FAILED` |

#### `accounts.apps.reports.list()`

Lists reports for the specified app. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=reports(name,checks)` will return the name and checks fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the app. Example: `accounts/123/apps/456` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reports to return. If unspecified, at most 10 reports will be returned. The maximum value is 50; values above 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter reports. Example: `appBundle.releaseType = PRE_RELEASE` |
| `params.checksFilter` | `string` | No | Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within reports. Only checks that match the filter string are included in the response. Example: `state = FAILED` |

### `accounts.repos`

### `accounts.repos.operations`

#### `accounts.repos.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `accounts.repos.scans`

#### `accounts.repos.scans.generate()`

Uploads the results of local Code Compliance analysis and generates a scan of privacy issues. Returns a google.longrunning.Operation containing analysis and findings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the repo. Example: `accounts/123/repos/456` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.repos.scans.get()`

Gets a repo scan. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,sources` will return the name and sources fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the repo scan. Example: `accounts/123/repos/456/scans/789` |

#### `accounts.repos.scans.list()`

Lists repo scans for the specified repo.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the repo. Example: `accounts/123/repos/456` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of repo scans to return. If unspecified, at most 10 repo scans will be returned. The maximum value is 50; values above 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListRepoScans` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepoScans` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter repo scans. Example: `scmMetadata.branch = main` |

### `aisafety`

#### `aisafety.classifyContent()`

Analyze a piece of content with the provided set of policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `media`

#### `media.upload()`

Analyzes the uploaded app bundle and returns a google.longrunning.Operation containing the generated Report. ## Example (upload only) Send a regular POST request with the header `X-Goog-Upload-Protocol: raw`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/*/apps/*}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: raw Content-Length: Content-Type: application/octet-stream ``` ## Example (upload with metadata) Send a multipart POST request where the first body part contains the metadata JSON and the second body part contains the binary upload. Include the header `X-Goog-Upload-Protocol: multipart`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/*/apps/*}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: multipart Content-Length: ? Content-Type: multipart/related; boundary=BOUNDARY --BOUNDARY Content-Type: application/json {"code_reference_id":"db5bcc20f94055fb5bc08cbb9b0e7a5530308786"} --BOUNDARY --BOUNDARY-- ``` *Note:* Metadata-only requests are not supported. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the app. Example: `accounts/123/apps/456` |
| `params.resource` | `object` | Yes | The request body. |