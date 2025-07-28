
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
    this.achievementDefinitions.list = (params) => this._makeRequest('games/v1/achievements', 'GET', params);

    this.achievements = {};
    this.achievements.increment = (params) => this._makeRequest('games/v1/achievements/{achievementId}/increment', 'POST', params);
    this.achievements.list = (params) => this._makeRequest('games/v1/players/{playerId}/achievements', 'GET', params);
    this.achievements.reveal = (params) => this._makeRequest('games/v1/achievements/{achievementId}/reveal', 'POST', params);
    this.achievements.setStepsAtLeast = (params) => this._makeRequest('games/v1/achievements/{achievementId}/setStepsAtLeast', 'POST', params);
    this.achievements.unlock = (params) => this._makeRequest('games/v1/achievements/{achievementId}/unlock', 'POST', params);
    this.achievements.updateMultiple = (params) => this._makeRequest('games/v1/achievements/updateMultiple', 'POST', params);

    this.applications = {};
    this.applications.get = (params) => this._makeRequest('games/v1/applications/{applicationId}', 'GET', params);
    this.applications.played = (params) => this._makeRequest('games/v1/applications/played', 'POST', params);
    this.applications.verify = (params) => this._makeRequest('games/v1/applications/{applicationId}/verify', 'GET', params);
    this.applications.getEndPoint = (params) => this._makeRequest('games/v1/applications/getEndPoint', 'POST', params);

    this.events = {};
    this.events.listByPlayer = (params) => this._makeRequest('games/v1/events', 'GET', params);
    this.events.listDefinitions = (params) => this._makeRequest('games/v1/eventDefinitions', 'GET', params);
    this.events.record = (params) => this._makeRequest('games/v1/events', 'POST', params);

    this.leaderboards = {};
    this.leaderboards.get = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}', 'GET', params);
    this.leaderboards.list = (params) => this._makeRequest('games/v1/leaderboards', 'GET', params);

    this.metagame = {};
    this.metagame.getMetagameConfig = (params) => this._makeRequest('games/v1/metagameConfig', 'GET', params);
    this.metagame.listCategoriesByPlayer = (params) => this._makeRequest('games/v1/players/{playerId}/categories/{collection}', 'GET', params);

    this.players = {};
    this.players.get = (params) => this._makeRequest('games/v1/players/{playerId}', 'GET', params);
    this.players.getScopedPlayerIds = (params) => this._makeRequest('games/v1/players/me/scopedIds', 'GET', params);
    this.players.getMultipleApplicationPlayerIds = (params) => this._makeRequest('games/v1/players/me/multipleApplicationPlayerIds', 'GET', params);
    this.players.list = (params) => this._makeRequest('games/v1/players/me/players/{collection}', 'GET', params);

    this.revisions = {};
    this.revisions.check = (params) => this._makeRequest('games/v1/revisions/check', 'GET', params);

    this.scores = {};
    this.scores.get = (params) => this._makeRequest('games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}', 'GET', params);
    this.scores.list = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores/{collection}', 'GET', params);
    this.scores.listWindow = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/window/{collection}', 'GET', params);
    this.scores.submit = (params) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores', 'POST', params);
    this.scores.submitMultiple = (params) => this._makeRequest('games/v1/leaderboards/scores', 'POST', params);

    this.snapshots = {};
    this.snapshots.get = (params) => this._makeRequest('games/v1/snapshots/{snapshotId}', 'GET', params);
    this.snapshots.list = (params) => this._makeRequest('games/v1/players/{playerId}/snapshots', 'GET', params);

    this.stats = {};
    this.stats.get = (params) => this._makeRequest('games/v1/stats', 'GET', params);

    this.recall = {};
    this.recall.linkPersona = (params) => this._makeRequest('games/v1/recall:linkPersona', 'POST', params);
    this.recall.retrieveTokens = (params) => this._makeRequest('games/v1/recall/tokens/{sessionId}', 'GET', params);
    this.recall.lastTokenFromAllDeveloperGames = (params) => this._makeRequest('games/v1/recall/developerGamesLastPlayerToken/{sessionId}', 'GET', params);
    this.recall.gamesPlayerTokens = (params) => this._makeRequest('games/v1/recall/gamesPlayerTokens/{sessionId}', 'GET', params);
    this.recall.unlinkPersona = (params) => this._makeRequest('games/v1/recall:unlinkPersona', 'POST', params);
    this.recall.resetPersona = (params) => this._makeRequest('games/v1/recall:resetPersona', 'POST', params);

    this.accesstokens = {};
    this.accesstokens.generatePlayGroupingApiToken = (params) => this._makeRequest('games/v1/accesstokens/generatePlayGroupingApiToken', 'POST', params);
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
