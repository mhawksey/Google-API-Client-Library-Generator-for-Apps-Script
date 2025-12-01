
/**
 * Google Apps Script client library for the Real-time Bidding API
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/
 * @class
 */
class Realtimebidding {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://realtimebidding.googleapis.com/';
    this._servicePath = '';


    this.bidders = {};
    this.bidders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.bidders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/bidders', 'GET', apiParams, clientConfig);

    this.bidders.endpoints = {};
    this.bidders.endpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.bidders.endpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpoints', 'GET', apiParams, clientConfig);
    this.bidders.endpoints.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.bidders.creatives = {};
    this.bidders.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/creatives', 'GET', apiParams, clientConfig);
    this.bidders.creatives.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/creatives:watch', 'POST', apiParams, clientConfig);

    this.bidders.pretargetingConfigs = {};
    this.bidders.pretargetingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'GET', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.suspend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:suspend', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.addTargetedSites = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedSites', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.removeTargetedSites = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedSites', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.addTargetedApps = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedApps', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.removeTargetedApps = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedApps', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.addTargetedPublishers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedPublishers', 'POST', apiParams, clientConfig);
    this.bidders.pretargetingConfigs.removeTargetedPublishers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedPublishers', 'POST', apiParams, clientConfig);

    this.bidders.publisherConnections = {};
    this.bidders.publisherConnections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/publisherConnections', 'GET', apiParams, clientConfig);
    this.bidders.publisherConnections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.bidders.publisherConnections.batchApprove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/publisherConnections:batchApprove', 'POST', apiParams, clientConfig);
    this.bidders.publisherConnections.batchReject = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/publisherConnections:batchReject', 'POST', apiParams, clientConfig);

    this.buyers = {};
    this.buyers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/buyers', 'GET', apiParams, clientConfig);
    this.buyers.getRemarketingTag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', apiParams, clientConfig);

    this.buyers.creatives = {};
    this.buyers.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/creatives', 'GET', apiParams, clientConfig);
    this.buyers.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.creatives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/creatives', 'POST', apiParams, clientConfig);
    this.buyers.creatives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.buyers.userLists = {};
    this.buyers.userLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.userLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userLists', 'GET', apiParams, clientConfig);
    this.buyers.userLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userLists', 'POST', apiParams, clientConfig);
    this.buyers.userLists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.buyers.userLists.open = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:open', 'POST', apiParams, clientConfig);
    this.buyers.userLists.close = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:close', 'POST', apiParams, clientConfig);
    this.buyers.userLists.getRemarketingTag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', apiParams, clientConfig);
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
