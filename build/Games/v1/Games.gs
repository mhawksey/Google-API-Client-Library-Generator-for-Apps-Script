
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


    this.snapshots = {};
    this.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/snapshots', 'GET', apiParams, clientConfig);
    this.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);

    this.achievements = {};
    this.achievements.reveal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/reveal', 'POST', apiParams, clientConfig);
    this.achievements.setStepsAtLeast = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/setStepsAtLeast', 'POST', apiParams, clientConfig);
    this.achievements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/achievements', 'GET', apiParams, clientConfig);
    this.achievements.unlock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/unlock', 'POST', apiParams, clientConfig);
    this.achievements.updateMultiple = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/updateMultiple', 'POST', apiParams, clientConfig);
    this.achievements.increment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements/{achievementId}/increment', 'POST', apiParams, clientConfig);

    this.leaderboards = {};
    this.leaderboards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}', 'GET', apiParams, clientConfig);
    this.leaderboards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards', 'GET', apiParams, clientConfig);

    this.events = {};
    this.events.record = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/events', 'POST', apiParams, clientConfig);
    this.events.listByPlayer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/events', 'GET', apiParams, clientConfig);
    this.events.listDefinitions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/eventDefinitions', 'GET', apiParams, clientConfig);

    this.recall = {};
    this.recall.resetPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:resetPersona', 'POST', apiParams, clientConfig);
    this.recall.gamesPlayerTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/gamesPlayerTokens/{sessionId}', 'GET', apiParams, clientConfig);
    this.recall.unlinkPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:unlinkPersona', 'POST', apiParams, clientConfig);
    this.recall.linkPersona = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall:linkPersona', 'POST', apiParams, clientConfig);
    this.recall.retrieveTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/tokens/{sessionId}', 'GET', apiParams, clientConfig);
    this.recall.lastTokenFromAllDeveloperGames = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/recall/developerGamesLastPlayerToken/{sessionId}', 'GET', apiParams, clientConfig);

    this.achievementDefinitions = {};
    this.achievementDefinitions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/achievements', 'GET', apiParams, clientConfig);

    this.revisions = {};
    this.revisions.check = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/revisions/check', 'GET', apiParams, clientConfig);

    this.stats = {};
    this.stats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/stats', 'GET', apiParams, clientConfig);

    this.accesstokens = {};
    this.accesstokens.generateRecallPlayGroupingApiToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/accesstokens/generateRecallPlayGroupingApiToken', 'POST', apiParams, clientConfig);
    this.accesstokens.generatePlayGroupingApiToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/accesstokens/generatePlayGroupingApiToken', 'POST', apiParams, clientConfig);

    this.metagame = {};
    this.metagame.getMetagameConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/metagameConfig', 'GET', apiParams, clientConfig);
    this.metagame.listCategoriesByPlayer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/categories/{collection}', 'GET', apiParams, clientConfig);

    this.applications = {};
    this.applications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/{applicationId}', 'GET', apiParams, clientConfig);
    this.applications.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/{applicationId}/verify', 'GET', apiParams, clientConfig);
    this.applications.getEndPoint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/getEndPoint', 'POST', apiParams, clientConfig);
    this.applications.played = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/applications/played', 'POST', apiParams, clientConfig);

    this.scores = {};
    this.scores.listWindow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/window/{collection}', 'GET', apiParams, clientConfig);
    this.scores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}', 'GET', apiParams, clientConfig);
    this.scores.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores', 'POST', apiParams, clientConfig);
    this.scores.submitMultiple = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/scores', 'POST', apiParams, clientConfig);
    this.scores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/leaderboards/{leaderboardId}/scores/{collection}', 'GET', apiParams, clientConfig);

    this.players = {};
    this.players.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/players/{collection}', 'GET', apiParams, clientConfig);
    this.players.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/{playerId}', 'GET', apiParams, clientConfig);
    this.players.getMultipleApplicationPlayerIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/multipleApplicationPlayerIds', 'GET', apiParams, clientConfig);
    this.players.getScopedPlayerIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1/players/me/scopedIds', 'GET', apiParams, clientConfig);
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
