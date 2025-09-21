
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://merchantapi.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * Retrieves an account from your Merchant Center account. After inserting, updating, or deleting an account, it may take several minutes before changes take effect.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the account to retrieve. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.createAndConfigure = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/accounts:createAndConfigure', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified account regardless of its type: standalone, advanced account or sub-account. Deleting an advanced account leads to the deletion of all of its sub-accounts. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers.
     * @param {string} apiParams.name - (Required) Required. The name of the account to delete. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an account regardless of its type: standalone, advanced account or sub-account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the account. Format: `accounts/{account}`
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Note: For the `accounts.list` method, quota and limits usage are charged for each user, and not for the Merchant Center ID or the advanced account ID. To list several sub-accounts, you should use the `accounts.listSubaccounts` method, which is more suitable for advanced accounts use case.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/accounts', 'GET', apiParams, clientConfig);

    /**
     * List all sub-accounts for a given advanced account. This is a convenience wrapper for the more powerful `accounts.list` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent} AND service(type="ACCOUNT_AGGREGATION"))`
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     * @param {string} apiParams.provider - (Required) Required. The aggregation service provider. Format: `accounts/{accountId}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.listSubaccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+provider}:listSubaccounts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the merchant account that the calling GCP is registered with.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.getAccountForGcpRegistration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/accounts:getAccountForGcpRegistration', 'GET', apiParams, clientConfig);

    this.accounts.issues = {};

    /**
     * Lists all account issues of a Merchant Center account. When called on a multi-client account, this method only returns issues belonging to that account, not its sub-accounts. To retrieve issues for sub-accounts, you must first call the accounts.listSubaccounts method to obtain a list of sub-accounts, and then call `accounts.issues.list` for each sub-account individually.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of issues. Format: `accounts/{account}`
     * @param {string} apiParams.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.issues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/issues', 'GET', apiParams, clientConfig);

    this.accounts.services = {};

    /**
     * Retrieve an account service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the account service to get. Format: `accounts/{account}/services/{service}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List account services for the specified accounts. Supports filtering.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     * @param {string} apiParams.pageToken - Optional. The token returned by the previous `list` request.
     * @param {string} apiParams.parent - (Required) Required. The parent account of the account service to filter by. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Propose an account service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent account for the service. Format: `accounts/{account}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.services.propose = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/services:propose', 'POST', apiParams, clientConfig);

    /**
     * Approve an account service proposal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the account service to approve. Format: `accounts/{account}/services/{service}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.services.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:approve', 'POST', apiParams, clientConfig);

    /**
     * Reject an account service (both proposed and approve services can be rejected).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the account service to reject. Format: `accounts/{account}/services/{service}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.services.reject = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:reject', 'POST', apiParams, clientConfig);

    this.accounts.relationships = {};

    /**
     * Retrieve an account relationship.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the account relationship to get. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.relationships.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the account relationship. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the account relationship. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`.
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.relationships.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * List account relationships for the specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     * @param {string} apiParams.pageToken - Optional. The token returned by the previous `list` request.
     * @param {string} apiParams.parent - (Required) Required. The parent account of the account relationship to filter by. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.relationships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/relationships', 'GET', apiParams, clientConfig);

    this.accounts.users = {};

    /**
     * Retrieves a Merchant Center account user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the user to retrieve. Format: `accounts/{account}/users/{email}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Merchant Center account user. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the account for which a user will be created. Format: `accounts/{account}`
     * @param {string} apiParams.userId - Required. The email address of the user (for example, `john.doe@gmail.com`).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/users', 'POST', apiParams, clientConfig);

    /**
     * Deletes a Merchant Center account user. Executing this method requires admin access. The user to be deleted can't be the last admin user of that account. Also a user is protected from deletion if it is managed by Business Manager"
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the user to delete. Format: `accounts/{account}/users/{email}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a Merchant Center account user. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`.
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists all users of a Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of users. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/users', 'GET', apiParams, clientConfig);

    this.accounts.autofeedSettings = {};

    /**
     * Retrieves the autofeed settings of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.autofeedSettings.getAutofeedSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the autofeed settings of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`.
     * @param {string} apiParams.updateMask - Required. List of fields being updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.autofeedSettings.updateAutofeedSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.automaticImprovements = {};

    /**
     * Retrieves the automatic improvements of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.automaticImprovements.getAutomaticImprovements = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the automatic improvements of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`.
     * @param {string} apiParams.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.automaticImprovements.updateAutomaticImprovements = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.businessIdentity = {};

    /**
     * Retrieves the business identity of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`. For example, `accounts/123456/businessIdentity`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.businessIdentity.getBusinessIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the business identity of an account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.businessIdentity.updateBusinessIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.businessInfo = {};

    /**
     * Retrieves the business info of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the business info. Format: `accounts/{account}/businessInfo`. For example, `accounts/123456/businessInfo`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.businessInfo.getBusinessInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the business info of an account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the business info. Format: `accounts/{account}/businessInfo`
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.businessInfo.updateBusinessInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.developerRegistration = {};

    /**
     * Registers the GCP used for the API call to the shopping account passed in the request. Will create a user with an "API developer" and add the "developer_email" as a contact with "API notifications" email preference on.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.developerRegistration.registerGcp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:registerGcp', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a developer registration for a merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` (ID) of the developer registration.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.developerRegistration.getDeveloperRegistration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Unregister the calling GCP from the calling shopping account. Note that the GCP will still be able to access the API for at most 1 day from the unregister succussful call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.developerRegistration.unregisterGcp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:unregisterGcp', 'POST', apiParams, clientConfig);

    this.accounts.emailPreferences = {};

    /**
     * Returns the email preferences for a Merchant Center account user. This service only permits retrieving and updating email preferences for the authenticated user. Use the name=accounts/*\/users/me/emailPreferences alias to get preferences for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.emailPreferences.getEmailPreferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the email preferences for a Merchant Center account user. Advanced account users should specify the advanced account rather than a sub-account of the advanced account. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/*\/users/me/emailPreferences alias to update preferences for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user.
     * @param {string} apiParams.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.emailPreferences.updateEmailPreferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.gbpAccounts = {};

    /**
     * List the GBP accounts for a given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.gbpAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/gbpAccounts', 'GET', apiParams, clientConfig);

    /**
     * Link the specified merchant to a GBP account for all countries. To run this method, you must have admin access to the Merchant Center account. If you don't have admin access, the request fails with the error message `User is not an administrator of account {ACCOUNT_ID}`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.gbpAccounts.linkGbpAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/gbpAccounts:linkGbpAccount', 'POST', apiParams, clientConfig);

    this.accounts.homepage = {};

    /**
     * Retrieves a store's homepage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the homepage to retrieve. Format: `accounts/{account}/homepage`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.homepage.getHomepage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a store's homepage. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the store's homepage. Format: `accounts/{account}/homepage`
     * @param {string} apiParams.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.homepage.updateHomepage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the business is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message is returned: * PERMISSION_DENIED: User doesn't have the necessary permissions on this Merchant Center account. * FAILED_PRECONDITION: - The account is not a Merchant Center account. - Merchant Center account doesn't have a homepage. - Claiming failed (in this case the error message contains more details).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the homepage to claim. Format: `accounts/{account}/homepage`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.homepage.claim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:claim', 'POST', apiParams, clientConfig);

    /**
     * Unclaims a store's homepage. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the homepage to unclaim. Format: `accounts/{account}/homepage`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.homepage.unclaim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:unclaim', 'POST', apiParams, clientConfig);

    this.accounts.omnichannelSettings = {};

    /**
     * Get the omnichannel settings for a given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all the omnichannel settings for a given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/omnichannelSettings', 'GET', apiParams, clientConfig);

    /**
     * Create the omnichannel settings for a given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/omnichannelSettings', 'POST', apiParams, clientConfig);

    /**
     * Update the omnichannel setting for a given merchant in a given country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the omnichannel setting. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Requests inventory verification for a given merchant in a given country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.requestInventoryVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:requestInventoryVerification', 'POST', apiParams, clientConfig);

    this.accounts.omnichannelSettings.lfpProviders = {};

    /**
     * Find the LFP provider candidates in a given country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.lfpProviders.find = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/lfpProviders:find', 'GET', apiParams, clientConfig);

    /**
     * Link the specified merchant to a LFP provider for the specified country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the LFP provider resource to link. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}/lfpProviders/{lfp_provider}`. The `lfp_provider` is the LFP provider ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.omnichannelSettings.lfpProviders.linkLfpProvider = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:linkLfpProvider', 'POST', apiParams, clientConfig);

    this.accounts.onlineReturnPolicies = {};

    /**
     * Gets an existing return policy for a given business.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the return policy to retrieve. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.onlineReturnPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all existing return policies for a given business.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     * @param {string} apiParams.parent - (Required) Required. The Merchant Center account for which to list return policies. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.onlineReturnPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/onlineReturnPolicies', 'GET', apiParams, clientConfig);

    /**
     * Creates a new return policy for a given business.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.onlineReturnPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/onlineReturnPolicies', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing return policy for a given business.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the `OnlineReturnPolicy` resource. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @param {string} apiParams.updateMask - Optional. Only support updating the entire OnlineReturnPolicy message. For update_mask, always use `*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.onlineReturnPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an existing return policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the return policy to delete. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.onlineReturnPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.programs = {};

    /**
     * Retrieves the specified program for the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the program to retrieve. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves all programs for the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page.
     * @param {string} apiParams.parent - (Required) Required. The name of the account for which to retrieve all programs. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/programs', 'GET', apiParams, clientConfig);

    /**
     * Enable participation in the specified program for the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Disable participation in the specified program for the account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:disable', 'POST', apiParams, clientConfig);

    this.accounts.programs.checkoutSettings = {};

    /**
     * Gets `CheckoutSettings` for the given merchant. This includes information about review state, enrollment state and URL settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.checkoutSettings.getCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates `CheckoutSettings` for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The merchant account for which the `CheckoutSettings` will be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.checkoutSettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/checkoutSettings', 'POST', apiParams, clientConfig);

    /**
     * Updates `CheckoutSettings` for the given merchant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the program configuration settings. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @param {string} apiParams.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.checkoutSettings.updateCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes `CheckoutSettings` and unenrolls merchant from `Checkout` program.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.programs.checkoutSettings.deleteCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.regions = {};

    /**
     * Retrieves a region defined in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the region to retrieve. Format: `accounts/{account}/regions/{region}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.regions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a region definition in your Merchant Center account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account to create a region for. Format: `accounts/{account}`
     * @param {string} apiParams.regionId - Required. The identifier for the region, unique over all regions of the same account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.regions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/regions', 'POST', apiParams, clientConfig);

    /**
     * Updates a region definition in your Merchant Center account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the region. Format: `accounts/{account}/regions/{region}`
     * @param {string} apiParams.updateMask - Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.regions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a region definition from your Merchant Center account. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the region to delete. Format: `accounts/{account}/regions/{region}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.regions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists the regions in your Merchant Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account to list regions for. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/regions', 'GET', apiParams, clientConfig);

    this.accounts.shippingSettings = {};

    /**
     * Retrieve shipping setting information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.shippingSettings.getShippingSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Replace the shipping setting of a business with the request shipping setting. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.shippingSettings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/shippingSettings:insert', 'POST', apiParams, clientConfig);

    this.accounts.termsOfServiceAgreementStates = {};

    /**
     * Returns the state of a terms of service agreement.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the terms of service version. Format: `accounts/{account}/termsOfServiceAgreementStates/{identifier}` The identifier format is: `{TermsOfServiceKind}-{country}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.termsOfServiceAgreementStates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the state of the agreement for the application terms of service. Application terms of service covers permissions related to the usage of data provided through Merchant Center, CSS Center, Manufacturer Center, and more.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.termsOfServiceAgreementStates.retrieveForApplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+parent}/termsOfServiceAgreementStates:retrieveForApplication', 'GET', apiParams, clientConfig);

    this.termsOfService = {};

    /**
     * Retrieves the `TermsOfService` associated with the provided version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the terms of service version. Format: `termsOfService/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.termsOfService.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the latest version of the `TermsOfService` for a given `kind` and `region_code`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.kind - Required. The Kind this terms of service version applies to.
     * @param {string} apiParams.regionCode - Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.termsOfService.retrieveLatest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/termsOfService:retrieveLatest', 'GET', apiParams, clientConfig);

    /**
     * Accepts a `TermsOfService`. Executing this method requires admin access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.account - Required. The account for which to accept the ToS. Format: `accounts/{account}`
     * @param {string} apiParams.name - (Required) Required. The resource name of the terms of service version. Format: `termsOfService/{version}`
     * @param {string} apiParams.regionCode - Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.termsOfService.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1beta/{+name}:accept', 'POST', apiParams, clientConfig);
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
