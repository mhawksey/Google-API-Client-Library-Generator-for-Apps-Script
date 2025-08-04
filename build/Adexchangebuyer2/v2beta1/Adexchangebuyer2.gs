
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://adexchangebuyer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    this.accounts.creatives = {};
    this.accounts.creatives.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'POST', params);
    this.accounts.creatives.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'PUT', params);
    this.accounts.creatives.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'GET', params);
    this.accounts.creatives.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'GET', params);
    this.accounts.creatives.watch = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:watch', 'POST', params);
    this.accounts.creatives.stopWatching = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching', 'POST', params);

    this.accounts.creatives.dealAssociations = {};
    this.accounts.creatives.dealAssociations.add = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add', 'POST', params);
    this.accounts.creatives.dealAssociations.remove = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove', 'POST', params);
    this.accounts.creatives.dealAssociations.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations', 'GET', params);

    this.accounts.clients = {};
    this.accounts.clients.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'GET', params);
    this.accounts.clients.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'GET', params);
    this.accounts.clients.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'POST', params);
    this.accounts.clients.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'PUT', params);

    this.accounts.clients.users = {};
    this.accounts.clients.users.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users', 'GET', params);
    this.accounts.clients.users.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'PUT', params);
    this.accounts.clients.users.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'GET', params);

    this.accounts.clients.invitations = {};
    this.accounts.clients.invitations.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'POST', params);
    this.accounts.clients.invitations.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}', 'GET', params);
    this.accounts.clients.invitations.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'GET', params);

    this.accounts.proposals = {};
    this.accounts.proposals.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'GET', params);
    this.accounts.proposals.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'POST', params);
    this.accounts.proposals.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'PUT', params);
    this.accounts.proposals.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'GET', params);
    this.accounts.proposals.addNote = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote', 'POST', params);
    this.accounts.proposals.cancelNegotiation = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation', 'POST', params);
    this.accounts.proposals.accept = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:accept', 'POST', params);
    this.accounts.proposals.completeSetup = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup', 'POST', params);
    this.accounts.proposals.pause = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:pause', 'POST', params);
    this.accounts.proposals.resume = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:resume', 'POST', params);

    this.accounts.finalizedProposals = {};
    this.accounts.finalizedProposals.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals', 'GET', params);
    this.accounts.finalizedProposals.pause = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause', 'POST', params);
    this.accounts.finalizedProposals.resume = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume', 'POST', params);

    this.accounts.products = {};
    this.accounts.products.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/products/{productId}', 'GET', params);
    this.accounts.products.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/products', 'GET', params);

    this.accounts.publisherProfiles = {};
    this.accounts.publisherProfiles.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}', 'GET', params);
    this.accounts.publisherProfiles.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles', 'GET', params);

    this.bidders = {};

    this.bidders.accounts = {};

    this.bidders.accounts.filterSets = {};
    this.bidders.accounts.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);
    this.bidders.accounts.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.bidders.accounts.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);
    this.bidders.accounts.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.bidders.accounts.filterSets.impressionMetrics = {};
    this.bidders.accounts.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.bidders.accounts.filterSets.bidMetrics = {};
    this.bidders.accounts.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.bidders.accounts.filterSets.filteredBidRequests = {};
    this.bidders.accounts.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.bidders.accounts.filterSets.bidResponseErrors = {};
    this.bidders.accounts.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.bidders.accounts.filterSets.bidResponsesWithoutBids = {};
    this.bidders.accounts.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids = {};
    this.bidders.accounts.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids.details = {};
    this.bidders.accounts.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids.creatives = {};
    this.bidders.accounts.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.bidders.accounts.filterSets.losingBids = {};
    this.bidders.accounts.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.bidders.accounts.filterSets.nonBillableWinningBids = {};
    this.bidders.accounts.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);

    this.bidders.filterSets = {};
    this.bidders.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);
    this.bidders.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.bidders.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);
    this.bidders.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.bidders.filterSets.impressionMetrics = {};
    this.bidders.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.bidders.filterSets.bidMetrics = {};
    this.bidders.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.bidders.filterSets.filteredBidRequests = {};
    this.bidders.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.bidders.filterSets.bidResponseErrors = {};
    this.bidders.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.bidders.filterSets.bidResponsesWithoutBids = {};
    this.bidders.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.bidders.filterSets.filteredBids = {};
    this.bidders.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.bidders.filterSets.filteredBids.details = {};
    this.bidders.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.bidders.filterSets.filteredBids.creatives = {};
    this.bidders.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.bidders.filterSets.losingBids = {};
    this.bidders.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.bidders.filterSets.nonBillableWinningBids = {};
    this.bidders.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);

    this.buyers = {};

    this.buyers.filterSets = {};
    this.buyers.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);
    this.buyers.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.buyers.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);
    this.buyers.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.buyers.filterSets.impressionMetrics = {};
    this.buyers.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.buyers.filterSets.bidMetrics = {};
    this.buyers.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.buyers.filterSets.filteredBidRequests = {};
    this.buyers.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.buyers.filterSets.bidResponseErrors = {};
    this.buyers.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.buyers.filterSets.bidResponsesWithoutBids = {};
    this.buyers.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.buyers.filterSets.filteredBids = {};
    this.buyers.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.buyers.filterSets.filteredBids.details = {};
    this.buyers.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.buyers.filterSets.filteredBids.creatives = {};
    this.buyers.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.buyers.filterSets.losingBids = {};
    this.buyers.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.buyers.filterSets.nonBillableWinningBids = {};
    this.buyers.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
