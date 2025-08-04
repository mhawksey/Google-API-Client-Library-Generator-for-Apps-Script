
/**
 * Google Apps Script client library for the Google Play Android Developer API
 * Documentation URL: https://developers.google.com/android-publisher
 * @class
 */
class Androidpublisher {
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
    this._rootUrl = 'https://androidpublisher.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.users = {};
    this.users.create = (params) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'POST', params);
    this.users.list = (params) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'GET', params);
    this.users.patch = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', params);
    this.users.delete = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', params);

    this.grants = {};
    this.grants.create = (params) => this._makeRequest('androidpublisher/v3/{+parent}/grants', 'POST', params);
    this.grants.patch = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', params);
    this.grants.delete = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', params);

    this.apprecovery = {};
    this.apprecovery.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'POST', params);
    this.apprecovery.deploy = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy', 'POST', params);
    this.apprecovery.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'GET', params);
    this.apprecovery.addTargeting = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting', 'POST', params);
    this.apprecovery.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel', 'POST', params);

    this.purchases = {};

    this.purchases.productsv2 = {};
    this.purchases.productsv2.getproductpurchasev2 = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}', 'GET', params);

    this.purchases.products = {};
    this.purchases.products.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}', 'GET', params);
    this.purchases.products.acknowledge = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge', 'POST', params);
    this.purchases.products.consume = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume', 'POST', params);

    this.purchases.subscriptions = {};
    this.purchases.subscriptions.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}', 'GET', params);
    this.purchases.subscriptions.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel', 'POST', params);
    this.purchases.subscriptions.defer = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer', 'POST', params);
    this.purchases.subscriptions.refund = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund', 'POST', params);
    this.purchases.subscriptions.revoke = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke', 'POST', params);
    this.purchases.subscriptions.acknowledge = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge', 'POST', params);

    this.purchases.subscriptionsv2 = {};
    this.purchases.subscriptionsv2.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}', 'GET', params);
    this.purchases.subscriptionsv2.revoke = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke', 'POST', params);

    this.purchases.voidedpurchases = {};
    this.purchases.voidedpurchases.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases', 'GET', params);

    this.edits = {};
    this.edits.insert = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits', 'POST', params);
    this.edits.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'GET', params);
    this.edits.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'DELETE', params);
    this.edits.commit = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:commit', 'POST', params);
    this.edits.validate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:validate', 'POST', params);

    this.edits.apks = {};
    this.edits.apks.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'POST', params);
    this.edits.apks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'GET', params);
    this.edits.apks.addexternallyhosted = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted', 'POST', params);

    this.edits.bundles = {};
    this.edits.bundles.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'GET', params);
    this.edits.bundles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'POST', params);

    this.edits.countryavailability = {};
    this.edits.countryavailability.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}', 'GET', params);

    this.edits.deobfuscationfiles = {};
    this.edits.deobfuscationfiles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}', 'POST', params);

    this.edits.details = {};
    this.edits.details.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'GET', params);
    this.edits.details.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PUT', params);
    this.edits.details.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PATCH', params);

    this.edits.expansionfiles = {};
    this.edits.expansionfiles.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'GET', params);
    this.edits.expansionfiles.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PUT', params);
    this.edits.expansionfiles.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PATCH', params);
    this.edits.expansionfiles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'POST', params);

    this.edits.images = {};
    this.edits.images.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'GET', params);
    this.edits.images.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}', 'DELETE', params);
    this.edits.images.deleteall = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'DELETE', params);
    this.edits.images.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'POST', params);

    this.edits.listings = {};
    this.edits.listings.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PUT', params);
    this.edits.listings.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PATCH', params);
    this.edits.listings.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'GET', params);
    this.edits.listings.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'GET', params);
    this.edits.listings.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'DELETE', params);
    this.edits.listings.deleteall = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'DELETE', params);

    this.edits.testers = {};
    this.edits.testers.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'GET', params);
    this.edits.testers.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PUT', params);
    this.edits.testers.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PATCH', params);

    this.edits.tracks = {};
    this.edits.tracks.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'GET', params);
    this.edits.tracks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'GET', params);
    this.edits.tracks.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PUT', params);
    this.edits.tracks.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PATCH', params);
    this.edits.tracks.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'POST', params);

    this.externaltransactions = {};
    this.externaltransactions.createexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+parent}/externalTransactions', 'POST', params);
    this.externaltransactions.refundexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+name}:refund', 'POST', params);
    this.externaltransactions.getexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'GET', params);

    this.generatedapks = {};
    this.generatedapks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}', 'GET', params);
    this.generatedapks.download = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download', 'GET', params);

    this.inappproducts = {};
    this.inappproducts.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'GET', params);
    this.inappproducts.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchGet', 'GET', params);
    this.inappproducts.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'GET', params);
    this.inappproducts.insert = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'POST', params);
    this.inappproducts.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PUT', params);
    this.inappproducts.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate', 'POST', params);
    this.inappproducts.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PATCH', params);
    this.inappproducts.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'DELETE', params);
    this.inappproducts.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete', 'POST', params);

    this.internalappsharingartifacts = {};
    this.internalappsharingartifacts.uploadapk = (params) => this._makeRequest('androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk', 'POST', params);
    this.internalappsharingartifacts.uploadbundle = (params) => this._makeRequest('androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle', 'POST', params);

    this.orders = {};
    this.orders.refund = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund', 'POST', params);
    this.orders.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}', 'GET', params);
    this.orders.batchget = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders:batchGet', 'GET', params);

    this.applications = {};
    this.applications.dataSafety = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/dataSafety', 'POST', params);

    this.applications.deviceTierConfigs = {};
    this.applications.deviceTierConfigs.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'POST', params);
    this.applications.deviceTierConfigs.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}', 'GET', params);
    this.applications.deviceTierConfigs.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'GET', params);

    this.monetization = {};
    this.monetization.convertRegionPrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices', 'POST', params);

    this.monetization.onetimeproducts = {};
    this.monetization.onetimeproducts.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'GET', params);
    this.monetization.onetimeproducts.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet', 'GET', params);
    this.monetization.onetimeproducts.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts', 'GET', params);
    this.monetization.onetimeproducts.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}', 'PATCH', params);
    this.monetization.onetimeproducts.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate', 'POST', params);
    this.monetization.onetimeproducts.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'DELETE', params);
    this.monetization.onetimeproducts.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete', 'POST', params);

    this.monetization.onetimeproducts.purchaseOptions = {};
    this.monetization.onetimeproducts.purchaseOptions.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete', 'POST', params);

    this.monetization.onetimeproducts.purchaseOptions.offers = {};
    this.monetization.onetimeproducts.purchaseOptions.offers.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers', 'GET', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel', 'POST', params);
    this.monetization.onetimeproducts.purchaseOptions.offers.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate', 'POST', params);

    this.monetization.subscriptions = {};
    this.monetization.subscriptions.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'GET', params);
    this.monetization.subscriptions.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchGet', 'GET', params);
    this.monetization.subscriptions.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'GET', params);
    this.monetization.subscriptions.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'POST', params);
    this.monetization.subscriptions.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'PATCH', params);
    this.monetization.subscriptions.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate', 'POST', params);
    this.monetization.subscriptions.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'DELETE', params);
    this.monetization.subscriptions.archive = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive', 'POST', params);

    this.monetization.subscriptions.basePlans = {};
    this.monetization.subscriptions.basePlans.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}', 'DELETE', params);
    this.monetization.subscriptions.basePlans.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate', 'POST', params);
    this.monetization.subscriptions.basePlans.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate', 'POST', params);
    this.monetization.subscriptions.basePlans.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates', 'POST', params);
    this.monetization.subscriptions.basePlans.migratePrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices', 'POST', params);
    this.monetization.subscriptions.basePlans.batchMigratePrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices', 'POST', params);

    this.monetization.subscriptions.basePlans.offers = {};
    this.monetization.subscriptions.basePlans.offers.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'GET', params);
    this.monetization.subscriptions.basePlans.offers.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'GET', params);
    this.monetization.subscriptions.basePlans.offers.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'PATCH', params);
    this.monetization.subscriptions.basePlans.offers.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates', 'POST', params);
    this.monetization.subscriptions.basePlans.offers.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'DELETE', params);

    this.reviews = {};
    this.reviews.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}', 'GET', params);
    this.reviews.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews', 'GET', params);
    this.reviews.reply = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply', 'POST', params);

    this.systemapks = {};

    this.systemapks.variants = {};
    this.systemapks.variants.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'POST', params);
    this.systemapks.variants.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'GET', params);
    this.systemapks.variants.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}', 'GET', params);
    this.systemapks.variants.download = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download', 'GET', params);
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
