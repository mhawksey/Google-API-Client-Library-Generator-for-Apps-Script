# Firebase Rules API - Apps Script Client Library

Auto-generated client library for using the **Firebase Rules API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:25:37 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:25:37 GMT
- **Created:** Sun, 20 Jul 2025 16:33:48 GMT



---

## API Reference

### `projects`

#### `projects.test()`

Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Tests may either provide `source` or a `Ruleset` resource name. For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}` For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.rulesets`

#### `projects.rulesets.create()`

Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for Project which owns this `Ruleset`. Format: `projects/{project_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.rulesets.get()`

Get a `Ruleset` by name including the full `Source` contents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the ruleset to get. Format: `projects/{project_id}/rulesets/{ruleset_id}` |

#### `projects.rulesets.list()`

List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the project. Format: `projects/{project_id}` |
| `params.filter` | `string` | No | Optional. `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`. Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications. Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*` |
| `params.pageSize` | `integer` | No | Optional. Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty. |
| `params.pageToken` | `string` | No | Optional. Next page token for loading the next batch of `Ruleset` instances. |

#### `projects.rulesets.delete()`

Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the ruleset to delete. Format: `projects/{project_id}/rulesets/{ruleset_id}` |

### `projects.releases`

#### `projects.releases.create()`

Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name

* projects/foo/releases/prod -> projects/foo/rulesets/uuid123

* projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123

* projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.releases.patch()`

Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.releases.get()`

Get a `Release` by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}` |

#### `projects.releases.list()`

List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the project. Format: `projects/{project_id}` |
| `params.filter` | `string` | No | Optional. `Release` filter. The list method supports filters with restrictions on the `Release.name`, and `Release.ruleset_name`. Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v2 -> projects/foo/rulesets/uuid8888 Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/1234 In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used. |
| `params.pageSize` | `integer` | No | Optional. Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty. |
| `params.pageToken` | `string` | No | Optional. Next page token for the next batch of `Release` instances. |

#### `projects.releases.delete()`

Delete a `Release` by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for the `Release` to delete. Format: `projects/{project_id}/releases/{release_id}` |

#### `projects.releases.getExecutable()`

Get the `Release` executable to use when enforcing rules.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}` |
| `params.executableVersion` | `string` | No | Optional. The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1. |