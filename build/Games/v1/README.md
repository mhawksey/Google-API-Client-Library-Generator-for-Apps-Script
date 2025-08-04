# Google Play Games Services API - Apps Script Client Library

Auto-generated client library for using the **Google Play Games Services API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:22:03 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:22:03 GMT
- **Created:** Sun, 20 Jul 2025 16:34:07 GMT



---

## API Reference

### `achievementDefinitions`

#### `achievementDefinitions.list()`

Lists all the achievement definitions for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `achievements`

#### `achievements.increment()`

Increments the steps of the achievement with the given ID for the currently authenticated player.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |
| `params.requestId` | `string` | No | A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries. |
| `params.stepsToIncrement` | `integer` | Yes | Required. The number of steps to increment. |

#### `achievements.list()`

Lists the progress for all your application's achievements for the currently authenticated player.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.state` | `string` | No | Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned. |

#### `achievements.reveal()`

Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievements.setStepsAtLeast()`

Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |
| `params.steps` | `integer` | Yes | Required. The minimum value to set the steps to. |

#### `achievements.unlock()`

Unlocks this achievement for the currently authenticated player.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.achievementId` | `string` | Yes | The ID of the achievement used by this method. |

#### `achievements.updateMultiple()`

Updates multiple achievements for the currently authenticated player.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `applications`

#### `applications.get()`

Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.platformType` | `string` | No | Restrict application details returned to the specific platform. |

#### `applications.played()`

Indicate that the currently authenticated user is playing your application.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `applications.verify()`

Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The application ID from the Google Play developer console. |

#### `applications.getEndPoint()`

Returns a URL for the requested end point type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | No | The application ID from the Google Play developer console. |
| `params.endPointType` | `string` | No | Type of endpoint being requested. |

### `events`

#### `events.listByPlayer()`

Returns a list showing the current progress on events in this application for the currently authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `events.listDefinitions()`

Returns a list of the event definitions in this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `events.record()`

Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.resource` | `object` | Yes | The request body. |

### `leaderboards`

#### `leaderboards.get()`

Retrieves the metadata of the leaderboard with the given ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |

#### `leaderboards.list()`

Lists all the leaderboard metadata for your application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `metagame`

#### `metagame.getMetagameConfig()`

Return the metagame configuration data for the calling application.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `metagame.listCategoriesByPlayer()`

List play data aggregated per category for the player corresponding to `playerId`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |
| `params.collection` | `string` | Yes | The collection of categories for which data will be returned. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `players`

#### `players.get()`

Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.playerIdConsistencyToken` | `string` | No | Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto |

#### `players.getScopedPlayerIds()`

Retrieves scoped player identifiers for currently authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `players.getMultipleApplicationPlayerIds()`

Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationIds` | `string` | No | Required. The application IDs from the Google Play developer console for the games to return scoped ids for. |

#### `players.list()`

Get the collection of players for the currently authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.collection` | `string` | Yes | Collection of players being retrieved |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `revisions`

#### `revisions.check()`

Checks whether the games client is out of date.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientRevision` | `string` | Yes | Required. The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App. |

### `scores`

#### `scores.get()`

Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application. |
| `params.timeSpan` | `string` | Yes | The time span for the scores and ranks you're requesting. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.includeRankType` | `string` | No | The types of ranks to return. If the parameter is omitted, no ranks will be returned. |
| `params.maxResults` | `integer` | No | The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `scores.list()`

Lists the scores in a leaderboard, starting from the top.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.collection` | `string` | Yes | The collection of scores you're requesting. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.timeSpan` | `string` | Yes | Required. The time span for the scores and ranks you're requesting. |
| `params.maxResults` | `integer` | No | The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `scores.listWindow()`

Lists the scores in a leaderboard around (and including) a player's score.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.collection` | `string` | Yes | The collection of scores you're requesting. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.timeSpan` | `string` | Yes | Required. The time span for the scores and ranks you're requesting. |
| `params.maxResults` | `integer` | No | The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`. |
| `params.resultsAbove` | `integer` | No | The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults. |
| `params.returnTopIfAbsent` | `boolean` | No | True if the top scores should be returned when the player is not in the leaderboard. Defaults to true. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `scores.submit()`

Submits a score to the specified leaderboard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.leaderboardId` | `string` | Yes | The ID of the leaderboard. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.score` | `string` | Yes | Required. The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units. |
| `params.scoreTag` | `string` | No | Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986. |

#### `scores.submitMultiple()`

Submits multiple scores to leaderboards.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.resource` | `object` | Yes | The request body. |

### `snapshots`

#### `snapshots.get()`

Retrieves the metadata for a given snapshot ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |

#### `snapshots.list()`

Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.playerId` | `string` | Yes | A player ID. A value of `me` may be used in place of the authenticated player's ID. |
| `params.language` | `string` | No | The preferred language to use for strings returned by this method. |
| `params.maxResults` | `integer` | No | The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `stats`

#### `stats.get()`

Returns engagement and spend statistics in this application for the currently authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `recall`

#### `recall.linkPersona()`

Associate the PGS Player principal encoded in the provided recall session id with an in-game account

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `recall.retrieveTokens()`

Retrieve all Recall tokens associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sessionId` | `string` | Yes | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. |

#### `recall.lastTokenFromAllDeveloperGames()`

Retrieve the last Recall token from all developer games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sessionId` | `string` | Yes | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. |

#### `recall.gamesPlayerTokens()`

Retrieve the Recall tokens from all requested games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have an active PGS Player profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sessionId` | `string` | Yes | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. |
| `params.applicationIds` | `string` | No | Required. The application IDs from the Google Play developer console for the games to return scoped ids for. |

#### `recall.unlinkPersona()`

Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `recall.resetPersona()`

Delete all Recall tokens linking the given persona to any player (with or without a profile).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `accesstokens`

#### `accesstokens.generatePlayGroupingApiToken()`

Generates a Play Grouping API token for the PGS user identified by the attached credential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | No | Required. App package name to generate the token for (e.g. com.example.mygame). |
| `params.persona` | `string` | No | Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system. |

#### `accesstokens.generateRecallPlayGroupingApiToken()`

Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | No | Required. App package name to generate the token for (e.g. com.example.mygame). |
| `params.persona` | `string` | No | Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system. |
| `params.recallSessionId` | `string` | No | Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. See https://developer.android.com/games/pgs/recall/recall-setup on how to integrate with Recall and get session ID. |