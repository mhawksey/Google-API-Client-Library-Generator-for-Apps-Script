# Google Play Games Services Publishing API - Apps Script Client Library

Auto-generated client library for using the **Google Play Games Services Publishing API (version: v1configuration)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:45:12 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:45:12 GMT
- **Created:** Sun, 20 Jul 2025 16:34:09 GMT



---

## API Reference

### `achievementConfigurations`

#### `achievementConfigurations.delete()`

Delete the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievementConfigurations.list()`

Returns a list of the achievement configurations in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.maxResults` | `integer` | No | The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `achievementConfigurations.get()`

Retrieves the metadata of the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievementConfigurations.update()`

Update the metadata of the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `achievementConfigurations.insert()`

Insert a new achievement configuration in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.requestBody` | `object` | Yes | The request body. |

### `leaderboardConfigurations`

#### `leaderboardConfigurations.update()`

Update the metadata of the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `leaderboardConfigurations.list()`

Returns a list of the leaderboard configurations in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |

#### `leaderboardConfigurations.get()`

Retrieves the metadata of the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `leaderboardConfigurations.delete()`

Delete the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `leaderboardConfigurations.insert()`

Insert a new leaderboard configuration in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.requestBody` | `object` | Yes | The request body. |