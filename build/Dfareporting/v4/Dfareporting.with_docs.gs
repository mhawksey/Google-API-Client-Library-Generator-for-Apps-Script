
/**
 * Google Apps Script client library for the Campaign Manager 360 API
 * Documentation URL: https://developers.google.com/doubleclick-advertisers/
 * @class
 */
class Dfareporting {
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
    this._rootUrl = 'https://dfareporting.googleapis.com/';
    this._servicePath = 'dfareporting/v4/';

    // --- Public Interface Initialization ---

    this.accountPermissionGroups = {};

    /**
     * Gets one account permission group by ID.
     * @param {string} params.id - (Required) Account permission group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accountPermissionGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups/{+id}', 'GET', params);

    /**
     * Retrieves the list of account permission groups.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accountPermissionGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups', 'GET', params);

    this.accountPermissions = {};

    /**
     * Gets one account permission by ID.
     * @param {string} params.id - (Required) Account permission ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accountPermissions.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissions/{+id}', 'GET', params);

    /**
     * Retrieves the list of account permissions.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accountPermissions.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissions', 'GET', params);

    this.accounts = {};

    /**
     * Gets one account by ID.
     * @param {string} params.id - (Required) Account ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('userprofiles/{+profileId}/accounts/{+id}', 'GET', params);

    /**
     * Retrieves the list of accounts, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active accounts. Don't set this field to select both active and non-active accounts.
     * @param {string} params.ids - Select only accounts with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'GET', params);

    /**
     * Updates an existing account.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.update = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PUT', params);

    /**
     * Updates an existing account. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Account ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.patch = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PATCH', params);

    this.accountActiveAdSummaries = {};

    /**
     * Gets the account's active ad summary by account ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.summaryAccountId - (Required) Account ID.
     * @return {object} The API response object.
     */
    this.accountActiveAdSummaries.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountActiveAdSummaries/{+summaryAccountId}', 'GET', params);

    this.accountUserProfiles = {};

    /**
     * Gets one account user profile by ID.
     * @param {string} params.id - (Required) User profile ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.accountUserProfiles.get = (params) => this._makeRequest('userprofiles/{profileId}/accountUserProfiles/{+id}', 'GET', params);

    /**
     * Inserts a new account user profile.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accountUserProfiles.insert = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'POST', params);

    /**
     * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active user profiles.
     * @param {string} params.ids - Select only user profiles with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.subaccountId - Select only user profiles with the specified subaccount ID.
     * @param {string} params.userRoleId - Select only user profiles with the specified user role ID.
     * @return {object} The API response object.
     */
    this.accountUserProfiles.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'GET', params);

    /**
     * Updates an existing account user profile.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accountUserProfiles.update = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PUT', params);

    /**
     * Updates an existing account user profile. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. AccountUserProfile ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accountUserProfiles.patch = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PATCH', params);

    this.ads = {};

    /**
     * Gets one ad by ID.
     * @param {string} params.id - (Required) Ad ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.ads.get = (params) => this._makeRequest('userprofiles/{+profileId}/ads/{+id}', 'GET', params);

    /**
     * Inserts a new ad.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.ads.insert = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'POST', params);

    /**
     * Retrieves a list of ads, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active ads.
     * @param {string} params.advertiserId - Select only ads with this advertiser ID.
     * @param {boolean} params.archived - Select only archived ads.
     * @param {string} params.audienceSegmentIds - Select only ads with these audience segment IDs.
     * @param {string} params.campaignIds - Select only ads with these campaign IDs.
     * @param {string} params.compatibility - Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     * @param {string} params.creativeIds - Select only ads with these creative IDs assigned.
     * @param {string} params.creativeOptimizationConfigurationIds - Select only ads with these creative optimization configuration IDs.
     * @param {boolean} params.dynamicClickTracker - Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     * @param {string} params.ids - Select only ads with these IDs.
     * @param {string} params.landingPageIds - Select only ads with these landing page IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.overriddenEventTagId - Select only ads with this event tag override ID.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.placementIds - Select only ads with these placement IDs assigned.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.remarketingListIds - Select only ads whose list targeting expression use these remarketing list IDs.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     * @param {string} params.sizeIds - Select only ads with these size IDs.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {boolean} params.sslCompliant - Select only ads that are SSL-compliant.
     * @param {boolean} params.sslRequired - Select only ads that require SSL.
     * @param {string} params.type - Select only ads with these types.
     * @return {object} The API response object.
     */
    this.ads.list = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'GET', params);

    /**
     * Updates an existing ad.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.ads.update = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'PUT', params);

    /**
     * Updates an existing ad. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. RemarketingList ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.ads.patch = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'PATCH', params);

    this.advertiserGroups = {};

    /**
     * Deletes an existing advertiser group.
     * @param {string} params.id - (Required) Advertiser group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.advertiserGroups.delete = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'DELETE', params);

    /**
     * Gets one advertiser group by ID.
     * @param {string} params.id - (Required) Advertiser group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.advertiserGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'GET', params);

    /**
     * Inserts a new advertiser group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'POST', params);

    /**
     * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only advertiser groups with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.advertiserGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'GET', params);

    /**
     * Updates an existing advertiser group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PUT', params);

    /**
     * Updates an existing advertiser group. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Advertiser Group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PATCH', params);

    this.advertisers = {};

    /**
     * Gets one advertiser by ID.
     * @param {string} params.id - (Required) Advertiser ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.advertisers.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+id}', 'GET', params);

    /**
     * Inserts a new advertiser.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'POST', params);

    /**
     * Retrieves a list of advertisers, possibly filtered. This method supports paging.
     * @param {string} params.advertiserGroupIds - Select only advertisers with these advertiser group IDs.
     * @param {string} params.floodlightConfigurationIds - Select only advertisers with these floodlight configuration IDs.
     * @param {string} params.ids - Select only advertisers with these IDs.
     * @param {boolean} params.includeAdvertisersWithoutGroupsOnly - Select only advertisers which do not belong to any advertiser group.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {boolean} params.onlyParent - Select only advertisers which use another advertiser's floodlight configuration.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.status - Select only advertisers with the specified status.
     * @param {string} params.subaccountId - Select only advertisers with these subaccount IDs.
     * @return {object} The API response object.
     */
    this.advertisers.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'GET', params);

    /**
     * Updates an existing advertiser.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PUT', params);

    /**
     * Updates an existing advertiser. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Advertiser ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PATCH', params);

    this.billingAssignments = {};

    /**
     * Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
     * @param {string} params.billingProfileId - (Required) Billing profile ID of this billing assignment.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAssignments.insert = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'POST', params);

    /**
     * Retrieves a list of billing assignments.
     * @param {string} params.billingProfileId - (Required) Billing profile ID of this billing assignment.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.billingAssignments.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'GET', params);

    this.billingProfiles = {};

    /**
     * Gets one billing profile by ID.
     * @param {string} params.id - (Required) Billing Profile ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.billingProfiles.get = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+id}', 'GET', params);

    /**
     * Retrieves a list of billing profiles, possibly filtered. This method supports paging.
     * @param {string} params.currency_code - Select only billing profile with currency.
     * @param {string} params.ids - Select only billing profile with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.name - Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile".
     * @param {boolean} params.onlySuggestion - Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.status - Select only billing profile with the specified status.
     * @param {string} params.subaccountIds - Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported.
     * @return {object} The API response object.
     */
    this.billingProfiles.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'GET', params);

    /**
     * Updates an existing billing profile.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingProfiles.update = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'PUT', params);

    this.billingRates = {};

    /**
     * Retrieves a list of billing rates. This method supports paging.
     * @param {string} params.billingProfileId - (Required) Billing profile ID of this billing rate.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.billingRates.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingRates', 'GET', params);

    this.browsers = {};

    /**
     * Retrieves a list of browsers.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.browsers.list = (params) => this._makeRequest('userprofiles/{+profileId}/browsers', 'GET', params);

    this.campaignCreativeAssociations = {};

    /**
     * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
     * @param {string} params.campaignId - (Required) Campaign ID in this association.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.campaignCreativeAssociations.insert = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'POST', params);

    /**
     * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
     * @param {string} params.campaignId - (Required) Campaign ID in this association.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.campaignCreativeAssociations.list = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'GET', params);

    this.campaigns = {};

    /**
     * Gets one campaign by ID.
     * @param {string} params.id - (Required) Campaign ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.campaigns.get = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+id}', 'GET', params);

    /**
     * Inserts a new campaign.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.campaigns.insert = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'POST', params);

    /**
     * Retrieves a list of campaigns, possibly filtered. This method supports paging.
     * @param {string} params.advertiserGroupIds - Select only campaigns whose advertisers belong to these advertiser groups.
     * @param {string} params.advertiserIds - Select only campaigns that belong to these advertisers.
     * @param {boolean} params.archived - Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     * @param {boolean} params.atLeastOneOptimizationActivity - Select only campaigns that have at least one optimization activity.
     * @param {string} params.excludedIds - Exclude campaigns with these IDs.
     * @param {string} params.ids - Select only campaigns with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.overriddenEventTagId - Select only campaigns that have overridden this event tag ID.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.subaccountId - Select only campaigns that belong to this subaccount.
     * @return {object} The API response object.
     */
    this.campaigns.list = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'GET', params);

    /**
     * Updates an existing campaign.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.campaigns.update = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PUT', params);

    /**
     * Updates an existing campaign. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Campaign ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.campaigns.patch = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PATCH', params);

    this.changeLogs = {};

    /**
     * Gets one change log by ID.
     * @param {string} params.id - (Required) Change log ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.changeLogs.get = (params) => this._makeRequest('userprofiles/{+profileId}/changeLogs/{+id}', 'GET', params);

    /**
     * Retrieves a list of change logs. This method supports paging.
     * @param {string} params.action - Select only change logs with the specified action.
     * @param {string} params.ids - Select only change logs with these IDs.
     * @param {string} params.maxChangeTime - Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.minChangeTime - Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {string} params.objectIds - Select only change logs with these object IDs.
     * @param {string} params.objectType - Select only change logs with the specified object type.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Select only change logs whose object ID, user name, old or new values match the search string.
     * @param {string} params.userProfileIds - Select only change logs with these user profile IDs.
     * @return {object} The API response object.
     */
    this.changeLogs.list = (params) => this._makeRequest('userprofiles/{+profileId}/changeLogs', 'GET', params);

    this.cities = {};

    /**
     * Retrieves a list of cities, possibly filtered.
     * @param {string} params.countryDartIds - Select only cities from these countries.
     * @param {string} params.dartIds - Select only cities with these DART IDs.
     * @param {string} params.namePrefix - Select only cities with names starting with this prefix.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.regionDartIds - Select only cities from these regions.
     * @return {object} The API response object.
     */
    this.cities.list = (params) => this._makeRequest('userprofiles/{+profileId}/cities', 'GET', params);

    this.connectionTypes = {};

    /**
     * Gets one connection type by ID.
     * @param {string} params.id - (Required) Connection type ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.connectionTypes.get = (params) => this._makeRequest('userprofiles/{+profileId}/connectionTypes/{+id}', 'GET', params);

    /**
     * Retrieves a list of connection types.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.connectionTypes.list = (params) => this._makeRequest('userprofiles/{+profileId}/connectionTypes', 'GET', params);

    this.contentCategories = {};

    /**
     * Deletes an existing content category.
     * @param {string} params.id - (Required) Content category ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.contentCategories.delete = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'DELETE', params);

    /**
     * Gets one content category by ID.
     * @param {string} params.id - (Required) Content category ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.contentCategories.get = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'GET', params);

    /**
     * Inserts a new content category.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.contentCategories.insert = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'POST', params);

    /**
     * Retrieves a list of content categories, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only content categories with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.contentCategories.list = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'GET', params);

    /**
     * Updates an existing content category.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.contentCategories.update = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PUT', params);

    /**
     * Updates an existing content category. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. ContentCategory ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.contentCategories.patch = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PATCH', params);

    this.conversions = {};

    /**
     * Inserts conversions.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversions.batchinsert = (params) => this._makeRequest('userprofiles/{profileId}/conversions/batchinsert', 'POST', params);

    /**
     * Updates existing conversions.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversions.batchupdate = (params) => this._makeRequest('userprofiles/{profileId}/conversions/batchupdate', 'POST', params);

    this.countries = {};

    /**
     * Gets one country by ID.
     * @param {string} params.dartId - (Required) Country DART ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.countries.get = (params) => this._makeRequest('userprofiles/{+profileId}/countries/{+dartId}', 'GET', params);

    /**
     * Retrieves a list of countries.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.countries.list = (params) => this._makeRequest('userprofiles/{+profileId}/countries', 'GET', params);

    this.creativeAssets = {};

    /**
     * Inserts a new creative asset.
     * @param {string} params.advertiserId - (Required) Advertiser ID of this creative. This is a required field.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeAssets.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets', 'POST', params);

    this.creativeFields = {};

    /**
     * Deletes an existing creative field.
     * @param {string} params.id - (Required) Creative Field ID
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creativeFields.delete = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'DELETE', params);

    /**
     * Gets one creative field by ID.
     * @param {string} params.id - (Required) Creative Field ID
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creativeFields.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'GET', params);

    /**
     * Inserts a new creative field.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFields.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'POST', params);

    /**
     * Retrieves a list of creative fields, possibly filtered. This method supports paging.
     * @param {string} params.advertiserIds - Select only creative fields that belong to these advertisers.
     * @param {string} params.ids - Select only creative fields with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.creativeFields.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'GET', params);

    /**
     * Updates an existing creative field.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFields.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PUT', params);

    /**
     * Updates an existing creative field. This method supports patch semantics.
     * @param {string} params.id - (Required) CreativeField ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFields.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PATCH', params);

    this.creativeFieldValues = {};

    /**
     * Deletes an existing creative field value.
     * @param {string} params.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} params.id - (Required) Creative Field Value ID
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.delete = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'DELETE', params);

    /**
     * Gets one creative field value by ID.
     * @param {string} params.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} params.id - (Required) Creative Field Value ID
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'GET', params);

    /**
     * Inserts a new creative field value.
     * @param {string} params.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'POST', params);

    /**
     * Retrieves a list of creative field values, possibly filtered. This method supports paging.
     * @param {string} params.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} params.ids - Select only creative field values with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'GET', params);

    /**
     * Updates an existing creative field value.
     * @param {string} params.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PUT', params);

    /**
     * Updates an existing creative field value. This method supports patch semantics.
     * @param {string} params.creativeFieldId - (Required) CreativeField ID.
     * @param {string} params.id - (Required) CreativeFieldValue ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeFieldValues.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PATCH', params);

    this.creativeGroups = {};

    /**
     * Gets one creative group by ID.
     * @param {string} params.id - (Required) Creative group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creativeGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups/{+id}', 'GET', params);

    /**
     * Inserts a new creative group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'POST', params);

    /**
     * Retrieves a list of creative groups, possibly filtered. This method supports paging.
     * @param {string} params.advertiserIds - Select only creative groups that belong to these advertisers.
     * @param {integer} params.groupNumber - Select only creative groups that belong to this subgroup.
     * @param {string} params.ids - Select only creative groups with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.creativeGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'GET', params);

    /**
     * Updates an existing creative group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PUT', params);

    /**
     * Updates an existing creative group. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Creative Group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creativeGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PATCH', params);

    this.creatives = {};

    /**
     * Gets one creative by ID.
     * @param {string} params.id - (Required) Creative ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.creatives.get = (params) => this._makeRequest('userprofiles/{+profileId}/creatives/{+id}', 'GET', params);

    /**
     * Inserts a new creative.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creatives.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'POST', params);

    /**
     * Retrieves a list of creatives, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active creatives. Leave blank to select active and inactive creatives.
     * @param {string} params.advertiserId - Select only creatives with this advertiser ID.
     * @param {boolean} params.archived - Select only archived creatives. Leave blank to select archived and unarchived creatives.
     * @param {string} params.campaignId - Select only creatives with this campaign ID.
     * @param {string} params.companionCreativeIds - Select only in-stream video creatives with these companion IDs.
     * @param {string} params.creativeFieldIds - Select only creatives with these creative field IDs.
     * @param {string} params.ids - Select only creatives with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.renderingIds - Select only creatives with these rendering IDs.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     * @param {string} params.sizeIds - Select only creatives with these size IDs.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.studioCreativeId - Select only creatives corresponding to this Studio creative ID.
     * @param {string} params.types - Select only creatives with these creative types.
     * @return {object} The API response object.
     */
    this.creatives.list = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'GET', params);

    /**
     * Updates an existing creative.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creatives.update = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PUT', params);

    /**
     * Updates an existing creative. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Creative ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.creatives.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PATCH', params);

    this.dimensionValues = {};

    /**
     * Retrieves list of report dimension values for a list of filters.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - The value of the nextToken from the previous result page.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.dimensionValues.query = (params) => this._makeRequest('userprofiles/{profileId}/dimensionvalues/query', 'POST', params);

    this.directorySites = {};

    /**
     * Gets one directory site by ID.
     * @param {string} params.id - (Required) Directory site ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.directorySites.get = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites/{+id}', 'GET', params);

    /**
     * Inserts a new directory site.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.directorySites.insert = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'POST', params);

    /**
     * Retrieves a list of directory sites, possibly filtered. This method supports paging.
     * @param {boolean} params.acceptsInStreamVideoPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} params.acceptsInterstitialPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} params.acceptsPublisherPaidPlacements - Select only directory sites that accept publisher paid placements. This field can be left blank.
     * @param {boolean} params.active - Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
     * @param {string} params.dfpNetworkCode - Select only directory sites with this Ad Manager network code.
     * @param {string} params.ids - Select only directory sites with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.directorySites.list = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'GET', params);

    this.dynamicFeeds = {};

    /**
     * Gets a dynamic feed by ID.
     * @param {string} params.dynamicFeedId - (Required) Required. Dynamic feed ID.
     * @return {object} The API response object.
     */
    this.dynamicFeeds.get = (params) => this._makeRequest('studio/dynamicFeeds/{+dynamicFeedId}', 'GET', params);

    /**
     * Inserts a new dynamic feed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.dynamicFeeds.insert = (params) => this._makeRequest('studio/dynamicFeeds', 'POST', params);

    this.dynamicProfiles = {};

    /**
     * Gets a dynamic profile by ID.
     * @param {string} params.dynamicProfileId - (Required) Required. Dynamic profile ID.
     * @return {object} The API response object.
     */
    this.dynamicProfiles.get = (params) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}', 'GET', params);

    /**
     * Inserts a new dynamic profile.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.dynamicProfiles.insert = (params) => this._makeRequest('studio/dynamicProfiles', 'POST', params);

    /**
     * Updates an existing dynamic profile.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.dynamicProfiles.update = (params) => this._makeRequest('studio/dynamicProfiles', 'PUT', params);

    this.dynamicTargetingKeys = {};

    /**
     * Deletes an existing dynamic targeting key.
     * @param {string} params.name - (Required) Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
     * @param {string} params.objectId - (Required) ID of the object of this dynamic targeting key. This is a required field.
     * @param {string} params.objectType - (Required) Required. Type of the object of this dynamic targeting key. This is a required field.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.dynamicTargetingKeys.delete = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys/{+objectId}', 'DELETE', params);

    /**
     * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.dynamicTargetingKeys.insert = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'POST', params);

    /**
     * Retrieves a list of dynamic targeting keys.
     * @param {string} params.advertiserId - Select only dynamic targeting keys whose object has this advertiser ID.
     * @param {string} params.names - Select only dynamic targeting keys exactly matching these names.
     * @param {string} params.objectId - Select only dynamic targeting keys with this object ID.
     * @param {string} params.objectType - Select only dynamic targeting keys with this object type.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.dynamicTargetingKeys.list = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'GET', params);

    this.eventTags = {};

    /**
     * Deletes an existing event tag.
     * @param {string} params.id - (Required) Event tag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.eventTags.delete = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'DELETE', params);

    /**
     * Gets one event tag by ID.
     * @param {string} params.id - (Required) Event tag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.eventTags.get = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'GET', params);

    /**
     * Inserts a new event tag.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventTags.insert = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'POST', params);

    /**
     * Retrieves a list of event tags, possibly filtered.
     * @param {string} params.adId - Select only event tags that belong to this ad.
     * @param {string} params.advertiserId - Select only event tags that belong to this advertiser.
     * @param {string} params.campaignId - Select only event tags that belong to this campaign.
     * @param {boolean} params.definitionsOnly - Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
     * @param {boolean} params.enabled - Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
     * @param {string} params.eventTagTypes - Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
     * @param {string} params.ids - Select only event tags with these IDs.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.eventTags.list = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'GET', params);

    /**
     * Updates an existing event tag.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventTags.update = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PUT', params);

    /**
     * Updates an existing event tag. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. EventTag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.eventTags.patch = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PATCH', params);

    this.files = {};

    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     * @param {string} params.fileId - (Required) The ID of the report file.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @return {object} The API response object.
     */
    this.files.get = (params) => this._makeRequest('reports/{reportId}/files/{fileId}', 'GET', params);

    /**
     * Lists files for a user profile.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - The value of the nextToken from the previous result page.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.scope - The scope that defines which results are returned.
     * @param {string} params.sortField - The field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.files.list = (params) => this._makeRequest('userprofiles/{profileId}/files', 'GET', params);

    this.floodlightActivityGroups = {};

    /**
     * Gets one floodlight activity group by ID.
     * @param {string} params.id - (Required) Floodlight activity Group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightActivityGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups/{+id}', 'GET', params);

    /**
     * Inserts a new floodlight activity group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivityGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'POST', params);

    /**
     * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
     * @param {string} params.advertiserId - Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {string} params.floodlightConfigurationId - Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} params.ids - Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.type - Select only floodlight activity groups with the specified floodlight activity group type.
     * @return {object} The API response object.
     */
    this.floodlightActivityGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'GET', params);

    /**
     * Updates an existing floodlight activity group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivityGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PUT', params);

    /**
     * Updates an existing floodlight activity group. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. EventTag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivityGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PATCH', params);

    this.floodlightActivities = {};

    /**
     * Deletes an existing floodlight activity.
     * @param {string} params.id - (Required) Floodlight activity ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightActivities.delete = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'DELETE', params);

    /**
     * Generates a tag for a floodlight activity.
     * @param {string} params.floodlightActivityId - Floodlight activity ID for which we want to generate a tag.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightActivities.generatetag = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/generatetag', 'POST', params);

    /**
     * Gets one floodlight activity by ID.
     * @param {string} params.id - (Required) Floodlight activity ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightActivities.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'GET', params);

    /**
     * Inserts a new floodlight activity.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivities.insert = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'POST', params);

    /**
     * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
     * @param {string} params.advertiserId - Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} params.floodlightActivityGroupIds - Select only floodlight activities with the specified floodlight activity group IDs.
     * @param {string} params.floodlightActivityGroupName - Select only floodlight activities with the specified floodlight activity group name.
     * @param {string} params.floodlightActivityGroupTagString - Select only floodlight activities with the specified floodlight activity group tag string.
     * @param {string} params.floodlightActivityGroupType - Select only floodlight activities with the specified floodlight activity group type.
     * @param {string} params.floodlightConfigurationId - Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} params.ids - Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.tagString - Select only floodlight activities with the specified tag string.
     * @return {object} The API response object.
     */
    this.floodlightActivities.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'GET', params);

    /**
     * Updates an existing floodlight activity.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivities.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PUT', params);

    /**
     * Updates an existing floodlight activity. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. EventTag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightActivities.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PATCH', params);

    this.floodlightConfigurations = {};

    /**
     * Gets one floodlight configuration by ID.
     * @param {string} params.id - (Required) Floodlight configuration ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightConfigurations.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations/{+id}', 'GET', params);

    /**
     * Retrieves a list of floodlight configurations, possibly filtered.
     * @param {string} params.ids - Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.floodlightConfigurations.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'GET', params);

    /**
     * Updates an existing floodlight configuration.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightConfigurations.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PUT', params);

    /**
     * Updates an existing floodlight configuration. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. EventTag ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightConfigurations.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PATCH', params);

    this.inventoryItems = {};

    /**
     * Gets one inventory item by ID.
     * @param {string} params.id - (Required) Inventory item ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.projectId - (Required) Project ID for order documents.
     * @return {object} The API response object.
     */
    this.inventoryItems.get = (params) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/inventoryItems/{+id}', 'GET', params);

    /**
     * Retrieves a list of inventory items, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only inventory items with these IDs.
     * @param {boolean} params.inPlan - Select only inventory items that are in plan.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.orderId - Select only inventory items that belong to specified orders.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.projectId - (Required) Project ID for order documents.
     * @param {string} params.siteId - Select only inventory items that are associated with these sites.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.type - Select only inventory items with this type.
     * @return {object} The API response object.
     */
    this.inventoryItems.list = (params) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/inventoryItems', 'GET', params);

    this.advertiserInvoices = {};

    /**
     * Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.
     * @param {string} params.advertiserId - (Required) Advertiser ID of this invoice.
     * @param {string} params.issueMonth - Month for which invoices are needed in the format YYYYMM. Required field
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.advertiserInvoices.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+advertiserId}/invoices', 'GET', params);

    this.advertiserLandingPages = {};

    /**
     * Gets one landing page by ID.
     * @param {string} params.id - (Required) Landing page ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.advertiserLandingPages.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages/{+id}', 'GET', params);

    /**
     * Inserts a new landing page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserLandingPages.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'POST', params);

    /**
     * Retrieves a list of landing pages.
     * @param {string} params.advertiserIds - Select only landing pages that belong to these advertisers.
     * @param {boolean} params.archived - Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
     * @param {string} params.campaignIds - Select only landing pages that are associated with these campaigns.
     * @param {string} params.ids - Select only landing pages with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.subaccountId - Select only landing pages that belong to this subaccount.
     * @return {object} The API response object.
     */
    this.advertiserLandingPages.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'GET', params);

    /**
     * Updates an existing landing page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserLandingPages.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PUT', params);

    /**
     * Updates an existing landing page. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Landing Page ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertiserLandingPages.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PATCH', params);

    this.languages = {};

    /**
     * Retrieves a list of languages.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.languages.list = (params) => this._makeRequest('userprofiles/{+profileId}/languages', 'GET', params);

    this.metros = {};

    /**
     * Retrieves a list of metros.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.metros.list = (params) => this._makeRequest('userprofiles/{+profileId}/metros', 'GET', params);

    this.mobileApps = {};

    /**
     * Gets one mobile app by ID.
     * @param {string} params.id - (Required) Mobile app ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.mobileApps.get = (params) => this._makeRequest('userprofiles/{+profileId}/mobileApps/{+id}', 'GET', params);

    /**
     * Retrieves list of available mobile apps.
     * @param {string} params.directories - Select only apps from these directories.
     * @param {string} params.ids - Select only apps with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
     * @return {object} The API response object.
     */
    this.mobileApps.list = (params) => this._makeRequest('userprofiles/{+profileId}/mobileApps', 'GET', params);

    this.mobileCarriers = {};

    /**
     * Gets one mobile carrier by ID.
     * @param {string} params.id - (Required) Mobile carrier ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.mobileCarriers.get = (params) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers/{+id}', 'GET', params);

    /**
     * Retrieves a list of mobile carriers.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.mobileCarriers.list = (params) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers', 'GET', params);

    this.operatingSystems = {};

    /**
     * Gets one operating system by DART ID.
     * @param {string} params.dartId - (Required) Operating system DART ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.operatingSystems.get = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystems/{+dartId}', 'GET', params);

    /**
     * Retrieves a list of operating systems.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.operatingSystems.list = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystems', 'GET', params);

    this.operatingSystemVersions = {};

    /**
     * Gets one operating system version by ID.
     * @param {string} params.id - (Required) Operating system version ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.operatingSystemVersions.get = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions/{+id}', 'GET', params);

    /**
     * Retrieves a list of operating system versions.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.operatingSystemVersions.list = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions', 'GET', params);

    this.orders = {};

    /**
     * Gets one order by ID.
     * @param {string} params.id - (Required) Order ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.projectId - (Required) Project ID for orders.
     * @return {object} The API response object.
     */
    this.orders.get = (params) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/orders/{+id}', 'GET', params);

    /**
     * Retrieves a list of orders, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only orders with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.projectId - (Required) Project ID for orders.
     * @param {string} params.searchString - Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
     * @param {string} params.siteId - Select only orders that are associated with these site IDs.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.orders.list = (params) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/orders', 'GET', params);

    this.remarketingLists = {};

    /**
     * Updates an existing remarketing list. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. RemarketingList ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.remarketingLists.patch = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PATCH', params);

    /**
     * Gets one remarketing list by ID.
     * @param {string} params.id - (Required) Remarketing list ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.remarketingLists.get = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists/{+id}', 'GET', params);

    /**
     * Inserts a new remarketing list.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.remarketingLists.insert = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'POST', params);

    /**
     * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active or only inactive remarketing lists.
     * @param {string} params.advertiserId - (Required) Required. Select only remarketing lists owned by this advertiser.
     * @param {string} params.floodlightActivityId - Select only remarketing lists that have this floodlight activity ID.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.name - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.remarketingLists.list = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'GET', params);

    /**
     * Updates an existing remarketing list.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.remarketingLists.update = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PUT', params);

    this.remarketingListShares = {};

    /**
     * Updates an existing remarketing list share. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. RemarketingList ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.remarketingListShares.patch = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PATCH', params);

    /**
     * Gets one remarketing list share by remarketing list ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.remarketingListId - (Required) Remarketing list ID.
     * @return {object} The API response object.
     */
    this.remarketingListShares.get = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares/{+remarketingListId}', 'GET', params);

    /**
     * Updates an existing remarketing list share.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.remarketingListShares.update = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PUT', params);

    this.sites = {};

    /**
     * Updates an existing site. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Site ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.patch = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'PATCH', params);

    /**
     * Gets one site by ID.
     * @param {string} params.id - (Required) Site ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.sites.get = (params) => this._makeRequest('userprofiles/{+profileId}/sites/{+id}', 'GET', params);

    /**
     * Inserts a new site.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.insert = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'POST', params);

    /**
     * Retrieves a list of sites, possibly filtered. This method supports paging.
     * @param {boolean} params.acceptsInStreamVideoPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} params.acceptsInterstitialPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} params.acceptsPublisherPaidPlacements - Select only sites that accept publisher paid placements.
     * @param {boolean} params.adWordsSite - Select only AdWords sites.
     * @param {boolean} params.approved - Select only approved sites.
     * @param {string} params.campaignIds - Select only sites with these campaign IDs.
     * @param {string} params.directorySiteIds - Select only sites with these directory site IDs.
     * @param {string} params.ids - Select only sites with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.subaccountId - Select only sites with this subaccount ID.
     * @param {boolean} params.unmappedSite - Select only sites that have not been mapped to a directory site.
     * @return {object} The API response object.
     */
    this.sites.list = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'GET', params);

    /**
     * Updates an existing site.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.update = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'PUT', params);

    this.subaccounts = {};

    /**
     * Updates an existing subaccount. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Subaccount ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subaccounts.patch = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PATCH', params);

    /**
     * Gets one subaccount by ID.
     * @param {string} params.id - (Required) Subaccount ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.subaccounts.get = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts/{+id}', 'GET', params);

    /**
     * Inserts a new subaccount.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subaccounts.insert = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'POST', params);

    /**
     * Gets a list of subaccounts, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only subaccounts with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.subaccounts.list = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'GET', params);

    /**
     * Updates an existing subaccount.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subaccounts.update = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PUT', params);

    this.userRoles = {};

    /**
     * Updates an existing user role. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. UserRole ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userRoles.patch = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PATCH', params);

    /**
     * Gets one user role by ID.
     * @param {string} params.id - (Required) User role ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRoles.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'GET', params);

    /**
     * Inserts a new user role.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userRoles.insert = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'POST', params);

    /**
     * Retrieves a list of user roles, possibly filtered. This method supports paging.
     * @param {boolean} params.accountUserRoleOnly - Select only account level user roles not associated with any specific subaccount.
     * @param {string} params.ids - Select only user roles with the specified IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @param {string} params.subaccountId - Select only user roles that belong to this subaccount.
     * @return {object} The API response object.
     */
    this.userRoles.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'GET', params);

    /**
     * Updates an existing user role.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userRoles.update = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PUT', params);

    /**
     * Deletes an existing user role.
     * @param {string} params.id - (Required) User role ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRoles.delete = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'DELETE', params);

    this.targetingTemplates = {};

    /**
     * Updates an existing targeting template. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. RemarketingList ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.targetingTemplates.patch = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PATCH', params);

    /**
     * Gets one targeting template by ID.
     * @param {string} params.id - (Required) Targeting template ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.targetingTemplates.get = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates/{+id}', 'GET', params);

    /**
     * Inserts a new targeting template.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.targetingTemplates.insert = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'POST', params);

    /**
     * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
     * @param {string} params.advertiserId - Select only targeting templates with this advertiser ID.
     * @param {string} params.ids - Select only targeting templates with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.targetingTemplates.list = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'GET', params);

    /**
     * Updates an existing targeting template.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.targetingTemplates.update = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PUT', params);

    this.placements = {};

    /**
     * Updates an existing placement. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Placement ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placements.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'PATCH', params);

    /**
     * Generates tags for a placement.
     * @param {string} params.campaignId - Generate placements belonging to this campaign. This is a required field.
     * @param {string} params.placementIds - Generate tags for these placements.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.tagFormats - Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
     * @return {object} The API response object.
     */
    this.placements.generatetags = (params) => this._makeRequest('userprofiles/{+profileId}/placements/generatetags', 'POST', params);

    /**
     * Gets one placement by ID.
     * @param {string} params.id - (Required) Placement ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.placements.get = (params) => this._makeRequest('userprofiles/{+profileId}/placements/{+id}', 'GET', params);

    /**
     * Inserts a new placement.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placements.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'POST', params);

    /**
     * Retrieves a list of placements, possibly filtered. This method supports paging.
     * @param {string} params.activeStatus - Select only placements with these active statuses.
     * @param {string} params.advertiserIds - Select only placements that belong to these advertisers.
     * @param {string} params.campaignIds - Select only placements that belong to these campaigns.
     * @param {string} params.compatibilities - Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     * @param {string} params.contentCategoryIds - Select only placements that are associated with these content categories.
     * @param {string} params.directorySiteIds - Select only placements that are associated with these directory sites.
     * @param {string} params.groupIds - Select only placements that belong to these placement groups.
     * @param {string} params.ids - Select only placements with these IDs.
     * @param {string} params.maxEndDate - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.maxStartDate - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.minEndDate - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.minStartDate - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.paymentSource - Select only placements with this payment source.
     * @param {string} params.placementStrategyIds - Select only placements that are associated with these placement strategies.
     * @param {string} params.pricingTypes - Select only placements with these pricing types.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
     * @param {string} params.siteIds - Select only placements that are associated with these sites.
     * @param {string} params.sizeIds - Select only placements that are associated with these sizes.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.placements.list = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'GET', params);

    /**
     * Updates an existing placement.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placements.update = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'PUT', params);

    this.placementGroups = {};

    /**
     * Updates an existing placement group. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. Placement ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PATCH', params);

    /**
     * Gets one placement group by ID.
     * @param {string} params.id - (Required) Placement group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.placementGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups/{+id}', 'GET', params);

    /**
     * Inserts a new placement group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'POST', params);

    /**
     * Retrieves a list of placement groups, possibly filtered. This method supports paging.
     * @param {string} params.activeStatus - Select only placements with these active statuses.
     * @param {string} params.advertiserIds - Select only placement groups that belong to these advertisers.
     * @param {string} params.campaignIds - Select only placement groups that belong to these campaigns.
     * @param {string} params.contentCategoryIds - Select only placement groups that are associated with these content categories.
     * @param {string} params.directorySiteIds - Select only placement groups that are associated with these directory sites.
     * @param {string} params.ids - Select only placement groups with these IDs.
     * @param {string} params.maxEndDate - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.maxStartDate - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.minEndDate - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.minStartDate - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.placementGroupType - Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     * @param {string} params.placementStrategyIds - Select only placement groups that are associated with these placement strategies.
     * @param {string} params.pricingTypes - Select only placement groups with these pricing types.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     * @param {string} params.siteIds - Select only placement groups that are associated with these sites.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.placementGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'GET', params);

    /**
     * Updates an existing placement group.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PUT', params);

    this.placementStrategies = {};

    /**
     * Updates an existing placement strategy. This method supports patch semantics.
     * @param {string} params.id - (Required) Required. PlacementStrategy ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementStrategies.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PATCH', params);

    /**
     * Deletes an existing placement strategy.
     * @param {string} params.id - (Required) Placement strategy ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.placementStrategies.delete = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'DELETE', params);

    /**
     * Gets one placement strategy by ID.
     * @param {string} params.id - (Required) Placement strategy ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.placementStrategies.get = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'GET', params);

    /**
     * Inserts a new placement strategy.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementStrategies.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'POST', params);

    /**
     * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
     * @param {string} params.ids - Select only placement strategies with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.placementStrategies.list = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'GET', params);

    /**
     * Updates an existing placement strategy.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.placementStrategies.update = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PUT', params);

    this.platformTypes = {};

    /**
     * Gets one platform type by ID.
     * @param {string} params.id - (Required) Platform type ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.platformTypes.get = (params) => this._makeRequest('userprofiles/{+profileId}/platformTypes/{+id}', 'GET', params);

    /**
     * Retrieves a list of platform types.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.platformTypes.list = (params) => this._makeRequest('userprofiles/{+profileId}/platformTypes', 'GET', params);

    this.postalCodes = {};

    /**
     * Gets one postal code by ID.
     * @param {string} params.code - (Required) Postal code ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.postalCodes.get = (params) => this._makeRequest('userprofiles/{+profileId}/postalCodes/{+code}', 'GET', params);

    /**
     * Retrieves a list of postal codes.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.postalCodes.list = (params) => this._makeRequest('userprofiles/{+profileId}/postalCodes', 'GET', params);

    this.projects = {};

    /**
     * Gets one project by ID.
     * @param {string} params.id - (Required) Project ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('userprofiles/{+profileId}/projects/{+id}', 'GET', params);

    /**
     * Retrieves a list of projects, possibly filtered. This method supports paging .
     * @param {string} params.advertiserIds - Select only projects with these advertiser IDs.
     * @param {string} params.ids - Select only projects with these IDs.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.searchString - Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.projects.list = (params) => this._makeRequest('userprofiles/{+profileId}/projects', 'GET', params);

    this.regions = {};

    /**
     * Retrieves a list of regions.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.regions.list = (params) => this._makeRequest('userprofiles/{+profileId}/regions', 'GET', params);

    this.targetableRemarketingLists = {};

    /**
     * Gets one remarketing list by ID.
     * @param {string} params.id - (Required) Remarketing list ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.targetableRemarketingLists.get = (params) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists/{+id}', 'GET', params);

    /**
     * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
     * @param {boolean} params.active - Select only active or only inactive targetable remarketing lists.
     * @param {string} params.advertiserId - (Required) Required. Select only targetable remarketing lists targetable by these advertisers.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.name - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string} params.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {string} params.sortField - Field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.targetableRemarketingLists.list = (params) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists', 'GET', params);

    this.reports = {};

    /**
     * Deletes a report by its ID.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @return {object} The API response object.
     */
    this.reports.delete = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'DELETE', params);

    /**
     * Retrieves a report by its ID.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @return {object} The API response object.
     */
    this.reports.get = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'GET', params);

    /**
     * Creates a report.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.insert = (params) => this._makeRequest('userprofiles/{profileId}/reports', 'POST', params);

    /**
     * Retrieves list of reports.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - The value of the nextToken from the previous result page.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.scope - The scope that defines which results are returned.
     * @param {string} params.sortField - The field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.reports.list = (params) => this._makeRequest('userprofiles/{profileId}/reports', 'GET', params);

    /**
     * Runs a report.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @param {boolean} params.synchronous - If set and true, tries to run the report synchronously.
     * @return {object} The API response object.
     */
    this.reports.run = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/run', 'POST', params);

    /**
     * Updates a report.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.update = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PUT', params);

    /**
     * Updates an existing report. This method supports patch semantics.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.patch = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PATCH', params);

    this.reports.files = {};

    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     * @param {string} params.fileId - (Required) The ID of the report file.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the report.
     * @return {object} The API response object.
     */
    this.reports.files.get = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files/{fileId}', 'GET', params);

    /**
     * Lists files for a report.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - The value of the nextToken from the previous result page.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} params.reportId - (Required) The ID of the parent report.
     * @param {string} params.sortField - The field by which to sort the list.
     * @param {string} params.sortOrder - Order of sorted results.
     * @return {object} The API response object.
     */
    this.reports.files.list = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files', 'GET', params);

    this.reports.compatibleFields = {};

    /**
     * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
     * @param {string} params.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.compatibleFields.query = (params) => this._makeRequest('userprofiles/{profileId}/reports/compatiblefields/query', 'POST', params);

    this.sizes = {};

    /**
     * Gets one size by ID.
     * @param {string} params.id - (Required) Size ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.sizes.get = (params) => this._makeRequest('userprofiles/{+profileId}/sizes/{+id}', 'GET', params);

    /**
     * Inserts a new size.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sizes.insert = (params) => this._makeRequest('userprofiles/{+profileId}/sizes', 'POST', params);

    /**
     * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
     * @param {integer} params.height - Select only sizes with this height.
     * @param {boolean} params.iabStandard - Select only IAB standard sizes.
     * @param {string} params.ids - Select only sizes with these IDs.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @param {integer} params.width - Select only sizes with this width.
     * @return {object} The API response object.
     */
    this.sizes.list = (params) => this._makeRequest('userprofiles/{+profileId}/sizes', 'GET', params);

    this.tvCampaignDetails = {};

    /**
     * Gets one TvCampaignDetail by ID.
     * @param {string} params.accountId - Required. Account ID associated with this request.
     * @param {string} params.id - (Required) Required. TV Campaign ID.
     * @param {string} params.profileId - (Required) Required. User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.tvCampaignDetails.get = (params) => this._makeRequest('userprofiles/{+profileId}/tvCampaignDetails/{+id}', 'GET', params);

    this.tvCampaignSummaries = {};

    /**
     * Retrieves a list of TV campaign summaries.
     * @param {string} params.accountId - Required. Account ID associated with this request.
     * @param {string} params.name - Required. Search string to filter the list of TV campaign summaries. Matches any substring. Required field.
     * @param {string} params.profileId - (Required) Required. User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.tvCampaignSummaries.list = (params) => this._makeRequest('userprofiles/{+profileId}/tvCampaignSummaries', 'GET', params);

    this.userProfiles = {};

    /**
     * Gets one user profile by ID.
     * @param {string} params.profileId - (Required) The user profile ID.
     * @return {object} The API response object.
     */
    this.userProfiles.get = (params) => this._makeRequest('userprofiles/{profileId}', 'GET', params);

    /**
     * Retrieves list of user profiles for a user.
     * @return {object} The API response object.
     */
    this.userProfiles.list = (params) => this._makeRequest('userprofiles', 'GET', params);

    this.userRolePermissionGroups = {};

    /**
     * Gets one user role permission group by ID.
     * @param {string} params.id - (Required) User role permission group ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRolePermissionGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups/{+id}', 'GET', params);

    /**
     * Gets a list of all supported user role permission groups.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRolePermissionGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups', 'GET', params);

    this.userRolePermissions = {};

    /**
     * Gets one user role permission by ID.
     * @param {string} params.id - (Required) User role permission ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRolePermissions.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions/{+id}', 'GET', params);

    /**
     * Gets a list of user role permissions, possibly filtered.
     * @param {string} params.ids - Select only user role permissions with these IDs.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.userRolePermissions.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions', 'GET', params);

    this.videoFormats = {};

    /**
     * Gets one video format by ID.
     * @param {integer} params.id - (Required) Video format ID.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.videoFormats.get = (params) => this._makeRequest('userprofiles/{+profileId}/videoFormats/{+id}', 'GET', params);

    /**
     * Lists available video formats.
     * @param {string} params.profileId - (Required) User profile ID associated with this request.
     * @return {object} The API response object.
     */
    this.videoFormats.list = (params) => this._makeRequest('userprofiles/{+profileId}/videoFormats', 'GET', params);
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
