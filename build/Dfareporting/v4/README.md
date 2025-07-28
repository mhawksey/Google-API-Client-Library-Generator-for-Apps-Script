# Campaign Manager 360 API - Apps Script Client Library

Auto-generated client library for using the **Campaign Manager 360 API (version: v4)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:46:44 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:31:16 GMT
- **Created:** Sun, 20 Jul 2025 16:31:21 GMT



---

## API Reference

### `accountPermissionGroups`

#### `accountPermissionGroups.get()`

Gets one account permission group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Account permission group ID. |

#### `accountPermissionGroups.list()`

Retrieves the list of account permission groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `accountPermissions`

#### `accountPermissions.get()`

Gets one account permission by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Account permission ID. |

#### `accountPermissions.list()`

Retrieves the list of account permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `accounts`

#### `accounts.get()`

Gets one account by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Account ID. |

#### `accounts.list()`

Retrieves the list of accounts, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only accounts with these IDs. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account". |
| `params.active` | `boolean` | No | Select only active accounts. Don't set this field to select both active and non-active accounts. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `accounts.update()`

Updates an existing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.patch()`

Updates an existing account. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Account ID. |
| `params.resource` | `object` | Yes | The request body. |

### `accountActiveAdSummaries`

#### `accountActiveAdSummaries.get()`

Gets the account's active ad summary by account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.summaryAccountId` | `string` | Yes | Account ID. |

### `accountUserProfiles`

#### `accountUserProfiles.get()`

Gets one account user profile by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | User profile ID. |

#### `accountUserProfiles.insert()`

Inserts a new account user profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `accountUserProfiles.list()`

Retrieves a list of account user profiles, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only user profiles with these IDs. |
| `params.userRoleId` | `string` | No | Select only user profiles with the specified user role ID. |
| `params.subaccountId` | `string` | No | Select only user profiles with the specified subaccount ID. |
| `params.active` | `boolean` | No | Select only active user profiles. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `accountUserProfiles.update()`

Updates an existing account user profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `accountUserProfiles.patch()`

Updates an existing account user profile. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. AccountUserProfile ID. |
| `params.resource` | `object` | Yes | The request body. |

### `ads`

#### `ads.get()`

Gets one ad by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Ad ID. |

#### `ads.insert()`

Inserts a new ad.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `ads.list()`

Retrieves a list of ads, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only ads with these IDs. |
| `params.active` | `boolean` | No | Select only active ads. |
| `params.archived` | `boolean` | No | Select only archived ads. |
| `params.campaignIds` | `string` | No | Select only ads with these campaign IDs. |
| `params.advertiserId` | `string` | No | Select only ads with this advertiser ID. |
| `params.type` | `string` | No | Select only ads with these types. |
| `params.dynamicClickTracker` | `boolean` | No | Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both. |
| `params.compatibility` | `string` | No | Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard. |
| `params.sizeIds` | `string` | No | Select only ads with these size IDs. |
| `params.landingPageIds` | `string` | No | Select only ads with these landing page IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.creativeIds` | `string` | No | Select only ads with these creative IDs assigned. |
| `params.placementIds` | `string` | No | Select only ads with these placement IDs assigned. |
| `params.remarketingListIds` | `string` | No | Select only ads whose list targeting expression use these remarketing list IDs. |
| `params.audienceSegmentIds` | `string` | No | Select only ads with these audience segment IDs. |
| `params.overriddenEventTagId` | `string` | No | Select only ads with this event tag override ID. |
| `params.sslRequired` | `boolean` | No | Select only ads that require SSL. |
| `params.sslCompliant` | `boolean` | No | Select only ads that are SSL-compliant. |
| `params.creativeOptimizationConfigurationIds` | `string` | No | Select only ads with these creative optimization configuration IDs. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `ads.update()`

Updates an existing ad.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `ads.patch()`

Updates an existing ad. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. RemarketingList ID. |
| `params.resource` | `object` | Yes | The request body. |

### `advertiserGroups`

#### `advertiserGroups.delete()`

Deletes an existing advertiser group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Advertiser group ID. |

#### `advertiserGroups.get()`

Gets one advertiser group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Advertiser group ID. |

#### `advertiserGroups.insert()`

Inserts a new advertiser group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertiserGroups.list()`

Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.ids` | `string` | No | Select only advertiser groups with these IDs. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `advertiserGroups.update()`

Updates an existing advertiser group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertiserGroups.patch()`

Updates an existing advertiser group. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Advertiser Group ID. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers`

#### `advertisers.get()`

Gets one advertiser by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Advertiser ID. |

#### `advertisers.insert()`

Inserts a new advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.list()`

Retrieves a list of advertisers, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.subaccountId` | `string` | No | Select only advertisers with these subaccount IDs. |
| `params.status` | `string` | No | Select only advertisers with the specified status. |
| `params.advertiserGroupIds` | `string` | No | Select only advertisers with these advertiser group IDs. |
| `params.floodlightConfigurationIds` | `string` | No | Select only advertisers with these floodlight configuration IDs. |
| `params.includeAdvertisersWithoutGroupsOnly` | `boolean` | No | Select only advertisers which do not belong to any advertiser group. |
| `params.onlyParent` | `boolean` | No | Select only advertisers which use another advertiser's floodlight configuration. |
| `params.ids` | `string` | No | Select only advertisers with these IDs. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" . |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `advertisers.update()`

Updates an existing advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.patch()`

Updates an existing advertiser. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Advertiser ID. |
| `params.resource` | `object` | Yes | The request body. |

### `billingAssignments`

#### `billingAssignments.insert()`

Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.billingProfileId` | `string` | Yes | Billing profile ID of this billing assignment. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAssignments.list()`

Retrieves a list of billing assignments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.billingProfileId` | `string` | Yes | Billing profile ID of this billing assignment. |

### `billingProfiles`

#### `billingProfiles.get()`

Gets one billing profile by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Billing Profile ID. |

#### `billingProfiles.list()`

Retrieves a list of billing profiles, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.currency_code` | `string` | No | Select only billing profile with currency. |
| `params.subaccountIds` | `string` | No | Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported. |
| `params.status` | `string` | No | Select only billing profile with the specified status. |
| `params.onlySuggestion` | `boolean` | No | Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API. |
| `params.ids` | `string` | No | Select only billing profile with these IDs. |
| `params.name` | `string` | No | Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile". |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `billingProfiles.update()`

Updates an existing billing profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `billingRates`

#### `billingRates.list()`

Retrieves a list of billing rates. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.billingProfileId` | `string` | Yes | Billing profile ID of this billing rate. |

### `browsers`

#### `browsers.list()`

Retrieves a list of browsers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `campaignCreativeAssociations`

#### `campaignCreativeAssociations.insert()`

Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.campaignId` | `string` | Yes | Campaign ID in this association. |
| `params.resource` | `object` | Yes | The request body. |

#### `campaignCreativeAssociations.list()`

Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.campaignId` | `string` | Yes | Campaign ID in this association. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `campaigns`

#### `campaigns.get()`

Gets one campaign by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Campaign ID. |

#### `campaigns.insert()`

Inserts a new campaign.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `campaigns.list()`

Retrieves a list of campaigns, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only campaigns with these IDs. |
| `params.advertiserIds` | `string` | No | Select only campaigns that belong to these advertisers. |
| `params.advertiserGroupIds` | `string` | No | Select only campaigns whose advertisers belong to these advertiser groups. |
| `params.archived` | `boolean` | No | Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns. |
| `params.overriddenEventTagId` | `string` | No | Select only campaigns that have overridden this event tag ID. |
| `params.subaccountId` | `string` | No | Select only campaigns that belong to this subaccount. |
| `params.atLeastOneOptimizationActivity` | `boolean` | No | Select only campaigns that have at least one optimization activity. |
| `params.searchString` | `string` | No | Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign". |
| `params.excludedIds` | `string` | No | Exclude campaigns with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `campaigns.update()`

Updates an existing campaign.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `campaigns.patch()`

Updates an existing campaign. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Campaign ID. |
| `params.resource` | `object` | Yes | The request body. |

### `changeLogs`

#### `changeLogs.get()`

Gets one change log by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Change log ID. |

#### `changeLogs.list()`

Retrieves a list of change logs. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only change logs with these IDs. |
| `params.userProfileIds` | `string` | No | Select only change logs with these user profile IDs. |
| `params.searchString` | `string` | No | Select only change logs whose object ID, user name, old or new values match the search string. |
| `params.objectType` | `string` | No | Select only change logs with the specified object type. |
| `params.action` | `string` | No | Select only change logs with the specified action. |
| `params.minChangeTime` | `string` | No | Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.maxChangeTime` | `string` | No | Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset. |
| `params.objectIds` | `string` | No | Select only change logs with these object IDs. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |

### `cities`

#### `cities.list()`

Retrieves a list of cities, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.namePrefix` | `string` | No | Select only cities with names starting with this prefix. |
| `params.countryDartIds` | `string` | No | Select only cities from these countries. |
| `params.dartIds` | `string` | No | Select only cities with these DART IDs. |
| `params.regionDartIds` | `string` | No | Select only cities from these regions. |

### `connectionTypes`

#### `connectionTypes.get()`

Gets one connection type by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Connection type ID. |

#### `connectionTypes.list()`

Retrieves a list of connection types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `contentCategories`

#### `contentCategories.delete()`

Deletes an existing content category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Content category ID. |

#### `contentCategories.get()`

Gets one content category by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Content category ID. |

#### `contentCategories.insert()`

Inserts a new content category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `contentCategories.list()`

Retrieves a list of content categories, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only content categories with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `contentCategories.update()`

Updates an existing content category.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `contentCategories.patch()`

Updates an existing content category. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. ContentCategory ID. |
| `params.resource` | `object` | Yes | The request body. |

### `conversions`

#### `conversions.batchinsert()`

Inserts conversions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `conversions.batchupdate()`

Updates existing conversions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `countries`

#### `countries.get()`

Gets one country by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.dartId` | `string` | Yes | Country DART ID. |

#### `countries.list()`

Retrieves a list of countries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `creativeAssets`

#### `creativeAssets.insert()`

Inserts a new creative asset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.advertiserId` | `string` | Yes | Advertiser ID of this creative. This is a required field. |
| `params.resource` | `object` | Yes | The request body. |

### `creativeFields`

#### `creativeFields.delete()`

Deletes an existing creative field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Creative Field ID |

#### `creativeFields.get()`

Gets one creative field by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Creative Field ID |

#### `creativeFields.insert()`

Inserts a new creative field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeFields.list()`

Retrieves a list of creative fields, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only creative fields with these IDs. |
| `params.searchString` | `string` | No | Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield". |
| `params.advertiserIds` | `string` | No | Select only creative fields that belong to these advertisers. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `creativeFields.update()`

Updates an existing creative field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeFields.patch()`

Updates an existing creative field. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | CreativeField ID. |
| `params.resource` | `object` | Yes | The request body. |

### `creativeFieldValues`

#### `creativeFieldValues.delete()`

Deletes an existing creative field value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | Creative field ID for this creative field value. |
| `params.id` | `string` | Yes | Creative Field Value ID |

#### `creativeFieldValues.get()`

Gets one creative field value by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | Creative field ID for this creative field value. |
| `params.id` | `string` | Yes | Creative Field Value ID |

#### `creativeFieldValues.insert()`

Inserts a new creative field value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | Creative field ID for this creative field value. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeFieldValues.list()`

Retrieves a list of creative field values, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | Creative field ID for this creative field value. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.searchString` | `string` | No | Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed. |
| `params.ids` | `string` | No | Select only creative field values with these IDs. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `creativeFieldValues.update()`

Updates an existing creative field value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | Creative field ID for this creative field value. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeFieldValues.patch()`

Updates an existing creative field value. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.creativeFieldId` | `string` | Yes | CreativeField ID. |
| `params.id` | `string` | Yes | CreativeFieldValue ID. |
| `params.resource` | `object` | Yes | The request body. |

### `creativeGroups`

#### `creativeGroups.get()`

Gets one creative group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Creative group ID. |

#### `creativeGroups.insert()`

Inserts a new creative group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeGroups.list()`

Retrieves a list of creative groups, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only creative groups with these IDs. |
| `params.groupNumber` | `integer` | No | Select only creative groups that belong to this subgroup. |
| `params.searchString` | `string` | No | Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup". |
| `params.advertiserIds` | `string` | No | Select only creative groups that belong to these advertisers. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `creativeGroups.update()`

Updates an existing creative group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creativeGroups.patch()`

Updates an existing creative group. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Creative Group ID. |
| `params.resource` | `object` | Yes | The request body. |

### `creatives`

#### `creatives.get()`

Gets one creative by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Creative ID. |

#### `creatives.insert()`

Inserts a new creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creatives.list()`

Retrieves a list of creatives, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only creatives with these IDs. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative". |
| `params.active` | `boolean` | No | Select only active creatives. Leave blank to select active and inactive creatives. |
| `params.archived` | `boolean` | No | Select only archived creatives. Leave blank to select archived and unarchived creatives. |
| `params.sizeIds` | `string` | No | Select only creatives with these size IDs. |
| `params.types` | `string` | No | Select only creatives with these creative types. |
| `params.campaignId` | `string` | No | Select only creatives with this campaign ID. |
| `params.studioCreativeId` | `string` | No | Select only creatives corresponding to this Studio creative ID. |
| `params.creativeFieldIds` | `string` | No | Select only creatives with these creative field IDs. |
| `params.renderingIds` | `string` | No | Select only creatives with these rendering IDs. |
| `params.companionCreativeIds` | `string` | No | Select only in-stream video creatives with these companion IDs. |
| `params.advertiserId` | `string` | No | Select only creatives with this advertiser ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `creatives.update()`

Updates an existing creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `creatives.patch()`

Updates an existing creative. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Creative ID. |
| `params.resource` | `object` | Yes | The request body. |

### `dimensionValues`

#### `dimensionValues.query()`

Retrieves list of report dimension values for a list of filters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous result page. |
| `params.resource` | `object` | Yes | The request body. |

### `directorySites`

#### `directorySites.get()`

Gets one directory site by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Directory site ID. |

#### `directorySites.insert()`

Inserts a new directory site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `directorySites.list()`

Retrieves a list of directory sites, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only directory sites with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.active` | `boolean` | No | Select only active directory sites. Leave blank to retrieve both active and inactive directory sites. |
| `params.acceptsInterstitialPlacements` | `boolean` | No | This search filter is no longer supported and will have no effect on the results returned. |
| `params.acceptsPublisherPaidPlacements` | `boolean` | No | Select only directory sites that accept publisher paid placements. This field can be left blank. |
| `params.acceptsInStreamVideoPlacements` | `boolean` | No | This search filter is no longer supported and will have no effect on the results returned. |
| `params.dfpNetworkCode` | `string` | No | Select only directory sites with this Ad Manager network code. |
| `params.searchString` | `string` | No | Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site". |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `dynamicTargetingKeys`

#### `dynamicTargetingKeys.delete()`

Deletes an existing dynamic targeting key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.objectId` | `string` | Yes | ID of the object of this dynamic targeting key. This is a required field. |
| `params.name` | `string` | Yes | Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. |
| `params.objectType` | `string` | Yes | Required. Type of the object of this dynamic targeting key. This is a required field. |

#### `dynamicTargetingKeys.insert()`

Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `dynamicTargetingKeys.list()`

Retrieves a list of dynamic targeting keys.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.names` | `string` | No | Select only dynamic targeting keys exactly matching these names. |
| `params.objectType` | `string` | No | Select only dynamic targeting keys with this object type. |
| `params.objectId` | `string` | No | Select only dynamic targeting keys with this object ID. |
| `params.advertiserId` | `string` | No | Select only dynamic targeting keys whose object has this advertiser ID. |

### `eventTags`

#### `eventTags.delete()`

Deletes an existing event tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Event tag ID. |

#### `eventTags.get()`

Gets one event tag by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Event tag ID. |

#### `eventTags.insert()`

Inserts a new event tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventTags.list()`

Retrieves a list of event tags, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only event tags with these IDs. |
| `params.advertiserId` | `string` | No | Select only event tags that belong to this advertiser. |
| `params.campaignId` | `string` | No | Select only event tags that belong to this campaign. |
| `params.adId` | `string` | No | Select only event tags that belong to this ad. |
| `params.enabled` | `boolean` | No | Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well. |
| `params.definitionsOnly` | `boolean` | No | Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags. |
| `params.eventTagTypes` | `string` | No | Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `eventTags.update()`

Updates an existing event tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `eventTags.patch()`

Updates an existing event tag. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. EventTag ID. |
| `params.resource` | `object` | Yes | The request body. |

### `files`

#### `files.get()`

Retrieves a report file by its report ID and file ID. This method supports media download.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.reportId` | `string` | Yes | The ID of the report. |
| `params.fileId` | `string` | Yes | The ID of the report file. |

#### `files.list()`

Lists files for a user profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous result page. |
| `params.scope` | `string` | No | The scope that defines which results are returned. |
| `params.sortField` | `string` | No | The field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `floodlightActivityGroups`

#### `floodlightActivityGroups.get()`

Gets one floodlight activity group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Floodlight activity Group ID. |

#### `floodlightActivityGroups.insert()`

Inserts a new floodlight activity group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `floodlightActivityGroups.list()`

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. |
| `params.type` | `string` | No | Select only floodlight activity groups with the specified floodlight activity group type. |
| `params.advertiserId` | `string` | No | Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result. |
| `params.floodlightConfigurationId` | `string` | No | Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `floodlightActivityGroups.update()`

Updates an existing floodlight activity group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `floodlightActivityGroups.patch()`

Updates an existing floodlight activity group. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. EventTag ID. |
| `params.resource` | `object` | Yes | The request body. |

### `floodlightActivities`

#### `floodlightActivities.delete()`

Deletes an existing floodlight activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Floodlight activity ID. |

#### `floodlightActivities.generatetag()`

Generates a tag for a floodlight activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.floodlightActivityId` | `string` | No | Floodlight activity ID for which we want to generate a tag. |

#### `floodlightActivities.get()`

Gets one floodlight activity by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Floodlight activity ID. |

#### `floodlightActivities.insert()`

Inserts a new floodlight activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `floodlightActivities.list()`

Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. |
| `params.floodlightActivityGroupIds` | `string` | No | Select only floodlight activities with the specified floodlight activity group IDs. |
| `params.floodlightConfigurationId` | `string` | No | Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. |
| `params.advertiserId` | `string` | No | Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. |
| `params.tagString` | `string` | No | Select only floodlight activities with the specified tag string. |
| `params.floodlightActivityGroupType` | `string` | No | Select only floodlight activities with the specified floodlight activity group type. |
| `params.floodlightActivityGroupTagString` | `string` | No | Select only floodlight activities with the specified floodlight activity group tag string. |
| `params.floodlightActivityGroupName` | `string` | No | Select only floodlight activities with the specified floodlight activity group name. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `floodlightActivities.update()`

Updates an existing floodlight activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `floodlightActivities.patch()`

Updates an existing floodlight activity. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. EventTag ID. |
| `params.resource` | `object` | Yes | The request body. |

### `floodlightConfigurations`

#### `floodlightConfigurations.get()`

Gets one floodlight configuration by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Floodlight configuration ID. |

#### `floodlightConfigurations.list()`

Retrieves a list of floodlight configurations, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned. |

#### `floodlightConfigurations.update()`

Updates an existing floodlight configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `floodlightConfigurations.patch()`

Updates an existing floodlight configuration. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. EventTag ID. |
| `params.resource` | `object` | Yes | The request body. |

### `inventoryItems`

#### `inventoryItems.get()`

Gets one inventory item by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.projectId` | `string` | Yes | Project ID for order documents. |
| `params.id` | `string` | Yes | Inventory item ID. |

#### `inventoryItems.list()`

Retrieves a list of inventory items, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.projectId` | `string` | Yes | Project ID for order documents. |
| `params.ids` | `string` | No | Select only inventory items with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.inPlan` | `boolean` | No | Select only inventory items that are in plan. |
| `params.orderId` | `string` | No | Select only inventory items that belong to specified orders. |
| `params.type` | `string` | No | Select only inventory items with this type. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.siteId` | `string` | No | Select only inventory items that are associated with these sites. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `advertiserInvoices`

#### `advertiserInvoices.list()`

Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.advertiserId` | `string` | Yes | Advertiser ID of this invoice. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.issueMonth` | `string` | No | Month for which invoices are needed in the format YYYYMM. Required field |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |

### `advertiserLandingPages`

#### `advertiserLandingPages.get()`

Gets one landing page by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Landing page ID. |

#### `advertiserLandingPages.insert()`

Inserts a new landing page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertiserLandingPages.list()`

Retrieves a list of landing pages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only landing pages with these IDs. |
| `params.advertiserIds` | `string` | No | Select only landing pages that belong to these advertisers. |
| `params.archived` | `boolean` | No | Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages. |
| `params.subaccountId` | `string` | No | Select only landing pages that belong to this subaccount. |
| `params.searchString` | `string` | No | Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage". |
| `params.campaignIds` | `string` | No | Select only landing pages that are associated with these campaigns. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `advertiserLandingPages.update()`

Updates an existing landing page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertiserLandingPages.patch()`

Updates an existing landing page. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Landing Page ID. |
| `params.resource` | `object` | Yes | The request body. |

### `languages`

#### `languages.list()`

Retrieves a list of languages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `metros`

#### `metros.list()`

Retrieves a list of metros.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `mobileApps`

#### `mobileApps.get()`

Gets one mobile app by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Mobile app ID. |

#### `mobileApps.list()`

Retrieves list of available mobile apps.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only apps with these IDs. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app". |
| `params.directories` | `string` | No | Select only apps from these directories. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |

### `mobileCarriers`

#### `mobileCarriers.get()`

Gets one mobile carrier by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Mobile carrier ID. |

#### `mobileCarriers.list()`

Retrieves a list of mobile carriers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `operatingSystems`

#### `operatingSystems.get()`

Gets one operating system by DART ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.dartId` | `string` | Yes | Operating system DART ID. |

#### `operatingSystems.list()`

Retrieves a list of operating systems.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `operatingSystemVersions`

#### `operatingSystemVersions.get()`

Gets one operating system version by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Operating system version ID. |

#### `operatingSystemVersions.list()`

Retrieves a list of operating system versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `orders`

#### `orders.get()`

Gets one order by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.projectId` | `string` | Yes | Project ID for orders. |
| `params.id` | `string` | Yes | Order ID. |

#### `orders.list()`

Retrieves a list of orders, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.projectId` | `string` | Yes | Project ID for orders. |
| `params.ids` | `string` | No | Select only orders with these IDs. |
| `params.searchString` | `string` | No | Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order". |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.siteId` | `string` | No | Select only orders that are associated with these site IDs. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `remarketingLists`

#### `remarketingLists.patch()`

Updates an existing remarketing list. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. RemarketingList ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `remarketingLists.get()`

Gets one remarketing list by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Remarketing list ID. |

#### `remarketingLists.insert()`

Inserts a new remarketing list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `remarketingLists.list()`

Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.advertiserId` | `string` | Yes | Required. Select only remarketing lists owned by this advertiser. |
| `params.name` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". |
| `params.active` | `boolean` | No | Select only active or only inactive remarketing lists. |
| `params.floodlightActivityId` | `string` | No | Select only remarketing lists that have this floodlight activity ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `remarketingLists.update()`

Updates an existing remarketing list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `remarketingListShares`

#### `remarketingListShares.patch()`

Updates an existing remarketing list share. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. RemarketingList ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `remarketingListShares.get()`

Gets one remarketing list share by remarketing list ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.remarketingListId` | `string` | Yes | Remarketing list ID. |

#### `remarketingListShares.update()`

Updates an existing remarketing list share.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `sites`

#### `sites.patch()`

Updates an existing site. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Site ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.get()`

Gets one site by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Site ID. |

#### `sites.insert()`

Inserts a new site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.list()`

Retrieves a list of sites, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only sites with these IDs. |
| `params.directorySiteIds` | `string` | No | Select only sites with these directory site IDs. |
| `params.subaccountId` | `string` | No | Select only sites with this subaccount ID. |
| `params.approved` | `boolean` | No | Select only approved sites. |
| `params.acceptsInterstitialPlacements` | `boolean` | No | This search filter is no longer supported and will have no effect on the results returned. |
| `params.acceptsPublisherPaidPlacements` | `boolean` | No | Select only sites that accept publisher paid placements. |
| `params.acceptsInStreamVideoPlacements` | `boolean` | No | This search filter is no longer supported and will have no effect on the results returned. |
| `params.adWordsSite` | `boolean` | No | Select only AdWords sites. |
| `params.unmappedSite` | `boolean` | No | Select only sites that have not been mapped to a directory site. |
| `params.campaignIds` | `string` | No | Select only sites with these campaign IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `sites.update()`

Updates an existing site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `subaccounts`

#### `subaccounts.patch()`

Updates an existing subaccount. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Subaccount ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `subaccounts.get()`

Gets one subaccount by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Subaccount ID. |

#### `subaccounts.insert()`

Inserts a new subaccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `subaccounts.list()`

Gets a list of subaccounts, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only subaccounts with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" . |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `subaccounts.update()`

Updates an existing subaccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `userRoles`

#### `userRoles.patch()`

Updates an existing user role. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. UserRole ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `userRoles.get()`

Gets one user role by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | User role ID. |

#### `userRoles.insert()`

Inserts a new user role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `userRoles.list()`

Retrieves a list of user roles, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only user roles with the specified IDs. |
| `params.subaccountId` | `string` | No | Select only user roles that belong to this subaccount. |
| `params.accountUserRoleOnly` | `boolean` | No | Select only account level user roles not associated with any specific subaccount. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `userRoles.update()`

Updates an existing user role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `userRoles.delete()`

Deletes an existing user role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | User role ID. |

### `targetingTemplates`

#### `targetingTemplates.patch()`

Updates an existing targeting template. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. RemarketingList ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `targetingTemplates.get()`

Gets one targeting template by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Targeting template ID. |

#### `targetingTemplates.insert()`

Inserts a new targeting template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `targetingTemplates.list()`

Retrieves a list of targeting templates, optionally filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only targeting templates with these IDs. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template". |
| `params.advertiserId` | `string` | No | Select only targeting templates with this advertiser ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `targetingTemplates.update()`

Updates an existing targeting template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `placements`

#### `placements.patch()`

Updates an existing placement. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Placement ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `placements.generatetags()`

Generates tags for a placement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.placementIds` | `string` | No | Generate tags for these placements. |
| `params.campaignId` | `string` | No | Generate placements belonging to this campaign. This is a required field. |
| `params.tagFormats` | `string` | No | Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements. |

#### `placements.get()`

Gets one placement by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Placement ID. |

#### `placements.insert()`

Inserts a new placement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `placements.list()`

Retrieves a list of placements, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only placements with these IDs. |
| `params.advertiserIds` | `string` | No | Select only placements that belong to these advertisers. |
| `params.campaignIds` | `string` | No | Select only placements that belong to these campaigns. |
| `params.siteIds` | `string` | No | Select only placements that are associated with these sites. |
| `params.directorySiteIds` | `string` | No | Select only placements that are associated with these directory sites. |
| `params.placementStrategyIds` | `string` | No | Select only placements that are associated with these placement strategies. |
| `params.contentCategoryIds` | `string` | No | Select only placements that are associated with these content categories. |
| `params.compatibilities` | `string` | No | Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. |
| `params.sizeIds` | `string` | No | Select only placements that are associated with these sizes. |
| `params.pricingTypes` | `string` | No | Select only placements with these pricing types. |
| `params.groupIds` | `string` | No | Select only placements that belong to these placement groups. |
| `params.paymentSource` | `string` | No | Select only placements with this payment source. |
| `params.searchString` | `string` | No | Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" . |
| `params.maxEndDate` | `string` | No | Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.activeStatus` | `string` | No | Select only placements with these active statuses. |
| `params.maxStartDate` | `string` | No | Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". |
| `params.minEndDate` | `string` | No | Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". |
| `params.minStartDate` | `string` | No | Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `placements.update()`

Updates an existing placement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `placementGroups`

#### `placementGroups.patch()`

Updates an existing placement group. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. Placement ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `placementGroups.get()`

Gets one placement group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Placement group ID. |

#### `placementGroups.insert()`

Inserts a new placement group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `placementGroups.list()`

Retrieves a list of placement groups, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only placement groups with these IDs. |
| `params.campaignIds` | `string` | No | Select only placement groups that belong to these campaigns. |
| `params.siteIds` | `string` | No | Select only placement groups that are associated with these sites. |
| `params.directorySiteIds` | `string` | No | Select only placement groups that are associated with these directory sites. |
| `params.placementStrategyIds` | `string` | No | Select only placement groups that are associated with these placement strategies. |
| `params.contentCategoryIds` | `string` | No | Select only placement groups that are associated with these content categories. |
| `params.pricingTypes` | `string` | No | Select only placement groups with these pricing types. |
| `params.advertiserIds` | `string` | No | Select only placement groups that belong to these advertisers. |
| `params.placementGroupType` | `string` | No | Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. |
| `params.searchString` | `string` | No | Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup". |
| `params.maxEndDate` | `string` | No | Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd". |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.activeStatus` | `string` | No | Select only placements with these active statuses. |
| `params.maxStartDate` | `string` | No | Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd". |
| `params.minEndDate` | `string` | No | Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd". |
| `params.minStartDate` | `string` | No | Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd". |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `placementGroups.update()`

Updates an existing placement group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `placementStrategies`

#### `placementStrategies.patch()`

Updates an existing placement strategy. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. PlacementStrategy ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `placementStrategies.delete()`

Deletes an existing placement strategy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Placement strategy ID. |

#### `placementStrategies.get()`

Gets one placement strategy by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Placement strategy ID. |

#### `placementStrategies.insert()`

Inserts a new placement strategy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `placementStrategies.list()`

Retrieves a list of placement strategies, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only placement strategies with these IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.searchString` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy". |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `placementStrategies.update()`

Updates an existing placement strategy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

### `platformTypes`

#### `platformTypes.get()`

Gets one platform type by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Platform type ID. |

#### `platformTypes.list()`

Retrieves a list of platform types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `postalCodes`

#### `postalCodes.get()`

Gets one postal code by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.code` | `string` | Yes | Postal code ID. |

#### `postalCodes.list()`

Retrieves a list of postal codes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `projects`

#### `projects.get()`

Gets one project by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Project ID. |

#### `projects.list()`

Retrieves a list of projects, possibly filtered. This method supports paging .

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only projects with these IDs. |
| `params.searchString` | `string` | No | Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project". |
| `params.advertiserIds` | `string` | No | Select only projects with these advertiser IDs. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `regions`

#### `regions.list()`

Retrieves a list of regions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `targetableRemarketingLists`

#### `targetableRemarketingLists.get()`

Gets one remarketing list by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Remarketing list ID. |

#### `targetableRemarketingLists.list()`

Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.advertiserId` | `string` | Yes | Required. Select only targetable remarketing lists targetable by these advertisers. |
| `params.active` | `boolean` | No | Select only active or only inactive targetable remarketing lists. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.name` | `string` | No | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list". |
| `params.pageToken` | `string` | No | Value of the nextPageToken from the previous result page. |
| `params.sortField` | `string` | No | Field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

### `reports`

#### `reports.delete()`

Deletes a report by its ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |

#### `reports.get()`

Retrieves a report by its ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |

#### `reports.insert()`

Creates a report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `reports.list()`

Retrieves list of reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous result page. |
| `params.scope` | `string` | No | The scope that defines which results are returned. |
| `params.sortField` | `string` | No | The field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |

#### `reports.run()`

Runs a report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |
| `params.synchronous` | `boolean` | No | If set and true, tries to run the report synchronously. |

#### `reports.update()`

Updates a report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |
| `params.resource` | `object` | Yes | The request body. |

#### `reports.patch()`

Updates an existing report. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |
| `params.resource` | `object` | Yes | The request body. |

### `reports.files`

#### `reports.files.get()`

Retrieves a report file by its report ID and file ID. This method supports media download.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the report. |
| `params.fileId` | `string` | Yes | The ID of the report file. |

#### `reports.files.list()`

Lists files for a report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.reportId` | `string` | Yes | The ID of the parent report. |
| `params.sortField` | `string` | No | The field by which to sort the list. |
| `params.sortOrder` | `string` | No | Order of sorted results. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | The value of the nextToken from the previous result page. |

### `reports.compatibleFields`

#### `reports.compatibleFields.query()`

Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The Campaign Manager 360 user profile ID. |
| `params.resource` | `object` | Yes | The request body. |

### `sizes`

#### `sizes.get()`

Gets one size by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | Size ID. |

#### `sizes.insert()`

Inserts a new size.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `sizes.list()`

Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only sizes with these IDs. |
| `params.height` | `integer` | No | Select only sizes with this height. |
| `params.iabStandard` | `boolean` | No | Select only IAB standard sizes. |
| `params.width` | `integer` | No | Select only sizes with this width. |

### `tvCampaignDetails`

#### `tvCampaignDetails.get()`

Gets one TvCampaignDetail by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | Required. User profile ID associated with this request. |
| `params.id` | `string` | Yes | Required. TV Campaign ID. |
| `params.accountId` | `string` | No | Required. Account ID associated with this request. |

### `tvCampaignSummaries`

#### `tvCampaignSummaries.list()`

Retrieves a list of TV campaign summaries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | Required. User profile ID associated with this request. |
| `params.accountId` | `string` | No | Required. Account ID associated with this request. |
| `params.name` | `string` | No | Required. Search string to filter the list of TV campaign summaries. Matches any substring. Required field. |

### `userProfiles`

#### `userProfiles.get()`

Gets one user profile by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | The user profile ID. |

#### `userProfiles.list()`

Retrieves list of user profiles for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `userRolePermissionGroups`

#### `userRolePermissionGroups.get()`

Gets one user role permission group by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | User role permission group ID. |

#### `userRolePermissionGroups.list()`

Gets a list of all supported user role permission groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |

### `userRolePermissions`

#### `userRolePermissions.get()`

Gets one user role permission by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `string` | Yes | User role permission ID. |

#### `userRolePermissions.list()`

Gets a list of user role permissions, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.ids` | `string` | No | Select only user role permissions with these IDs. |

### `videoFormats`

#### `videoFormats.get()`

Gets one video format by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.id` | `integer` | Yes | Video format ID. |

#### `videoFormats.list()`

Lists available video formats.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |