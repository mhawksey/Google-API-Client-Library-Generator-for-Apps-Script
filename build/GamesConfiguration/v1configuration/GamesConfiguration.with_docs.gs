
/**
 * Google Apps Script client library for the Google Play Games Services Publishing API
 * Documentation URL: https://developers.google.com/games/
 * @class
 */
class GamesConfiguration {
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
    this._rootUrl = 'https://gamesconfiguration.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.achievementConfigurations = {};

    /**
     * Delete the achievement configuration with the given ID.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievementConfigurations.delete = (params) => this._makeRequest('games/v1configuration/achievements/{achievementId}', 'DELETE', params);

    /**
     * Retrieves the metadata of the achievement configuration with the given ID.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @return {object} The API response object.
     */
    this.achievementConfigurations.get = (params) => this._makeRequest('games/v1configuration/achievements/{achievementId}', 'GET', params);

    /**
     * Insert a new achievement configuration in this application.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.achievementConfigurations.insert = (params) => this._makeRequest('games/v1configuration/applications/{applicationId}/achievements', 'POST', params);

    /**
     * Returns a list of the achievement configurations in this application.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {integer} params.maxResults - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.achievementConfigurations.list = (params) => this._makeRequest('games/v1configuration/applications/{applicationId}/achievements', 'GET', params);

    /**
     * Update the metadata of the achievement configuration with the given ID.
     * @param {string} params.achievementId - (Required) The ID of the achievement used by this method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.achievementConfigurations.update = (params) => this._makeRequest('games/v1configuration/achievements/{achievementId}', 'PUT', params);

    this.leaderboardConfigurations = {};

    /**
     * Delete the leaderboard configuration with the given ID.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @return {object} The API response object.
     */
    this.leaderboardConfigurations.delete = (params) => this._makeRequest('games/v1configuration/leaderboards/{leaderboardId}', 'DELETE', params);

    /**
     * Retrieves the metadata of the leaderboard configuration with the given ID.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @return {object} The API response object.
     */
    this.leaderboardConfigurations.get = (params) => this._makeRequest('games/v1configuration/leaderboards/{leaderboardId}', 'GET', params);

    /**
     * Insert a new leaderboard configuration in this application.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.leaderboardConfigurations.insert = (params) => this._makeRequest('games/v1configuration/applications/{applicationId}/leaderboards', 'POST', params);

    /**
     * Returns a list of the leaderboard configurations in this application.
     * @param {string} params.applicationId - (Required) The application ID from the Google Play developer console.
     * @param {integer} params.maxResults - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.leaderboardConfigurations.list = (params) => this._makeRequest('games/v1configuration/applications/{applicationId}/leaderboards', 'GET', params);

    /**
     * Update the metadata of the leaderboard configuration with the given ID.
     * @param {string} params.leaderboardId - (Required) The ID of the leaderboard.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.leaderboardConfigurations.update = (params) => this._makeRequest('games/v1configuration/leaderboards/{leaderboardId}', 'PUT', params);
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
