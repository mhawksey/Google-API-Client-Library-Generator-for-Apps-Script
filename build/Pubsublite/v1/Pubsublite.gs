
/**
 * Google Apps Script client library for the Pub/Sub Lite API
 * Documentation URL: https://cloud.google.com/pubsub/lite/docs
 * @class
 */
class Pubsublite {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://pubsublite.googleapis.com/';
    this._servicePath = '';


    this.cursor = {};

    this.cursor.projects = {};

    this.cursor.projects.locations = {};

    this.cursor.projects.locations.subscriptions = {};
    this.cursor.projects.locations.subscriptions.commitCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/cursor/{+subscription}:commitCursor', 'POST', apiParams, clientConfig);

    this.cursor.projects.locations.subscriptions.cursors = {};
    this.cursor.projects.locations.subscriptions.cursors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/cursor/{+parent}/cursors', 'GET', apiParams, clientConfig);

    this.topicStats = {};

    this.topicStats.projects = {};

    this.topicStats.projects.locations = {};

    this.topicStats.projects.locations.topics = {};
    this.topicStats.projects.locations.topics.computeMessageStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeMessageStats', 'POST', apiParams, clientConfig);
    this.topicStats.projects.locations.topics.computeTimeCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeTimeCursor', 'POST', apiParams, clientConfig);
    this.topicStats.projects.locations.topics.computeHeadCursor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/topicStats/{+topic}:computeHeadCursor', 'POST', apiParams, clientConfig);

    this.admin = {};

    this.admin.projects = {};

    this.admin.projects.locations = {};

    this.admin.projects.locations.operations = {};
    this.admin.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);
    this.admin.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/operations', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.admin.projects.locations.subscriptions = {};
    this.admin.projects.locations.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);
    this.admin.projects.locations.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'POST', apiParams, clientConfig);
    this.admin.projects.locations.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);
    this.admin.projects.locations.subscriptions.seek = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}:seek', 'POST', apiParams, clientConfig);
    this.admin.projects.locations.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    this.admin.projects.locations.reservations = {};
    this.admin.projects.locations.reservations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);
    this.admin.projects.locations.reservations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/reservations', 'POST', apiParams, clientConfig);
    this.admin.projects.locations.reservations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);
    this.admin.projects.locations.reservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/reservations', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.reservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);

    this.admin.projects.locations.reservations.topics = {};
    this.admin.projects.locations.reservations.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/topics', 'GET', apiParams, clientConfig);

    this.admin.projects.locations.topics = {};
    this.admin.projects.locations.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/topics', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'PATCH', apiParams, clientConfig);
    this.admin.projects.locations.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.topics.getPartitions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/partitions', 'GET', apiParams, clientConfig);
    this.admin.projects.locations.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}', 'DELETE', apiParams, clientConfig);
    this.admin.projects.locations.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+parent}/topics', 'POST', apiParams, clientConfig);

    this.admin.projects.locations.topics.subscriptions = {};
    this.admin.projects.locations.topics.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/admin/{+name}/subscriptions', 'GET', apiParams, clientConfig);
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
