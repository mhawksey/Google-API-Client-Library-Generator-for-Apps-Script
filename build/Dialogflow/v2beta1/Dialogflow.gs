
/**
 * Google Apps Script client library for the Dialogflow API
 * Documentation URL: https://cloud.google.com/dialogflow/
 * @class
 */
class Dialogflow {
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
    this._rootUrl = 'https://dialogflow.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', params);
    this.projects.setAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', params);
    this.projects.deleteAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', params);

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v2beta1/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.operations.cancel = (params) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', params);

    this.projects.agent = {};
    this.projects.agent.getFulfillment = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.updateFulfillment = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.search = (params) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', params);
    this.projects.agent.train = (params) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', params);
    this.projects.agent.export = (params) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', params);
    this.projects.agent.import = (params) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', params);
    this.projects.agent.restore = (params) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', params);
    this.projects.agent.getValidationResult = (params) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', params);

    this.projects.agent.environments = {};
    this.projects.agent.environments.list = (params) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', params);
    this.projects.agent.environments.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.environments.create = (params) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', params);
    this.projects.agent.environments.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.environments.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.agent.environments.getHistory = (params) => this._makeRequest('v2beta1/{+parent}/history', 'GET', params);

    this.projects.agent.environments.users = {};

    this.projects.agent.environments.users.sessions = {};
    this.projects.agent.environments.users.sessions.deleteContexts = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', params);
    this.projects.agent.environments.users.sessions.detectIntent = (params) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', params);

    this.projects.agent.environments.users.sessions.contexts = {};
    this.projects.agent.environments.users.sessions.contexts.list = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', params);
    this.projects.agent.environments.users.sessions.contexts.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.environments.users.sessions.contexts.create = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', params);
    this.projects.agent.environments.users.sessions.contexts.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.environments.users.sessions.contexts.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.agent.environments.users.sessions.entityTypes = {};
    this.projects.agent.environments.users.sessions.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.agent.environments.users.sessions.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.environments.users.sessions.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.agent.environments.users.sessions.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.environments.users.sessions.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.agent.environments.intents = {};
    this.projects.agent.environments.intents.list = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', params);

    this.projects.agent.sessions = {};
    this.projects.agent.sessions.deleteContexts = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', params);
    this.projects.agent.sessions.detectIntent = (params) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', params);

    this.projects.agent.sessions.contexts = {};
    this.projects.agent.sessions.contexts.list = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', params);
    this.projects.agent.sessions.contexts.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.sessions.contexts.create = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', params);
    this.projects.agent.sessions.contexts.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.sessions.contexts.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.agent.sessions.entityTypes = {};
    this.projects.agent.sessions.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.agent.sessions.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.sessions.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.agent.sessions.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.sessions.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.agent.intents = {};
    this.projects.agent.intents.list = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', params);
    this.projects.agent.intents.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.intents.create = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', params);
    this.projects.agent.intents.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.intents.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.agent.intents.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', params);
    this.projects.agent.intents.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', params);

    this.projects.agent.entityTypes = {};
    this.projects.agent.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.agent.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.agent.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.agent.entityTypes.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', params);
    this.projects.agent.entityTypes.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', params);

    this.projects.agent.entityTypes.entities = {};
    this.projects.agent.entityTypes.entities.batchCreate = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', params);
    this.projects.agent.entityTypes.entities.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', params);
    this.projects.agent.entityTypes.entities.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', params);

    this.projects.agent.knowledgeBases = {};
    this.projects.agent.knowledgeBases.list = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', params);
    this.projects.agent.knowledgeBases.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.knowledgeBases.create = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', params);
    this.projects.agent.knowledgeBases.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.agent.knowledgeBases.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.agent.knowledgeBases.documents = {};
    this.projects.agent.knowledgeBases.documents.list = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', params);
    this.projects.agent.knowledgeBases.documents.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.knowledgeBases.documents.create = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', params);
    this.projects.agent.knowledgeBases.documents.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.agent.knowledgeBases.documents.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.knowledgeBases.documents.reload = (params) => this._makeRequest('v2beta1/{+name}:reload', 'POST', params);

    this.projects.agent.versions = {};
    this.projects.agent.versions.list = (params) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', params);
    this.projects.agent.versions.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.agent.versions.create = (params) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', params);
    this.projects.agent.versions.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.agent.versions.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations = {};
    this.projects.locations.getAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', params);
    this.projects.locations.setAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', params);
    this.projects.locations.deleteAgent = (params) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', params);
    this.projects.locations.getEncryptionSpec = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v2beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2beta1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.agent = {};
    this.projects.locations.agent.getFulfillment = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.updateFulfillment = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.search = (params) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', params);
    this.projects.locations.agent.train = (params) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', params);
    this.projects.locations.agent.export = (params) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', params);
    this.projects.locations.agent.import = (params) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', params);
    this.projects.locations.agent.restore = (params) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', params);
    this.projects.locations.agent.getValidationResult = (params) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', params);

    this.projects.locations.agent.environments = {};
    this.projects.locations.agent.environments.list = (params) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', params);
    this.projects.locations.agent.environments.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.environments.create = (params) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', params);
    this.projects.locations.agent.environments.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.environments.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.agent.environments.getHistory = (params) => this._makeRequest('v2beta1/{+parent}/history', 'GET', params);

    this.projects.locations.agent.environments.users = {};

    this.projects.locations.agent.environments.users.sessions = {};
    this.projects.locations.agent.environments.users.sessions.deleteContexts = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', params);
    this.projects.locations.agent.environments.users.sessions.detectIntent = (params) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', params);

    this.projects.locations.agent.environments.users.sessions.contexts = {};
    this.projects.locations.agent.environments.users.sessions.contexts.list = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', params);
    this.projects.locations.agent.environments.users.sessions.contexts.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.environments.users.sessions.contexts.create = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', params);
    this.projects.locations.agent.environments.users.sessions.contexts.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.environments.users.sessions.contexts.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations.agent.environments.users.sessions.entityTypes = {};
    this.projects.locations.agent.environments.users.sessions.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agent.environments.users.sessions.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.environments.users.sessions.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agent.environments.users.sessions.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.environments.users.sessions.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations.agent.environments.intents = {};
    this.projects.locations.agent.environments.intents.list = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', params);

    this.projects.locations.agent.sessions = {};
    this.projects.locations.agent.sessions.deleteContexts = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', params);
    this.projects.locations.agent.sessions.detectIntent = (params) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', params);

    this.projects.locations.agent.sessions.contexts = {};
    this.projects.locations.agent.sessions.contexts.list = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', params);
    this.projects.locations.agent.sessions.contexts.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.sessions.contexts.create = (params) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', params);
    this.projects.locations.agent.sessions.contexts.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.sessions.contexts.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations.agent.sessions.entityTypes = {};
    this.projects.locations.agent.sessions.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agent.sessions.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.sessions.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agent.sessions.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.sessions.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations.agent.intents = {};
    this.projects.locations.agent.intents.list = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', params);
    this.projects.locations.agent.intents.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.intents.create = (params) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', params);
    this.projects.locations.agent.intents.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.intents.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.agent.intents.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', params);
    this.projects.locations.agent.intents.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', params);

    this.projects.locations.agent.entityTypes = {};
    this.projects.locations.agent.entityTypes.list = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agent.entityTypes.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.entityTypes.create = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agent.entityTypes.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.entityTypes.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.agent.entityTypes.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', params);
    this.projects.locations.agent.entityTypes.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', params);

    this.projects.locations.agent.entityTypes.entities = {};
    this.projects.locations.agent.entityTypes.entities.batchCreate = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', params);
    this.projects.locations.agent.entityTypes.entities.batchUpdate = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', params);
    this.projects.locations.agent.entityTypes.entities.batchDelete = (params) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', params);

    this.projects.locations.agent.versions = {};
    this.projects.locations.agent.versions.list = (params) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', params);
    this.projects.locations.agent.versions.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.agent.versions.create = (params) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', params);
    this.projects.locations.agent.versions.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.agent.versions.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.projects.locations.generators = {};
    this.projects.locations.generators.create = (params) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', params);
    this.projects.locations.generators.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.generators.list = (params) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', params);
    this.projects.locations.generators.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.generators.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.locations.answerRecords = {};
    this.projects.locations.answerRecords.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.answerRecords.list = (params) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', params);
    this.projects.locations.answerRecords.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.locations.conversationProfiles = {};
    this.projects.locations.conversationProfiles.list = (params) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', params);
    this.projects.locations.conversationProfiles.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.conversationProfiles.create = (params) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', params);
    this.projects.locations.conversationProfiles.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.conversationProfiles.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.conversationProfiles.setSuggestionFeatureConfig = (params) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', params);
    this.projects.locations.conversationProfiles.clearSuggestionFeatureConfig = (params) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', params);

    this.projects.locations.conversations = {};
    this.projects.locations.conversations.create = (params) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', params);
    this.projects.locations.conversations.list = (params) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', params);
    this.projects.locations.conversations.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.conversations.complete = (params) => this._makeRequest('v2beta1/{+name}:complete', 'POST', params);
    this.projects.locations.conversations.ingestContextReferences = (params) => this._makeRequest('v2beta1/{+conversation}:ingestContextReferences', 'POST', params);

    this.projects.locations.conversations.participants = {};
    this.projects.locations.conversations.participants.create = (params) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', params);
    this.projects.locations.conversations.participants.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.conversations.participants.list = (params) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', params);
    this.projects.locations.conversations.participants.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.conversations.participants.analyzeContent = (params) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', params);

    this.projects.locations.conversations.participants.suggestions = {};
    this.projects.locations.conversations.participants.suggestions.suggestArticles = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', params);
    this.projects.locations.conversations.participants.suggestions.suggestFaqAnswers = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', params);
    this.projects.locations.conversations.participants.suggestions.suggestSmartReplies = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', params);
    this.projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', params);

    this.projects.locations.conversations.messages = {};
    this.projects.locations.conversations.messages.batchCreate = (params) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', params);
    this.projects.locations.conversations.messages.list = (params) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', params);

    this.projects.locations.conversations.suggestions = {};
    this.projects.locations.conversations.suggestions.suggestConversationSummary = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', params);
    this.projects.locations.conversations.suggestions.searchKnowledge = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', params);
    this.projects.locations.conversations.suggestions.generate = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', params);

    this.projects.locations.suggestions = {};
    this.projects.locations.suggestions.generateStatelessSummary = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', params);
    this.projects.locations.suggestions.searchKnowledge = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', params);

    this.projects.locations.statelessSuggestion = {};
    this.projects.locations.statelessSuggestion.generate = (params) => this._makeRequest('v2beta1/{+parent}/statelessSuggestion:generate', 'POST', params);

    this.projects.locations.encryptionSpec = {};
    this.projects.locations.encryptionSpec.initialize = (params) => this._makeRequest('v2beta1/{+name}:initialize', 'POST', params);

    this.projects.locations.knowledgeBases = {};
    this.projects.locations.knowledgeBases.list = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', params);
    this.projects.locations.knowledgeBases.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.knowledgeBases.create = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', params);
    this.projects.locations.knowledgeBases.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.knowledgeBases.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.locations.knowledgeBases.documents = {};
    this.projects.locations.knowledgeBases.documents.list = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', params);
    this.projects.locations.knowledgeBases.documents.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.knowledgeBases.documents.create = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', params);
    this.projects.locations.knowledgeBases.documents.import = (params) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', params);
    this.projects.locations.knowledgeBases.documents.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.knowledgeBases.documents.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.knowledgeBases.documents.reload = (params) => this._makeRequest('v2beta1/{+name}:reload', 'POST', params);

    this.projects.locations.phoneNumbers = {};
    this.projects.locations.phoneNumbers.list = (params) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', params);
    this.projects.locations.phoneNumbers.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.locations.phoneNumbers.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.phoneNumbers.undelete = (params) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', params);

    this.projects.locations.sipTrunks = {};
    this.projects.locations.sipTrunks.create = (params) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'POST', params);
    this.projects.locations.sipTrunks.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.locations.sipTrunks.list = (params) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'GET', params);
    this.projects.locations.sipTrunks.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.locations.sipTrunks.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.generators = {};
    this.projects.generators.create = (params) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', params);
    this.projects.generators.list = (params) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', params);

    this.projects.answerRecords = {};
    this.projects.answerRecords.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.answerRecords.list = (params) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', params);
    this.projects.answerRecords.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.conversationProfiles = {};
    this.projects.conversationProfiles.list = (params) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', params);
    this.projects.conversationProfiles.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.conversationProfiles.create = (params) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', params);
    this.projects.conversationProfiles.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.conversationProfiles.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.conversationProfiles.setSuggestionFeatureConfig = (params) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', params);
    this.projects.conversationProfiles.clearSuggestionFeatureConfig = (params) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', params);

    this.projects.conversations = {};
    this.projects.conversations.create = (params) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', params);
    this.projects.conversations.list = (params) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', params);
    this.projects.conversations.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.conversations.complete = (params) => this._makeRequest('v2beta1/{+name}:complete', 'POST', params);

    this.projects.conversations.participants = {};
    this.projects.conversations.participants.create = (params) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', params);
    this.projects.conversations.participants.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.conversations.participants.list = (params) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', params);
    this.projects.conversations.participants.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.conversations.participants.analyzeContent = (params) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', params);

    this.projects.conversations.participants.suggestions = {};
    this.projects.conversations.participants.suggestions.suggestArticles = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', params);
    this.projects.conversations.participants.suggestions.suggestFaqAnswers = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', params);
    this.projects.conversations.participants.suggestions.suggestSmartReplies = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', params);
    this.projects.conversations.participants.suggestions.suggestKnowledgeAssist = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', params);
    this.projects.conversations.participants.suggestions.list = (params) => this._makeRequest('v2beta1/{+parent}/suggestions', 'GET', params);
    this.projects.conversations.participants.suggestions.compile = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:compile', 'POST', params);

    this.projects.conversations.messages = {};
    this.projects.conversations.messages.batchCreate = (params) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', params);
    this.projects.conversations.messages.list = (params) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', params);

    this.projects.conversations.suggestions = {};
    this.projects.conversations.suggestions.suggestConversationSummary = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', params);
    this.projects.conversations.suggestions.searchKnowledge = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', params);
    this.projects.conversations.suggestions.generate = (params) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', params);

    this.projects.suggestions = {};
    this.projects.suggestions.generateStatelessSummary = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', params);
    this.projects.suggestions.searchKnowledge = (params) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', params);

    this.projects.knowledgeBases = {};
    this.projects.knowledgeBases.list = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', params);
    this.projects.knowledgeBases.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.knowledgeBases.create = (params) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', params);
    this.projects.knowledgeBases.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.knowledgeBases.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    this.projects.knowledgeBases.documents = {};
    this.projects.knowledgeBases.documents.list = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', params);
    this.projects.knowledgeBases.documents.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);
    this.projects.knowledgeBases.documents.create = (params) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', params);
    this.projects.knowledgeBases.documents.import = (params) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', params);
    this.projects.knowledgeBases.documents.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.knowledgeBases.documents.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.knowledgeBases.documents.reload = (params) => this._makeRequest('v2beta1/{+name}:reload', 'POST', params);

    this.projects.phoneNumbers = {};
    this.projects.phoneNumbers.list = (params) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', params);
    this.projects.phoneNumbers.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);
    this.projects.phoneNumbers.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
    this.projects.phoneNumbers.undelete = (params) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', params);
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
