
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://authorizedbuyersmarketplace.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.buyers = {};

    this.buyers.auctionPackages = {};
    this.buyers.auctionPackages.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.auctionPackages.list = (params) => this._makeRequest('v1alpha/{+parent}/auctionPackages', 'GET', params);
    this.buyers.auctionPackages.subscribe = (params) => this._makeRequest('v1alpha/{+name}:subscribe', 'POST', params);
    this.buyers.auctionPackages.unsubscribe = (params) => this._makeRequest('v1alpha/{+name}:unsubscribe', 'POST', params);
    this.buyers.auctionPackages.subscribeClients = (params) => this._makeRequest('v1alpha/{+auctionPackage}:subscribeClients', 'POST', params);
    this.buyers.auctionPackages.unsubscribeClients = (params) => this._makeRequest('v1alpha/{+auctionPackage}:unsubscribeClients', 'POST', params);

    this.buyers.clients = {};
    this.buyers.clients.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.clients.list = (params) => this._makeRequest('v1alpha/{+parent}/clients', 'GET', params);
    this.buyers.clients.create = (params) => this._makeRequest('v1alpha/{+parent}/clients', 'POST', params);
    this.buyers.clients.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.buyers.clients.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);
    this.buyers.clients.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.clients.users = {};
    this.buyers.clients.users.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.clients.users.list = (params) => this._makeRequest('v1alpha/{+parent}/users', 'GET', params);
    this.buyers.clients.users.create = (params) => this._makeRequest('v1alpha/{+parent}/users', 'POST', params);
    this.buyers.clients.users.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.buyers.clients.users.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);
    this.buyers.clients.users.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.dataSegments = {};
    this.buyers.dataSegments.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.dataSegments.list = (params) => this._makeRequest('v1alpha/{+parent}/dataSegments', 'GET', params);
    this.buyers.dataSegments.create = (params) => this._makeRequest('v1alpha/{+parent}/dataSegments', 'POST', params);
    this.buyers.dataSegments.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.buyers.dataSegments.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);
    this.buyers.dataSegments.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.finalizedDeals = {};
    this.buyers.finalizedDeals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.finalizedDeals.list = (params) => this._makeRequest('v1alpha/{+parent}/finalizedDeals', 'GET', params);
    this.buyers.finalizedDeals.pause = (params) => this._makeRequest('v1alpha/{+name}:pause', 'POST', params);
    this.buyers.finalizedDeals.resume = (params) => this._makeRequest('v1alpha/{+name}:resume', 'POST', params);
    this.buyers.finalizedDeals.addCreative = (params) => this._makeRequest('v1alpha/{+deal}:addCreative', 'POST', params);
    this.buyers.finalizedDeals.setReadyToServe = (params) => this._makeRequest('v1alpha/{+deal}:setReadyToServe', 'POST', params);

    this.buyers.proposals = {};
    this.buyers.proposals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.proposals.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.buyers.proposals.list = (params) => this._makeRequest('v1alpha/{+parent}/proposals', 'GET', params);
    this.buyers.proposals.cancelNegotiation = (params) => this._makeRequest('v1alpha/{+proposal}:cancelNegotiation', 'POST', params);
    this.buyers.proposals.accept = (params) => this._makeRequest('v1alpha/{+name}:accept', 'POST', params);
    this.buyers.proposals.addNote = (params) => this._makeRequest('v1alpha/{+proposal}:addNote', 'POST', params);
    this.buyers.proposals.sendRfp = (params) => this._makeRequest('v1alpha/{+buyer}/proposals:sendRfp', 'POST', params);

    this.buyers.proposals.deals = {};
    this.buyers.proposals.deals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.proposals.deals.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.buyers.proposals.deals.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/deals:batchUpdate', 'POST', params);
    this.buyers.proposals.deals.list = (params) => this._makeRequest('v1alpha/{+parent}/deals', 'GET', params);

    this.buyers.publisherProfiles = {};
    this.buyers.publisherProfiles.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.buyers.publisherProfiles.list = (params) => this._makeRequest('v1alpha/{+parent}/publisherProfiles', 'GET', params);

    this.bidders = {};

    this.bidders.auctionPackages = {};
    this.bidders.auctionPackages.list = (params) => this._makeRequest('v1alpha/{+parent}/auctionPackages', 'GET', params);

    this.bidders.finalizedDeals = {};
    this.bidders.finalizedDeals.list = (params) => this._makeRequest('v1alpha/{+parent}/finalizedDeals', 'GET', params);
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
