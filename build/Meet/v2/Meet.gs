
/**
 * Google Apps Script client library for the Google Meet API
 * Documentation URL: https://developers.google.com/workspace/meet/api
 * @class
 */
class Meet {
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
    this._rootUrl = 'https://meet.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.spaces = {};
    this.spaces.create = (params) => this._makeRequest('v2/spaces', 'POST', params);
    this.spaces.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.spaces.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.spaces.endActiveConference = (params) => this._makeRequest('v2/{+name}:endActiveConference', 'POST', params);

    this.conferenceRecords = {};
    this.conferenceRecords.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.list = (params) => this._makeRequest('v2/conferenceRecords', 'GET', params);

    this.conferenceRecords.participants = {};
    this.conferenceRecords.participants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.participants.list = (params) => this._makeRequest('v2/{+parent}/participants', 'GET', params);

    this.conferenceRecords.participants.participantSessions = {};
    this.conferenceRecords.participants.participantSessions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.participants.participantSessions.list = (params) => this._makeRequest('v2/{+parent}/participantSessions', 'GET', params);

    this.conferenceRecords.recordings = {};
    this.conferenceRecords.recordings.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.recordings.list = (params) => this._makeRequest('v2/{+parent}/recordings', 'GET', params);

    this.conferenceRecords.transcripts = {};
    this.conferenceRecords.transcripts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.transcripts.list = (params) => this._makeRequest('v2/{+parent}/transcripts', 'GET', params);

    this.conferenceRecords.transcripts.entries = {};
    this.conferenceRecords.transcripts.entries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.conferenceRecords.transcripts.entries.list = (params) => this._makeRequest('v2/{+parent}/entries', 'GET', params);
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
