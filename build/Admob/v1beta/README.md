# AdMob API - Apps Script Client Library

Auto-generated client library for using the **AdMob API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:50:47 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:50:47 GMT
- **Created:** Sun, 20 Jul 2025 16:11:01 GMT



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

### `accounts.campaignReport`

#### `accounts.campaignReport.generate()`

Generates Campaign Report based on provided specifications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654 |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.apps`

#### `accounts.apps.create()`

Creates an app under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654 |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.apps.list()`

List the apps under the specified AdMob account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654 |
| `params.pageSize` | `integer` | No | The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data. |

### `accounts.adUnits`

#### `accounts.adUnits.create()`

Creates an ad unit under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654 |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.adUnits.list()`

List the ad units under the specified AdMob account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654 |
| `params.pageSize` | `integer` | No | The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data. |

### `accounts.adUnits.adUnitMappings`

#### `accounts.adUnits.adUnitMappings.list()`

List ad unit mappings under the specified AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id}/adUnits/{ad_unit_id} |
| `params.pageSize` | `integer` | No | The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2") |

#### `accounts.adUnits.adUnitMappings.create()`

Create an ad unit mapping under the specific AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id} |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.mediationGroups`

#### `accounts.mediationGroups.list()`

List mediation groups under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654 |
| `params.pageSize` | `integer` | No | The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855") |

#### `accounts.mediationGroups.create()`

Create a mediation group under the specific AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns the mediation group. Format: accounts/{publisher_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.mediationGroups.patch()`

Update the specified mediation group under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789 |
| `params.updateMask` | `string` | No | List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id}\"].ad_unit_mappings[\"{ad_unit_id}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id}\"].state" - "mediation_group_lines[\"{mediation_group_line_id}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" } |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.mediationGroups.mediationAbExperiments`

#### `accounts.mediationGroups.mediationAbExperiments.create()`

Create an A/B testing experiment for a specified AdMob account and a mediation group. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns the mediation group. Format: accounts/{publisher_id}/mediationGroups/{mediation_group_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.mediationGroups.mediationAbExperiments.stop()`

Stop the mediation A/B experiment and choose a variant. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.adUnitMappings`

#### `accounts.adUnitMappings.batchCreate()`

Batch create the ad unit mappings under the specific AdMob account. The maximum allowed batch size is 100. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.adSources`

#### `accounts.adSources.list()`

List the ad sources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id} |
| `params.pageSize` | `integer` | No | The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page. |

### `accounts.adSources.adapters`

#### `accounts.adSources.adapters.list()`

List the adapters of the ad source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id}/adSources/{ad_source_id} |
| `params.pageSize` | `integer` | No | The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page. |