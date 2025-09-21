
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://shoppingcontent.googleapis.com/';
    this._servicePath = 'content/v2.1/';


    this.accounts = {};

    /**
     * Returns information about the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.authinfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/authinfo', 'GET', apiParams, clientConfig);

    /**
     * Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account whose website is claimed.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {boolean} apiParams.overwrite - Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.claimwebsite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/claimwebsite', 'POST', apiParams, clientConfig);

    /**
     * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a Merchant Center sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account.
     * @param {boolean} apiParams.force - Option to delete sub-accounts with products. The default value is false.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} apiParams.view - Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Merchant Center sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts', 'POST', apiParams, clientConfig);

    /**
     * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account that should be linked.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/link', 'POST', apiParams, clientConfig);

    /**
     * Lists the sub-accounts in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.label - If view is set to "css", only return accounts that are assigned label with given ID.
     * @param {integer} apiParams.maxResults - The maximum number of accounts to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} apiParams.name - If set, only the accounts with the given name (case sensitive) will be returned.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {string} apiParams.view - Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of accounts linked to your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to list links.
     * @param {integer} apiParams.maxResults - The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.listlinks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/listlinks', 'GET', apiParams, clientConfig);

    /**
     * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}', 'PUT', apiParams, clientConfig);

    /**
     * Updates labels that are assigned to the Merchant Center account by CSS user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account whose labels are updated.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.updatelabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/updatelabels', 'POST', apiParams, clientConfig);

    /**
     * Request verification code to start phone verification.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The ID of the account.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.requestphoneverification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/requestphoneverification', 'POST', apiParams, clientConfig);

    /**
     * Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The ID of the account.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.verifyphonenumber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounts/{accountId}/verifyphonenumber', 'POST', apiParams, clientConfig);

    this.accounts.credentials = {};

    /**
     * Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The merchant id of the account these credentials belong to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.credentials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/credentials', 'POST', apiParams, clientConfig);

    this.accounts.labels = {};

    /**
     * Lists the labels assigned to an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The account id for whose labels are to be listed.
     * @param {integer} apiParams.pageSize - The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new label, not assigned to any account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The id of the account this label belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels', 'POST', apiParams, clientConfig);

    /**
     * Updates a label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The id of the account this label belongs to.
     * @param {string} apiParams.labelId - (Required) Required. The id of the label to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The id of the account that owns the label.
     * @param {string} apiParams.labelId - (Required) Required. The id of the label to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/labels/{labelId}', 'DELETE', apiParams, clientConfig);

    this.accounts.returncarrier = {};

    /**
     * Links return carrier to a merchant account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.returncarrier.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier', 'POST', apiParams, clientConfig);

    /**
     * Updates a return carrier in the merchant account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {string} apiParams.carrierAccountId - (Required) Required. The Google-provided unique carrier ID, used to update the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.returncarrier.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a return carrier in the merchant account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {string} apiParams.carrierAccountId - (Required) Required. The Google-provided unique carrier ID, used to update the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.returncarrier.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier/{carrierAccountId}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists available return carriers in the merchant account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.returncarrier.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/{accountId}/returncarrier', 'GET', apiParams, clientConfig);

    this.accountstatuses = {};

    /**
     * Retrieves multiple Merchant Center account statuses in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accountstatuses/batch', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account.
     * @param {string} apiParams.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accountstatuses/{accountId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the statuses of the sub-accounts in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {integer} apiParams.maxResults - The maximum number of account statuses to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} apiParams.name - If set, only the accounts with the given name (case sensitive) will be returned.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accountstatuses', 'GET', apiParams, clientConfig);

    this.accounttax = {};

    /**
     * Retrieves and updates tax settings of multiple accounts in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounttax.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounttax/batch', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the tax settings of the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get/update account tax settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounttax.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the tax settings of the sub-accounts in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of tax settings to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounttax.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax', 'GET', apiParams, clientConfig);

    /**
     * Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get/update account tax settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounttax.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/accounttax/{accountId}', 'PUT', apiParams, clientConfig);

    this.datafeeds = {};

    /**
     * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('datafeeds/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a datafeed configuration from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datafeedId - (Required) The ID of the datafeed.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'DELETE', apiParams, clientConfig);

    /**
     * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datafeedId - (Required) The ID of the datafeed to be fetched.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.fetchnow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}/fetchNow', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a datafeed configuration from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datafeedId - (Required) The ID of the datafeed.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'GET', apiParams, clientConfig);

    /**
     * Registers a datafeed configuration with your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds', 'POST', apiParams, clientConfig);

    /**
     * Lists the configurations for datafeeds in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of products to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds', 'GET', apiParams, clientConfig);

    /**
     * Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datafeedId - (Required) The ID of the datafeed.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeeds.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeeds/{datafeedId}', 'PUT', apiParams, clientConfig);

    this.datafeedstatuses = {};

    /**
     * Gets multiple Merchant Center datafeed statuses in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeedstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('datafeedstatuses/batch', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the status of a datafeed from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.country - Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} apiParams.datafeedId - (Required) The ID of the datafeed.
     * @param {string} apiParams.feedLabel - The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} apiParams.language - The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeed. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeedstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeedstatuses/{datafeedId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the statuses of the datafeeds in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of products to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datafeedstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/datafeedstatuses', 'GET', apiParams, clientConfig);

    this.liasettings = {};

    /**
     * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('liasettings/batch', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the LIA settings of the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get or update LIA settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of accessible Business Profiles.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.getaccessiblegmbaccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/accessiblegmbaccounts', 'GET', apiParams, clientConfig);

    /**
     * Lists the LIA settings of the sub-accounts in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of LIA settings to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.listposdataproviders = async (apiParams = {}, clientConfig = {}) => this._makeRequest('liasettings/posdataproviders', 'GET', apiParams, clientConfig);

    /**
     * Requests access to a specified Business Profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which Business Profile access is requested.
     * @param {string} apiParams.gmbEmail - (Required) The email of the Business Profile.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.requestgmbaccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestgmbaccess', 'POST', apiParams, clientConfig);

    /**
     * Requests inventory validation for the specified country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} apiParams.country - (Required) The country for which inventory validation is requested.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.requestinventoryverification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}', 'POST', apiParams, clientConfig);

    /**
     * Sets the inventory verification contact for the specified country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account that manages the order. This cannot be a multi-client account.
     * @param {string} apiParams.contactEmail - (Required) The email of the inventory verification contact.
     * @param {string} apiParams.contactName - (Required) The name of the inventory verification contact.
     * @param {string} apiParams.country - (Required) The country for which inventory verification is requested.
     * @param {string} apiParams.language - (Required) The language for which inventory verification is requested.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.setinventoryverificationcontact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setinventoryverificationcontact', 'POST', apiParams, clientConfig);

    /**
     * Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} apiParams.country - The CLDR country code (for example, "US") for which the omnichannel experience is selected.
     * @param {string} apiParams.lsfType - The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} apiParams.pickupTypes - The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.setomnichannelexperience = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setomnichannelexperience', 'POST', apiParams, clientConfig);

    /**
     * Sets the POS data provider for the specified country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to retrieve accessible Business Profiles.
     * @param {string} apiParams.country - (Required) The country for which the POS data provider is selected.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {string} apiParams.posDataProviderId - The ID of POS data provider.
     * @param {string} apiParams.posExternalAccountId - The account ID by which this merchant is known to the POS data provider.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.setposdataprovider = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}/setposdataprovider', 'POST', apiParams, clientConfig);

    /**
     * Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get or update LIA settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liasettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/liasettings/{accountId}', 'PUT', apiParams, clientConfig);

    this.localinventory = {};

    /**
     * Updates local inventory for multiple products or stores in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.localinventory.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('localinventory/batch', 'POST', apiParams, clientConfig);

    /**
     * Updates the local inventory of a product in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product for which to update local inventory.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.localinventory.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}/localinventory', 'POST', apiParams, clientConfig);

    this.pos = {};

    /**
     * Batches multiple POS-related calls in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('pos/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a store for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.storeCode - (Required) A store code that is unique per merchant.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves information about the given store.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.storeCode - (Required) A store code that is unique per merchant.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store/{storeCode}', 'GET', apiParams, clientConfig);

    /**
     * Creates a store for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'POST', apiParams, clientConfig);

    /**
     * Submit inventory for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.inventory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/inventory', 'POST', apiParams, clientConfig);

    /**
     * Lists the stores of the target merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/store', 'GET', apiParams, clientConfig);

    /**
     * Submit a sale event for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the POS or inventory data provider.
     * @param {string} apiParams.targetMerchantId - (Required) The ID of the target merchant.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pos.sale = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pos/{targetMerchantId}/sale', 'POST', apiParams, clientConfig);

    this.products = {};

    /**
     * Retrieves, inserts, and deletes multiple products in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a product from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedId - The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a product from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedId - The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product for which to update.
     * @param {string} apiParams.updateMask - The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the products. This account cannot be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products', 'GET', apiParams, clientConfig);

    this.productstatuses = {};

    /**
     * Gets the statuses of multiple products in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productstatuses.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('productstatuses/batch', 'POST', apiParams, clientConfig);

    /**
     * Gets the status of a product from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productstatuses/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the statuses of the products in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinations - If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     * @param {integer} apiParams.maxResults - The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the products. This account cannot be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productstatuses', 'GET', apiParams, clientConfig);

    this.pubsubnotificationsettings = {};

    /**
     * Retrieves a Merchant Center account's pubsub notification settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account for which to get pubsub notification settings.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pubsubnotificationsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'GET', apiParams, clientConfig);

    /**
     * Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.pubsubnotificationsettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/pubsubnotificationsettings', 'PUT', apiParams, clientConfig);

    this.regionalinventory = {};

    /**
     * Updates regional inventory for multiple products or regions in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regionalinventory.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('regionalinventory/batch', 'POST', apiParams, clientConfig);

    /**
     * Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) The REST ID of the product for which to update the regional inventory.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regionalinventory.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/products/{productId}/regionalinventory', 'POST', apiParams, clientConfig);

    this.returnaddress = {};

    /**
     * Batches multiple return address related calls in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnaddress.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('returnaddress/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a return address for the given Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account from which to delete the given return address.
     * @param {string} apiParams.returnAddressId - (Required) Return address ID generated by Google.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnaddress.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a return address of the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to get a return address for.
     * @param {string} apiParams.returnAddressId - (Required) Return address ID generated by Google.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnaddress.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnaddress/{returnAddressId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a return address for the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to insert a return address for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnaddress.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnaddress', 'POST', apiParams, clientConfig);

    /**
     * Lists the return addresses of the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.country - List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.
     * @param {integer} apiParams.maxResults - The maximum number of addresses in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to list return addresses for.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnaddress.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnaddress', 'GET', apiParams, clientConfig);

    this.returnpolicy = {};

    /**
     * Batches multiple return policy related calls in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicy.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('returnpolicy/batch', 'POST', apiParams, clientConfig);

    /**
     * Deletes a return policy for the given Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account from which to delete the given return policy.
     * @param {string} apiParams.returnPolicyId - (Required) Return policy ID generated by Google.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicy.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a return policy of the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to get a return policy for.
     * @param {string} apiParams.returnPolicyId - (Required) Return policy ID generated by Google.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicy.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicy/{returnPolicyId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a return policy for the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to insert a return policy for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicy.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicy', 'POST', apiParams, clientConfig);

    /**
     * Lists the return policies of the Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Merchant Center account to list return policies for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicy.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicy', 'GET', apiParams, clientConfig);

    this.shippingsettings = {};

    /**
     * Retrieves and updates the shipping settings of multiple accounts in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.custombatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('shippingsettings/batch', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the shipping settings of the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get/update shipping settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves supported carriers and carrier services for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account for which to retrieve the supported carriers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.getsupportedcarriers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedCarriers', 'GET', apiParams, clientConfig);

    /**
     * Retrieves supported holidays for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account for which to retrieve the supported holidays.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.getsupportedholidays = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedHolidays', 'GET', apiParams, clientConfig);

    /**
     * Retrieves supported pickup services for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the account for which to retrieve the supported pickup services.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.getsupportedpickupservices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/supportedPickupServices', 'GET', apiParams, clientConfig);

    /**
     * Lists the shipping settings of the sub-accounts in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The maximum number of shipping settings to return in the response, used for paging.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. This must be a multi-client account.
     * @param {string} apiParams.pageToken - The token returned by the previous request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings', 'GET', apiParams, clientConfig);

    /**
     * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The ID of the account for which to get/update shipping settings.
     * @param {string} apiParams.merchantId - (Required) The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shippingsettings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shippingsettings/{accountId}', 'PUT', apiParams, clientConfig);

    this.collections = {};

    /**
     * Retrieves a collection from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Required. The REST ID of the collection.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections/{collectionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {integer} apiParams.pageSize - The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections', 'GET', apiParams, clientConfig);

    /**
     * Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections', 'POST', apiParams, clientConfig);

    /**
     * Deletes a collection from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collections/{collectionId}', 'DELETE', apiParams, clientConfig);

    this.quotas = {};

    /**
     * Lists the daily call quota and usage per method for your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that has quota. This account must be an admin.
     * @param {integer} apiParams.pageSize - The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.quotas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/quotas', 'GET', apiParams, clientConfig);

    this.collectionstatuses = {};

    /**
     * Gets the status of a collection from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collectionstatuses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collectionstatuses/{collectionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the statuses of the collections in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
     * @param {integer} apiParams.pageSize - The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.collectionstatuses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/collectionstatuses', 'GET', apiParams, clientConfig);

    this.conversionsources = {};

    /**
     * Creates a new conversion source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources', 'POST', apiParams, clientConfig);

    /**
     * Updates information of an existing conversion source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversionSourceId - (Required) Required. The ID of the conversion source to be updated.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields can be updated: `attribution_settings`, `display_name`, `currency_code`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversionSourceId - (Required) Required. The ID of the conversion source to be deleted.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'DELETE', apiParams, clientConfig);

    /**
     * Re-enables an archived conversion source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversionSourceId - (Required) Required. The ID of the conversion source to be undeleted.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Fetches a conversion source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversionSourceId - (Required) Required. The REST ID of the collection.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources/{conversionSourceId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of conversion sources the caller has access to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that owns the new conversion source.
     * @param {integer} apiParams.pageSize - The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total.
     * @param {string} apiParams.pageToken - Page token.
     * @param {boolean} apiParams.showDeleted - If true, also returns archived conversion sources.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversionsources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/conversionsources', 'GET', apiParams, clientConfig);

    this.freelistingsprogram = {};

    /**
     * Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freelistingsprogram.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram', 'GET', apiParams, clientConfig);

    /**
     * Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freelistingsprogram.requestreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/requestreview', 'POST', apiParams, clientConfig);

    this.freelistingsprogram.checkoutsettings = {};

    /**
     * Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freelistingsprogram.checkoutsettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'GET', apiParams, clientConfig);

    /**
     * Enrolls merchant in `Checkout` program.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freelistingsprogram.checkoutsettings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'POST', apiParams, clientConfig);

    /**
     * Deletes `Checkout` settings and unenrolls merchant from `Checkout` program.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freelistingsprogram.checkoutsettings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/freelistingsprogram/checkoutsettings', 'DELETE', apiParams, clientConfig);

    this.shoppingadsprogram = {};

    /**
     * Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shoppingadsprogram.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shoppingadsprogram', 'GET', apiParams, clientConfig);

    /**
     * Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.shoppingadsprogram.requestreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/shoppingadsprogram/requestreview', 'POST', apiParams, clientConfig);

    this.csses = {};

    /**
     * Lists CSS domains affiliated with a CSS group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cssGroupId - (Required) Required. The CSS group ID of CSS domains to be listed.
     * @param {integer} apiParams.pageSize - The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.csses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a single CSS domain by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cssDomainId - (Required) Required. The ID of the CSS domain to return.
     * @param {string} apiParams.cssGroupId - (Required) Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.csses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}', 'GET', apiParams, clientConfig);

    /**
     * Updates labels that are assigned to a CSS domain by its CSS group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.cssDomainId - (Required) Required. The ID of the updated CSS domain.
     * @param {string} apiParams.cssGroupId - (Required) Required. The CSS group ID of the updated CSS domain.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.csses.updatelabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{cssGroupId}/csses/{cssDomainId}/updatelabels', 'POST', apiParams, clientConfig);

    this.reports = {};

    /**
     * Retrieves merchant performance metrics matching the search query and optionally segmented by selected dimensions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/reports/search', 'POST', apiParams, clientConfig);

    this.merchantsupport = {};

    /**
     * Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account to fetch issues for.
     * @param {string} apiParams.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.merchantsupport.renderaccountissues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/renderaccountissues', 'POST', apiParams, clientConfig);

    /**
     * Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the product.
     * @param {string} apiParams.productId - (Required) Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for.
     * @param {string} apiParams.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.merchantsupport.renderproductissues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/renderproductissues/{productId}', 'POST', apiParams, clientConfig);

    /**
     * Start an action. The action can be requested by merchants in third-party application. Before merchants can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the merchant's account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.merchantsupport.triggeraction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/merchantsupport/triggeraction', 'POST', apiParams, clientConfig);

    this.regions = {};

    /**
     * Retrieves a region defined in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve region definition.
     * @param {string} apiParams.regionId - (Required) Required. The id of the region to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a region definition in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to create region definition.
     * @param {string} apiParams.regionId - Required. The id of the region to create.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions', 'POST', apiParams, clientConfig);

    /**
     * Updates a region definition in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to update region definition.
     * @param {string} apiParams.regionId - (Required) Required. The id of the region to update.
     * @param {string} apiParams.updateMask - Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a region definition from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to delete region definition.
     * @param {string} apiParams.regionId - (Required) Required. The id of the region to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions/{regionId}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists the regions in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to list region definitions.
     * @param {integer} apiParams.pageSize - The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/regions', 'GET', apiParams, clientConfig);

    this.promotions = {};

    /**
     * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promotions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a promotion from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. REST ID of the promotion to retrieve.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promotions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions/{id}', 'GET', apiParams, clientConfig);

    /**
     * List all promotions from your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.countryCode - [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country.
     * @param {string} apiParams.languageCode - The two-letter ISO 639-1 language code associated with the promotions, used as a filter.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that contains the collection.
     * @param {integer} apiParams.pageSize - The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.promotions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/promotions', 'GET', apiParams, clientConfig);

    this.recommendations = {};

    /**
     * Generates recommendations for a merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.allowedTag - Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND
     * @param {string} apiParams.languageCode - Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account to fetch recommendations for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recommendations.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/recommendations/generate', 'GET', apiParams, clientConfig);

    /**
     * Reports an interaction on a recommendation for a merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The ID of the account that wants to report an interaction.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recommendations.reportInteraction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/recommendations/reportInteraction', 'POST', apiParams, clientConfig);

    this.returnpolicyonline = {};

    /**
     * Gets an existing return policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} apiParams.returnPolicyId - (Required) Required. The id of the return policy to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicyonline.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new return policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicyonline.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing return policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} apiParams.returnPolicyId - (Required) Required. The id of the return policy to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicyonline.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an existing return policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {string} apiParams.returnPolicyId - (Required) Required. The id of the return policy to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicyonline.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline/{returnPolicyId}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists all existing return policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The id of the merchant for which to retrieve the return policy online object.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.returnpolicyonline.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/returnpolicyonline', 'GET', apiParams, clientConfig);

    this.ordertrackingsignals = {};

    /**
     * Creates new order tracking signal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The ID of the merchant for which the order signal is created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ordertrackingsignals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/ordertrackingsignals', 'POST', apiParams, clientConfig);

    this.productdeliverytime = {};

    /**
     * Creates or updates the delivery time of a product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productdeliverytime.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime', 'POST', apiParams, clientConfig);

    /**
     * Gets `productDeliveryTime` by `productId`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productdeliverytime.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Deletes the delivery time of a product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.merchantId - (Required) Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
     * @param {string} apiParams.productId - (Required) Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.productdeliverytime.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{merchantId}/productdeliverytime/{productId}', 'DELETE', apiParams, clientConfig);
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
