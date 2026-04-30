# Data Manager API - Apps Script Client Library

Auto-generated client library for using the **Data Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:44:09 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:44:09 GMT
- **Created:** Sat, 01 Nov 2025 00:35:17 GMT



---

## API Reference

### `events`

#### `events.ingest()`

Uploads a list of Event resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `requestStatus`

#### `requestStatus.retrieve()`

Gets the status of a request given request id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Required. Required. The request ID of the Data Manager API request. |

### `accountTypes`

### `accountTypes.accounts`

### `accountTypes.accounts.partnerLinks`

#### `accountTypes.accounts.partnerLinks.create()`

Creates a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of partner links. Format: accountTypes/{account_type}/accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.partnerLinks.delete()`

Deletes a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the partner link to delete. Format: accountTypes/{account_type}/accounts/{account}/partnerLinks/{partner_link} |

#### `accountTypes.accounts.partnerLinks.search()`

Searches for all partner links to and from a given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of partner links to return. The service may return fewer than this value. If unspecified, at most 10 partner links will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.parent` | `string` | Yes | Required. Account to search for partner links. If no `filter` is specified, all partner links where this account is either the `owning_account` or `partner_account` are returned. Format: `accountTypes/{account_type}/accounts/{account}` |
| `params.pageToken` | `string` | No | A page token, received from a previous `SearchPartnerLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchPartnerLinks` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `partner_link_id = 123456789`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` Supported fields: - `partner_link_id` - `owning_account.account_type` - `owning_account.account_id` - `partner_account.account_type` - `partner_account.account_id` Example: `owning_account.account_type = "GOOGLE_ADS" AND partner_account.account_id = 987654321` |

### `accountTypes.accounts.userListGlobalLicenses`

#### `accountTypes.accounts.userListGlobalLicenses.get()`

Retrieves a user list global license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user list global license. |

#### `accountTypes.accounts.userListGlobalLicenses.list()`

Lists all user list global licenses owned by the parent account. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} |
| `params.filter` | `string` | No | Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserListGlobalLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. |

#### `accountTypes.accounts.userListGlobalLicenses.create()`

Creates a user list global license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userListGlobalLicenses.patch()`

Updates a user list global license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used. |
| `params.name` | `string` | Yes | Identifier. The resource name of the user list global license. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos`

#### `accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos.list()`

Lists all customer info for a user list global license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The global license whose customer info are being queried. Should be in the format `accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID}/userListGlobalLicenses/{USER_LIST_GLOBAL_LICENSE_ID}`. To list all global license customer info under an account, replace the user list global license id with a '-' (for example, `accountTypes/DATA_PARTNER/accounts/123/userListGlobalLicenses/-`) |
| `params.filter` | `string` | No | Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `accountTypes.accounts.insights`

#### `accountTypes.accounts.insights.retrieve()`

Retrieves marketing data insights for a given user list. This feature is only available to data partners. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account that owns the user list. Format: `accountTypes/{account_type}/accounts/{account}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes.accounts.userListDirectLicenses`

#### `accountTypes.accounts.userListDirectLicenses.create()`

Creates a user list direct license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userListDirectLicenses.get()`

Retrieves a user list direct license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user list direct license. |

#### `accountTypes.accounts.userListDirectLicenses.list()`

Lists all user list direct licenses owned by the parent account. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of licenses to return per page. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE}/accounts/{ACCOUNT_ID} |
| `params.filter` | `string` | No | Optional. A [filter string](https://google.aip.dev/160) to apply to the list request. All fields need to be on the left hand side of each condition (for example: `user_list_id = 123`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. **Supported Operations:** - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token. |

#### `accountTypes.accounts.userListDirectLicenses.patch()`

Updates a user list direct license. This feature is only available to data partners.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the user list direct license. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accountTypes.accounts.userLists`

#### `accountTypes.accounts.userLists.get()`

Gets a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the UserList to retrieve. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} |

#### `accountTypes.accounts.userLists.list()`

Lists UserLists. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of user lists to return. The service may return fewer than this value. If unspecified, at most 50 user lists will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent account which owns this collection of user lists. Format: accountTypes/{account_type}/accounts/{account} |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserLists` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLists` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A [filter string](https://google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `display_name = "list 1"`). Fields must be specified using either all [camel case](https://en.wikipedia.org/wiki/Camel_case) or all [snake case](https://en.wikipedia.org/wiki/Snake_case). Don't use a combination of camel case and snake case. Supported operations: - `AND` - `=` - `!=` - `>` - `>=` - `<` - `<=` - `:` (has) Supported fields: - `id` - `display_name` - `description` - `membership_status` - `integration_code` - `access_reason` - `ingested_user_list_info.upload_key_types` |

#### `accountTypes.accounts.userLists.delete()`

Deletes a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user list to delete. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} |
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated but not executed. |

#### `accountTypes.accounts.userLists.patch()`

Updates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated but not executed. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.name` | `string` | Yes | Identifier. The resource name of the user list. Format: accountTypes/{account_type}/accounts/{account}/userLists/{user_list} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accountTypes.accounts.userLists.create()`

Creates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request:

* `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType}/accounts/{loginAccountId}`

* `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType}/accounts/{linkedAccountId}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated but not executed. |
| `params.parent` | `string` | Yes | Required. The parent account where this user list will be created. Format: accountTypes/{account_type}/accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |

### `audienceMembers`

#### `audienceMembers.ingest()`

Uploads a list of AudienceMember resources to the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `audienceMembers.remove()`

Removes a list of AudienceMember resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |