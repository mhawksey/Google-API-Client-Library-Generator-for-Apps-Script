
/**
 * Google Apps Script client library for the Merchant API
 * Documentation URL: https://developers.google.com/merchant/api
 * @class
 */
class Merchantapi {
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
    this._rootUrl = 'https://merchantapi.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.createAndConfigure = (params) => this._makeRequest('accounts/v1/accounts:createAndConfigure', 'POST', params);
    this.accounts.delete = (params) => this._makeRequest('accounts/v1/{+name}', 'DELETE', params);
    this.accounts.patch = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.list = (params) => this._makeRequest('accounts/v1/accounts', 'GET', params);
    this.accounts.listSubaccounts = (params) => this._makeRequest('accounts/v1/{+provider}:listSubaccounts', 'GET', params);

    this.accounts.issues = {};
    this.accounts.issues.list = (params) => this._makeRequest('accounts/v1/{+parent}/issues', 'GET', params);

    this.accounts.services = {};
    this.accounts.services.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.services.list = (params) => this._makeRequest('accounts/v1/{+parent}/services', 'GET', params);
    this.accounts.services.propose = (params) => this._makeRequest('accounts/v1/{+parent}/services:propose', 'POST', params);
    this.accounts.services.approve = (params) => this._makeRequest('accounts/v1/{+name}:approve', 'POST', params);
    this.accounts.services.reject = (params) => this._makeRequest('accounts/v1/{+name}:reject', 'POST', params);

    this.accounts.relationships = {};
    this.accounts.relationships.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.relationships.patch = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.relationships.list = (params) => this._makeRequest('accounts/v1/{+parent}/relationships', 'GET', params);

    this.accounts.users = {};
    this.accounts.users.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.users.create = (params) => this._makeRequest('accounts/v1/{+parent}/users', 'POST', params);
    this.accounts.users.delete = (params) => this._makeRequest('accounts/v1/{+name}', 'DELETE', params);
    this.accounts.users.patch = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.users.list = (params) => this._makeRequest('accounts/v1/{+parent}/users', 'GET', params);

    this.accounts.autofeedSettings = {};
    this.accounts.autofeedSettings.getAutofeedSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.autofeedSettings.updateAutofeedSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);

    this.accounts.automaticImprovements = {};
    this.accounts.automaticImprovements.getAutomaticImprovements = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.automaticImprovements.updateAutomaticImprovements = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);

    this.accounts.businessIdentity = {};
    this.accounts.businessIdentity.getBusinessIdentity = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.businessIdentity.updateBusinessIdentity = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);

    this.accounts.businessInfo = {};
    this.accounts.businessInfo.getBusinessInfo = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.businessInfo.updateBusinessInfo = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);

    this.accounts.developerRegistration = {};
    this.accounts.developerRegistration.registerGcp = (params) => this._makeRequest('accounts/v1/{+name}:registerGcp', 'POST', params);
    this.accounts.developerRegistration.getDeveloperRegistration = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.developerRegistration.unregisterGcp = (params) => this._makeRequest('accounts/v1/{+name}:unregisterGcp', 'POST', params);

    this.accounts.emailPreferences = {};
    this.accounts.emailPreferences.getEmailPreferences = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.emailPreferences.updateEmailPreferences = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);

    this.accounts.gbpAccounts = {};
    this.accounts.gbpAccounts.list = (params) => this._makeRequest('accounts/v1/{+parent}/gbpAccounts', 'GET', params);
    this.accounts.gbpAccounts.linkGbpAccount = (params) => this._makeRequest('accounts/v1/{+parent}/gbpAccounts:linkGbpAccount', 'POST', params);

    this.accounts.homepage = {};
    this.accounts.homepage.getHomepage = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.homepage.updateHomepage = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.homepage.claim = (params) => this._makeRequest('accounts/v1/{+name}:claim', 'POST', params);
    this.accounts.homepage.unclaim = (params) => this._makeRequest('accounts/v1/{+name}:unclaim', 'POST', params);

    this.accounts.omnichannelSettings = {};
    this.accounts.omnichannelSettings.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.omnichannelSettings.list = (params) => this._makeRequest('accounts/v1/{+parent}/omnichannelSettings', 'GET', params);
    this.accounts.omnichannelSettings.create = (params) => this._makeRequest('accounts/v1/{+parent}/omnichannelSettings', 'POST', params);
    this.accounts.omnichannelSettings.patch = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.omnichannelSettings.requestInventoryVerification = (params) => this._makeRequest('accounts/v1/{+name}:requestInventoryVerification', 'POST', params);

    this.accounts.omnichannelSettings.lfpProviders = {};
    this.accounts.omnichannelSettings.lfpProviders.find = (params) => this._makeRequest('accounts/v1/{+parent}/lfpProviders:find', 'GET', params);
    this.accounts.omnichannelSettings.lfpProviders.linkLfpProvider = (params) => this._makeRequest('accounts/v1/{+name}:linkLfpProvider', 'POST', params);

    this.accounts.onlineReturnPolicies = {};
    this.accounts.onlineReturnPolicies.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.onlineReturnPolicies.list = (params) => this._makeRequest('accounts/v1/{+parent}/onlineReturnPolicies', 'GET', params);
    this.accounts.onlineReturnPolicies.create = (params) => this._makeRequest('accounts/v1/{+parent}/onlineReturnPolicies', 'POST', params);
    this.accounts.onlineReturnPolicies.delete = (params) => this._makeRequest('accounts/v1/{+name}', 'DELETE', params);

    this.accounts.programs = {};
    this.accounts.programs.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.programs.list = (params) => this._makeRequest('accounts/v1/{+parent}/programs', 'GET', params);
    this.accounts.programs.enable = (params) => this._makeRequest('accounts/v1/{+name}:enable', 'POST', params);
    this.accounts.programs.disable = (params) => this._makeRequest('accounts/v1/{+name}:disable', 'POST', params);

    this.accounts.programs.checkoutSettings = {};
    this.accounts.programs.checkoutSettings.getCheckoutSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.programs.checkoutSettings.create = (params) => this._makeRequest('accounts/v1/{+parent}/checkoutSettings', 'POST', params);
    this.accounts.programs.checkoutSettings.updateCheckoutSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.programs.checkoutSettings.deleteCheckoutSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'DELETE', params);

    this.accounts.regions = {};
    this.accounts.regions.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.regions.create = (params) => this._makeRequest('accounts/v1/{+parent}/regions', 'POST', params);
    this.accounts.regions.batchCreate = (params) => this._makeRequest('accounts/v1/{+parent}/regions:batchCreate', 'POST', params);
    this.accounts.regions.patch = (params) => this._makeRequest('accounts/v1/{+name}', 'PATCH', params);
    this.accounts.regions.batchUpdate = (params) => this._makeRequest('accounts/v1/{+parent}/regions:batchUpdate', 'POST', params);
    this.accounts.regions.delete = (params) => this._makeRequest('accounts/v1/{+name}', 'DELETE', params);
    this.accounts.regions.batchDelete = (params) => this._makeRequest('accounts/v1/{+parent}/regions:batchDelete', 'POST', params);
    this.accounts.regions.list = (params) => this._makeRequest('accounts/v1/{+parent}/regions', 'GET', params);

    this.accounts.shippingSettings = {};
    this.accounts.shippingSettings.getShippingSettings = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.shippingSettings.insert = (params) => this._makeRequest('accounts/v1/{+parent}/shippingSettings:insert', 'POST', params);

    this.accounts.termsOfServiceAgreementStates = {};
    this.accounts.termsOfServiceAgreementStates.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.accounts.termsOfServiceAgreementStates.retrieveForApplication = (params) => this._makeRequest('accounts/v1/{+parent}/termsOfServiceAgreementStates:retrieveForApplication', 'GET', params);

    this.termsOfService = {};
    this.termsOfService.get = (params) => this._makeRequest('accounts/v1/{+name}', 'GET', params);
    this.termsOfService.retrieveLatest = (params) => this._makeRequest('accounts/v1/termsOfService:retrieveLatest', 'GET', params);
    this.termsOfService.accept = (params) => this._makeRequest('accounts/v1/{+name}:accept', 'POST', params);
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
