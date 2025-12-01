
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://games.googleapis.com/';
    this._servicePath = '';


    this.achievementDefinitions = {};

    /**
     * Lists all the achievement definitions for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievementDefinitions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements', 'GET', apiParams, clientConfig);

    this.achievements = {};

    /**
     * Increments the steps of the achievement with the given ID for the currently authenticated player.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {string} apiParams.requestId - A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
     * @param {integer} apiParams.stepsToIncrement - (Required) Required. The number of steps to increment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.increment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/increment', 'POST', apiParams, clientConfig);

    /**
     * Lists the progress for all your application's achievements for the currently authenticated player.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} apiParams.state - Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/achievements', 'GET', apiParams, clientConfig);

    /**
     * Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.reveal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/reveal', 'POST', apiParams, clientConfig);

    /**
     * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {integer} apiParams.steps - (Required) Required. The minimum value to set the steps to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.setStepsAtLeast = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/setStepsAtLeast', 'POST', apiParams, clientConfig);

    /**
     * Unlocks this achievement for the currently authenticated player.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.unlock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/unlock', 'POST', apiParams, clientConfig);

    /**
     * Updates multiple achievements for the currently authenticated player.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.updateMultiple = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/updateMultiple', 'POST', apiParams, clientConfig);

    this.applications = {};

    /**
     * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.platformType - Restrict application details returned to the specific platform.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/{applicationId}', 'GET', apiParams, clientConfig);

    /**
     * Indicate that the currently authenticated user is playing your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.played = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/played', 'POST', apiParams, clientConfig);

    /**
     * Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/{applicationId}/verify', 'GET', apiParams, clientConfig);

    /**
     * Returns a URL for the requested end point type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - The application ID from the Google Play developer console.
     * @param {string} apiParams.endPointType - Type of endpoint being requested.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.getEndPoint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/getEndPoint', 'POST', apiParams, clientConfig);

    this.events = {};

    /**
     * Returns a list showing the current progress on events in this application for the currently authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.listByPlayer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/events', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of the event definitions in this application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.listDefinitions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/eventDefinitions', 'GET', apiParams, clientConfig);

    /**
     * Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.record = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/events', 'POST', apiParams, clientConfig);

    this.leaderboards = {};

    /**
     * Retrieves the metadata of the leaderboard with the given ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.leaderboards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}', 'GET', apiParams, clientConfig);

    /**
     * Lists all the leaderboard metadata for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.leaderboards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards', 'GET', apiParams, clientConfig);

    this.metagame = {};

    /**
     * Return the metagame configuration data for the calling application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.metagame.getMetagameConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/metagameConfig', 'GET', apiParams, clientConfig);

    /**
     * List play data aggregated per category for the player corresponding to `playerId`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collection - (Required) The collection of categories for which data will be returned.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.metagame.listCategoriesByPlayer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/categories/{collection}', 'GET', apiParams, clientConfig);

    this.players = {};

    /**
     * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} apiParams.playerIdConsistencyToken - Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves scoped player identifiers for currently authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.getScopedPlayerIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/scopedIds', 'GET', apiParams, clientConfig);

    /**
     * Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationIds - Required. The application IDs from the Google Play developer console for the games to return scoped ids for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.getMultipleApplicationPlayerIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/multipleApplicationPlayerIds', 'GET', apiParams, clientConfig);

    /**
     * Get the collection of players for the currently authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collection - (Required) Collection of players being retrieved
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/players/{collection}', 'GET', apiParams, clientConfig);

    this.revisions = {};

    /**
     * Checks whether the games client is out of date.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientRevision - (Required) Required. The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.revisions.check = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/revisions/check', 'GET', apiParams, clientConfig);

    this.scores = {};

    /**
     * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.includeRankType - The types of ranks to return. If the parameter is omitted, no ranks will be returned.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
     * @param {integer} apiParams.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {string} apiParams.timeSpan - (Required) The time span for the scores and ranks you're requesting.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}', 'GET', apiParams, clientConfig);

    /**
     * Lists the scores in a leaderboard, starting from the top.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collection - (Required) The collection of scores you're requesting.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {integer} apiParams.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.timeSpan - (Required) Required. The time span for the scores and ranks you're requesting.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores/{collection}', 'GET', apiParams, clientConfig);

    /**
     * Lists the scores in a leaderboard around (and including) a player's score.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collection - (Required) The collection of scores you're requesting.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {integer} apiParams.maxResults - The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {integer} apiParams.resultsAbove - The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
     * @param {boolean} apiParams.returnTopIfAbsent - True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
     * @param {string} apiParams.timeSpan - (Required) Required. The time span for the scores and ranks you're requesting.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.listWindow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/window/{collection}', 'GET', apiParams, clientConfig);

    /**
     * Submits a score to the specified leaderboard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {string} apiParams.score - (Required) Required. The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
     * @param {string} apiParams.scoreTag - Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores', 'POST', apiParams, clientConfig);

    /**
     * Submits multiple scores to leaderboards.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.submitMultiple = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/scores', 'POST', apiParams, clientConfig);

    this.snapshots = {};

    /**
     * Retrieves the metadata for a given snapshot ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {string} apiParams.snapshotId - (Required) The ID of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of snapshots created by your application for the player corresponding to the player ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The preferred language to use for strings returned by this method.
     * @param {integer} apiParams.maxResults - The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/snapshots', 'GET', apiParams, clientConfig);

    this.stats = {};

    /**
     * Returns engagement and spend statistics in this application for the currently authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/stats', 'GET', apiParams, clientConfig);

    this.recall = {};

    /**
     * Associate the PGS Player principal encoded in the provided recall session id with an in-game account
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.linkPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:linkPersona', 'POST', apiParams, clientConfig);

    /**
     * Retrieve all Recall tokens associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.retrieveTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/tokens/{sessionId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieve the last Recall token from all developer games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have active PGS Player profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.lastTokenFromAllDeveloperGames = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/developerGamesLastPlayerToken/{sessionId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieve the Recall tokens from all requested games that is associated with the PGS Player encoded in the provided recall session id. The API is only available for users that have an active PGS Player profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationIds - Required. The application IDs from the Google Play developer console for the games to return scoped ids for.
     * @param {string} apiParams.sessionId - (Required) Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.gamesPlayerTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/gamesPlayerTokens/{sessionId}', 'GET', apiParams, clientConfig);

    /**
     * Delete a Recall token linking the PGS Player principal identified by the Recall session and an in-game account identified either by the 'persona' or by the token value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.unlinkPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:unlinkPersona', 'POST', apiParams, clientConfig);

    /**
     * Delete all Recall tokens linking the given persona to any player (with or without a profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recall.resetPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:resetPersona', 'POST', apiParams, clientConfig);

    this.accesstokens = {};

    /**
     * Generates a Play Grouping API token for the PGS user identified by the attached credential.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - Required. App package name to generate the token for (e.g. com.example.mygame).
     * @param {string} apiParams.persona - Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accesstokens.generatePlayGroupingApiToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/accesstokens/generatePlayGroupingApiToken', 'POST', apiParams, clientConfig);

    /**
     * Generates a Play Grouping API token for the PGS user identified by the Recall session ID provided in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - Required. App package name to generate the token for (e.g. com.example.mygame).
     * @param {string} apiParams.persona - Required. Persona to associate with the token. Persona is a developer-provided stable identifier of the user. Must be deterministically generated (e.g. as a one-way hash) from the user account ID and user profile ID (if the app has the concept), according to the developer's own user identity system.
     * @param {string} apiParams.recallSessionId - Required. Opaque server-generated string that encodes all the necessary information to identify the PGS player / Google user and application. See https://developer.android.com/games/pgs/recall/recall-setup on how to integrate with Recall and get session ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accesstokens.generateRecallPlayGroupingApiToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/accesstokens/generateRecallPlayGroupingApiToken', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
