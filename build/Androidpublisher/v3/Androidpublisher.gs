
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://androidpublisher.googleapis.com/';
    this._servicePath = '';


    this.inappproducts = {};
    this.inappproducts.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate', 'POST', apiParams, clientConfig);
    this.inappproducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'GET', apiParams, clientConfig);
    this.inappproducts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PATCH', apiParams, clientConfig);
    this.inappproducts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'POST', apiParams, clientConfig);
    this.inappproducts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchGet', 'GET', apiParams, clientConfig);
    this.inappproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'DELETE', apiParams, clientConfig);
    this.inappproducts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete', 'POST', apiParams, clientConfig);
    this.inappproducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'GET', apiParams, clientConfig);
    this.inappproducts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PUT', apiParams, clientConfig);

    this.orders = {};
    this.orders.batchget = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders:batchGet', 'GET', apiParams, clientConfig);
    this.orders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}', 'GET', apiParams, clientConfig);
    this.orders.refund = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund', 'POST', apiParams, clientConfig);

    this.grants = {};
    this.grants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/grants', 'POST', apiParams, clientConfig);
    this.grants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.grants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.internalappsharingartifacts = {};
    this.internalappsharingartifacts.uploadapk = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk' : 'androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.internalappsharingartifacts.uploadbundle = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle' : 'androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.reviews = {};
    this.reviews.reply = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply', 'POST', apiParams, clientConfig);
    this.reviews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews', 'GET', apiParams, clientConfig);
    this.reviews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}', 'GET', apiParams, clientConfig);

    this.edits = {};
    this.edits.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits', 'POST', apiParams, clientConfig);
    this.edits.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'DELETE', apiParams, clientConfig);
    this.edits.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:validate', 'POST', apiParams, clientConfig);
    this.edits.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:commit', 'POST', apiParams, clientConfig);
    this.edits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'GET', apiParams, clientConfig);

    this.edits.bundles = {};
    this.edits.bundles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.edits.bundles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'GET', apiParams, clientConfig);

    this.edits.listings = {};
    this.edits.listings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'GET', apiParams, clientConfig);
    this.edits.listings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'DELETE', apiParams, clientConfig);
    this.edits.listings.deleteall = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'DELETE', apiParams, clientConfig);
    this.edits.listings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'GET', apiParams, clientConfig);
    this.edits.listings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PATCH', apiParams, clientConfig);
    this.edits.listings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PUT', apiParams, clientConfig);

    this.edits.deobfuscationfiles = {};
    this.edits.deobfuscationfiles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.edits.tracks = {};
    this.edits.tracks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'GET', apiParams, clientConfig);
    this.edits.tracks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PATCH', apiParams, clientConfig);
    this.edits.tracks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'GET', apiParams, clientConfig);
    this.edits.tracks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'POST', apiParams, clientConfig);
    this.edits.tracks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PUT', apiParams, clientConfig);

    this.edits.countryavailability = {};
    this.edits.countryavailability.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}', 'GET', apiParams, clientConfig);

    this.edits.testers = {};
    this.edits.testers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PATCH', apiParams, clientConfig);
    this.edits.testers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'GET', apiParams, clientConfig);
    this.edits.testers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PUT', apiParams, clientConfig);

    this.edits.expansionfiles = {};
    this.edits.expansionfiles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.edits.expansionfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'GET', apiParams, clientConfig);
    this.edits.expansionfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PUT', apiParams, clientConfig);
    this.edits.expansionfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PATCH', apiParams, clientConfig);

    this.edits.details = {};
    this.edits.details.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'GET', apiParams, clientConfig);
    this.edits.details.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PUT', apiParams, clientConfig);
    this.edits.details.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PATCH', apiParams, clientConfig);

    this.edits.images = {};
    this.edits.images.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}', 'DELETE', apiParams, clientConfig);
    this.edits.images.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'GET', apiParams, clientConfig);
    this.edits.images.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.edits.images.deleteall = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'DELETE', apiParams, clientConfig);

    this.edits.apks = {};
    this.edits.apks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'GET', apiParams, clientConfig);
    this.edits.apks.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.edits.apks.addexternallyhosted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted', 'POST', apiParams, clientConfig);

    this.generatedapks = {};
    this.generatedapks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}', 'GET', apiParams, clientConfig);
    this.generatedapks.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download', 'GET', apiParams, clientConfig);

    this.systemapks = {};

    this.systemapks.variants = {};
    this.systemapks.variants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'POST', apiParams, clientConfig);
    this.systemapks.variants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}', 'GET', apiParams, clientConfig);
    this.systemapks.variants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'GET', apiParams, clientConfig);
    this.systemapks.variants.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download', 'GET', apiParams, clientConfig);

    this.applications = {};
    this.applications.dataSafety = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/dataSafety', 'POST', apiParams, clientConfig);

    this.applications.deviceTierConfigs = {};
    this.applications.deviceTierConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'GET', apiParams, clientConfig);
    this.applications.deviceTierConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'POST', apiParams, clientConfig);
    this.applications.deviceTierConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}', 'GET', apiParams, clientConfig);

    this.purchases = {};

    this.purchases.subscriptionsv2 = {};
    this.purchases.subscriptionsv2.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:cancel', 'POST', apiParams, clientConfig);
    this.purchases.subscriptionsv2.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke', 'POST', apiParams, clientConfig);
    this.purchases.subscriptionsv2.defer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:defer', 'POST', apiParams, clientConfig);
    this.purchases.subscriptionsv2.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}', 'GET', apiParams, clientConfig);

    this.purchases.products = {};
    this.purchases.products.consume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume', 'POST', apiParams, clientConfig);
    this.purchases.products.acknowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge', 'POST', apiParams, clientConfig);
    this.purchases.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}', 'GET', apiParams, clientConfig);

    this.purchases.productsv2 = {};
    this.purchases.productsv2.getproductpurchasev2 = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}', 'GET', apiParams, clientConfig);

    this.purchases.subscriptions = {};
    this.purchases.subscriptions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel', 'POST', apiParams, clientConfig);
    this.purchases.subscriptions.acknowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge', 'POST', apiParams, clientConfig);
    this.purchases.subscriptions.refund = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund', 'POST', apiParams, clientConfig);
    this.purchases.subscriptions.defer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer', 'POST', apiParams, clientConfig);
    this.purchases.subscriptions.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke', 'POST', apiParams, clientConfig);
    this.purchases.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}', 'GET', apiParams, clientConfig);

    this.purchases.voidedpurchases = {};
    this.purchases.voidedpurchases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases', 'GET', apiParams, clientConfig);

    this.monetization = {};
    this.monetization.convertRegionPrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions = {};
    this.monetization.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'DELETE', apiParams, clientConfig);
    this.monetization.subscriptions.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchGet', 'GET', apiParams, clientConfig);
    this.monetization.subscriptions.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'GET', apiParams, clientConfig);
    this.monetization.subscriptions.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'PATCH', apiParams, clientConfig);
    this.monetization.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'GET', apiParams, clientConfig);
    this.monetization.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions.basePlans = {};
    this.monetization.subscriptions.basePlans.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}', 'DELETE', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.migratePrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.batchMigratePrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions.basePlans.offers = {};
    this.monetization.subscriptions.basePlans.offers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'GET', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'DELETE', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet', 'POST', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'PATCH', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'GET', apiParams, clientConfig);
    this.monetization.subscriptions.basePlans.offers.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates', 'POST', apiParams, clientConfig);

    this.monetization.onetimeproducts = {};
    this.monetization.onetimeproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'DELETE', apiParams, clientConfig);
    this.monetization.onetimeproducts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts', 'GET', apiParams, clientConfig);
    this.monetization.onetimeproducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'GET', apiParams, clientConfig);
    this.monetization.onetimeproducts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet', 'GET', apiParams, clientConfig);
    this.monetization.onetimeproducts.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}', 'PATCH', apiParams, clientConfig);

    this.monetization.onetimeproducts.purchaseOptions = {};
    this.monetization.onetimeproducts.purchaseOptions.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete', 'POST', apiParams, clientConfig);

    this.monetization.onetimeproducts.purchaseOptions.offers = {};
    this.monetization.onetimeproducts.purchaseOptions.offers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers', 'GET', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel', 'POST', apiParams, clientConfig);
    this.monetization.onetimeproducts.purchaseOptions.offers.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet', 'POST', apiParams, clientConfig);

    this.apprecovery = {};
    this.apprecovery.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'GET', apiParams, clientConfig);
    this.apprecovery.addTargeting = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting', 'POST', apiParams, clientConfig);
    this.apprecovery.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy', 'POST', apiParams, clientConfig);
    this.apprecovery.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'POST', apiParams, clientConfig);
    this.apprecovery.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel', 'POST', apiParams, clientConfig);

    this.externaltransactions = {};
    this.externaltransactions.getexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'GET', apiParams, clientConfig);
    this.externaltransactions.createexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/externalTransactions', 'POST', apiParams, clientConfig);
    this.externaltransactions.refundexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}:refund', 'POST', apiParams, clientConfig);

    this.users = {};
    this.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'POST', apiParams, clientConfig);
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'GET', apiParams, clientConfig);
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', apiParams, clientConfig);
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
