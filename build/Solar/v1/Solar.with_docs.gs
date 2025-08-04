
/**
 * Google Apps Script client library for the Solar API
 * Documentation URL: https://developers.google.com/maps/documentation/solar
 * @class
 */
class Solar {
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
    this._rootUrl = 'https://solar.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.buildingInsights = {};

    /**
     * Locates the building whose centroid is closest to a query point. Returns an error with code `NOT_FOUND` if there are no buildings within approximately 50m of the query point.
     * @param {string} params.experiments - Optional. Specifies the pre-GA features to enable.
     * @param {number} params.location.latitude - The latitude in degrees. It must be in the range [-90.0, +90.0].
     * @param {number} params.location.longitude - The longitude in degrees. It must be in the range [-180.0, +180.0].
     * @param {string} params.requiredQuality - Optional. The minimum quality level allowed in the results. No result with lower quality than this will be returned. Not specifying this is equivalent to restricting to HIGH quality only.
     * @return {object} The API response object.
     */
    this.buildingInsights.findClosest = (params) => this._makeRequest('v1/buildingInsights:findClosest', 'GET', params);

    this.dataLayers = {};

    /**
     * Gets solar information for a region surrounding a location. Returns an error with code `NOT_FOUND` if the location is outside the coverage area.
     * @param {boolean} params.exactQualityRequired - Optional. Whether to require exact quality of the imagery. If set to false, the `required_quality` field is interpreted as the minimum required quality, such that HIGH quality imagery may be returned when `required_quality` is set to MEDIUM. If set to true, `required_quality` is interpreted as the exact required quality and only `MEDIUM` quality imagery is returned if `required_quality` is set to `MEDIUM`.
     * @param {string} params.experiments - Optional. Specifies the pre-GA experiments to enable.
     * @param {number} params.location.latitude - The latitude in degrees. It must be in the range [-90.0, +90.0].
     * @param {number} params.location.longitude - The longitude in degrees. It must be in the range [-180.0, +180.0].
     * @param {number} params.pixelSizeMeters - Optional. The minimum scale, in meters per pixel, of the data to return. Values of 0.1 (the default, if this field is not set explicitly), 0.25, 0.5, and 1.0 are supported. Imagery components whose normal resolution is less than `pixel_size_meters` will be returned at the resolution specified by `pixel_size_meters`; imagery components whose normal resolution is equal to or greater than `pixel_size_meters` will be returned at that normal resolution.
     * @param {number} params.radiusMeters - Required. The radius, in meters, defining the region surrounding that centre point for which data should be returned. The limitations on this value are: * Any value up to 100m can always be specified. * Values over 100m can be specified, as long as `radius_meters` <= `pixel_size_meters * 1000`. * However, for values over 175m, the `DataLayerView` in the request must not include monthly flux or hourly shade.
     * @param {string} params.requiredQuality - Optional. The minimum quality level allowed in the results. No result with lower quality than this will be returned. Not specifying this is equivalent to restricting to HIGH quality only.
     * @param {string} params.view - Optional. The desired subset of the data to return.
     * @return {object} The API response object.
     */
    this.dataLayers.get = (params) => this._makeRequest('v1/dataLayers:get', 'GET', params);

    this.geoTiff = {};

    /**
     * Returns an image by its ID.
     * @param {string} params.id - Required. The ID of the asset being requested.
     * @return {object} The API response object.
     */
    this.geoTiff.get = (params) => this._makeRequest('v1/geoTiff:get', 'GET', params);
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
