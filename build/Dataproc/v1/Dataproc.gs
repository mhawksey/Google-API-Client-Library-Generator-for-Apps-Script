
/**
 * Google Apps Script client library for the Cloud Dataproc API
 * Documentation URL: https://cloud.google.com/dataproc/
 * @class
 */
class Dataproc {
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
    this._rootUrl = 'https://dataproc.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.regions = {};

    this.projects.regions.operations = {};
    this.projects.regions.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.regions.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.regions.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.regions.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.regions.operations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.regions.operations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.regions.operations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.autoscalingPolicies = {};
    this.projects.regions.autoscalingPolicies.create = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', params);
    this.projects.regions.autoscalingPolicies.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.regions.autoscalingPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.regions.autoscalingPolicies.list = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', params);
    this.projects.regions.autoscalingPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.regions.autoscalingPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.regions.autoscalingPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.regions.autoscalingPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.clusters = {};
    this.projects.regions.clusters.create = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'POST', params);
    this.projects.regions.clusters.patch = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'PATCH', params);
    this.projects.regions.clusters.stop = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop', 'POST', params);
    this.projects.regions.clusters.start = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start', 'POST', params);
    this.projects.regions.clusters.repair = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair', 'POST', params);
    this.projects.regions.clusters.delete = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'DELETE', params);
    this.projects.regions.clusters.get = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'GET', params);
    this.projects.regions.clusters.list = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'GET', params);
    this.projects.regions.clusters.diagnose = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose', 'POST', params);
    this.projects.regions.clusters.injectCredentials = (params) => this._makeRequest('v1/{+project}/{+region}/{+cluster}:injectCredentials', 'POST', params);
    this.projects.regions.clusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.regions.clusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.regions.clusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.clusters.nodeGroups = {};
    this.projects.regions.clusters.nodeGroups.create = (params) => this._makeRequest('v1/{+parent}/nodeGroups', 'POST', params);
    this.projects.regions.clusters.nodeGroups.resize = (params) => this._makeRequest('v1/{+name}:resize', 'POST', params);
    this.projects.regions.clusters.nodeGroups.repair = (params) => this._makeRequest('v1/{+name}:repair', 'POST', params);
    this.projects.regions.clusters.nodeGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.regions.jobs = {};
    this.projects.regions.jobs.submit = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submit', 'POST', params);
    this.projects.regions.jobs.submitAsOperation = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation', 'POST', params);
    this.projects.regions.jobs.get = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'GET', params);
    this.projects.regions.jobs.list = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs', 'GET', params);
    this.projects.regions.jobs.patch = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'PATCH', params);
    this.projects.regions.jobs.cancel = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel', 'POST', params);
    this.projects.regions.jobs.delete = (params) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'DELETE', params);
    this.projects.regions.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.regions.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.regions.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.regions.workflowTemplates = {};
    this.projects.regions.workflowTemplates.create = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', params);
    this.projects.regions.workflowTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.regions.workflowTemplates.instantiate = (params) => this._makeRequest('v1/{+name}:instantiate', 'POST', params);
    this.projects.regions.workflowTemplates.instantiateInline = (params) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', params);
    this.projects.regions.workflowTemplates.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.regions.workflowTemplates.list = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', params);
    this.projects.regions.workflowTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.regions.workflowTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.regions.workflowTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.regions.workflowTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations = {};

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.batches = {};
    this.projects.locations.batches.analyze = (params) => this._makeRequest('v1/{+name}:analyze', 'POST', params);
    this.projects.locations.batches.create = (params) => this._makeRequest('v1/{+parent}/batches', 'POST', params);
    this.projects.locations.batches.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.batches.list = (params) => this._makeRequest('v1/{+parent}/batches', 'GET', params);
    this.projects.locations.batches.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.batches.sparkApplications = {};
    this.projects.locations.batches.sparkApplications.write = (params) => this._makeRequest('v1/{+name}:write', 'POST', params);
    this.projects.locations.batches.sparkApplications.search = (params) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', params);
    this.projects.locations.batches.sparkApplications.access = (params) => this._makeRequest('v1/{+name}:access', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchJobs = (params) => this._makeRequest('v1/{+name}:searchJobs', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessJob = (params) => this._makeRequest('v1/{+name}:accessJob', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchStages = (params) => this._makeRequest('v1/{+name}:searchStages', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchStageAttempts = (params) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessStageAttempt = (params) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchExecutors = (params) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchExecutorStageSummary = (params) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', params);
    this.projects.locations.batches.sparkApplications.searchSqlQueries = (params) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessSqlQuery = (params) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessSqlPlan = (params) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessStageRddGraph = (params) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', params);
    this.projects.locations.batches.sparkApplications.accessEnvironmentInfo = (params) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', params);
    this.projects.locations.batches.sparkApplications.summarizeJobs = (params) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', params);
    this.projects.locations.batches.sparkApplications.summarizeStages = (params) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', params);
    this.projects.locations.batches.sparkApplications.summarizeStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', params);
    this.projects.locations.batches.sparkApplications.summarizeExecutors = (params) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', params);

    this.projects.locations.autoscalingPolicies = {};
    this.projects.locations.autoscalingPolicies.create = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', params);
    this.projects.locations.autoscalingPolicies.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.autoscalingPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.autoscalingPolicies.list = (params) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', params);
    this.projects.locations.autoscalingPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.autoscalingPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.autoscalingPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.autoscalingPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.sessions = {};
    this.projects.locations.sessions.create = (params) => this._makeRequest('v1/{+parent}/sessions', 'POST', params);
    this.projects.locations.sessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.sessions.list = (params) => this._makeRequest('v1/{+parent}/sessions', 'GET', params);
    this.projects.locations.sessions.terminate = (params) => this._makeRequest('v1/{+name}:terminate', 'POST', params);
    this.projects.locations.sessions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.sessions.sparkApplications = {};
    this.projects.locations.sessions.sparkApplications.write = (params) => this._makeRequest('v1/{+name}:write', 'POST', params);
    this.projects.locations.sessions.sparkApplications.search = (params) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', params);
    this.projects.locations.sessions.sparkApplications.access = (params) => this._makeRequest('v1/{+name}:access', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchJobs = (params) => this._makeRequest('v1/{+name}:searchJobs', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessJob = (params) => this._makeRequest('v1/{+name}:accessJob', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchStages = (params) => this._makeRequest('v1/{+name}:searchStages', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchStageAttempts = (params) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessStageAttempt = (params) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchExecutors = (params) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchExecutorStageSummary = (params) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', params);
    this.projects.locations.sessions.sparkApplications.searchSqlQueries = (params) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessSqlQuery = (params) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessSqlPlan = (params) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessStageRddGraph = (params) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', params);
    this.projects.locations.sessions.sparkApplications.accessEnvironmentInfo = (params) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', params);
    this.projects.locations.sessions.sparkApplications.summarizeJobs = (params) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', params);
    this.projects.locations.sessions.sparkApplications.summarizeStages = (params) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', params);
    this.projects.locations.sessions.sparkApplications.summarizeStageAttemptTasks = (params) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', params);
    this.projects.locations.sessions.sparkApplications.summarizeExecutors = (params) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', params);

    this.projects.locations.sessionTemplates = {};
    this.projects.locations.sessionTemplates.create = (params) => this._makeRequest('v1/{+parent}/sessionTemplates', 'POST', params);
    this.projects.locations.sessionTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.sessionTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.sessionTemplates.list = (params) => this._makeRequest('v1/{+parent}/sessionTemplates', 'GET', params);
    this.projects.locations.sessionTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workflowTemplates = {};
    this.projects.locations.workflowTemplates.create = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', params);
    this.projects.locations.workflowTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workflowTemplates.instantiate = (params) => this._makeRequest('v1/{+name}:instantiate', 'POST', params);
    this.projects.locations.workflowTemplates.instantiateInline = (params) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', params);
    this.projects.locations.workflowTemplates.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.workflowTemplates.list = (params) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', params);
    this.projects.locations.workflowTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workflowTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workflowTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.workflowTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
