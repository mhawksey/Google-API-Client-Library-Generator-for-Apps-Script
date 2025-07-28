
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

    /**
     * Returns information about the authenticated user.
     * @return {object} The API response object.
     */
    this.accounts.authinfo = (params) => this._makeRequest('accounts/authinfo', 'GET', params);

    /**
     * Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
     * @param {string} params.accountId - (Required) The ID of the account whose website is claimed.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {boolean} params.overwrite - Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request.
     * @return {object} The API response object.
     */
    this.accounts.claimwebsite = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/claimwebsite', 'POST', params);

    /**
     * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.custombatch = (params) => this._makeRequest('accounts/batch', 'POST', params);

    /**
     * Deletes a Merchant Center sub-account.
     * @param {string} params.accountId - (Required) The ID of the account.
     * @param {boolean} params.force - Option to delete sub-accounts with products. The default value is false.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.accounts.delete = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'DELETE', params);

    /**
     * Retrieves a Merchant Center account.
     * @param {string} params.accountId - (Required) The ID of the account.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} params.view - Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'GET', params);

    /**
     * Creates a Merchant Center sub-account.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.insert = (params) => this._makeRequest('{merchantId}/accounts', 'POST', params);

    /**
     * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     * @param {string} params.accountId - (Required) The ID of the account that should be linked.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.link = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/link', 'POST', params);

    /**
     * Lists the sub-accounts in your Merchant Center account.
     * @param {string} params.label - If view is set to "css", only return accounts that are assigned label with given ID.
     * @param {integer} params.maxResults - The maximum number of accounts to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} params.name - If set, only the accounts with the given name (case sensitive) will be returned.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.view - Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('{merchantId}/accounts', 'GET', params);

    /**
     * Returns the list of accounts linked to your Merchant Center account.
     * @param {string} params.accountId - (Required) The ID of the account for which to list links.
     * @param {integer} params.maxResults - The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.accounts.listlinks = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/listlinks', 'GET', params);

    /**
     * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @param {string} params.accountId - (Required) The ID of the account.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.update = (params) => this._makeRequest('{merchantId}/accounts/{accountId}', 'PUT', params);

    /**
     * Updates labels that are assigned to the Merchant Center account by CSS user.
     * @param {string} params.accountId - (Required) The ID of the account whose labels are updated.
     * @param {string} params.merchantId - (Required) The ID of the managing account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.updatelabels = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/updatelabels', 'POST', params);

    /**
     * Request verification code to start phone verification.
     * @param {string} params.accountId - (Required) Required. The ID of the account.
     * @param {string} params.merchantId - (Required) Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.requestphoneverification = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/requestphoneverification', 'POST', params);

    /**
     * Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
     * @param {string} params.accountId - (Required) Required. The ID of the account.
     * @param {string} params.merchantId - (Required) Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.verifyphonenumber = (params) => this._makeRequest('{merchantId}/accounts/{accountId}/verifyphonenumber', 'POST', params);

    this.accounts.credentials = {};

    /**
     * Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
     * @param {string} params.accountId - (Required) Required. The merchant id of the account these credentials belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.credentials.create = (params) => this._makeRequest('accounts/{accountId}/credentials', 'POST', params);

    this.accounts.labels = {};

    /**
     * Lists the labels assigned to an account.
     * @param {string} params.accountId - (Required) Required. The account id for whose labels are to be listed.
     * @param {integer} params.pageSize - The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.accounts.labels.list = (params) => this._makeRequest('accounts/{accountId}/labels', 'GET', params);

    /**
     * Creates a new label, not assigned to any account.
     * @param {string} params.accountId - (Required) Required. The id of the account this label belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.labels.create = (params) => this._makeRequest('accounts/{accountId}/labels', 'POST', params);

    /**
     * Updates a label.
     * @param {string} params.accountId - (Required) Required. The id of the account this label belongs to.
     * @param {string} params.labelId - (Required) Required. The id of the label to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.labels.patch = (params) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'PATCH', params);

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     * @param {string} params.accountId - (Required) Required. The id of the account that owns the label.
     * @param {string} params.labelId - (Required) Required. The id of the label to delete.
     * @return {object} The API response object.
     */
    this.accounts.labels.delete = (params) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'DELETE', params);

    this.accounts.returncarrier = {};

    /**
     * Links return carrier to a merchant account.
     * @param {string} params.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.returncarrier.create = (params) => this._makeRequest('accounts/{accountId}/returncarrier', 'POST', params);

    /**
     * Updates a return carrier in the merchant account.
     * @param {string} params.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {string} params.carrierAccountId - (Required) Required. The Google-provided unique carrier ID, used to update the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.returncarrier.patch = (params) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'PATCH', params);

    /**
     * Delete a return carrier in the merchant account.
     * @param {string} params.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {string} params.carrierAccountId - (Required) Required. The Google-provided unique carrier ID, used to update the resource.
     * @return {object} The API response object.
     */
    this.accounts.returncarrier.delete = (params) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'DELETE', params);

    /**
     * Lists available return carriers in the merchant account.
     * @param {string} params.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @return {object} The API response object.
     */
    this.accounts.returncarrier.list = (params) => this._makeRequest('accounts/{accountId}/returncarrier', 'GET', params);

    this.accountstatuses = {};

    /**
     * Retrieves multiple Merchant Center account statuses in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accountstatuses.custombatch = (params) => this._makeRequest('accountstatuses/batch', 'POST', params);

    /**
     * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
     * @param {string} params.accountId - (Required) The ID of the account.
     * @param {string} params.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.accountstatuses.get = (params) => this._makeRequest('{merchantId}/accountstatuses/{accountId}', 'GET', params);

    /**
     * Lists the statuses of the sub-accounts in your Merchant Center account.
     * @param {string} params.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {integer} params.maxResults - The maximum number of account statuses to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} params.name - If set, only the accounts with the given name (case sensitive) will be returned.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.accountstatuses.list = (params) => this._makeRequest('{merchantId}/accountstatuses', 'GET', params);

    this.accounttax = {};

    /**
     * Retrieves and updates tax settings of multiple accounts in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounttax.custombatch = (params) => this._makeRequest('accounttax/batch', 'POST', params);

    /**
     * Retrieves the tax settings of the account.
     * @param {string} params.accountId - (Required) The ID of the account for which to get/update account tax settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.accounttax.get = (params) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'GET', params);

    /**
     * Lists the tax settings of the sub-accounts in your Merchant Center account.
     * @param {integer} params.maxResults - The maximum number of tax settings to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.accounttax.list = (params) => this._makeRequest('{merchantId}/accounttax', 'GET', params);

    /**
     * Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {string} params.accountId - (Required) The ID of the account for which to get/update account tax settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounttax.update = (params) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'PUT', params);

    this.datafeeds = {};

    /**
     * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datafeeds.custombatch = (params) => this._makeRequest('datafeeds/batch', 'POST', params);

    /**
     * Deletes a datafeed configuration from your Merchant Center account.
     * @param {string} params.datafeedId - (Required) The ID of the datafeed.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.datafeeds.delete = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'DELETE', params);

    /**
     * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
     * @param {string} params.datafeedId - (Required) The ID of the datafeed to be fetched.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.datafeeds.fetchnow = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}/fetchNow', 'POST', params);

    /**
     * Retrieves a datafeed configuration from your Merchant Center account.
     * @param {string} params.datafeedId - (Required) The ID of the datafeed.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.datafeeds.get = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'GET', params);

    /**
     * Registers a datafeed configuration with your Merchant Center account.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datafeeds.insert = (params) => this._makeRequest('{merchantId}/datafeeds', 'POST', params);

    /**
     * Lists the configurations for datafeeds in your Merchant Center account.
     * @param {integer} params.maxResults - The maximum number of products to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.datafeeds.list = (params) => this._makeRequest('{merchantId}/datafeeds', 'GET', params);

    /**
     * Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @param {string} params.datafeedId - (Required) The ID of the datafeed.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datafeeds.update = (params) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'PUT', params);

    this.datafeedstatuses = {};

    /**
     * Gets multiple Merchant Center datafeed statuses in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datafeedstatuses.custombatch = (params) => this._makeRequest('datafeedstatuses/batch', 'POST', params);

    /**
     * Retrieves the status of a datafeed from your Merchant Center account.
     * @param {string} params.country - Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} params.datafeedId - (Required) The ID of the datafeed.
     * @param {string} params.feedLabel - The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} params.language - The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.datafeedstatuses.get = (params) => this._makeRequest('{merchantId}/datafeedstatuses/{datafeedId}', 'GET', params);

    /**
     * Lists the statuses of the datafeeds in your Merchant Center account.
     * @param {integer} params.maxResults - The maximum number of products to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.datafeedstatuses.list = (params) => this._makeRequest('{merchantId}/datafeedstatuses', 'GET', params);

    this.liasettings = {};

    /**
     * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liasettings.custombatch = (params) => this._makeRequest('liasettings/batch', 'POST', params);

    /**
     * Retrieves the LIA settings of the account.
     * @param {string} params.accountId - (Required) The ID of the account for which to get or update LIA settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.liasettings.get = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'GET', params);

    /**
     * Retrieves the list of accessible Business Profiles.
     * @param {string} params.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.liasettings.getaccessiblegmbaccounts = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/accessiblegmbaccounts', 'GET', params);

    /**
     * Lists the LIA settings of the sub-accounts in your Merchant Center account.
     * @param {integer} params.maxResults - The maximum number of LIA settings to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.liasettings.list = (params) => this._makeRequest('{merchantId}/liasettings', 'GET', params);

    /**
     * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
     * @return {object} The API response object.
     */
    this.liasettings.listposdataproviders = (params) => this._makeRequest('liasettings/posdataproviders', 'GET', params);

    /**
     * Requests access to a specified Business Profile.
     * @param {string} params.accountId - (Required) The ID of the account for which Business Profile access is requested.
     * @param {string} params.gmbEmail - (Required) The email of the Business Profile.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.liasettings.requestgmbaccess = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestgmbaccess', 'POST', params);

    /**
     * Requests inventory validation for the specified country.
     * @param {string} params.accountId - (Required) The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.country - (Required) The country for which inventory validation is requested.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.liasettings.requestinventoryverification = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}', 'POST', params);

    /**
     * Sets the inventory verification contact for the specified country.
     * @param {string} params.accountId - (Required) The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} params.contactEmail - (Required) The email of the inventory verification contact.
     * @param {string} params.contactName - (Required) The name of the inventory verification contact.
     * @param {string} params.country - (Required) The country for which inventory verification is requested.
     * @param {string} params.language - (Required) The language for which inventory verification is requested.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.liasettings.setinventoryverificationcontact = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setinventoryverificationcontact', 'POST', params);

    /**
     * Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it.
     * @param {string} params.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} params.country - The CLDR country code (for example, "US") for which the omnichannel experience is selected.
     * @param {string} params.lsfType - The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} params.pickupTypes - The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`"
     * @return {object} The API response object.
     */
    this.liasettings.setomnichannelexperience = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setomnichannelexperience', 'POST', params);

    /**
     * Sets the POS data provider for the specified country.
     * @param {string} params.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} params.country - (Required) The country for which the POS data provider is selected.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} params.posDataProviderId - The ID of POS data provider.
     * @param {string} params.posExternalAccountId - The account ID by which this merchant is known to the POS data provider.
     * @return {object} The API response object.
     */
    this.liasettings.setposdataprovider = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}/setposdataprovider', 'POST', params);

    /**
     * Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {string} params.accountId - (Required) The ID of the account for which to get or update LIA settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liasettings.update = (params) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'PUT', params);

    this.localinventory = {};

    /**
     * Updates local inventory for multiple products or stores in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.localinventory.custombatch = (params) => this._makeRequest('localinventory/batch', 'POST', params);

    /**
     * Updates the local inventory of a product in your Merchant Center account.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product for which to update local inventory.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.localinventory.insert = (params) => this._makeRequest('{merchantId}/products/{productId}/localinventory', 'POST', params);

    this.pos = {};

    /**
     * Batches multiple POS-related calls in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pos.custombatch = (params) => this._makeRequest('pos/batch', 'POST', params);

    /**
     * Deletes a store for the given merchant.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.storeCode - (Required) A store code that is unique per merchant.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @return {object} The API response object.
     */
    this.pos.delete = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'DELETE', params);

    /**
     * Retrieves information about the given store.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.storeCode - (Required) A store code that is unique per merchant.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @return {object} The API response object.
     */
    this.pos.get = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'GET', params);

    /**
     * Creates a store for the given merchant.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pos.insert = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'POST', params);

    /**
     * Submit inventory for the given merchant.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pos.inventory = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/inventory', 'POST', params);

    /**
     * Lists the stores of the target merchant.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @return {object} The API response object.
     */
    this.pos.list = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'GET', params);

    /**
     * Submit a sale event for the given merchant.
     * @param {string} params.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} params.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pos.sale = (params) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/sale', 'POST', params);

    this.products = {};

    /**
     * Retrieves, inserts, and deletes multiple products in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.products.custombatch = (params) => this._makeRequest('products/batch', 'POST', params);

    /**
     * Deletes a product from your Merchant Center account.
     * @param {string} params.feedId - The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product.
     * @return {object} The API response object.
     */
    this.products.delete = (params) => this._makeRequest('{merchantId}/products/{productId}', 'DELETE', params);

    /**
     * Retrieves a product from your Merchant Center account.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product.
     * @return {object} The API response object.
     */
    this.products.get = (params) => this._makeRequest('{merchantId}/products/{productId}', 'GET', params);

    /**
     * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
     * @param {string} params.feedId - The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.products.insert = (params) => this._makeRequest('{merchantId}/products', 'POST', params);

    /**
     * Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product for which to update.
     * @param {string} params.updateMask - The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.products.update = (params) => this._makeRequest('{merchantId}/products/{productId}', 'PATCH', params);

    /**
     * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
     * @param {integer} params.maxResults - The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the products. This account cannot be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.products.list = (params) => this._makeRequest('{merchantId}/products', 'GET', params);

    this.productstatuses = {};

    /**
     * Gets the statuses of multiple products in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.productstatuses.custombatch = (params) => this._makeRequest('productstatuses/batch', 'POST', params);

    /**
     * Gets the status of a product from your Merchant Center account.
     * @param {string} params.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product.
     * @return {object} The API response object.
     */
    this.productstatuses.get = (params) => this._makeRequest('{merchantId}/productstatuses/{productId}', 'GET', params);

    /**
     * Lists the statuses of the products in your Merchant Center account.
     * @param {string} params.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {integer} params.maxResults - The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the products. This account cannot be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.productstatuses.list = (params) => this._makeRequest('{merchantId}/productstatuses', 'GET', params);

    this.pubsubnotificationsettings = {};

    /**
     * Retrieves a Merchant Center account's pubsub notification settings.
     * @param {string} params.merchantId - (Required) The ID of the account for which to get pubsub notification settings.
     * @return {object} The API response object.
     */
    this.pubsubnotificationsettings.get = (params) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'GET', params);

    /**
     * Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
     * @param {string} params.merchantId - (Required) The ID of the account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pubsubnotificationsettings.update = (params) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'PUT', params);

    this.regionalinventory = {};

    /**
     * Updates regional inventory for multiple products or regions in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.regionalinventory.custombatch = (params) => this._makeRequest('regionalinventory/batch', 'POST', params);

    /**
     * Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
     * @param {string} params.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) The REST ID of the product for which to update the regional inventory.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.regionalinventory.insert = (params) => this._makeRequest('{merchantId}/products/{productId}/regionalinventory', 'POST', params);

    this.returnaddress = {};

    /**
     * Batches multiple return address related calls in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnaddress.custombatch = (params) => this._makeRequest('returnaddress/batch', 'POST', params);

    /**
     * Deletes a return address for the given Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account from which to delete the given return address.
     * @param {string} params.returnAddressId - (Required) Return address ID generated by Google.
     * @return {object} The API response object.
     */
    this.returnaddress.delete = (params) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'DELETE', params);

    /**
     * Gets a return address of the Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account to get a return address for.
     * @param {string} params.returnAddressId - (Required) Return address ID generated by Google.
     * @return {object} The API response object.
     */
    this.returnaddress.get = (params) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'GET', params);

    /**
     * Inserts a return address for the Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account to insert a return address for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnaddress.insert = (params) => this._makeRequest('{merchantId}/returnaddress', 'POST', params);

    /**
     * Lists the return addresses of the Merchant Center account.
     * @param {string} params.country - List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.
     * @param {integer} params.maxResults - The maximum number of addresses in the response, used for paging.
     * @param {string} params.merchantId - (Required) The Merchant Center account to list return addresses for.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.returnaddress.list = (params) => this._makeRequest('{merchantId}/returnaddress', 'GET', params);

    this.returnpolicy = {};

    /**
     * Batches multiple return policy related calls in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnpolicy.custombatch = (params) => this._makeRequest('returnpolicy/batch', 'POST', params);

    /**
     * Deletes a return policy for the given Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account from which to delete the given return policy.
     * @param {string} params.returnPolicyId - (Required) Return policy ID generated by Google.
     * @return {object} The API response object.
     */
    this.returnpolicy.delete = (params) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'DELETE', params);

    /**
     * Gets a return policy of the Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account to get a return policy for.
     * @param {string} params.returnPolicyId - (Required) Return policy ID generated by Google.
     * @return {object} The API response object.
     */
    this.returnpolicy.get = (params) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'GET', params);

    /**
     * Inserts a return policy for the Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account to insert a return policy for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnpolicy.insert = (params) => this._makeRequest('{merchantId}/returnpolicy', 'POST', params);

    /**
     * Lists the return policies of the Merchant Center account.
     * @param {string} params.merchantId - (Required) The Merchant Center account to list return policies for.
     * @return {object} The API response object.
     */
    this.returnpolicy.list = (params) => this._makeRequest('{merchantId}/returnpolicy', 'GET', params);

    this.shippingsettings = {};

    /**
     * Retrieves and updates the shipping settings of multiple accounts in a single request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.shippingsettings.custombatch = (params) => this._makeRequest('shippingsettings/batch', 'POST', params);

    /**
     * Retrieves the shipping settings of the account.
     * @param {string} params.accountId - (Required) The ID of the account for which to get/update shipping settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @return {object} The API response object.
     */
    this.shippingsettings.get = (params) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'GET', params);

    /**
     * Retrieves supported carriers and carrier services for an account.
     * @param {string} params.merchantId - (Required) The ID of the account for which to retrieve the supported carriers.
     * @return {object} The API response object.
     */
    this.shippingsettings.getsupportedcarriers = (params) => this._makeRequest('{merchantId}/supportedCarriers', 'GET', params);

    /**
     * Retrieves supported holidays for an account.
     * @param {string} params.merchantId - (Required) The ID of the account for which to retrieve the supported holidays.
     * @return {object} The API response object.
     */
    this.shippingsettings.getsupportedholidays = (params) => this._makeRequest('{merchantId}/supportedHolidays', 'GET', params);

    /**
     * Retrieves supported pickup services for an account.
     * @param {string} params.merchantId - (Required) The ID of the account for which to retrieve the supported pickup services.
     * @return {object} The API response object.
     */
    this.shippingsettings.getsupportedpickupservices = (params) => this._makeRequest('{merchantId}/supportedPickupServices', 'GET', params);

    /**
     * Lists the shipping settings of the sub-accounts in your Merchant Center account.
     * @param {integer} params.maxResults - The maximum number of shipping settings to return in the response, used for paging.
     * @param {string} params.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @return {object} The API response object.
     */
    this.shippingsettings.list = (params) => this._makeRequest('{merchantId}/shippingsettings', 'GET', params);

    /**
     * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {string} params.accountId - (Required) The ID of the account for which to get/update shipping settings.
     * @param {string} params.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.shippingsettings.update = (params) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'PUT', params);

    this.collections = {};

    /**
     * Retrieves a collection from your Merchant Center account.
     * @param {string} params.collectionId - (Required) Required. The REST ID of the collection.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.collections.get = (params) => this._makeRequest('{merchantId}/collections/{collectionId}', 'GET', params);

    /**
     * Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {integer} params.pageSize - The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @return {object} The API response object.
     */
    this.collections.list = (params) => this._makeRequest('{merchantId}/collections', 'GET', params);

    /**
     * Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.collections.create = (params) => this._makeRequest('{merchantId}/collections', 'POST', params);

    /**
     * Deletes a collection from your Merchant Center account.
     * @param {string} params.collectionId - (Required) Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.collections.delete = (params) => this._makeRequest('{merchantId}/collections/{collectionId}', 'DELETE', params);

    this.quotas = {};

    /**
     * Lists the daily call quota and usage per method for your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that has quota. This account must be an admin.
     * @param {integer} params.pageSize - The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @return {object} The API response object.
     */
    this.quotas.list = (params) => this._makeRequest('{merchantId}/quotas', 'GET', params);

    this.collectionstatuses = {};

    /**
     * Gets the status of a collection from your Merchant Center account.
     * @param {string} params.collectionId - (Required) Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @return {object} The API response object.
     */
    this.collectionstatuses.get = (params) => this._makeRequest('{merchantId}/collectionstatuses/{collectionId}', 'GET', params);

    /**
     * Lists the statuses of the collections in your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {integer} params.pageSize - The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @return {object} The API response object.
     */
    this.collectionstatuses.list = (params) => this._makeRequest('{merchantId}/collectionstatuses', 'GET', params);

    this.conversionsources = {};

    /**
     * Creates a new conversion source.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversionsources.create = (params) => this._makeRequest('{merchantId}/conversionsources', 'POST', params);

    /**
     * Updates information of an existing conversion source.
     * @param {string} params.conversionSourceId - (Required) Required. The ID of the conversion source to be updated.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields can be updated: `attribution_settings`, `display_name`, `currency_code`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversionsources.patch = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'PATCH', params);

    /**
     * Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
     * @param {string} params.conversionSourceId - (Required) Required. The ID of the conversion source to be deleted.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @return {object} The API response object.
     */
    this.conversionsources.delete = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'DELETE', params);

    /**
     * Re-enables an archived conversion source.
     * @param {string} params.conversionSourceId - (Required) Required. The ID of the conversion source to be undeleted.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversionsources.undelete = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}:undelete', 'POST', params);

    /**
     * Fetches a conversion source.
     * @param {string} params.conversionSourceId - (Required) Required. The REST ID of the collection.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @return {object} The API response object.
     */
    this.conversionsources.get = (params) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'GET', params);

    /**
     * Retrieves the list of conversion sources the caller has access to.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {integer} params.pageSize - The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total.
     * @param {string} params.pageToken - Page token.
     * @param {boolean} params.showDeleted - If true, also returns archived conversion sources.
     * @return {object} The API response object.
     */
    this.conversionsources.list = (params) => this._makeRequest('{merchantId}/conversionsources', 'GET', params);

    this.freelistingsprogram = {};

    /**
     * Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @return {object} The API response object.
     */
    this.freelistingsprogram.get = (params) => this._makeRequest('{merchantId}/freelistingsprogram', 'GET', params);

    /**
     * Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.freelistingsprogram.requestreview = (params) => this._makeRequest('{merchantId}/freelistingsprogram/requestreview', 'POST', params);

    this.freelistingsprogram.checkoutsettings = {};

    /**
     * Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @return {object} The API response object.
     */
    this.freelistingsprogram.checkoutsettings.get = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'GET', params);

    /**
     * Enrolls merchant in `Checkout` program.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.freelistingsprogram.checkoutsettings.insert = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'POST', params);

    /**
     * Deletes `Checkout` settings and unenrolls merchant from `Checkout` program.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @return {object} The API response object.
     */
    this.freelistingsprogram.checkoutsettings.delete = (params) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'DELETE', params);

    this.shoppingadsprogram = {};

    /**
     * Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @return {object} The API response object.
     */
    this.shoppingadsprogram.get = (params) => this._makeRequest('{merchantId}/shoppingadsprogram', 'GET', params);

    /**
     * Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     * @param {string} params.merchantId - (Required) Required. The ID of the account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.shoppingadsprogram.requestreview = (params) => this._makeRequest('{merchantId}/shoppingadsprogram/requestreview', 'POST', params);

    this.csses = {};

    /**
     * Lists CSS domains affiliated with a CSS group.
     * @param {string} params.cssGroupId - (Required) Required. The CSS group ID of CSS domains to be listed.
     * @param {integer} params.pageSize - The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.csses.list = (params) => this._makeRequest('{cssGroupId}/csses', 'GET', params);

    /**
     * Retrieves a single CSS domain by ID.
     * @param {string} params.cssDomainId - (Required) Required. The ID of the CSS domain to return.
     * @param {string} params.cssGroupId - (Required) Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.
     * @return {object} The API response object.
     */
    this.csses.get = (params) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}', 'GET', params);

    /**
     * Updates labels that are assigned to a CSS domain by its CSS group.
     * @param {string} params.cssDomainId - (Required) Required. The ID of the updated CSS domain.
     * @param {string} params.cssGroupId - (Required) Required. The CSS group ID of the updated CSS domain.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.csses.updatelabels = (params) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}/updatelabels', 'POST', params);

    this.reports = {};

    /**
     * Retrieves merchant performance metrics matching the search query and optionally segmented by selected dimensions.
     * @param {string} params.merchantId - (Required) Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.search = (params) => this._makeRequest('{merchantId}/reports/search', 'POST', params);

    this.merchantsupport = {};

    /**
     * Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {string} params.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     * @param {string} params.merchantId - (Required) Required. The ID of the account to fetch issues for.
     * @param {string} params.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.merchantsupport.renderaccountissues = (params) => this._makeRequest('{merchantId}/merchantsupport/renderaccountissues', 'POST', params);

    /**
     * Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {string} params.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the product.
     * @param {string} params.productId - (Required) Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for.
     * @param {string} params.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.merchantsupport.renderproductissues = (params) => this._makeRequest('{merchantId}/merchantsupport/renderproductissues/{productId}', 'POST', params);

    /**
     * Start an action. The action can be requested by merchants in third-party application. Before merchants can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.
     * @param {string} params.languageCode - Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     * @param {string} params.merchantId - (Required) Required. The ID of the merchant's account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.merchantsupport.triggeraction = (params) => this._makeRequest('{merchantId}/merchantsupport/triggeraction', 'POST', params);

    this.regions = {};

    /**
     * Retrieves a region defined in your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve region definition.
     * @param {string} params.regionId - (Required) Required. The id of the region to retrieve.
     * @return {object} The API response object.
     */
    this.regions.get = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'GET', params);

    /**
     * Creates a region definition in your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to create region definition.
     * @param {string} params.regionId - Required. The id of the region to create.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.regions.create = (params) => this._makeRequest('{merchantId}/regions', 'POST', params);

    /**
     * Updates a region definition in your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to update region definition.
     * @param {string} params.regionId - (Required) Required. The id of the region to update.
     * @param {string} params.updateMask - Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.regions.patch = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'PATCH', params);

    /**
     * Deletes a region definition from your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to delete region definition.
     * @param {string} params.regionId - (Required) Required. The id of the region to delete.
     * @return {object} The API response object.
     */
    this.regions.delete = (params) => this._makeRequest('{merchantId}/regions/{regionId}', 'DELETE', params);

    /**
     * Lists the regions in your Merchant Center account.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to list region definitions.
     * @param {integer} params.pageSize - The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.regions.list = (params) => this._makeRequest('{merchantId}/regions', 'GET', params);

    this.promotions = {};

    /**
     * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.promotions.create = (params) => this._makeRequest('{merchantId}/promotions', 'POST', params);

    /**
     * Retrieves a promotion from your Merchant Center account.
     * @param {string} params.id - (Required) Required. REST ID of the promotion to retrieve.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @return {object} The API response object.
     */
    this.promotions.get = (params) => this._makeRequest('{merchantId}/promotions/{id}', 'GET', params);

    /**
     * List all promotions from your Merchant Center account.
     * @param {string} params.countryCode - [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country.
     * @param {string} params.languageCode - The two-letter ISO 639-1 language code associated with the promotions, used as a filter.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @param {integer} params.pageSize - The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.promotions.list = (params) => this._makeRequest('{merchantId}/promotions', 'GET', params);

    this.recommendations = {};

    /**
     * Generates recommendations for a merchant.
     * @param {string} params.allowedTag - Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND
     * @param {string} params.languageCode - Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi
     * @param {string} params.merchantId - (Required) Required. The ID of the account to fetch recommendations for.
     * @return {object} The API response object.
     */
    this.recommendations.generate = (params) => this._makeRequest('{merchantId}/recommendations/generate', 'GET', params);

    /**
     * Reports an interaction on a recommendation for a merchant.
     * @param {string} params.merchantId - (Required) Required. The ID of the account that wants to report an interaction.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.recommendations.reportInteraction = (params) => this._makeRequest('{merchantId}/recommendations/reportInteraction', 'POST', params);

    this.returnpolicyonline = {};

    /**
     * Gets an existing return policy.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} params.returnPolicyId - (Required) Required. The id of the return policy to retrieve.
     * @return {object} The API response object.
     */
    this.returnpolicyonline.get = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'GET', params);

    /**
     * Creates a new return policy.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnpolicyonline.create = (params) => this._makeRequest('{merchantId}/returnpolicyonline', 'POST', params);

    /**
     * Deletes an existing return policy.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} params.returnPolicyId - (Required) Required. The id of the return policy to delete.
     * @return {object} The API response object.
     */
    this.returnpolicyonline.delete = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'DELETE', params);

    /**
     * Updates an existing return policy.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} params.returnPolicyId - (Required) Required. The id of the return policy to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.returnpolicyonline.patch = (params) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'PATCH', params);

    /**
     * Lists all existing return policies.
     * @param {string} params.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @return {object} The API response object.
     */
    this.returnpolicyonline.list = (params) => this._makeRequest('{merchantId}/returnpolicyonline', 'GET', params);

    this.ordertrackingsignals = {};

    /**
     * Creates new order tracking signal.
     * @param {string} params.merchantId - (Required) The ID of the merchant for which the order signal is created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.ordertrackingsignals.create = (params) => this._makeRequest('{merchantId}/ordertrackingsignals', 'POST', params);

    this.productdeliverytime = {};

    /**
     * Creates or updates the delivery time of a product.
     * @param {string} params.merchantId - (Required) The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.productdeliverytime.create = (params) => this._makeRequest('{merchantId}/productdeliverytime', 'POST', params);

    /**
     * Gets `productDeliveryTime` by `productId`.
     * @param {string} params.merchantId - (Required) Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     * @return {object} The API response object.
     */
    this.productdeliverytime.get = (params) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'GET', params);

    /**
     * Deletes the delivery time of a product.
     * @param {string} params.merchantId - (Required) Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} params.productId - (Required) Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     * @return {object} The API response object.
     */
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
