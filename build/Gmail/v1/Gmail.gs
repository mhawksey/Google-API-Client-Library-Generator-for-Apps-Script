
/**
 * Google Apps Script client library for the Gmail API
 * Documentation URL: https://developers.google.com/workspace/gmail/api/
 * @class
 */
class Gmail {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gmail.googleapis.com/';
    this._servicePath = '';


    this.users = {};
    this.users.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/stop', 'POST', apiParams, clientConfig);
    this.users.getProfile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/profile', 'GET', apiParams, clientConfig);
    this.users.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/watch', 'POST', apiParams, clientConfig);

    this.users.threads = {};
    this.users.threads.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/untrash', 'POST', apiParams, clientConfig);
    this.users.threads.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/trash', 'POST', apiParams, clientConfig);
    this.users.threads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'GET', apiParams, clientConfig);
    this.users.threads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads', 'GET', apiParams, clientConfig);
    this.users.threads.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'DELETE', apiParams, clientConfig);
    this.users.threads.modify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/modify', 'POST', apiParams, clientConfig);

    this.users.drafts = {};
    this.users.drafts.send = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts/send' : 'gmail/v1/users/{userId}/drafts/send';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.users.drafts.create = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts' : 'gmail/v1/users/{userId}/drafts';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.users.drafts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'GET', apiParams, clientConfig);
    this.users.drafts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'DELETE', apiParams, clientConfig);
    this.users.drafts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'GET', apiParams, clientConfig);
    this.users.drafts.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/drafts/{id}' : 'gmail/v1/users/{userId}/drafts/{id}';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };

    this.users.settings = {};
    this.users.settings.updateLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'PUT', apiParams, clientConfig);
    this.users.settings.getAutoForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'GET', apiParams, clientConfig);
    this.users.settings.getLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'GET', apiParams, clientConfig);
    this.users.settings.updateImap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'PUT', apiParams, clientConfig);
    this.users.settings.getImap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'GET', apiParams, clientConfig);
    this.users.settings.getVacation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'GET', apiParams, clientConfig);
    this.users.settings.updateVacation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'PUT', apiParams, clientConfig);
    this.users.settings.updatePop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'PUT', apiParams, clientConfig);
    this.users.settings.getPop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'GET', apiParams, clientConfig);
    this.users.settings.updateAutoForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'PUT', apiParams, clientConfig);

    this.users.settings.sendAs = {};
    this.users.settings.sendAs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PUT', apiParams, clientConfig);
    this.users.settings.sendAs.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify', 'POST', apiParams, clientConfig);
    this.users.settings.sendAs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'GET', apiParams, clientConfig);
    this.users.settings.sendAs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'DELETE', apiParams, clientConfig);
    this.users.settings.sendAs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'GET', apiParams, clientConfig);
    this.users.settings.sendAs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PATCH', apiParams, clientConfig);
    this.users.settings.sendAs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'POST', apiParams, clientConfig);

    this.users.settings.sendAs.smimeInfo = {};
    this.users.settings.sendAs.smimeInfo.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'POST', apiParams, clientConfig);
    this.users.settings.sendAs.smimeInfo.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'GET', apiParams, clientConfig);
    this.users.settings.sendAs.smimeInfo.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'DELETE', apiParams, clientConfig);
    this.users.settings.sendAs.smimeInfo.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'GET', apiParams, clientConfig);
    this.users.settings.sendAs.smimeInfo.setDefault = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault', 'POST', apiParams, clientConfig);

    this.users.settings.cse = {};

    this.users.settings.cse.keypairs = {};
    this.users.settings.cse.keypairs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}', 'GET', apiParams, clientConfig);
    this.users.settings.cse.keypairs.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable', 'POST', apiParams, clientConfig);
    this.users.settings.cse.keypairs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'POST', apiParams, clientConfig);
    this.users.settings.cse.keypairs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'GET', apiParams, clientConfig);
    this.users.settings.cse.keypairs.obliterate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate', 'POST', apiParams, clientConfig);
    this.users.settings.cse.keypairs.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable', 'POST', apiParams, clientConfig);

    this.users.settings.cse.identities = {};
    this.users.settings.cse.identities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'DELETE', apiParams, clientConfig);
    this.users.settings.cse.identities.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'POST', apiParams, clientConfig);
    this.users.settings.cse.identities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}', 'PATCH', apiParams, clientConfig);
    this.users.settings.cse.identities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'GET', apiParams, clientConfig);
    this.users.settings.cse.identities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'GET', apiParams, clientConfig);

    this.users.settings.filters = {};
    this.users.settings.filters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'GET', apiParams, clientConfig);
    this.users.settings.filters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'GET', apiParams, clientConfig);
    this.users.settings.filters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'DELETE', apiParams, clientConfig);
    this.users.settings.filters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'POST', apiParams, clientConfig);

    this.users.settings.forwardingAddresses = {};
    this.users.settings.forwardingAddresses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'POST', apiParams, clientConfig);
    this.users.settings.forwardingAddresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'GET', apiParams, clientConfig);
    this.users.settings.forwardingAddresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'GET', apiParams, clientConfig);
    this.users.settings.forwardingAddresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'DELETE', apiParams, clientConfig);

    this.users.settings.delegates = {};
    this.users.settings.delegates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'POST', apiParams, clientConfig);
    this.users.settings.delegates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'GET', apiParams, clientConfig);
    this.users.settings.delegates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'GET', apiParams, clientConfig);
    this.users.settings.delegates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'DELETE', apiParams, clientConfig);

    this.users.messages = {};
    this.users.messages.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/trash', 'POST', apiParams, clientConfig);
    this.users.messages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'DELETE', apiParams, clientConfig);
    this.users.messages.batchModify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/batchModify', 'POST', apiParams, clientConfig);
    this.users.messages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'GET', apiParams, clientConfig);
    this.users.messages.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/batchDelete', 'POST', apiParams, clientConfig);
    this.users.messages.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages' : 'gmail/v1/users/{userId}/messages';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.users.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages', 'GET', apiParams, clientConfig);
    this.users.messages.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/untrash', 'POST', apiParams, clientConfig);
    this.users.messages.import = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages/import' : 'gmail/v1/users/{userId}/messages/import';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.users.messages.send = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/gmail/v1/users/{userId}/messages/send' : 'gmail/v1/users/{userId}/messages/send';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.users.messages.modify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/modify', 'POST', apiParams, clientConfig);

    this.users.messages.attachments = {};
    this.users.messages.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}', 'GET', apiParams, clientConfig);

    this.users.labels = {};
    this.users.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'DELETE', apiParams, clientConfig);
    this.users.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels', 'POST', apiParams, clientConfig);
    this.users.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels', 'GET', apiParams, clientConfig);
    this.users.labels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'GET', apiParams, clientConfig);
    this.users.labels.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PUT', apiParams, clientConfig);
    this.users.labels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PATCH', apiParams, clientConfig);

    this.users.history = {};
    this.users.history.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('gmail/v1/users/{userId}/history', 'GET', apiParams, clientConfig);
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
