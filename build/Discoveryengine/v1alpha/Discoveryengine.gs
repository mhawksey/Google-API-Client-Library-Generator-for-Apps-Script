
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://discoveryengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};
    this.media.download = (params) => this._makeRequest('v1alpha/{+name}:downloadFile', 'GET', params);

    this.projects = {};
    this.projects.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.provision = (params) => this._makeRequest('v1alpha/{+name}:provision', 'POST', params);
    this.projects.reportConsentChange = (params) => this._makeRequest('v1alpha/{+project}:reportConsentChange', 'POST', params);

    this.projects.locations = {};
    this.projects.locations.updateAclConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.getAclConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.updateCmekConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.getCmekConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.obtainCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:obtainCrawlRate', 'POST', params);
    this.projects.locations.setDedicatedCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:setDedicatedCrawlRate', 'POST', params);
    this.projects.locations.removeDedicatedCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:removeDedicatedCrawlRate', 'POST', params);
    this.projects.locations.setUpDataConnector = (params) => this._makeRequest('v1alpha/{+parent}:setUpDataConnector', 'POST', params);
    this.projects.locations.estimateDataSize = (params) => this._makeRequest('v1alpha/{+location}:estimateDataSize', 'POST', params);

    this.projects.locations.notebooks = {};
    this.projects.locations.notebooks.listRecentlyViewed = (params) => this._makeRequest('v1alpha/{+parent}/notebooks:listRecentlyViewed', 'GET', params);

    this.projects.locations.notebooks.sources = {};
    this.projects.locations.notebooks.sources.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/sources:batchCreate', 'POST', params);
    this.projects.locations.notebooks.sources.uploadFile = (params) => this._makeRequest('v1alpha/{+parent}/sources/{sourceId}:uploadFile', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.podcasts = {};

    this.projects.locations.podcasts.operations = {};
    this.projects.locations.podcasts.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.cmekConfigs = {};
    this.projects.locations.cmekConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.cmekConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.cmekConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/cmekConfigs', 'GET', params);
    this.projects.locations.cmekConfigs.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.collections = {};
    this.projects.locations.collections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.list = (params) => this._makeRequest('v1alpha/{+parent}/collections', 'GET', params);
    this.projects.locations.collections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.getDataConnector = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.updateDataConnector = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.projects.locations.collections.operations = {};
    this.projects.locations.collections.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores = {};
    this.projects.locations.collections.dataStores.completeQuery = (params) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', params);
    this.projects.locations.collections.dataStores.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', params);
    this.projects.locations.collections.dataStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', params);
    this.projects.locations.collections.dataStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.getDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.updateDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.trainCustomModel = (params) => this._makeRequest('v1alpha/{+dataStore}:trainCustomModel', 'POST', params);
    this.projects.locations.collections.dataStores.getSiteSearchEngine = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.servingConfigs = {};
    this.projects.locations.collections.dataStores.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);
    this.projects.locations.collections.dataStores.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);
    this.projects.locations.collections.dataStores.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);
    this.projects.locations.collections.dataStores.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);
    this.projects.locations.collections.dataStores.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);
    this.projects.locations.collections.dataStores.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.collections.dataStores.models = {};

    this.projects.locations.collections.dataStores.models.operations = {};
    this.projects.locations.collections.dataStores.models.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.models.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.operations = {};
    this.projects.locations.collections.dataStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.completionConfig = {};
    this.projects.locations.collections.dataStores.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);

    this.projects.locations.collections.dataStores.suggestionDenyListEntries = {};
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.import = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', params);
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.purge = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', params);

    this.projects.locations.collections.dataStores.completionSuggestions = {};
    this.projects.locations.collections.dataStores.completionSuggestions.import = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', params);
    this.projects.locations.collections.dataStores.completionSuggestions.purge = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', params);

    this.projects.locations.collections.dataStores.controls = {};
    this.projects.locations.collections.dataStores.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);
    this.projects.locations.collections.dataStores.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.collections.dataStores.conversations = {};
    this.projects.locations.collections.dataStores.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);
    this.projects.locations.collections.dataStores.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);
    this.projects.locations.collections.dataStores.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.collections.dataStores.branches = {};
    this.projects.locations.collections.dataStores.branches.batchGetDocumentsMetadata = (params) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', params);

    this.projects.locations.collections.dataStores.branches.operations = {};
    this.projects.locations.collections.dataStores.branches.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.branches.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.branches.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.collections.dataStores.branches.documents = {};
    this.projects.locations.collections.dataStores.branches.documents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.branches.documents.list = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', params);
    this.projects.locations.collections.dataStores.branches.documents.create = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', params);
    this.projects.locations.collections.dataStores.branches.documents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.branches.documents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.branches.documents.import = (params) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', params);
    this.projects.locations.collections.dataStores.branches.documents.purge = (params) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', params);
    this.projects.locations.collections.dataStores.branches.documents.getProcessedDocument = (params) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', params);

    this.projects.locations.collections.dataStores.branches.documents.chunks = {};
    this.projects.locations.collections.dataStores.branches.documents.chunks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.branches.documents.chunks.list = (params) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', params);

    this.projects.locations.collections.dataStores.schemas = {};
    this.projects.locations.collections.dataStores.schemas.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.schemas.list = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', params);
    this.projects.locations.collections.dataStores.schemas.create = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', params);
    this.projects.locations.collections.dataStores.schemas.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.schemas.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.collections.dataStores.schemas.operations = {};
    this.projects.locations.collections.dataStores.schemas.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.schemas.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.customModels = {};
    this.projects.locations.collections.dataStores.customModels.list = (params) => this._makeRequest('v1alpha/{+dataStore}/customModels', 'GET', params);

    this.projects.locations.collections.dataStores.sessions = {};
    this.projects.locations.collections.dataStores.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);
    this.projects.locations.collections.dataStores.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.collections.dataStores.sessions.answers = {};
    this.projects.locations.collections.dataStores.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.enableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.disableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.recrawlUris = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.batchVerifyTargetSites = (params) => this._makeRequest('v1alpha/{+parent}:batchVerifyTargetSites', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.fetchDomainVerificationStatus = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:fetchDomainVerificationStatus', 'GET', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.setUriPatternDocumentData = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:setUriPatternDocumentData', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.getUriPatternDocumentData = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:getUriPatternDocumentData', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.operations = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.create = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.list = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps = {};
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.create = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.fetch = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', params);

    this.projects.locations.collections.dataStores.userEvents = {};
    this.projects.locations.collections.dataStores.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);
    this.projects.locations.collections.dataStores.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);
    this.projects.locations.collections.dataStores.userEvents.purge = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', params);
    this.projects.locations.collections.dataStores.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.collections.dataStores.widgetConfigs = {};
    this.projects.locations.collections.dataStores.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataConnector = {};
    this.projects.locations.collections.dataConnector.startConnectorRun = (params) => this._makeRequest('v1alpha/{+parent}:startConnectorRun', 'POST', params);
    this.projects.locations.collections.dataConnector.acquireAccessToken = (params) => this._makeRequest('v1alpha/{+name}:acquireAccessToken', 'POST', params);
    this.projects.locations.collections.dataConnector.getConnectorSecret = (params) => this._makeRequest('v1alpha/{+name}:getConnectorSecret', 'GET', params);

    this.projects.locations.collections.dataConnector.operations = {};
    this.projects.locations.collections.dataConnector.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.dataConnector.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataConnector.connectorRuns = {};
    this.projects.locations.collections.dataConnector.connectorRuns.list = (params) => this._makeRequest('v1alpha/{+parent}/connectorRuns', 'GET', params);

    this.projects.locations.collections.engines = {};
    this.projects.locations.collections.engines.create = (params) => this._makeRequest('v1alpha/{+parent}/engines', 'POST', params);
    this.projects.locations.collections.engines.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.engines.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.engines.list = (params) => this._makeRequest('v1alpha/{+parent}/engines', 'GET', params);
    this.projects.locations.collections.engines.pause = (params) => this._makeRequest('v1alpha/{+name}:pause', 'POST', params);
    this.projects.locations.collections.engines.resume = (params) => this._makeRequest('v1alpha/{+name}:resume', 'POST', params);
    this.projects.locations.collections.engines.tune = (params) => this._makeRequest('v1alpha/{+name}:tune', 'POST', params);

    this.projects.locations.collections.engines.servingConfigs = {};
    this.projects.locations.collections.engines.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);
    this.projects.locations.collections.engines.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);
    this.projects.locations.collections.engines.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);
    this.projects.locations.collections.engines.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);
    this.projects.locations.collections.engines.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);
    this.projects.locations.collections.engines.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.engines.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.collections.engines.operations = {};
    this.projects.locations.collections.engines.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.collections.engines.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.assistants = {};
    this.projects.locations.collections.engines.assistants.streamAssist = (params) => this._makeRequest('v1alpha/{+name}:streamAssist', 'POST', params);
    this.projects.locations.collections.engines.assistants.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.assistants.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.completionConfig = {};
    this.projects.locations.collections.engines.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);
    this.projects.locations.collections.engines.completionConfig.removeSuggestion = (params) => this._makeRequest('v1alpha/{+completionConfig}:removeSuggestion', 'POST', params);

    this.projects.locations.collections.engines.controls = {};
    this.projects.locations.collections.engines.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);
    this.projects.locations.collections.engines.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.engines.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.engines.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.collections.engines.conversations = {};
    this.projects.locations.collections.engines.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);
    this.projects.locations.collections.engines.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);
    this.projects.locations.collections.engines.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.engines.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.engines.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.collections.engines.sessions = {};
    this.projects.locations.collections.engines.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);
    this.projects.locations.collections.engines.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.collections.engines.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.collections.engines.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.collections.engines.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.collections.engines.sessions.answers = {};
    this.projects.locations.collections.engines.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.sessions.files = {};
    this.projects.locations.collections.engines.sessions.files.list = (params) => this._makeRequest('v1alpha/{+parent}/files', 'GET', params);

    this.projects.locations.collections.engines.widgetConfigs = {};
    this.projects.locations.collections.engines.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores = {};
    this.projects.locations.dataStores.completeQuery = (params) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', params);
    this.projects.locations.dataStores.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', params);
    this.projects.locations.dataStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', params);
    this.projects.locations.dataStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.getDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.updateDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.getSiteSearchEngine = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.servingConfigs = {};
    this.projects.locations.dataStores.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);
    this.projects.locations.dataStores.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);
    this.projects.locations.dataStores.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);
    this.projects.locations.dataStores.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);
    this.projects.locations.dataStores.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);
    this.projects.locations.dataStores.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.dataStores.models = {};

    this.projects.locations.dataStores.models.operations = {};
    this.projects.locations.dataStores.models.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.dataStores.models.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.operations = {};
    this.projects.locations.dataStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.dataStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.completionConfig = {};
    this.projects.locations.dataStores.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);

    this.projects.locations.dataStores.suggestionDenyListEntries = {};
    this.projects.locations.dataStores.suggestionDenyListEntries.import = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', params);
    this.projects.locations.dataStores.suggestionDenyListEntries.purge = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', params);

    this.projects.locations.dataStores.completionSuggestions = {};
    this.projects.locations.dataStores.completionSuggestions.import = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', params);
    this.projects.locations.dataStores.completionSuggestions.purge = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', params);

    this.projects.locations.dataStores.controls = {};
    this.projects.locations.dataStores.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);
    this.projects.locations.dataStores.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.dataStores.conversations = {};
    this.projects.locations.dataStores.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);
    this.projects.locations.dataStores.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);
    this.projects.locations.dataStores.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.dataStores.branches = {};
    this.projects.locations.dataStores.branches.batchGetDocumentsMetadata = (params) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', params);

    this.projects.locations.dataStores.branches.operations = {};
    this.projects.locations.dataStores.branches.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.dataStores.branches.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.branches.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.dataStores.branches.documents = {};
    this.projects.locations.dataStores.branches.documents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.branches.documents.list = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', params);
    this.projects.locations.dataStores.branches.documents.create = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', params);
    this.projects.locations.dataStores.branches.documents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.branches.documents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.branches.documents.import = (params) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', params);
    this.projects.locations.dataStores.branches.documents.purge = (params) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', params);
    this.projects.locations.dataStores.branches.documents.getProcessedDocument = (params) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', params);

    this.projects.locations.dataStores.branches.documents.chunks = {};
    this.projects.locations.dataStores.branches.documents.chunks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.branches.documents.chunks.list = (params) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', params);

    this.projects.locations.dataStores.schemas = {};
    this.projects.locations.dataStores.schemas.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.schemas.list = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', params);
    this.projects.locations.dataStores.schemas.create = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', params);
    this.projects.locations.dataStores.schemas.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.schemas.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.dataStores.sessions = {};
    this.projects.locations.dataStores.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);
    this.projects.locations.dataStores.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.dataStores.sessions.answers = {};
    this.projects.locations.dataStores.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.siteSearchEngine = {};
    this.projects.locations.dataStores.siteSearchEngine.enableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', params);
    this.projects.locations.dataStores.siteSearchEngine.disableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', params);
    this.projects.locations.dataStores.siteSearchEngine.recrawlUris = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', params);

    this.projects.locations.dataStores.siteSearchEngine.targetSites = {};
    this.projects.locations.dataStores.siteSearchEngine.targetSites.create = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', params);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', params);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.siteSearchEngine.targetSites.list = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', params);

    this.projects.locations.dataStores.siteSearchEngine.sitemaps = {};
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.create = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', params);
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.fetch = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', params);

    this.projects.locations.dataStores.userEvents = {};
    this.projects.locations.dataStores.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);
    this.projects.locations.dataStores.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);
    this.projects.locations.dataStores.userEvents.purge = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', params);
    this.projects.locations.dataStores.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.dataStores.widgetConfigs = {};
    this.projects.locations.dataStores.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.evaluations = {};
    this.projects.locations.evaluations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.evaluations.list = (params) => this._makeRequest('v1alpha/{+parent}/evaluations', 'GET', params);
    this.projects.locations.evaluations.create = (params) => this._makeRequest('v1alpha/{+parent}/evaluations', 'POST', params);
    this.projects.locations.evaluations.listResults = (params) => this._makeRequest('v1alpha/{+evaluation}:listResults', 'GET', params);

    this.projects.locations.evaluations.operations = {};
    this.projects.locations.evaluations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.groundingConfigs = {};
    this.projects.locations.groundingConfigs.check = (params) => this._makeRequest('v1alpha/{+groundingConfig}:check', 'POST', params);

    this.projects.locations.identityMappingStores = {};
    this.projects.locations.identityMappingStores.create = (params) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'POST', params);
    this.projects.locations.identityMappingStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.identityMappingStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.identityMappingStores.importIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:importIdentityMappings', 'POST', params);
    this.projects.locations.identityMappingStores.purgeIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:purgeIdentityMappings', 'POST', params);
    this.projects.locations.identityMappingStores.listIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:listIdentityMappings', 'GET', params);
    this.projects.locations.identityMappingStores.list = (params) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'GET', params);

    this.projects.locations.identityMappingStores.operations = {};
    this.projects.locations.identityMappingStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.identityMappingStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.rankingConfigs = {};
    this.projects.locations.rankingConfigs.rank = (params) => this._makeRequest('v1alpha/{+rankingConfig}:rank', 'POST', params);

    this.projects.locations.requirements = {};
    this.projects.locations.requirements.checkRequirement = (params) => this._makeRequest('v1alpha/{+location}/requirements:checkRequirement', 'POST', params);

    this.projects.locations.sampleQuerySets = {};
    this.projects.locations.sampleQuerySets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.sampleQuerySets.list = (params) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'GET', params);
    this.projects.locations.sampleQuerySets.create = (params) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'POST', params);
    this.projects.locations.sampleQuerySets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.sampleQuerySets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.sampleQuerySets.operations = {};
    this.projects.locations.sampleQuerySets.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.sampleQuerySets.sampleQueries = {};
    this.projects.locations.sampleQuerySets.sampleQueries.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.sampleQuerySets.sampleQueries.list = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'GET', params);
    this.projects.locations.sampleQuerySets.sampleQueries.create = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'POST', params);
    this.projects.locations.sampleQuerySets.sampleQueries.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.sampleQuerySets.sampleQueries.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.sampleQuerySets.sampleQueries.import = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries:import', 'POST', params);

    this.projects.locations.userEvents = {};
    this.projects.locations.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);
    this.projects.locations.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);
    this.projects.locations.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.userStores = {};
    this.projects.locations.userStores.batchUpdateUserLicenses = (params) => this._makeRequest('v1alpha/{+parent}:batchUpdateUserLicenses', 'POST', params);

    this.projects.locations.userStores.operations = {};
    this.projects.locations.userStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.userStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.userStores.userLicenses = {};
    this.projects.locations.userStores.userLicenses.list = (params) => this._makeRequest('v1alpha/{+parent}/userLicenses', 'GET', params);

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
