
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

    /**
     * Grant access for a user to the given developer account.
     * @param {string} params.parent - (Required) Required. The developer account to add the user to. Format: developers/{developer}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.create = (params) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'POST', params);

    /**
     * Lists all users with access to a developer account.
     * @param {integer} params.pageSize - The maximum number of results to return. This must be set to -1 to disable pagination.
     * @param {string} params.pageToken - A token received from a previous call to this method, in order to retrieve further results.
     * @param {string} params.parent - (Required) Required. The developer account to fetch users from. Format: developers/{developer}
     * @return {object} The API response object.
     */
    this.users.list = (params) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'GET', params);

    /**
     * Updates access for the user to the developer account.
     * @param {string} params.name - (Required) Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.patch = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', params);

    /**
     * Removes all access for the user to the given developer account.
     * @param {string} params.name - (Required) Required. The name of the user to delete. Format: developers/{developer}/users/{email}
     * @return {object} The API response object.
     */
    this.users.delete = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', params);

    this.grants = {};

    /**
     * Grant access for a user to the given package.
     * @param {string} params.parent - (Required) Required. The user which needs permission. Format: developers/{developer}/users/{user}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.grants.create = (params) => this._makeRequest('androidpublisher/v3/{+parent}/grants', 'POST', params);

    /**
     * Updates access for the user to the given package.
     * @param {string} params.name - (Required) Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.grants.patch = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', params);

    /**
     * Removes all access for the user to the given package or developer account.
     * @param {string} params.name - (Required) Required. The name of the grant to delete. Format: developers/{developer}/users/{email}/grants/{package_name}
     * @return {object} The API response object.
     */
    this.grants.delete = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', params);

    this.apprecovery = {};

    /**
     * Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.
     * @param {string} params.packageName - (Required) Required. Package name of the app on which recovery action is performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apprecovery.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'POST', params);

    /**
     * Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.
     * @param {string} params.appRecoveryId - (Required) Required. ID corresponding to the app recovery action to deploy.
     * @param {string} params.packageName - (Required) Required. Package name of the app for which recovery action is deployed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apprecovery.deploy = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy', 'POST', params);

    /**
     * List all app recovery action resources associated with a particular package name and app version.
     * @param {string} params.packageName - (Required) Required. Package name of the app for which list of recovery actions is requested.
     * @param {string} params.versionCode - Required. Version code targeted by the list of recovery actions.
     * @return {object} The API response object.
     */
    this.apprecovery.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'GET', params);

    /**
     * Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.
     * @param {string} params.appRecoveryId - (Required) Required. ID corresponding to the app recovery action.
     * @param {string} params.packageName - (Required) Required. Package name of the app for which recovery action is to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apprecovery.addTargeting = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting', 'POST', params);

    /**
     * Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.
     * @param {string} params.appRecoveryId - (Required) Required. ID corresponding to the app recovery action.
     * @param {string} params.packageName - (Required) Required. Package name of the app for which recovery action cancellation is requested.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apprecovery.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel', 'POST', params);

    this.purchases = {};

    this.purchases.productsv2 = {};

    /**
     * Checks the purchase and consumption status of an inapp item.
     * @param {string} params.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @return {object} The API response object.
     */
    this.purchases.productsv2.getproductpurchasev2 = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}', 'GET', params);

    this.purchases.products = {};

    /**
     * Checks the purchase and consumption status of an inapp item.
     * @param {string} params.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @return {object} The API response object.
     */
    this.purchases.products.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}', 'GET', params);

    /**
     * Acknowledges a purchase of an inapp item.
     * @param {string} params.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.purchases.products.acknowledge = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge', 'POST', params);

    /**
     * Consumes a purchase for an inapp item.
     * @param {string} params.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} params.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} params.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @return {object} The API response object.
     */
    this.purchases.products.consume = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume', 'POST', params);

    this.purchases.subscriptions = {};

    /**
     * Deprecated: Use purchases.subscriptionsv2.get instead. Checks whether a user's subscription purchase is valid and returns its expiry time.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}', 'GET', params);

    /**
     * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel', 'POST', params);

    /**
     * Defers a user's subscription purchase until a specified future expiration time.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.defer = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer', 'POST', params);

    /**
     * Deprecated: Use orders.refund instead. Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) "The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.refund = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund', 'POST', params);

    /**
     * Deprecated: Use purchases.subscriptionsv2.revoke instead. Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.revoke = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke', 'POST', params);

    /**
     * Acknowledges a subscription purchase.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.subscriptionId - (Required) Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001').
     * @param {string} params.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.purchases.subscriptions.acknowledge = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge', 'POST', params);

    this.purchases.subscriptionsv2 = {};

    /**
     * Get metadata about a subscription
     * @param {string} params.packageName - (Required) The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.token - (Required) Required. The token provided to the user's device when the subscription was purchased.
     * @return {object} The API response object.
     */
    this.purchases.subscriptionsv2.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}', 'GET', params);

    /**
     * Revoke a subscription purchase for the user.
     * @param {string} params.packageName - (Required) Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} params.token - (Required) Required. The token provided to the user's device when the subscription was purchased.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.purchases.subscriptionsv2.revoke = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke', 'POST', params);

    this.purchases.voidedpurchases = {};

    /**
     * Lists the purchases that were canceled, refunded or charged-back.
     * @param {string} params.endTime - The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {boolean} params.includeQuantityBasedPartialRefund - Optional. Whether to include voided purchases of quantity-based partial refunds, which are applicable only to multi-quantity purchases. If true, additional voided purchases may be returned with voidedQuantity that indicates the refund quantity of a quantity-based partial refund. The default value is false.
     * @param {integer} params.maxResults - Defines how many results the list operation should return. The default number depends on the resource collection.
     * @param {string} params.packageName - (Required) The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     * @param {integer} params.startIndex - Defines the index of the first element to return. This can only be used if indexed paging is enabled.
     * @param {string} params.startTime - The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {string} params.token - Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     * @param {integer} params.type - The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     * @return {object} The API response object.
     */
    this.purchases.voidedpurchases.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases', 'GET', params);

    this.edits = {};

    /**
     * Creates a new edit for an app.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.insert = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits', 'POST', params);

    /**
     * Gets an app edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'GET', params);

    /**
     * Deletes an app edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'DELETE', params);

    /**
     * Commits an app edit.
     * @param {boolean} params.changesNotSentForReview - When a rejection happens, the parameter will make sure that the changes in this edit won't be reviewed until they are explicitly sent for review from within the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.commit = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:commit', 'POST', params);

    /**
     * Validates an app edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.validate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:validate', 'POST', params);

    this.edits.apks = {};

    /**
     * Uploads an APK and adds to the current edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.apks.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'POST', params);

    /**
     * Lists all current APKs of the app and edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.apks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'GET', params);

    /**
     * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.apks.addexternallyhosted = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted', 'POST', params);

    this.edits.bundles = {};

    /**
     * Lists all current Android App Bundles of the app and edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.bundles.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'GET', params);

    /**
     * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {boolean} params.ackBundleInstallationWarning - Deprecated. The installation warning has been removed, it's not necessary to set this field anymore.
     * @param {string} params.deviceTierConfigId - Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.bundles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'POST', params);

    this.edits.countryavailability = {};

    /**
     * Gets country availability.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) The track to read from.
     * @return {object} The API response object.
     */
    this.edits.countryavailability.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}', 'GET', params);

    this.edits.deobfuscationfiles = {};

    /**
     * Uploads a new deobfuscation file and attaches to the specified APK.
     * @param {integer} params.apkVersionCode - (Required) The version code of the APK whose Deobfuscation File is being uploaded.
     * @param {string} params.deobfuscationFileType - (Required) The type of the deobfuscation file.
     * @param {string} params.editId - (Required) Unique identifier for this edit.
     * @param {string} params.packageName - (Required) Unique identifier for the Android app.
     * @return {object} The API response object.
     */
    this.edits.deobfuscationfiles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}', 'POST', params);

    this.edits.details = {};

    /**
     * Gets details of an app.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.details.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'GET', params);

    /**
     * Updates details of an app.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.details.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PUT', params);

    /**
     * Patches details of an app.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.details.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PATCH', params);

    this.edits.expansionfiles = {};

    /**
     * Fetches the expansion file configuration for the specified APK.
     * @param {integer} params.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.expansionFileType - (Required) The file type of the file configuration which is being read or modified.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.expansionfiles.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'GET', params);

    /**
     * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @param {integer} params.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.expansionFileType - (Required) The file type of the file configuration which is being read or modified.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.expansionfiles.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PUT', params);

    /**
     * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @param {integer} params.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.expansionFileType - (Required) The file type of the expansion file configuration which is being updated.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.expansionfiles.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PATCH', params);

    /**
     * Uploads a new expansion file and attaches to the specified APK.
     * @param {integer} params.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.expansionFileType - (Required) The file type of the expansion file configuration which is being updated.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.expansionfiles.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'POST', params);

    this.edits.images = {};

    /**
     * Lists all images. The response may be empty.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.imageType - (Required) Type of the Image. Providing an image type that refers to no images will return an empty response.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.images.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'GET', params);

    /**
     * Deletes the image (specified by id) from the edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.imageId - (Required) Unique identifier an image within the set of images attached to this edit.
     * @param {string} params.imageType - (Required) Type of the Image.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.images.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}', 'DELETE', params);

    /**
     * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.imageType - (Required) Type of the Image. Providing an image type that refers to no images is a no-op.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.images.deleteall = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'DELETE', params);

    /**
     * Uploads an image of the specified language and image type, and adds to the edit.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.imageType - (Required) Type of the Image.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.images.upload = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'POST', params);

    this.edits.listings = {};

    /**
     * Creates or updates a localized store listing.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.listings.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PUT', params);

    /**
     * Patches a localized store listing.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.listings.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PATCH', params);

    /**
     * Gets a localized store listing.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.listings.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'GET', params);

    /**
     * Lists all localized store listings.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.listings.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'GET', params);

    /**
     * Deletes a localized store listing.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.listings.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'DELETE', params);

    /**
     * Deletes all store listings.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.listings.deleteall = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'DELETE', params);

    this.edits.testers = {};

    /**
     * Gets testers. Note: Testers resource does not support email lists.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) The track to read from.
     * @return {object} The API response object.
     */
    this.edits.testers.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'GET', params);

    /**
     * Updates testers. Note: Testers resource does not support email lists.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) The track to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.testers.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PUT', params);

    /**
     * Patches testers. Note: Testers resource does not support email lists.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) The track to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.testers.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PATCH', params);

    this.edits.tracks = {};

    /**
     * Gets a track.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @return {object} The API response object.
     */
    this.edits.tracks.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'GET', params);

    /**
     * Lists all tracks.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.edits.tracks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'GET', params);

    /**
     * Updates a track.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.tracks.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PUT', params);

    /**
     * Patches a track.
     * @param {string} params.editId - (Required) Identifier of the edit.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.tracks.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PATCH', params);

    /**
     * Creates a new track.
     * @param {string} params.editId - (Required) Required. Identifier of the edit.
     * @param {string} params.packageName - (Required) Required. Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.edits.tracks.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'POST', params);

    this.externaltransactions = {};

    /**
     * Creates a new external transaction.
     * @param {string} params.externalTransactionId - Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-zA-Z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked.
     * @param {string} params.parent - (Required) Required. The parent resource where this external transaction will be created. Format: applications/{package_name}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.externaltransactions.createexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+parent}/externalTransactions', 'POST', params);

    /**
     * Refunds or partially refunds an existing external transaction.
     * @param {string} params.name - (Required) Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.externaltransactions.refundexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+name}:refund', 'POST', params);

    /**
     * Gets an existing external transaction.
     * @param {string} params.name - (Required) Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction}
     * @return {object} The API response object.
     */
    this.externaltransactions.getexternaltransaction = (params) => this._makeRequest('androidpublisher/v3/{+name}', 'GET', params);

    this.generatedapks = {};

    /**
     * Returns download metadata for all APKs that were generated from a given app bundle.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.versionCode - (Required) Version code of the app bundle.
     * @return {object} The API response object.
     */
    this.generatedapks.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}', 'GET', params);

    /**
     * Downloads a single signed APK generated from an app bundle.
     * @param {string} params.downloadId - (Required) Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.versionCode - (Required) Version code of the app bundle.
     * @return {object} The API response object.
     */
    this.generatedapks.download = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download', 'GET', params);

    this.inappproducts = {};

    /**
     * Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.sku - (Required) Unique identifier for the in-app product.
     * @return {object} The API response object.
     */
    this.inappproducts.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'GET', params);

    /**
     * Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.sku - Unique identifier for the in-app products.
     * @return {object} The API response object.
     */
    this.inappproducts.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchGet', 'GET', params);

    /**
     * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {integer} params.maxResults - Deprecated and ignored. The page size is determined by the server.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.startIndex - Deprecated and ignored. Set the `token` parameter to retrieve the next page.
     * @param {string} params.token - Pagination token. If empty, list starts at the first product.
     * @return {object} The API response object.
     */
    this.inappproducts.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'GET', params);

    /**
     * Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {boolean} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inappproducts.insert = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'POST', params);

    /**
     * Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {boolean} params.allowMissing - If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
     * @param {boolean} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.sku - (Required) Unique identifier for the in-app product.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inappproducts.update = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PUT', params);

    /**
     * Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inappproducts.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate', 'POST', params);

    /**
     * Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {boolean} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.sku - (Required) Unique identifier for the in-app product.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inappproducts.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PATCH', params);

    /**
     * Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.sku - (Required) Unique identifier for the in-app product.
     * @return {object} The API response object.
     */
    this.inappproducts.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'DELETE', params);

    /**
     * Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inappproducts.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete', 'POST', params);

    this.internalappsharingartifacts = {};

    /**
     * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.internalappsharingartifacts.uploadapk = (params) => this._makeRequest('androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk', 'POST', params);

    /**
     * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.internalappsharingartifacts.uploadbundle = (params) => this._makeRequest('androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle', 'POST', params);

    this.orders = {};

    /**
     * Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.
     * @param {string} params.orderId - (Required) The order ID provided to the user when the subscription or in-app order was purchased.
     * @param {string} params.packageName - (Required) The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @param {boolean} params.revoke - Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
     * @return {object} The API response object.
     */
    this.orders.refund = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund', 'POST', params);

    /**
     * Get order details for a single order.
     * @param {string} params.orderId - (Required) Required. The order ID provided to the user when the subscription or in-app order was purchased.
     * @param {string} params.packageName - (Required) Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @return {object} The API response object.
     */
    this.orders.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}', 'GET', params);

    /**
     * Get order details for a list of orders.
     * @param {string} params.orderIds - Required. The list of order IDs to retrieve order details for. There must be between 1 and 1000 (inclusive) order IDs per request. If any order ID is not found or does not match the provided package, the entire request will fail with an error. The order IDs must be distinct.
     * @param {string} params.packageName - (Required) Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @return {object} The API response object.
     */
    this.orders.batchget = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders:batchGet', 'GET', params);

    this.applications = {};

    /**
     * Writes the Safety Labels declaration of an app.
     * @param {string} params.packageName - (Required) Required. Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.applications.dataSafety = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/dataSafety', 'POST', params);

    this.applications.deviceTierConfigs = {};

    /**
     * Creates a new device tier config for an app.
     * @param {boolean} params.allowUnknownDevices - Whether the service should accept device IDs that are unknown to Play's device catalog.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.applications.deviceTierConfigs.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'POST', params);

    /**
     * Returns a particular device tier config.
     * @param {string} params.deviceTierConfigId - (Required) Required. Id of an existing device tier config.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @return {object} The API response object.
     */
    this.applications.deviceTierConfigs.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}', 'GET', params);

    /**
     * Returns created device tier configs, ordered by descending creation time.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.pageSize - The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
     * @param {string} params.pageToken - A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
     * @return {object} The API response object.
     */
    this.applications.deviceTierConfigs.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'GET', params);

    this.monetization = {};

    /**
     * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
     * @param {string} params.packageName - (Required) Required. The app package name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.convertRegionPrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices', 'POST', params);

    this.monetization.onetimeproducts = {};

    /**
     * Reads a single one-time product.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the product to retrieve.
     * @param {string} params.productId - (Required) Required. The product ID of the product to retrieve.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'GET', params);

    /**
     * Reads one or more one-time products.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the products should be retrieved. Must be equal to the package_name field on all requests.
     * @param {string} params.productIds - Required. A list of up to 100 product IDs to retrieve. All IDs must be different.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet', 'GET', params);

    /**
     * Lists all one-time products under a given app.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the one-time product should be read.
     * @param {integer} params.pageSize - Optional. The maximum number of one-time product to return. The service may return fewer than this value. If unspecified, at most 50 one-time products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListOneTimeProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOneTimeProducts` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts', 'GET', params);

    /**
     * Creates or updates a one-time product.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the one-time product with the given package_name and product_id doesn't exist, the one-time product will be created. If a new one-time product is created, update_mask is ignored.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product upsert. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Required. Immutable. Package name of the parent app.
     * @param {string} params.productId - (Required) Required. Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must start with a number or lowercase letter, and can contain numbers (0-9), lowercase letters (a-z), underscores (_), and periods (.).
     * @param {string} params.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}', 'PATCH', params);

    /**
     * Creates or updates one or more one-time products.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the one-time products should be updated. Must be equal to the package_name field on all the OneTimeProduct resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate', 'POST', params);

    /**
     * Deletes a one-time product.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the one-time product to delete.
     * @param {string} params.productId - (Required) Required. The one-time product ID of the one-time product to delete.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'DELETE', params);

    /**
     * Deletes one or more one-time products.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the one-time products should be deleted. Must be equal to the package_name field on all the OneTimeProduct resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete', 'POST', params);

    this.monetization.onetimeproducts.purchaseOptions = {};

    /**
     * Activates or deactivates purchase options across one or multiple one-time products.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated purchase options.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all updated purchase options belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates', 'POST', params);

    /**
     * Deletes purchase options across one or multiple one-time products. By default this operation will fail if there are any existing offers under the deleted purchase options. Use the force parameter to override the default behavior.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the purchase options to delete.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all purchase options to delete belong to the same one-time product. If this batch delete spans multiple one-time products, set this field to "-".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete', 'POST', params);

    this.monetization.onetimeproducts.purchaseOptions.offers = {};

    /**
     * Lists all offers under a given app, product, or purchase option.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the offers should be read.
     * @param {integer} params.pageSize - Optional. The maximum number of offers to return. The service may return fewer than this value. If unspecified, at most 50 offers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListOneTimeProductsOffers` call. Provide this to retrieve the subsequent page. When paginating, product_id, package_name and purchase_option_id provided to `ListOneTimeProductsOffersRequest` must match the call that provided the page token.
     * @param {string} params.productId - (Required) Required. The parent one-time product (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be read. May be specified as '-' to read all offers under a one-time product or an app. Must be specified as '-' if product_id is specified as '-'.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers', 'GET', params);

    /**
     * Reads one or more one-time product offers.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet', 'POST', params);

    /**
     * Creates or updates one or more one-time product offers.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate', 'POST', params);

    /**
     * Updates a batch of one-time product offer states.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated one-time product offers.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-".
     * @param {string} params.purchaseOptionId - (Required) Required. The purchase option ID of the parent purchase option, if all updated offers belong to the same purchase option. If this batch update spans multiple purchase options, set this field to "-".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates', 'POST', params);

    /**
     * Deletes one or more one-time product offers.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offers to delete. Must be equal to the package_name field on all the OneTimeProductOffer resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent one-time product, if all offers to delete belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be deleted. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchDelete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete', 'POST', params);

    /**
     * Activates a one-time product offer.
     * @param {string} params.offerId - (Required) Required. The offer ID of the offer to activate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to activate.
     * @param {string} params.productId - (Required) Required. The parent one-time product (ID) of the offer to activate.
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to activate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate', 'POST', params);

    /**
     * Cancels a one-time product offer.
     * @param {string} params.offerId - (Required) Required. The offer ID of the offer to cancel.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to cancel.
     * @param {string} params.productId - (Required) Required. The parent one-time product (ID) of the offer to cancel.
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to cancel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.cancel = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel', 'POST', params);

    /**
     * Deactivates a one-time product offer.
     * @param {string} params.offerId - (Required) Required. The offer ID of the offer to deactivate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to deactivate.
     * @param {string} params.productId - (Required) Required. The parent one-time product (ID) of the offer to deactivate.
     * @param {string} params.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to deactivate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate', 'POST', params);

    this.monetization.subscriptions = {};

    /**
     * Reads a single subscription.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the subscription to get.
     * @param {string} params.productId - (Required) Required. The unique product ID of the subscription to get.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'GET', params);

    /**
     * Reads one or more subscriptions.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests.
     * @param {string} params.productIds - Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchGet', 'GET', params);

    /**
     * Lists all subscriptions under a given app.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be read.
     * @param {integer} params.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     * @param {boolean} params.showArchived - Deprecated: subscription archiving is not supported.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'GET', params);

    /**
     * Creates a new subscription. Newly added base plans will remain in draft state until activated.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
     * @param {string} params.productId - Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
     * @param {string} params.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'POST', params);

    /**
     * Updates an existing subscription.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.packageName - (Required) Immutable. Package name of the parent app.
     * @param {string} params.productId - (Required) Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     * @param {string} params.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'PATCH', params);

    /**
     * Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate', 'POST', params);

    /**
     * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the app of the subscription to delete.
     * @param {string} params.productId - (Required) Required. The unique product ID of the subscription to delete.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'DELETE', params);

    /**
     * Deprecated: subscription archiving is not supported.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the app of the subscription to delete.
     * @param {string} params.productId - (Required) Required. The unique product ID of the subscription to delete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.archive = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive', 'POST', params);

    this.monetization.subscriptions.basePlans = {};

    /**
     * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
     * @param {string} params.basePlanId - (Required) Required. The unique offer ID of the base plan to delete.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the base plan to delete.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the base plan to delete.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}', 'DELETE', params);

    /**
     * Activates a base plan. Once activated, base plans will be available to new subscribers.
     * @param {string} params.basePlanId - (Required) Required. The unique base plan ID of the base plan to activate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the base plan to activate.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the base plan to activate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate', 'POST', params);

    /**
     * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
     * @param {string} params.basePlanId - (Required) Required. The unique base plan ID of the base plan to deactivate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the base plan to deactivate.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the base plan to deactivate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate', 'POST', params);

    /**
     * Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated base plans.
     * @param {string} params.productId - (Required) Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates', 'POST', params);

    /**
     * Migrates subscribers from one or more legacy price cohorts to the current price. Requests result in Google Play notifying affected subscribers. Only up to 250 simultaneous legacy price cohorts are supported.
     * @param {string} params.basePlanId - (Required) Required. The unique base plan ID of the base plan to update prices on.
     * @param {string} params.packageName - (Required) Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
     * @param {string} params.productId - (Required) Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.migratePrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices', 'POST', params);

    /**
     * Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.batchMigratePrices = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices', 'POST', params);

    this.monetization.subscriptions.basePlans.offers = {};

    /**
     * Reads a single offer
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) of the offer to get.
     * @param {string} params.offerId - (Required) Required. The unique offer ID of the offer to get.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to get.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the offer to get.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'GET', params);

    /**
     * Reads one or more subscription offers.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests.
     * @param {string} params.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.batchGet = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet', 'POST', params);

    /**
     * Lists all offers under a given subscription.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be read.
     * @param {integer} params.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'GET', params);

    /**
     * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
     * @param {string} params.offerId - Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
     * @param {string} params.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'POST', params);

    /**
     * Updates an existing subscription offer.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored.
     * @param {string} params.basePlanId - (Required) Required. Immutable. The ID of the base plan to which this offer is an extension.
     * @param {string} params.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} params.offerId - (Required) Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     * @param {string} params.packageName - (Required) Required. Immutable. The package name of the app the parent subscription belongs to.
     * @param {string} params.productId - (Required) Required. Immutable. The ID of the parent subscription this offer belongs to.
     * @param {string} params.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.patch = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'PATCH', params);

    /**
     * Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.batchUpdate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate', 'POST', params);

    /**
     * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) of the offer to activate.
     * @param {string} params.offerId - (Required) Required. The unique offer ID of the offer to activate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to activate.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the offer to activate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.activate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate', 'POST', params);

    /**
     * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) of the offer to deactivate.
     * @param {string} params.offerId - (Required) Required. The unique offer ID of the offer to deactivate.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to deactivate.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the offer to deactivate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.deactivate = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate', 'POST', params);

    /**
     * Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
     * @param {string} params.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.batchUpdateStates = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates', 'POST', params);

    /**
     * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
     * @param {string} params.basePlanId - (Required) Required. The parent base plan (ID) of the offer to delete.
     * @param {string} params.offerId - (Required) Required. The unique offer ID of the offer to delete.
     * @param {string} params.packageName - (Required) Required. The parent app (package name) of the offer to delete.
     * @param {string} params.productId - (Required) Required. The parent subscription (ID) of the offer to delete.
     * @return {object} The API response object.
     */
    this.monetization.subscriptions.basePlans.offers.delete = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'DELETE', params);

    this.reviews = {};

    /**
     * Gets a single review.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.reviewId - (Required) Unique identifier for a review.
     * @param {string} params.translationLanguage - Language localization code.
     * @return {object} The API response object.
     */
    this.reviews.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}', 'GET', params);

    /**
     * Lists all reviews.
     * @param {integer} params.maxResults - How many results the list operation should return.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.startIndex - The index of the first element to return.
     * @param {string} params.token - Pagination token. If empty, list starts at the first review.
     * @param {string} params.translationLanguage - Language localization code.
     * @return {object} The API response object.
     */
    this.reviews.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews', 'GET', params);

    /**
     * Replies to a single review, or updates an existing reply.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.reviewId - (Required) Unique identifier for a review.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reviews.reply = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply', 'POST', params);

    this.systemapks = {};

    this.systemapks.variants = {};

    /**
     * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.versionCode - (Required) The version code of the App Bundle.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.systemapks.variants.create = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'POST', params);

    /**
     * Returns the list of previously created system APK variants.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {string} params.versionCode - (Required) The version code of the App Bundle.
     * @return {object} The API response object.
     */
    this.systemapks.variants.list = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'GET', params);

    /**
     * Returns a previously created system APK variant.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.variantId - (Required) The ID of a previously created system APK variant.
     * @param {string} params.versionCode - (Required) The version code of the App Bundle.
     * @return {object} The API response object.
     */
    this.systemapks.variants.get = (params) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}', 'GET', params);

    /**
     * Downloads a previously created system APK which is suitable for inclusion in a system image.
     * @param {string} params.packageName - (Required) Package name of the app.
     * @param {integer} params.variantId - (Required) The ID of a previously created system APK variant.
     * @param {string} params.versionCode - (Required) The version code of the App Bundle.
     * @return {object} The API response object.
     */
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
