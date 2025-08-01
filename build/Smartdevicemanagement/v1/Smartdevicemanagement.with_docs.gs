
/**
 * Google Apps Script client library for the Smart Device Management API
 * Documentation URL: https://developers.google.com/nest/device-access
 * @class
 */
class Smartdevicemanagement {
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
    this._rootUrl = 'https://smartdevicemanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.enterprises = {};

    this.enterprises.devices = {};

    /**
     * Gets a device managed by the enterprise.
     * @param {string} params.name - (Required) The name of the device requested. For example: "enterprises/XYZ/devices/123"
     * @return {object} The API response object.
     */
    this.enterprises.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists devices managed by the enterprise.
     * @param {string} params.filter - Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
     * @param {string} params.parent - (Required) The parent enterprise to list devices under. E.g. "enterprises/XYZ".
     * @return {object} The API response object.
     */
    this.enterprises.devices.list = (params) => this._makeRequest('v1/{+parent}/devices', 'GET', params);

    /**
     * Executes a command to device managed by the enterprise.
     * @param {string} params.name - (Required) The name of the device requested. For example: "enterprises/XYZ/devices/123"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.devices.executeCommand = (params) => this._makeRequest('v1/{+name}:executeCommand', 'POST', params);

    this.enterprises.structures = {};

    /**
     * Gets a structure managed by the enterprise.
     * @param {string} params.name - (Required) The name of the structure requested. For example: "enterprises/XYZ/structures/ABC".
     * @return {object} The API response object.
     */
    this.enterprises.structures.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists structures managed by the enterprise.
     * @param {string} params.filter - Optional filter to list structures.
     * @param {string} params.parent - (Required) The parent enterprise to list structures under. E.g. "enterprises/XYZ".
     * @return {object} The API response object.
     */
    this.enterprises.structures.list = (params) => this._makeRequest('v1/{+parent}/structures', 'GET', params);

    this.enterprises.structures.rooms = {};

    /**
     * Gets a room managed by the enterprise.
     * @param {string} params.name - (Required) The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
     * @return {object} The API response object.
     */
    this.enterprises.structures.rooms.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists rooms managed by the enterprise.
     * @param {string} params.parent - (Required) The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
     * @return {object} The API response object.
     */
    this.enterprises.structures.rooms.list = (params) => this._makeRequest('v1/{+parent}/rooms', 'GET', params);
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
