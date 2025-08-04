
/**
 * Google Apps Script client library for the Google Slides API
 * Documentation URL: https://developers.google.com/workspace/slides/
 * @class
 */
class Slides {
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
    this._rootUrl = 'https://slides.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.presentations = {};

    /**
     * Gets the latest version of the specified presentation.
     * @param {string} params.presentationId - (Required) The ID of the presentation to retrieve.
     * @return {object} The API response object.
     */
    this.presentations.get = (params) => this._makeRequest('v1/presentations/{+presentationId}', 'GET', params);

    /**
     * Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.presentations.create = (params) => this._makeRequest('v1/presentations', 'POST', params);

    /**
     * Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
     * @param {string} params.presentationId - (Required) The presentation to apply the updates to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.presentations.batchUpdate = (params) => this._makeRequest('v1/presentations/{presentationId}:batchUpdate', 'POST', params);

    this.presentations.pages = {};

    /**
     * Gets the latest version of the specified page in the presentation.
     * @param {string} params.pageObjectId - (Required) The object ID of the page to retrieve.
     * @param {string} params.presentationId - (Required) The ID of the presentation to retrieve.
     * @return {object} The API response object.
     */
    this.presentations.pages.get = (params) => this._makeRequest('v1/presentations/{presentationId}/pages/{pageObjectId}', 'GET', params);

    /**
     * Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](https://developers.google.com/workspace/slides/limits) for quota purposes.
     * @param {string} params.pageObjectId - (Required) The object ID of the page whose thumbnail to retrieve.
     * @param {string} params.presentationId - (Required) The ID of the presentation to retrieve.
     * @param {string} params.thumbnailProperties.mimeType - The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
     * @param {string} params.thumbnailProperties.thumbnailSize - The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
     * @return {object} The API response object.
     */
    this.presentations.pages.getThumbnail = (params) => this._makeRequest('v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail', 'GET', params);
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
