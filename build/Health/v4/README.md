# Google Health API - Apps Script Client Library

Auto-generated client library for using the **Google Health API (version: v4)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 May 2026 23:55:29 GMT
- **Last Modified:** Sun, 31 May 2026 23:55:29 GMT
- **Created:** Fri, 01 May 2026 00:04:01 GMT



---

## API Reference

### `projects`

### `projects.subscribers`

#### `projects.subscribers.create()`

Registers a new subscriber endpoint to receive notifications. A subscriber represents an application or service that wishes to receive data change notifications for users who have granted consent. **Endpoint Verification:** For a subscriber to be successfully created, the provided `endpoint_uri` must be a valid HTTPS endpoint and must pass an automated verification check. The backend will send two HTTP POST requests to the `endpoint_uri`: 1. **Verification with Authorization:**

* **Headers:** Includes `Content-Type: application/json` and `Authorization` (with the exact value from `CreateSubscriberPayload.endpoint_authorization.secret`).

* **Body:** `{"type": "verification"}`

* **Expected Response:** HTTP `201 Created`. 2. **Verification without Authorization:**

* **Headers:** Includes `Content-Type: application/json`. The `Authorization` header is OMITTED.

* **Body:** `{"type": "verification"}`

* **Expected Response:** HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass for the subscriber creation to succeed. If verification fails, the operation will not be completed and an error will be returned. This process ensures the endpoint is reachable and correctly validates the `Authorization` header.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this subscriber will be created. Format: projects/{project} Example: projects/my-project-123 |
| `params.subscriberId` | `string` | No | Optional. The ID to use for the subscriber, which will become the final component of the subscriber's resource name. This value should be 4-36 characters, and valid characters are /[a-z]([a-z0-9-]{2,34}[a-z0-9])/. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscribers.list()`

Lists all subscribers registered within the owned Google Cloud Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of subscribers. Format: projects/{project} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of subscribers to return. The service may return fewer than this value. If unspecified, at most 50 subscribers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token. |

#### `projects.subscribers.patch()`

Updates the configuration of an existing subscriber, such as the endpoint URI or the data types it's interested in. **Endpoint Verification:** If the `endpoint_uri` or `endpoint_authorization` field is included in the `update_mask`, the backend will re-verify the endpoint. The verification process is the same as described in `CreateSubscriber`: 1. **Verification with Authorization:** POST to the new or existing `endpoint_uri` with the new or existing `Authorization` secret. Expects HTTP `201 Created`. 2. **Verification without Authorization:** POST to the `endpoint_uri` without the `Authorization` header. Expects HTTP `401 Unauthorized` or `403 Forbidden`. Both tests must pass using the potentially updated values for the subscriber update to succeed. If verification fails, the update will not be applied, and an error will be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Subscriber. Format: projects/{project}/subscribers/{subscriber} The {project} ID is a Google Cloud Project ID or Project Number. The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise (e.g., a UUID). Example (User-settable subscriber ID): projects/my-project/subscribers/my-sub-123 Example (System-generated subscriber ID): projects/my-project/subscribers/a1b2c3d4-e5f6-7890-1234-567890abcdef |
| `params.updateMask` | `string` | No | Optional. A field mask that specifies which fields of the Subscriber message are to be updated. This allows for partial updates. Supported fields: - endpoint_uri - subscriber_configs - endpoint_authorization |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscribers.delete()`

Deletes a subscriber registration. This will stop all notifications to the subscriber's endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscriber to delete. Format: projects/{project}/subscribers/{subscriber} Example: projects/my-project/subscribers/my-subscriber-123 The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated if not provided during creation. |
| `params.force` | `boolean` | No | Optional. If set to true, any child resources (e.g., subscriptions) will also be deleted. If false (default) and child resources exist, the request will fail. |

### `projects.subscribers.subscriptions`

#### `projects.subscribers.subscriptions.create()`

Creates a subscription for a specific user to a specific subscriber. This method requires the subscriber to have a `SubscriptionCreatePolicy` set to `MANUAL` for the given data types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent subscriber. Format: projects/{project}/subscribers/{subscriber} The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. |
| `params.subscriptionId` | `string` | No | Optional. The {subscription_id} is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated otherwise. If provided, the ID must be unique within the parent subscriber. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscribers.subscriptions.list()`

Lists all active subscriptions for a given subscriber. This can be filtered, for example, by user or data type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent subscriber. Format: projects/{project}/subscribers/{subscriber} The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. |
| `params.filter` | `string` | No | Optional. A filter to apply to the list of subscriptions. The filter syntax is described in https://google.aip.dev/160. The filter can be applied to the following fields: - `user` - `data_type` The `user` identifier (e.g., `user1` in `users/user1`) refers to the public `health_user_id` Example: user = "users/user1" Example: user = "users/user1" OR user = "users/user2" Example: user = "users/user1" AND (data_type = "sleep" OR data_type = "weight") |
| `params.pageSize` | `integer` | No | Optional. The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token. |

#### `projects.subscribers.subscriptions.patch()`

Updates the data types for an existing user subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Subscription. Format: `projects/{project}/subscribers/{subscriber}/subscriptions/{subscription}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {project} ID is mandatory (6-30 characters, matching /a-z{6,30}/) The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription} ID is user-settable (4-36 chars, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated otherwise. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscribers.subscriptions.delete()`

Deletes a specific user subscription, stopping notifications for this user to this subscriber.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the subscription to delete. Format: `projects/{project}/subscribers/{subscriber}/subscriptions/{subscription}` Example: `projects/my-project/subscribers/my-subscriber-123/subscriptions/my-subscription-456` The {subscriber} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) if provided during creation, or system-generated otherwise. The {subscription} ID is user-settable (4-36 characters, matching /[a-z]([a-z0-9-]{2,34}[a-z0-9])/) or system-generated if not provided during creation. |

### `users`

#### `users.getProfile()`

Returns user Profile details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Profile. Format: `users/me/profile`. |

#### `users.updateProfile()`

Updates the user's profile details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of this Profile resource. Format: `users/{user}/profile` Example: `users/1234567890/profile` or `users/me/profile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.getSettings()`

Returns user settings details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Settings. Format: `users/me/settings`. |

#### `users.updateSettings()`

Updates the user's settings details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of this Settings resource. Format: `users/{user}/settings` Example: `users/1234567890/settings` or `users/me/settings` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.getIdentity()`

Gets the user's identity. It includes the legacy Fitbit user ID and the Google user ID and it can be used by migrating clients to map identifiers between the two systems.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Identity. Format: `users/me/identity` |

#### `users.getIrnProfile()`

Returns user's IRN Profile details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IRN Profile. Format: `users/{user}/irnProfile` Example: `users/1234567890/irnProfile` or `users/me/irnProfile` The {user} ID is a system-generated Google Health API user ID, a string of 1-63 characters consisting of lowercase and uppercase letters, numbers, and hyphens. The literal `me` can also be used to refer to the authenticated user. |

### `users.dataTypes`

### `users.dataTypes.dataPoints`

#### `users.dataTypes.dataPoints.get()`

Get a single identifyable data point.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data point to retrieve. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` See DataPoint.name for examples and possible values. |

#### `users.dataTypes.dataPoints.list()`

Query user health and fitness data points.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/weight` For a list of the supported data types see the DataPoint data union field. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` from a previous request, if any. |
| `params.filter` | `string` | No | Optional. Filter expression following https://google.aip.dev/160. A time range (either physical or civil) can be specified. The supported filter fields are: - Interval start time: - Pattern: `{interval_data_type}.interval.start_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `steps.interval.start_time >= "2023-11-24T00:00:00Z" AND steps.interval.start_time < "2023-11-25T00:00:00Z"` - `distance.interval.start_time >= "2024-08-14T12:34:56Z"` - Interval civil start time: - Pattern: `{interval_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `steps.interval.civil_start_time >= "2023-11-24" AND steps.interval.civil_start_time < "2023-11-25"` - `distance.interval.civil_start_time >= "2024-08-14T12:34:56"` - Sample observation physical time: - Pattern: `{sample_data_type}.sample_time.physical_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND` - Example: - `weight.sample_time.physical_time >= "2023-11-24T00:00:00Z" AND weight.sample_time.physical_time < "2023-11-25T00:00:00Z"` - `weight.sample_time.physical_time >= "2024-08-14T12:34:56Z"` - Sample observation civil time: - Pattern: `{sample_data_type}.sample_time.civil_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `weight.sample_time.civil_time >= "2023-11-24" AND weight.sample_time.civil_time < "2023-11-25"` - `weight.sample_time.civil_time >= "2024-08-14T12:34:56"` - Daily summary date: - Pattern: `{daily_summary_data_type}.date` - Supported comparison operators: `>=`, `<` - Date literal expected in ISO 8601 `YYYY-MM-DD` format - Supported logical operators: `AND` - Example: - `daily_heart_rate_variability.date < "2024-08-15"` - Session civil start time (**Excluding Sleep and ECG**): - Pattern: `{session_data_type}.interval.civil_start_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND` - Example: - `exercise.interval.civil_start_time >= "2023-11-24" AND exercise.interval.civil_start_time < "2023-11-25"` - `exercise.interval.civil_start_time >= "2024-08-14T12:34:56"` - Session start time (**ECG specific**): - Pattern: `electrocardiogram.interval.start_time` - Supported comparison operators: `>=` - Timestamp literal expected in RFC-3339 format - Example: - `electrocardiogram.interval.start_time >= "2024-08-14T12:34:56Z"` - Note: Only filtering by start time is supported for ECG. Filtering by end time (e.g., `electrocardiogram.interval.end_time`) is not supported. - Session end time (**Sleep specific**): - Pattern: `sleep.interval.end_time` - Supported comparison operators: `>=`, `<` - Timestamp literal expected in RFC-3339 format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.end_time >= "2023-11-24T00:00:00Z" AND sleep.interval.end_time < "2023-11-25T00:00:00Z"` - Session civil end time (**Sleep specific**): - Pattern: `sleep.interval.civil_end_time` - Supported comparison operators: `>=`, `<` - Date with optional time literal expected in ISO 8601 `YYYY-MM-DD[THH:mm:ss]` format - Supported logical operators: `AND`, `OR` - Example: - `sleep.interval.civil_end_time >= "2023-11-24" AND sleep.interval.civil_end_time < "2023-11-25"` Data points in the response will be ordered by the interval start time in descending order. |

#### `users.dataTypes.dataPoints.create()`

Creates a single identifiable data point.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the data point will be created. Format: `users/{user}/dataTypes/{data_type}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.dataTypes.dataPoints.patch()`

Updates a single identifiable data point. If a data point with the specified `name` is not found, the request will fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Data point name, only supported for the subset of identifiable data types. For the majority of the data types, individual data points do not need to be identified and this field would be empty. Format: `users/{user}/dataTypes/{data_type}/dataPoints/{data_point}` Example: `users/abcd1234/dataTypes/sleep/dataPoints/a1b2c3d4-e5f6-7890-1234-567890abcdef` The `{user}` ID is a system-generated identifier, as described in Identity.health_user_id. The `{data_type}` ID corresponds to the kebab-case version of the field names in the DataPoint data union field, e.g. `total-calories` for the `total_calories` field. The `{data_point}` ID can be client-provided or system-generated. If client-provided, it must be a string of 4-63 characters, containing only lowercase letters, numbers, and hyphens. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.dataTypes.dataPoints.batchDelete()`

Delete a batch of identifyable data points.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. Parent (data type) for the Data Point collection Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/-` For a list of the supported data types see the DataPoint data union field. Deleting data points across multiple data type collections is supported following https://aip.dev/159. If this is set, the parent of all of the data points specified in `names` must match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.dataTypes.dataPoints.reconcile()`

Reconcile data points from multiple data sources into a single data stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent data type of the Data Point collection. Format: `users/me/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/heart-rate` For a list of the supported data types see the DataPoint data union field. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of data points to return. If unspecified, at most 1440 data points will be returned. The maximum page size is 10000; values above that will be truncated accordingly. For `exercise` and `sleep` the default page size is 25. The maximum page size for `exercise` and `sleep` is 25. |
| `params.pageToken` | `string` | No | Optional. The `next_page_token` from a previous request, if any. |
| `params.filter` | `string` | No | Optional. Filter expression based on https://aip.dev/160. A time range, either physical or civil, can be specified. See the ListDataPointsRequest.filter for the supported fields and syntax. |
| `params.dataSourceFamily` | `string` | No | Optional. The data source family name to reconcile. If empty, data points from all data sources will be reconciled. Format: `users/me/dataSourceFamilies/{data_source_family}` The supported values are: - `users/me/dataSourceFamilies/all-sources` - default value - `users/me/dataSourceFamilies/google-wearables` - tracker devices - `users/me/dataSourceFamilies/google-sources` - Google first party sources |

#### `users.dataTypes.dataPoints.rollUp()`

Roll up data points over physical time intervals for supported data types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent data type of the Data Point collection. Format: `users/{user}/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the RollupDataPoint value union field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.dataTypes.dataPoints.dailyRollUp()`

Roll up data points over civil time intervals for supported data types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent data type of the Data Point collection. Format: `users/{user}/dataTypes/{data_type}`, e.g.: - `users/me/dataTypes/steps` - `users/me/dataTypes/distance` For a list of the supported data types see the DailyRollupDataPoint value union field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.dataTypes.dataPoints.exportExerciseTcx()`

Exports exercise data in TCX format. **IMPORTANT:** HTTP clients must append `?alt=media` to the request URL to download the raw TCX file. Example: `https://health.googleapis.com/v4/users/me/dataTypes/exercise/dataPoints/EXERCISE_ID:exportExerciseTcx?alt=media` Without `alt=media`, the server returns a JSON response (`ExportExerciseTcxResponse`) which is intended primarily for gRPC clients. **Note:** While the Authorization section below states that any one of the listed scopes is accepted, this specific method requires the user to provide both one of the `activity_and_fitness` scopes (`normal` or `readonly`) AND one of the `location` scopes (`normal` or `readonly`) in their access token to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the exercise data point to export. Format: `users/{user}/dataTypes/exercise/dataPoints/{data_point}` Example: `users/me/dataTypes/exercise/dataPoints/2026443605080188808` The `{user}` is the alias `"me"` currently. Future versions may support user IDs. The `{data_point}` ID maps to the exercise ID, which is a long integer. |
| `params.partialData` | `boolean` | No | Optional. Indicates whether to include the TCX data points when the GPS data is not available. If not specified, defaults to `false` and partial data will not be included. |

### `users.pairedDevices`

#### `users.pairedDevices.get()`

Returns user's Device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the device to retrieve. Format: users/{user}/devices/{device} |

#### `users.pairedDevices.list()`

Returns the user's list of paired 1P trackers and smartwatches.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of devices. Format: users/{user} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of devices to return. The service may return fewer than this value. If unspecified, at most 5 devices will be returned. The maximum value is 100. values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPairedDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPairedDevices` must match the call that provided the page token. |