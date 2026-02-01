
/**
 * Google Apps Script client library for the Apigee API
 * Documentation URL: https://cloud.google.com/apigee-api-management/
 * @class
 */
class Apigee {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://apigee.googleapis.com/';
    this._servicePath = '';


    this.hybrid = {};

    this.hybrid.issuers = {};
    this.hybrid.issuers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations = {};
    this.organizations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'GET', apiParams, clientConfig);
    this.organizations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/organizations', 'POST', apiParams, clientConfig);
    this.organizations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.getSyncAuthorization = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getSyncAuthorization', 'POST', apiParams, clientConfig);
    this.organizations.setSyncAuthorization = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setSyncAuthorization', 'POST', apiParams, clientConfig);
    this.organizations.getControlPlaneAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateControlPlaneAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.setAddons = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+org}:setAddons', 'POST', apiParams, clientConfig);
    this.organizations.getProjectMapping = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getProjectMapping', 'GET', apiParams, clientConfig);
    this.organizations.getDeployedIngressConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.getRuntimeConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.getSecuritySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateSecuritySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.apis = {};
    this.organizations.apis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'GET', apiParams, clientConfig);
    this.organizations.apis.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.apis.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);
    this.organizations.apis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.apis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'POST', apiParams, clientConfig);

    this.organizations.apis.revisions = {};
    this.organizations.apis.revisions.updateApiProxyRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.apis.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apis.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.apis.revisions.deployments = {};
    this.organizations.apis.revisions.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.apis.deployments = {};
    this.organizations.apis.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.apis.keyvaluemaps = {};
    this.organizations.apis.keyvaluemaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.apis.keyvaluemaps.entries = {};
    this.organizations.apis.keyvaluemaps.entries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.entries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.entries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'POST', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.entries.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.apis.keyvaluemaps.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'GET', apiParams, clientConfig);

    this.organizations.apis.debugsessions = {};
    this.organizations.apis.debugsessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', apiParams, clientConfig);

    this.organizations.operations = {};
    this.organizations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.organizations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.datacollectors = {};
    this.organizations.datacollectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datacollectors', 'POST', apiParams, clientConfig);
    this.organizations.datacollectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datacollectors', 'GET', apiParams, clientConfig);
    this.organizations.datacollectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.datacollectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.datacollectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments = {};
    this.organizations.environments.getDebugmask = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.updateDebugmask = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.getTraceConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.updateTraceConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.organizations.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.updateEnvironment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.environments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.getDeployedConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.getApiSecurityRuntimeConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.environments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.organizations.environments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.organizations.environments.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:subscribe', 'POST', apiParams, clientConfig);
    this.organizations.environments.unsubscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:unsubscribe', 'POST', apiParams, clientConfig);
    this.organizations.environments.modifyEnvironment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.getAddonsConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.getSecurityActionsConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.updateSecurityActionsConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.environments.resourcefiles = {};
    this.organizations.environments.resourcefiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles', 'POST', apiParams, clientConfig);
    this.organizations.environments.resourcefiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.resourcefiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.resourcefiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.resourcefiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles', 'GET', apiParams, clientConfig);
    this.organizations.environments.resourcefiles.listEnvironmentResources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcefiles/{type}', 'GET', apiParams, clientConfig);

    this.organizations.environments.archiveDeployments = {};
    this.organizations.environments.archiveDeployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/archiveDeployments', 'GET', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.generateUploadUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/archiveDeployments:generateUploadUrl', 'POST', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.generateDownloadUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateDownloadUrl', 'POST', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/archiveDeployments', 'POST', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.archiveDeployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.apis = {};

    this.organizations.environments.apis.revisions = {};
    this.organizations.environments.apis.revisions.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'POST', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.getDeployments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.environments.apis.revisions.deployments = {};
    this.organizations.environments.apis.revisions.deployments.generateDeployChangeReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments:generateDeployChangeReport', 'POST', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments:generateUndeployChangeReport', 'POST', apiParams, clientConfig);

    this.organizations.environments.apis.revisions.debugsessions = {};
    this.organizations.environments.apis.revisions.debugsessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugsessions', 'POST', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.debugsessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.debugsessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', apiParams, clientConfig);
    this.organizations.environments.apis.revisions.debugsessions.deleteData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/data', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.apis.revisions.debugsessions.data = {};
    this.organizations.environments.apis.revisions.debugsessions.data.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.environments.apis.deployments = {};
    this.organizations.environments.apis.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.environments.sharedflows = {};

    this.organizations.environments.sharedflows.revisions = {};
    this.organizations.environments.sharedflows.revisions.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'POST', apiParams, clientConfig);
    this.organizations.environments.sharedflows.revisions.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.sharedflows.revisions.getDeployments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.environments.sharedflows.deployments = {};
    this.organizations.environments.sharedflows.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.environments.deployments = {};
    this.organizations.environments.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.organizations.environments.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.deployments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.environments.deployments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.organizations.environments.deployments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.organizations.environments.flowhooks = {};
    this.organizations.environments.flowhooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.flowhooks.attachSharedFlowToFlowHook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.flowhooks.detachSharedFlowFromFlowHook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.keystores = {};
    this.organizations.environments.keystores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keystores', 'POST', apiParams, clientConfig);
    this.organizations.environments.keystores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.keystores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.environments.keystores.aliases = {};
    this.organizations.environments.keystores.aliases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/aliases', 'POST', apiParams, clientConfig);
    this.organizations.environments.keystores.aliases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.keystores.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.keystores.aliases.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.keystores.aliases.csr = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/csr', 'GET', apiParams, clientConfig);
    this.organizations.environments.keystores.aliases.getCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/certificate', 'GET', apiParams, clientConfig);

    this.organizations.environments.targetservers = {};
    this.organizations.environments.targetservers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/targetservers', 'POST', apiParams, clientConfig);
    this.organizations.environments.targetservers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.targetservers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.targetservers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.environments.addonsConfig = {};
    this.organizations.environments.addonsConfig.setAddonEnablement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setAddonEnablement', 'POST', apiParams, clientConfig);

    this.organizations.environments.references = {};
    this.organizations.environments.references.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/references', 'POST', apiParams, clientConfig);
    this.organizations.environments.references.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.references.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.references.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.environments.traceConfig = {};

    this.organizations.environments.traceConfig.overrides = {};
    this.organizations.environments.traceConfig.overrides.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/overrides', 'POST', apiParams, clientConfig);
    this.organizations.environments.traceConfig.overrides.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/overrides', 'GET', apiParams, clientConfig);
    this.organizations.environments.traceConfig.overrides.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.traceConfig.overrides.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.traceConfig.overrides.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.stats = {};
    this.organizations.environments.stats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.environments.optimizedStats = {};
    this.organizations.environments.optimizedStats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.environments.analytics = {};

    this.organizations.environments.analytics.admin = {};
    this.organizations.environments.analytics.admin.getSchemav2 = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.environments.analytics.exports = {};
    this.organizations.environments.analytics.exports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analytics/exports', 'POST', apiParams, clientConfig);
    this.organizations.environments.analytics.exports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.analytics.exports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analytics/exports', 'GET', apiParams, clientConfig);

    this.organizations.environments.queries = {};
    this.organizations.environments.queries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/queries', 'POST', apiParams, clientConfig);
    this.organizations.environments.queries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.queries.getResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.queries.getResulturl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.queries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/queries', 'GET', apiParams, clientConfig);

    this.organizations.environments.caches = {};
    this.organizations.environments.caches.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.securityReports = {};
    this.organizations.environments.securityReports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityReports', 'POST', apiParams, clientConfig);
    this.organizations.environments.securityReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityReports.getResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityReports.getResultView = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityReports', 'GET', apiParams, clientConfig);

    this.organizations.environments.securityStats = {};
    this.organizations.environments.securityStats.queryTabularStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+orgenv}/securityStats:queryTabularStats', 'POST', apiParams, clientConfig);
    this.organizations.environments.securityStats.queryTimeSeriesStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+orgenv}/securityStats:queryTimeSeriesStats', 'POST', apiParams, clientConfig);

    this.organizations.environments.securityIncidents = {};
    this.organizations.environments.securityIncidents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityIncidents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityIncidents', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityIncidents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.securityIncidents.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityIncidents:batchUpdate', 'POST', apiParams, clientConfig);

    this.organizations.environments.securityActions = {};
    this.organizations.environments.securityActions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityActions', 'POST', apiParams, clientConfig);
    this.organizations.environments.securityActions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityActions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityActions', 'GET', apiParams, clientConfig);
    this.organizations.environments.securityActions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.environments.securityActions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.securityActions.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);
    this.organizations.environments.securityActions.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);

    this.organizations.environments.keyvaluemaps = {};
    this.organizations.environments.keyvaluemaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.environments.keyvaluemaps.entries = {};
    this.organizations.environments.keyvaluemaps.entries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.entries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.entries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'POST', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.entries.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.environments.keyvaluemaps.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'GET', apiParams, clientConfig);

    this.organizations.deployments = {};
    this.organizations.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.envgroups = {};
    this.organizations.envgroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/envgroups', 'POST', apiParams, clientConfig);
    this.organizations.envgroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/envgroups', 'GET', apiParams, clientConfig);
    this.organizations.envgroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.envgroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.envgroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.envgroups.getDeployedIngressConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.envgroups.attachments = {};
    this.organizations.envgroups.attachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attachments', 'POST', apiParams, clientConfig);
    this.organizations.envgroups.attachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attachments', 'GET', apiParams, clientConfig);
    this.organizations.envgroups.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.envgroups.attachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.instances = {};
    this.organizations.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.organizations.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.organizations.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.instances.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+instance}:reportStatus', 'POST', apiParams, clientConfig);

    this.organizations.instances.canaryevaluations = {};
    this.organizations.instances.canaryevaluations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/canaryevaluations', 'POST', apiParams, clientConfig);
    this.organizations.instances.canaryevaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.instances.attachments = {};
    this.organizations.instances.attachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attachments', 'POST', apiParams, clientConfig);
    this.organizations.instances.attachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attachments', 'GET', apiParams, clientConfig);
    this.organizations.instances.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.instances.attachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.instances.natAddresses = {};
    this.organizations.instances.natAddresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/natAddresses', 'GET', apiParams, clientConfig);
    this.organizations.instances.natAddresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.instances.natAddresses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/natAddresses', 'POST', apiParams, clientConfig);
    this.organizations.instances.natAddresses.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.organizations.instances.natAddresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.sharedflows = {};
    this.organizations.sharedflows.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sharedflows', 'GET', apiParams, clientConfig);
    this.organizations.sharedflows.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.sharedflows.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.sharedflows.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sharedflows', 'POST', apiParams, clientConfig);
    this.organizations.sharedflows.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);

    this.organizations.sharedflows.deployments = {};
    this.organizations.sharedflows.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.sharedflows.revisions = {};
    this.organizations.sharedflows.revisions.updateSharedFlowRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.sharedflows.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.sharedflows.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.sharedflows.revisions.deployments = {};
    this.organizations.sharedflows.revisions.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    this.organizations.spaces = {};
    this.organizations.spaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/spaces', 'POST', apiParams, clientConfig);
    this.organizations.spaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.spaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.spaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.spaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/spaces', 'GET', apiParams, clientConfig);
    this.organizations.spaces.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.spaces.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.organizations.spaces.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.organizations.hostStats = {};
    this.organizations.hostStats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.optimizedHostStats = {};
    this.organizations.optimizedHostStats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.apiproducts = {};
    this.organizations.apiproducts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiproducts', 'POST', apiParams, clientConfig);
    this.organizations.apiproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.apiproducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apiproducts.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);
    this.organizations.apiproducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiproducts', 'GET', apiParams, clientConfig);
    this.organizations.apiproducts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.apiproducts.attributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/attributes', 'POST', apiParams, clientConfig);

    this.organizations.apiproducts.attributes = {};
    this.organizations.apiproducts.attributes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apiproducts.attributes.updateApiProductAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.apiproducts.attributes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.apiproducts.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'GET', apiParams, clientConfig);

    this.organizations.apiproducts.rateplans = {};
    this.organizations.apiproducts.rateplans.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rateplans', 'POST', apiParams, clientConfig);
    this.organizations.apiproducts.rateplans.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apiproducts.rateplans.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rateplans', 'GET', apiParams, clientConfig);
    this.organizations.apiproducts.rateplans.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.apiproducts.rateplans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.apps = {};
    this.organizations.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'GET', apiParams, clientConfig);

    this.organizations.hostQueries = {};
    this.organizations.hostQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostQueries', 'POST', apiParams, clientConfig);
    this.organizations.hostQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostQueries.getResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostQueries.getResultView = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostQueries', 'GET', apiParams, clientConfig);

    this.organizations.reports = {};
    this.organizations.reports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reports', 'POST', apiParams, clientConfig);
    this.organizations.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reports', 'GET', apiParams, clientConfig);
    this.organizations.reports.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.reports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.analytics = {};

    this.organizations.analytics.datastores = {};
    this.organizations.analytics.datastores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analytics/datastores', 'POST', apiParams, clientConfig);
    this.organizations.analytics.datastores.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analytics/datastores:test', 'POST', apiParams, clientConfig);
    this.organizations.analytics.datastores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.analytics.datastores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.analytics.datastores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analytics/datastores', 'GET', apiParams, clientConfig);
    this.organizations.analytics.datastores.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.developers = {};
    this.organizations.developers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/developers', 'POST', apiParams, clientConfig);
    this.organizations.developers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.developers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/developers', 'GET', apiParams, clientConfig);
    this.organizations.developers.setDeveloperStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.developers.attributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'POST', apiParams, clientConfig);
    this.organizations.developers.getMonetizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.updateMonetizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.developers.getBalance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.developers.apps = {};
    this.organizations.developers.apps.generateKeyPairOrUpdateDeveloperAppStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.developers.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'POST', apiParams, clientConfig);
    this.organizations.developers.apps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'GET', apiParams, clientConfig);
    this.organizations.developers.apps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.developers.apps.attributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/attributes', 'POST', apiParams, clientConfig);

    this.organizations.developers.apps.keys = {};
    this.organizations.developers.apps.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);
    this.organizations.developers.apps.keys.updateDeveloperAppKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.developers.apps.keys.replaceDeveloperAppKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.developers.apps.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.apps.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.developers.apps.keys.create = {};
    this.organizations.developers.apps.keys.create.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys/create', 'POST', apiParams, clientConfig);

    this.organizations.developers.apps.keys.apiproducts = {};
    this.organizations.developers.apps.keys.apiproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.apps.keys.apiproducts.updateDeveloperAppKeyApiProduct = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.organizations.developers.apps.attributes = {};
    this.organizations.developers.apps.attributes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.apps.attributes.updateDeveloperAppAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.developers.apps.attributes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.apps.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'GET', apiParams, clientConfig);

    this.organizations.developers.attributes = {};
    this.organizations.developers.attributes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.attributes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.developers.attributes.updateDeveloperAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.developers.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'GET', apiParams, clientConfig);

    this.organizations.developers.balance = {};
    this.organizations.developers.balance.credit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:credit', 'POST', apiParams, clientConfig);
    this.organizations.developers.balance.adjust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:adjust', 'POST', apiParams, clientConfig);

    this.organizations.developers.subscriptions = {};
    this.organizations.developers.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subscriptions', 'POST', apiParams, clientConfig);
    this.organizations.developers.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.developers.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', apiParams, clientConfig);
    this.organizations.developers.subscriptions.expire = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:expire', 'POST', apiParams, clientConfig);

    this.organizations.appgroups = {};
    this.organizations.appgroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appgroups', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.appgroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appgroups', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.appgroups.getBalance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.getMonetizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.updateMonetizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.appgroups.balance = {};
    this.organizations.appgroups.balance.credit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:credit', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.balance.adjust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:adjust', 'POST', apiParams, clientConfig);

    this.organizations.appgroups.apps = {};
    this.organizations.appgroups.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.apps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.appgroups.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.apps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.appgroups.apps.keys = {};
    this.organizations.appgroups.apps.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.apps.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.appgroups.apps.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.apps.keys.updateAppGroupAppKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.organizations.appgroups.apps.keys.apiproducts = {};
    this.organizations.appgroups.apps.keys.apiproducts.updateAppGroupAppKeyApiProduct = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.apps.keys.apiproducts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.appgroups.subscriptions = {};
    this.organizations.appgroups.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subscriptions', 'POST', apiParams, clientConfig);
    this.organizations.appgroups.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', apiParams, clientConfig);
    this.organizations.appgroups.subscriptions.expire = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:expire', 'POST', apiParams, clientConfig);

    this.organizations.hostSecurityReports = {};
    this.organizations.hostSecurityReports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'POST', apiParams, clientConfig);
    this.organizations.hostSecurityReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostSecurityReports.getResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostSecurityReports.getResultView = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.hostSecurityReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'GET', apiParams, clientConfig);

    this.organizations.securityProfiles = {};
    this.organizations.securityProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', apiParams, clientConfig);
    this.organizations.securityProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.securityProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.securityProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', apiParams, clientConfig);
    this.organizations.securityProfiles.listRevisions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listRevisions', 'GET', apiParams, clientConfig);

    this.organizations.securityProfiles.environments = {};
    this.organizations.securityProfiles.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.organizations.securityProfiles.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.securityProfiles.environments.computeEnvironmentScores = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+profileEnvironment}:computeEnvironmentScores', 'POST', apiParams, clientConfig);

    this.organizations.securityAssessmentResults = {};
    this.organizations.securityAssessmentResults.batchCompute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:batchCompute', 'POST', apiParams, clientConfig);

    this.organizations.securityProfilesV2 = {};
    this.organizations.securityProfilesV2.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'POST', apiParams, clientConfig);
    this.organizations.securityProfilesV2.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityProfilesV2.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'GET', apiParams, clientConfig);
    this.organizations.securityProfilesV2.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.securityProfilesV2.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.securityMonitoringConditions = {};
    this.organizations.securityMonitoringConditions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'POST', apiParams, clientConfig);
    this.organizations.securityMonitoringConditions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityMonitoringConditions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'GET', apiParams, clientConfig);
    this.organizations.securityMonitoringConditions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.securityMonitoringConditions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.securityFeedback = {};
    this.organizations.securityFeedback.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityFeedback', 'POST', apiParams, clientConfig);
    this.organizations.securityFeedback.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityFeedback.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityFeedback', 'GET', apiParams, clientConfig);
    this.organizations.securityFeedback.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.securityFeedback.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.keyvaluemaps = {};
    this.organizations.keyvaluemaps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', apiParams, clientConfig);
    this.organizations.keyvaluemaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.keyvaluemaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.keyvaluemaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.organizations.keyvaluemaps.entries = {};
    this.organizations.keyvaluemaps.entries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.keyvaluemaps.entries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.keyvaluemaps.entries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'POST', apiParams, clientConfig);
    this.organizations.keyvaluemaps.entries.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.keyvaluemaps.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entries', 'GET', apiParams, clientConfig);

    this.organizations.sites = {};

    this.organizations.sites.apicategories = {};
    this.organizations.sites.apicategories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apicategories', 'POST', apiParams, clientConfig);
    this.organizations.sites.apicategories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.sites.apicategories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.sites.apicategories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.sites.apicategories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apicategories', 'GET', apiParams, clientConfig);

    this.organizations.sites.apidocs = {};
    this.organizations.sites.apidocs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.sites.apidocs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apidocs', 'POST', apiParams, clientConfig);
    this.organizations.sites.apidocs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.organizations.sites.apidocs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apidocs', 'GET', apiParams, clientConfig);
    this.organizations.sites.apidocs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.sites.apidocs.updateDocumentation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.sites.apidocs.getDocumentation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.endpointAttachments = {};
    this.organizations.endpointAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', apiParams, clientConfig);
    this.organizations.endpointAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.endpointAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', apiParams, clientConfig);
    this.organizations.endpointAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.dnsZones = {};
    this.organizations.dnsZones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsZones', 'POST', apiParams, clientConfig);
    this.organizations.dnsZones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.dnsZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dnsZones', 'GET', apiParams, clientConfig);
    this.organizations.dnsZones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.apimServiceExtensions = {};
    this.organizations.apimServiceExtensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apimServiceExtensions', 'POST', apiParams, clientConfig);
    this.organizations.apimServiceExtensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.apimServiceExtensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apimServiceExtensions', 'GET', apiParams, clientConfig);
    this.organizations.apimServiceExtensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.apimServiceExtensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects = {};
    this.projects.provisionOrganization = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}:provisionOrganization', 'POST', apiParams, clientConfig);
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
