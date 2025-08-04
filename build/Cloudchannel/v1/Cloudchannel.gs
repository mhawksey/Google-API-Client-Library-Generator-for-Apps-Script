
/**
 * Google Apps Script client library for the Cloud Channel API
 * Documentation URL: https://cloud.google.com/channel
 * @class
 */
class Cloudchannel {
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
    this._rootUrl = 'https://cloudchannel.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.accounts = {};
    this.accounts.checkCloudIdentityAccountsExist = (params) => this._makeRequest('v1/{+parent}:checkCloudIdentityAccountsExist', 'POST', params);
    this.accounts.listTransferableSkus = (params) => this._makeRequest('v1/{+parent}:listTransferableSkus', 'POST', params);
    this.accounts.listTransferableOffers = (params) => this._makeRequest('v1/{+parent}:listTransferableOffers', 'POST', params);
    this.accounts.register = (params) => this._makeRequest('v1/{+account}:register', 'POST', params);
    this.accounts.unregister = (params) => this._makeRequest('v1/{+account}:unregister', 'POST', params);
    this.accounts.listSubscribers = (params) => this._makeRequest('v1/{+account}:listSubscribers', 'GET', params);

    this.accounts.reports = {};
    this.accounts.reports.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);
    this.accounts.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);

    this.accounts.reportJobs = {};
    this.accounts.reportJobs.fetchReportResults = (params) => this._makeRequest('v1/{+reportJob}:fetchReportResults', 'POST', params);

    this.accounts.customers = {};
    this.accounts.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);
    this.accounts.customers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);
    this.accounts.customers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.customers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accounts.customers.import = (params) => this._makeRequest('v1/{+parent}/customers:import', 'POST', params);
    this.accounts.customers.provisionCloudIdentity = (params) => this._makeRequest('v1/{+customer}:provisionCloudIdentity', 'POST', params);
    this.accounts.customers.transferEntitlements = (params) => this._makeRequest('v1/{+parent}:transferEntitlements', 'POST', params);
    this.accounts.customers.transferEntitlementsToGoogle = (params) => this._makeRequest('v1/{+parent}:transferEntitlementsToGoogle', 'POST', params);
    this.accounts.customers.listPurchasableSkus = (params) => this._makeRequest('v1/{+customer}:listPurchasableSkus', 'GET', params);
    this.accounts.customers.listPurchasableOffers = (params) => this._makeRequest('v1/{+customer}:listPurchasableOffers', 'GET', params);
    this.accounts.customers.queryEligibleBillingAccounts = (params) => this._makeRequest('v1/{+customer}:queryEligibleBillingAccounts', 'GET', params);

    this.accounts.customers.entitlements = {};
    this.accounts.customers.entitlements.list = (params) => this._makeRequest('v1/{+parent}/entitlements', 'GET', params);
    this.accounts.customers.entitlements.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.customers.entitlements.create = (params) => this._makeRequest('v1/{+parent}/entitlements', 'POST', params);
    this.accounts.customers.entitlements.changeParameters = (params) => this._makeRequest('v1/{+name}:changeParameters', 'POST', params);
    this.accounts.customers.entitlements.changeRenewalSettings = (params) => this._makeRequest('v1/{+name}:changeRenewalSettings', 'POST', params);
    this.accounts.customers.entitlements.changeOffer = (params) => this._makeRequest('v1/{+name}:changeOffer', 'POST', params);
    this.accounts.customers.entitlements.startPaidService = (params) => this._makeRequest('v1/{+name}:startPaidService', 'POST', params);
    this.accounts.customers.entitlements.suspend = (params) => this._makeRequest('v1/{+name}:suspend', 'POST', params);
    this.accounts.customers.entitlements.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.accounts.customers.entitlements.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);
    this.accounts.customers.entitlements.lookupOffer = (params) => this._makeRequest('v1/{+entitlement}:lookupOffer', 'GET', params);
    this.accounts.customers.entitlements.listEntitlementChanges = (params) => this._makeRequest('v1/{+parent}:listEntitlementChanges', 'GET', params);

    this.accounts.customers.customerRepricingConfigs = {};
    this.accounts.customers.customerRepricingConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.customers.customerRepricingConfigs.list = (params) => this._makeRequest('v1/{+parent}/customerRepricingConfigs', 'GET', params);
    this.accounts.customers.customerRepricingConfigs.create = (params) => this._makeRequest('v1/{+parent}/customerRepricingConfigs', 'POST', params);
    this.accounts.customers.customerRepricingConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.customers.customerRepricingConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.channelPartnerLinks = {};
    this.accounts.channelPartnerLinks.list = (params) => this._makeRequest('v1/{+parent}/channelPartnerLinks', 'GET', params);
    this.accounts.channelPartnerLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.channelPartnerLinks.create = (params) => this._makeRequest('v1/{+parent}/channelPartnerLinks', 'POST', params);
    this.accounts.channelPartnerLinks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.accounts.channelPartnerLinks.customers = {};
    this.accounts.channelPartnerLinks.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);
    this.accounts.channelPartnerLinks.customers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.channelPartnerLinks.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);
    this.accounts.channelPartnerLinks.customers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.channelPartnerLinks.customers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accounts.channelPartnerLinks.customers.import = (params) => this._makeRequest('v1/{+parent}/customers:import', 'POST', params);

    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs = {};
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.list = (params) => this._makeRequest('v1/{+parent}/channelPartnerRepricingConfigs', 'GET', params);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.create = (params) => this._makeRequest('v1/{+parent}/channelPartnerRepricingConfigs', 'POST', params);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.skuGroups = {};
    this.accounts.skuGroups.list = (params) => this._makeRequest('v1/{+parent}/skuGroups', 'GET', params);

    this.accounts.skuGroups.billableSkus = {};
    this.accounts.skuGroups.billableSkus.list = (params) => this._makeRequest('v1/{+parent}/billableSkus', 'GET', params);

    this.accounts.offers = {};
    this.accounts.offers.list = (params) => this._makeRequest('v1/{+parent}/offers', 'GET', params);

    this.products = {};
    this.products.list = (params) => this._makeRequest('v1/products', 'GET', params);

    this.products.skus = {};
    this.products.skus.list = (params) => this._makeRequest('v1/{+parent}/skus', 'GET', params);

    this.integrators = {};
    this.integrators.registerSubscriber = (params) => this._makeRequest('v1/{+integrator}:registerSubscriber', 'POST', params);
    this.integrators.unregisterSubscriber = (params) => this._makeRequest('v1/{+integrator}:unregisterSubscriber', 'POST', params);
    this.integrators.listSubscribers = (params) => this._makeRequest('v1/{+integrator}:listSubscribers', 'GET', params);
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
