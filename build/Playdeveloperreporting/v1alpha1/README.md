# Google Play Developer Reporting API - Apps Script Client Library

Auto-generated client library for using the **Google Play Developer Reporting API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:46:22 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:36:04 GMT
- **Created:** Sun, 20 Jul 2025 16:45:19 GMT



---

## API Reference

### `anomalies`

#### `anomalies.list()`

Lists anomalies in any of the datasets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent app for which anomalies were detected. Format: apps/{app} |
| `params.filter` | `string` | No | Filtering criteria for anomalies. For basic filter guidance, please check: https://google.aip.dev/160. **Supported functions:** * `activeBetween(startTime, endTime)`: If specified, only list anomalies that were active in between `startTime` (inclusive) and `endTime` (exclusive). Both parameters are expected to conform to an RFC-3339 formatted string (e.g. `2012-04-21T11:30:00-04:00`). UTC offsets are supported. Both `startTime` and `endTime` accept the special value `UNBOUNDED`, to signify intervals with no lower or upper bound, respectively. Examples: * `activeBetween("2021-04-21T11:30:00Z", "2021-07-21T00:00:00Z")` * `activeBetween(UNBOUNDED, "2021-11-21T00:00:00-04:00")` * `activeBetween("2021-07-21T00:00:00-04:00", UNBOUNDED)` |
| `params.pageSize` | `integer` | No | Maximum size of the returned data. If unspecified, at most 10 anomalies will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListErrorReports` must match the call that provided the page token. |

### `vitals`

### `vitals.crashrate`

#### `vitals.crashrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/crashRateMetricSet |

#### `vitals.crashrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/crashRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.anrrate`

#### `vitals.anrrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/anrRateMetricSet |

#### `vitals.anrrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/anrRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.lmkrate`

#### `vitals.lmkrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/lmkRateMetricSet |

#### `vitals.lmkrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/lmkRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.excessivewakeuprate`

#### `vitals.excessivewakeuprate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet |

#### `vitals.excessivewakeuprate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/excessiveWakeupRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.stuckbackgroundwakelockrate`

#### `vitals.stuckbackgroundwakelockrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet |

#### `vitals.stuckbackgroundwakelockrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.slowstartrate`

#### `vitals.slowstartrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/slowStartRateMetricSet |

#### `vitals.slowstartrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/slowStartRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.slowrenderingrate`

#### `vitals.slowrenderingrate.get()`

Describes the properties of the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/slowRenderingRateMetricSet |

#### `vitals.slowrenderingrate.query()`

Queries the metrics in the metric set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/slowRenderingRateMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `vitals.errors`

### `vitals.errors.reports`

#### `vitals.errors.reports.search()`

Searches all error reports received for an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app} |
| `params.interval.startTime.year` | `integer` | No | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. |
| `params.interval.startTime.month` | `integer` | No | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. |
| `params.interval.startTime.day` | `integer` | No | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. |
| `params.interval.startTime.hours` | `integer` | No | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `params.interval.startTime.minutes` | `integer` | No | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. |
| `params.interval.startTime.seconds` | `integer` | No | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. |
| `params.interval.startTime.nanos` | `integer` | No | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. |
| `params.interval.startTime.utcOffset` | `string` | No | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. |
| `params.interval.startTime.timeZone.id` | `string` | No | IANA Time Zone Database time zone. For example "America/New_York". |
| `params.interval.startTime.timeZone.version` | `string` | No | Optional. IANA Time Zone Database version number. For example "2019a". |
| `params.interval.endTime.year` | `integer` | No | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. |
| `params.interval.endTime.month` | `integer` | No | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. |
| `params.interval.endTime.day` | `integer` | No | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. |
| `params.interval.endTime.hours` | `integer` | No | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `params.interval.endTime.minutes` | `integer` | No | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. |
| `params.interval.endTime.seconds` | `integer` | No | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. |
| `params.interval.endTime.nanos` | `integer` | No | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. |
| `params.interval.endTime.utcOffset` | `string` | No | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. |
| `params.interval.endTime.timeZone.id` | `string` | No | IANA Time Zone Database time zone. For example "America/New_York". |
| `params.interval.endTime.timeZone.version` | `string` | No | Optional. IANA Time Zone Database version number. For example "2019a". |
| `params.pageSize` | `integer` | No | The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token. |
| `params.filter` | `string` | No | A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `CRASH`, `ANR`, `NON_FATAL`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `errorReportId`: Matches error reports with the requested error report id. Example: `errorReportId = 1234 OR errorReportId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)` |

### `vitals.errors.issues`

#### `vitals.errors.issues.search()`

Searches all error issues in which reports have been grouped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app} |
| `params.interval.startTime.year` | `integer` | No | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. |
| `params.interval.startTime.month` | `integer` | No | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. |
| `params.interval.startTime.day` | `integer` | No | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. |
| `params.interval.startTime.hours` | `integer` | No | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `params.interval.startTime.minutes` | `integer` | No | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. |
| `params.interval.startTime.seconds` | `integer` | No | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. |
| `params.interval.startTime.nanos` | `integer` | No | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. |
| `params.interval.startTime.utcOffset` | `string` | No | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. |
| `params.interval.startTime.timeZone.id` | `string` | No | IANA Time Zone Database time zone. For example "America/New_York". |
| `params.interval.startTime.timeZone.version` | `string` | No | Optional. IANA Time Zone Database version number. For example "2019a". |
| `params.interval.endTime.year` | `integer` | No | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. |
| `params.interval.endTime.month` | `integer` | No | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. |
| `params.interval.endTime.day` | `integer` | No | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. |
| `params.interval.endTime.hours` | `integer` | No | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `params.interval.endTime.minutes` | `integer` | No | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. |
| `params.interval.endTime.seconds` | `integer` | No | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. |
| `params.interval.endTime.nanos` | `integer` | No | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. |
| `params.interval.endTime.utcOffset` | `string` | No | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. |
| `params.interval.endTime.timeZone.id` | `string` | No | IANA Time Zone Database time zone. For example "America/New_York". |
| `params.interval.endTime.timeZone.version` | `string` | No | Optional. IANA Time Zone Database version number. For example "2019a". |
| `params.pageSize` | `integer` | No | The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. |
| `params.filter` | `string` | No | A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = "google/walleye" OR deviceModel = "google/marlin"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = "Google". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = "PHONE"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`, `NON_FATAL`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)` |
| `params.orderBy` | `string` | No | Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time. |
| `params.sampleErrorReportLimit` | `integer` | No | Optional. Number of sample error reports to return per ErrorIssue. If unspecified, 0 will be used. *Note:* currently only 0 and 1 are supported. |

### `vitals.errors.counts`

#### `vitals.errors.counts.get()`

Describes the properties of the metrics set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the errors metric set. Format: apps/{app}/errorCountMetricSet |

#### `vitals.errors.counts.query()`

Queries the metrics in the metrics set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. Format: apps/{app}/errorCountMetricSet |
| `params.resource` | `object` | Yes | The request body. |

### `apps`

#### `apps.fetchReleaseFilterOptions()`

Describes filtering options for releases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource, i.e. app the filtering options are for. Format: apps/{app} |

#### `apps.search()`

Searches for Apps accessible by the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of apps to return. The service may return fewer than this value. If unspecified, at most 50 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `SearchAccessibleApps` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchAccessibleApps` must match the call that provided the page token. |