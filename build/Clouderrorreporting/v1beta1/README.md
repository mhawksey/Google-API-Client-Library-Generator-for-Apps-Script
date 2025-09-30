# Error Reporting API - Apps Script Client Library

Auto-generated client library for using the **Error Reporting API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:24:54 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:12:44 GMT
- **Created:** Sun, 20 Jul 2025 16:21:40 GMT



---

## API Reference

### `projects`

#### `projects.deleteEvents()`

Deletes all error events of a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |

### `projects.groups`

#### `projects.groups.get()`

Get the specified group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupName` | `string` | Yes | Required. The group resource name. Written as either `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}`. Call groupStats.list to return a list of groups belonging to this project. Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/global/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |

#### `projects.groups.update()`

Replace the data for the specified group. Fails if the group does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The group resource name. Written as `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}` Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/us-central1/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.groupStats`

#### `projects.groupStats.list()`

Lists the specified groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). It may also include a location, such as `projects/{projectID}/locations/{location}` where `{location}` is a cloud region. Examples: `projects/my-project-123`, `projects/5551234`, `projects/my-project-123/locations/us-central1`, `projects/5551234/locations/us-central1`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. Use `-` as a wildcard to request group stats from all regions. |
| `params.groupId` | `string` | No | Optional. List all ErrorGroupStats with these IDs. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice). |
| `params.serviceFilter.service` | `string` | No | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). |
| `params.serviceFilter.version` | `string` | No | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). |
| `params.serviceFilter.resourceType` | `string` | No | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). |
| `params.timeRange.period` | `string` | No | Restricts the query to the specified time range. |
| `params.timedCountDuration` | `string` | No | Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned. |
| `params.alignment` | `string` | No | Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`. |
| `params.alignmentTime` | `string` | No | Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC. |
| `params.order` | `string` | No | Optional. The sort order in which the results are returned. Default is `COUNT_DESC`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return per response. Default is 20. |
| `params.pageToken` | `string` | No | Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request. |

### `projects.events`

#### `projects.events.list()`

Lists the specified events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |
| `params.groupId` | `string` | No | Required. The group for which events shall be returned. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). |
| `params.serviceFilter.service` | `string` | No | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). |
| `params.serviceFilter.version` | `string` | No | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). |
| `params.serviceFilter.resourceType` | `string` | No | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). |
| `params.timeRange.period` | `string` | No | Restricts the query to the specified time range. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return per response. |
| `params.pageToken` | `string` | No | Optional. A `next_page_token` provided by a previous response. |

#### `projects.events.report()`

Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a service built on Cloud Logging and can analyze log entries when all of the following are true:

* Customer-managed encryption keys (CMEK) are disabled on the log bucket.

* The log bucket satisfies one of the following:

* The log bucket is stored in the same project where the logs originated.

* The logs were routed to a project, and then that project stored those logs in a log bucket that it owns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.deleteEvents()`

Deletes all error events of a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |

### `projects.locations.groups`

#### `projects.locations.groups.get()`

Get the specified group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupName` | `string` | Yes | Required. The group resource name. Written as either `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}`. Call groupStats.list to return a list of groups belonging to this project. Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/global/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |

#### `projects.locations.groups.update()`

Replace the data for the specified group. Fails if the group does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The group resource name. Written as `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}` Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/us-central1/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.groupStats`

#### `projects.locations.groupStats.list()`

Lists the specified groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). It may also include a location, such as `projects/{projectID}/locations/{location}` where `{location}` is a cloud region. Examples: `projects/my-project-123`, `projects/5551234`, `projects/my-project-123/locations/us-central1`, `projects/5551234/locations/us-central1`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. Use `-` as a wildcard to request group stats from all regions. |
| `params.groupId` | `string` | No | Optional. List all ErrorGroupStats with these IDs. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice). |
| `params.serviceFilter.service` | `string` | No | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). |
| `params.serviceFilter.version` | `string` | No | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). |
| `params.serviceFilter.resourceType` | `string` | No | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). |
| `params.timeRange.period` | `string` | No | Restricts the query to the specified time range. |
| `params.timedCountDuration` | `string` | No | Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned. |
| `params.alignment` | `string` | No | Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`. |
| `params.alignmentTime` | `string` | No | Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC. |
| `params.order` | `string` | No | Optional. The sort order in which the results are returned. Default is `COUNT_DESC`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return per response. Default is 20. |
| `params.pageToken` | `string` | No | Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request. |

### `projects.locations.events`

#### `projects.locations.events.list()`

Lists the specified events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectName` | `string` | Yes | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. |
| `params.groupId` | `string` | No | Required. The group for which events shall be returned. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). |
| `params.serviceFilter.service` | `string` | No | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). |
| `params.serviceFilter.version` | `string` | No | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). |
| `params.serviceFilter.resourceType` | `string` | No | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). |
| `params.timeRange.period` | `string` | No | Restricts the query to the specified time range. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return per response. |
| `params.pageToken` | `string` | No | Optional. A `next_page_token` provided by a previous response. |