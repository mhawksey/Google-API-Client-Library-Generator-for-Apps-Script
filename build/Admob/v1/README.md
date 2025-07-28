# AdMob API - Apps Script Client Library

Auto-generated client library for using the **AdMob API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:45:37 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:21 GMT
- **Created:** Sun, 20 Jul 2025 16:11:04 GMT



---

## API Reference

### `accounts`

#### `accounts.get()`

Gets information about the specified AdMob publisher account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654 |

#### `accounts.list()`

Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of accounts to return. |
| `params.pageToken` | `string` | No | The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data. |

### `accounts.networkReport`

#### `accounts.networkReport.generate()`

Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654 |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.mediationReport`

#### `accounts.mediationReport.generate()`

Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654 |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.apps`

#### `accounts.apps.list()`

List the apps under the specified AdMob account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654 |
| `params.pageSize` | `integer` | No | The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data. |

### `accounts.adUnits`

#### `accounts.adUnits.list()`

List the ad units under the specified AdMob account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654 |
| `params.pageSize` | `integer` | No | The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data. |