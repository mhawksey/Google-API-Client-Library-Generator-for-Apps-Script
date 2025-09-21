# Google Analytics API - Apps Script Client Library

Auto-generated client library for using the **Google Analytics API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:03:39 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:03:39 GMT
- **Created:** Sun, 20 Jul 2025 16:11:49 GMT



---

## API Reference

### `data`

### `data.ga`

#### `data.ga.get()`

Returns Analytics data for a view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dimensions` | `string` | No | A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'. |
| `params.end-date` | `string` | Yes | End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday. |
| `params.filters` | `string` | No | A comma-separated list of dimension or metric filters to be applied to Analytics data. |
| `params.ids` | `string` | Yes | Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. |
| `params.include-empty-rows` | `boolean` | No | The response will include empty rows if this parameter is set to true, the default is true |
| `params.max-results` | `integer` | No | The maximum number of entries to include in this feed. |
| `params.metrics` | `string` | Yes | A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified. |
| `params.output` | `string` | No | The selected format for the response. Default format is JSON. |
| `params.samplingLevel` | `string` | No | The desired sampling level. |
| `params.segment` | `string` | No | An Analytics segment to be applied to data. |
| `params.sort` | `string` | No | A comma-separated list of dimensions or metrics that determine the sort order for Analytics data. |
| `params.start-date` | `string` | Yes | Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

### `data.mcf`

#### `data.mcf.get()`

Returns Analytics Multi-Channel Funnels data for a view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dimensions` | `string` | No | A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'. |
| `params.end-date` | `string` | Yes | End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. |
| `params.filters` | `string` | No | A comma-separated list of dimension or metric filters to be applied to the Analytics data. |
| `params.ids` | `string` | Yes | Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. |
| `params.max-results` | `integer` | No | The maximum number of entries to include in this feed. |
| `params.metrics` | `string` | Yes | A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified. |
| `params.samplingLevel` | `string` | No | The desired sampling level. |
| `params.sort` | `string` | No | A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data. |
| `params.start-date` | `string` | Yes | Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

### `data.realtime`

#### `data.realtime.get()`

Returns real time data for a view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dimensions` | `string` | No | A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'. |
| `params.filters` | `string` | No | A comma-separated list of dimension or metric filters to be applied to real time data. |
| `params.ids` | `string` | Yes | Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. |
| `params.max-results` | `integer` | No | The maximum number of entries to include in this feed. |
| `params.metrics` | `string` | Yes | A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified. |
| `params.sort` | `string` | No | A comma-separated list of dimensions or metrics that determine the sort order for real time data. |

### `management`

### `management.accountSummaries`

#### `management.accountSummaries.list()`

Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.max-results` | `integer` | No | The maximum number of account summaries to include in this response, where the largest acceptable value is 1000. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

### `management.accountUserLinks`

#### `management.accountUserLinks.delete()`

Removes a user from the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the user link for. |
| `params.linkId` | `string` | Yes | Link ID to delete the user link for. |

#### `management.accountUserLinks.insert()`

Adds a new user to the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.accountUserLinks.list()`

Lists account-user links for a given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve the user links for. |
| `params.max-results` | `integer` | No | The maximum number of account-user links to include in this response. |
| `params.start-index` | `integer` | No | An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

#### `management.accountUserLinks.update()`

Updates permissions for an existing user on the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to update the account-user link for. |
| `params.linkId` | `string` | Yes | Link ID to update the account-user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.accounts`

#### `management.accounts.list()`

Lists all accounts to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.max-results` | `integer` | No | The maximum number of accounts to include in this response. |
| `params.start-index` | `integer` | No | An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

### `management.clientId`

#### `management.clientId.hashClientId()`

Hashes the given Client ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `management.customDataSources`

#### `management.customDataSources.list()`

List custom data sources to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account Id for the custom data sources to retrieve. |
| `params.max-results` | `integer` | No | The maximum number of custom data sources to include in this response. |
| `params.start-index` | `integer` | No | A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property Id for the custom data sources to retrieve. |

### `management.customDimensions`

#### `management.customDimensions.get()`

Get a custom dimension to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom dimension to retrieve. |
| `params.customDimensionId` | `string` | Yes | The ID of the custom dimension to retrieve. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimension to retrieve. |

#### `management.customDimensions.insert()`

Create a new custom dimension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom dimension to create. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimension to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.customDimensions.list()`

Lists custom dimensions to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom dimensions to retrieve. |
| `params.max-results` | `integer` | No | The maximum number of custom dimensions to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimensions to retrieve. |

#### `management.customDimensions.patch()`

Updates an existing custom dimension. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom dimension to update. |
| `params.customDimensionId` | `string` | Yes | Custom dimension ID for the custom dimension to update. |
| `params.ignoreCustomDataSourceLinks` | `boolean` | No | Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimension to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.customDimensions.update()`

Updates an existing custom dimension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom dimension to update. |
| `params.customDimensionId` | `string` | Yes | Custom dimension ID for the custom dimension to update. |
| `params.ignoreCustomDataSourceLinks` | `boolean` | No | Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimension to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.customMetrics`

#### `management.customMetrics.get()`

Get a custom metric to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom metric to retrieve. |
| `params.customMetricId` | `string` | Yes | The ID of the custom metric to retrieve. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom metric to retrieve. |

#### `management.customMetrics.insert()`

Create a new custom metric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom metric to create. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom dimension to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.customMetrics.list()`

Lists custom metrics to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom metrics to retrieve. |
| `params.max-results` | `integer` | No | The maximum number of custom metrics to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom metrics to retrieve. |

#### `management.customMetrics.patch()`

Updates an existing custom metric. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom metric to update. |
| `params.customMetricId` | `string` | Yes | Custom metric ID for the custom metric to update. |
| `params.ignoreCustomDataSourceLinks` | `boolean` | No | Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom metric to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.customMetrics.update()`

Updates an existing custom metric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the custom metric to update. |
| `params.customMetricId` | `string` | Yes | Custom metric ID for the custom metric to update. |
| `params.ignoreCustomDataSourceLinks` | `boolean` | No | Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the custom metric to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.experiments`

#### `management.experiments.delete()`

Delete an experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the experiment belongs |
| `params.experimentId` | `string` | Yes | ID of the experiment to delete |
| `params.profileId` | `string` | Yes | View (Profile) ID to which the experiment belongs |
| `params.webPropertyId` | `string` | Yes | Web property ID to which the experiment belongs |

#### `management.experiments.get()`

Returns an experiment to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve the experiment for. |
| `params.experimentId` | `string` | Yes | Experiment ID to retrieve the experiment for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve the experiment for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the experiment for. |

#### `management.experiments.insert()`

Create a new experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the experiment for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to create the experiment for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to create the experiment for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.experiments.list()`

Lists experiments to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve experiments for. |
| `params.max-results` | `integer` | No | The maximum number of experiments to include in this response. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve experiments for. |
| `params.start-index` | `integer` | No | An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve experiments for. |

#### `management.experiments.patch()`

Update an existing experiment. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the experiment to update. |
| `params.experimentId` | `string` | Yes | Experiment ID of the experiment to update. |
| `params.profileId` | `string` | Yes | View (Profile) ID of the experiment to update. |
| `params.webPropertyId` | `string` | Yes | Web property ID of the experiment to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.experiments.update()`

Update an existing experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the experiment to update. |
| `params.experimentId` | `string` | Yes | Experiment ID of the experiment to update. |
| `params.profileId` | `string` | Yes | View (Profile) ID of the experiment to update. |
| `params.webPropertyId` | `string` | Yes | Web property ID of the experiment to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.filters`

#### `management.filters.delete()`

Delete a filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the filter for. |
| `params.filterId` | `string` | Yes | ID of the filter to be deleted. |

#### `management.filters.get()`

Returns filters to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve filters for. |
| `params.filterId` | `string` | Yes | Filter ID to retrieve filters for. |

#### `management.filters.insert()`

Create a new filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create filter for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.filters.list()`

Lists all filters for an account

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve filters for. |
| `params.max-results` | `integer` | No | The maximum number of filters to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

#### `management.filters.patch()`

Updates an existing filter. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the filter belongs. |
| `params.filterId` | `string` | Yes | ID of the filter to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.filters.update()`

Updates an existing filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the filter belongs. |
| `params.filterId` | `string` | Yes | ID of the filter to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.goals`

#### `management.goals.get()`

Gets a goal to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve the goal for. |
| `params.goalId` | `string` | Yes | Goal ID to retrieve the goal for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve the goal for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the goal for. |

#### `management.goals.insert()`

Create a new goal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the goal for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to create the goal for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to create the goal for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.goals.list()`

Lists goals to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. |
| `params.max-results` | `integer` | No | The maximum number of goals to include in this response. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to. |
| `params.start-index` | `integer` | No | An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. |

#### `management.goals.patch()`

Updates an existing goal. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to update the goal. |
| `params.goalId` | `string` | Yes | Index of the goal to be updated. |
| `params.profileId` | `string` | Yes | View (Profile) ID to update the goal. |
| `params.webPropertyId` | `string` | Yes | Web property ID to update the goal. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.goals.update()`

Updates an existing goal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to update the goal. |
| `params.goalId` | `string` | Yes | Index of the goal to be updated. |
| `params.profileId` | `string` | Yes | View (Profile) ID to update the goal. |
| `params.webPropertyId` | `string` | Yes | Web property ID to update the goal. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.profileFilterLinks`

#### `management.profileFilterLinks.delete()`

Delete a profile filter link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the profile filter link belongs. |
| `params.linkId` | `string` | Yes | ID of the profile filter link to delete. |
| `params.profileId` | `string` | Yes | Profile ID to which the filter link belongs. |
| `params.webPropertyId` | `string` | Yes | Web property Id to which the profile filter link belongs. |

#### `management.profileFilterLinks.get()`

Returns a single profile filter link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve profile filter link for. |
| `params.linkId` | `string` | Yes | ID of the profile filter link. |
| `params.profileId` | `string` | Yes | Profile ID to retrieve filter link for. |
| `params.webPropertyId` | `string` | Yes | Web property Id to retrieve profile filter link for. |

#### `management.profileFilterLinks.insert()`

Create a new profile filter link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create profile filter link for. |
| `params.profileId` | `string` | Yes | Profile ID to create filter link for. |
| `params.webPropertyId` | `string` | Yes | Web property Id to create profile filter link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.profileFilterLinks.list()`

Lists all profile filter links for a profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve profile filter links for. |
| `params.max-results` | `integer` | No | The maximum number of profile filter links to include in this response. |
| `params.profileId` | `string` | Yes | Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. |

#### `management.profileFilterLinks.patch()`

Update an existing profile filter link. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which profile filter link belongs. |
| `params.linkId` | `string` | Yes | ID of the profile filter link to be updated. |
| `params.profileId` | `string` | Yes | Profile ID to which filter link belongs |
| `params.webPropertyId` | `string` | Yes | Web property Id to which profile filter link belongs |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.profileFilterLinks.update()`

Update an existing profile filter link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which profile filter link belongs. |
| `params.linkId` | `string` | Yes | ID of the profile filter link to be updated. |
| `params.profileId` | `string` | Yes | Profile ID to which filter link belongs |
| `params.webPropertyId` | `string` | Yes | Web property Id to which profile filter link belongs |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.profileUserLinks`

#### `management.profileUserLinks.delete()`

Removes a user from the given view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the user link for. |
| `params.linkId` | `string` | Yes | Link ID to delete the user link for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to delete the user link for. |
| `params.webPropertyId` | `string` | Yes | Web Property ID to delete the user link for. |

#### `management.profileUserLinks.insert()`

Adds a new user to the given view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the user link for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to create the user link for. |
| `params.webPropertyId` | `string` | Yes | Web Property ID to create the user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.profileUserLinks.list()`

Lists profile-user links for a given view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID which the given view (profile) belongs to. |
| `params.max-results` | `integer` | No | The maximum number of profile-user links to include in this response. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to. |
| `params.start-index` | `integer` | No | An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. |

#### `management.profileUserLinks.update()`

Updates permissions for an existing user on the given view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to update the user link for. |
| `params.linkId` | `string` | Yes | Link ID to update the user link for. |
| `params.profileId` | `string` | Yes | View (Profile ID) to update the user link for. |
| `params.webPropertyId` | `string` | Yes | Web Property ID to update the user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.profiles`

#### `management.profiles.delete()`

Deletes a view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the view (profile) for. |
| `params.profileId` | `string` | Yes | ID of the view (profile) to be deleted. |
| `params.webPropertyId` | `string` | Yes | Web property ID to delete the view (profile) for. |

#### `management.profiles.get()`

Gets a view (profile) to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve the view (profile) for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve the view (profile) for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the view (profile) for. |

#### `management.profiles.insert()`

Create a new view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the view (profile) for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to create the view (profile) for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.profiles.list()`

Lists views (profiles) to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access. |
| `params.max-results` | `integer` | No | The maximum number of views (profiles) to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access. |

#### `management.profiles.patch()`

Updates an existing view (profile). This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the view (profile) belongs |
| `params.profileId` | `string` | Yes | ID of the view (profile) to be updated. |
| `params.webPropertyId` | `string` | Yes | Web property ID to which the view (profile) belongs |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.profiles.update()`

Updates an existing view (profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the view (profile) belongs |
| `params.profileId` | `string` | Yes | ID of the view (profile) to be updated. |
| `params.webPropertyId` | `string` | Yes | Web property ID to which the view (profile) belongs |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.remarketingAudience`

#### `management.remarketingAudience.delete()`

Delete a remarketing audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the remarketing audience belongs. |
| `params.remarketingAudienceId` | `string` | Yes | The ID of the remarketing audience to delete. |
| `params.webPropertyId` | `string` | Yes | Web property ID to which the remarketing audience belongs. |

#### `management.remarketingAudience.get()`

Gets a remarketing audience to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account ID of the remarketing audience to retrieve. |
| `params.remarketingAudienceId` | `string` | Yes | The ID of the remarketing audience to retrieve. |
| `params.webPropertyId` | `string` | Yes | The web property ID of the remarketing audience to retrieve. |

#### `management.remarketingAudience.insert()`

Creates a new remarketing audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account ID for which to create the remarketing audience. |
| `params.webPropertyId` | `string` | Yes | Web property ID for which to create the remarketing audience. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.remarketingAudience.list()`

Lists remarketing audiences to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account ID of the remarketing audiences to retrieve. |
| `params.max-results` | `integer` | No | The maximum number of remarketing audiences to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.type` | `string` | No |  |
| `params.webPropertyId` | `string` | Yes | The web property ID of the remarketing audiences to retrieve. |

#### `management.remarketingAudience.patch()`

Updates an existing remarketing audience. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account ID of the remarketing audience to update. |
| `params.remarketingAudienceId` | `string` | Yes | The ID of the remarketing audience to update. |
| `params.webPropertyId` | `string` | Yes | The web property ID of the remarketing audience to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.remarketingAudience.update()`

Updates an existing remarketing audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account ID of the remarketing audience to update. |
| `params.remarketingAudienceId` | `string` | Yes | The ID of the remarketing audience to update. |
| `params.webPropertyId` | `string` | Yes | The web property ID of the remarketing audience to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.segments`

#### `management.segments.list()`

Lists segments to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.max-results` | `integer` | No | The maximum number of segments to include in this response. |
| `params.start-index` | `integer` | No | An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

### `management.unsampledReports`

#### `management.unsampledReports.delete()`

Deletes an unsampled report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the unsampled report for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to delete the unsampled report for. |
| `params.unsampledReportId` | `string` | Yes | ID of the unsampled report to be deleted. |
| `params.webPropertyId` | `string` | Yes | Web property ID to delete the unsampled reports for. |

#### `management.unsampledReports.get()`

Returns a single unsampled report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve unsampled report for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve unsampled report for. |
| `params.unsampledReportId` | `string` | Yes | ID of the unsampled report to retrieve. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve unsampled reports for. |

#### `management.unsampledReports.insert()`

Create a new unsampled report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the unsampled report for. |
| `params.profileId` | `string` | Yes | View (Profile) ID to create the unsampled report for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to create the unsampled report for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.unsampledReports.list()`

Lists unsampled reports to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported. |
| `params.max-results` | `integer` | No | The maximum number of unsampled reports to include in this response. |
| `params.profileId` | `string` | Yes | View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported. |
| `params.start-index` | `integer` | No | An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported. |

### `management.uploads`

#### `management.uploads.deleteUploadData()`

Delete data associated with a previous upload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account Id for the uploads to be deleted. |
| `params.customDataSourceId` | `string` | Yes | Custom data source Id for the uploads to be deleted. |
| `params.webPropertyId` | `string` | Yes | Web property Id for the uploads to be deleted. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.uploads.get()`

List uploads to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account Id for the upload to retrieve. |
| `params.customDataSourceId` | `string` | Yes | Custom data source Id for upload to retrieve. |
| `params.uploadId` | `string` | Yes | Upload Id to retrieve. |
| `params.webPropertyId` | `string` | Yes | Web property Id for the upload to retrieve. |

#### `management.uploads.list()`

List uploads to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account Id for the uploads to retrieve. |
| `params.customDataSourceId` | `string` | Yes | Custom data source Id for uploads to retrieve. |
| `params.max-results` | `integer` | No | The maximum number of uploads to include in this response. |
| `params.start-index` | `integer` | No | A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property Id for the uploads to retrieve. |

#### `management.uploads.uploadData()`

Upload data for a custom data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account Id associated with the upload. |
| `params.customDataSourceId` | `string` | Yes | Custom data source Id to which the data being uploaded belongs. |
| `params.webPropertyId` | `string` | Yes | Web property UA-string associated with the upload. |

### `management.webPropertyAdWordsLinks`

#### `management.webPropertyAdWordsLinks.delete()`

Deletes a web property-Google Ads link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the account which the given web property belongs to. |
| `params.webPropertyAdWordsLinkId` | `string` | Yes | Web property Google Ads link ID. |
| `params.webPropertyId` | `string` | Yes | Web property ID to delete the Google Ads link for. |

#### `management.webPropertyAdWordsLinks.get()`

Returns a web property-Google Ads link to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the account which the given web property belongs to. |
| `params.webPropertyAdWordsLinkId` | `string` | Yes | Web property-Google Ads link ID. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the Google Ads link for. |

#### `management.webPropertyAdWordsLinks.insert()`

Creates a webProperty-Google Ads link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the Google Analytics account to create the link for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to create the link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.webPropertyAdWordsLinks.list()`

Lists webProperty-Google Ads links for a given web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the account which the given web property belongs to. |
| `params.max-results` | `integer` | No | The maximum number of webProperty-Google Ads links to include in this response. |
| `params.start-index` | `integer` | No | An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the Google Ads links for. |

#### `management.webPropertyAdWordsLinks.patch()`

Updates an existing webProperty-Google Ads link. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the account which the given web property belongs to. |
| `params.webPropertyAdWordsLinkId` | `string` | Yes | Web property-Google Ads link ID. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the Google Ads link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.webPropertyAdWordsLinks.update()`

Updates an existing webProperty-Google Ads link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | ID of the account which the given web property belongs to. |
| `params.webPropertyAdWordsLinkId` | `string` | Yes | Web property-Google Ads link ID. |
| `params.webPropertyId` | `string` | Yes | Web property ID to retrieve the Google Ads link for. |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.webproperties`

#### `management.webproperties.get()`

Gets a web property to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve the web property for. |
| `params.webPropertyId` | `string` | Yes | ID to retrieve the web property for. |

#### `management.webproperties.insert()`

Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the web property for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.webproperties.list()`

Lists web properties to which the user has access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to. |
| `params.max-results` | `integer` | No | The maximum number of web properties to include in this response. |
| `params.start-index` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |

#### `management.webproperties.patch()`

Updates an existing web property. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the web property belongs |
| `params.webPropertyId` | `string` | Yes | Web property ID |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.webproperties.update()`

Updates an existing web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to which the web property belongs |
| `params.webPropertyId` | `string` | Yes | Web property ID |
| `params.requestBody` | `object` | Yes | The request body. |

### `management.webpropertyUserLinks`

#### `management.webpropertyUserLinks.delete()`

Removes a user from the given web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to delete the user link for. |
| `params.linkId` | `string` | Yes | Link ID to delete the user link for. |
| `params.webPropertyId` | `string` | Yes | Web Property ID to delete the user link for. |

#### `management.webpropertyUserLinks.insert()`

Adds a new user to the given web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to create the user link for. |
| `params.webPropertyId` | `string` | Yes | Web Property ID to create the user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `management.webpropertyUserLinks.list()`

Lists webProperty-user links for a given web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID which the given web property belongs to. |
| `params.max-results` | `integer` | No | The maximum number of webProperty-user Links to include in this response. |
| `params.start-index` | `integer` | No | An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. |
| `params.webPropertyId` | `string` | Yes | Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to. |

#### `management.webpropertyUserLinks.update()`

Updates permissions for an existing user on the given web property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID to update the account-user link for. |
| `params.linkId` | `string` | Yes | Link ID to update the account-user link for. |
| `params.webPropertyId` | `string` | Yes | Web property ID to update the account-user link for. |
| `params.requestBody` | `object` | Yes | The request body. |

### `metadata`

### `metadata.columns`

#### `metadata.columns.list()`

Lists all columns for a report type

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.reportType` | `string` | Yes | Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API |

### `provisioning`

#### `provisioning.createAccountTicket()`

Creates an account ticket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `provisioning.createAccountTree()`

Provision account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `userDeletion`

### `userDeletion.userDeletionRequest`

#### `userDeletion.userDeletionRequest.upsert()`

Insert or update a user deletion requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |