
/**
 * Google Apps Script client library for the Google Analytics Admin API
 * Documentation URL: http://code.google.com/apis/analytics/docs/mgmt/home.html
 * @class
 */
class Analyticsadmin {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';


    this.accountSummaries = {};
    this.accountSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/accountSummaries', 'GET', apiParams, clientConfig);

    this.properties = {};
    this.properties.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);
    this.properties.getDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.updateDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.acknowledgeUserDataCollection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+property}:acknowledgeUserDataCollection', 'POST', apiParams, clientConfig);
    this.properties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/properties', 'POST', apiParams, clientConfig);
    this.properties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/properties', 'GET', apiParams, clientConfig);

    this.properties.keyEvents = {};
    this.properties.keyEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.keyEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.keyEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.keyEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/keyEvents', 'GET', apiParams, clientConfig);
    this.properties.keyEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/keyEvents', 'POST', apiParams, clientConfig);

    this.properties.firebaseLinks = {};
    this.properties.firebaseLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.firebaseLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'GET', apiParams, clientConfig);
    this.properties.firebaseLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'POST', apiParams, clientConfig);

    this.properties.conversionEvents = {};
    this.properties.conversionEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.conversionEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.conversionEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'POST', apiParams, clientConfig);
    this.properties.conversionEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.conversionEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'GET', apiParams, clientConfig);

    this.properties.dataStreams = {};
    this.properties.dataStreams.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/dataStreams', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.dataStreams.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/dataStreams', 'GET', apiParams, clientConfig);

    this.properties.dataStreams.measurementProtocolSecrets = {};
    this.properties.dataStreams.measurementProtocolSecrets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.googleAdsLinks = {};
    this.properties.googleAdsLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'GET', apiParams, clientConfig);
    this.properties.googleAdsLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.googleAdsLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'POST', apiParams, clientConfig);
    this.properties.googleAdsLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.customDimensions = {};
    this.properties.customDimensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/customDimensions', 'POST', apiParams, clientConfig);
    this.properties.customDimensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.customDimensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/customDimensions', 'GET', apiParams, clientConfig);
    this.properties.customDimensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.customDimensions.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:archive', 'POST', apiParams, clientConfig);

    this.properties.customMetrics = {};
    this.properties.customMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/customMetrics', 'GET', apiParams, clientConfig);
    this.properties.customMetrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/customMetrics', 'POST', apiParams, clientConfig);
    this.properties.customMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.customMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.properties.customMetrics.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:archive', 'POST', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/accounts', 'GET', apiParams, clientConfig);
    this.accounts.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);
    this.accounts.getDataSharingSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.provisionAccountTicket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/accounts:provisionAccountTicket', 'POST', apiParams, clientConfig);
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.searchChangeHistoryEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+account}:searchChangeHistoryEvents', 'POST', apiParams, clientConfig);
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
