
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

    /**
     * Creates a space.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spaces.create = (params) => this._makeRequest('v2/spaces', 'POST', params);

    /**
     * Gets details about a meeting space. For an example, see [Get a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#get-meeting-space).
     * @param {string} params.name - (Required) Required. Resource name of the space. Format: `spaces/{space}` or `spaces/{meetingCode}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. `{meetingCode}` is an alias for the space. It's a typeable, unique character string and is non-case sensitive. For example, `abc-mnop-xyz`. The maximum length is 128 characters. A `meetingCode` shouldn't be stored long term as it can become dissociated from a meeting space and can be reused for different meeting spaces in the future. Generally, a `meetingCode` expires 365 days after last use. For more information, see [Learn about meeting codes in Google Meet](https://support.google.com/meet/answer/10710509). For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @return {object} The API response object.
     */
    this.spaces.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates details about a meeting space. For an example, see [Update a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#update-meeting-space).
     * @param {string} params.name - (Required) Immutable. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @param {string} params.updateMask - Optional. Field mask used to specify the fields to be updated in the space. If update_mask isn't provided(not set, set with empty paths, or only has "" as paths), it defaults to update all fields provided with values in the request. Using "*" as update_mask will update all fields, including deleting fields not set in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spaces.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Ends an active conference (if there's one). For an example, see [End active conference](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#end-active-conference).
     * @param {string} params.name - (Required) Required. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spaces.endActiveConference = (params) => this._makeRequest('v2/{+name}:endActiveConference', 'POST', params);

    this.conferenceRecords = {};

    /**
     * Gets a conference record by conference ID.
     * @param {string} params.name - (Required) Required. Resource name of the conference.
     * @return {object} The API response object.
     */
    this.conferenceRecords.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the conference records. By default, ordered by start time and in descending order.
     * @param {string} params.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `space.meeting_code` * `space.name` * `start_time` * `end_time` For example, consider the following filters: * `space.name = "spaces/NAME"` * `space.meeting_code = "abc-mnop-xyz"` * `start_time>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"` * `end_time IS NULL`
     * @param {integer} params.pageSize - Optional. Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} params.pageToken - Optional. Page token returned from previous List Call.
     * @return {object} The API response object.
     */
    this.conferenceRecords.list = (params) => this._makeRequest('v2/conferenceRecords', 'GET', params);

    this.conferenceRecords.participants = {};

    /**
     * Gets a participant by participant ID.
     * @param {string} params.name - (Required) Required. Resource name of the participant.
     * @return {object} The API response object.
     */
    this.conferenceRecords.participants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the participants in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.
     * @param {string} params.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `earliest_start_time` * `latest_end_time` For example, `latest_end_time IS NULL` returns active participants in the conference.
     * @param {integer} params.pageSize - Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     * @param {string} params.pageToken - Page token returned from previous List Call.
     * @param {string} params.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @return {object} The API response object.
     */
    this.conferenceRecords.participants.list = (params) => this._makeRequest('v2/{+parent}/participants', 'GET', params);

    this.conferenceRecords.participants.participantSessions = {};

    /**
     * Gets a participant session by participant session ID.
     * @param {string} params.name - (Required) Required. Resource name of the participant.
     * @return {object} The API response object.
     */
    this.conferenceRecords.participants.participantSessions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the participant sessions of a participant in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.
     * @param {string} params.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `start_time` * `end_time` For example, `end_time IS NULL` returns active participant sessions in the conference record.
     * @param {integer} params.pageSize - Optional. Maximum number of participant sessions to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     * @param {string} params.pageToken - Optional. Page token returned from previous List Call.
     * @param {string} params.parent - (Required) Required. Format: `conferenceRecords/{conference_record}/participants/{participant}`
     * @return {object} The API response object.
     */
    this.conferenceRecords.participants.participantSessions.list = (params) => this._makeRequest('v2/{+parent}/participantSessions', 'GET', params);

    this.conferenceRecords.recordings = {};

    /**
     * Gets a recording by recording ID.
     * @param {string} params.name - (Required) Required. Resource name of the recording.
     * @return {object} The API response object.
     */
    this.conferenceRecords.recordings.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the recording resources from the conference record. By default, ordered by start time and in ascending order.
     * @param {integer} params.pageSize - Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} params.pageToken - Page token returned from previous List Call.
     * @param {string} params.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @return {object} The API response object.
     */
    this.conferenceRecords.recordings.list = (params) => this._makeRequest('v2/{+parent}/recordings', 'GET', params);

    this.conferenceRecords.transcripts = {};

    /**
     * Gets a transcript by transcript ID.
     * @param {string} params.name - (Required) Required. Resource name of the transcript.
     * @return {object} The API response object.
     */
    this.conferenceRecords.transcripts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the set of transcripts from the conference record. By default, ordered by start time and in ascending order.
     * @param {integer} params.pageSize - Maximum number of transcripts to return. The service might return fewer than this value. If unspecified, at most 10 transcripts are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} params.pageToken - Page token returned from previous List Call.
     * @param {string} params.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @return {object} The API response object.
     */
    this.conferenceRecords.transcripts.list = (params) => this._makeRequest('v2/{+parent}/transcripts', 'GET', params);

    this.conferenceRecords.transcripts.entries = {};

    /**
     * Gets a `TranscriptEntry` resource by entry ID. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.
     * @param {string} params.name - (Required) Required. Resource name of the `TranscriptEntry`.
     * @return {object} The API response object.
     */
    this.conferenceRecords.transcripts.entries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.
     * @param {integer} params.pageSize - Maximum number of entries to return. The service might return fewer than this value. If unspecified, at most 10 entries are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} params.pageToken - Page token returned from previous List Call.
     * @param {string} params.parent - (Required) Required. Format: `conferenceRecords/{conference_record}/transcripts/{transcript}`
     * @return {object} The API response object.
     */
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
