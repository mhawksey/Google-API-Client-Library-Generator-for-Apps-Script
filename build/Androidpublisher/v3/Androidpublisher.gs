
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


    this.users = {};

    /**
     * Grant access for a user to the given developer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The developer account to add the user to. Format: developers/{developer}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'POST', apiParams, clientConfig);

    /**
     * Lists all users with access to a developer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. This must be set to -1 to disable pagination.
     * @param {string} apiParams.pageToken - A token received from a previous call to this method, in order to retrieve further results.
     * @param {string} apiParams.parent - (Required) Required. The developer account to fetch users from. Format: developers/{developer}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/users', 'GET', apiParams, clientConfig);

    /**
     * Updates access for the user to the developer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Removes all access for the user to the given developer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the user to delete. Format: developers/{developer}/users/{email}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.grants = {};

    /**
     * Grant access for a user to the given package.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The user which needs permission. Format: developers/{developer}/users/{user}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/grants', 'POST', apiParams, clientConfig);

    /**
     * Updates access for the user to the given package.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Removes all access for the user to the given package or developer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the grant to delete. Format: developers/{developer}/users/{email}/grants/{package_name}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.apprecovery = {};

    /**
     * Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app on which recovery action is performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apprecovery.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'POST', apiParams, clientConfig);

    /**
     * Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appRecoveryId - (Required) Required. ID corresponding to the app recovery action to deploy.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app for which recovery action is deployed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apprecovery.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy', 'POST', apiParams, clientConfig);

    /**
     * List all app recovery action resources associated with a particular package name and app version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app for which list of recovery actions is requested.
     * @param {string} apiParams.versionCode - Required. Version code targeted by the list of recovery actions.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apprecovery.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries', 'GET', apiParams, clientConfig);

    /**
     * Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appRecoveryId - (Required) Required. ID corresponding to the app recovery action.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app for which recovery action is to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apprecovery.addTargeting = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting', 'POST', apiParams, clientConfig);

    /**
     * Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appRecoveryId - (Required) Required. ID corresponding to the app recovery action.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app for which recovery action cancellation is requested.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apprecovery.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel', 'POST', apiParams, clientConfig);

    this.purchases = {};

    this.purchases.productsv2 = {};

    /**
     * Checks the purchase and consumption status of an inapp item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.productsv2.getproductpurchasev2 = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}', 'GET', apiParams, clientConfig);

    this.purchases.products = {};

    /**
     * Checks the purchase and consumption status of an inapp item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} apiParams.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}', 'GET', apiParams, clientConfig);

    /**
     * Acknowledges a purchase of an inapp item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} apiParams.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.products.acknowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge', 'POST', apiParams, clientConfig);

    /**
     * Consumes a purchase for an inapp item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application the inapp product was sold in (for example, 'com.some.thing').
     * @param {string} apiParams.productId - (Required) The inapp product SKU (for example, 'com.some.thing.inapp1').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the inapp product was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.products.consume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume', 'POST', apiParams, clientConfig);

    this.purchases.subscriptions = {};

    /**
     * Deprecated: Use purchases.subscriptionsv2.get instead. Checks whether a user's subscription purchase is valid and returns its expiry time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}', 'GET', apiParams, clientConfig);

    /**
     * Cancels a user's subscription purchase. The subscription remains valid until its expiration time. Newer version is available at purchases.subscriptionsv2.cancel for better client library support.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Defers a user's subscription purchase until a specified future expiration time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.defer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer', 'POST', apiParams, clientConfig);

    /**
     * Deprecated: Use orders.refund instead. Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) "The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.refund = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund', 'POST', apiParams, clientConfig);

    /**
     * Deprecated: Use purchases.subscriptionsv2.revoke instead. Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke', 'POST', apiParams, clientConfig);

    /**
     * Acknowledges a subscription purchase.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.subscriptionId - (Required) Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001').
     * @param {string} apiParams.token - (Required) The token provided to the user's device when the subscription was purchased.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptions.acknowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge', 'POST', apiParams, clientConfig);

    this.purchases.subscriptionsv2 = {};

    /**
     * Get metadata about a subscription
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.token - (Required) Required. The token provided to the user's device when the subscription was purchased.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptionsv2.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}', 'GET', apiParams, clientConfig);

    /**
     * Revoke a subscription purchase for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.token - (Required) Required. The token provided to the user's device when the subscription was purchased.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptionsv2.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke', 'POST', apiParams, clientConfig);

    /**
     * Cancel a subscription purchase for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing').
     * @param {string} apiParams.token - (Required) Required. The token provided to the user's device when the subscription was purchased.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.subscriptionsv2.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:cancel', 'POST', apiParams, clientConfig);

    this.purchases.voidedpurchases = {};

    /**
     * Lists the purchases that were canceled, refunded or charged-back.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.endTime - The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {boolean} apiParams.includeQuantityBasedPartialRefund - Optional. Whether to include voided purchases of quantity-based partial refunds, which are applicable only to multi-quantity purchases. If true, additional voided purchases may be returned with voidedQuantity that indicates the refund quantity of a quantity-based partial refund. The default value is false.
     * @param {integer} apiParams.maxResults - Defines how many results the list operation should return. The default number depends on the resource collection.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
     * @param {integer} apiParams.startIndex - Defines the index of the first element to return. This can only be used if indexed paging is enabled.
     * @param {string} apiParams.startTime - The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
     * @param {string} apiParams.token - Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     * @param {integer} apiParams.type - The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.purchases.voidedpurchases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases', 'GET', apiParams, clientConfig);

    this.edits = {};

    /**
     * Creates a new edit for an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits', 'POST', apiParams, clientConfig);

    /**
     * Gets an app edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'GET', apiParams, clientConfig);

    /**
     * Deletes an app edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}', 'DELETE', apiParams, clientConfig);

    /**
     * Commits an app edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.changesNotSentForReview - When a rejection happens, the parameter will make sure that the changes in this edit won't be reviewed until they are explicitly sent for review from within the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:commit', 'POST', apiParams, clientConfig);

    /**
     * Validates an app edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}:validate', 'POST', apiParams, clientConfig);

    this.edits.apks = {};

    /**
     * Uploads an APK and adds to the current edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.apks.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Lists all current APKs of the app and edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.apks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks', 'GET', apiParams, clientConfig);

    /**
     * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.apks.addexternallyhosted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted', 'POST', apiParams, clientConfig);

    this.edits.bundles = {};

    /**
     * Lists all current Android App Bundles of the app and edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.bundles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles', 'GET', apiParams, clientConfig);

    /**
     * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.ackBundleInstallationWarning - Deprecated. The installation warning has been removed, it's not necessary to set this field anymore.
     * @param {string} apiParams.deviceTierConfigId - Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.bundles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.edits.countryavailability = {};

    /**
     * Gets country availability.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) The track to read from.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.countryavailability.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}', 'GET', apiParams, clientConfig);

    this.edits.deobfuscationfiles = {};

    /**
     * Uploads a new deobfuscation file and attaches to the specified APK.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.apkVersionCode - (Required) The version code of the APK whose Deobfuscation File is being uploaded.
     * @param {string} apiParams.deobfuscationFileType - (Required) The type of the deobfuscation file.
     * @param {string} apiParams.editId - (Required) Unique identifier for this edit.
     * @param {string} apiParams.packageName - (Required) Unique identifier for the Android app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.deobfuscationfiles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.edits.details = {};

    /**
     * Gets details of an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.details.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'GET', apiParams, clientConfig);

    /**
     * Updates details of an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.details.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PUT', apiParams, clientConfig);

    /**
     * Patches details of an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.details.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/details', 'PATCH', apiParams, clientConfig);

    this.edits.expansionfiles = {};

    /**
     * Fetches the expansion file configuration for the specified APK.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.expansionFileType - (Required) The file type of the file configuration which is being read or modified.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.expansionfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'GET', apiParams, clientConfig);

    /**
     * Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.expansionFileType - (Required) The file type of the file configuration which is being read or modified.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.expansionfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PUT', apiParams, clientConfig);

    /**
     * Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.expansionFileType - (Required) The file type of the expansion file configuration which is being updated.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.expansionfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}', 'PATCH', apiParams, clientConfig);

    /**
     * Uploads a new expansion file and attaches to the specified APK.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.apkVersionCode - (Required) The version code of the APK whose expansion file configuration is being read or modified.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.expansionFileType - (Required) The file type of the expansion file configuration which is being updated.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.expansionfiles.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.edits.images = {};

    /**
     * Lists all images. The response may be empty.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.imageType - (Required) Type of the Image. Providing an image type that refers to no images will return an empty response.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.images.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'GET', apiParams, clientConfig);

    /**
     * Deletes the image (specified by id) from the edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.imageId - (Required) Unique identifier an image within the set of images attached to this edit.
     * @param {string} apiParams.imageType - (Required) Type of the Image.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.images.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes all images for the specified language and image type. Returns an empty response if no images are found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.imageType - (Required) Type of the Image. Providing an image type that refers to no images is a no-op.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.images.deleteall = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}', 'DELETE', apiParams, clientConfig);

    /**
     * Uploads an image of the specified language and image type, and adds to the edit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.imageType - (Required) Type of the Image.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.images.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}' : 'androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.edits.listings = {};

    /**
     * Creates or updates a localized store listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a localized store listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets a localized store listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'GET', apiParams, clientConfig);

    /**
     * Lists all localized store listings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'GET', apiParams, clientConfig);

    /**
     * Deletes a localized store listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.language - (Required) Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes all store listings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.listings.deleteall = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/listings', 'DELETE', apiParams, clientConfig);

    this.edits.testers = {};

    /**
     * Gets testers. Note: Testers resource does not support email lists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) The track to read from.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.testers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'GET', apiParams, clientConfig);

    /**
     * Updates testers. Note: Testers resource does not support email lists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) The track to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.testers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PUT', apiParams, clientConfig);

    /**
     * Patches testers. Note: Testers resource does not support email lists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) The track to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.testers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}', 'PATCH', apiParams, clientConfig);

    this.edits.tracks = {};

    /**
     * Gets a track.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.tracks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'GET', apiParams, clientConfig);

    /**
     * Lists all tracks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.tracks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'GET', apiParams, clientConfig);

    /**
     * Updates a track.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.tracks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a track.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.track - (Required) Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.tracks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a new track.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.editId - (Required) Required. Identifier of the edit.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.edits.tracks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks', 'POST', apiParams, clientConfig);

    this.externaltransactions = {};

    /**
     * Creates a new external transaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalTransactionId - Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-zA-Z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this external transaction will be created. Format: applications/{package_name}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.externaltransactions.createexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+parent}/externalTransactions', 'POST', apiParams, clientConfig);

    /**
     * Refunds or partially refunds an existing external transaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.externaltransactions.refundexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}:refund', 'POST', apiParams, clientConfig);

    /**
     * Gets an existing external transaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.externaltransactions.getexternaltransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/{+name}', 'GET', apiParams, clientConfig);

    this.generatedapks = {};

    /**
     * Returns download metadata for all APKs that were generated from a given app bundle.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.versionCode - (Required) Version code of the app bundle.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.generatedapks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}', 'GET', apiParams, clientConfig);

    /**
     * Downloads a single signed APK generated from an app bundle.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.downloadId - (Required) Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.versionCode - (Required) Version code of the app bundle.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.generatedapks.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download', 'GET', apiParams, clientConfig);

    this.inappproducts = {};

    /**
     * Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.sku - (Required) Unique identifier for the in-app product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'GET', apiParams, clientConfig);

    /**
     * Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.sku - Unique identifier for the in-app products.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Deprecated and ignored. The page size is determined by the server.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.startIndex - Deprecated and ignored. Set the `token` parameter to retrieve the next page.
     * @param {string} apiParams.token - Pagination token. If empty, list starts at the first product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'GET', apiParams, clientConfig);

    /**
     * Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts', 'POST', apiParams, clientConfig);

    /**
     * Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.
     * @param {boolean} apiParams.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.sku - (Required) Unique identifier for the in-app product.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PUT', apiParams, clientConfig);

    /**
     * Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.sku - (Required) Unique identifier for the in-app product.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.sku - (Required) Unique identifier for the in-app product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts/{sku}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inappproducts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete', 'POST', apiParams, clientConfig);

    this.internalappsharingartifacts = {};

    /**
     * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.internalappsharingartifacts.uploadapk = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk' : 'androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.internalappsharingartifacts.uploadbundle = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle' : 'androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.orders = {};

    /**
     * Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderId - (Required) The order ID provided to the user when the subscription or in-app order was purchased.
     * @param {string} apiParams.packageName - (Required) The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @param {boolean} apiParams.revoke - Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orders.refund = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund', 'POST', apiParams, clientConfig);

    /**
     * Get order details for a single order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderId - (Required) Required. The order ID provided to the user when the subscription or in-app order was purchased.
     * @param {string} apiParams.packageName - (Required) Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders/{orderId}', 'GET', apiParams, clientConfig);

    /**
     * Get order details for a list of orders.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderIds - Required. The list of order IDs to retrieve order details for. There must be between 1 and 1000 (inclusive) order IDs per request. If any order ID is not found or does not match the provided package, the entire request will fail with an error. The order IDs must be distinct.
     * @param {string} apiParams.packageName - (Required) Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orders.batchget = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/orders:batchGet', 'GET', apiParams, clientConfig);

    this.applications = {};

    /**
     * Writes the Safety Labels declaration of an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.dataSafety = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/dataSafety', 'POST', apiParams, clientConfig);

    this.applications.deviceTierConfigs = {};

    /**
     * Creates a new device tier config for an app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowUnknownDevices - Whether the service should accept device IDs that are unknown to Play's device catalog.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.deviceTierConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'POST', apiParams, clientConfig);

    /**
     * Returns a particular device tier config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceTierConfigId - (Required) Required. Id of an existing device tier config.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.deviceTierConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}', 'GET', apiParams, clientConfig);

    /**
     * Returns created device tier configs, ordered by descending creation time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.pageSize - The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.applications.deviceTierConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/deviceTierConfigs', 'GET', apiParams, clientConfig);

    this.monetization = {};

    /**
     * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The app package name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.convertRegionPrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices', 'POST', apiParams, clientConfig);

    this.monetization.onetimeproducts = {};

    /**
     * Reads a single one-time product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the product to retrieve.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the product to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Reads one or more one-time products.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the products should be retrieved. Must be equal to the package_name field on all requests.
     * @param {string} apiParams.productIds - Required. A list of up to 100 product IDs to retrieve. All IDs must be different.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Lists all one-time products under a given app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the one-time product should be read.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of one-time product to return. The service may return fewer than this value. If unspecified, at most 50 one-time products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListOneTimeProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOneTimeProducts` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts', 'GET', apiParams, clientConfig);

    /**
     * Creates or updates a one-time product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If set to true, and the one-time product with the given package_name and product_id doesn't exist, the one-time product will be created. If a new one-time product is created, update_mask is ignored.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product upsert. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Required. Immutable. Package name of the parent app.
     * @param {string} apiParams.productId - (Required) Required. Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must start with a number or lowercase letter, and can contain numbers (0-9), lowercase letters (a-z), underscores (_), and periods (.).
     * @param {string} apiParams.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates or updates one or more one-time products.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the one-time products should be updated. Must be equal to the package_name field on all the OneTimeProduct resources.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes a one-time product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the one-time product to delete.
     * @param {string} apiParams.productId - (Required) Required. The one-time product ID of the one-time product to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes one or more one-time products.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the one-time products should be deleted. Must be equal to the package_name field on all the OneTimeProduct resources.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete', 'POST', apiParams, clientConfig);

    this.monetization.onetimeproducts.purchaseOptions = {};

    /**
     * Activates or deactivates purchase options across one or multiple one-time products.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated purchase options.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all updated purchase options belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates', 'POST', apiParams, clientConfig);

    /**
     * Deletes purchase options across one or multiple one-time products. By default this operation will fail if there are any existing offers under the deleted purchase options. Use the force parameter to override the default behavior.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the purchase options to delete.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all purchase options to delete belong to the same one-time product. If this batch delete spans multiple one-time products, set this field to "-".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete', 'POST', apiParams, clientConfig);

    this.monetization.onetimeproducts.purchaseOptions.offers = {};

    /**
     * Lists all offers under a given app, product, or purchase option.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the offers should be read.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of offers to return. The service may return fewer than this value. If unspecified, at most 50 offers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListOneTimeProductsOffers` call. Provide this to retrieve the subsequent page. When paginating, product_id, package_name and purchase_option_id provided to `ListOneTimeProductsOffersRequest` must match the call that provided the page token.
     * @param {string} apiParams.productId - (Required) Required. The parent one-time product (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be read. May be specified as '-' to read all offers under a one-time product or an app. Must be specified as '-' if product_id is specified as '-'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers', 'GET', apiParams, clientConfig);

    /**
     * Reads one or more one-time product offers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet', 'POST', apiParams, clientConfig);

    /**
     * Creates or updates one or more one-time product offers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Updates a batch of one-time product offer states.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated one-time product offers.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all updated offers belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-".
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The purchase option ID of the parent purchase option, if all updated offers belong to the same purchase option. If this batch update spans multiple purchase options, set this field to "-".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates', 'POST', apiParams, clientConfig);

    /**
     * Deletes one or more one-time product offers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offers to delete. Must be equal to the package_name field on all the OneTimeProductOffer resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent one-time product, if all offers to delete belong to the same product. If this request spans multiple one-time products, set this field to "-".
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) for which the offers should be deleted. May be specified as '-' to update offers from multiple purchase options.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Activates a one-time product offer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.offerId - (Required) Required. The offer ID of the offer to activate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to activate.
     * @param {string} apiParams.productId - (Required) Required. The parent one-time product (ID) of the offer to activate.
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to activate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate', 'POST', apiParams, clientConfig);

    /**
     * Cancels a one-time product offer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.offerId - (Required) Required. The offer ID of the offer to cancel.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to cancel.
     * @param {string} apiParams.productId - (Required) Required. The parent one-time product (ID) of the offer to cancel.
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to cancel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Deactivates a one-time product offer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.offerId - (Required) Required. The offer ID of the offer to deactivate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to deactivate.
     * @param {string} apiParams.productId - (Required) Required. The parent one-time product (ID) of the offer to deactivate.
     * @param {string} apiParams.purchaseOptionId - (Required) Required. The parent purchase option (ID) of the offer to deactivate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.onetimeproducts.purchaseOptions.offers.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions = {};

    /**
     * Reads a single subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the subscription to get.
     * @param {string} apiParams.productId - (Required) Required. The unique product ID of the subscription to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Reads one or more subscriptions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests.
     * @param {string} apiParams.productIds - Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Lists all subscriptions under a given app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be read.
     * @param {integer} apiParams.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     * @param {boolean} apiParams.showArchived - Deprecated: subscription archiving is not supported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'GET', apiParams, clientConfig);

    /**
     * Creates a new subscription. Newly added base plans will remain in draft state until activated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.
     * @param {string} apiParams.productId - Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.
     * @param {string} apiParams.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.packageName - (Required) Immutable. Package name of the parent app.
     * @param {string} apiParams.productId - (Required) Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     * @param {string} apiParams.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the app of the subscription to delete.
     * @param {string} apiParams.productId - (Required) Required. The unique product ID of the subscription to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}', 'DELETE', apiParams, clientConfig);

    /**
     * Deprecated: subscription archiving is not supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the app of the subscription to delete.
     * @param {string} apiParams.productId - (Required) Required. The unique product ID of the subscription to delete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions.basePlans = {};

    /**
     * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The unique offer ID of the base plan to delete.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the base plan to delete.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the base plan to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}', 'DELETE', apiParams, clientConfig);

    /**
     * Activates a base plan. Once activated, base plans will be available to new subscribers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The unique base plan ID of the base plan to activate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the base plan to activate.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the base plan to activate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate', 'POST', apiParams, clientConfig);

    /**
     * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The unique base plan ID of the base plan to deactivate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the base plan to deactivate.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the base plan to deactivate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate', 'POST', apiParams, clientConfig);

    /**
     * Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated base plans.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates', 'POST', apiParams, clientConfig);

    /**
     * Migrates subscribers from one or more legacy price cohorts to the current price. Requests result in Google Play notifying affected subscribers. Only up to 250 simultaneous legacy price cohorts are supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The unique base plan ID of the base plan to update prices on.
     * @param {string} apiParams.packageName - (Required) Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.
     * @param {string} apiParams.productId - (Required) Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.migratePrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices', 'POST', apiParams, clientConfig);

    /**
     * Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.batchMigratePrices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices', 'POST', apiParams, clientConfig);

    this.monetization.subscriptions.basePlans.offers = {};

    /**
     * Reads a single offer
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) of the offer to get.
     * @param {string} apiParams.offerId - (Required) Required. The unique offer ID of the offer to get.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to get.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the offer to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'GET', apiParams, clientConfig);

    /**
     * Reads one or more subscription offers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet', 'POST', apiParams, clientConfig);

    /**
     * Lists all offers under a given subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the subscriptions should be read.
     * @param {integer} apiParams.pageSize - The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'GET', apiParams, clientConfig);

    /**
     * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.
     * @param {string} apiParams.offerId - Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.
     * @param {string} apiParams.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing subscription offer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored.
     * @param {string} apiParams.basePlanId - (Required) Required. Immutable. The ID of the base plan to which this offer is an extension.
     * @param {string} apiParams.latencyTolerance - Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive.
     * @param {string} apiParams.offerId - (Required) Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     * @param {string} apiParams.packageName - (Required) Required. Immutable. The package name of the app the parent subscription belongs to.
     * @param {string} apiParams.productId - (Required) Required. Immutable. The ID of the parent subscription this offer belongs to.
     * @param {string} apiParams.regionsVersion.version - Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available.
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) of the offer to activate.
     * @param {string} apiParams.offerId - (Required) Required. The unique offer ID of the offer to activate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to activate.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the offer to activate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate', 'POST', apiParams, clientConfig);

    /**
     * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) of the offer to deactivate.
     * @param {string} apiParams.offerId - (Required) Required. The unique offer ID of the offer to deactivate.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to deactivate.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the offer to deactivate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.deactivate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate', 'POST', apiParams, clientConfig);

    /**
     * Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources.
     * @param {string} apiParams.productId - (Required) Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.batchUpdateStates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates', 'POST', apiParams, clientConfig);

    /**
     * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.basePlanId - (Required) Required. The parent base plan (ID) of the offer to delete.
     * @param {string} apiParams.offerId - (Required) Required. The unique offer ID of the offer to delete.
     * @param {string} apiParams.packageName - (Required) Required. The parent app (package name) of the offer to delete.
     * @param {string} apiParams.productId - (Required) Required. The parent subscription (ID) of the offer to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.monetization.subscriptions.basePlans.offers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}', 'DELETE', apiParams, clientConfig);

    this.reviews = {};

    /**
     * Gets a single review.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.reviewId - (Required) Unique identifier for a review.
     * @param {string} apiParams.translationLanguage - Language localization code.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reviews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}', 'GET', apiParams, clientConfig);

    /**
     * Lists all reviews.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - How many results the list operation should return.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.startIndex - The index of the first element to return.
     * @param {string} apiParams.token - Pagination token. If empty, list starts at the first review.
     * @param {string} apiParams.translationLanguage - Language localization code.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reviews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews', 'GET', apiParams, clientConfig);

    /**
     * Replies to a single review, or updates an existing reply.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.reviewId - (Required) Unique identifier for a review.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reviews.reply = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply', 'POST', apiParams, clientConfig);

    this.systemapks = {};

    this.systemapks.variants = {};

    /**
     * Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.versionCode - (Required) The version code of the App Bundle.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.systemapks.variants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of previously created system APK variants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {string} apiParams.versionCode - (Required) The version code of the App Bundle.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.systemapks.variants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants', 'GET', apiParams, clientConfig);

    /**
     * Returns a previously created system APK variant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.variantId - (Required) The ID of a previously created system APK variant.
     * @param {string} apiParams.versionCode - (Required) The version code of the App Bundle.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.systemapks.variants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}', 'GET', apiParams, clientConfig);

    /**
     * Downloads a previously created system APK which is suitable for inclusion in a system image.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.packageName - (Required) Package name of the app.
     * @param {integer} apiParams.variantId - (Required) The ID of a previously created system APK variant.
     * @param {string} apiParams.versionCode - (Required) The version code of the App Bundle.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.systemapks.variants.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download', 'GET', apiParams, clientConfig);
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
