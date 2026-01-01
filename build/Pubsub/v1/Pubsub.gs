
/**
 * Google Apps Script client library for the Cloud Pub/Sub API
 * Documentation URL: https://cloud.google.com/pubsub/docs
 * @class
 */
class Pubsub {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://pubsub.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.topics = {};
    this.projects.topics.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+topic}:publish', 'POST', apiParams, clientConfig);
    this.projects.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+topic}', 'GET', apiParams, clientConfig);
    this.projects.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.topics.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+topic}', 'DELETE', apiParams, clientConfig);
    this.projects.topics.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.topics.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}/topics', 'GET', apiParams, clientConfig);

    this.projects.topics.subscriptions = {};
    this.projects.topics.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+topic}/subscriptions', 'GET', apiParams, clientConfig);

    this.projects.topics.snapshots = {};
    this.projects.topics.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+topic}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.schemas = {};
    this.projects.schemas.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.schemas.listRevisions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listRevisions', 'GET', apiParams, clientConfig);
    this.projects.schemas.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.schemas.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rollback', 'POST', apiParams, clientConfig);
    this.projects.schemas.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas:validate', 'POST', apiParams, clientConfig);
    this.projects.schemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.schemas.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:commit', 'POST', apiParams, clientConfig);
    this.projects.schemas.deleteRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', apiParams, clientConfig);
    this.projects.schemas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas', 'POST', apiParams, clientConfig);
    this.projects.schemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas', 'GET', apiParams, clientConfig);
    this.projects.schemas.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.schemas.validateMessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas:validateMessage', 'POST', apiParams, clientConfig);

    this.projects.subscriptions = {};
    this.projects.subscriptions.pull = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:pull', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.modifyPushConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:modifyPushConfig', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.subscriptions.acknowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:acknowledge', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}', 'GET', apiParams, clientConfig);
    this.projects.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.subscriptions.detach = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:detach', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.modifyAckDeadline = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:modifyAckDeadline', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}', 'DELETE', apiParams, clientConfig);
    this.projects.subscriptions.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.seek = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+subscription}:seek', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}/subscriptions', 'GET', apiParams, clientConfig);

    this.projects.snapshots = {};
    this.projects.snapshots.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.snapshots.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+snapshot}', 'DELETE', apiParams, clientConfig);
    this.projects.snapshots.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.snapshots.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.snapshots.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}/snapshots', 'GET', apiParams, clientConfig);
    this.projects.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+snapshot}', 'GET', apiParams, clientConfig);
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
