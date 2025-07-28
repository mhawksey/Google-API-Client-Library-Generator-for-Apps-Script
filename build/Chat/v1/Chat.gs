
/**
 * Google Apps Script client library for the Google Chat API
 * Documentation URL: https://developers.google.com/hangouts/chat
 * @class
 */
class Chat {
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
    this._rootUrl = 'https://chat.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};
    this.media.download = (params) => this._makeRequest('v1/media/{+resourceName}', 'GET', params);
    this.media.upload = (params) => this._makeRequest('v1/{+parent}/attachments:upload', 'POST', params);

    this.spaces = {};
    this.spaces.list = (params) => this._makeRequest('v1/spaces', 'GET', params);
    this.spaces.search = (params) => this._makeRequest('v1/spaces:search', 'GET', params);
    this.spaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.spaces.create = (params) => this._makeRequest('v1/spaces', 'POST', params);
    this.spaces.setup = (params) => this._makeRequest('v1/spaces:setup', 'POST', params);
    this.spaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.spaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.spaces.completeImport = (params) => this._makeRequest('v1/{+name}:completeImport', 'POST', params);
    this.spaces.findDirectMessage = (params) => this._makeRequest('v1/spaces:findDirectMessage', 'GET', params);

    this.spaces.messages = {};
    this.spaces.messages.create = (params) => this._makeRequest('v1/{+parent}/messages', 'POST', params);
    this.spaces.messages.list = (params) => this._makeRequest('v1/{+parent}/messages', 'GET', params);
    this.spaces.messages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.spaces.messages.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.spaces.messages.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.spaces.messages.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.spaces.messages.attachments = {};
    this.spaces.messages.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.spaces.messages.reactions = {};
    this.spaces.messages.reactions.create = (params) => this._makeRequest('v1/{+parent}/reactions', 'POST', params);
    this.spaces.messages.reactions.list = (params) => this._makeRequest('v1/{+parent}/reactions', 'GET', params);
    this.spaces.messages.reactions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.spaces.members = {};
    this.spaces.members.list = (params) => this._makeRequest('v1/{+parent}/members', 'GET', params);
    this.spaces.members.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.spaces.members.create = (params) => this._makeRequest('v1/{+parent}/members', 'POST', params);
    this.spaces.members.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.spaces.members.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.spaces.spaceEvents = {};
    this.spaces.spaceEvents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.spaces.spaceEvents.list = (params) => this._makeRequest('v1/{+parent}/spaceEvents', 'GET', params);

    this.customEmojis = {};
    this.customEmojis.create = (params) => this._makeRequest('v1/customEmojis', 'POST', params);
    this.customEmojis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customEmojis.list = (params) => this._makeRequest('v1/customEmojis', 'GET', params);
    this.customEmojis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.users = {};

    this.users.spaces = {};
    this.users.spaces.getSpaceReadState = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.users.spaces.updateSpaceReadState = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.users.spaces.threads = {};
    this.users.spaces.threads.getThreadReadState = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.users.spaces.spaceNotificationSetting = {};
    this.users.spaces.spaceNotificationSetting.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.users.spaces.spaceNotificationSetting.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
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
