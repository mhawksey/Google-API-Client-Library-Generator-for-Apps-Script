
/**
 * Google Apps Script client library for the Air Quality API
 * Documentation URL: https://developers.google.com/maps/documentation/air-quality
 * @class
 */
class Airquality {
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
    this._rootUrl = 'https://airquality.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.currentConditions = {};

    /**
     * The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 meters resolution. Includes over 70 local indexes and global air quality index and categories.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.currentConditions.lookup = (params) => this._makeRequest('v1/currentConditions:lookup', 'POST', params);

    this.history = {};

    /**
     * Returns air quality history for a specific location for a given time range.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.history.lookup = (params) => this._makeRequest('v1/history:lookup', 'POST', params);

    this.forecast = {};

    /**
     * Returns air quality forecast for a specific location for a given time range.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.forecast.lookup = (params) => this._makeRequest('v1/forecast:lookup', 'POST', params);

    this.mapTypes = {};

    this.mapTypes.heatmapTiles = {};

    /**
     * Returns a bytes array containing the data of the tile PNG image.
     * @param {string} params.mapType - (Required) Required. The type of the air quality heatmap. Defines the pollutant that the map will graphically represent. Allowed values: - UAQI_RED_GREEN (UAQI, red-green palette) - UAQI_INDIGO_PERSIAN (UAQI, indigo-persian palette) - PM25_INDIGO_PERSIAN - GBR_DEFRA - DEU_UBA - CAN_EC - FRA_ATMO - US_AQI
     * @param {integer} params.x - (Required) Required. Defines the east-west point in the requested tile.
     * @param {integer} params.y - (Required) Required. Defines the north-south point in the requested tile.
     * @param {integer} params.zoom - (Required) Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. Zoom level 0 is the entire world in a single tile. Zoom level 1 is the entire world in 4 tiles. Zoom level 2 is the entire world in 16 tiles. Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16
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
