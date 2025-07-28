
/**
 * Google Apps Script client library for the Pollen API
 * Documentation URL: https://developers.google.com/maps/documentation/pollen
 * @class
 */
class Pollen {
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
    this._rootUrl = 'https://pollen.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.forecast = {};

    /**
     * Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.
     * @param {integer} params.days - Required. A number that indicates how many forecast days to request (minimum value 1, maximum value is 5).
     * @param {string} params.languageCode - Optional. Allows the client to choose the language for the response. If data cannot be provided for that language, the API uses the closest match. Allowed values rely on the IETF BCP-47 standard. The default value is "en".
     * @param {number} params.location.latitude - The latitude in degrees. It must be in the range [-90.0, +90.0].
     * @param {number} params.location.longitude - The longitude in degrees. It must be in the range [-180.0, +180.0].
     * @param {integer} params.pageSize - Optional. The maximum number of daily info records to return per page. The default and max value is 5, indicating 5 days of data.
     * @param {string} params.pageToken - Optional. A page token received from a previous daily call. It is used to retrieve the subsequent page. Note that when providing a value for the page token, all other request parameters provided must match the previous call that provided the page token.
     * @param {boolean} params.plantsDescription - Optional. Contains general information about plants, including details on their seasonality, special shapes and colors, information about allergic cross-reactions, and plant photos. The default value is "true".
     * @return {object} The API response object.
     */
    this.forecast.lookup = (params) => this._makeRequest('v1/forecast:lookup', 'GET', params);

    this.mapTypes = {};

    this.mapTypes.heatmapTiles = {};

    /**
     * Returns a byte array containing the data of the tile PNG image.
     * @param {string} params.mapType - (Required) Required. The type of the pollen heatmap. Defines the combination of pollen type and index that the map will graphically represent.
     * @param {integer} params.x - (Required) Required. Defines the east-west point in the requested tile.
     * @param {integer} params.y - (Required) Required. Defines the north-south point in the requested tile.
     * @param {integer} params.zoom - (Required) Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. * Zoom level 0 is the entire world in a single tile. * Zoom level 1 is the entire world in 4 tiles. * Zoom level 2 is the entire world in 16 tiles. * Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16
     * @return {object} The API response object.
     */
    this.mapTypes.heatmapTiles.lookupHeatmapTile = (params) => this._makeRequest('v1/mapTypes/{mapType}/heatmapTiles/{zoom}/{x}/{y}', 'GET', params);
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
