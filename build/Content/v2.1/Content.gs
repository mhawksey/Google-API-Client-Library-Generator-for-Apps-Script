
/**
 * Google Apps Script client library for the Content API for Shopping
 * Documentation URL: https://developers.google.com/shopping-content/v2/
 * @class
 */
class Content {
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
    this._rootUrl = 'https://shoppingcontent.googleapis.com/';
    this._servicePath = 'content/v2.1/';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.authinfo = (params) => this._makeRequest('accounts/authinfo', 'GET', params);
    this.accounts.claimwebsite = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/claimwebsite', 'POST', params);
    this.accounts.custombatch = (params) => this._makeRequest('accounts/batch', 'POST', params);
    this.accounts.delete = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'DELETE', params);
    this.accounts.get = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'GET', params);
    this.accounts.insert = (params) => this._makeRequest('{merchantId}/accounts', 'POST', params);
    this.accounts.link = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/link', 'POST', params);
    this.accounts.list = (params) => this._makeRequest('{merchantId}/accounts', 'GET', params);
    this.accounts.listlinks = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/listlinks', 'GET', params);
    this.accounts.update = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'PUT', params);
    this.accounts.updatelabels = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/updatelabels', 'POST', params);
    this.accounts.requestphoneverification = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/requestphoneverification', 'POST', params);
    this.accounts.verifyphonenumber = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/verifyphonenumber', 'POST', params);

    this.accounts.credentials = {};
    this.accounts.credentials.create = (params) => this._makeRequest('accounts/{accountId}/credentials', 'POST', params);

    this.accounts.labels = {};
    this.accounts.labels.list = (params) => this._makeRequest('accounts/{accountId}/labels', 'GET', params);
    this.accounts.labels.create = (params) => this._makeRequest('accounts/{accountId}/labels', 'POST', params);
    this.accounts.labels.patch = (params) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'PATCH', params);
    this.accounts.labels.delete = (params) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'DELETE', params);

    this.accounts.returncarrier = {};
    this.accounts.returncarrier.create = (params) => this._makeRequest('accounts/{accountId}/returncarrier', 'POST', params);
    this.accounts.returncarrier.patch = (params) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'PATCH', params);
    this.accounts.returncarrier.delete = (params) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'DELETE', params);
    this.accounts.returncarrier.list = (params) => this._makeRequest('accounts/{accountId}/returncarrier', 'GET', params);

    this.accountstatuses = {};
    this.accountstatuses.custombatch = (params) => this._makeRequest('accountstatuses/batch', 'POST', params);
    this.accountstatuses.get = (params) => this._makeRequest('{merchantId}/accountstatuses/{accountId}', 'GET', params);
    this.accountstatuses.list = (params) => this._makeRequest('{merchantId}/accountstatuses', 'GET', params);

    this.accounttax = {};
    this.accounttax.custombatch = (params) => this._makeRequest('accounttax/batch', 'POST', params);
    this.accounttax.get = (params) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'GET', params);
    this.accounttax.list = (params) => this._makeRequest('{merchantId}/accounttax', 'GET', params);
    this.accounttax.update = (params) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'PUT', params);

    this.datafeeds = {};
    this.datafeeds.custombatch = (params) => this._makeRequest('datafeeds/batch', 'POST', params);
    this.datafeeds.delete = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'DELETE', params);
    this.datafeeds.fetchnow = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}/fetchNow', 'POST', params);
    this.datafeeds.get = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'GET', params);
    this.datafeeds.insert = (params) => this._makeRequest('{merchantId}/datafeeds', 'POST', params);
    this.datafeeds.list = (params) => this._makeRequest('{merchantId}/datafeeds', 'GET', params);
    this.datafeeds.update = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'PUT', params);

    this.datafeedstatuses = {};
    this.datafeedstatuses.custombatch = (params) => this._makeRequest('datafeedstatuses/batch', 'POST', params);
    this.datafeedstatuses.get = (params) => this._makeRequest('{merchantId}/datafeedstatuses/{datafeedId}', 'GET', params);
    this.datafeedstatuses.list = (params) => this._makeRequest('{merchantId}/datafeedstatuses', 'GET', params);

    this.liasettings = {};
    this.liasettings.custombatch = (params) => this._makeRequest('liasettings/batch', 'POST', params);
    this.liasettings.get = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'GET', params);
    this.liasettings.getaccessiblegmbaccounts = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/accessiblegmbaccounts', 'GET', params);
    this.liasettings.list = (params) => this._makeRequest('{merchantId}/liasettings', 'GET', params);
    this.liasettings.listposdataproviders = (params) => this._makeRequest('liasettings/posdataproviders', 'GET', params);
    this.liasettings.requestgmbaccess = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestgmbaccess', 'POST', params);
    this.liasettings.requestinventoryverification = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}', 'POST', params);
    this.liasettings.setinventoryverificationcontact = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setinventoryverificationcontact', 'POST', params);
    this.liasettings.setomnichannelexperience = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setomnichannelexperience', 'POST', params);
    this.liasettings.setposdataprovider = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setposdataprovider', 'POST', params);
    this.liasettings.update = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'PUT', params);

    this.localinventory = {};
    this.localinventory.custombatch = (params) => this._makeRequest('localinventory/batch', 'POST', params);
    this.localinventory.insert = (params) => this._makeRequest('{merchantId}/products/{productId}/localinventory', 'POST', params);

    this.pos = {};
    this.pos.custombatch = (params) => this._makeRequest('pos/batch', 'POST', params);
    this.pos.delete = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'DELETE', params);
    this.pos.get = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'GET', params);
    this.pos.insert = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'POST', params);
    this.pos.inventory = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/inventory', 'POST', params);
    this.pos.list = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'GET', params);
    this.pos.sale = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/sale', 'POST', params);

    this.products = {};
    this.products.custombatch = (params) => this._makeRequest('products/batch', 'POST', params);
    this.products.delete = (params) => this._makeRequest('{merchantId}/products/{productId}', 'DELETE', params);
    this.products.get = (params) => this._makeRequest('{merchantId}/products/{productId}', 'GET', params);
    this.products.insert = (params) => this._makeRequest('{merchantId}/products', 'POST', params);
    this.products.update = (params) => this._makeRequest('{merchantId}/products/{productId}', 'PATCH', params);
    this.products.list = (params) => this._makeRequest('{merchantId}/products', 'GET', params);

    this.productstatuses = {};
    this.productstatuses.custombatch = (params) => this._makeRequest('productstatuses/batch', 'POST', params);
    this.productstatuses.get = (params) => this._makeRequest('{merchantId}/productstatuses/{productId}', 'GET', params);
    this.productstatuses.list = (params) => this._makeRequest('{merchantId}/productstatuses', 'GET', params);

    this.pubsubnotificationsettings = {};
    this.pubsubnotificationsettings.get = (params) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'GET', params);
    this.pubsubnotificationsettings.update = (params) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'PUT', params);

    this.regionalinventory = {};
    this.regionalinventory.custombatch = (params) => this._makeRequest('regionalinventory/batch', 'POST', params);
    this.regionalinventory.insert = (params) => this._makeRequest('{merchantId}/products/{productId}/regionalinventory', 'POST', params);

    this.returnaddress = {};
    this.returnaddress.custombatch = (params) => this._makeRequest('returnaddress/batch', 'POST', params);
    this.returnaddress.delete = (params) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'DELETE', params);
    this.returnaddress.get = (params) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'GET', params);
    this.returnaddress.insert = (params) => this._makeRequest('{merchantId}/returnaddress', 'POST', params);
    this.returnaddress.list = (params) => this._makeRequest('{merchantId}/returnaddress', 'GET', params);

    this.returnpolicy = {};
    this.returnpolicy.custombatch = (params) => this._makeRequest('returnpolicy/batch', 'POST', params);
    this.returnpolicy.delete = (params) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'DELETE', params);
    this.returnpolicy.get = (params) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'GET', params);
    this.returnpolicy.insert = (params) => this._makeRequest('{merchantId}/returnpolicy', 'POST', params);
    this.returnpolicy.list = (params) => this._makeRequest('{merchantId}/returnpolicy', 'GET', params);

    this.shippingsettings = {};
    this.shippingsettings.custombatch = (params) => this._makeRequest('shippingsettings/batch', 'POST', params);
    this.shippingsettings.get = (params) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'GET', params);
    this.shippingsettings.getsupportedcarriers = (params) => this._makeRequest('{merchantId}/supportedCarriers', 'GET', params);
    this.shippingsettings.getsupportedholidays = (params) => this._makeRequest('{merchantId}/supportedHolidays', 'GET', params);
    this.shippingsettings.getsupportedpickupservices = (params) => this._makeRequest('{merchantId}/supportedPickupServices', 'GET', params);
    this.shippingsettings.list = (params) => this._makeRequest('{merchantId}/shippingsettings', 'GET', params);
    this.shippingsettings.update = (params) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'PUT', params);

    this.collections = {};
    this.collections.get = (params) => this._makeRequest('{merchantId}/collections/{collectionId}', 'GET', params);
    this.collections.list = (params) => this._makeRequest('{merchantId}/collections', 'GET', params);
    this.collections.create = (params) => this._makeRequest('{merchantId}/collections', 'POST', params);
    this.collections.delete = (params) => this._makeRequest('{merchantId}/collections/{collectionId}', 'DELETE', params);

    this.quotas = {};
    this.quotas.list = (params) => this._makeRequest('{merchantId}/quotas', 'GET', params);

    this.collectionstatuses = {};
    this.collectionstatuses.get = (params) => this._makeRequest('{merchantId}/collectionstatuses/{collectionId}', 'GET', params);
    this.collectionstatuses.list = (params) => this._makeRequest('{merchantId}/collectionstatuses', 'GET', params);

    this.conversionsources = {};
    this.conversionsources.create = (params) => this._makeRequest('{merchantId}/conversionsources', 'POST', params);
    this.conversionsources.patch = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'PATCH', params);
    this.conversionsources.delete = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'DELETE', params);
    this.conversionsources.undelete = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}:undelete', 'POST', params);
    this.conversionsources.get = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'GET', params);
    this.conversionsources.list = (params) => this._makeRequest('{merchantId}/conversionsources', 'GET', params);

    this.freelistingsprogram = {};
    this.freelistingsprogram.get = (params) => this._makeRequest('{merchantId}/freelistingsprogram', 'GET', params);
    this.freelistingsprogram.requestreview = (params) => this._makeRequest('{merchantId}/freelistingsprogram/requestreview', 'POST', params);

    this.freelistingsprogram.checkoutsettings = {};
    this.freelistingsprogram.checkoutsettings.get = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'GET', params);
    this.freelistingsprogram.checkoutsettings.insert = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'POST', params);
    this.freelistingsprogram.checkoutsettings.delete = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'DELETE', params);

    this.shoppingadsprogram = {};
    this.shoppingadsprogram.get = (params) => this._makeRequest('{merchantId}/shoppingadsprogram', 'GET', params);
    this.shoppingadsprogram.requestreview = (params) => this._makeRequest('{merchantId}/shoppingadsprogram/requestreview', 'POST', params);

    this.csses = {};
    this.csses.list = (params) => this._makeRequest('{cssGroupId}/csses', 'GET', params);
    this.csses.get = (params) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}', 'GET', params);
    this.csses.updatelabels = (params) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}/updatelabels', 'POST', params);

    this.reports = {};
    this.reports.search = (params) => this._makeRequest('{merchantId}/reports/search', 'POST', params);

    this.merchantsupport = {};
    this.merchantsupport.renderaccountissues = (params) => this._makeRequest('{merchantId}/merchantsupport/renderaccountissues', 'POST', params);
    this.merchantsupport.renderproductissues = (params) => this._makeRequest('{merchantId}/merchantsupport/renderproductissues/{productId}', 'POST', params);
    this.merchantsupport.triggeraction = (params) => this._makeRequest('{merchantId}/merchantsupport/triggeraction', 'POST', params);

    this.regions = {};
    this.regions.get = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'GET', params);
    this.regions.create = (params) => this._makeRequest('{merchantId}/regions', 'POST', params);
    this.regions.patch = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'PATCH', params);
    this.regions.delete = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'DELETE', params);
    this.regions.list = (params) => this._makeRequest('{merchantId}/regions', 'GET', params);

    this.promotions = {};
    this.promotions.create = (params) => this._makeRequest('{merchantId}/promotions', 'POST', params);
    this.promotions.get = (params) => this._makeRequest('{merchantId}/promotions/{id}', 'GET', params);
    this.promotions.list = (params) => this._makeRequest('{merchantId}/promotions', 'GET', params);

    this.recommendations = {};
    this.recommendations.generate = (params) => this._makeRequest('{merchantId}/recommendations/generate', 'GET', params);
    this.recommendations.reportInteraction = (params) => this._makeRequest('{merchantId}/recommendations/reportInteraction', 'POST', params);

    this.returnpolicyonline = {};
    this.returnpolicyonline.get = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'GET', params);
    this.returnpolicyonline.create = (params) => this._makeRequest('{merchantId}/returnpolicyonline', 'POST', params);
    this.returnpolicyonline.delete = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'DELETE', params);
    this.returnpolicyonline.patch = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'PATCH', params);
    this.returnpolicyonline.list = (params) => this._makeRequest('{merchantId}/returnpolicyonline', 'GET', params);

    this.ordertrackingsignals = {};
    this.ordertrackingsignals.create = (params) => this._makeRequest('{merchantId}/ordertrackingsignals', 'POST', params);

    this.productdeliverytime = {};
    this.productdeliverytime.create = (params) => this._makeRequest('{merchantId}/productdeliverytime', 'POST', params);
    this.productdeliverytime.get = (params) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'GET', params);
    this.productdeliverytime.delete = (params) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'DELETE', params);
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
