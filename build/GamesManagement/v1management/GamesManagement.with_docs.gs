
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gamesmanagement.googleapis.com/';
    this._servicePath = '';


    this.achievements = {};

    /**
     * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/achievements/{achievementId}/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.resetAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/achievements/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.resetAllForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/achievements/resetAllForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.achievementId - (Required) The ID of the achievement used by this method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.resetForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/achievements/{achievementId}/resetForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.achievements.resetMultipleForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/achievements/resetMultipleForAllPlayers', 'POST', apiParams, clientConfig);

    this.events = {};

    /**
     * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.eventId - (Required) The ID of the event.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/events/{eventId}/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.resetAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/events/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets all draft events for all players. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.resetAllForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/events/resetAllForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.eventId - (Required) The ID of the event.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.resetForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/events/{eventId}/resetForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.resetMultipleForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/events/resetMultipleForAllPlayers', 'POST', apiParams, clientConfig);

    this.players = {};

    /**
     * Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.hide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'POST', apiParams, clientConfig);

    /**
     * Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {string} apiParams.playerId - (Required) A player ID. A value of `me` may be used in place of the authenticated player's ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.players.unhide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden/{playerId}', 'DELETE', apiParams, clientConfig);

    this.applications = {};

    /**
     * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {integer} apiParams.maxResults - The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.listHidden = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/applications/{applicationId}/players/hidden', 'GET', apiParams, clientConfig);

    this.scores = {};

    /**
     * Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.resetAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/scores/reset', 'POST', apiParams, clientConfig);

    /**
     * Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.resetAllForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/scores/resetAllForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.leaderboardId - (Required) The ID of the leaderboard.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.resetForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers', 'POST', apiParams, clientConfig);

    /**
     * Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.scores.resetMultipleForAllPlayers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('games/v1management/scores/resetMultipleForAllPlayers', 'POST', apiParams, clientConfig);
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
