# Firebase Crashlytics API - Apps Script Client Library

Auto-generated client library for using the **Firebase Crashlytics API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:18:38 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:18:38 GMT
- **Created:** Sun, 15 Nov 2026 16:18:38 GMT



---

## API Reference

### `projects`

### `projects.apps`

#### `projects.apps.getProfilingManagerConfig()`

Retrieves the Android Profiling Manager configuration for an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Profiling Manager configuration to retrieve. Format: "projects/{project}/apps/{app}/profilingManagerConfig". |

#### `projects.apps.updateProfilingManagerConfig()`

Updates the Android Profiling Manager configuration for an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Profiling Manager configuration. Format: "projects/{project}/apps/{app}/profilingManagerConfig". |
| `params.updateMask` | `string` | No | Optional. The list of ProfilingManagerConfig fields to update (`gcs_bucket`, `heap_dump_collection_enabled`). If omitted, all populated (non-default) fields are updated; specify an explicit `update_mask` (or `*`) when clearing a field to its default value (such as `""` or `false`). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.generateAlertPolicy()`

Creates a Cloud Monitoring AlertPolicy for the requested Crashlytics Web alert type and returns the created resource reference.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The firebase application. Format: "projects/{project}/apps/{app_id}". |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.events`

#### `projects.apps.events.list()`

List the events for an issue matching filter criteria, sorted in descending order by timestamp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter.issue.signals` | `string` | No | Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal]. |
| `params.filter.issue.state` | `string` | No | Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports. |
| `params.filter.issue.variantId` | `string` | No | Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id]. |
| `params.filterExpression` | `string` | No | Optional. Filters events by custom keys (https://firebase.google.com/docs/crashlytics/customize-crash-reports#add-keys). Supported forms: * Equality: `custom_keys.level = "vip"` * Has: `custom_keys.level:"vip"` (matches the same events as equality) * Presence: `custom_keys.level:*` * OR across values of one key: `custom_keys.level = "vip" OR custom_keys.level = "enterprise"` * AND across different keys: `custom_keys.level = "vip" AND custom_keys.region = "us"` Keys are case-sensitive. Keys and values containing spaces must be double-quoted, for example `custom_keys."app state" = "background"`. OR across different keys, repeating a key within an AND, NOT, and comparators other than `=` and `:` are rejected with INVALID_ARGUMENT. Wildcards are not supported in values; use `custom_keys.:*` to match events that set a key to any value. This filter expression applies in addition to the `filter` field above. The syntax is a subset of AIP-160 (https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of events per page. If omitted, defaults to 10. |
| `params.filter.device.formFactors` | `string` | No | Only counts events from devices with the given form factor (e.g. phone or tablet). |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous calls. |
| `params.parent` | `string` | Yes | Required. The Firebase application. Format: "projects/{project}/apps/{app_id}". |
| `params.filter.issue.errorTypes` | `string` | No | Optional. Only counts events of the given error types. This field matches [Issue.error_type]. |
| `params.filter.browser.displayNames` | `string` | No | Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome". |
| `params.filter.issue.id` | `string` | No | Optional. Only counts events in the given issue ID. This field matches [Issue.id]. |
| `params.readMask` | `string` | No | Optional. The list of Event fields to include in the response. If omitted, the full event is returned. |
| `params.filter.interval.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.filter.operatingSystem.displayNames` | `string` | No | Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS". |
| `params.filter.device.displayNames` | `string` | No | Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering. |
| `params.filter.interval.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.filter.version.displayNames` | `string` | No | Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)". |
| `params.filter.issue.content` | `string` | No | Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar"). |
| `params.filter.issue.states` | `string` | No | Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports. |

#### `projects.apps.events.batchGet()`

Fetch a batch of up to 100 events by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readMask` | `string` | No | Optional. The list of Event fields to include in the response. If omitted, the full event is returned. |
| `params.names` | `string` | No | Required. The resource names of the desired events. A maximum of 100 events can be retrieved in a batch. Format: "projects/{project}/apps/{app_id}/events/{event_id}". The app_id and event_id are required, but project may be "-" to conserve space in long URIs. |
| `params.parent` | `string` | Yes | Required. The firebase application. Format: "projects/{project}/apps/{app_id}". |

### `projects.apps.reports`

#### `projects.apps.reports.get()`

Get a report with its computed results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter.issue.content` | `string` | No | Optional. A space separated list of filter terms matched against the contents of the issue. Contents include the title and the stack trace. Matches must begin at alphanumeric tokens, i.e., 'util.Sorted' matches 'java.util.SortedSet' but not 'myutil.SortedArray'. The filter matches if all filter terms match. All non-alphanumeric characters are ignored for matching. Filtering is assumed to be prefix-search and order-independent unless phrases are surrounded by "". Any terms contained in quotes are searched using exact-match (given filter term "foo", we will not return "foobar"), and must appear in the order given exactly. To get order-dependence but prefix-search, use a * within the quotes ("abc foo*" will match "abc foobar", but not "foo abc" "abcd foobar", or "abc xyz foobar"). |
| `params.filter.issue.state` | `string` | No | Optional. Deprecated: Prefer `states` field. Only includes events for issues with the given issue state. Only available for `topIssues` reports. |
| `params.view` | `string` | No | Optional. Response view. If not set, defaults to `REPORT_VIEW_FULL`. |
| `params.filter.issue.id` | `string` | No | Optional. Only counts events in the given issue ID. This field matches [Issue.id]. |
| `params.filter.device.formFactors` | `string` | No | Only counts events from devices with the given form factor (e.g. phone or tablet). |
| `params.filter.interval.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.name` | `string` | Yes | Required. The report name. Format: "projects/{project}/apps/{app_id}/reports/{report}". |
| `params.filter.issue.errorTypes` | `string` | No | Optional. Only counts events of the given error types. This field matches [Issue.error_type]. |
| `params.granularity` | `string` | No | Optional. The report response will contain one data point per time grain. If omitted, the report will contain a single data point for the complete interval. |
| `params.metricsMode` | `string` | No | Optional. Controls whether metrics are raw observed values (mobile and web) or extrapolated values (web only). If omitted, defaults to OBSERVED. |
| `params.filter.interval.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.filterExpression` | `string` | No | Optional. Filters the events counted in the report by custom keys. Not all reports support this filter. It is currently only supported for web apps; see the report's `usage` field for whether `filter_expression` is supported. Requests for other apps or unsupported reports that set this field are rejected with `INVALID_ARGUMENT`. Supported forms: * Equality: `custom_keys.level = "vip"` * Has: `custom_keys.level:"vip"` (matches the same events as equality) * Presence: `custom_keys.level:*` * OR across values of one key: `custom_keys.level = "vip" OR custom_keys.level = "enterprise"` * AND across different keys: `custom_keys.level = "vip" AND custom_keys.region = "us"` Keys are case-sensitive. Keys and values containing spaces must be double-quoted, for example `custom_keys."app state" = "background"`. OR across different keys, repeating a key within an AND, NOT, and comparators other than `=` and `:` are rejected with INVALID_ARGUMENT. Wildcards are not supported in values; use `custom_keys.:*` to match events that set a key to any value. This filter expression applies in addition to the `filter` field above. The syntax is a subset of AIP-160 (https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of result groups to return. The maximum value is 100; values above 100 will be coerced to 100. If omitted, defaults to 25. |
| `params.filter.browser.displayNames` | `string` | No | Optional. Only count events from the given browser. This string matches Browser.display_name. Format: "name (display_version)" e.g. "Chrome (123)", or just "name" for all possible versions, e.g. simply "Chrome". |
| `params.filter.operatingSystem.displayNames` | `string` | No | Only counts events in the given operating system and version. This string matches OperatingSystem.display_name. Format: "osName (osVersion)" e.g. "Android (11)". or just "osName" for all versions, e.g. simply "iPadOS". |
| `params.filter.version.displayNames` | `string` | No | Only counts events in the given app version. This string matches Version.display_name. Format: "display_version (build_version)" e.g. "1.2.3 (456)". |
| `params.filter.issue.states` | `string` | No | Optional. Only includes events for issues with the given issue states. Only available for `topIssues` reports. |
| `params.filter.issue.signals` | `string` | No | Optional. Only returns issues currently marked with the given signals. This field matches [Issue.signals.signal]. |
| `params.filter.device.displayNames` | `string` | No | Only counts events from the given Device model. This string matches Device.display_name. Format: "manufacturer (model)" e.g. "Google (Pixel 6)", or just "manufacturer" for all possible models, e.g. simply "Google". Note that a device's marketing_name field can not be used for filtering. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call. The page token is only valid for the exact same set of filters, which must also be sent in subsequent requests. This token is valid for 10 minutes after the first request. |
| `params.filter.issue.variantId` | `string` | No | Optional. Only counts events for the given issue variant ID. This field matches [IssueVariant.id]. |

#### `projects.apps.reports.list()`

List all of the available reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Optional. Response view. If not set, defaults to `REPORT_VIEW_BASIC`. `REPORT_VIEW_FULL` is not supported for list operations. |
| `params.parent` | `string` | Yes | Required. The firebase application. Format: "projects/{project}/apps/{app_id}". |

### `projects.apps.users`

#### `projects.apps.users.deleteCrashReports()`

Enqueues a request to permanently remove crash reports associated with the specified user. All reports belonging to the specified user will be deleted typically within 24 hours of receiving the crash report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for user reports, in the format: projects/ PROJECT_IDENTIFIER/apps/APP_ID/users/USER_ID/crashReports - PROJECT_IDENTIFIER: The Firebase project's project number (recommended) or its project ID. Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). - APP_ID: The globally unique, Firebase-assigned identifier for the Firebase App. This is not your package name or bundle ID. Learn how to [find your app ID](https://firebase.google.com/support/faq/#find-app-id). - USER_ID: The user ID set using the Crashlytics SDK. Learn how to [set user identifiers](https://firebase.google.com/docs/crashlytics/customize-crash-reports#set-user-ids). |

### `projects.apps.issues`

#### `projects.apps.issues.get()`

Retrieve an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the issue to retrieve. Format: "projects/{project}/apps/{app}/issues/{issue}". |

#### `projects.apps.issues.patch()`

Change the state of an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The list of Issue fields to update. Currently only "state" is mutable. |
| `params.name` | `string` | Yes | Required. Output only. Immutable. Identifier. The name of the issue resource. Format: "projects/{project}/apps/{app}/issues/{issue}". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.apps.issues.batchUpdate()`

Change the state of a group of issues. This method is not atomic, so partial failures can occur. In the event of a partial failure, the request will fail and you will need to call `GetIssue` to see which issues were not updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all issues being updated. Format: projects/{project}/apps/{app}. If this is set, the parent field in the UpdateIssueRequest messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.apps.issues.notes`

#### `projects.apps.issues.notes.list()`

List all notes for a certain issue, sorted in descending order by timestamp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of notes per page. If omitted, defaults to 10. |
| `params.parent` | `string` | Yes | Required. The issue the notes belongs to. Format: "projects/{project}/apps/{app}/issues/{issue}". |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous calls. |

#### `projects.apps.issues.notes.delete()`

Delete a note by its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note to delete. Format: projects/{project}/apps/{app}/issues/{issue}/notes/{note}. |

#### `projects.apps.issues.notes.create()`

Create a new note for an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this note will be created. Format: "projects/{project}/apps/{app}/issues/{issue}". |
| `params.requestBody` | `object` | Yes | The request body. |