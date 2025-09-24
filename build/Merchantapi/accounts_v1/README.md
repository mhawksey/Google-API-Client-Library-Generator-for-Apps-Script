# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: accounts_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:34:13 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:34:13 GMT
- **Created:** Sun, 31 Aug 2025 23:43:12 GMT



---

## API Reference

### `accounts`

#### `accounts.get()`

Retrieves an account from your Merchant Center account. After inserting, updating, or deleting an account, it may take several minutes before changes take effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to retrieve. Format: `accounts/{account}` |

#### `accounts.createAndConfigure()`

Creates a Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.delete()`

Deletes the specified account regardless of its type: standalone, advanced account or sub-account. Deleting an advanced account leads to the deletion of all of its sub-accounts. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to delete. Format: `accounts/{account}` |
| `params.force` | `boolean` | No | Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers. |

#### `accounts.patch()`

Updates an account regardless of its type: standalone, advanced account or sub-account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the account. Format: `accounts/{account}` |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.list()`

Note: For the `accounts.list` method, quota and limits usage are charged for each user, and not for the Merchant Center ID or the advanced account ID. To list several sub-accounts, you should use the `accounts.listSubaccounts` method, which is more suitable for advanced accounts use case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax). |

#### `accounts.listSubaccounts()`

List all sub-accounts for a given advanced account. This is a convenience wrapper for the more powerful `accounts.list` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent} AND service(type="ACCOUNT_AGGREGATION"))`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.provider` | `string` | Yes | Required. The aggregation service provider. Format: `accounts/{accountId}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token. |

#### `accounts.getAccountForGcpRegistration()`

Retrieves the merchant account that the calling GCP is registered with.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `accounts.issues`

#### `accounts.issues.list()`

Lists all account issues of a Merchant Center account. When called on a multi-client account, this method only returns issues belonging to that account, not its sub-accounts. To retrieve issues for sub-accounts, you must first call the accounts.listSubaccounts method to obtain a list of sub-accounts, and then call `accounts.issues.list` for each sub-account individually.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of issues. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100 |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token. |
| `params.languageCode` | `string` | No | Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used. |
| `params.timeZone` | `string` | No | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used. |

### `accounts.services`

#### `accounts.services.get()`

Retrieve an account service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account service to get. Format: `accounts/{account}/services/{service}` |

#### `accounts.services.list()`

List account services for the specified accounts. Supports filtering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account of the account service to filter by. Format: `accounts/{account}` |
| `params.pageToken` | `string` | No | Optional. The token returned by the previous `list` request. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`. |

#### `accounts.services.propose()`

Propose an account service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent account for the service. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.services.approve()`

Approve an account service proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account service to approve. Format: `accounts/{account}/services/{service}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.services.reject()`

Reject an account service (both proposed and approve services can be rejected).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account service to reject. Format: `accounts/{account}/services/{service}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.relationships`

#### `accounts.relationships.get()`

Retrieve an account relationship.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account relationship to get. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`. |

#### `accounts.relationships.patch()`

Updates the account relationship. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the account relationship. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`. |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.relationships.list()`

List account relationships for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account of the account relationship to filter by. Format: `accounts/{account}` |
| `params.pageToken` | `string` | No | Optional. The token returned by the previous `list` request. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`. |

### `accounts.users`

#### `accounts.users.get()`

Retrieves a Merchant Center account user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user to retrieve. Format: `accounts/{account}/users/{email}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`. |

#### `accounts.users.create()`

Creates a Merchant Center account user. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the account for which a user will be created. Format: `accounts/{account}` |
| `params.userId` | `string` | No | Required. The email address of the user (for example, `john.doe@gmail.com`). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.users.delete()`

Deletes a Merchant Center account user. Executing this method requires admin access. The user to be deleted can't be the last admin user of that account. Also a user is protected from deletion if it is managed by Business Manager"

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user to delete. Format: `accounts/{account}/users/{email}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`. |

#### `accounts.users.patch()`

Updates a Merchant Center account user. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`. |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.users.list()`

Lists all users of a Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of users. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100 |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token. |

### `accounts.autofeedSettings`

#### `accounts.autofeedSettings.getAutofeedSettings()`

Retrieves the autofeed settings of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings` |

#### `accounts.autofeedSettings.updateAutofeedSettings()`

Updates the autofeed settings of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`. |
| `params.updateMask` | `string` | No | Required. List of fields being updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.automaticImprovements`

#### `accounts.automaticImprovements.getAutomaticImprovements()`

Retrieves the automatic improvements of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements` |

#### `accounts.automaticImprovements.updateAutomaticImprovements()`

Updates the automatic improvements of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`. |
| `params.updateMask` | `string` | No | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.businessIdentity`

#### `accounts.businessIdentity.getBusinessIdentity()`

Retrieves the business identity of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`. For example, `accounts/123456/businessIdentity`. |

#### `accounts.businessIdentity.updateBusinessIdentity()`

Updates the business identity of an account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the business identity. Format: `accounts/{account}/businessIdentity` |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.businessInfo`

#### `accounts.businessInfo.getBusinessInfo()`

Retrieves the business info of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the business info. Format: `accounts/{account}/businessInfo`. For example, `accounts/123456/businessInfo`. |

#### `accounts.businessInfo.updateBusinessInfo()`

Updates the business info of an account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the business info. Format: `accounts/{account}/businessInfo` |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.developerRegistration`

#### `accounts.developerRegistration.registerGcp()`

Registers the GCP used for the API call to the shopping account passed in the request. Will create a user with an "API developer" and add the "developer_email" as a contact with "API notifications" email preference on.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.developerRegistration.getDeveloperRegistration()`

Retrieves a developer registration for a merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` (ID) of the developer registration. |

#### `accounts.developerRegistration.unregisterGcp()`

Unregister the calling GCP from the calling shopping account. Note that the GCP will still be able to access the API for at most 1 day from the unregister succussful call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.emailPreferences`

#### `accounts.emailPreferences.getEmailPreferences()`

Returns the email preferences for a Merchant Center account user. This service only permits retrieving and updating email preferences for the authenticated user. Use the name=accounts/*/users/me/emailPreferences alias to get preferences for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences` |

#### `accounts.emailPreferences.updateEmailPreferences()`

Updates the email preferences for a Merchant Center account user. Advanced account users should specify the advanced account rather than a sub-account of the advanced account. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/*/users/me/emailPreferences alias to update preferences for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user. |
| `params.updateMask` | `string` | No | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.gbpAccounts`

#### `accounts.gbpAccounts.list()`

List the GBP accounts for a given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token. |

#### `accounts.gbpAccounts.linkGbpAccount()`

Link the specified merchant to a GBP account for all countries. To run this method, you must have admin access to the Merchant Center account. If you don't have admin access, the request fails with the error message `User is not an administrator of account {ACCOUNT_ID}`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.homepage`

#### `accounts.homepage.getHomepage()`

Retrieves a store's homepage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the homepage to retrieve. Format: `accounts/{account}/homepage` |

#### `accounts.homepage.updateHomepage()`

Updates a store's homepage. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the store's homepage. Format: `accounts/{account}/homepage` |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.homepage.claim()`

Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the business is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message is returned:

* PERMISSION_DENIED: User doesn't have the necessary permissions on this Merchant Center account.

* FAILED_PRECONDITION: - The account is not a Merchant Center account. - Merchant Center account doesn't have a homepage. - Claiming failed (in this case the error message contains more details).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the homepage to claim. Format: `accounts/{account}/homepage` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.homepage.unclaim()`

Unclaims a store's homepage. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the homepage to unclaim. Format: `accounts/{account}/homepage` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.omnichannelSettings`

#### `accounts.omnichannelSettings.get()`

Get the omnichannel settings for a given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |

#### `accounts.omnichannelSettings.list()`

List all the omnichannel settings for a given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token. |

#### `accounts.omnichannelSettings.create()`

Create the omnichannel settings for a given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.omnichannelSettings.patch()`

Update the omnichannel setting for a given merchant in a given country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the omnichannel setting. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.omnichannelSettings.requestInventoryVerification()`

Requests inventory verification for a given merchant in a given country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.omnichannelSettings.lfpProviders`

#### `accounts.omnichannelSettings.lfpProviders.find()`

Find the LFP provider candidates in a given country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token. |

#### `accounts.omnichannelSettings.lfpProviders.linkLfpProvider()`

Link the specified merchant to a LFP provider for the specified country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the LFP provider resource to link. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}/lfpProviders/{lfp_provider}`. The `lfp_provider` is the LFP provider ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.onlineReturnPolicies`

#### `accounts.onlineReturnPolicies.get()`

Gets an existing return policy for a given business.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the return policy to retrieve. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}` |

#### `accounts.onlineReturnPolicies.list()`

Lists all existing return policies for a given business.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Merchant Center account for which to list return policies. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request. |

#### `accounts.onlineReturnPolicies.create()`

Creates a new return policy for a given business.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.onlineReturnPolicies.delete()`

Deletes an existing return policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the return policy to delete. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}` |

### `accounts.programs`

#### `accounts.programs.get()`

Retrieves the specified program for the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the program to retrieve. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |

#### `accounts.programs.list()`

Retrieves all programs for the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the account for which to retrieve all programs. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page. |

#### `accounts.programs.enable()`

Enable participation in the specified program for the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.programs.disable()`

Disable participation in the specified program for the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.programs.checkoutSettings`

#### `accounts.programs.checkoutSettings.getCheckoutSettings()`

Gets `CheckoutSettings` for the given merchant. This includes information about review state, enrollment state and URL settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings` |

#### `accounts.programs.checkoutSettings.create()`

Creates `CheckoutSettings` for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The merchant account for which the `CheckoutSettings` will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.programs.checkoutSettings.updateCheckoutSettings()`

Updates `CheckoutSettings` for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the program configuration settings. Format: `accounts/{account}/programs/{program}/checkoutSettings` |
| `params.updateMask` | `string` | No | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.programs.checkoutSettings.deleteCheckoutSettings()`

Deletes `CheckoutSettings` and unenrolls merchant from `Checkout` program.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings` |

### `accounts.regions`

#### `accounts.regions.get()`

Retrieves a region defined in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the region to retrieve. Format: `accounts/{account}/regions/{region}` |

#### `accounts.regions.create()`

Creates a region definition in your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to create a region for. Format: `accounts/{account}` |
| `params.regionId` | `string` | No | Required. The identifier for the region, unique over all regions of the same account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.regions.batchCreate()`

Creates one or more regions in your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to create one or more regions for. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.regions.patch()`

Updates a region definition in your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the region. Format: `accounts/{account}/regions/{region}` |
| `params.updateMask` | `string` | No | Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.regions.batchUpdate()`

Updates one or more regions in your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to update one or more regions for. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.regions.delete()`

Deletes a region definition from your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the region to delete. Format: `accounts/{account}/regions/{region}` |

#### `accounts.regions.batchDelete()`

Deletes multiple regions by name from your Merchant Center account. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to delete one or more regions from. Format: `accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.regions.list()`

Lists the regions in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list regions for. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token. |

### `accounts.shippingSettings`

#### `accounts.shippingSettings.getShippingSettings()`

Retrieve shipping setting information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsettings` |

#### `accounts.shippingSettings.insert()`

Replace the shipping setting of a business with the request shipping setting. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.termsOfServiceAgreementStates`

#### `accounts.termsOfServiceAgreementStates.get()`

Returns the state of a terms of service agreement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the terms of service version. Format: `accounts/{account}/termsOfServiceAgreementStates/{identifier}` The identifier format is: `{TermsOfServiceKind}-{country}` |

#### `accounts.termsOfServiceAgreementStates.retrieveForApplication()`

Retrieves the state of the agreement for the application terms of service. Application terms of service covers permissions related to the usage of data provided through Merchant Center, CSS Center, Manufacturer Center, and more.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account}` |

### `termsOfService`

#### `termsOfService.get()`

Retrieves the `TermsOfService` associated with the provided version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the terms of service version. Format: `termsOfService/{version}` |

#### `termsOfService.retrieveLatest()`

Retrieves the latest version of the `TermsOfService` for a given `kind` and `region_code`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.regionCode` | `string` | No | Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally. |
| `params.kind` | `string` | No | Required. The Kind this terms of service version applies to. |

#### `termsOfService.accept()`

Accepts a `TermsOfService`. Executing this method requires admin access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the terms of service version. Format: `termsOfService/{version}` |
| `params.account` | `string` | No | Required. The account for which to accept the ToS. Format: `accounts/{account}` |
| `params.regionCode` | `string` | No | Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally. |