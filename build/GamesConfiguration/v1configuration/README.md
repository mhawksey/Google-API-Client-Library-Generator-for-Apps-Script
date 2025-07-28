# Google Play Games Services Publishing API - Apps Script Client Library

Auto-generated client library for using the **Google Play Games Services Publishing API (version: v1configuration)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:55:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:27 GMT
- **Created:** Sun, 20 Jul 2025 16:34:09 GMT



---

## API Reference

### `achievementConfigurations`

#### `achievementConfigurations.delete()`

Delete the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievementConfigurations.get()`

Retrieves the metadata of the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievementConfigurations.insert()`

Insert a new achievement configuration in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.resource` | `object` | Yes | The request body. |

#### `achievementConfigurations.list()`

Returns a list of the achievement configurations in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.maxResults` | `integer` | No | The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `achievementConfigurations.update()`

Update the metadata of the achievement configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |
| `params.resource` | `object` | Yes | The request body. |

### `leaderboardConfigurations`

#### `leaderboardConfigurations.delete()`

Delete the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `leaderboardConfigurations.get()`

Retrieves the metadata of the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `leaderboardConfigurations.insert()`

Insert a new leaderboard configuration in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.resource` | `object` | Yes | The request body. |

#### `leaderboardConfigurations.list()`

Returns a list of the leaderboard configurations in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.maxResults` | `integer` | No | The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `leaderboardConfigurations.update()`

Update the metadata of the leaderboard configuration with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.resource` | `object` | Yes | The request body. |