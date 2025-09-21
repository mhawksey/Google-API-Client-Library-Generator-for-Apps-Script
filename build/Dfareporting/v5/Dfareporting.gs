
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
    this._servicePath = 'dfareporting/v5/';

    // --- Public Interface Initialization ---

    this.accountPermissionGroups = {};
    this.accountPermissionGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups/{+id}', 'GET', params);
    this.accountPermissionGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups', 'GET', params);

    this.accountPermissions = {};
    this.accountPermissions.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissions/{+id}', 'GET', params);
    this.accountPermissions.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountPermissions', 'GET', params);

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('userprofiles/{+profileId}/accounts/{+id}', 'GET', params);
    this.accounts.list = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'GET', params);
    this.accounts.update = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PUT', params);
    this.accounts.patch = (params) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PATCH', params);

    this.accountActiveAdSummaries = {};
    this.accountActiveAdSummaries.get = (params) => this._makeRequest('userprofiles/{+profileId}/accountActiveAdSummaries/{+summaryAccountId}', 'GET', params);

    this.accountUserProfiles = {};
    this.accountUserProfiles.get = (params) => this._makeRequest('userprofiles/{profileId}/accountUserProfiles/{+id}', 'GET', params);
    this.accountUserProfiles.insert = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'POST', params);
    this.accountUserProfiles.list = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'GET', params);
    this.accountUserProfiles.update = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PUT', params);
    this.accountUserProfiles.patch = (params) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PATCH', params);

    this.ads = {};
    this.ads.get = (params) => this._makeRequest('userprofiles/{+profileId}/ads/{+id}', 'GET', params);
    this.ads.insert = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'POST', params);
    this.ads.list = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'GET', params);
    this.ads.update = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'PUT', params);
    this.ads.patch = (params) => this._makeRequest('userprofiles/{+profileId}/ads', 'PATCH', params);

    this.advertiserGroups = {};
    this.advertiserGroups.delete = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'DELETE', params);
    this.advertiserGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'GET', params);
    this.advertiserGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'POST', params);
    this.advertiserGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'GET', params);
    this.advertiserGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PUT', params);
    this.advertiserGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PATCH', params);

    this.advertisers = {};
    this.advertisers.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+id}', 'GET', params);
    this.advertisers.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'POST', params);
    this.advertisers.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'GET', params);
    this.advertisers.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PUT', params);
    this.advertisers.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PATCH', params);

    this.billingAssignments = {};
    this.billingAssignments.insert = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'POST', params);
    this.billingAssignments.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'GET', params);

    this.billingProfiles = {};
    this.billingProfiles.get = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+id}', 'GET', params);
    this.billingProfiles.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'GET', params);
    this.billingProfiles.update = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'PUT', params);

    this.billingRates = {};
    this.billingRates.list = (params) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingRates', 'GET', params);

    this.browsers = {};
    this.browsers.list = (params) => this._makeRequest('userprofiles/{+profileId}/browsers', 'GET', params);

    this.campaignCreativeAssociations = {};
    this.campaignCreativeAssociations.insert = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'POST', params);
    this.campaignCreativeAssociations.list = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'GET', params);

    this.campaigns = {};
    this.campaigns.get = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+id}', 'GET', params);
    this.campaigns.insert = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'POST', params);
    this.campaigns.list = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'GET', params);
    this.campaigns.update = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PUT', params);
    this.campaigns.patch = (params) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PATCH', params);

    this.changeLogs = {};
    this.changeLogs.get = (params) => this._makeRequest('userprofiles/{+profileId}/changeLogs/{+id}', 'GET', params);
    this.changeLogs.list = (params) => this._makeRequest('userprofiles/{+profileId}/changeLogs', 'GET', params);

    this.cities = {};
    this.cities.list = (params) => this._makeRequest('userprofiles/{+profileId}/cities', 'GET', params);

    this.connectionTypes = {};
    this.connectionTypes.get = (params) => this._makeRequest('userprofiles/{+profileId}/connectionTypes/{+id}', 'GET', params);
    this.connectionTypes.list = (params) => this._makeRequest('userprofiles/{+profileId}/connectionTypes', 'GET', params);

    this.contentCategories = {};
    this.contentCategories.delete = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'DELETE', params);
    this.contentCategories.get = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'GET', params);
    this.contentCategories.insert = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'POST', params);
    this.contentCategories.list = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'GET', params);
    this.contentCategories.update = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PUT', params);
    this.contentCategories.patch = (params) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PATCH', params);

    this.conversions = {};
    this.conversions.batchinsert = (params) => this._makeRequest('userprofiles/{profileId}/conversions/batchinsert', 'POST', params);
    this.conversions.batchupdate = (params) => this._makeRequest('userprofiles/{profileId}/conversions/batchupdate', 'POST', params);

    this.countries = {};
    this.countries.get = (params) => this._makeRequest('userprofiles/{+profileId}/countries/{+dartId}', 'GET', params);
    this.countries.list = (params) => this._makeRequest('userprofiles/{+profileId}/countries', 'GET', params);

    this.creativeAssets = {};
    this.creativeAssets.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets', 'POST', params);

    this.creativeFields = {};
    this.creativeFields.delete = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'DELETE', params);
    this.creativeFields.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'GET', params);
    this.creativeFields.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'POST', params);
    this.creativeFields.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'GET', params);
    this.creativeFields.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PUT', params);
    this.creativeFields.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PATCH', params);

    this.creativeFieldValues = {};
    this.creativeFieldValues.delete = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'DELETE', params);
    this.creativeFieldValues.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'GET', params);
    this.creativeFieldValues.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'POST', params);
    this.creativeFieldValues.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'GET', params);
    this.creativeFieldValues.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PUT', params);
    this.creativeFieldValues.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PATCH', params);

    this.creativeGroups = {};
    this.creativeGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups/{+id}', 'GET', params);
    this.creativeGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'POST', params);
    this.creativeGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'GET', params);
    this.creativeGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PUT', params);
    this.creativeGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PATCH', params);

    this.creatives = {};
    this.creatives.get = (params) => this._makeRequest('userprofiles/{+profileId}/creatives/{+id}', 'GET', params);
    this.creatives.insert = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'POST', params);
    this.creatives.list = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'GET', params);
    this.creatives.update = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PUT', params);
    this.creatives.patch = (params) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PATCH', params);

    this.dimensionValues = {};
    this.dimensionValues.query = (params) => this._makeRequest('userprofiles/{profileId}/dimensionvalues/query', 'POST', params);

    this.directorySites = {};
    this.directorySites.get = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites/{+id}', 'GET', params);
    this.directorySites.insert = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'POST', params);
    this.directorySites.list = (params) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'GET', params);

    this.dynamicFeeds = {};
    this.dynamicFeeds.get = (params) => this._makeRequest('studio/dynamicFeeds/{+dynamicFeedId}', 'GET', params);
    this.dynamicFeeds.insert = (params) => this._makeRequest('studio/dynamicFeeds', 'POST', params);

    this.dynamicProfiles = {};
    this.dynamicProfiles.get = (params) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}', 'GET', params);
    this.dynamicProfiles.insert = (params) => this._makeRequest('studio/dynamicProfiles', 'POST', params);
    this.dynamicProfiles.update = (params) => this._makeRequest('studio/dynamicProfiles', 'PUT', params);

    this.dynamicTargetingKeys = {};
    this.dynamicTargetingKeys.delete = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys/{+objectId}', 'DELETE', params);
    this.dynamicTargetingKeys.insert = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'POST', params);
    this.dynamicTargetingKeys.list = (params) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'GET', params);

    this.eventTags = {};
    this.eventTags.delete = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'DELETE', params);
    this.eventTags.get = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'GET', params);
    this.eventTags.insert = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'POST', params);
    this.eventTags.list = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'GET', params);
    this.eventTags.update = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PUT', params);
    this.eventTags.patch = (params) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PATCH', params);

    this.files = {};
    this.files.get = (params) => this._makeRequest('reports/{reportId}/files/{fileId}', 'GET', params);
    this.files.list = (params) => this._makeRequest('userprofiles/{profileId}/files', 'GET', params);

    this.floodlightActivityGroups = {};
    this.floodlightActivityGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups/{+id}', 'GET', params);
    this.floodlightActivityGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'POST', params);
    this.floodlightActivityGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'GET', params);
    this.floodlightActivityGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PUT', params);
    this.floodlightActivityGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PATCH', params);

    this.floodlightActivities = {};
    this.floodlightActivities.delete = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'DELETE', params);
    this.floodlightActivities.generatetag = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/generatetag', 'POST', params);
    this.floodlightActivities.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'GET', params);
    this.floodlightActivities.insert = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'POST', params);
    this.floodlightActivities.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'GET', params);
    this.floodlightActivities.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PUT', params);
    this.floodlightActivities.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PATCH', params);

    this.floodlightConfigurations = {};
    this.floodlightConfigurations.get = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations/{+id}', 'GET', params);
    this.floodlightConfigurations.list = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'GET', params);
    this.floodlightConfigurations.update = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PUT', params);
    this.floodlightConfigurations.patch = (params) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PATCH', params);

    this.advertiserInvoices = {};
    this.advertiserInvoices.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+advertiserId}/invoices', 'GET', params);

    this.advertiserLandingPages = {};
    this.advertiserLandingPages.get = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages/{+id}', 'GET', params);
    this.advertiserLandingPages.insert = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'POST', params);
    this.advertiserLandingPages.list = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'GET', params);
    this.advertiserLandingPages.update = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PUT', params);
    this.advertiserLandingPages.patch = (params) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PATCH', params);

    this.languages = {};
    this.languages.list = (params) => this._makeRequest('userprofiles/{+profileId}/languages', 'GET', params);

    this.metros = {};
    this.metros.list = (params) => this._makeRequest('userprofiles/{+profileId}/metros', 'GET', params);

    this.mobileApps = {};
    this.mobileApps.get = (params) => this._makeRequest('userprofiles/{+profileId}/mobileApps/{+id}', 'GET', params);
    this.mobileApps.list = (params) => this._makeRequest('userprofiles/{+profileId}/mobileApps', 'GET', params);

    this.mobileCarriers = {};
    this.mobileCarriers.get = (params) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers/{+id}', 'GET', params);
    this.mobileCarriers.list = (params) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers', 'GET', params);

    this.operatingSystems = {};
    this.operatingSystems.get = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystems/{+dartId}', 'GET', params);
    this.operatingSystems.list = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystems', 'GET', params);

    this.operatingSystemVersions = {};
    this.operatingSystemVersions.get = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions/{+id}', 'GET', params);
    this.operatingSystemVersions.list = (params) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions', 'GET', params);

    this.remarketingLists = {};
    this.remarketingLists.patch = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PATCH', params);
    this.remarketingLists.get = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists/{+id}', 'GET', params);
    this.remarketingLists.insert = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'POST', params);
    this.remarketingLists.list = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'GET', params);
    this.remarketingLists.update = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PUT', params);

    this.remarketingListShares = {};
    this.remarketingListShares.patch = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PATCH', params);
    this.remarketingListShares.get = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares/{+remarketingListId}', 'GET', params);
    this.remarketingListShares.update = (params) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PUT', params);

    this.sites = {};
    this.sites.patch = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'PATCH', params);
    this.sites.get = (params) => this._makeRequest('userprofiles/{+profileId}/sites/{+id}', 'GET', params);
    this.sites.insert = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'POST', params);
    this.sites.list = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'GET', params);
    this.sites.update = (params) => this._makeRequest('userprofiles/{+profileId}/sites', 'PUT', params);

    this.subaccounts = {};
    this.subaccounts.patch = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PATCH', params);
    this.subaccounts.get = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts/{+id}', 'GET', params);
    this.subaccounts.insert = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'POST', params);
    this.subaccounts.list = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'GET', params);
    this.subaccounts.update = (params) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PUT', params);

    this.userRoles = {};
    this.userRoles.patch = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PATCH', params);
    this.userRoles.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'GET', params);
    this.userRoles.insert = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'POST', params);
    this.userRoles.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'GET', params);
    this.userRoles.update = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PUT', params);
    this.userRoles.delete = (params) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'DELETE', params);

    this.targetingTemplates = {};
    this.targetingTemplates.patch = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PATCH', params);
    this.targetingTemplates.get = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates/{+id}', 'GET', params);
    this.targetingTemplates.insert = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'POST', params);
    this.targetingTemplates.list = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'GET', params);
    this.targetingTemplates.update = (params) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PUT', params);

    this.placements = {};
    this.placements.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'PATCH', params);
    this.placements.generatetags = (params) => this._makeRequest('userprofiles/{+profileId}/placements/generatetags', 'POST', params);
    this.placements.get = (params) => this._makeRequest('userprofiles/{+profileId}/placements/{+id}', 'GET', params);
    this.placements.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'POST', params);
    this.placements.list = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'GET', params);
    this.placements.update = (params) => this._makeRequest('userprofiles/{+profileId}/placements', 'PUT', params);

    this.placementGroups = {};
    this.placementGroups.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PATCH', params);
    this.placementGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups/{+id}', 'GET', params);
    this.placementGroups.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'POST', params);
    this.placementGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'GET', params);
    this.placementGroups.update = (params) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PUT', params);

    this.placementStrategies = {};
    this.placementStrategies.patch = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PATCH', params);
    this.placementStrategies.delete = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'DELETE', params);
    this.placementStrategies.get = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'GET', params);
    this.placementStrategies.insert = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'POST', params);
    this.placementStrategies.list = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'GET', params);
    this.placementStrategies.update = (params) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PUT', params);

    this.platformTypes = {};
    this.platformTypes.get = (params) => this._makeRequest('userprofiles/{+profileId}/platformTypes/{+id}', 'GET', params);
    this.platformTypes.list = (params) => this._makeRequest('userprofiles/{+profileId}/platformTypes', 'GET', params);

    this.postalCodes = {};
    this.postalCodes.get = (params) => this._makeRequest('userprofiles/{+profileId}/postalCodes/{+code}', 'GET', params);
    this.postalCodes.list = (params) => this._makeRequest('userprofiles/{+profileId}/postalCodes', 'GET', params);

    this.regions = {};
    this.regions.list = (params) => this._makeRequest('userprofiles/{+profileId}/regions', 'GET', params);

    this.targetableRemarketingLists = {};
    this.targetableRemarketingLists.get = (params) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists/{+id}', 'GET', params);
    this.targetableRemarketingLists.list = (params) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists', 'GET', params);

    this.reports = {};
    this.reports.delete = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'DELETE', params);
    this.reports.get = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'GET', params);
    this.reports.insert = (params) => this._makeRequest('userprofiles/{profileId}/reports', 'POST', params);
    this.reports.list = (params) => this._makeRequest('userprofiles/{profileId}/reports', 'GET', params);
    this.reports.run = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/run', 'POST', params);
    this.reports.update = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PUT', params);

    this.reports.files = {};
    this.reports.files.get = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files/{fileId}', 'GET', params);
    this.reports.files.list = (params) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files', 'GET', params);

    this.reports.compatibleFields = {};
    this.reports.compatibleFields.query = (params) => this._makeRequest('userprofiles/{profileId}/reports/compatiblefields/query', 'POST', params);

    this.sizes = {};
    this.sizes.get = (params) => this._makeRequest('userprofiles/{+profileId}/sizes/{+id}', 'GET', params);
    this.sizes.insert = (params) => this._makeRequest('userprofiles/{+profileId}/sizes', 'POST', params);
    this.sizes.list = (params) => this._makeRequest('userprofiles/{+profileId}/sizes', 'GET', params);

    this.tvCampaignDetails = {};
    this.tvCampaignDetails.get = (params) => this._makeRequest('userprofiles/{+profileId}/tvCampaignDetails/{+id}', 'GET', params);

    this.tvCampaignSummaries = {};
    this.tvCampaignSummaries.list = (params) => this._makeRequest('userprofiles/{+profileId}/tvCampaignSummaries', 'GET', params);

    this.userProfiles = {};
    this.userProfiles.get = (params) => this._makeRequest('userprofiles/{profileId}', 'GET', params);
    this.userProfiles.list = (params) => this._makeRequest('userprofiles', 'GET', params);

    this.userRolePermissionGroups = {};
    this.userRolePermissionGroups.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups/{+id}', 'GET', params);
    this.userRolePermissionGroups.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups', 'GET', params);

    this.userRolePermissions = {};
    this.userRolePermissions.get = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions/{+id}', 'GET', params);
    this.userRolePermissions.list = (params) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions', 'GET', params);

    this.videoFormats = {};
    this.videoFormats.get = (params) => this._makeRequest('userprofiles/{+profileId}/videoFormats/{+id}', 'GET', params);
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
