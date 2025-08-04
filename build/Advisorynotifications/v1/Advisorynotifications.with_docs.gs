
/**
 * Google Apps Script client library for the Advisory Notifications API
 * Documentation URL: https://cloud.google.com/advisory-notifications
 * @class
 */
class Advisorynotifications {
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
    this._rootUrl = 'https://advisorynotifications.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Get notification settings.
     * @param {string} params.name - (Required) Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
     * @return {object} The API response object.
     */
    this.organizations.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update notification settings.
     * @param {string} params.name - (Required) Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations.notifications = {};

    /**
     * Lists notifications under a given parent.
     * @param {string} params.languageCode - ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     * @param {integer} params.pageSize - The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     * @param {string} params.pageToken - A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}".
     * @param {string} params.view - Specifies which parts of the notification resource should be returned in the response.
     * @return {object} The API response object.
     */
    this.organizations.locations.notifications.list = (params) => this._makeRequest('v1/{+parent}/notifications', 'GET', params);

    /**
     * Gets a notification.
     * @param {string} params.languageCode - ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     * @param {string} params.name - (Required) Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.
     * @return {object} The API response object.
     */
    this.organizations.locations.notifications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    /**
     * Get notification settings.
     * @param {string} params.name - (Required) Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
     * @return {object} The API response object.
     */
    this.projects.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update notification settings.
     * @param {string} params.name - (Required) Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.notifications = {};

    /**
     * Lists notifications under a given parent.
     * @param {string} params.languageCode - ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     * @param {integer} params.pageSize - The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     * @param {string} params.pageToken - A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}".
     * @param {string} params.view - Specifies which parts of the notification resource should be returned in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.notifications.list = (params) => this._makeRequest('v1/{+parent}/notifications', 'GET', params);

    /**
     * Gets a notification.
     * @param {string} params.languageCode - ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
     * @param {string} params.name - (Required) Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.
     * @return {object} The API response object.
     */
    this.projects.locations.notifications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
