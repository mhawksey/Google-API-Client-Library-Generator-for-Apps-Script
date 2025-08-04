# Google Play Games Services Management API - Apps Script Client Library

Auto-generated client library for using the **Google Play Games Services Management API (version: v1management)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:22:11 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:22:11 GMT
- **Created:** Sun, 20 Jul 2025 16:34:12 GMT



---

## API Reference

### `achievements`

#### `achievements.reset()`

Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievements.resetAll()`

Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `achievements.resetAllForAllPlayers()`

Resets all draft achievements for all players. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `achievements.resetForAllPlayers()`

Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievements.resetMultipleForAllPlayers()`

Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `events`

#### `events.reset()`

Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.eventId` | `string` | Yes | The ID of the event. |

#### `events.resetAll()`

Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `events.resetAllForAllPlayers()`

Resets all draft events for all players. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `events.resetForAllPlayers()`

Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.eventId` | `string` | Yes | The ID of the event. |

#### `events.resetMultipleForAllPlayers()`

Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `players`

#### `players.hide()`

Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |

#### `players.unhide()`

Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |

### `applications`

#### `applications.listHidden()`

Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.maxResults` | `integer` | No | The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `scores`

#### `scores.reset()`

Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `scores.resetAll()`

Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `scores.resetAllForAllPlayers()`

Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `scores.resetForAllPlayers()`

Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |

#### `scores.resetMultipleForAllPlayers()`

Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |