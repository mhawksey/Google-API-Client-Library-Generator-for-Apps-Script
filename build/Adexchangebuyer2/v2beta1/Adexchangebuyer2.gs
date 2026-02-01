
/**
 * Google Apps Script client library for the Ad Exchange Buyer API II
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/reference/rest/
 * @class
 */
class Adexchangebuyer2 {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://adexchangebuyer.googleapis.com/';
    this._servicePath = '';


    this.buyers = {};

    this.buyers.filterSets = {};
    this.buyers.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);
    this.buyers.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.buyers.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);
    this.buyers.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.buyers.filterSets.nonBillableWinningBids = {};
    this.buyers.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidResponsesWithoutBids = {};
    this.buyers.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.losingBids = {};
    this.buyers.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids = {};
    this.buyers.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids.creatives = {};
    this.buyers.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids.details = {};
    this.buyers.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidMetrics = {};
    this.buyers.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBidRequests = {};
    this.buyers.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidResponseErrors = {};
    this.buyers.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.impressionMetrics = {};
    this.buyers.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.accounts = {};

    this.accounts.creatives = {};
    this.accounts.creatives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'POST', apiParams, clientConfig);
    this.accounts.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'GET', apiParams, clientConfig);
    this.accounts.creatives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'PUT', apiParams, clientConfig);
    this.accounts.creatives.stopWatching = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching', 'POST', apiParams, clientConfig);
    this.accounts.creatives.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:watch', 'POST', apiParams, clientConfig);
    this.accounts.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'GET', apiParams, clientConfig);

    this.accounts.creatives.dealAssociations = {};
    this.accounts.creatives.dealAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations', 'GET', apiParams, clientConfig);
    this.accounts.creatives.dealAssociations.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add', 'POST', apiParams, clientConfig);
    this.accounts.creatives.dealAssociations.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove', 'POST', apiParams, clientConfig);

    this.accounts.clients = {};
    this.accounts.clients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'POST', apiParams, clientConfig);
    this.accounts.clients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'GET', apiParams, clientConfig);
    this.accounts.clients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'GET', apiParams, clientConfig);
    this.accounts.clients.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'PUT', apiParams, clientConfig);

    this.accounts.clients.users = {};
    this.accounts.clients.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users', 'GET', apiParams, clientConfig);
    this.accounts.clients.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'PUT', apiParams, clientConfig);
    this.accounts.clients.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'GET', apiParams, clientConfig);

    this.accounts.clients.invitations = {};
    this.accounts.clients.invitations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}', 'GET', apiParams, clientConfig);
    this.accounts.clients.invitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'POST', apiParams, clientConfig);
    this.accounts.clients.invitations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'GET', apiParams, clientConfig);

    this.accounts.products = {};
    this.accounts.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/products', 'GET', apiParams, clientConfig);
    this.accounts.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/products/{productId}', 'GET', apiParams, clientConfig);

    this.accounts.finalizedProposals = {};
    this.accounts.finalizedProposals.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume', 'POST', apiParams, clientConfig);
    this.accounts.finalizedProposals.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause', 'POST', apiParams, clientConfig);
    this.accounts.finalizedProposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals', 'GET', apiParams, clientConfig);

    this.accounts.proposals = {};
    this.accounts.proposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'GET', apiParams, clientConfig);
    this.accounts.proposals.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:resume', 'POST', apiParams, clientConfig);
    this.accounts.proposals.completeSetup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup', 'POST', apiParams, clientConfig);
    this.accounts.proposals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'POST', apiParams, clientConfig);
    this.accounts.proposals.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:accept', 'POST', apiParams, clientConfig);
    this.accounts.proposals.addNote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote', 'POST', apiParams, clientConfig);
    this.accounts.proposals.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:pause', 'POST', apiParams, clientConfig);
    this.accounts.proposals.cancelNegotiation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation', 'POST', apiParams, clientConfig);
    this.accounts.proposals.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'PUT', apiParams, clientConfig);
    this.accounts.proposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'GET', apiParams, clientConfig);

    this.accounts.publisherProfiles = {};
    this.accounts.publisherProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}', 'GET', apiParams, clientConfig);
    this.accounts.publisherProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles', 'GET', apiParams, clientConfig);

    this.bidders = {};

    this.bidders.filterSets = {};
    this.bidders.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);
    this.bidders.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.bidders.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.bidders.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);

    this.bidders.filterSets.impressionMetrics = {};
    this.bidders.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBidRequests = {};
    this.bidders.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.nonBillableWinningBids = {};
    this.bidders.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids = {};
    this.bidders.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids.details = {};
    this.bidders.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids.creatives = {};
    this.bidders.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidResponseErrors = {};
    this.bidders.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidResponsesWithoutBids = {};
    this.bidders.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.losingBids = {};
    this.bidders.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidMetrics = {};
    this.bidders.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);

    this.bidders.accounts = {};

    this.bidders.accounts.filterSets = {};
    this.bidders.accounts.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);
    this.bidders.accounts.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.bidders.accounts.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);
    this.bidders.accounts.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidResponseErrors = {};
    this.bidders.accounts.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBidRequests = {};
    this.bidders.accounts.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.impressionMetrics = {};
    this.bidders.accounts.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.nonBillableWinningBids = {};
    this.bidders.accounts.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.losingBids = {};
    this.bidders.accounts.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidResponsesWithoutBids = {};
    this.bidders.accounts.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids = {};
    this.bidders.accounts.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids.details = {};
    this.bidders.accounts.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids.creatives = {};
    this.bidders.accounts.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidMetrics = {};
    this.bidders.accounts.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);
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
