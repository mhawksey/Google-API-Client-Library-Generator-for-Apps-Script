
/**
 * Google Apps Script client library for the AdSense Management API
 * Documentation URL: https://developers.google.com/adsense/management/
 * @class
 */
class Adsense {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://adsense.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts', 'GET', apiParams, clientConfig);
    this.accounts.listChildAccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:listChildAccounts', 'GET', apiParams, clientConfig);
    this.accounts.getAdBlockingRecoveryTag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/adBlockingRecoveryTag', 'GET', apiParams, clientConfig);

    this.accounts.reports = {};
    this.accounts.reports.getSaved = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/saved', 'GET', apiParams, clientConfig);
    this.accounts.reports.generateCsv = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+account}/reports:generateCsv', 'GET', apiParams, clientConfig);
    this.accounts.reports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+account}/reports:generate', 'GET', apiParams, clientConfig);

    this.accounts.reports.saved = {};
    this.accounts.reports.saved.generateCsv = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/saved:generateCsv', 'GET', apiParams, clientConfig);
    this.accounts.reports.saved.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/reports/saved', 'GET', apiParams, clientConfig);
    this.accounts.reports.saved.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/saved:generate', 'GET', apiParams, clientConfig);

    this.accounts.policyIssues = {};
    this.accounts.policyIssues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/policyIssues', 'GET', apiParams, clientConfig);
    this.accounts.policyIssues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.accounts.payments = {};
    this.accounts.payments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/payments', 'GET', apiParams, clientConfig);

    this.accounts.adclients = {};
    this.accounts.adclients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.adclients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/adclients', 'GET', apiParams, clientConfig);
    this.accounts.adclients.getAdcode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/adcode', 'GET', apiParams, clientConfig);

    this.accounts.adclients.adunits = {};
    this.accounts.adclients.adunits.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.adclients.adunits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.adclients.adunits.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/adunits', 'POST', apiParams, clientConfig);
    this.accounts.adclients.adunits.getAdcode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/adcode', 'GET', apiParams, clientConfig);
    this.accounts.adclients.adunits.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/adunits', 'GET', apiParams, clientConfig);
    this.accounts.adclients.adunits.listLinkedCustomChannels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:listLinkedCustomChannels', 'GET', apiParams, clientConfig);

    this.accounts.adclients.customchannels = {};
    this.accounts.adclients.customchannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.adclients.customchannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.adclients.customchannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/customchannels', 'GET', apiParams, clientConfig);
    this.accounts.adclients.customchannels.listLinkedAdUnits = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:listLinkedAdUnits', 'GET', apiParams, clientConfig);
    this.accounts.adclients.customchannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/customchannels', 'POST', apiParams, clientConfig);
    this.accounts.adclients.customchannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.adclients.urlchannels = {};
    this.accounts.adclients.urlchannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.adclients.urlchannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/urlchannels', 'GET', apiParams, clientConfig);

    this.accounts.sites = {};
    this.accounts.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sites', 'GET', apiParams, clientConfig);
    this.accounts.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.accounts.alerts = {};
    this.accounts.alerts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/alerts', 'GET', apiParams, clientConfig);
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
