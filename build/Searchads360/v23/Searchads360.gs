
/**
 * Google Apps Script client library for the Search Ads 360 Reporting API
 * Documentation URL: https://developers.google.com/search-ads/reporting
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Searchads360 {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://searchads360.googleapis.com/';
    this._servicePath = '';


    this.v23 = {};
    this.v23.listPlannableUserLists = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableUserLists', 'POST', apiParams, clientConfig);
    this.v23.listBenchmarksLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksLocations', 'POST', apiParams, clientConfig);
    this.v23.listPlannableProducts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableProducts', 'POST', apiParams, clientConfig);
    this.v23.listBenchmarksAvailableDates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksAvailableDates', 'POST', apiParams, clientConfig);
    this.v23.listBenchmarksProducts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksProducts', 'POST', apiParams, clientConfig);
    this.v23.listBenchmarksSources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksSources', 'POST', apiParams, clientConfig);
    this.v23.listPlannableLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableLocations', 'POST', apiParams, clientConfig);
    this.v23.generateConversionRates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:generateConversionRates', 'POST', apiParams, clientConfig);
    this.v23.listPlannableUserInterests = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableUserInterests', 'POST', apiParams, clientConfig);

    this.incentives = {};
    this.incentives.fetchIncentive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/incentives:fetchIncentive', 'GET', apiParams, clientConfig);

    this.searchAds360Fields = {};
    this.searchAds360Fields.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}', 'GET', apiParams, clientConfig);
    this.searchAds360Fields.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/searchAds360Fields:search', 'POST', apiParams, clientConfig);

    this.keywordThemeConstants = {};
    this.keywordThemeConstants.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/keywordThemeConstants:suggest', 'POST', apiParams, clientConfig);

    this.geoTargetConstants = {};
    this.geoTargetConstants.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/geoTargetConstants:suggest', 'POST', apiParams, clientConfig);

    this.audienceInsights = {};
    this.audienceInsights.listInsightsEligibleDates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/audienceInsights:listInsightsEligibleDates', 'POST', apiParams, clientConfig);

    this.customers = {};
    this.customers.generateKeywordHistoricalMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordHistoricalMetrics', 'POST', apiParams, clientConfig);
    this.customers.startIdentityVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:startIdentityVerification', 'POST', apiParams, clientConfig);
    this.customers.suggestSmartCampaignAd = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestSmartCampaignAd', 'POST', apiParams, clientConfig);
    this.customers.generateAudienceCompositionInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceCompositionInsights', 'POST', apiParams, clientConfig);
    this.customers.generateKeywordForecastMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordForecastMetrics', 'POST', apiParams, clientConfig);
    this.customers.generateAudienceDefinition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceDefinition', 'POST', apiParams, clientConfig);
    this.customers.generateBenchmarksMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateBenchmarksMetrics', 'POST', apiParams, clientConfig);
    this.customers.generateReachForecast = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateReachForecast', 'POST', apiParams, clientConfig);
    this.customers.listAccessibleCustomers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers:listAccessibleCustomers', 'GET', apiParams, clientConfig);
    this.customers.generateInsightsFinderReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateInsightsFinderReport', 'POST', apiParams, clientConfig);
    this.customers.removeCampaignAutomaticallyCreatedAsset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:removeCampaignAutomaticallyCreatedAsset', 'POST', apiParams, clientConfig);
    this.customers.generateAdGroupThemes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAdGroupThemes', 'POST', apiParams, clientConfig);
    this.customers.suggestKeywordThemes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestKeywordThemes', 'POST', apiParams, clientConfig);
    this.customers.searchAudienceInsightsAttributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:searchAudienceInsightsAttributes', 'POST', apiParams, clientConfig);
    this.customers.generateSuggestedTargetingInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateSuggestedTargetingInsights', 'POST', apiParams, clientConfig);
    this.customers.generateAudienceOverlapInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceOverlapInsights', 'POST', apiParams, clientConfig);
    this.customers.suggestTravelAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestTravelAssets', 'POST', apiParams, clientConfig);
    this.customers.generateKeywordIdeas = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordIdeas', 'POST', apiParams, clientConfig);
    this.customers.suggestSmartCampaignBudgetOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestSmartCampaignBudgetOptions', 'POST', apiParams, clientConfig);
    this.customers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:mutate', 'POST', apiParams, clientConfig);
    this.customers.generateTargetingSuggestionMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateTargetingSuggestionMetrics', 'POST', apiParams, clientConfig);
    this.customers.createCustomerClient = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:createCustomerClient', 'POST', apiParams, clientConfig);
    this.customers.getIdentityVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/getIdentityVerification', 'GET', apiParams, clientConfig);
    this.customers.uploadUserData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:uploadUserData', 'POST', apiParams, clientConfig);

    this.customers.remarketingActions = {};
    this.customers.remarketingActions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/remarketingActions:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanCampaigns = {};
    this.customers.keywordPlanCampaigns.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanCampaigns:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionActions = {};
    this.customers.conversionActions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionActions:mutate', 'POST', apiParams, clientConfig);

    this.customers.thirdPartyAppAnalyticsLinks = {};
    this.customers.thirdPartyAppAnalyticsLinks.regenerateShareableLinkId = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:regenerateShareableLinkId', 'POST', apiParams, clientConfig);

    this.customers.adGroupCriterionLabels = {};
    this.customers.adGroupCriterionLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCriterionLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.localServices = {};
    this.customers.localServices.appendLeadConversation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/localServices:appendLeadConversation', 'POST', apiParams, clientConfig);

    this.customers.keywordPlans = {};
    this.customers.keywordPlans.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlans:mutate', 'POST', apiParams, clientConfig);

    this.customers.sharedSets = {};
    this.customers.sharedSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/sharedSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerLifecycleGoal = {};
    this.customers.customerLifecycleGoal.configureCustomerLifecycleGoals = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerLifecycleGoal:configureCustomerLifecycleGoals', 'POST', apiParams, clientConfig);

    this.customers.customerLabels = {};
    this.customers.customerLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.adParameters = {};
    this.customers.adParameters.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adParameters:mutate', 'POST', apiParams, clientConfig);

    this.customers.experimentArms = {};
    this.customers.experimentArms.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/experimentArms:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAssetSets = {};
    this.customers.adGroupAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupCustomizers = {};
    this.customers.adGroupCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.audiences = {};
    this.customers.audiences.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/audiences:mutate', 'POST', apiParams, clientConfig);

    this.customers.customColumns = {};
    this.customers.customColumns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}', 'GET', apiParams, clientConfig);
    this.customers.customColumns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customColumns', 'GET', apiParams, clientConfig);

    this.customers.keywordPlanAdGroups = {};
    this.customers.keywordPlanAdGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanAdGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.paymentsAccounts = {};
    this.customers.paymentsAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/paymentsAccounts', 'GET', apiParams, clientConfig);

    this.customers.campaignBidModifiers = {};
    this.customers.campaignBidModifiers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignBidModifiers:mutate', 'POST', apiParams, clientConfig);

    this.customers.Goals = {};
    this.customers.Goals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/Goals:mutate', 'POST', apiParams, clientConfig);

    this.customers.searchAds360 = {};
    this.customers.searchAds360.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/searchAds360:search', 'POST', apiParams, clientConfig);
    this.customers.searchAds360.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/searchAds360:mutate', 'POST', apiParams, clientConfig);

    this.customers.incentives = {};
    this.customers.incentives.applyIncentive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/incentives/{+selectedIncentiveId}:applyIncentive', 'POST', apiParams, clientConfig);

    this.customers.campaignCustomizers = {};
    this.customers.campaignCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.customInterests = {};
    this.customers.customInterests.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customInterests:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignCriteria = {};
    this.customers.campaignCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroups = {};
    this.customers.adGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionCustomVariables = {};
    this.customers.conversionCustomVariables.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionCustomVariables:mutate', 'POST', apiParams, clientConfig);

    this.customers.smartCampaignSettings = {};
    this.customers.smartCampaignSettings.getSmartCampaignStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:getSmartCampaignStatus', 'GET', apiParams, clientConfig);
    this.customers.smartCampaignSettings.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/smartCampaignSettings:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAds = {};
    this.customers.adGroupAds.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAds:mutate', 'POST', apiParams, clientConfig);
    this.customers.adGroupAds.removeAutomaticallyCreatedAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+adGroupAd}:removeAutomaticallyCreatedAssets', 'POST', apiParams, clientConfig);

    this.customers.assetGroupSignals = {};
    this.customers.assetGroupSignals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupSignals:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerUserAccesses = {};
    this.customers.customerUserAccesses.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerUserAccesses:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignSharedSets = {};
    this.customers.campaignSharedSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignSharedSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.labels = {};
    this.customers.labels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/labels:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanCampaignKeywords = {};
    this.customers.keywordPlanCampaignKeywords.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanCampaignKeywords:mutate', 'POST', apiParams, clientConfig);

    this.customers.customizerAttributes = {};
    this.customers.customizerAttributes.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customizerAttributes:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaigns = {};
    this.customers.campaigns.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaigns:mutate', 'POST', apiParams, clientConfig);
    this.customers.campaigns.enablePMaxBrandGuidelines = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaigns:enablePMaxBrandGuidelines', 'POST', apiParams, clientConfig);

    this.customers.biddingDataExclusions = {};
    this.customers.biddingDataExclusions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingDataExclusions:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerAssetSets = {};
    this.customers.customerAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetSetAssets = {};
    this.customers.assetSetAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetSetAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.userListCustomerTypes = {};
    this.customers.userListCustomerTypes.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/userListCustomerTypes:mutate', 'POST', apiParams, clientConfig);

    this.customers.productLinkInvitations = {};
    this.customers.productLinkInvitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:create', 'POST', apiParams, clientConfig);
    this.customers.productLinkInvitations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:update', 'POST', apiParams, clientConfig);
    this.customers.productLinkInvitations.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:remove', 'POST', apiParams, clientConfig);

    this.customers.adGroupBidModifiers = {};
    this.customers.adGroupBidModifiers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupBidModifiers:mutate', 'POST', apiParams, clientConfig);

    this.customers.assets = {};
    this.customers.assets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assets:mutate', 'POST', apiParams, clientConfig);

    this.customers.CustomerCustomizers = {};
    this.customers.CustomerCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/CustomerCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerManagerLinks = {};
    this.customers.customerManagerLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerManagerLinks:mutate', 'POST', apiParams, clientConfig);
    this.customers.customerManagerLinks.moveManagerLink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerManagerLinks:moveManagerLink', 'POST', apiParams, clientConfig);

    this.customers.experiments = {};
    this.customers.experiments.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/experiments:mutate', 'POST', apiParams, clientConfig);
    this.customers.experiments.promoteExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:promoteExperiment', 'POST', apiParams, clientConfig);
    this.customers.experiments.endExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+experiment}:endExperiment', 'POST', apiParams, clientConfig);
    this.customers.experiments.listExperimentAsyncErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listExperimentAsyncErrors', 'GET', apiParams, clientConfig);
    this.customers.experiments.graduateExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+experiment}:graduateExperiment', 'POST', apiParams, clientConfig);
    this.customers.experiments.scheduleExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:scheduleExperiment', 'POST', apiParams, clientConfig);

    this.customers.campaignConversionGoals = {};
    this.customers.campaignConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignDrafts = {};
    this.customers.campaignDrafts.listAsyncErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listAsyncErrors', 'GET', apiParams, clientConfig);
    this.customers.campaignDrafts.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignDrafts:mutate', 'POST', apiParams, clientConfig);
    this.customers.campaignDrafts.promote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+campaignDraft}:promote', 'POST', apiParams, clientConfig);

    this.customers.sharedCriteria = {};
    this.customers.sharedCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/sharedCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.customAudiences = {};
    this.customers.customAudiences.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customAudiences:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAssets = {};
    this.customers.adGroupAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.billingSetups = {};
    this.customers.billingSetups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/billingSetups:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignAssetSets = {};
    this.customers.campaignAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionValueRuleSets = {};
    this.customers.conversionValueRuleSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionValueRuleSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.dataLinks = {};
    this.customers.dataLinks.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:remove', 'POST', apiParams, clientConfig);
    this.customers.dataLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:update', 'POST', apiParams, clientConfig);
    this.customers.dataLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:create', 'POST', apiParams, clientConfig);

    this.customers.customConversionGoals = {};
    this.customers.customConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.biddingStrategies = {};
    this.customers.biddingStrategies.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingStrategies:mutate', 'POST', apiParams, clientConfig);

    this.customers.CampaignGoalConfigs = {};
    this.customers.CampaignGoalConfigs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/CampaignGoalConfigs:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignLifecycleGoal = {};
    this.customers.campaignLifecycleGoal.configureCampaignLifecycleGoals = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignLifecycleGoal:configureCampaignLifecycleGoals', 'POST', apiParams, clientConfig);

    this.customers.offlineUserDataJobs = {};
    this.customers.offlineUserDataJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:run', 'POST', apiParams, clientConfig);
    this.customers.offlineUserDataJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/offlineUserDataJobs:create', 'POST', apiParams, clientConfig);
    this.customers.offlineUserDataJobs.addOperations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:addOperations', 'POST', apiParams, clientConfig);

    this.customers.adGroupAdLabels = {};
    this.customers.adGroupAdLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAdLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.recommendationSubscriptions = {};
    this.customers.recommendationSubscriptions.mutateRecommendationSubscription = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendationSubscriptions:mutateRecommendationSubscription', 'POST', apiParams, clientConfig);

    this.customers.customerClientLinks = {};
    this.customers.customerClientLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerClientLinks:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanAdGroupKeywords = {};
    this.customers.keywordPlanAdGroupKeywords.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanAdGroupKeywords:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroups = {};
    this.customers.assetGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroupListingGroupFilters = {};
    this.customers.assetGroupListingGroupFilters.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupListingGroupFilters:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionValueRules = {};
    this.customers.conversionValueRules.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionValueRules:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignGroups = {};
    this.customers.campaignGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerNegativeCriteria = {};
    this.customers.customerNegativeCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerNegativeCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.accountBudgetProposals = {};
    this.customers.accountBudgetProposals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountBudgetProposals:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignLabels = {};
    this.customers.campaignLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.recommendations = {};
    this.customers.recommendations.apply = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:apply', 'POST', apiParams, clientConfig);
    this.customers.recommendations.dismiss = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:dismiss', 'POST', apiParams, clientConfig);
    this.customers.recommendations.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:generate', 'POST', apiParams, clientConfig);

    this.customers.ads = {};
    this.customers.ads.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/ads:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroupAssets = {};
    this.customers.assetGroupAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.userLists = {};
    this.customers.userLists.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/userLists:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignBudgets = {};
    this.customers.campaignBudgets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignBudgets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerConversionGoals = {};
    this.customers.customerConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerSkAdNetworkConversionValueSchemas = {};
    this.customers.customerSkAdNetworkConversionValueSchemas.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerSkAdNetworkConversionValueSchemas:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupLabels = {};
    this.customers.adGroupLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignAssets = {};
    this.customers.campaignAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionGoalCampaignConfigs = {};
    this.customers.conversionGoalCampaignConfigs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionGoalCampaignConfigs:mutate', 'POST', apiParams, clientConfig);

    this.customers.accountLinks = {};
    this.customers.accountLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountLinks:create', 'POST', apiParams, clientConfig);
    this.customers.accountLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountLinks:mutate', 'POST', apiParams, clientConfig);

    this.customers.AdGroupCriterionCustomizers = {};
    this.customers.AdGroupCriterionCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/AdGroupCriterionCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.batchJobs = {};
    this.customers.batchJobs.listResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listResults', 'GET', apiParams, clientConfig);
    this.customers.batchJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:run', 'POST', apiParams, clientConfig);
    this.customers.batchJobs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/batchJobs:mutate', 'POST', apiParams, clientConfig);
    this.customers.batchJobs.addOperations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:addOperations', 'POST', apiParams, clientConfig);

    this.customers.invoices = {};
    this.customers.invoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/invoices', 'GET', apiParams, clientConfig);

    this.customers.assetSets = {};
    this.customers.assetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerUserAccessInvitations = {};
    this.customers.customerUserAccessInvitations.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerUserAccessInvitations:mutate', 'POST', apiParams, clientConfig);

    this.customers.productLinks = {};
    this.customers.productLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinks:create', 'POST', apiParams, clientConfig);
    this.customers.productLinks.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinks:remove', 'POST', apiParams, clientConfig);

    this.customers.biddingSeasonalityAdjustments = {};
    this.customers.biddingSeasonalityAdjustments.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingSeasonalityAdjustments:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerAssets = {};
    this.customers.customerAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupCriteria = {};
    this.customers.adGroupCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.localServicesLeads = {};
    this.customers.localServicesLeads.provideLeadFeedback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:provideLeadFeedback', 'POST', apiParams, clientConfig);
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
