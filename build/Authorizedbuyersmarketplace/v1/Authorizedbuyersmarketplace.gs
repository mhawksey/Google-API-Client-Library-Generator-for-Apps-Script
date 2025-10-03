
/**
 * Google Apps Script client library for the Authorized Buyers Marketplace API
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/
 * @class
 */
class Authorizedbuyersmarketplace {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://authorizedbuyersmarketplace.googleapis.com/';
    this._servicePath = '';


    this.buyers = {};

    this.buyers.auctionPackages = {};
    this.buyers.auctionPackages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.auctionPackages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auctionPackages', 'GET', apiParams, clientConfig);
    this.buyers.auctionPackages.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:subscribe', 'POST', apiParams, clientConfig);
    this.buyers.auctionPackages.unsubscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unsubscribe', 'POST', apiParams, clientConfig);
    this.buyers.auctionPackages.subscribeClients = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+auctionPackage}:subscribeClients', 'POST', apiParams, clientConfig);
    this.buyers.auctionPackages.unsubscribeClients = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+auctionPackage}:unsubscribeClients', 'POST', apiParams, clientConfig);

    this.buyers.clients = {};
    this.buyers.clients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.clients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients', 'GET', apiParams, clientConfig);
    this.buyers.clients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients', 'POST', apiParams, clientConfig);
    this.buyers.clients.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.buyers.clients.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.buyers.clients.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deactivate', 'POST', apiParams, clientConfig);

    this.buyers.clients.users = {};
    this.buyers.clients.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.clients.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/users', 'GET', apiParams, clientConfig);
    this.buyers.clients.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/users', 'POST', apiParams, clientConfig);
    this.buyers.clients.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.buyers.clients.users.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.buyers.clients.users.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deactivate', 'POST', apiParams, clientConfig);

    this.buyers.finalizedDeals = {};
    this.buyers.finalizedDeals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.finalizedDeals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/finalizedDeals', 'GET', apiParams, clientConfig);
    this.buyers.finalizedDeals.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:pause', 'POST', apiParams, clientConfig);
    this.buyers.finalizedDeals.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resume', 'POST', apiParams, clientConfig);
    this.buyers.finalizedDeals.addCreative = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+deal}:addCreative', 'POST', apiParams, clientConfig);
    this.buyers.finalizedDeals.setReadyToServe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+deal}:setReadyToServe', 'POST', apiParams, clientConfig);

    this.buyers.proposals = {};
    this.buyers.proposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.proposals.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.buyers.proposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/proposals', 'GET', apiParams, clientConfig);
    this.buyers.proposals.cancelNegotiation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+proposal}:cancelNegotiation', 'POST', apiParams, clientConfig);
    this.buyers.proposals.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accept', 'POST', apiParams, clientConfig);
    this.buyers.proposals.addNote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+proposal}:addNote', 'POST', apiParams, clientConfig);
    this.buyers.proposals.sendRfp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+buyer}/proposals:sendRfp', 'POST', apiParams, clientConfig);

    this.buyers.proposals.deals = {};
    this.buyers.proposals.deals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.proposals.deals.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.buyers.proposals.deals.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deals:batchUpdate', 'POST', apiParams, clientConfig);
    this.buyers.proposals.deals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deals', 'GET', apiParams, clientConfig);

    this.buyers.publisherProfiles = {};
    this.buyers.publisherProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.publisherProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/publisherProfiles', 'GET', apiParams, clientConfig);

    this.bidders = {};

    this.bidders.auctionPackages = {};
    this.bidders.auctionPackages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/auctionPackages', 'GET', apiParams, clientConfig);

    this.bidders.finalizedDeals = {};
    this.bidders.finalizedDeals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/finalizedDeals', 'GET', apiParams, clientConfig);
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
