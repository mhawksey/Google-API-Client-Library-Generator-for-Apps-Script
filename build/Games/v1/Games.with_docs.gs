
/**
 * Google Apps Script client library for the Google Play Games Services API
 * Documentation URL: https://developers.google.com/games/
 * @class
 */
class Games {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://games.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.achievementDefinitions = {};

    /**
     * Lists all the achievement definitions for your application.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.achievementDefinitions.list = (params) => this._makeRequest('games/v1/achievements', 'GET', params);

    this.achievements = {};

    /**
     * Increments the steps of the achievement with the given ID for the currently authenticated player.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @param {string} params.requestId - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param {integer} params.stepsToIncrement - (Required) Required. The number of steps to increment.
     * @return {object} The API response object.
     */
    this.achievements.increment = (params) => this._makeRequest('games/v1/achievements/{achievementId}/increment', 'POST', params);

    /**
     * Lists the progress for all your application's achievements for the currently authenticated player.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} params.state - Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
     * @return {object} The API response object.
     */
    this.achievements.list = (params) => this._makeRequest('games/v1/players/{playerId}/achievements', 'GET', params);

    /**
     * Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievements.reveal = (params) => this._makeRequest('games/v1/achievements/{achievementId}/reveal', 'POST', params);

    /**
     * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @param {integer} params.steps - (Required) Required. The minimum value to set the steps to.
     * @return {object} The API response object.
     */
    this.achievements.setStepsAtLeast = (params) => this._makeRequest('games/v1/achievements/{achievementId}/setStepsAtLeast', 'POST', params);

    /**
     * Unlocks this achievement for the currently authenticated player.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievements.unlock = (params) => this._makeRequest('games/v1/achievements/{achievementId}/unlock', 'POST', params);

    /**
     * Updates multiple achievements for the currently authenticated player.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.achievements.updateMultiple = (params) => this._makeRequest('games/v1/achievements/updateMultiple', 'POST', params);

    this.applications = {};

    /**
     * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.platformType - Restrict application details returned to the specific platform.
     * @return {object} The API response object.
     */
    this.applications.get = (params) => this._makeRequest('games/v1/applications/{applicationId}', 'GET', params);

    /**
     * Indicate that the currently authenticated user is playing your application.
     * @return {object} The API response object.
     */
    this.applications.played = (params) => this._makeRequest('games/v1/applications/played', 'POST', params);

    /**
     * Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @return {object} The API response object.
     */
    this.applications.verify = (params) => this._makeRequest('games/v1/applications/{applicationId}/verify', 'GET', params);

    /**
     * Returns a URL for the requested end point type.
     * @param {string} params.applicationId - The application ID from the Google Play developer console.
     * @param {string} params.endPointType - Type of endpoint being requested.
     * @return {object} The API response object.
     */
    this.applications.getEndPoint = (params) => this._makeRequest('games/v1/applications/getEndPoint', 'POST', params);

    this.events = {};

    /**
     * Returns a list showing the current progress on events in this application for the currently authenticated user.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.events.listByPlayer = (params) => this._makeRequest('games/v1/events', 'GET', params);

    /**
     * Returns a list of the event definitions in this application.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.events.listDefinitions = (params) => this._makeRequest('games/v1/eventDefinitions', 'GET', params);

    /**
     * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.record = (params) => this._makeRequest('games/v1/events', 'POST', params);

    this.leaderboards = {};

    /**
     * Retrieves the metadata of the leaderboard with the given ID.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @return {object} The API response object.
     */
    this.leaderboards.get = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}', 'GET', params);

    /**
     * Lists all the leaderboard metadata for your application.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.leaderboards.list = (params) => this._makeRequest('games/v1/leaderboards', 'GET', params);

    this.metagame = {};

    /**
     * Return the metagame configuration data for the calling application.
     * @return {object} The API response object.
     */
    this.metagame.getMetagameConfig = (params) => this._makeRequest('games/v1/metagameConfig', 'GET', params);

    /**
     * List play data aggregated per category for the player corresponding to `playerId`.
     * @param {string} params.collection - (Required) The collection of categories for which data will be returned.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @return {object} The API response object.
     */
    this.metagame.listCategoriesByPlayer = (params) => this._makeRequest('games/v1/players/{playerId}/categories/{collection}', 'GET', params);

    this.players = {};

    /**
     * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} params.playerIdConsistencyToken - Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto
     * @return {object} The API response object.
     */
    this.players.get = (params) => this._makeRequest('games/v1/players/{playerId}', 'GET', params);

    /**
     * Retrieves scoped player identifiers for currently authenticated user.
     * @return {object} The API response object.
     */
    this.players.getScopedPlayerIds = (params) => this._makeRequest('games/v1/players/me/scopedIds', 'GET', params);

    /**
     * Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
     * @param {string} params.applicationIds - Required. The application IDs from the Google Play developer console for the games to return scoped ids for.
     * @return {object} The API response object.
     */
    this.players.getMultipleApplicationPlayerIds = (params) => this._makeRequest('games/v1/players/me/multipleApplicationPlayerIds', 'GET', params);

    /**
     * Get the collection of players for the currently authenticated user.
     * @param {string} params.collection - (Required) Collection of players being retrieved
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.players.list = (params) => this._makeRequest('games/v1/players/me/players/{collection}', 'GET', params);

    this.revisions = {};

    /**
     * Checks whether the games client is out of date.
     * @param {string} params.clientRevision - (Required) Required. The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.
     * @return {object} The API response object.
     */
    this.revisions.check = (params) => this._makeRequest('games/v1/revisions/check', 'GET', params);

    this.scores = {};

    /**
     * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
     * @param {string} params.includeRankType - The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
     * @param {integer} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} params.timeSpan - (Required) The time span for the scores and ranks you're requesting.
     * @return {object} The API response object.
     */
    this.scores.get = (params) => this._makeRequest('games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}', 'GET', params);

    /**
     * Lists the scores in a leaderboard, starting from the top.
     * @param {string} params.collection - (Required) The collection of scores you're requesting.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @param {integer} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.timeSpan - (Required) Required. The time span for the scores and ranks you're requesting.
     * @return {object} The API response object.
     */
    this.scores.list = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores/{collection}', 'GET', params);

    /**
     * Lists the scores in a leaderboard around (and including) a player's score.
     * @param {string} params.collection - (Required) The collection of scores you're requesting.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @param {integer} params.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {integer} params.resultsAbove - The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     * @param {boolean} params.returnTopIfAbsent - True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     * @param {string} params.timeSpan - (Required) Required. The time span for the scores and ranks you're requesting.
     * @return {object} The API response object.
     */
    this.scores.listWindow = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/window/{collection}', 'GET', params);

    /**
     * Submits a score to the specified leaderboard.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @param {string} params.score - (Required) Required. The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
     * @param {string} params.scoreTag - Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     * @return {object} The API response object.
     */
    this.scores.submit = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores', 'POST', params);

    /**
     * Submits multiple scores to leaderboards.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.scores.submitMultiple = (params) => this._makeRequest('games/v1/leaderboards/scores', 'POST', params);

    this.snapshots = {};

    /**
     * Retrieves the metadata for a given snapshot ID.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {string} params.snapshotId - (Required) The ID of the snapshot.
     * @return {object} The API response object.
     */
    this.snapshots.get = (params) => this._makeRequest('games/v1/snapshots/{snapshotId}', 'GET', params);

    /**
     * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
     * @param {string} params.language - The preferred language to use for strings returned by this method.
     * @param {integer} params.maxResults - The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @return {object} The API response object.
     */
    this.snapshots.list = (params) => this._makeRequest('games/v1/players/{playerId}/snapshots', 'GET', params);

    this.stats = {};

    /**
     * Returns engagement and spend statistics in this application for the currently authenticated user.
     * @return {object} The API response object.
     */
    this.stats.get = (params) => this._makeRequest('games/v1/stats', 'GET', params);

    this.recall = {};

    /**
     * Associate the PGS Player principal encoded in the provided recall session id with an in-game account
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.recall.linkPersona = (params) => this._makeRequest('games/v1/recall:linkPersona', 'POST', params);

    /**
     * Retrieve all Recall tokens associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.
     * @param {string} params.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @return {object} The API response object.
     */
    this.recall.retrieveTokens = (params) => this._makeRequest('games/v1/recall/tokens/{sessionId}', 'GET', params);

    /**
     * Retrieve the last Recall token from all developer games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.
     * @param {string} params.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @return {object} The API response object.
     */
    this.recall.lastTokenFromAllDeveloperGames = (params) => this._makeRequest('games/v1/recall/developerGamesLastPlayerToken/{sessionId}', 'GET', params);

    /**
     * Retrieve the Recall tokens from all requested games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have an active PGS Player profile.
     * @param {string} params.applicationIds - Required. The application IDs from the Google Play developer console for the games to return scoped ids for.
     * @param {string} params.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @return {object} The API response object.
     */
    this.recall.gamesPlayerTokens = (params) => this._makeRequest('games/v1/recall/gamesPlayerTokens/{sessionId}', 'GET', params);

    /**
     * Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.recall.unlinkPersona = (params) => this._makeRequest('games/v1/recall:unlinkPersona', 'POST', params);

    /**
     * Delete all Recall tokens linking the given persona to any player (with or without a profile).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.recall.resetPersona = (params) => this._makeRequest('games/v1/recall:resetPersona', 'POST', params);

    this.accesstokens = {};

    /**
     * Generates a Play Grouping API token for the PGS user identified by the attached credential.
     * @param {string} params.packageName - Required. App package name to generate the token for (e.g. com.example.mygame).
     * @param {string} params.persona - Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system.
     * @return {object} The API response object.
     */
    this.accesstokens.generatePlayGroupingApiToken = (params) => this._makeRequest('games/v1/accesstokens/generatePlayGroupingApiToken', 'POST', params);

    /**
     * Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.
     * @param {string} params.packageName - Required. App package name to generate the token for (e.g. com.example.mygame).
     * @param {string} params.persona - Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system.
     * @param {string} params.recallSessionId - Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. See https://developer.android.com/games/pgs/recall/recall-setup on how to integrate with Recall and get session ID.
     * @return {object} The API response object.
     */
    this.accesstokens.generateRecallPlayGroupingApiToken = (params) => this._makeRequest('games/v1/accesstokens/generateRecallPlayGroupingApiToken', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
