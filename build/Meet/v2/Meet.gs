
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://meet.googleapis.com/';
    this._servicePath = '';


    this.spaces = {};

    /**
     * Creates a space.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/spaces', 'POST', apiParams, clientConfig);

    /**
     * Gets details about a meeting space. For an example, see [Get a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#get-meeting-space).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the space. Format: `spaces/{space}` or `spaces/{meetingCode}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. `{meetingCode}` is an alias for the space. It's a typeable, unique character string and is non-case sensitive. For example, `abc-mnop-xyz`. The maximum length is 128 characters. A `meetingCode` shouldn't be stored long term as it can become dissociated from a meeting space and can be reused for different meeting spaces in the future. Generally, a `meetingCode` expires 365 days after last use. For more information, see [Learn about meeting codes in Google Meet](https://support.google.com/meet/answer/10710509). For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates details about a meeting space. For an example, see [Update a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#update-meeting-space).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @param {string} apiParams.updateMask - Optional. Field mask used to specify the fields to be updated in the space. If update_mask isn't provided(not set, set with empty paths, or only has "" as paths), it defaults to update all fields provided with values in the request. Using "*" as update_mask will update all fields, including deleting fields not set in the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Ends an active conference (if there's one). For an example, see [End active conference](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#end-active-conference).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.endActiveConference = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:endActiveConference', 'POST', apiParams, clientConfig);

    this.conferenceRecords = {};

    /**
     * Gets a conference record by conference ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the conference.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the conference records. By default, ordered by start time and in descending order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `space.meeting_code` * `space.name` * `start_time` * `end_time` For example, consider the following filters: * `space.name = "spaces/NAME"` * `space.meeting_code = "abc-mnop-xyz"` * `start_time>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"` * `end_time IS NULL`
     * @param {integer} apiParams.pageSize - Optional. Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Optional. Page token returned from previous List Call.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/conferenceRecords', 'GET', apiParams, clientConfig);

    this.conferenceRecords.participants = {};

    /**
     * Gets a participant by participant ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the participant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.participants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the participants in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `earliest_start_time` * `latest_end_time` For example, `latest_end_time IS NULL` returns active participants in the conference.
     * @param {integer} apiParams.pageSize - Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Page token returned from previous List Call.
     * @param {string} apiParams.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.participants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/participants', 'GET', apiParams, clientConfig);

    this.conferenceRecords.participants.participantSessions = {};

    /**
     * Gets a participant session by participant session ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the participant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.participants.participantSessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the participant sessions of a participant in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `start_time` * `end_time` For example, `end_time IS NULL` returns active participant sessions in the conference record.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of participant sessions to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Optional. Page token returned from previous List Call.
     * @param {string} apiParams.parent - (Required) Required. Format: `conferenceRecords/{conference_record}/participants/{participant}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.participants.participantSessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/participantSessions', 'GET', apiParams, clientConfig);

    this.conferenceRecords.recordings = {};

    /**
     * Gets a recording by recording ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the recording.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.recordings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the recording resources from the conference record. By default, ordered by start time and in ascending order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Page token returned from previous List Call.
     * @param {string} apiParams.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.recordings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/recordings', 'GET', apiParams, clientConfig);

    this.conferenceRecords.transcripts = {};

    /**
     * Gets a transcript by transcript ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the transcript.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.transcripts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the set of transcripts from the conference record. By default, ordered by start time and in ascending order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of transcripts to return. The service might return fewer than this value. If unspecified, at most 10 transcripts are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Page token returned from previous List Call.
     * @param {string} apiParams.parent - (Required) Required. Format: `conferenceRecords/{conference_record}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.transcripts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/transcripts', 'GET', apiParams, clientConfig);

    this.conferenceRecords.transcripts.entries = {};

    /**
     * Gets a `TranscriptEntry` resource by entry ID. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the `TranscriptEntry`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.transcripts.entries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order. Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of entries to return. The service might return fewer than this value. If unspecified, at most 10 entries are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
     * @param {string} apiParams.pageToken - Page token returned from previous List Call.
     * @param {string} apiParams.parent - (Required) Required. Format: `conferenceRecords/{conference_record}/transcripts/{transcript}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conferenceRecords.transcripts.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/entries', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
