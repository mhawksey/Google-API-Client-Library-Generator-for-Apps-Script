# AdSense Platform API - Apps Script Client Library

Auto-generated client library for using the **AdSense Platform API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:45:42 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:25 GMT
- **Created:** Sun, 20 Jul 2025 16:11:12 GMT



---

## API Reference

### `platforms`

### `platforms.accounts`

#### `platforms.accounts.get()`

Gets information about the selected sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account to get information about. Format: platforms/{platform}/accounts/{account_id} |

#### `platforms.accounts.lookup()`

Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Platform who parents the account. Format: platforms/{platform} |
| `params.creationRequestId` | `string` | No | Optional. The creation_request_id provided when calling createAccount. |

#### `platforms.accounts.list()`

Lists a partial view of sub-accounts for a specific parent account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Platform who parents the accounts. Format: platforms/{platform} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. |

#### `platforms.accounts.create()`

Creates a sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Platform to create an account for. Format: platforms/{platform} |
| `params.resource` | `object` | Yes | The request body. |

#### `platforms.accounts.close()`

Closes a sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account to close. Format: platforms/{platform}/accounts/{account_id} |
| `params.resource` | `object` | Yes | The request body. |

### `platforms.accounts.events`

#### `platforms.accounts.events.create()`

Creates an account event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Account to log events about. Format: platforms/{platform}/accounts/{account} |
| `params.resource` | `object` | Yes | The request body. |

### `platforms.accounts.sites`

#### `platforms.accounts.sites.get()`

Gets a site from a specified sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site} |

#### `platforms.accounts.sites.list()`

Lists sites for a specific account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the sites. Format: platforms/{platform}/accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token. |

#### `platforms.accounts.sites.create()`

Creates a site for a specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Account to create site. Format: platforms/{platform}/accounts/{account_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `platforms.accounts.sites.requestReview()`

Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site} |

#### `platforms.accounts.sites.delete()`

Deletes a site from a specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site to delete. Format: platforms/{platform}/accounts/{account}/sites/{site} |

### `accounts`

### `accounts.platforms`

#### `accounts.platforms.get()`

Gets a platform.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform} |

#### `accounts.platforms.list()`

Lists platforms for a specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the platforms. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token. |

### `accounts.platforms.groups`

#### `accounts.platforms.groups.list()`

Lists Platform Groups for a specified Platform.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token. |

#### `accounts.platforms.groups.get()`

Gets a Platform Group for a specified Platform and group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform group to retrieve. Format: accounts/{account}/platforms/{platform}/groups/{group} |

#### `accounts.platforms.groups.patch()`

Update a Platform Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Format: accounts/{account}/platforms/{platform}/groups/{platform_group} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update - currently only supports updating the `description` field. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.platforms.childAccounts`

### `accounts.platforms.childAccounts.sites`

#### `accounts.platforms.childAccounts.sites.list()`

Lists Platform Child Sites for a specified Platform Child Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token. |

#### `accounts.platforms.childAccounts.sites.get()`

Gets a Platform Child Site for a specified Platform Child Account and site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the platform child site to retrieve. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site} |

#### `accounts.platforms.childAccounts.sites.patch()`

Update a Platform Child Site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update - currently only supports updating the `platform_group` field. |
| `params.resource` | `object` | Yes | The request body. |