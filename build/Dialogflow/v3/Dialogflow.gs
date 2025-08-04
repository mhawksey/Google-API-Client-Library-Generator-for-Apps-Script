
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

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v3/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);

    this.projects.locations.securitySettings = {};
    this.projects.locations.securitySettings.create = (params) => this._makeRequest('v3/{+parent}/securitySettings', 'POST', params);
    this.projects.locations.securitySettings.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.securitySettings.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.securitySettings.list = (params) => this._makeRequest('v3/{+parent}/securitySettings', 'GET', params);
    this.projects.locations.securitySettings.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents = {};
    this.projects.locations.agents.list = (params) => this._makeRequest('v3/{+parent}/agents', 'GET', params);
    this.projects.locations.agents.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.create = (params) => this._makeRequest('v3/{+parent}/agents', 'POST', params);
    this.projects.locations.agents.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);
    this.projects.locations.agents.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);
    this.projects.locations.agents.validate = (params) => this._makeRequest('v3/{+name}:validate', 'POST', params);
    this.projects.locations.agents.getValidationResult = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.getGenerativeSettings = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.updateGenerativeSettings = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.flows = {};
    this.projects.locations.agents.flows.create = (params) => this._makeRequest('v3/{+parent}/flows', 'POST', params);
    this.projects.locations.agents.flows.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.flows.list = (params) => this._makeRequest('v3/{+parent}/flows', 'GET', params);
    this.projects.locations.agents.flows.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.flows.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.flows.train = (params) => this._makeRequest('v3/{+name}:train', 'POST', params);
    this.projects.locations.agents.flows.validate = (params) => this._makeRequest('v3/{+name}:validate', 'POST', params);
    this.projects.locations.agents.flows.getValidationResult = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.flows.import = (params) => this._makeRequest('v3/{+parent}/flows:import', 'POST', params);
    this.projects.locations.agents.flows.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);

    this.projects.locations.agents.flows.pages = {};
    this.projects.locations.agents.flows.pages.list = (params) => this._makeRequest('v3/{+parent}/pages', 'GET', params);
    this.projects.locations.agents.flows.pages.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.flows.pages.create = (params) => this._makeRequest('v3/{+parent}/pages', 'POST', params);
    this.projects.locations.agents.flows.pages.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.flows.pages.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.flows.transitionRouteGroups = {};
    this.projects.locations.agents.flows.transitionRouteGroups.list = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', params);
    this.projects.locations.agents.flows.transitionRouteGroups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.flows.transitionRouteGroups.create = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', params);
    this.projects.locations.agents.flows.transitionRouteGroups.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.flows.transitionRouteGroups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.flows.versions = {};
    this.projects.locations.agents.flows.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);
    this.projects.locations.agents.flows.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.flows.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);
    this.projects.locations.agents.flows.versions.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.flows.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.flows.versions.load = (params) => this._makeRequest('v3/{+name}:load', 'POST', params);
    this.projects.locations.agents.flows.versions.compareVersions = (params) => this._makeRequest('v3/{+baseVersion}:compareVersions', 'POST', params);

    this.projects.locations.agents.changelogs = {};
    this.projects.locations.agents.changelogs.list = (params) => this._makeRequest('v3/{+parent}/changelogs', 'GET', params);
    this.projects.locations.agents.changelogs.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.entityTypes = {};
    this.projects.locations.agents.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agents.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agents.entityTypes.export = (params) => this._makeRequest('v3/{+parent}/entityTypes:export', 'POST', params);
    this.projects.locations.agents.entityTypes.import = (params) => this._makeRequest('v3/{+parent}/entityTypes:import', 'POST', params);

    this.projects.locations.agents.intents = {};
    this.projects.locations.agents.intents.list = (params) => this._makeRequest('v3/{+parent}/intents', 'GET', params);
    this.projects.locations.agents.intents.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.intents.create = (params) => this._makeRequest('v3/{+parent}/intents', 'POST', params);
    this.projects.locations.agents.intents.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.intents.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.intents.import = (params) => this._makeRequest('v3/{+parent}/intents:import', 'POST', params);
    this.projects.locations.agents.intents.export = (params) => this._makeRequest('v3/{+parent}/intents:export', 'POST', params);

    this.projects.locations.agents.sessions = {};
    this.projects.locations.agents.sessions.detectIntent = (params) => this._makeRequest('v3/{+session}:detectIntent', 'POST', params);
    this.projects.locations.agents.sessions.serverStreamingDetectIntent = (params) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', params);
    this.projects.locations.agents.sessions.matchIntent = (params) => this._makeRequest('v3/{+session}:matchIntent', 'POST', params);
    this.projects.locations.agents.sessions.fulfillIntent = (params) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', params);
    this.projects.locations.agents.sessions.submitAnswerFeedback = (params) => this._makeRequest('v3/{+session}:submitAnswerFeedback', 'POST', params);

    this.projects.locations.agents.sessions.entityTypes = {};
    this.projects.locations.agents.sessions.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agents.sessions.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.sessions.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agents.sessions.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.sessions.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.transitionRouteGroups = {};
    this.projects.locations.agents.transitionRouteGroups.list = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', params);
    this.projects.locations.agents.transitionRouteGroups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.transitionRouteGroups.create = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', params);
    this.projects.locations.agents.transitionRouteGroups.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.transitionRouteGroups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.testCases = {};
    this.projects.locations.agents.testCases.list = (params) => this._makeRequest('v3/{+parent}/testCases', 'GET', params);
    this.projects.locations.agents.testCases.batchDelete = (params) => this._makeRequest('v3/{+parent}/testCases:batchDelete', 'POST', params);
    this.projects.locations.agents.testCases.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.testCases.create = (params) => this._makeRequest('v3/{+parent}/testCases', 'POST', params);
    this.projects.locations.agents.testCases.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.testCases.run = (params) => this._makeRequest('v3/{+name}:run', 'POST', params);
    this.projects.locations.agents.testCases.batchRun = (params) => this._makeRequest('v3/{+parent}/testCases:batchRun', 'POST', params);
    this.projects.locations.agents.testCases.calculateCoverage = (params) => this._makeRequest('v3/{+agent}/testCases:calculateCoverage', 'GET', params);
    this.projects.locations.agents.testCases.import = (params) => this._makeRequest('v3/{+parent}/testCases:import', 'POST', params);
    this.projects.locations.agents.testCases.export = (params) => this._makeRequest('v3/{+parent}/testCases:export', 'POST', params);

    this.projects.locations.agents.testCases.results = {};
    this.projects.locations.agents.testCases.results.list = (params) => this._makeRequest('v3/{+parent}/results', 'GET', params);
    this.projects.locations.agents.testCases.results.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.webhooks = {};
    this.projects.locations.agents.webhooks.list = (params) => this._makeRequest('v3/{+parent}/webhooks', 'GET', params);
    this.projects.locations.agents.webhooks.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.webhooks.create = (params) => this._makeRequest('v3/{+parent}/webhooks', 'POST', params);
    this.projects.locations.agents.webhooks.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.webhooks.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.environments = {};
    this.projects.locations.agents.environments.list = (params) => this._makeRequest('v3/{+parent}/environments', 'GET', params);
    this.projects.locations.agents.environments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.environments.create = (params) => this._makeRequest('v3/{+parent}/environments', 'POST', params);
    this.projects.locations.agents.environments.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.environments.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.environments.lookupEnvironmentHistory = (params) => this._makeRequest('v3/{+name}:lookupEnvironmentHistory', 'GET', params);
    this.projects.locations.agents.environments.runContinuousTest = (params) => this._makeRequest('v3/{+environment}:runContinuousTest', 'POST', params);
    this.projects.locations.agents.environments.deployFlow = (params) => this._makeRequest('v3/{+environment}:deployFlow', 'POST', params);

    this.projects.locations.agents.environments.deployments = {};
    this.projects.locations.agents.environments.deployments.list = (params) => this._makeRequest('v3/{+parent}/deployments', 'GET', params);
    this.projects.locations.agents.environments.deployments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.environments.sessions = {};
    this.projects.locations.agents.environments.sessions.detectIntent = (params) => this._makeRequest('v3/{+session}:detectIntent', 'POST', params);
    this.projects.locations.agents.environments.sessions.serverStreamingDetectIntent = (params) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', params);
    this.projects.locations.agents.environments.sessions.matchIntent = (params) => this._makeRequest('v3/{+session}:matchIntent', 'POST', params);
    this.projects.locations.agents.environments.sessions.fulfillIntent = (params) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', params);

    this.projects.locations.agents.environments.sessions.entityTypes = {};
    this.projects.locations.agents.environments.sessions.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.agents.environments.sessions.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.environments.sessions.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.agents.environments.sessions.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.environments.sessions.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.environments.continuousTestResults = {};
    this.projects.locations.agents.environments.continuousTestResults.list = (params) => this._makeRequest('v3/{+parent}/continuousTestResults', 'GET', params);

    this.projects.locations.agents.environments.experiments = {};
    this.projects.locations.agents.environments.experiments.list = (params) => this._makeRequest('v3/{+parent}/experiments', 'GET', params);
    this.projects.locations.agents.environments.experiments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.environments.experiments.create = (params) => this._makeRequest('v3/{+parent}/experiments', 'POST', params);
    this.projects.locations.agents.environments.experiments.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.environments.experiments.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.environments.experiments.start = (params) => this._makeRequest('v3/{+name}:start', 'POST', params);
    this.projects.locations.agents.environments.experiments.stop = (params) => this._makeRequest('v3/{+name}:stop', 'POST', params);

    this.projects.locations.agents.generators = {};
    this.projects.locations.agents.generators.list = (params) => this._makeRequest('v3/{+parent}/generators', 'GET', params);
    this.projects.locations.agents.generators.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.generators.create = (params) => this._makeRequest('v3/{+parent}/generators', 'POST', params);
    this.projects.locations.agents.generators.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.generators.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.playbooks = {};
    this.projects.locations.agents.playbooks.create = (params) => this._makeRequest('v3/{+parent}/playbooks', 'POST', params);
    this.projects.locations.agents.playbooks.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.playbooks.list = (params) => this._makeRequest('v3/{+parent}/playbooks', 'GET', params);
    this.projects.locations.agents.playbooks.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.playbooks.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);
    this.projects.locations.agents.playbooks.import = (params) => this._makeRequest('v3/{+parent}/playbooks:import', 'POST', params);
    this.projects.locations.agents.playbooks.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.playbooks.examples = {};
    this.projects.locations.agents.playbooks.examples.create = (params) => this._makeRequest('v3/{+parent}/examples', 'POST', params);
    this.projects.locations.agents.playbooks.examples.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.playbooks.examples.list = (params) => this._makeRequest('v3/{+parent}/examples', 'GET', params);
    this.projects.locations.agents.playbooks.examples.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.playbooks.examples.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.playbooks.versions = {};
    this.projects.locations.agents.playbooks.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);
    this.projects.locations.agents.playbooks.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.playbooks.versions.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);
    this.projects.locations.agents.playbooks.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);
    this.projects.locations.agents.playbooks.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.tools = {};
    this.projects.locations.agents.tools.create = (params) => this._makeRequest('v3/{+parent}/tools', 'POST', params);
    this.projects.locations.agents.tools.list = (params) => this._makeRequest('v3/{+parent}/tools', 'GET', params);
    this.projects.locations.agents.tools.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.tools.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.agents.tools.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.tools.versions = {};
    this.projects.locations.agents.tools.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);
    this.projects.locations.agents.tools.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);
    this.projects.locations.agents.tools.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.agents.tools.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.agents.tools.versions.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);
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
