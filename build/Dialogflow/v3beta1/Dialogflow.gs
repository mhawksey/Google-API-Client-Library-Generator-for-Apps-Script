
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

    this.projects.operations = {};
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.securitySettings = {};
    this.projects.locations.securitySettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/securitySettings', 'POST', apiParams, clientConfig);
    this.projects.locations.securitySettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.securitySettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.securitySettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/securitySettings', 'GET', apiParams, clientConfig);
    this.projects.locations.securitySettings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents = {};
    this.projects.locations.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/agents', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/agents', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:validate', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.getGenerativeSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.updateGenerativeSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.flows = {};
    this.projects.locations.agents.flows.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/flows', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.flows.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/flows', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.flows.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:train', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:validate', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/flows:import', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.flows.pages = {};
    this.projects.locations.agents.flows.pages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/pages', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.pages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.pages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/pages', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.pages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.flows.pages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.flows.transitionRouteGroups = {};
    this.projects.locations.agents.flows.transitionRouteGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/transitionRouteGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.transitionRouteGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.transitionRouteGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/transitionRouteGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.transitionRouteGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.flows.transitionRouteGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.flows.versions = {};
    this.projects.locations.agents.flows.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.load = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:load', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.flows.versions.compareVersions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+baseVersion}:compareVersions', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.changelogs = {};
    this.projects.locations.agents.changelogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/changelogs', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.changelogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.intents = {};
    this.projects.locations.agents.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/intents', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/intents', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.intents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/intents:import', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.intents.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/intents:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.entityTypes = {};
    this.projects.locations.agents.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes:export', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.entityTypes.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes:import', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.sessions = {};
    this.projects.locations.agents.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.sessions.serverStreamingDetectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:serverStreamingDetectIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.sessions.matchIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:matchIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.sessions.fulfillIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:fulfillIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.sessions.submitAnswerFeedback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:submitAnswerFeedback', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.sessions.entityTypes = {};
    this.projects.locations.agents.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.transitionRouteGroups = {};
    this.projects.locations.agents.transitionRouteGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/transitionRouteGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.transitionRouteGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.transitionRouteGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/transitionRouteGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.transitionRouteGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.transitionRouteGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.testCases = {};
    this.projects.locations.agents.testCases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.testCases.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.testCases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.testCases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.testCases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.testCases.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.testCases.batchRun = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases:batchRun', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.testCases.calculateCoverage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+agent}/testCases:calculateCoverage', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.testCases.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases:import', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.testCases.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/testCases:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.testCases.results = {};
    this.projects.locations.agents.testCases.results.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/results', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.testCases.results.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.webhooks = {};
    this.projects.locations.agents.webhooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/webhooks', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.webhooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.webhooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/webhooks', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.webhooks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.webhooks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.environments = {};
    this.projects.locations.agents.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/environments', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.environments.lookupEnvironmentHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:lookupEnvironmentHistory', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.runContinuousTest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+environment}:runContinuousTest', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.deployFlow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+environment}:deployFlow', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.environments.sessions = {};
    this.projects.locations.agents.environments.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.serverStreamingDetectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:serverStreamingDetectIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.matchIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:matchIntent', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.fulfillIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+session}:fulfillIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.environments.sessions.entityTypes = {};
    this.projects.locations.agents.environments.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.environments.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.environments.continuousTestResults = {};
    this.projects.locations.agents.environments.continuousTestResults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/continuousTestResults', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.environments.deployments = {};
    this.projects.locations.agents.environments.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.environments.experiments = {};
    this.projects.locations.agents.environments.experiments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/experiments', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/experiments', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:start', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.environments.experiments.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:stop', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.conversations = {};
    this.projects.locations.agents.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.generators = {};
    this.projects.locations.agents.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/generators', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.generators.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/generators', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.generators.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.generators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.playbooks = {};
    this.projects.locations.agents.playbooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/playbooks', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/playbooks', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/playbooks:import', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.playbooks.examples = {};
    this.projects.locations.agents.playbooks.examples.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/examples', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.examples.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.examples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/examples', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.examples.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.examples.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.playbooks.versions = {};
    this.projects.locations.agents.playbooks.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.playbooks.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.tools = {};
    this.projects.locations.agents.tools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/tools', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.tools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/tools', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.tools.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/tools:export', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.tools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.tools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.agents.tools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.tools.versions = {};
    this.projects.locations.agents.tools.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.tools.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.tools.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.tools.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.tools.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3beta1/{+name}:restore', 'POST', apiParams, clientConfig);
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
