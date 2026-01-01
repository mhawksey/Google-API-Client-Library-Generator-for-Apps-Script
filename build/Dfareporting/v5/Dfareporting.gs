
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dfareporting.googleapis.com/';
    this._servicePath = 'dfareporting/v5/';


    this.accountPermissionGroups = {};
    this.accountPermissionGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups/{+id}', 'GET', apiParams, clientConfig);
    this.accountPermissionGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups', 'GET', apiParams, clientConfig);

    this.accountPermissions = {};
    this.accountPermissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissions/{+id}', 'GET', apiParams, clientConfig);
    this.accountPermissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissions', 'GET', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts/{+id}', 'GET', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'GET', apiParams, clientConfig);
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PUT', apiParams, clientConfig);
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PATCH', apiParams, clientConfig);

    this.accountActiveAdSummaries = {};
    this.accountActiveAdSummaries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountActiveAdSummaries/{+summaryAccountId}', 'GET', apiParams, clientConfig);

    this.accountUserProfiles = {};
    this.accountUserProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/accountUserProfiles/{+id}', 'GET', apiParams, clientConfig);
    this.accountUserProfiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'POST', apiParams, clientConfig);
    this.accountUserProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'GET', apiParams, clientConfig);
    this.accountUserProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PUT', apiParams, clientConfig);
    this.accountUserProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PATCH', apiParams, clientConfig);

    this.ads = {};
    this.ads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads/{+id}', 'GET', apiParams, clientConfig);
    this.ads.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'POST', apiParams, clientConfig);
    this.ads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'GET', apiParams, clientConfig);
    this.ads.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'PUT', apiParams, clientConfig);
    this.ads.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'PATCH', apiParams, clientConfig);

    this.advertiserGroups = {};
    this.advertiserGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'DELETE', apiParams, clientConfig);
    this.advertiserGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'GET', apiParams, clientConfig);
    this.advertiserGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'POST', apiParams, clientConfig);
    this.advertiserGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'GET', apiParams, clientConfig);
    this.advertiserGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PUT', apiParams, clientConfig);
    this.advertiserGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PATCH', apiParams, clientConfig);

    this.advertisers = {};
    this.advertisers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+id}', 'GET', apiParams, clientConfig);
    this.advertisers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'POST', apiParams, clientConfig);
    this.advertisers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'GET', apiParams, clientConfig);
    this.advertisers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PUT', apiParams, clientConfig);
    this.advertisers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PATCH', apiParams, clientConfig);

    this.billingAssignments = {};
    this.billingAssignments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'POST', apiParams, clientConfig);
    this.billingAssignments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'GET', apiParams, clientConfig);

    this.billingProfiles = {};
    this.billingProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+id}', 'GET', apiParams, clientConfig);
    this.billingProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'GET', apiParams, clientConfig);
    this.billingProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'PUT', apiParams, clientConfig);

    this.billingRates = {};
    this.billingRates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingRates', 'GET', apiParams, clientConfig);

    this.browsers = {};
    this.browsers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/browsers', 'GET', apiParams, clientConfig);

    this.campaignCreativeAssociations = {};
    this.campaignCreativeAssociations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'POST', apiParams, clientConfig);
    this.campaignCreativeAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'GET', apiParams, clientConfig);

    this.campaigns = {};
    this.campaigns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+id}', 'GET', apiParams, clientConfig);
    this.campaigns.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'POST', apiParams, clientConfig);
    this.campaigns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'GET', apiParams, clientConfig);
    this.campaigns.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PUT', apiParams, clientConfig);
    this.campaigns.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PATCH', apiParams, clientConfig);

    this.changeLogs = {};
    this.changeLogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/changeLogs/{+id}', 'GET', apiParams, clientConfig);
    this.changeLogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/changeLogs', 'GET', apiParams, clientConfig);

    this.cities = {};
    this.cities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/cities', 'GET', apiParams, clientConfig);

    this.connectionTypes = {};
    this.connectionTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/connectionTypes/{+id}', 'GET', apiParams, clientConfig);
    this.connectionTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/connectionTypes', 'GET', apiParams, clientConfig);

    this.contentCategories = {};
    this.contentCategories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'DELETE', apiParams, clientConfig);
    this.contentCategories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'GET', apiParams, clientConfig);
    this.contentCategories.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'POST', apiParams, clientConfig);
    this.contentCategories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'GET', apiParams, clientConfig);
    this.contentCategories.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PUT', apiParams, clientConfig);
    this.contentCategories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PATCH', apiParams, clientConfig);

    this.conversions = {};
    this.conversions.batchinsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/conversions/batchinsert', 'POST', apiParams, clientConfig);
    this.conversions.batchupdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/conversions/batchupdate', 'POST', apiParams, clientConfig);

    this.countries = {};
    this.countries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/countries/{+dartId}', 'GET', apiParams, clientConfig);
    this.countries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/countries', 'GET', apiParams, clientConfig);

    this.creativeAssets = {};
    this.creativeAssets.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/dfareporting/v5/userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets' : 'userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.creativeFields = {};
    this.creativeFields.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'DELETE', apiParams, clientConfig);
    this.creativeFields.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'GET', apiParams, clientConfig);
    this.creativeFields.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'POST', apiParams, clientConfig);
    this.creativeFields.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'GET', apiParams, clientConfig);
    this.creativeFields.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PUT', apiParams, clientConfig);
    this.creativeFields.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PATCH', apiParams, clientConfig);

    this.creativeFieldValues = {};
    this.creativeFieldValues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'DELETE', apiParams, clientConfig);
    this.creativeFieldValues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'GET', apiParams, clientConfig);
    this.creativeFieldValues.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'POST', apiParams, clientConfig);
    this.creativeFieldValues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'GET', apiParams, clientConfig);
    this.creativeFieldValues.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PUT', apiParams, clientConfig);
    this.creativeFieldValues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PATCH', apiParams, clientConfig);

    this.creativeGroups = {};
    this.creativeGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups/{+id}', 'GET', apiParams, clientConfig);
    this.creativeGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'POST', apiParams, clientConfig);
    this.creativeGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'GET', apiParams, clientConfig);
    this.creativeGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PUT', apiParams, clientConfig);
    this.creativeGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PATCH', apiParams, clientConfig);

    this.creatives = {};
    this.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives/{+id}', 'GET', apiParams, clientConfig);
    this.creatives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'POST', apiParams, clientConfig);
    this.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'GET', apiParams, clientConfig);
    this.creatives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PUT', apiParams, clientConfig);
    this.creatives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PATCH', apiParams, clientConfig);

    this.dimensionValues = {};
    this.dimensionValues.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/dimensionvalues/query', 'POST', apiParams, clientConfig);

    this.directorySites = {};
    this.directorySites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites/{+id}', 'GET', apiParams, clientConfig);
    this.directorySites.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'POST', apiParams, clientConfig);
    this.directorySites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'GET', apiParams, clientConfig);

    this.dynamicFeeds = {};
    this.dynamicFeeds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds/{+dynamicFeedId}', 'GET', apiParams, clientConfig);
    this.dynamicFeeds.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds', 'POST', apiParams, clientConfig);
    this.dynamicFeeds.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds', 'PUT', apiParams, clientConfig);
    this.dynamicFeeds.retransform = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds/{+dynamicFeedId}/retransform', 'POST', apiParams, clientConfig);

    this.dynamicProfiles = {};
    this.dynamicProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}', 'GET', apiParams, clientConfig);
    this.dynamicProfiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles', 'POST', apiParams, clientConfig);
    this.dynamicProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles', 'PUT', apiParams, clientConfig);
    this.dynamicProfiles.generateCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}/generateCode', 'GET', apiParams, clientConfig);
    this.dynamicProfiles.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}/publish', 'POST', apiParams, clientConfig);

    this.dynamicTargetingKeys = {};
    this.dynamicTargetingKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys/{+objectId}', 'DELETE', apiParams, clientConfig);
    this.dynamicTargetingKeys.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'POST', apiParams, clientConfig);
    this.dynamicTargetingKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'GET', apiParams, clientConfig);

    this.eventTags = {};
    this.eventTags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'DELETE', apiParams, clientConfig);
    this.eventTags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'GET', apiParams, clientConfig);
    this.eventTags.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'POST', apiParams, clientConfig);
    this.eventTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'GET', apiParams, clientConfig);
    this.eventTags.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PUT', apiParams, clientConfig);
    this.eventTags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PATCH', apiParams, clientConfig);

    this.files = {};
    this.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('reports/{reportId}/files/{fileId}', 'GET', apiParams, clientConfig);
    this.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/files', 'GET', apiParams, clientConfig);

    this.floodlightActivityGroups = {};
    this.floodlightActivityGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups/{+id}', 'GET', apiParams, clientConfig);
    this.floodlightActivityGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'POST', apiParams, clientConfig);
    this.floodlightActivityGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'GET', apiParams, clientConfig);
    this.floodlightActivityGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PUT', apiParams, clientConfig);
    this.floodlightActivityGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PATCH', apiParams, clientConfig);

    this.floodlightActivities = {};
    this.floodlightActivities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'DELETE', apiParams, clientConfig);
    this.floodlightActivities.generatetag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/generatetag', 'POST', apiParams, clientConfig);
    this.floodlightActivities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'GET', apiParams, clientConfig);
    this.floodlightActivities.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'POST', apiParams, clientConfig);
    this.floodlightActivities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'GET', apiParams, clientConfig);
    this.floodlightActivities.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PUT', apiParams, clientConfig);
    this.floodlightActivities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PATCH', apiParams, clientConfig);

    this.floodlightConfigurations = {};
    this.floodlightConfigurations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations/{+id}', 'GET', apiParams, clientConfig);
    this.floodlightConfigurations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'GET', apiParams, clientConfig);
    this.floodlightConfigurations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PUT', apiParams, clientConfig);
    this.floodlightConfigurations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PATCH', apiParams, clientConfig);

    this.advertiserInvoices = {};
    this.advertiserInvoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+advertiserId}/invoices', 'GET', apiParams, clientConfig);

    this.advertiserLandingPages = {};
    this.advertiserLandingPages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages/{+id}', 'GET', apiParams, clientConfig);
    this.advertiserLandingPages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'POST', apiParams, clientConfig);
    this.advertiserLandingPages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'GET', apiParams, clientConfig);
    this.advertiserLandingPages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PUT', apiParams, clientConfig);
    this.advertiserLandingPages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PATCH', apiParams, clientConfig);

    this.languages = {};
    this.languages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/languages', 'GET', apiParams, clientConfig);

    this.metros = {};
    this.metros.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/metros', 'GET', apiParams, clientConfig);

    this.mobileApps = {};
    this.mobileApps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileApps/{+id}', 'GET', apiParams, clientConfig);
    this.mobileApps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileApps', 'GET', apiParams, clientConfig);

    this.mobileCarriers = {};
    this.mobileCarriers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers/{+id}', 'GET', apiParams, clientConfig);
    this.mobileCarriers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers', 'GET', apiParams, clientConfig);

    this.operatingSystems = {};
    this.operatingSystems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystems/{+dartId}', 'GET', apiParams, clientConfig);
    this.operatingSystems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystems', 'GET', apiParams, clientConfig);

    this.operatingSystemVersions = {};
    this.operatingSystemVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions/{+id}', 'GET', apiParams, clientConfig);
    this.operatingSystemVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions', 'GET', apiParams, clientConfig);

    this.remarketingLists = {};
    this.remarketingLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PATCH', apiParams, clientConfig);
    this.remarketingLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists/{+id}', 'GET', apiParams, clientConfig);
    this.remarketingLists.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'POST', apiParams, clientConfig);
    this.remarketingLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'GET', apiParams, clientConfig);
    this.remarketingLists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PUT', apiParams, clientConfig);

    this.remarketingListShares = {};
    this.remarketingListShares.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PATCH', apiParams, clientConfig);
    this.remarketingListShares.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares/{+remarketingListId}', 'GET', apiParams, clientConfig);
    this.remarketingListShares.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PUT', apiParams, clientConfig);

    this.sites = {};
    this.sites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'PATCH', apiParams, clientConfig);
    this.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites/{+id}', 'GET', apiParams, clientConfig);
    this.sites.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'POST', apiParams, clientConfig);
    this.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'GET', apiParams, clientConfig);
    this.sites.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'PUT', apiParams, clientConfig);

    this.subaccounts = {};
    this.subaccounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PATCH', apiParams, clientConfig);
    this.subaccounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts/{+id}', 'GET', apiParams, clientConfig);
    this.subaccounts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'POST', apiParams, clientConfig);
    this.subaccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'GET', apiParams, clientConfig);
    this.subaccounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PUT', apiParams, clientConfig);

    this.userRoles = {};
    this.userRoles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PATCH', apiParams, clientConfig);
    this.userRoles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'GET', apiParams, clientConfig);
    this.userRoles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'POST', apiParams, clientConfig);
    this.userRoles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'GET', apiParams, clientConfig);
    this.userRoles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PUT', apiParams, clientConfig);
    this.userRoles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'DELETE', apiParams, clientConfig);

    this.targetingTemplates = {};
    this.targetingTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PATCH', apiParams, clientConfig);
    this.targetingTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates/{+id}', 'GET', apiParams, clientConfig);
    this.targetingTemplates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'POST', apiParams, clientConfig);
    this.targetingTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'GET', apiParams, clientConfig);
    this.targetingTemplates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PUT', apiParams, clientConfig);

    this.placements = {};
    this.placements.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'PATCH', apiParams, clientConfig);
    this.placements.generatetags = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements/generatetags', 'POST', apiParams, clientConfig);
    this.placements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements/{+id}', 'GET', apiParams, clientConfig);
    this.placements.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'POST', apiParams, clientConfig);
    this.placements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'GET', apiParams, clientConfig);
    this.placements.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'PUT', apiParams, clientConfig);

    this.placementGroups = {};
    this.placementGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PATCH', apiParams, clientConfig);
    this.placementGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups/{+id}', 'GET', apiParams, clientConfig);
    this.placementGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'POST', apiParams, clientConfig);
    this.placementGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'GET', apiParams, clientConfig);
    this.placementGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PUT', apiParams, clientConfig);

    this.placementStrategies = {};
    this.placementStrategies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PATCH', apiParams, clientConfig);
    this.placementStrategies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'DELETE', apiParams, clientConfig);
    this.placementStrategies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'GET', apiParams, clientConfig);
    this.placementStrategies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'POST', apiParams, clientConfig);
    this.placementStrategies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'GET', apiParams, clientConfig);
    this.placementStrategies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PUT', apiParams, clientConfig);

    this.platformTypes = {};
    this.platformTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/platformTypes/{+id}', 'GET', apiParams, clientConfig);
    this.platformTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/platformTypes', 'GET', apiParams, clientConfig);

    this.postalCodes = {};
    this.postalCodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/postalCodes/{+code}', 'GET', apiParams, clientConfig);
    this.postalCodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/postalCodes', 'GET', apiParams, clientConfig);

    this.regions = {};
    this.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/regions', 'GET', apiParams, clientConfig);

    this.targetableRemarketingLists = {};
    this.targetableRemarketingLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists/{+id}', 'GET', apiParams, clientConfig);
    this.targetableRemarketingLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists', 'GET', apiParams, clientConfig);

    this.reports = {};
    this.reports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'DELETE', apiParams, clientConfig);
    this.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'GET', apiParams, clientConfig);
    this.reports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports', 'POST', apiParams, clientConfig);
    this.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports', 'GET', apiParams, clientConfig);
    this.reports.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/run', 'POST', apiParams, clientConfig);
    this.reports.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PUT', apiParams, clientConfig);

    this.reports.files = {};
    this.reports.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files/{fileId}', 'GET', apiParams, clientConfig);
    this.reports.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files', 'GET', apiParams, clientConfig);

    this.reports.compatibleFields = {};
    this.reports.compatibleFields.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/compatiblefields/query', 'POST', apiParams, clientConfig);

    this.sizes = {};
    this.sizes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes/{+id}', 'GET', apiParams, clientConfig);
    this.sizes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes', 'POST', apiParams, clientConfig);
    this.sizes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes', 'GET', apiParams, clientConfig);

    this.studioCreativeAssets = {};
    this.studioCreativeAssets.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/dfareporting/v5/studio/creativeAssets' : 'studio/creativeAssets';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.studioCreatives = {};
    this.studioCreatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/creatives/{+studioCreativeId}', 'GET', apiParams, clientConfig);
    this.studioCreatives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/creatives', 'POST', apiParams, clientConfig);
    this.studioCreatives.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/creatives/{+studioCreativeId}/publish', 'POST', apiParams, clientConfig);

    this.tvCampaignDetails = {};
    this.tvCampaignDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/tvCampaignDetails/{+id}', 'GET', apiParams, clientConfig);

    this.tvCampaignSummaries = {};
    this.tvCampaignSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/tvCampaignSummaries', 'GET', apiParams, clientConfig);

    this.userProfiles = {};
    this.userProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}', 'GET', apiParams, clientConfig);
    this.userProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles', 'GET', apiParams, clientConfig);

    this.userRolePermissionGroups = {};
    this.userRolePermissionGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups/{+id}', 'GET', apiParams, clientConfig);
    this.userRolePermissionGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups', 'GET', apiParams, clientConfig);

    this.userRolePermissions = {};
    this.userRolePermissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions/{+id}', 'GET', apiParams, clientConfig);
    this.userRolePermissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions', 'GET', apiParams, clientConfig);

    this.videoFormats = {};
    this.videoFormats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/videoFormats/{+id}', 'GET', apiParams, clientConfig);
    this.videoFormats.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/videoFormats', 'GET', apiParams, clientConfig);
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
