
/**
 * Google Apps Script client library for the People API
 * Documentation URL: https://developers.google.com/people/
 * @class
 */
class People {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://people.googleapis.com/';
    this._servicePath = '';


    this.people = {};
    this.people.createContact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:createContact', 'POST', apiParams, clientConfig);
    this.people.deleteContact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}:deleteContact', 'DELETE', apiParams, clientConfig);
    this.people.deleteContactPhoto = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}:deleteContactPhoto', 'DELETE', apiParams, clientConfig);
    this.people.updateContact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}:updateContact', 'PATCH', apiParams, clientConfig);
    this.people.updateContactPhoto = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}:updateContactPhoto', 'PATCH', apiParams, clientConfig);
    this.people.searchContacts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:searchContacts', 'GET', apiParams, clientConfig);
    this.people.batchDeleteContacts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:batchDeleteContacts', 'POST', apiParams, clientConfig);
    this.people.batchCreateContacts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:batchCreateContacts', 'POST', apiParams, clientConfig);
    this.people.batchUpdateContacts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:batchUpdateContacts', 'POST', apiParams, clientConfig);
    this.people.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'GET', apiParams, clientConfig);
    this.people.getBatchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:batchGet', 'GET', apiParams, clientConfig);
    this.people.listDirectoryPeople = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:listDirectoryPeople', 'GET', apiParams, clientConfig);
    this.people.searchDirectoryPeople = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/people:searchDirectoryPeople', 'GET', apiParams, clientConfig);

    this.people.connections = {};
    this.people.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}/connections', 'GET', apiParams, clientConfig);

    this.otherContacts = {};
    this.otherContacts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/otherContacts', 'GET', apiParams, clientConfig);
    this.otherContacts.copyOtherContactToMyContactsGroup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}:copyOtherContactToMyContactsGroup', 'POST', apiParams, clientConfig);
    this.otherContacts.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/otherContacts:search', 'GET', apiParams, clientConfig);

    this.contactGroups = {};
    this.contactGroups.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/contactGroups:batchGet', 'GET', apiParams, clientConfig);
    this.contactGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/contactGroups', 'POST', apiParams, clientConfig);
    this.contactGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'DELETE', apiParams, clientConfig);
    this.contactGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'GET', apiParams, clientConfig);
    this.contactGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/contactGroups', 'GET', apiParams, clientConfig);
    this.contactGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'PUT', apiParams, clientConfig);

    this.contactGroups.members = {};
    this.contactGroups.members.modify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}/members:modify', 'POST', apiParams, clientConfig);
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
