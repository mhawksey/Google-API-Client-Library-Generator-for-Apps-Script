
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chat.googleapis.com/';
    this._servicePath = '';


    this.media = {};
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/media/{+resourceName}', 'GET', apiParams, clientConfig);
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/{+parent}/attachments:upload' : 'v1/{+parent}/attachments:upload';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.spaces = {};
    this.spaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces', 'GET', apiParams, clientConfig);
    this.spaces.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:search', 'GET', apiParams, clientConfig);
    this.spaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.spaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces', 'POST', apiParams, clientConfig);
    this.spaces.setup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:setup', 'POST', apiParams, clientConfig);
    this.spaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.spaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.spaces.completeImport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeImport', 'POST', apiParams, clientConfig);
    this.spaces.findDirectMessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:findDirectMessage', 'GET', apiParams, clientConfig);

    this.spaces.messages = {};
    this.spaces.messages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/messages', 'POST', apiParams, clientConfig);
    this.spaces.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/messages', 'GET', apiParams, clientConfig);
    this.spaces.messages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.spaces.messages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.spaces.messages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.spaces.messages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.messages.attachments = {};
    this.spaces.messages.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.spaces.messages.reactions = {};
    this.spaces.messages.reactions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reactions', 'POST', apiParams, clientConfig);
    this.spaces.messages.reactions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reactions', 'GET', apiParams, clientConfig);
    this.spaces.messages.reactions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.members = {};
    this.spaces.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/members', 'GET', apiParams, clientConfig);
    this.spaces.members.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.spaces.members.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/members', 'POST', apiParams, clientConfig);
    this.spaces.members.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.spaces.members.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.spaceEvents = {};
    this.spaces.spaceEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.spaces.spaceEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/spaceEvents', 'GET', apiParams, clientConfig);

    this.customEmojis = {};
    this.customEmojis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/customEmojis', 'POST', apiParams, clientConfig);
    this.customEmojis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.customEmojis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/customEmojis', 'GET', apiParams, clientConfig);
    this.customEmojis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.users = {};

    this.users.spaces = {};
    this.users.spaces.getSpaceReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.users.spaces.updateSpaceReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.users.spaces.threads = {};
    this.users.spaces.threads.getThreadReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.users.spaces.spaceNotificationSetting = {};
    this.users.spaces.spaceNotificationSetting.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.users.spaces.spaceNotificationSetting.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
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
