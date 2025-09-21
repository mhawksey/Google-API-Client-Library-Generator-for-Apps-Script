# Policy Analyzer API - Apps Script Client Library

Auto-generated client library for using the **Policy Analyzer API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:44:19 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:44:19 GMT
- **Created:** Sun, 20 Jul 2025 16:45:33 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.activityTypes`

### `projects.locations.activityTypes.activities`

#### `projects.locations.activityTypes.activities.query()`

Queries policy activities on Google Cloud resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/ |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account key. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. |

### `organizations`

### `organizations.locations`

### `organizations.locations.activityTypes`

### `organizations.locations.activityTypes.activities`

#### `organizations.locations.activityTypes.activities.query()`

Queries policy activities on Google Cloud resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/ |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account key. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. |

### `folders`

### `folders.locations`

### `folders.locations.activityTypes`

### `folders.locations.activityTypes.activities`

#### `folders.locations.activityTypes.activities.query()`

Queries policy activities on Google Cloud resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/ |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account key. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. |