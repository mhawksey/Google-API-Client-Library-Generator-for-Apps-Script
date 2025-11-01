
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dataproc.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.autoscalingPolicies = {};
    this.projects.locations.autoscalingPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.autoscalingPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.batches = {};
    this.projects.locations.batches.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/batches', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.analyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:analyze', 'POST', apiParams, clientConfig);
    this.projects.locations.batches.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.batches.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/batches', 'POST', apiParams, clientConfig);

    this.projects.locations.batches.sparkApplications = {};
    this.projects.locations.batches.sparkApplications.accessSqlQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.accessEnvironmentInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.accessSqlPlan = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.summarizeStages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.accessStageRddGraph = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.summarizeStageAttemptTasks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchStages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStages', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchExecutors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchSqlQueries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.accessJob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessJob', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.accessStageAttempt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.summarizeExecutors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:write', 'POST', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchStageAttempts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchExecutorStageSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchStageAttemptTasks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.access = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:access', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.searchJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.batches.sparkApplications.summarizeJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.sessions = {};
    this.projects.locations.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.projects.locations.sessions.terminate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:terminate', 'POST', apiParams, clientConfig);
    this.projects.locations.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sessions', 'GET', apiParams, clientConfig);

    this.projects.locations.sessions.sparkApplications = {};
    this.projects.locations.sessions.sparkApplications.searchSqlQueries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchSqlQueries', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.access = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:access', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sparkApplications:search', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchExecutorStageSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchExecutorStageSummary', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.summarizeExecutors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeExecutors', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.summarizeStages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeStages', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchStages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStages', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessStageAttempt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessStageAttempt', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessSqlQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessSqlQuery', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.summarizeJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchStageAttempts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStageAttempts', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessSqlPlan = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessSqlPlan', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchStageAttemptTasks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchStageAttemptTasks', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:write', 'POST', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessJob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessJob', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.searchExecutors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:searchExecutors', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessStageRddGraph = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessStageRddGraph', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.summarizeStageAttemptTasks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:summarizeStageAttemptTasks', 'GET', apiParams, clientConfig);
    this.projects.locations.sessions.sparkApplications.accessEnvironmentInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:accessEnvironmentInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.workflowTemplates = {};
    this.projects.locations.workflowTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.instantiate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:instantiate', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.instantiateInline = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.workflowTemplates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.projects.locations.sessionTemplates = {};
    this.projects.locations.sessionTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sessionTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sessionTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sessionTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.sessionTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sessionTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.sessionTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.regions = {};

    this.projects.regions.clusters = {};
    this.projects.regions.clusters.diagnose = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'PATCH', apiParams, clientConfig);
    this.projects.regions.clusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'DELETE', apiParams, clientConfig);
    this.projects.regions.clusters.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.injectCredentials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}/{+region}/{+cluster}:injectCredentials', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters', 'GET', apiParams, clientConfig);
    this.projects.regions.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}', 'GET', apiParams, clientConfig);
    this.projects.regions.clusters.repair = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair', 'POST', apiParams, clientConfig);

    this.projects.regions.clusters.nodeGroups = {};
    this.projects.regions.clusters.nodeGroups.repair = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:repair', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.nodeGroups.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resize', 'POST', apiParams, clientConfig);
    this.projects.regions.clusters.nodeGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.regions.clusters.nodeGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodeGroups', 'POST', apiParams, clientConfig);

    this.projects.regions.workflowTemplates = {};
    this.projects.regions.workflowTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.instantiateInline = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates:instantiateInline', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.instantiate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:instantiate', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workflowTemplates', 'GET', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.workflowTemplates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.projects.regions.operations = {};
    this.projects.regions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.regions.operations.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.regions.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.regions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.regions.operations.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.operations.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.regions.autoscalingPolicies = {};
    this.projects.regions.autoscalingPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'POST', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autoscalingPolicies', 'GET', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.regions.autoscalingPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.regions.jobs = {};
    this.projects.regions.jobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'PATCH', apiParams, clientConfig);
    this.projects.regions.jobs.submitAsOperation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs:submit', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs', 'GET', apiParams, clientConfig);
    this.projects.regions.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'GET', apiParams, clientConfig);
    this.projects.regions.jobs.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.regions.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/regions/{region}/jobs/{jobId}', 'DELETE', apiParams, clientConfig);
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
