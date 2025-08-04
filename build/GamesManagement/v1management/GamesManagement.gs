
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
    this.achievements.reset = (params) => this._makeRequest('games/v1management/achievements/{achievementId}/reset', 'POST', params);
    this.achievements.resetAll = (params) => this._makeRequest('games/v1management/achievements/reset', 'POST', params);
    this.achievements.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/resetAllForAllPlayers', 'POST', params);
    this.achievements.resetForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/{achievementId}/resetForAllPlayers', 'POST', params);
    this.achievements.resetMultipleForAllPlayers = (params) => this._makeRequest('games/v1management/achievements/resetMultipleForAllPlayers', 'POST', params);

    this.events = {};
    this.events.reset = (params) => this._makeRequest('games/v1management/events/{eventId}/reset', 'POST', params);
    this.events.resetAll = (params) => this._makeRequest('games/v1management/events/reset', 'POST', params);
    this.events.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/events/resetAllForAllPlayers', 'POST', params);
    this.events.resetForAllPlayers = (params) => this._makeRequest('games/v1management/events/{eventId}/resetForAllPlayers', 'POST', params);
    this.events.resetMultipleForAllPlayers = (params) => this._makeRequest('games/v1management/events/resetMultipleForAllPlayers', 'POST', params);

    this.players = {};
    this.players.hide = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'POST', params);
    this.players.unhide = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'DELETE', params);

    this.applications = {};
    this.applications.listHidden = (params) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden', 'GET', params);

    this.scores = {};
    this.scores.reset = (params) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/reset', 'POST', params);
    this.scores.resetAll = (params) => this._makeRequest('games/v1management/scores/reset', 'POST', params);
    this.scores.resetAllForAllPlayers = (params) => this._makeRequest('games/v1management/scores/resetAllForAllPlayers', 'POST', params);
    this.scores.resetForAllPlayers = (params) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers', 'POST', params);
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
