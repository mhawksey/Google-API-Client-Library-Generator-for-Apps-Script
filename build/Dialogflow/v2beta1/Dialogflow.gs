
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dialogflow.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.getAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', apiParams, clientConfig);
    this.projects.setAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', apiParams, clientConfig);
    this.projects.deleteAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', apiParams, clientConfig);

    this.projects.operations = {};
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.agent = {};
    this.projects.agent.getFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.updateFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', apiParams, clientConfig);
    this.projects.agent.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', apiParams, clientConfig);
    this.projects.agent.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', apiParams, clientConfig);
    this.projects.agent.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', apiParams, clientConfig);
    this.projects.agent.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', apiParams, clientConfig);
    this.projects.agent.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', apiParams, clientConfig);

    this.projects.agent.environments = {};
    this.projects.agent.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.projects.agent.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.agent.environments.getHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/history', 'GET', apiParams, clientConfig);

    this.projects.agent.environments.users = {};

    this.projects.agent.environments.users.sessions = {};
    this.projects.agent.environments.users.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.agent.environments.users.sessions.contexts = {};
    this.projects.agent.environments.users.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.environments.users.sessions.entityTypes = {};
    this.projects.agent.environments.users.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.environments.users.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.environments.intents = {};
    this.projects.agent.environments.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    this.projects.agent.sessions = {};
    this.projects.agent.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);
    this.projects.agent.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.agent.sessions.contexts = {};
    this.projects.agent.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);
    this.projects.agent.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);
    this.projects.agent.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.sessions.entityTypes = {};
    this.projects.agent.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.agent.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.agent.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.intents = {};
    this.projects.agent.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);
    this.projects.agent.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', apiParams, clientConfig);
    this.projects.agent.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.agent.intents.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.agent.intents.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.entityTypes = {};
    this.projects.agent.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.agent.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.agent.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.agent.entityTypes.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.agent.entityTypes.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.entityTypes.entities = {};
    this.projects.agent.entityTypes.entities.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.agent.entityTypes.entities.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.agent.entityTypes.entities.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.knowledgeBases = {};
    this.projects.agent.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.agent.knowledgeBases.documents = {};
    this.projects.agent.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.agent.versions = {};
    this.projects.agent.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.agent.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.agent.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.agent.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.agent.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.getAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', apiParams, clientConfig);
    this.projects.locations.setAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', apiParams, clientConfig);
    this.projects.locations.deleteAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', apiParams, clientConfig);
    this.projects.locations.getEncryptionSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.agent = {};
    this.projects.locations.agent.getFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.updateFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.environments = {};
    this.projects.locations.agent.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agent.environments.getHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/history', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.environments.users = {};

    this.projects.locations.agent.environments.users.sessions = {};
    this.projects.locations.agent.environments.users.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.environments.users.sessions.contexts = {};
    this.projects.locations.agent.environments.users.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.environments.users.sessions.entityTypes = {};
    this.projects.locations.agent.environments.users.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.environments.users.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.environments.intents = {};
    this.projects.locations.agent.environments.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.sessions = {};
    this.projects.locations.agent.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agent.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.sessions.contexts = {};
    this.projects.locations.agent.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.sessions.entityTypes = {};
    this.projects.locations.agent.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.intents = {};
    this.projects.locations.agent.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agent.intents.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.intents.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.entityTypes = {};
    this.projects.locations.agent.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.entityTypes.entities = {};
    this.projects.locations.agent.entityTypes.entities.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.entities.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.entityTypes.entities.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.versions = {};
    this.projects.locations.agent.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agent.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.agent.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agent.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.generators = {};
    this.projects.locations.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', apiParams, clientConfig);
    this.projects.locations.generators.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', apiParams, clientConfig);
    this.projects.locations.generators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.generators.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.generators.evaluations = {};
    this.projects.locations.generators.evaluations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/evaluations', 'POST', apiParams, clientConfig);
    this.projects.locations.generators.evaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.generators.evaluations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/evaluations', 'GET', apiParams, clientConfig);
    this.projects.locations.generators.evaluations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.answerRecords = {};
    this.projects.locations.answerRecords.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.answerRecords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', apiParams, clientConfig);
    this.projects.locations.answerRecords.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.conversationProfiles = {};
    this.projects.locations.conversationProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.setSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.conversationProfiles.clearSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations = {};
    this.projects.locations.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.complete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:complete', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.ingestContextReferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}:ingestContextReferences', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.participants = {};
    this.projects.locations.conversations.participants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.participants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.participants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.participants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.conversations.participants.analyzeContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.participants.suggestions = {};
    this.projects.locations.conversations.participants.suggestions.suggestArticles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.participants.suggestions.suggestFaqAnswers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.participants.suggestions.suggestSmartReplies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.messages = {};
    this.projects.locations.conversations.messages.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', apiParams, clientConfig);

    this.projects.locations.conversations.suggestions = {};
    this.projects.locations.conversations.suggestions.suggestConversationSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.suggestions.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.suggestions = {};
    this.projects.locations.suggestions.generateStatelessSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', apiParams, clientConfig);
    this.projects.locations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    this.projects.locations.statelessSuggestion = {};
    this.projects.locations.statelessSuggestion.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/statelessSuggestion:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.encryptionSpec = {};
    this.projects.locations.encryptionSpec.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:initialize', 'POST', apiParams, clientConfig);

    this.projects.locations.knowledgeBases = {};
    this.projects.locations.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.knowledgeBases.documents = {};
    this.projects.locations.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.locations.phoneNumbers = {};
    this.projects.locations.phoneNumbers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', apiParams, clientConfig);
    this.projects.locations.phoneNumbers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.phoneNumbers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.phoneNumbers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.sipTrunks = {};
    this.projects.locations.sipTrunks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'POST', apiParams, clientConfig);
    this.projects.locations.sipTrunks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sipTrunks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'GET', apiParams, clientConfig);
    this.projects.locations.sipTrunks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sipTrunks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.generators = {};
    this.projects.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', apiParams, clientConfig);
    this.projects.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', apiParams, clientConfig);

    this.projects.answerRecords = {};
    this.projects.answerRecords.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.answerRecords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', apiParams, clientConfig);
    this.projects.answerRecords.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.conversationProfiles = {};
    this.projects.conversationProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', apiParams, clientConfig);
    this.projects.conversationProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.conversationProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', apiParams, clientConfig);
    this.projects.conversationProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.conversationProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.conversationProfiles.setSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', apiParams, clientConfig);
    this.projects.conversationProfiles.clearSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    this.projects.conversations = {};
    this.projects.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.conversations.complete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:complete', 'POST', apiParams, clientConfig);

    this.projects.conversations.participants = {};
    this.projects.conversations.participants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', apiParams, clientConfig);
    this.projects.conversations.participants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.conversations.participants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', apiParams, clientConfig);
    this.projects.conversations.participants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.conversations.participants.analyzeContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', apiParams, clientConfig);

    this.projects.conversations.participants.suggestions = {};
    this.projects.conversations.participants.suggestions.suggestArticles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', apiParams, clientConfig);
    this.projects.conversations.participants.suggestions.suggestFaqAnswers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', apiParams, clientConfig);
    this.projects.conversations.participants.suggestions.suggestSmartReplies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', apiParams, clientConfig);
    this.projects.conversations.participants.suggestions.suggestKnowledgeAssist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', apiParams, clientConfig);
    this.projects.conversations.participants.suggestions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions', 'GET', apiParams, clientConfig);
    this.projects.conversations.participants.suggestions.compile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:compile', 'POST', apiParams, clientConfig);

    this.projects.conversations.messages = {};
    this.projects.conversations.messages.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.conversations.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', apiParams, clientConfig);

    this.projects.conversations.suggestions = {};
    this.projects.conversations.suggestions.suggestConversationSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', apiParams, clientConfig);
    this.projects.conversations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);
    this.projects.conversations.suggestions.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', apiParams, clientConfig);

    this.projects.suggestions = {};
    this.projects.suggestions.generateStatelessSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', apiParams, clientConfig);
    this.projects.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    this.projects.knowledgeBases = {};
    this.projects.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);
    this.projects.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);
    this.projects.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.knowledgeBases.documents = {};
    this.projects.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.phoneNumbers = {};
    this.projects.phoneNumbers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', apiParams, clientConfig);
    this.projects.phoneNumbers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.phoneNumbers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.phoneNumbers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', apiParams, clientConfig);
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
