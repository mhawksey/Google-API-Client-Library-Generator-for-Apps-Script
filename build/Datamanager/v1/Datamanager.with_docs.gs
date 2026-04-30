
/**
 * Google Apps Script client library for the Data Manager API
 * Documentation URL: https://developers.google.com/data-manager
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Datamanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://datamanager.googleapis.com/';
    this._servicePath = '';


    this.events = {};

    /**
     * Uploads a list of Event resources from the provided Destination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/events:ingest', 'POST', apiParams, clientConfig);

    this.requestStatus = {};

    /**
     * Gets the status of a request given request id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - Required. Required. The request ID of the Data Manager API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.requestStatus.retrieve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/requestStatus:retrieve', 'GET', apiParams, clientConfig);

    this.accountTypes = {};

    this.accountTypes.accounts = {};

    this.accountTypes.accounts.partnerLinks = {};

    /**
     * Creates a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of partner links. Format: accountTypes/{account_type}/accounts/{account}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.partnerLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/partnerLinks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the partner link to delete. Format: accountTypes/{account_type}/accounts/{account}/partnerLinks/{partner_link}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.partnerLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Searches for all partner links to and from a given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `partner_link_id = 123456789`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` Supported fields: - `partner_link_id` - `owning_account.account_type` - `owning_account.account_id` - `partner_account.account_type` - `partner_account.account_id` Example: `owning_account.account_type = "GOOGLE_ADS" AND partner_account.account_id = 987654321`
     * @param {integer} apiParams.pageSize - The maximum number of partner links to return. The service may return fewer than this value. If unspecified, at most 10 partner links will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A page token, received from a previous `SearchPartnerLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchPartnerLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Account to search for partner links. If no `filter` is specified, all partner links where this account is either the `owning_account` or `partner_account` are returned. Format: `accountTypes/{account_type}/accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.partnerLinks.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/partnerLinks:search', 'GET', apiParams, clientConfig);

    this.accountTypes.accounts.userListGlobalLicenses = {};

    /**
     * Retrieves a user list global license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the user list global license.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListGlobalLicenses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all user list global licenses owned by the parent account. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListUserListGlobalLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListGlobalLicenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userListGlobalLicenses', 'GET', apiParams, clientConfig);

    /**
     * Creates a user list global license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListGlobalLicenses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userListGlobalLicenses', 'POST', apiParams, clientConfig);

    /**
     * Updates a user list global license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the user list global license.
     * @param {string} apiParams.updateMask - Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListGlobalLicenses.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos = {};

    /**
     * Lists all customer info for a user list global license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The global license whose customer info are being queried. Should be in the format `accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}/userListGlobalLicenses/{USER_LIST_GLOBAL_LICENSE_ID}`. To list all global license customer info under an account, replace the user list global license id with a '-' (for example, `accountTypes/DATA_PARTNER/accounts/123/userListGlobalLicenses/-`)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userListGlobalLicenseCustomerInfos', 'GET', apiParams, clientConfig);

    this.accountTypes.accounts.insights = {};

    /**
     * Retrieves marketing data insights for a given user list. This feature is only available to data partners. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent account that owns the user list. Format: `accountTypes/{account_type}/accounts/{account}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.insights.retrieve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/insights:retrieve', 'POST', apiParams, clientConfig);

    this.accountTypes.accounts.userListDirectLicenses = {};

    /**
     * Creates a user list direct license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListDirectLicenses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userListDirectLicenses', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a user list direct license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the user list direct license.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListDirectLicenses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all user list direct licenses owned by the parent account. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of licenses to return per page. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListDirectLicenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userListDirectLicenses', 'GET', apiParams, clientConfig);

    /**
     * Updates a user list direct license. This feature is only available to data partners.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the user list direct license.
     * @param {string} apiParams.updateMask - Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userListDirectLicenses.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accountTypes.accounts.userLists = {};

    /**
     * Gets a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the UserList to retrieve. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists UserLists. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `display_name = "list 1"`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` - `:` (has) Supported fields: - `id` - `display_name` - `description` - `membership_status` - `integration_code` - `access_reason` - `ingested_user_list_info.upload_key_types`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of user lists to return. The service may return fewer than this value. If unspecified, at most 50 user lists will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListUserLists` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLists` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent account which owns this collection of user lists. Format: accountTypes/{account_type}/accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userLists', 'GET', apiParams, clientConfig);

    /**
     * Deletes a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the user list to delete. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list}
     * @param {boolean} apiParams.validateOnly - Optional. If true, the request is validated but not executed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userLists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the user list. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list}
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {boolean} apiParams.validateOnly - Optional. If true, the request is validated but not executed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent account where this user list will be created. Format: accountTypes/{account_type}/accounts/{account}
     * @param {boolean} apiParams.validateOnly - Optional. If true, the request is validated but not executed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountTypes.accounts.userLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/userLists', 'POST', apiParams, clientConfig);

    this.audienceMembers = {};

    /**
     * Uploads a list of AudienceMember resources to the provided Destination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.audienceMembers.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/audienceMembers:ingest', 'POST', apiParams, clientConfig);

    /**
     * Removes a list of AudienceMember resources from the provided Destination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.audienceMembers.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/audienceMembers:remove', 'POST', apiParams, clientConfig);
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
