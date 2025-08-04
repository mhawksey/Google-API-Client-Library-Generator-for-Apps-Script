
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

    /**
     * Retrieves an account from your Merchant Center account. After inserting, updating, or deleting an account, it may take several minutes before changes take effect.
     * @param {string} params.name - (Required) Required. The name of the account to retrieve. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Creates a Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.createAndConfigure = (params) => this._makeRequest('accounts/v1beta/accounts:createAndConfigure', 'POST', params);

    /**
     * Deletes the specified account regardless of its type: standalone, advanced account or sub-account. Deleting an advanced account leads to the deletion of all of its sub-accounts. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.
     * @param {boolean} params.force - Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers.
     * @param {string} params.name - (Required) Required. The name of the account to delete. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.delete = (params) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', params);

    /**
     * Updates an account regardless of its type: standalone, advanced account or sub-account. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the account. Format: `accounts/{account}`
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Note: For the `accounts.list` method, quota and limits usage are charged for each user, and not for the Merchant Center ID or the advanced account ID. To list several sub-accounts, you should use the `accounts.listSubaccounts` method, which is more suitable for advanced accounts use case.
     * @param {string} params.filter - Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax).
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('accounts/v1beta/accounts', 'GET', params);

    /**
     * List all sub-accounts for a given advanced account. This is a convenience wrapper for the more powerful `accounts.list` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent} AND service(type="ACCOUNT_AGGREGATION"))`
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     * @param {string} params.provider - (Required) Required. The aggregation service provider. Format: `accounts/{accountId}`
     * @return {object} The API response object.
     */
    this.accounts.listSubaccounts = (params) => this._makeRequest('accounts/v1beta/{+provider}:listSubaccounts', 'GET', params);

    this.accounts.issues = {};

    /**
     * Lists all account issues of a Merchant Center account. When called on a multi-client account, this method only returns issues belonging to that account, not its sub-accounts. To retrieve issues for sub-accounts, you must first call the accounts.listSubaccounts method to obtain a list of sub-accounts, and then call `accounts.issues.list` for each sub-account individually.
     * @param {string} params.languageCode - Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used.
     * @param {integer} params.pageSize - Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of issues. Format: `accounts/{account}`
     * @param {string} params.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used.
     * @return {object} The API response object.
     */
    this.accounts.issues.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/issues', 'GET', params);

    this.accounts.relationships = {};

    /**
     * Retrieve an account relationship.
     * @param {string} params.name - (Required) Required. The resource name of the account relationship to get. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`.
     * @return {object} The API response object.
     */
    this.accounts.relationships.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the account relationship. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the account relationship. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`.
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.relationships.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * List account relationships for the specified account.
     * @param {integer} params.pageSize - Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     * @param {string} params.pageToken - Optional. The token returned by the previous `list` request.
     * @param {string} params.parent - (Required) Required. The parent account of the account relationship to filter by. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.relationships.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/relationships', 'GET', params);

    this.accounts.services = {};

    /**
     * Retrieve an account service.
     * @param {string} params.name - (Required) Required. The resource name of the account service to get. Format: `accounts/{account}/services/{service}`
     * @return {object} The API response object.
     */
    this.accounts.services.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * List account services for the specified accounts. Supports filtering.
     * @param {integer} params.pageSize - Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     * @param {string} params.pageToken - Optional. The token returned by the previous `list` request.
     * @param {string} params.parent - (Required) Required. The parent account of the account service to filter by. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.services.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/services', 'GET', params);

    /**
     * Propose an account service.
     * @param {string} params.parent - (Required) Required. The resource name of the parent account for the service. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.services.propose = (params) => this._makeRequest('accounts/v1beta/{+parent}/services:propose', 'POST', params);

    /**
     * Approve an account service proposal.
     * @param {string} params.name - (Required) Required. The resource name of the account service to approve. Format: `accounts/{account}/services/{service}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.services.approve = (params) => this._makeRequest('accounts/v1beta/{+name}:approve', 'POST', params);

    /**
     * Reject an account service (both proposed and approve services can be rejected).
     * @param {string} params.name - (Required) Required. The resource name of the account service to reject. Format: `accounts/{account}/services/{service}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.services.reject = (params) => this._makeRequest('accounts/v1beta/{+name}:reject', 'POST', params);

    this.accounts.users = {};

    /**
     * Retrieves a Merchant Center account user.
     * @param {string} params.name - (Required) Required. The name of the user to retrieve. Format: `accounts/{account}/users/{email}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`.
     * @return {object} The API response object.
     */
    this.accounts.users.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Creates a Merchant Center account user. Executing this method requires admin access.
     * @param {string} params.parent - (Required) Required. The resource name of the account for which a user will be created. Format: `accounts/{account}`
     * @param {string} params.userId - Required. The email address of the user (for example, `john.doe@gmail.com`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.users.create = (params) => this._makeRequest('accounts/v1beta/{+parent}/users', 'POST', params);

    /**
     * Deletes a Merchant Center account user. Executing this method requires admin access. The user to be deleted can't be the last admin user of that account. Also a user is protected from deletion if it is managed by Business Manager"
     * @param {string} params.name - (Required) Required. The name of the user to delete. Format: `accounts/{account}/users/{email}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`.
     * @return {object} The API response object.
     */
    this.accounts.users.delete = (params) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', params);

    /**
     * Updates a Merchant Center account user. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`.
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.users.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Lists all users of a Merchant Center account.
     * @param {integer} params.pageSize - Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of users. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.users.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/users', 'GET', params);

    this.accounts.autofeedSettings = {};

    /**
     * Retrieves the autofeed settings of an account.
     * @param {string} params.name - (Required) Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`
     * @return {object} The API response object.
     */
    this.accounts.autofeedSettings.getAutofeedSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the autofeed settings of an account.
     * @param {string} params.name - (Required) Identifier. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`.
     * @param {string} params.updateMask - Required. List of fields being updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.autofeedSettings.updateAutofeedSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    this.accounts.automaticImprovements = {};

    /**
     * Retrieves the automatic improvements of an account.
     * @param {string} params.name - (Required) Required. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`
     * @return {object} The API response object.
     */
    this.accounts.automaticImprovements.getAutomaticImprovements = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the automatic improvements of an account.
     * @param {string} params.name - (Required) Identifier. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`.
     * @param {string} params.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.automaticImprovements.updateAutomaticImprovements = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    this.accounts.businessIdentity = {};

    /**
     * Retrieves the business identity of an account.
     * @param {string} params.name - (Required) Required. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`. For example, `accounts/123456/businessIdentity`.
     * @return {object} The API response object.
     */
    this.accounts.businessIdentity.getBusinessIdentity = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the business identity of an account. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.businessIdentity.updateBusinessIdentity = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    this.accounts.businessInfo = {};

    /**
     * Retrieves the business info of an account.
     * @param {string} params.name - (Required) Required. The resource name of the business info. Format: `accounts/{account}/businessInfo`. For example, `accounts/123456/businessInfo`.
     * @return {object} The API response object.
     */
    this.accounts.businessInfo.getBusinessInfo = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the business info of an account. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the business info. Format: `accounts/{account}/businessInfo`
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.businessInfo.updateBusinessInfo = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    this.accounts.developerRegistration = {};

    /**
     * Registers the GCP used for the API call to the shopping account passed in the request. Will create a user with an "API developer" and add the "developer_email" as a contact with "API notifications" email preference on.
     * @param {string} params.name - (Required) Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.developerRegistration.registerGcp = (params) => this._makeRequest('accounts/v1beta/{+name}:registerGcp', 'POST', params);

    /**
     * Retrieves a developer registration for a merchant.
     * @param {string} params.name - (Required) Required. The `name` (ID) of the developer registration.
     * @return {object} The API response object.
     */
    this.accounts.developerRegistration.getDeveloperRegistration = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Unregister the calling GCP from the calling shopping account. Note that the GCP will still be able to access the API for at most 1 day from the unregister succussful call.
     * @param {string} params.name - (Required) Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.developerRegistration.unregisterGcp = (params) => this._makeRequest('accounts/v1beta/{+name}:unregisterGcp', 'POST', params);

    this.accounts.emailPreferences = {};

    /**
     * Returns the email preferences for a Merchant Center account user. This service only permits retrieving and updating email preferences for the authenticated user. Use the name=accounts/*\/users/me/emailPreferences alias to get preferences for the authenticated user.
     * @param {string} params.name - (Required) Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences`
     * @return {object} The API response object.
     */
    this.accounts.emailPreferences.getEmailPreferences = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates the email preferences for a Merchant Center account user. Advanced account users should specify the advanced account rather than a sub-account of the advanced account. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/*\/users/me/emailPreferences alias to update preferences for the authenticated user.
     * @param {string} params.name - (Required) Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user.
     * @param {string} params.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.emailPreferences.updateEmailPreferences = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    this.accounts.gbpAccounts = {};

    /**
     * List the GBP accounts for a given merchant.
     * @param {integer} params.pageSize - Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account}`.
     * @return {object} The API response object.
     */
    this.accounts.gbpAccounts.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/gbpAccounts', 'GET', params);

    /**
     * Link the specified merchant to a GBP account for all countries. To run this method, you must have admin access to the Merchant Center account. If you don't have admin access, the request fails with the error message `User is not an administrator of account {ACCOUNT_ID}`.
     * @param {string} params.parent - (Required) Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.gbpAccounts.linkGbpAccount = (params) => this._makeRequest('accounts/v1beta/{+parent}/gbpAccounts:linkGbpAccount', 'POST', params);

    this.accounts.homepage = {};

    /**
     * Retrieves a store's homepage.
     * @param {string} params.name - (Required) Required. The name of the homepage to retrieve. Format: `accounts/{account}/homepage`
     * @return {object} The API response object.
     */
    this.accounts.homepage.getHomepage = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Updates a store's homepage. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the store's homepage. Format: `accounts/{account}/homepage`
     * @param {string} params.updateMask - Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.homepage.updateHomepage = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the business is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message is returned: * PERMISSION_DENIED: User doesn't have the necessary permissions on this Merchant Center account. * FAILED_PRECONDITION: - The account is not a Merchant Center account. - Merchant Center account doesn't have a homepage. - Claiming failed (in this case the error message contains more details).
     * @param {string} params.name - (Required) Required. The name of the homepage to claim. Format: `accounts/{account}/homepage`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.homepage.claim = (params) => this._makeRequest('accounts/v1beta/{+name}:claim', 'POST', params);

    /**
     * Unclaims a store's homepage. Executing this method requires admin access.
     * @param {string} params.name - (Required) Required. The name of the homepage to unclaim. Format: `accounts/{account}/homepage`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.homepage.unclaim = (params) => this._makeRequest('accounts/v1beta/{+name}:unclaim', 'POST', params);

    this.accounts.omnichannelSettings = {};

    /**
     * Get the omnichannel settings for a given merchant.
     * @param {string} params.name - (Required) Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * List all the omnichannel settings for a given merchant.
     * @param {integer} params.pageSize - Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/omnichannelSettings', 'GET', params);

    /**
     * Create the omnichannel settings for a given merchant.
     * @param {string} params.parent - (Required) Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.create = (params) => this._makeRequest('accounts/v1beta/{+parent}/omnichannelSettings', 'POST', params);

    /**
     * Update the omnichannel setting for a given merchant in a given country.
     * @param {string} params.name - (Required) Identifier. The resource name of the omnichannel setting. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @param {string} params.updateMask - Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Requests inventory verification for a given merchant in a given country.
     * @param {string} params.name - (Required) Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.requestInventoryVerification = (params) => this._makeRequest('accounts/v1beta/{+name}:requestInventoryVerification', 'POST', params);

    this.accounts.omnichannelSettings.lfpProviders = {};

    /**
     * Find the LFP provider candidates in a given country.
     * @param {integer} params.pageSize - Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`.
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.lfpProviders.find = (params) => this._makeRequest('accounts/v1beta/{+parent}/lfpProviders:find', 'GET', params);

    /**
     * Link the specified merchant to a LFP provider for the specified country.
     * @param {string} params.name - (Required) Required. The name of the LFP provider resource to link. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}/lfpProviders/{lfp_provider}`. The `lfp_provider` is the LFP provider ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.omnichannelSettings.lfpProviders.linkLfpProvider = (params) => this._makeRequest('accounts/v1beta/{+name}:linkLfpProvider', 'POST', params);

    this.accounts.onlineReturnPolicies = {};

    /**
     * Gets an existing return policy for a given business.
     * @param {string} params.name - (Required) Required. The name of the return policy to retrieve. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @return {object} The API response object.
     */
    this.accounts.onlineReturnPolicies.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Lists all existing return policies for a given business.
     * @param {integer} params.pageSize - Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     * @param {string} params.parent - (Required) Required. The Merchant Center account for which to list return policies. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.onlineReturnPolicies.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/onlineReturnPolicies', 'GET', params);

    /**
     * Creates a new return policy for a given business.
     * @param {string} params.parent - (Required) Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.onlineReturnPolicies.create = (params) => this._makeRequest('accounts/v1beta/{+parent}/onlineReturnPolicies', 'POST', params);

    /**
     * Updates an existing return policy for a given business.
     * @param {string} params.name - (Required) Identifier. The name of the `OnlineReturnPolicy` resource. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @param {string} params.updateMask - Optional. Only support updating the entire OnlineReturnPolicy message. For update_mask, always use `*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.onlineReturnPolicies.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes an existing return policy.
     * @param {string} params.name - (Required) Required. The name of the return policy to delete. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}`
     * @return {object} The API response object.
     */
    this.accounts.onlineReturnPolicies.delete = (params) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', params);

    this.accounts.programs = {};

    /**
     * Retrieves the specified program for the account.
     * @param {string} params.name - (Required) Required. The name of the program to retrieve. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @return {object} The API response object.
     */
    this.accounts.programs.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Retrieves all programs for the account.
     * @param {integer} params.pageSize - Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page.
     * @param {string} params.parent - (Required) Required. The name of the account for which to retrieve all programs. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.programs.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/programs', 'GET', params);

    /**
     * Enable participation in the specified program for the account.
     * @param {string} params.name - (Required) Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.programs.enable = (params) => this._makeRequest('accounts/v1beta/{+name}:enable', 'POST', params);

    /**
     * Disable participation in the specified program for the account.
     * @param {string} params.name - (Required) Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.programs.disable = (params) => this._makeRequest('accounts/v1beta/{+name}:disable', 'POST', params);

    this.accounts.programs.checkoutSettings = {};

    /**
     * Gets `CheckoutSettings` for the given merchant. This includes information about review state, enrollment state and URL settings.
     * @param {string} params.name - (Required) Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @return {object} The API response object.
     */
    this.accounts.programs.checkoutSettings.getCheckoutSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Creates `CheckoutSettings` for the given merchant.
     * @param {string} params.parent - (Required) Required. The merchant account for which the `CheckoutSettings` will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.programs.checkoutSettings.create = (params) => this._makeRequest('accounts/v1beta/{+parent}/checkoutSettings', 'POST', params);

    /**
     * Updates `CheckoutSettings` for the given merchant.
     * @param {string} params.name - (Required) Identifier. The resource name of the program configuration settings. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @param {string} params.updateMask - Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.programs.checkoutSettings.updateCheckoutSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes `CheckoutSettings` and unenrolls merchant from `Checkout` program.
     * @param {string} params.name - (Required) Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings`
     * @return {object} The API response object.
     */
    this.accounts.programs.checkoutSettings.deleteCheckoutSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', params);

    this.accounts.regions = {};

    /**
     * Retrieves a region defined in your Merchant Center account.
     * @param {string} params.name - (Required) Required. The name of the region to retrieve. Format: `accounts/{account}/regions/{region}`
     * @return {object} The API response object.
     */
    this.accounts.regions.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Creates a region definition in your Merchant Center account. Executing this method requires admin access.
     * @param {string} params.parent - (Required) Required. The account to create a region for. Format: `accounts/{account}`
     * @param {string} params.regionId - Required. The identifier for the region, unique over all regions of the same account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.regions.create = (params) => this._makeRequest('accounts/v1beta/{+parent}/regions', 'POST', params);

    /**
     * Updates a region definition in your Merchant Center account. Executing this method requires admin access.
     * @param {string} params.name - (Required) Identifier. The resource name of the region. Format: `accounts/{account}/regions/{region}`
     * @param {string} params.updateMask - Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.regions.patch = (params) => this._makeRequest('accounts/v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a region definition from your Merchant Center account. Executing this method requires admin access.
     * @param {string} params.name - (Required) Required. The name of the region to delete. Format: `accounts/{account}/regions/{region}`
     * @return {object} The API response object.
     */
    this.accounts.regions.delete = (params) => this._makeRequest('accounts/v1beta/{+name}', 'DELETE', params);

    /**
     * Lists the regions in your Merchant Center account.
     * @param {integer} params.pageSize - Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account to list regions for. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.regions.list = (params) => this._makeRequest('accounts/v1beta/{+parent}/regions', 'GET', params);

    this.accounts.shippingSettings = {};

    /**
     * Retrieve shipping setting information.
     * @param {string} params.name - (Required) Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsettings`
     * @return {object} The API response object.
     */
    this.accounts.shippingSettings.getShippingSettings = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Replace the shipping setting of a business with the request shipping setting. Executing this method requires admin access.
     * @param {string} params.parent - (Required) Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.shippingSettings.insert = (params) => this._makeRequest('accounts/v1beta/{+parent}/shippingSettings:insert', 'POST', params);

    this.accounts.termsOfServiceAgreementStates = {};

    /**
     * Returns the state of a terms of service agreement.
     * @param {string} params.name - (Required) Required. The resource name of the terms of service version. Format: `accounts/{account}/termsOfServiceAgreementStates/{identifier}` The identifier format is: `{TermsOfServiceKind}-{country}`
     * @return {object} The API response object.
     */
    this.accounts.termsOfServiceAgreementStates.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Retrieves the state of the agreement for the application terms of service. Application terms of service covers permissions related to the usage of data provided through Merchant Center, CSS Center, Manufacturer Center, and more.
     * @param {string} params.parent - (Required) Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.termsOfServiceAgreementStates.retrieveForApplication = (params) => this._makeRequest('accounts/v1beta/{+parent}/termsOfServiceAgreementStates:retrieveForApplication', 'GET', params);

    this.termsOfService = {};

    /**
     * Retrieves the `TermsOfService` associated with the provided version.
     * @param {string} params.name - (Required) Required. The resource name of the terms of service version. Format: `termsOfService/{version}`
     * @return {object} The API response object.
     */
    this.termsOfService.get = (params) => this._makeRequest('accounts/v1beta/{+name}', 'GET', params);

    /**
     * Retrieves the latest version of the `TermsOfService` for a given `kind` and `region_code`.
     * @param {string} params.kind - Required. The Kind this terms of service version applies to.
     * @param {string} params.regionCode - Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     * @return {object} The API response object.
     */
    this.termsOfService.retrieveLatest = (params) => this._makeRequest('accounts/v1beta/termsOfService:retrieveLatest', 'GET', params);

    /**
     * Accepts a `TermsOfService`. Executing this method requires admin access.
     * @param {string} params.account - Required. The account for which to accept the ToS. Format: `accounts/{account}`
     * @param {string} params.name - (Required) Required. The resource name of the terms of service version. Format: `termsOfService/{version}`
     * @param {string} params.regionCode - Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     * @return {object} The API response object.
     */
    this.termsOfService.accept = (params) => this._makeRequest('accounts/v1beta/{+name}:accept', 'POST', params);
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
