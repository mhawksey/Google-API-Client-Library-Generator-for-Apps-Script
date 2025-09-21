
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'calendar/v3/';


    this.acl = {};
    this.acl.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'DELETE', apiParams, clientConfig);
    this.acl.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'GET', apiParams, clientConfig);
    this.acl.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl', 'POST', apiParams, clientConfig);
    this.acl.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl', 'GET', apiParams, clientConfig);
    this.acl.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PATCH', apiParams, clientConfig);
    this.acl.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PUT', apiParams, clientConfig);
    this.acl.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/watch', 'POST', apiParams, clientConfig);

    this.calendarList = {};
    this.calendarList.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'DELETE', apiParams, clientConfig);
    this.calendarList.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'GET', apiParams, clientConfig);
    this.calendarList.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList', 'POST', apiParams, clientConfig);
    this.calendarList.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList', 'GET', apiParams, clientConfig);
    this.calendarList.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'PATCH', apiParams, clientConfig);
    this.calendarList.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'PUT', apiParams, clientConfig);
    this.calendarList.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/watch', 'POST', apiParams, clientConfig);

    this.calendars = {};
    this.calendars.clear = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/clear', 'POST', apiParams, clientConfig);
    this.calendars.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'DELETE', apiParams, clientConfig);
    this.calendars.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'GET', apiParams, clientConfig);
    this.calendars.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars', 'POST', apiParams, clientConfig);
    this.calendars.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'PATCH', apiParams, clientConfig);
    this.calendars.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'PUT', apiParams, clientConfig);

    this.channels = {};
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.colors = {};
    this.colors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('colors', 'GET', apiParams, clientConfig);

    this.events = {};
    this.events.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'DELETE', apiParams, clientConfig);
    this.events.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'GET', apiParams, clientConfig);
    this.events.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/import', 'POST', apiParams, clientConfig);
    this.events.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events', 'POST', apiParams, clientConfig);
    this.events.instances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}/instances', 'GET', apiParams, clientConfig);
    this.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events', 'GET', apiParams, clientConfig);
    this.events.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}/move', 'POST', apiParams, clientConfig);
    this.events.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PATCH', apiParams, clientConfig);
    this.events.quickAdd = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/quickAdd', 'POST', apiParams, clientConfig);
    this.events.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PUT', apiParams, clientConfig);
    this.events.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/watch', 'POST', apiParams, clientConfig);

    this.freebusy = {};
    this.freebusy.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('freeBusy', 'POST', apiParams, clientConfig);

    this.settings = {};
    this.settings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings/{setting}', 'GET', apiParams, clientConfig);
    this.settings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings', 'GET', apiParams, clientConfig);
    this.settings.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings/watch', 'POST', apiParams, clientConfig);
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
        if ((clientConfig && clientConfig.responseType === 'blob') || isMediaDownload) {
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
