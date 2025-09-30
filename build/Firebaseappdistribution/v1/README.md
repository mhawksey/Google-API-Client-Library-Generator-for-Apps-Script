# Firebase App Distribution API - Apps Script Client Library

Auto-generated client library for using the **Firebase App Distribution API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:35:25 GMT
- **Last Modified:** Tue, 30 Sep 2025 23:35:25 GMT
- **Created:** Sun, 20 Jul 2025 16:33:16 GMT



---

## API Reference

### `projects`

### `projects.apps`

#### `projects.apps.getAabInfo()`

Gets Android App Bundle (AAB) information for a Firebase app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `AabInfo` resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/aabInfo` |

### `projects.apps.releases`

#### `projects.apps.releases.get()`

Gets a release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the release resource to retrieve. Format: projects/{project_number}/apps/{app_id}/releases/{release_id} |

#### `projects.apps.releases.list()`

Lists releases. By default, sorts by `createTime` in descending order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of releases to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 releases are returned. Values above 100 are coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleases` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The fields used to order releases. Supported fields: - `createTime` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order. |
| `params.filter` | `string` | No | Optional. The expression to filter releases listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `releaseNotes.text` supports `=` (can contain a wildcard character (`*`) at the beginning or end of the string) - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Examples: - `createTime <= "2021-09-08T00:00:00+04:00"` - `releaseNotes.text="fixes" AND createTime >= "2021-09-08T00:00:00.0Z"` - `releaseNotes.text="*v1.0.0-rc*"` |

#### `projects.apps.releases.patch()`

Updates a release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.releases.distribute()`

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the release resource to distribute. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.releases.batchDelete()`

Deletes releases. A maximum of 100 releases can be deleted per request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.releases.operations`

#### `projects.apps.releases.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.apps.releases.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.apps.releases.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.apps.releases.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.releases.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.releases.feedbackReports`

#### `projects.apps.releases.feedbackReports.get()`

Gets a feedback report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback report to retrieve. Format: projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report} |

#### `projects.apps.releases.feedbackReports.list()`

Lists feedback reports. By default, sorts by `createTime` in descending order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the release resource, which is the parent of the feedback report resources. Format: `projects/{project_number}/apps/{app}/releases/{release}` |
| `params.pageSize` | `integer` | No | Output only. The maximum number of feedback reports to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 feedback reports are returned. Values above 100 are coerced to 100. |
| `params.pageToken` | `string` | No | Output only. A page token, received from a previous `ListFeedbackReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFeedbackReports` must match the call that provided the page token. |

#### `projects.apps.releases.feedbackReports.delete()`

Deletes a feedback report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback report to delete. Format: projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report} |

### `projects.testers`

#### `projects.testers.batchAdd()`

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project resource. Format: `projects/{project_number}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.testers.batchRemove()`

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project resource. Format: `projects/{project_number}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.testers.list()`

Lists testers and their resource ids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project resource, which is the parent of the tester resources. Format: `projects/{project_number}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of testers to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 10 testers are returned. Values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTesters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTesters` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The expression to filter testers listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `name` - `displayName` - `groups` Example: - `name = "projects/-/testers/*@example.com"` - `displayName = "Joe Sixpack"` - `groups = "projects/*/groups/qa-team"` |

#### `projects.testers.patch()`

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.groups`

#### `projects.groups.get()`

Get a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the group resource to retrieve. Format: `projects/{project_number}/groups/{group_alias}` |

#### `projects.groups.list()`

List groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 25 groups are returned. Values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token. |

#### `projects.groups.create()`

Create a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project resource, which is the parent of the group resource. Format: `projects/{project_number}` |
| `params.groupId` | `string` | No | Optional. The "alias" to use for the group, which will become the final component of the group's resource name. This value must be unique per project. The field is named `groupId` to comply with AIP guidance for user-specified IDs. This value should be 4-63 characters, and valid characters are `/a-z-/`. If not set, it will be generated based on the display name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.groups.patch()`

Update a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.groups.delete()`

Delete a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}` |

#### `projects.groups.batchJoin()`

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.group` | `string` | Yes | Required. The name of the group resource to which testers are added. Format: `projects/{project_number}/groups/{group_alias}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.groups.batchLeave()`

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.group` | `string` | Yes | Required. The name of the group resource from which testers are removed. Format: `projects/{project_number}/groups/{group_alias}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `media`

#### `media.upload()`

Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The name of the app resource. Format: `projects/{project_number}/apps/{app_id}` |
| `params.requestBody` | `object` | Yes | The request body. |