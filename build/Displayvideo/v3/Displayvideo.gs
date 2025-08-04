
/**
 * Google Apps Script client library for the Display & Video 360 API
 * Documentation URL: https://developers.google.com/display-video/
 * @class
 */
class Displayvideo {
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
    this._rootUrl = 'https://displayvideo.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.advertisers = {};
    this.advertisers.listAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}:listAssignedTargetingOptions', 'GET', params);
    this.advertisers.editAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}:editAssignedTargetingOptions', 'POST', params);
    this.advertisers.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}', 'GET', params);
    this.advertisers.list = (params) => this._makeRequest('v3/advertisers', 'GET', params);
    this.advertisers.create = (params) => this._makeRequest('v3/advertisers', 'POST', params);
    this.advertisers.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}', 'PATCH', params);
    this.advertisers.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}', 'DELETE', params);
    this.advertisers.audit = (params) => this._makeRequest('v3/advertisers/{+advertiserId}:audit', 'GET', params);

    this.advertisers.adGroupAds = {};
    this.advertisers.adGroupAds.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroupAds/{+adGroupAdId}', 'GET', params);
    this.advertisers.adGroupAds.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroupAds', 'GET', params);

    this.advertisers.adGroups = {};
    this.advertisers.adGroups.bulkListAdGroupAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroups:bulkListAdGroupAssignedTargetingOptions', 'GET', params);
    this.advertisers.adGroups.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroups/{+adGroupId}', 'GET', params);
    this.advertisers.adGroups.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroups', 'GET', params);

    this.advertisers.adGroups.targetingTypes = {};

    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    this.advertisers.lineItems = {};
    this.advertisers.lineItems.bulkListAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems:bulkListAssignedTargetingOptions', 'GET', params);
    this.advertisers.lineItems.bulkEditAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems:bulkEditAssignedTargetingOptions', 'POST', params);
    this.advertisers.lineItems.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'GET', params);
    this.advertisers.lineItems.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems', 'GET', params);
    this.advertisers.lineItems.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems', 'POST', params);
    this.advertisers.lineItems.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'PATCH', params);
    this.advertisers.lineItems.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'DELETE', params);
    this.advertisers.lineItems.generateDefault = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems:generateDefault', 'POST', params);
    this.advertisers.lineItems.duplicate = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}:duplicate', 'POST', params);
    this.advertisers.lineItems.bulkUpdate = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems:bulkUpdate', 'POST', params);

    this.advertisers.lineItems.targetingTypes = {};

    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.advertisers.targetingTypes = {};

    this.advertisers.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.advertisers.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);
    this.advertisers.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);
    this.advertisers.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.advertisers.assets = {};
    this.advertisers.assets.upload = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/assets', 'POST', params);

    this.advertisers.campaigns = {};
    this.advertisers.campaigns.listAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}:listAssignedTargetingOptions', 'GET', params);
    this.advertisers.campaigns.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'GET', params);
    this.advertisers.campaigns.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns', 'GET', params);
    this.advertisers.campaigns.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns', 'POST', params);
    this.advertisers.campaigns.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'PATCH', params);
    this.advertisers.campaigns.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'DELETE', params);

    this.advertisers.campaigns.targetingTypes = {};

    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    this.advertisers.channels = {};
    this.advertisers.channels.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/channels/{+channelId}', 'GET', params);
    this.advertisers.channels.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/channels', 'GET', params);
    this.advertisers.channels.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/channels', 'POST', params);
    this.advertisers.channels.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/channels/{channelId}', 'PATCH', params);

    this.advertisers.channels.sites = {};
    this.advertisers.channels.sites.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/channels/{+channelId}/sites', 'GET', params);
    this.advertisers.channels.sites.create = (params) => this._makeRequest('v3/advertisers/{advertiserId}/channels/{+channelId}/sites', 'POST', params);
    this.advertisers.channels.sites.delete = (params) => this._makeRequest('v3/advertisers/{advertiserId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', params);
    this.advertisers.channels.sites.bulkEdit = (params) => this._makeRequest('v3/advertisers/{advertiserId}/channels/{+channelId}/sites:bulkEdit', 'POST', params);
    this.advertisers.channels.sites.replace = (params) => this._makeRequest('v3/advertisers/{advertiserId}/channels/{+channelId}/sites:replace', 'POST', params);

    this.advertisers.creatives = {};
    this.advertisers.creatives.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/creatives/{+creativeId}', 'GET', params);
    this.advertisers.creatives.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/creatives', 'GET', params);
    this.advertisers.creatives.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/creatives', 'POST', params);
    this.advertisers.creatives.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/creatives/{+creativeId}', 'PATCH', params);
    this.advertisers.creatives.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/creatives/{+creativeId}', 'DELETE', params);

    this.advertisers.insertionOrders = {};
    this.advertisers.insertionOrders.listAssignedTargetingOptions = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}:listAssignedTargetingOptions', 'GET', params);
    this.advertisers.insertionOrders.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'GET', params);
    this.advertisers.insertionOrders.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders', 'GET', params);
    this.advertisers.insertionOrders.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders', 'POST', params);
    this.advertisers.insertionOrders.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'PATCH', params);
    this.advertisers.insertionOrders.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'DELETE', params);

    this.advertisers.insertionOrders.targetingTypes = {};

    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.advertisers.invoices = {};
    this.advertisers.invoices.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/invoices', 'GET', params);
    this.advertisers.invoices.lookupInvoiceCurrency = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/invoices:lookupInvoiceCurrency', 'GET', params);

    this.advertisers.locationLists = {};
    this.advertisers.locationLists.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/locationLists/{+locationListId}', 'GET', params);
    this.advertisers.locationLists.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/locationLists', 'GET', params);
    this.advertisers.locationLists.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/locationLists', 'POST', params);
    this.advertisers.locationLists.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/locationLists/{locationListId}', 'PATCH', params);

    this.advertisers.locationLists.assignedLocations = {};
    this.advertisers.locationLists.assignedLocations.list = (params) => this._makeRequest('v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'GET', params);
    this.advertisers.locationLists.assignedLocations.create = (params) => this._makeRequest('v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'POST', params);
    this.advertisers.locationLists.assignedLocations.delete = (params) => this._makeRequest('v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{+assignedLocationId}', 'DELETE', params);
    this.advertisers.locationLists.assignedLocations.bulkEdit = (params) => this._makeRequest('v3/advertisers/{advertiserId}/locationLists/{+locationListId}/assignedLocations:bulkEdit', 'POST', params);

    this.advertisers.negativeKeywordLists = {};
    this.advertisers.negativeKeywordLists.get = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'GET', params);
    this.advertisers.negativeKeywordLists.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists', 'GET', params);
    this.advertisers.negativeKeywordLists.create = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists', 'POST', params);
    this.advertisers.negativeKeywordLists.patch = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists/{negativeKeywordListId}', 'PATCH', params);
    this.advertisers.negativeKeywordLists.delete = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'DELETE', params);

    this.advertisers.negativeKeywordLists.negativeKeywords = {};
    this.advertisers.negativeKeywordLists.negativeKeywords.list = (params) => this._makeRequest('v3/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'GET', params);
    this.advertisers.negativeKeywordLists.negativeKeywords.create = (params) => this._makeRequest('v3/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'POST', params);
    this.advertisers.negativeKeywordLists.negativeKeywords.delete = (params) => this._makeRequest('v3/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords/{+keywordValue}', 'DELETE', params);
    this.advertisers.negativeKeywordLists.negativeKeywords.bulkEdit = (params) => this._makeRequest('v3/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:bulkEdit', 'POST', params);
    this.advertisers.negativeKeywordLists.negativeKeywords.replace = (params) => this._makeRequest('v3/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:replace', 'POST', params);

    this.combinedAudiences = {};
    this.combinedAudiences.get = (params) => this._makeRequest('v3/combinedAudiences/{+combinedAudienceId}', 'GET', params);
    this.combinedAudiences.list = (params) => this._makeRequest('v3/combinedAudiences', 'GET', params);

    this.customBiddingAlgorithms = {};
    this.customBiddingAlgorithms.uploadRules = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadRules', 'GET', params);
    this.customBiddingAlgorithms.get = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'GET', params);
    this.customBiddingAlgorithms.list = (params) => this._makeRequest('v3/customBiddingAlgorithms', 'GET', params);
    this.customBiddingAlgorithms.create = (params) => this._makeRequest('v3/customBiddingAlgorithms', 'POST', params);
    this.customBiddingAlgorithms.patch = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'PATCH', params);
    this.customBiddingAlgorithms.uploadScript = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadScript', 'GET', params);

    this.customBiddingAlgorithms.rules = {};
    this.customBiddingAlgorithms.rules.create = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'POST', params);
    this.customBiddingAlgorithms.rules.get = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules/{+customBiddingAlgorithmRulesId}', 'GET', params);
    this.customBiddingAlgorithms.rules.list = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'GET', params);

    this.customBiddingAlgorithms.scripts = {};
    this.customBiddingAlgorithms.scripts.create = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'POST', params);
    this.customBiddingAlgorithms.scripts.get = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts/{+customBiddingScriptId}', 'GET', params);
    this.customBiddingAlgorithms.scripts.list = (params) => this._makeRequest('v3/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'GET', params);

    this.customLists = {};
    this.customLists.get = (params) => this._makeRequest('v3/customLists/{+customListId}', 'GET', params);
    this.customLists.list = (params) => this._makeRequest('v3/customLists', 'GET', params);

    this.firstAndThirdPartyAudiences = {};
    this.firstAndThirdPartyAudiences.get = (params) => this._makeRequest('v3/firstAndThirdPartyAudiences/{+firstAndThirdPartyAudienceId}', 'GET', params);
    this.firstAndThirdPartyAudiences.list = (params) => this._makeRequest('v3/firstAndThirdPartyAudiences', 'GET', params);
    this.firstAndThirdPartyAudiences.create = (params) => this._makeRequest('v3/firstAndThirdPartyAudiences', 'POST', params);
    this.firstAndThirdPartyAudiences.patch = (params) => this._makeRequest('v3/firstAndThirdPartyAudiences/{+firstAndThirdPartyAudienceId}', 'PATCH', params);
    this.firstAndThirdPartyAudiences.editCustomerMatchMembers = (params) => this._makeRequest('v3/firstAndThirdPartyAudiences/{+firstAndThirdPartyAudienceId}:editCustomerMatchMembers', 'POST', params);

    this.floodlightGroups = {};
    this.floodlightGroups.get = (params) => this._makeRequest('v3/floodlightGroups/{+floodlightGroupId}', 'GET', params);
    this.floodlightGroups.patch = (params) => this._makeRequest('v3/floodlightGroups/{floodlightGroupId}', 'PATCH', params);

    this.floodlightGroups.floodlightActivities = {};
    this.floodlightGroups.floodlightActivities.get = (params) => this._makeRequest('v3/floodlightGroups/{+floodlightGroupId}/floodlightActivities/{+floodlightActivityId}', 'GET', params);
    this.floodlightGroups.floodlightActivities.list = (params) => this._makeRequest('v3/floodlightGroups/{+floodlightGroupId}/floodlightActivities', 'GET', params);

    this.googleAudiences = {};
    this.googleAudiences.get = (params) => this._makeRequest('v3/googleAudiences/{+googleAudienceId}', 'GET', params);
    this.googleAudiences.list = (params) => this._makeRequest('v3/googleAudiences', 'GET', params);

    this.guaranteedOrders = {};
    this.guaranteedOrders.create = (params) => this._makeRequest('v3/guaranteedOrders', 'POST', params);
    this.guaranteedOrders.get = (params) => this._makeRequest('v3/guaranteedOrders/{+guaranteedOrderId}', 'GET', params);
    this.guaranteedOrders.list = (params) => this._makeRequest('v3/guaranteedOrders', 'GET', params);
    this.guaranteedOrders.patch = (params) => this._makeRequest('v3/guaranteedOrders/{+guaranteedOrderId}', 'PATCH', params);
    this.guaranteedOrders.editGuaranteedOrderReadAccessors = (params) => this._makeRequest('v3/guaranteedOrders/{+guaranteedOrderId}:editGuaranteedOrderReadAccessors', 'POST', params);

    this.inventorySourceGroups = {};
    this.inventorySourceGroups.get = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}', 'GET', params);
    this.inventorySourceGroups.list = (params) => this._makeRequest('v3/inventorySourceGroups', 'GET', params);
    this.inventorySourceGroups.create = (params) => this._makeRequest('v3/inventorySourceGroups', 'POST', params);
    this.inventorySourceGroups.patch = (params) => this._makeRequest('v3/inventorySourceGroups/{inventorySourceGroupId}', 'PATCH', params);
    this.inventorySourceGroups.delete = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}', 'DELETE', params);

    this.inventorySourceGroups.assignedInventorySources = {};
    this.inventorySourceGroups.assignedInventorySources.list = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'GET', params);
    this.inventorySourceGroups.assignedInventorySources.create = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'POST', params);
    this.inventorySourceGroups.assignedInventorySources.delete = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources/{+assignedInventorySourceId}', 'DELETE', params);
    this.inventorySourceGroups.assignedInventorySources.bulkEdit = (params) => this._makeRequest('v3/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources:bulkEdit', 'POST', params);

    this.inventorySources = {};
    this.inventorySources.get = (params) => this._makeRequest('v3/inventorySources/{+inventorySourceId}', 'GET', params);
    this.inventorySources.list = (params) => this._makeRequest('v3/inventorySources', 'GET', params);
    this.inventorySources.create = (params) => this._makeRequest('v3/inventorySources', 'POST', params);
    this.inventorySources.patch = (params) => this._makeRequest('v3/inventorySources/{+inventorySourceId}', 'PATCH', params);
    this.inventorySources.editInventorySourceReadWriteAccessors = (params) => this._makeRequest('v3/inventorySources/{+inventorySourceId}:editInventorySourceReadWriteAccessors', 'POST', params);

    this.partners = {};
    this.partners.editAssignedTargetingOptions = (params) => this._makeRequest('v3/partners/{+partnerId}:editAssignedTargetingOptions', 'POST', params);
    this.partners.get = (params) => this._makeRequest('v3/partners/{+partnerId}', 'GET', params);
    this.partners.list = (params) => this._makeRequest('v3/partners', 'GET', params);

    this.partners.channels = {};
    this.partners.channels.get = (params) => this._makeRequest('v3/partners/{+partnerId}/channels/{+channelId}', 'GET', params);
    this.partners.channels.list = (params) => this._makeRequest('v3/partners/{+partnerId}/channels', 'GET', params);
    this.partners.channels.create = (params) => this._makeRequest('v3/partners/{+partnerId}/channels', 'POST', params);
    this.partners.channels.patch = (params) => this._makeRequest('v3/partners/{+partnerId}/channels/{channelId}', 'PATCH', params);

    this.partners.channels.sites = {};
    this.partners.channels.sites.list = (params) => this._makeRequest('v3/partners/{+partnerId}/channels/{+channelId}/sites', 'GET', params);
    this.partners.channels.sites.create = (params) => this._makeRequest('v3/partners/{partnerId}/channels/{+channelId}/sites', 'POST', params);
    this.partners.channels.sites.delete = (params) => this._makeRequest('v3/partners/{partnerId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', params);
    this.partners.channels.sites.bulkEdit = (params) => this._makeRequest('v3/partners/{partnerId}/channels/{+channelId}/sites:bulkEdit', 'POST', params);
    this.partners.channels.sites.replace = (params) => this._makeRequest('v3/partners/{partnerId}/channels/{+channelId}/sites:replace', 'POST', params);

    this.partners.targetingTypes = {};

    this.partners.targetingTypes.assignedTargetingOptions = {};
    this.partners.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v3/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);
    this.partners.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v3/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);
    this.partners.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v3/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);
    this.partners.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v3/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.sdfdownloadtasks = {};
    this.sdfdownloadtasks.create = (params) => this._makeRequest('v3/sdfdownloadtasks', 'POST', params);

    this.sdfdownloadtasks.operations = {};
    this.sdfdownloadtasks.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.targetingTypes = {};

    this.targetingTypes.targetingOptions = {};
    this.targetingTypes.targetingOptions.get = (params) => this._makeRequest('v3/targetingTypes/{+targetingType}/targetingOptions/{+targetingOptionId}', 'GET', params);
    this.targetingTypes.targetingOptions.list = (params) => this._makeRequest('v3/targetingTypes/{+targetingType}/targetingOptions', 'GET', params);
    this.targetingTypes.targetingOptions.search = (params) => this._makeRequest('v3/targetingTypes/{+targetingType}/targetingOptions:search', 'POST', params);

    this.users = {};
    this.users.get = (params) => this._makeRequest('v3/users/{+userId}', 'GET', params);
    this.users.list = (params) => this._makeRequest('v3/users', 'GET', params);
    this.users.create = (params) => this._makeRequest('v3/users', 'POST', params);
    this.users.patch = (params) => this._makeRequest('v3/users/{+userId}', 'PATCH', params);
    this.users.delete = (params) => this._makeRequest('v3/users/{+userId}', 'DELETE', params);
    this.users.bulkEditAssignedUserRoles = (params) => this._makeRequest('v3/users/{+userId}:bulkEditAssignedUserRoles', 'POST', params);

    this.media = {};
    this.media.upload = (params) => this._makeRequest('media/{+resourceName}', 'POST', params);
    this.media.download = (params) => this._makeRequest('download/{+resourceName}', 'GET', params);
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
