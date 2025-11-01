
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://displayvideo.googleapis.com/';
    this._servicePath = '';


    this.inventorySourceGroups = {};
    this.inventorySourceGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}', 'GET', apiParams, clientConfig);
    this.inventorySourceGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{inventorySourceGroupId}', 'PATCH', apiParams, clientConfig);
    this.inventorySourceGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}', 'DELETE', apiParams, clientConfig);
    this.inventorySourceGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups', 'GET', apiParams, clientConfig);
    this.inventorySourceGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups', 'POST', apiParams, clientConfig);

    this.inventorySourceGroups.assignedInventorySources = {};
    this.inventorySourceGroups.assignedInventorySources.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources:bulkEdit', 'POST', apiParams, clientConfig);
    this.inventorySourceGroups.assignedInventorySources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources/{+assignedInventorySourceId}', 'DELETE', apiParams, clientConfig);
    this.inventorySourceGroups.assignedInventorySources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'POST', apiParams, clientConfig);
    this.inventorySourceGroups.assignedInventorySources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'GET', apiParams, clientConfig);

    this.googleAudiences = {};
    this.googleAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/googleAudiences', 'GET', apiParams, clientConfig);
    this.googleAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/googleAudiences/{+googleAudienceId}', 'GET', apiParams, clientConfig);

    this.media = {};
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('download/{+resourceName}', 'GET', apiParams, clientConfig);
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/media/{+resourceName}' : 'media/{+resourceName}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.floodlightGroups = {};
    this.floodlightGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{floodlightGroupId}', 'PATCH', apiParams, clientConfig);
    this.floodlightGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}', 'GET', apiParams, clientConfig);

    this.floodlightGroups.floodlightActivities = {};
    this.floodlightGroups.floodlightActivities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}/floodlightActivities/{+floodlightActivityId}', 'GET', apiParams, clientConfig);
    this.floodlightGroups.floodlightActivities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}/floodlightActivities', 'GET', apiParams, clientConfig);

    this.combinedAudiences = {};
    this.combinedAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/combinedAudiences', 'GET', apiParams, clientConfig);
    this.combinedAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/combinedAudiences/{+combinedAudienceId}', 'GET', apiParams, clientConfig);

    this.partners = {};
    this.partners.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners', 'GET', apiParams, clientConfig);
    this.partners.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}', 'GET', apiParams, clientConfig);
    this.partners.editAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}:editAssignedTargetingOptions', 'POST', apiParams, clientConfig);

    this.partners.channels = {};
    this.partners.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels', 'GET', apiParams, clientConfig);
    this.partners.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels', 'POST', apiParams, clientConfig);
    this.partners.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{channelId}', 'PATCH', apiParams, clientConfig);
    this.partners.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{+channelId}', 'GET', apiParams, clientConfig);

    this.partners.channels.sites = {};
    this.partners.channels.sites.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites:replace', 'POST', apiParams, clientConfig);
    this.partners.channels.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{+channelId}/sites', 'GET', apiParams, clientConfig);
    this.partners.channels.sites.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites:bulkEdit', 'POST', apiParams, clientConfig);
    this.partners.channels.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites', 'POST', apiParams, clientConfig);
    this.partners.channels.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', apiParams, clientConfig);

    this.partners.targetingTypes = {};

    this.partners.targetingTypes.assignedTargetingOptions = {};
    this.partners.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);
    this.partners.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);
    this.partners.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);
    this.partners.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    this.sdfdownloadtasks = {};
    this.sdfdownloadtasks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/sdfdownloadtasks', 'POST', apiParams, clientConfig);

    this.sdfdownloadtasks.operations = {};
    this.sdfdownloadtasks.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms = {};
    this.customBiddingAlgorithms.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms', 'GET', apiParams, clientConfig);
    this.customBiddingAlgorithms.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'GET', apiParams, clientConfig);
    this.customBiddingAlgorithms.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms', 'POST', apiParams, clientConfig);
    this.customBiddingAlgorithms.uploadRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadRules', 'GET', apiParams, clientConfig);
    this.customBiddingAlgorithms.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'PATCH', apiParams, clientConfig);
    this.customBiddingAlgorithms.uploadScript = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadScript', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms.scripts = {};
    this.customBiddingAlgorithms.scripts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts/{+customBiddingScriptId}', 'GET', apiParams, clientConfig);
    this.customBiddingAlgorithms.scripts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'POST', apiParams, clientConfig);
    this.customBiddingAlgorithms.scripts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms.rules = {};
    this.customBiddingAlgorithms.rules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'POST', apiParams, clientConfig);
    this.customBiddingAlgorithms.rules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'GET', apiParams, clientConfig);
    this.customBiddingAlgorithms.rules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules/{+customBiddingAlgorithmRulesId}', 'GET', apiParams, clientConfig);

    this.sdfuploadtasks = {};

    this.sdfuploadtasks.operations = {};
    this.sdfuploadtasks.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    this.advertisers = {};
    this.advertisers.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.audit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:audit', 'GET', apiParams, clientConfig);
    this.advertisers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers', 'GET', apiParams, clientConfig);
    this.advertisers.editAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:editAssignedTargetingOptions', 'POST', apiParams, clientConfig);
    this.advertisers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'GET', apiParams, clientConfig);
    this.advertisers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers', 'POST', apiParams, clientConfig);

    this.advertisers.creatives = {};
    this.advertisers.creatives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.creatives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives', 'POST', apiParams, clientConfig);
    this.advertisers.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives', 'GET', apiParams, clientConfig);
    this.advertisers.creatives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'GET', apiParams, clientConfig);

    this.advertisers.invoices = {};
    this.advertisers.invoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/invoices', 'GET', apiParams, clientConfig);
    this.advertisers.invoices.lookupInvoiceCurrency = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/invoices:lookupInvoiceCurrency', 'GET', apiParams, clientConfig);

    this.advertisers.negativeKeywordLists = {};
    this.advertisers.negativeKeywordLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists', 'GET', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'GET', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists', 'POST', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{negativeKeywordListId}', 'PATCH', apiParams, clientConfig);

    this.advertisers.negativeKeywordLists.negativeKeywords = {};
    this.advertisers.negativeKeywordLists.negativeKeywords.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:replace', 'POST', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.negativeKeywords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'GET', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.negativeKeywords.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'POST', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.negativeKeywords.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords/{+keywordValue}', 'DELETE', apiParams, clientConfig);
    this.advertisers.negativeKeywordLists.negativeKeywords.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:bulkEdit', 'POST', apiParams, clientConfig);

    this.advertisers.adGroups = {};
    this.advertisers.adGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups', 'GET', apiParams, clientConfig);
    this.advertisers.adGroups.bulkListAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups:bulkListAssignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.adGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}', 'GET', apiParams, clientConfig);

    this.advertisers.adGroups.youtubeAssetTypes = {};

    this.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations = {};
    this.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations', 'POST', apiParams, clientConfig);
    this.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations/{+youtubeAssetAssociationId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.adGroups.youtubeAssetTypes.youtubeAssetAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations', 'GET', apiParams, clientConfig);

    this.advertisers.adGroups.targetingTypes = {};

    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    this.advertisers.lineItems = {};
    this.advertisers.lineItems.duplicate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}:duplicate', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.lineItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'GET', apiParams, clientConfig);
    this.advertisers.lineItems.bulkUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkUpdate', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.lineItems.bulkEditAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkEditAssignedTargetingOptions', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.generateDefault = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:generateDefault', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.bulkListAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkListAssignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.lineItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems', 'GET', apiParams, clientConfig);

    this.advertisers.lineItems.targetingTypes = {};

    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    this.advertisers.lineItems.youtubeAssetTypes = {};

    this.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations = {};
    this.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations', 'POST', apiParams, clientConfig);
    this.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations', 'GET', apiParams, clientConfig);
    this.advertisers.lineItems.youtubeAssetTypes.youtubeAssetAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/youtubeAssetTypes/{+youtubeAssetType}/youtubeAssetAssociations/{+youtubeAssetAssociationId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.targetingTypes = {};

    this.advertisers.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);
    this.advertisers.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);
    this.advertisers.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.assets = {};
    this.advertisers.assets.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v4/advertisers/{+advertiserId}/assets' : 'v4/advertisers/{+advertiserId}/assets';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.advertisers.insertionOrders = {};
    this.advertisers.insertionOrders.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.insertionOrders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.insertionOrders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.insertionOrders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'GET', apiParams, clientConfig);
    this.advertisers.insertionOrders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders', 'POST', apiParams, clientConfig);
    this.advertisers.insertionOrders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders', 'GET', apiParams, clientConfig);

    this.advertisers.insertionOrders.targetingTypes = {};

    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);

    this.advertisers.adAssets = {};
    this.advertisers.adAssets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adAssets', 'GET', apiParams, clientConfig);
    this.advertisers.adAssets.bulkCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adAssets:bulkCreate', 'POST', apiParams, clientConfig);
    this.advertisers.adAssets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adAssets', 'POST', apiParams, clientConfig);
    this.advertisers.adAssets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adAssets/{+adAssetId}', 'GET', apiParams, clientConfig);
    this.advertisers.adAssets.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v4/advertisers/{+advertiserId}/adAssets:uploadAdAsset' : 'v4/advertisers/{+advertiserId}/adAssets:uploadAdAsset';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.advertisers.channels = {};
    this.advertisers.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{channelId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels', 'GET', apiParams, clientConfig);
    this.advertisers.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels', 'POST', apiParams, clientConfig);
    this.advertisers.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{+channelId}', 'GET', apiParams, clientConfig);

    this.advertisers.channels.sites = {};
    this.advertisers.channels.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{+channelId}/sites', 'GET', apiParams, clientConfig);
    this.advertisers.channels.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites', 'POST', apiParams, clientConfig);
    this.advertisers.channels.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.channels.sites.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites:replace', 'POST', apiParams, clientConfig);
    this.advertisers.channels.sites.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites:bulkEdit', 'POST', apiParams, clientConfig);

    this.advertisers.locationLists = {};
    this.advertisers.locationLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists', 'GET', apiParams, clientConfig);
    this.advertisers.locationLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists/{+locationListId}', 'GET', apiParams, clientConfig);
    this.advertisers.locationLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists/{locationListId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.locationLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists', 'POST', apiParams, clientConfig);

    this.advertisers.locationLists.assignedLocations = {};
    this.advertisers.locationLists.assignedLocations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'GET', apiParams, clientConfig);
    this.advertisers.locationLists.assignedLocations.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{+locationListId}/assignedLocations:bulkEdit', 'POST', apiParams, clientConfig);
    this.advertisers.locationLists.assignedLocations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{+assignedLocationId}', 'DELETE', apiParams, clientConfig);
    this.advertisers.locationLists.assignedLocations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'POST', apiParams, clientConfig);

    this.advertisers.adGroupAds = {};
    this.advertisers.adGroupAds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroupAds/{+adGroupAdId}', 'GET', apiParams, clientConfig);
    this.advertisers.adGroupAds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroupAds', 'GET', apiParams, clientConfig);

    this.advertisers.campaigns = {};
    this.advertisers.campaigns.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'PATCH', apiParams, clientConfig);
    this.advertisers.campaigns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'GET', apiParams, clientConfig);
    this.advertisers.campaigns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns', 'GET', apiParams, clientConfig);
    this.advertisers.campaigns.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns', 'POST', apiParams, clientConfig);
    this.advertisers.campaigns.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.campaigns.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.campaigns.targetingTypes = {};

    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions = {};
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    this.guaranteedOrders = {};
    this.guaranteedOrders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders', 'POST', apiParams, clientConfig);
    this.guaranteedOrders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}', 'PATCH', apiParams, clientConfig);
    this.guaranteedOrders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders', 'GET', apiParams, clientConfig);
    this.guaranteedOrders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}', 'GET', apiParams, clientConfig);
    this.guaranteedOrders.editGuaranteedOrderReadAccessors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}:editGuaranteedOrderReadAccessors', 'POST', apiParams, clientConfig);

    this.inventorySources = {};
    this.inventorySources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}', 'PATCH', apiParams, clientConfig);
    this.inventorySources.editInventorySourceReadWriteAccessors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}:editInventorySourceReadWriteAccessors', 'POST', apiParams, clientConfig);
    this.inventorySources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources', 'POST', apiParams, clientConfig);
    this.inventorySources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}', 'GET', apiParams, clientConfig);
    this.inventorySources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources', 'GET', apiParams, clientConfig);

    this.firstPartyAndPartnerAudiences = {};
    this.firstPartyAndPartnerAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences', 'GET', apiParams, clientConfig);
    this.firstPartyAndPartnerAudiences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences', 'POST', apiParams, clientConfig);
    this.firstPartyAndPartnerAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}', 'GET', apiParams, clientConfig);
    this.firstPartyAndPartnerAudiences.editCustomerMatchMembers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}:editCustomerMatchMembers', 'POST', apiParams, clientConfig);
    this.firstPartyAndPartnerAudiences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}', 'PATCH', apiParams, clientConfig);

    this.targetingTypes = {};

    this.targetingTypes.targetingOptions = {};
    this.targetingTypes.targetingOptions.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions:search', 'POST', apiParams, clientConfig);
    this.targetingTypes.targetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions', 'GET', apiParams, clientConfig);
    this.targetingTypes.targetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions/{+targetingOptionId}', 'GET', apiParams, clientConfig);

    this.users = {};
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'DELETE', apiParams, clientConfig);
    this.users.bulkEditAssignedUserRoles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}:bulkEditAssignedUserRoles', 'POST', apiParams, clientConfig);
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'PATCH', apiParams, clientConfig);
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users', 'GET', apiParams, clientConfig);
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'GET', apiParams, clientConfig);
    this.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users', 'POST', apiParams, clientConfig);

    this.customLists = {};
    this.customLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customLists', 'GET', apiParams, clientConfig);
    this.customLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customLists/{+customListId}', 'GET', apiParams, clientConfig);
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
