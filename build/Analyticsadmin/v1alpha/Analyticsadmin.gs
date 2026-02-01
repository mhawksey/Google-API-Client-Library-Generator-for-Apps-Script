
/**
 * Google Apps Script client library for the Google Analytics Admin API
 * Documentation URL: http://code.google.com/apis/analytics/docs/mgmt/home.html
 * @class
 */
class Analyticsadmin {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';


    this.accountSummaries = {};
    this.accountSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accountSummaries', 'GET', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.getDataSharingSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accounts', 'GET', apiParams, clientConfig);
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.searchChangeHistoryEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+account}:searchChangeHistoryEvents', 'POST', apiParams, clientConfig);
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.provisionAccountTicket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accounts:provisionAccountTicket', 'POST', apiParams, clientConfig);

    this.accounts.accessBindings = {};
    this.accounts.accessBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', apiParams, clientConfig);
    this.accounts.accessBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.accessBindings.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', apiParams, clientConfig);
    this.accounts.accessBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', apiParams, clientConfig);
    this.accounts.accessBindings.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', apiParams, clientConfig);
    this.accounts.accessBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.accessBindings.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', apiParams, clientConfig);
    this.accounts.accessBindings.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', apiParams, clientConfig);
    this.accounts.accessBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties = {};
    this.properties.getAttributionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.createRollupProperty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties:createRollupProperty', 'POST', apiParams, clientConfig);
    this.properties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties', 'GET', apiParams, clientConfig);
    this.properties.getDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.getReportingIdentitySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.acknowledgeUserDataCollection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+property}:acknowledgeUserDataCollection', 'POST', apiParams, clientConfig);
    this.properties.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);
    this.properties.updateGoogleSignalsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.submitUserDeletion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:submitUserDeletion', 'POST', apiParams, clientConfig);
    this.properties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties', 'POST', apiParams, clientConfig);
    this.properties.provisionSubproperty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties:provisionSubproperty', 'POST', apiParams, clientConfig);
    this.properties.getGoogleSignalsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.updateDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.updateAttributionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.dataStreams = {};
    this.properties.dataStreams.updateDataRedactionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.getEnhancedMeasurementSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.getGlobalSiteTag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.updateEnhancedMeasurementSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.getDataRedactionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.dataStreams.eventCreateRules = {};
    this.properties.dataStreams.eventCreateRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.eventCreateRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.eventCreateRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.eventCreateRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.dataStreams.eventCreateRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'GET', apiParams, clientConfig);

    this.properties.dataStreams.eventEditRules = {};
    this.properties.dataStreams.eventEditRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.eventEditRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.eventEditRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.eventEditRules.reorder = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules:reorder', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.eventEditRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.eventEditRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.dataStreams.measurementProtocolSecrets = {};
    this.properties.dataStreams.measurementProtocolSecrets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.measurementProtocolSecrets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'GET', apiParams, clientConfig);

    this.properties.dataStreams.sKAdNetworkConversionValueSchema = {};
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'POST', apiParams, clientConfig);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'GET', apiParams, clientConfig);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.accessBindings = {};
    this.properties.accessBindings.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', apiParams, clientConfig);
    this.properties.accessBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.accessBindings.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', apiParams, clientConfig);
    this.properties.accessBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.accessBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.accessBindings.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', apiParams, clientConfig);
    this.properties.accessBindings.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', apiParams, clientConfig);
    this.properties.accessBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', apiParams, clientConfig);
    this.properties.accessBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', apiParams, clientConfig);

    this.properties.rollupPropertySourceLinks = {};
    this.properties.rollupPropertySourceLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'POST', apiParams, clientConfig);
    this.properties.rollupPropertySourceLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.rollupPropertySourceLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.rollupPropertySourceLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'GET', apiParams, clientConfig);

    this.properties.displayVideo360AdvertiserLinkProposals = {};
    this.properties.displayVideo360AdvertiserLinkProposals.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinkProposals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'POST', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinkProposals.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinkProposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'GET', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinkProposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinkProposals.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:approve', 'POST', apiParams, clientConfig);

    this.properties.googleAdsLinks = {};
    this.properties.googleAdsLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'GET', apiParams, clientConfig);
    this.properties.googleAdsLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'POST', apiParams, clientConfig);
    this.properties.googleAdsLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.googleAdsLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.customMetrics = {};
    this.properties.customMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'GET', apiParams, clientConfig);
    this.properties.customMetrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'POST', apiParams, clientConfig);
    this.properties.customMetrics.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);
    this.properties.customMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.customMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.conversionEvents = {};
    this.properties.conversionEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.conversionEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'GET', apiParams, clientConfig);
    this.properties.conversionEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.conversionEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.conversionEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'POST', apiParams, clientConfig);

    this.properties.customDimensions = {};
    this.properties.customDimensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'POST', apiParams, clientConfig);
    this.properties.customDimensions.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);
    this.properties.customDimensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.customDimensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.customDimensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'GET', apiParams, clientConfig);

    this.properties.keyEvents = {};
    this.properties.keyEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.keyEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.keyEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'GET', apiParams, clientConfig);
    this.properties.keyEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.keyEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'POST', apiParams, clientConfig);

    this.properties.expandedDataSets = {};
    this.properties.expandedDataSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'POST', apiParams, clientConfig);
    this.properties.expandedDataSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.expandedDataSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.expandedDataSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'GET', apiParams, clientConfig);
    this.properties.expandedDataSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.audiences = {};
    this.properties.audiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/audiences', 'GET', apiParams, clientConfig);
    this.properties.audiences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.audiences.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);
    this.properties.audiences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/audiences', 'POST', apiParams, clientConfig);
    this.properties.audiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.searchAds360Links = {};
    this.properties.searchAds360Links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'GET', apiParams, clientConfig);
    this.properties.searchAds360Links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.searchAds360Links.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.searchAds360Links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.searchAds360Links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'POST', apiParams, clientConfig);

    this.properties.subpropertySyncConfigs = {};
    this.properties.subpropertySyncConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.subpropertySyncConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertySyncConfigs', 'GET', apiParams, clientConfig);
    this.properties.subpropertySyncConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.channelGroups = {};
    this.properties.channelGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.channelGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.channelGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'POST', apiParams, clientConfig);
    this.properties.channelGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'GET', apiParams, clientConfig);
    this.properties.channelGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.displayVideo360AdvertiserLinks = {};
    this.properties.displayVideo360AdvertiserLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'POST', apiParams, clientConfig);
    this.properties.displayVideo360AdvertiserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'GET', apiParams, clientConfig);

    this.properties.adSenseLinks = {};
    this.properties.adSenseLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'GET', apiParams, clientConfig);
    this.properties.adSenseLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.adSenseLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'POST', apiParams, clientConfig);
    this.properties.adSenseLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.bigQueryLinks = {};
    this.properties.bigQueryLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'GET', apiParams, clientConfig);
    this.properties.bigQueryLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.bigQueryLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.bigQueryLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.bigQueryLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'POST', apiParams, clientConfig);

    this.properties.firebaseLinks = {};
    this.properties.firebaseLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'GET', apiParams, clientConfig);
    this.properties.firebaseLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.firebaseLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'POST', apiParams, clientConfig);

    this.properties.calculatedMetrics = {};
    this.properties.calculatedMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'GET', apiParams, clientConfig);
    this.properties.calculatedMetrics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.calculatedMetrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'POST', apiParams, clientConfig);
    this.properties.calculatedMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.calculatedMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.subpropertyEventFilters = {};
    this.properties.subpropertyEventFilters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.subpropertyEventFilters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.properties.subpropertyEventFilters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'POST', apiParams, clientConfig);
    this.properties.subpropertyEventFilters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'GET', apiParams, clientConfig);
    this.properties.subpropertyEventFilters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.reportingDataAnnotations = {};
    this.properties.reportingDataAnnotations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.properties.reportingDataAnnotations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.properties.reportingDataAnnotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'GET', apiParams, clientConfig);
    this.properties.reportingDataAnnotations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'POST', apiParams, clientConfig);
    this.properties.reportingDataAnnotations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
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
