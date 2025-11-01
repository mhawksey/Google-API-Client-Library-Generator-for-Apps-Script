# Firebase App Distribution API - Apps Script Client Library

Auto-generated client library for using the **Firebase App Distribution API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:45:14 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:45:14 GMT
- **Created:** Sun, 20 Jul 2025 16:33:13 GMT



---

## API Reference

### `apps`

#### `apps.getJwt()`

Get a JWT token

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |

#### `apps.get()`

Get the app, if it exists

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.appView` | `string` | No | App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set. |

### `apps.release_by_hash`

#### `apps.release_by_hash.get()`

GET Release by binary upload hash

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.uploadHash` | `string` | Yes | Required. The hash for the upload |
| `params.mobilesdkAppId` | `string` | Yes | Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |

### `apps.upload_status`

#### `apps.upload_status.get()`

GET Binary upload status by token

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.uploadToken` | `string` | Yes | Required. The token for the upload |

### `apps.releases`

#### `apps.releases.enable_access()`

Enable access on a release for testers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.releaseId` | `string` | Yes | Required. Release identifier |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps.releases.notes`

#### `apps.releases.notes.create()`

Create release notes on a release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.releaseId` | `string` | Yes | Required. Release identifier |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps.testers`

#### `apps.testers.getTesterUdids()`

Get UDIDs of tester iOS devices in a project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | Yes | Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.project` | `string` | No | The name of the project, which is the parent of testers Format: `projects/{project_number}` |

### `projects`

#### `projects.getTestQuota()`

Get information about the quota for `ReleaseTests`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `TestQuota` resource to retrieve. Format: `projects/{project_number}/testQuota` |

### `projects.testers`

#### `projects.testers.getUdids()`

Get UDIDs of tester iOS devices in a project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mobilesdkAppId` | `string` | No | Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289 |
| `params.project` | `string` | Yes | The name of the project, which is the parent of testers Format: `projects/{project_number}` |

### `projects.apps`

#### `projects.apps.getTestConfig()`

Gets configuration for automated tests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `TestConfig` resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/testConfig` |

#### `projects.apps.updateTestConfig()`

Updates automated test configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.releases`

### `projects.apps.releases.tests`

#### `projects.apps.releases.tests.get()`

Get results for automated test run on release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}` |

#### `projects.apps.releases.tests.cancel()`

Abort automated test run on release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}` |

#### `projects.apps.releases.tests.list()`

List results for automated tests run on release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page. |
| `params.parent` | `string` | Yes | Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of tests to return. The service may return fewer than this value. |
| `params.view` | `string` | No | Optional. The requested view on the returned ReleaseTests. Defaults to the basic view. |

#### `projects.apps.releases.tests.create()`

Run automated test(s) on release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` |
| `params.releaseTestId` | `string` | No | Optional. The ID to use for the test, which will become the final component of the test's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.testCases`

#### `projects.apps.testCases.clearTestCaseCache()`

Clears cached test runs for a specific test case and device(s).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.testCase` | `string` | Yes | Required. The name of the test case resource for which to clear the cache. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.testCases.batchDelete()`

Deletes multiple test cases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the test cases being deleted. Format: `projects/{project_number}/apps/{app_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.testCases.list()`

List test cases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource from which to list test cases. Format: `projects/{project_number}/apps/{app_id}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 50 test cases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token. |

#### `projects.apps.testCases.create()`

Create a new test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.testCaseId` | `string` | No | Optional. The ID to use for the test case, which will become the final component of the test case's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.parent` | `string` | Yes | Required. The parent resource where this test case will be created. Format: `projects/{project_number}/apps/{app_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.testCases.delete()`

Delete a test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the test case resource to delete. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}` |

#### `projects.apps.testCases.batchUpdate()`

Updates multiple test cases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the test cases being updated. Format: `projects/{project_number}/apps/{app_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.testCases.patch()`

Update a test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the test case resource. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}` |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the test case is not found, a new test case will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.testCases.get()`

Get a test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the test case resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}` |