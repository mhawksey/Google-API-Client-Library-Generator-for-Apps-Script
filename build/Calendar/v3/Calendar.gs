
/**
 * Google Apps Script client library for the Calendar API
 * Documentation URL: https://developers.google.com/workspace/calendar/firstapp
 * @class
 */
class Calendar {
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
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'calendar/v3/';

    // --- Public Interface Initialization ---

    this.acl = {};
    this.acl.delete = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'DELETE', params);
    this.acl.get = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'GET', params);
    this.acl.insert = (params) => this._makeRequest('calendars/{calendarId}/acl', 'POST', params);
    this.acl.list = (params) => this._makeRequest('calendars/{calendarId}/acl', 'GET', params);
    this.acl.patch = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PATCH', params);
    this.acl.update = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PUT', params);
    this.acl.watch = (params) => this._makeRequest('calendars/{calendarId}/acl/watch', 'POST', params);

    this.calendarList = {};
    this.calendarList.delete = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'DELETE', params);
    this.calendarList.get = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'GET', params);
    this.calendarList.insert = (params) => this._makeRequest('users/me/calendarList', 'POST', params);
    this.calendarList.list = (params) => this._makeRequest('users/me/calendarList', 'GET', params);
    this.calendarList.patch = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'PATCH', params);
    this.calendarList.update = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'PUT', params);
    this.calendarList.watch = (params) => this._makeRequest('users/me/calendarList/watch', 'POST', params);

    this.calendars = {};
    this.calendars.clear = (params) => this._makeRequest('calendars/{calendarId}/clear', 'POST', params);
    this.calendars.delete = (params) => this._makeRequest('calendars/{calendarId}', 'DELETE', params);
    this.calendars.get = (params) => this._makeRequest('calendars/{calendarId}', 'GET', params);
    this.calendars.insert = (params) => this._makeRequest('calendars', 'POST', params);
    this.calendars.patch = (params) => this._makeRequest('calendars/{calendarId}', 'PATCH', params);
    this.calendars.update = (params) => this._makeRequest('calendars/{calendarId}', 'PUT', params);

    this.channels = {};
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.colors = {};
    this.colors.get = (params) => this._makeRequest('colors', 'GET', params);

    this.events = {};
    this.events.delete = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'DELETE', params);
    this.events.get = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'GET', params);
    this.events.import = (params) => this._makeRequest('calendars/{calendarId}/events/import', 'POST', params);
    this.events.insert = (params) => this._makeRequest('calendars/{calendarId}/events', 'POST', params);
    this.events.instances = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}/instances', 'GET', params);
    this.events.list = (params) => this._makeRequest('calendars/{calendarId}/events', 'GET', params);
    this.events.move = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}/move', 'POST', params);
    this.events.patch = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PATCH', params);
    this.events.quickAdd = (params) => this._makeRequest('calendars/{calendarId}/events/quickAdd', 'POST', params);
    this.events.update = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PUT', params);
    this.events.watch = (params) => this._makeRequest('calendars/{calendarId}/events/watch', 'POST', params);

    this.freebusy = {};
    this.freebusy.query = (params) => this._makeRequest('freeBusy', 'POST', params);

    this.settings = {};
    this.settings.get = (params) => this._makeRequest('users/me/settings/{setting}', 'GET', params);
    this.settings.list = (params) => this._makeRequest('users/me/settings', 'GET', params);
    this.settings.watch = (params) => this._makeRequest('users/me/settings/watch', 'POST', params);
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
