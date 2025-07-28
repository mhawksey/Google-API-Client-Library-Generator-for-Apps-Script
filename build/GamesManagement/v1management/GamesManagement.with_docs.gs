
/**
 * Google Apps Script client library for the Google Play Games Services Management API
 * Documentation URL: https://developers.google.com/games/
 * @class
 */
class GamesManagement {
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
    this._rootUrl = 'https://gamesmanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.achievements = {};

    /**
     * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievements.reset = (params) => this._makeRequest('games/v1management/achievements/{achievementId}/reset', 'POST', params);

    /**
     * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     * @return {object} The API response object.
     */
    this.achievements.resetAll = (params) => this._makeRequest('games/v1management/achievements/reset', 'POST', params);

    /**
     * Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
     * @return {object} The API response object.
     */
    this.achievements.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/resetAllForAllPlayers', 'POST', params);

    /**
     * Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievements.resetForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/{achievementId}/resetForAllPlayers', 'POST', params);

    /**
     * Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.achievements.resetMultipleForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/resetMultipleForAllPlayers', 'POST', params);

    this.events = {};

    /**
     * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {string} params.eventId - (Required) The ID of the event.
     * @return {object} The API response object.
     */
    this.events.reset = (params) => this._makeRequest('games/v1management/events/{eventId}/reset', 'POST', params);

    /**
     * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @return {object} The API response object.
     */
    this.events.resetAll = (params) => this._makeRequest('games/v1management/events/reset', 'POST', params);

    /**
     * Resets all draft events for all players. This method is only available to user accounts for your developer console.
     * @return {object} The API response object.
     */
    this.events.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/events/resetAllForAllPlayers', 'POST', params);

    /**
     * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
     * @param {string} params.eventId - (Required) The ID of the event.
     * @return {object} The API response object.
     */
    this.events.resetForAllPlayers = (params) => this._makeRequest('games/v1management/events/{eventId}/resetForAllPlayers', 'POST', params);

    /**
     * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.resetMultipleForAllPlayers = (params) => this._makeRequest('games/v1management/events/resetMultipleForAllPlayers', 'POST', params);

    this.players = {};

    /**
     * Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @return {object} The API response object.
     */
    this.players.hide = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'POST', params);

    /**
     * Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} params.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @return {object} The API response object.
     */
    this.players.unhide = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'DELETE', params);

    this.applications = {};

    /**
     * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {integer} params.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.applications.listHidden = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden', 'GET', params);

    this.scores = {};

    /**
     * Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @return {object} The API response object.
     */
    this.scores.reset = (params) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/reset', 'POST', params);

    /**
     * Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
     * @return {object} The API response object.
     */
    this.scores.resetAll = (params) => this._makeRequest('games/v1management/scores/reset', 'POST', params);

    /**
     * Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
     * @return {object} The API response object.
     */
    this.scores.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/scores/resetAllForAllPlayers', 'POST', params);

    /**
     * Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @return {object} The API response object.
     */
    this.scores.resetForAllPlayers = (params) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers', 'POST', params);

    /**
     * Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.scores.resetMultipleForAllPlayers = (params) => this._makeRequest('games/v1management/scores/resetMultipleForAllPlayers', 'POST', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
