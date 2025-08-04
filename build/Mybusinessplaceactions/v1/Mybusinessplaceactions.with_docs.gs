
/**
 * Google Apps Script client library for the My Business Place Actions API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessplaceactions {
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
    this._rootUrl = 'https://mybusinessplaceactions.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.placeActionTypeMetadata = {};

    /**
     * Returns the list of available place action types for a location or country.
     * @param {string} params.filter - Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned.
     * @param {string} params.languageCode - Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English.
     * @param {integer} params.pageSize - Optional. How many action types to include per page. Default is 10, minimum is 1.
     * @param {string} params.pageToken - Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size.
     * @return {object} The API response object.
     */
    this.placeActionTypeMetadata.list = (params) => this._makeRequest('v1/placeActionTypeMetadata', 'GET', params);

    this.locations = {};

    this.locations.placeActionLinks = {};

    /**
     * Lists the place action links for the specified location.
     * @param {string} params.filter - Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.
     * @param {integer} params.pageSize - Optional. How many place action links to return per page. Default of 10. The minimum is 1.
     * @param {string} params.pageToken - Optional. If specified, returns the next page of place action links.
     * @param {string} params.parent - (Required) Required. The name of the location whose place action links will be listed. `locations/{location_id}`.
     * @return {object} The API response object.
     */
    this.locations.placeActionLinks.list = (params) => this._makeRequest('v1/{+parent}/placeActionLinks', 'GET', params);

    /**
     * Gets the specified place action link.
     * @param {string} params.name - (Required) Required. The name of the place action link to fetch.
     * @return {object} The API response object.
     */
    this.locations.placeActionLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
     * @param {string} params.parent - (Required) Required. The resource name of the location where to create this place action link. `locations/{location_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.placeActionLinks.create = (params) => this._makeRequest('v1/{+parent}/placeActionLinks', 'POST', params);

    /**
     * Updates the specified place action link and returns it.
     * @param {string} params.name - (Required) Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.
     * @param {string} params.updateMask - Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.placeActionLinks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a place action link from the specified location.
     * @param {string} params.name - (Required) Required. The resource name of the place action link to remove from the location.
     * @return {object} The API response object.
     */
    this.locations.placeActionLinks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
