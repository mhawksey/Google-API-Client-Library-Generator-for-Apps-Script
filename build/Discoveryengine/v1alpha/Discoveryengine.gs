
/**
 * Google Apps Script client library for the Discovery Engine API
 * Documentation URL: https://cloud.google.com/generative-ai-app-builder/docs/
 * @class
 */
class Discoveryengine {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://discoveryengine.googleapis.com/';
    this._servicePath = '';


    this.billingAccounts = {};

    this.billingAccounts.billingAccountLicenseConfigs = {};
    this.billingAccounts.billingAccountLicenseConfigs.distributeLicenseConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+billingAccountLicenseConfig}:distributeLicenseConfig', 'POST', apiParams, clientConfig);
    this.billingAccounts.billingAccountLicenseConfigs.retractLicenseConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+billingAccountLicenseConfig}:retractLicenseConfig', 'POST', apiParams, clientConfig);
    this.billingAccounts.billingAccountLicenseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/billingAccountLicenseConfigs', 'GET', apiParams, clientConfig);
    this.billingAccounts.billingAccountLicenseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects = {};
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.provision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:provision', 'POST', apiParams, clientConfig);
    this.projects.reportConsentChange = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+project}:reportConsentChange', 'POST', apiParams, clientConfig);
    this.projects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.updateAclConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.getAclConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateCmekConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.getCmekConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.obtainCrawlRate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+location}:obtainCrawlRate', 'POST', apiParams, clientConfig);
    this.projects.locations.setDedicatedCrawlRate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+location}:setDedicatedCrawlRate', 'POST', apiParams, clientConfig);
    this.projects.locations.removeDedicatedCrawlRate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+location}:removeDedicatedCrawlRate', 'POST', apiParams, clientConfig);
    this.projects.locations.setUpDataConnector = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:setUpDataConnector', 'POST', apiParams, clientConfig);
    this.projects.locations.setUpDataConnectorV2 = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:setUpDataConnectorV2', 'POST', apiParams, clientConfig);
    this.projects.locations.estimateDataSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+location}:estimateDataSize', 'POST', apiParams, clientConfig);
    this.projects.locations.queryConfigurablePricingUsageStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+project}/locations/{location}:queryConfigurablePricingUsageStats', 'GET', apiParams, clientConfig);

    this.projects.locations.notebooks = {};
    this.projects.locations.notebooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/notebooks', 'POST', apiParams, clientConfig);
    this.projects.locations.notebooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebooks.listRecentlyViewed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/notebooks:listRecentlyViewed', 'GET', apiParams, clientConfig);
    this.projects.locations.notebooks.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/notebooks:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.notebooks.share = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:share', 'POST', apiParams, clientConfig);

    this.projects.locations.notebooks.audioOverviews = {};
    this.projects.locations.notebooks.audioOverviews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/audioOverviews', 'POST', apiParams, clientConfig);
    this.projects.locations.notebooks.audioOverviews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.notebooks.sources = {};
    this.projects.locations.notebooks.sources.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sources:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.notebooks.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebooks.sources.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sources:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.groundingConfigs = {};
    this.projects.locations.groundingConfigs.check = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+groundingConfig}:check', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.podcasts = {};

    this.projects.locations.podcasts.operations = {};
    this.projects.locations.podcasts.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.authorizations = {};
    this.projects.locations.authorizations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/authorizations', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authorizations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/authorizations', 'GET', apiParams, clientConfig);

    this.projects.locations.cmekConfigs = {};
    this.projects.locations.cmekConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.cmekConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.cmekConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/cmekConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.cmekConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.collections = {};
    this.projects.locations.collections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/collections', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.getDataConnector = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.updateDataConnector = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.collections.operations = {};
    this.projects.locations.collections.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores = {};
    this.projects.locations.collections.dataStores.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.getDocumentProcessingConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.updateDocumentProcessingConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.trainCustomModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+dataStore}:trainCustomModel', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.getSiteSearchEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.servingConfigs = {};
    this.projects.locations.collections.dataStores.servingConfigs.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.searchLite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.answer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.streamAnswer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.recommend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.servingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.models = {};

    this.projects.locations.collections.dataStores.models.operations = {};
    this.projects.locations.collections.dataStores.models.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.models.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.operations = {};
    this.projects.locations.collections.dataStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.branches = {};
    this.projects.locations.collections.dataStores.branches.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/branches', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.batchGetDocumentsMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.branches.operations = {};
    this.projects.locations.collections.dataStores.branches.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.branches.documents = {};
    this.projects.locations.collections.dataStores.branches.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.getProcessedDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.branches.documents.chunks = {};
    this.projects.locations.collections.dataStores.branches.documents.chunks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.branches.documents.chunks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.completionConfig = {};
    this.projects.locations.collections.dataStores.completionConfig.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.suggestionDenyListEntries = {};
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.completionSuggestions = {};
    this.projects.locations.collections.dataStores.completionSuggestions.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.completionSuggestions.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.controls = {};
    this.projects.locations.collections.dataStores.controls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.controls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.controls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.controls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.conversations = {};
    this.projects.locations.collections.dataStores.conversations.converse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:converse', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.conversations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.schemas = {};
    this.projects.locations.collections.dataStores.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.schemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.schemas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.schemas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.schemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.schemas.operations = {};
    this.projects.locations.collections.dataStores.schemas.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.schemas.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.customModels = {};
    this.projects.locations.collections.dataStores.customModels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+dataStore}/customModels', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.sessions = {};
    this.projects.locations.collections.dataStores.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.sessions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.sessions.answers = {};
    this.projects.locations.collections.dataStores.sessions.answers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.siteSearchEngine = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.enableAdvancedSiteSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.disableAdvancedSiteSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.recrawlUris = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.batchVerifyTargetSites = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:batchVerifyTargetSites', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.fetchDomainVerificationStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:fetchDomainVerificationStatus', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.setUriPatternDocumentData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:setUriPatternDocumentData', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.getUriPatternDocumentData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:getUriPatternDocumentData', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.siteSearchEngine.operations = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.fetch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.userEvents = {};
    this.projects.locations.collections.dataStores.userEvents.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.userEvents.collect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.userEvents.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.userEvents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.dataStores.widgetConfigs = {};
    this.projects.locations.collections.dataStores.widgetConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataStores.widgetConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.collections.dataConnector = {};
    this.projects.locations.collections.dataConnector.startConnectorRun = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:startConnectorRun', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataConnector.checkRefreshToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:checkRefreshToken', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataConnector.acquireAccessToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:acquireAccessToken', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.dataConnector.getConnectorSecret = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:getConnectorSecret', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataConnector.operations = {};
    this.projects.locations.collections.dataConnector.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.dataConnector.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.dataConnector.connectorRuns = {};
    this.projects.locations.collections.dataConnector.connectorRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connectorRuns', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines = {};
    this.projects.locations.collections.engines.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/engines', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/engines', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.getWorkspaceSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:getWorkspaceSettings', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:pause', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:resume', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.tune = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:tune', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.engines.servingConfigs = {};
    this.projects.locations.collections.engines.servingConfigs.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.searchLite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.answer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.streamAnswer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.recommend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.servingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.operations = {};
    this.projects.locations.collections.engines.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.assistants = {};
    this.projects.locations.collections.engines.assistants.listAvailableAgentViews = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:listAvailableAgentViews', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.streamAssist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:streamAssist', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/assistants', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/assistants', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.assistants.agents = {};
    this.projects.locations.collections.engines.assistants.agents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/agents', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/agents', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.enableAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:enableAgent', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.disableAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:disableAgent', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.suspendAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:suspendAgent', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.agents.getAgentView = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:getAgentView', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.assistants.agents.operations = {};
    this.projects.locations.collections.engines.assistants.agents.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.assistants.agents.files = {};
    this.projects.locations.collections.engines.assistants.agents.files.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/files:import', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.engines.assistants.cannedQueries = {};
    this.projects.locations.collections.engines.assistants.cannedQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/cannedQueries', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.cannedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.cannedQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.cannedQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.assistants.cannedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/cannedQueries', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.analytics = {};
    this.projects.locations.collections.engines.analytics.exportMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+analytics}:exportMetrics', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.engines.completionConfig = {};
    this.projects.locations.collections.engines.completionConfig.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.completionConfig.removeSuggestion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+completionConfig}:removeSuggestion', 'POST', apiParams, clientConfig);

    this.projects.locations.collections.engines.controls = {};
    this.projects.locations.collections.engines.controls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.controls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.controls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.controls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.conversations = {};
    this.projects.locations.collections.engines.conversations.converse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:converse', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.conversations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.sessions = {};
    this.projects.locations.collections.engines.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.projects.locations.collections.engines.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.collections.engines.sessions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.collections.engines.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.sessions.alphaEvolveExperiments = {};

    this.projects.locations.collections.engines.sessions.alphaEvolveExperiments.operations = {};
    this.projects.locations.collections.engines.sessions.alphaEvolveExperiments.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.sessions.operations = {};
    this.projects.locations.collections.engines.sessions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.sessions.answers = {};
    this.projects.locations.collections.engines.sessions.answers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.sessions.files = {};
    this.projects.locations.collections.engines.sessions.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/files', 'GET', apiParams, clientConfig);

    this.projects.locations.collections.engines.widgetConfigs = {};
    this.projects.locations.collections.engines.widgetConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.collections.engines.widgetConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.dataStores = {};
    this.projects.locations.dataStores.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.getDocumentProcessingConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.updateDocumentProcessingConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.getSiteSearchEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.servingConfigs = {};
    this.projects.locations.dataStores.servingConfigs.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.searchLite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.answer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.streamAnswer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.recommend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.servingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.models = {};

    this.projects.locations.dataStores.models.operations = {};
    this.projects.locations.dataStores.models.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.models.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.operations = {};
    this.projects.locations.dataStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.branches = {};
    this.projects.locations.dataStores.branches.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/branches', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.batchGetDocumentsMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.branches.operations = {};
    this.projects.locations.dataStores.branches.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.branches.documents = {};
    this.projects.locations.dataStores.branches.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.getProcessedDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.branches.documents.chunks = {};
    this.projects.locations.dataStores.branches.documents.chunks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.branches.documents.chunks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.completionConfig = {};
    this.projects.locations.dataStores.completionConfig.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.suggestionDenyListEntries = {};
    this.projects.locations.dataStores.suggestionDenyListEntries.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.suggestionDenyListEntries.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.completionSuggestions = {};
    this.projects.locations.dataStores.completionSuggestions.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.completionSuggestions.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.controls = {};
    this.projects.locations.dataStores.controls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.controls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.controls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.controls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.conversations = {};
    this.projects.locations.dataStores.conversations.converse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:converse', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.conversations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.schemas = {};
    this.projects.locations.dataStores.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.schemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.schemas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.schemas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.schemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.dataStores.sessions = {};
    this.projects.locations.dataStores.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.sessions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.sessions.answers = {};
    this.projects.locations.dataStores.sessions.answers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.siteSearchEngine = {};
    this.projects.locations.dataStores.siteSearchEngine.enableAdvancedSiteSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.disableAdvancedSiteSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.recrawlUris = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.siteSearchEngine.targetSites = {};
    this.projects.locations.dataStores.siteSearchEngine.targetSites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.siteSearchEngine.sitemaps = {};
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.fetch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', apiParams, clientConfig);

    this.projects.locations.dataStores.userEvents = {};
    this.projects.locations.dataStores.userEvents.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.userEvents.collect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.userEvents.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.dataStores.userEvents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', apiParams, clientConfig);

    this.projects.locations.dataStores.widgetConfigs = {};
    this.projects.locations.dataStores.widgetConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataStores.widgetConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.evaluations = {};
    this.projects.locations.evaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/evaluations', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/evaluations', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluations.listResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+evaluation}:listResults', 'GET', apiParams, clientConfig);

    this.projects.locations.evaluations.operations = {};
    this.projects.locations.evaluations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.identityMappingStores = {};
    this.projects.locations.identityMappingStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'POST', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.importIdentityMappings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+identityMappingStore}:importIdentityMappings', 'POST', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.purgeIdentityMappings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+identityMappingStore}:purgeIdentityMappings', 'POST', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.listIdentityMappings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+identityMappingStore}:listIdentityMappings', 'GET', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'GET', apiParams, clientConfig);

    this.projects.locations.identityMappingStores.operations = {};
    this.projects.locations.identityMappingStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.identityMappingStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.licenseConfigs = {};
    this.projects.locations.licenseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/licenseConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.licenseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.licenseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.rankingConfigs = {};
    this.projects.locations.rankingConfigs.rank = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+rankingConfig}:rank', 'POST', apiParams, clientConfig);

    this.projects.locations.requirements = {};
    this.projects.locations.requirements.checkRequirement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+location}/requirements:checkRequirement', 'POST', apiParams, clientConfig);

    this.projects.locations.sampleQuerySets = {};
    this.projects.locations.sampleQuerySets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'GET', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'POST', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.sampleQuerySets.operations = {};
    this.projects.locations.sampleQuerySets.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.sampleQuerySets.sampleQueries = {};
    this.projects.locations.sampleQuerySets.sampleQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.sampleQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'GET', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.sampleQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'POST', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.sampleQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.sampleQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sampleQuerySets.sampleQueries.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sampleQueries:import', 'POST', apiParams, clientConfig);

    this.projects.locations.userEvents = {};
    this.projects.locations.userEvents.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', apiParams, clientConfig);
    this.projects.locations.userEvents.collect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', apiParams, clientConfig);
    this.projects.locations.userEvents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', apiParams, clientConfig);

    this.projects.locations.userStores = {};
    this.projects.locations.userStores.batchUpdateUserLicenses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}:batchUpdateUserLicenses', 'POST', apiParams, clientConfig);
    this.projects.locations.userStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userStores', 'POST', apiParams, clientConfig);
    this.projects.locations.userStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.userStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.userStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.userStores.operations = {};
    this.projects.locations.userStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.userStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.userStores.userLicenses = {};
    this.projects.locations.userStores.userLicenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/userLicenses', 'GET', apiParams, clientConfig);

    this.projects.locations.userStores.licenseConfigsUsageStats = {};
    this.projects.locations.userStores.licenseConfigsUsageStats.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/licenseConfigsUsageStats', 'GET', apiParams, clientConfig);

    this.projects.operations = {};
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
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
