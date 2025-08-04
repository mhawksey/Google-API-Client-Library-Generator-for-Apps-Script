
/**
 * Google Apps Script client library for the Google Cloud Translation API
 * Documentation URL: https://code.google.com/apis/language/translate/v2/getting_started.html
 * @class
 */
class Translate {
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
    this._rootUrl = 'https://translation.googleapis.com/';
    this._servicePath = 'language/translate/';

    // --- Public Interface Initialization ---

    this.detections = {};

    /**
     * Detects the language of text within a request.
     * @param {string} params.q - (Required) The input text upon which to perform language detection. Repeat this
    parameter to perform language detection on multiple text inputs.
     * @return {object} The API response object.
     */
    this.detections.list = (params) => this._makeRequest('v2/detect', 'GET', params);

    /**
     * Detects the language of text within a request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.detections.detect = (params) => this._makeRequest('v2/detect', 'POST', params);

    this.languages = {};

    /**
     * Returns a list of supported languages for translation.
     * @param {string} params.model - The model type for which supported languages should be returned.
     * @param {string} params.target - The language to use to return localized, human readable names of supported
    languages.
     * @return {object} The API response object.
     */
    this.languages.list = (params) => this._makeRequest('v2/languages', 'GET', params);

    this.translations = {};

    /**
     * Translates input text, returning translated text.
     * @param {string} params.cid - The customization id for translate
     * @param {string} params.format - The format of the source text, in either HTML (default) or plain-text. A
    value of "html" indicates HTML and a value of "text" indicates plain-text.
     * @param {string} params.model - The `model` type requested for this translation. Valid values are
    listed in public documentation.
     * @param {string} params.q - (Required) The input text to translate. Repeat this parameter to perform translation
    operations on multiple text inputs.
     * @param {string} params.source - The language of the source text, set to one of the language codes listed in
    Language Support. If the source language is not specified, the API will
    attempt to identify the source language automatically and return it within
    the response.
     * @param {string} params.target - (Required) The language to use for translation of the input text, set to one of the
    language codes listed in Language Support.
     * @return {object} The API response object.
     */
    this.translations.list = (params) => this._makeRequest('v2', 'GET', params);

    /**
     * Translates input text, returning translated text.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.translations.translate = (params) => this._makeRequest('v2', 'POST', params);
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
