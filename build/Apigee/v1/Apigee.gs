
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://apigee.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.hybrid = {};

    this.hybrid.issuers = {};
    this.hybrid.issuers.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations = {};
    this.organizations.list = (params) => this._makeRequest('v1/{+parent}', 'GET', params);
    this.organizations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.create = (params) => this._makeRequest('v1/organizations', 'POST', params);
    this.organizations.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.getSyncAuthorization = (params) => this._makeRequest('v1/{+name}:getSyncAuthorization', 'POST', params);
    this.organizations.setSyncAuthorization = (params) => this._makeRequest('v1/{+name}:setSyncAuthorization', 'POST', params);
    this.organizations.getControlPlaneAccess = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.updateControlPlaneAccess = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.setAddons = (params) => this._makeRequest('v1/{+org}:setAddons', 'POST', params);
    this.organizations.getProjectMapping = (params) => this._makeRequest('v1/{+name}:getProjectMapping', 'GET', params);
    this.organizations.getDeployedIngressConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.getRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.getSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.updateSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.apis = {};
    this.organizations.apis.list = (params) => this._makeRequest('v1/{+parent}/apis', 'GET', params);
    this.organizations.apis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.apis.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);
    this.organizations.apis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.apis.create = (params) => this._makeRequest('v1/{+parent}/apis', 'POST', params);

    this.organizations.apis.revisions = {};
    this.organizations.apis.revisions.updateApiProxyRevision = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.apis.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apis.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apis.revisions.deployments = {};
    this.organizations.apis.revisions.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.apis.deployments = {};
    this.organizations.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.apis.keyvaluemaps = {};
    this.organizations.apis.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);
    this.organizations.apis.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apis.keyvaluemaps.entries = {};
    this.organizations.apis.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apis.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.apis.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);
    this.organizations.apis.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.apis.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.apis.debugsessions = {};
    this.organizations.apis.debugsessions.list = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', params);

    this.organizations.operations = {};
    this.organizations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.organizations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.datacollectors = {};
    this.organizations.datacollectors.create = (params) => this._makeRequest('v1/{+parent}/datacollectors', 'POST', params);
    this.organizations.datacollectors.list = (params) => this._makeRequest('v1/{+parent}/datacollectors', 'GET', params);
    this.organizations.datacollectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.datacollectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.datacollectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments = {};
    this.organizations.environments.getDebugmask = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.updateDebugmask = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.getTraceConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.updateTraceConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);
    this.organizations.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.updateEnvironment = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.environments.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.environments.getDeployedConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.getApiSecurityRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.environments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.organizations.environments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.organizations.environments.subscribe = (params) => this._makeRequest('v1/{+parent}:subscribe', 'POST', params);
    this.organizations.environments.unsubscribe = (params) => this._makeRequest('v1/{+parent}:unsubscribe', 'POST', params);
    this.organizations.environments.modifyEnvironment = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.getAddonsConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.getSecurityActionsConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.updateSecurityActionsConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.environments.resourcefiles = {};
    this.organizations.environments.resourcefiles.create = (params) => this._makeRequest('v1/{+parent}/resourcefiles', 'POST', params);
    this.organizations.environments.resourcefiles.update = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'PUT', params);
    this.organizations.environments.resourcefiles.get = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'GET', params);
    this.organizations.environments.resourcefiles.delete = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}/{name}', 'DELETE', params);
    this.organizations.environments.resourcefiles.list = (params) => this._makeRequest('v1/{+parent}/resourcefiles', 'GET', params);
    this.organizations.environments.resourcefiles.listEnvironmentResources = (params) => this._makeRequest('v1/{+parent}/resourcefiles/{type}', 'GET', params);

    this.organizations.environments.archiveDeployments = {};
    this.organizations.environments.archiveDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.archiveDeployments.list = (params) => this._makeRequest('v1/{+parent}/archiveDeployments', 'GET', params);
    this.organizations.environments.archiveDeployments.generateUploadUrl = (params) => this._makeRequest('v1/{+parent}/archiveDeployments:generateUploadUrl', 'POST', params);
    this.organizations.environments.archiveDeployments.generateDownloadUrl = (params) => this._makeRequest('v1/{+name}:generateDownloadUrl', 'POST', params);
    this.organizations.environments.archiveDeployments.create = (params) => this._makeRequest('v1/{+parent}/archiveDeployments', 'POST', params);
    this.organizations.environments.archiveDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.archiveDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.apis = {};

    this.organizations.environments.apis.revisions = {};
    this.organizations.environments.apis.revisions.deploy = (params) => this._makeRequest('v1/{+name}/deployments', 'POST', params);
    this.organizations.environments.apis.revisions.undeploy = (params) => this._makeRequest('v1/{+name}/deployments', 'DELETE', params);
    this.organizations.environments.apis.revisions.getDeployments = (params) => this._makeRequest('v1/{+name}/deployments', 'GET', params);

    this.organizations.environments.apis.revisions.deployments = {};
    this.organizations.environments.apis.revisions.deployments.generateDeployChangeReport = (params) => this._makeRequest('v1/{+name}/deployments:generateDeployChangeReport', 'POST', params);
    this.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport = (params) => this._makeRequest('v1/{+name}/deployments:generateUndeployChangeReport', 'POST', params);

    this.organizations.environments.apis.revisions.debugsessions = {};
    this.organizations.environments.apis.revisions.debugsessions.create = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'POST', params);
    this.organizations.environments.apis.revisions.debugsessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.apis.revisions.debugsessions.list = (params) => this._makeRequest('v1/{+parent}/debugsessions', 'GET', params);
    this.organizations.environments.apis.revisions.debugsessions.deleteData = (params) => this._makeRequest('v1/{+name}/data', 'DELETE', params);

    this.organizations.environments.apis.revisions.debugsessions.data = {};
    this.organizations.environments.apis.revisions.debugsessions.data.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.apis.deployments = {};
    this.organizations.environments.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.environments.sharedflows = {};

    this.organizations.environments.sharedflows.revisions = {};
    this.organizations.environments.sharedflows.revisions.deploy = (params) => this._makeRequest('v1/{+name}/deployments', 'POST', params);
    this.organizations.environments.sharedflows.revisions.undeploy = (params) => this._makeRequest('v1/{+name}/deployments', 'DELETE', params);
    this.organizations.environments.sharedflows.revisions.getDeployments = (params) => this._makeRequest('v1/{+name}/deployments', 'GET', params);

    this.organizations.environments.sharedflows.deployments = {};
    this.organizations.environments.sharedflows.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.environments.deployments = {};
    this.organizations.environments.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);
    this.organizations.environments.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.environments.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.organizations.environments.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations.environments.flowhooks = {};
    this.organizations.environments.flowhooks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.flowhooks.attachSharedFlowToFlowHook = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.environments.flowhooks.detachSharedFlowFromFlowHook = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.keystores = {};
    this.organizations.environments.keystores.create = (params) => this._makeRequest('v1/{+parent}/keystores', 'POST', params);
    this.organizations.environments.keystores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.keystores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.keystores.aliases = {};
    this.organizations.environments.keystores.aliases.create = (params) => this._makeRequest('v1/{+parent}/aliases', 'POST', params);
    this.organizations.environments.keystores.aliases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.keystores.aliases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.keystores.aliases.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.environments.keystores.aliases.csr = (params) => this._makeRequest('v1/{+name}/csr', 'GET', params);
    this.organizations.environments.keystores.aliases.getCertificate = (params) => this._makeRequest('v1/{+name}/certificate', 'GET', params);

    this.organizations.environments.targetservers = {};
    this.organizations.environments.targetservers.create = (params) => this._makeRequest('v1/{+parent}/targetservers', 'POST', params);
    this.organizations.environments.targetservers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.targetservers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.targetservers.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.environments.addonsConfig = {};
    this.organizations.environments.addonsConfig.setAddonEnablement = (params) => this._makeRequest('v1/{+name}:setAddonEnablement', 'POST', params);

    this.organizations.environments.references = {};
    this.organizations.environments.references.create = (params) => this._makeRequest('v1/{+parent}/references', 'POST', params);
    this.organizations.environments.references.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.references.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.references.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.environments.traceConfig = {};

    this.organizations.environments.traceConfig.overrides = {};
    this.organizations.environments.traceConfig.overrides.create = (params) => this._makeRequest('v1/{+parent}/overrides', 'POST', params);
    this.organizations.environments.traceConfig.overrides.list = (params) => this._makeRequest('v1/{+parent}/overrides', 'GET', params);
    this.organizations.environments.traceConfig.overrides.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.traceConfig.overrides.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.traceConfig.overrides.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.stats = {};
    this.organizations.environments.stats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.optimizedStats = {};
    this.organizations.environments.optimizedStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.analytics = {};

    this.organizations.environments.analytics.admin = {};
    this.organizations.environments.analytics.admin.getSchemav2 = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.environments.analytics.exports = {};
    this.organizations.environments.analytics.exports.create = (params) => this._makeRequest('v1/{+parent}/analytics/exports', 'POST', params);
    this.organizations.environments.analytics.exports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.analytics.exports.list = (params) => this._makeRequest('v1/{+parent}/analytics/exports', 'GET', params);

    this.organizations.environments.queries = {};
    this.organizations.environments.queries.create = (params) => this._makeRequest('v1/{+parent}/queries', 'POST', params);
    this.organizations.environments.queries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.queries.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.queries.getResulturl = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.queries.list = (params) => this._makeRequest('v1/{+parent}/queries', 'GET', params);

    this.organizations.environments.caches = {};
    this.organizations.environments.caches.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.securityReports = {};
    this.organizations.environments.securityReports.create = (params) => this._makeRequest('v1/{+parent}/securityReports', 'POST', params);
    this.organizations.environments.securityReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.securityReports.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.securityReports.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.securityReports.list = (params) => this._makeRequest('v1/{+parent}/securityReports', 'GET', params);

    this.organizations.environments.securityStats = {};
    this.organizations.environments.securityStats.queryTabularStats = (params) => this._makeRequest('v1/{+orgenv}/securityStats:queryTabularStats', 'POST', params);
    this.organizations.environments.securityStats.queryTimeSeriesStats = (params) => this._makeRequest('v1/{+orgenv}/securityStats:queryTimeSeriesStats', 'POST', params);

    this.organizations.environments.securityIncidents = {};
    this.organizations.environments.securityIncidents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.securityIncidents.list = (params) => this._makeRequest('v1/{+parent}/securityIncidents', 'GET', params);
    this.organizations.environments.securityIncidents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.securityIncidents.batchUpdate = (params) => this._makeRequest('v1/{+parent}/securityIncidents:batchUpdate', 'POST', params);

    this.organizations.environments.securityActions = {};
    this.organizations.environments.securityActions.create = (params) => this._makeRequest('v1/{+parent}/securityActions', 'POST', params);
    this.organizations.environments.securityActions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.securityActions.list = (params) => this._makeRequest('v1/{+parent}/securityActions', 'GET', params);
    this.organizations.environments.securityActions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.environments.securityActions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.securityActions.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);
    this.organizations.environments.securityActions.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    this.organizations.environments.keyvaluemaps = {};
    this.organizations.environments.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);
    this.organizations.environments.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.environments.keyvaluemaps.entries = {};
    this.organizations.environments.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.environments.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.environments.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);
    this.organizations.environments.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.environments.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.deployments = {};
    this.organizations.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.envgroups = {};
    this.organizations.envgroups.create = (params) => this._makeRequest('v1/{+parent}/envgroups', 'POST', params);
    this.organizations.envgroups.list = (params) => this._makeRequest('v1/{+parent}/envgroups', 'GET', params);
    this.organizations.envgroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.envgroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.envgroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.envgroups.getDeployedIngressConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.envgroups.attachments = {};
    this.organizations.envgroups.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);
    this.organizations.envgroups.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);
    this.organizations.envgroups.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.envgroups.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.instances = {};
    this.organizations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.organizations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);
    this.organizations.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.instances.reportStatus = (params) => this._makeRequest('v1/{+instance}:reportStatus', 'POST', params);

    this.organizations.instances.canaryevaluations = {};
    this.organizations.instances.canaryevaluations.create = (params) => this._makeRequest('v1/{+parent}/canaryevaluations', 'POST', params);
    this.organizations.instances.canaryevaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.instances.attachments = {};
    this.organizations.instances.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);
    this.organizations.instances.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);
    this.organizations.instances.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.instances.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.instances.natAddresses = {};
    this.organizations.instances.natAddresses.list = (params) => this._makeRequest('v1/{+parent}/natAddresses', 'GET', params);
    this.organizations.instances.natAddresses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.instances.natAddresses.create = (params) => this._makeRequest('v1/{+parent}/natAddresses', 'POST', params);
    this.organizations.instances.natAddresses.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);
    this.organizations.instances.natAddresses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.sharedflows = {};
    this.organizations.sharedflows.list = (params) => this._makeRequest('v1/{+parent}/sharedflows', 'GET', params);
    this.organizations.sharedflows.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.sharedflows.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.sharedflows.create = (params) => this._makeRequest('v1/{+parent}/sharedflows', 'POST', params);
    this.organizations.sharedflows.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    this.organizations.sharedflows.deployments = {};
    this.organizations.sharedflows.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.sharedflows.revisions = {};
    this.organizations.sharedflows.revisions.updateSharedFlowRevision = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.sharedflows.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.sharedflows.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.sharedflows.revisions.deployments = {};
    this.organizations.sharedflows.revisions.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    this.organizations.spaces = {};
    this.organizations.spaces.create = (params) => this._makeRequest('v1/{+parent}/spaces', 'POST', params);
    this.organizations.spaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.spaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.spaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.spaces.list = (params) => this._makeRequest('v1/{+parent}/spaces', 'GET', params);
    this.organizations.spaces.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.spaces.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.organizations.spaces.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations.hostStats = {};
    this.organizations.hostStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.optimizedHostStats = {};
    this.organizations.optimizedHostStats.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.apiproducts = {};
    this.organizations.apiproducts.create = (params) => this._makeRequest('v1/{+parent}/apiproducts', 'POST', params);
    this.organizations.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.apiproducts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apiproducts.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);
    this.organizations.apiproducts.list = (params) => this._makeRequest('v1/{+parent}/apiproducts', 'GET', params);
    this.organizations.apiproducts.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.apiproducts.attributes = (params) => this._makeRequest('v1/{+name}/attributes', 'POST', params);

    this.organizations.apiproducts.attributes = {};
    this.organizations.apiproducts.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apiproducts.attributes.updateApiProductAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.apiproducts.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.apiproducts.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.apiproducts.rateplans = {};
    this.organizations.apiproducts.rateplans.create = (params) => this._makeRequest('v1/{+parent}/rateplans', 'POST', params);
    this.organizations.apiproducts.rateplans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apiproducts.rateplans.list = (params) => this._makeRequest('v1/{+parent}/rateplans', 'GET', params);
    this.organizations.apiproducts.rateplans.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.apiproducts.rateplans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.apps = {};
    this.organizations.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);

    this.organizations.hostQueries = {};
    this.organizations.hostQueries.create = (params) => this._makeRequest('v1/{+parent}/hostQueries', 'POST', params);
    this.organizations.hostQueries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostQueries.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostQueries.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostQueries.list = (params) => this._makeRequest('v1/{+parent}/hostQueries', 'GET', params);

    this.organizations.reports = {};
    this.organizations.reports.create = (params) => this._makeRequest('v1/{+parent}/reports', 'POST', params);
    this.organizations.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);
    this.organizations.reports.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.reports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.analytics = {};

    this.organizations.analytics.datastores = {};
    this.organizations.analytics.datastores.create = (params) => this._makeRequest('v1/{+parent}/analytics/datastores', 'POST', params);
    this.organizations.analytics.datastores.test = (params) => this._makeRequest('v1/{+parent}/analytics/datastores:test', 'POST', params);
    this.organizations.analytics.datastores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.analytics.datastores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.analytics.datastores.list = (params) => this._makeRequest('v1/{+parent}/analytics/datastores', 'GET', params);
    this.organizations.analytics.datastores.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.developers = {};
    this.organizations.developers.create = (params) => this._makeRequest('v1/{+parent}/developers', 'POST', params);
    this.organizations.developers.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.developers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.list = (params) => this._makeRequest('v1/{+parent}/developers', 'GET', params);
    this.organizations.developers.setDeveloperStatus = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.developers.attributes = (params) => this._makeRequest('v1/{+parent}/attributes', 'POST', params);
    this.organizations.developers.getMonetizationConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.updateMonetizationConfig = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.developers.getBalance = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.developers.apps = {};
    this.organizations.developers.apps.generateKeyPairOrUpdateDeveloperAppStatus = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.developers.apps.create = (params) => this._makeRequest('v1/{+parent}/apps', 'POST', params);
    this.organizations.developers.apps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);
    this.organizations.developers.apps.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.developers.apps.attributes = (params) => this._makeRequest('v1/{+name}/attributes', 'POST', params);

    this.organizations.developers.apps.keys = {};
    this.organizations.developers.apps.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);
    this.organizations.developers.apps.keys.updateDeveloperAppKey = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.developers.apps.keys.replaceDeveloperAppKey = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.developers.apps.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.apps.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.developers.apps.keys.create = {};
    this.organizations.developers.apps.keys.create.create = (params) => this._makeRequest('v1/{+parent}/keys/create', 'POST', params);

    this.organizations.developers.apps.keys.apiproducts = {};
    this.organizations.developers.apps.keys.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.apps.keys.apiproducts.updateDeveloperAppKeyApiProduct = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.organizations.developers.apps.attributes = {};
    this.organizations.developers.apps.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.apps.attributes.updateDeveloperAppAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.developers.apps.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.apps.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.developers.attributes = {};
    this.organizations.developers.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.developers.attributes.updateDeveloperAttribute = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.developers.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.organizations.developers.balance = {};
    this.organizations.developers.balance.credit = (params) => this._makeRequest('v1/{+name}:credit', 'POST', params);
    this.organizations.developers.balance.adjust = (params) => this._makeRequest('v1/{+name}:adjust', 'POST', params);

    this.organizations.developers.subscriptions = {};
    this.organizations.developers.subscriptions.create = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'POST', params);
    this.organizations.developers.subscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.developers.subscriptions.list = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', params);
    this.organizations.developers.subscriptions.expire = (params) => this._makeRequest('v1/{+name}:expire', 'POST', params);

    this.organizations.appgroups = {};
    this.organizations.appgroups.create = (params) => this._makeRequest('v1/{+parent}/appgroups', 'POST', params);
    this.organizations.appgroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.appgroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.appgroups.list = (params) => this._makeRequest('v1/{+parent}/appgroups', 'GET', params);
    this.organizations.appgroups.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.appgroups.apps = {};
    this.organizations.appgroups.apps.create = (params) => this._makeRequest('v1/{+parent}/apps', 'POST', params);
    this.organizations.appgroups.apps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.appgroups.apps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.appgroups.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);
    this.organizations.appgroups.apps.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.organizations.appgroups.apps.keys = {};
    this.organizations.appgroups.apps.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);
    this.organizations.appgroups.apps.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.appgroups.apps.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.appgroups.apps.keys.updateAppGroupAppKey = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.organizations.appgroups.apps.keys.apiproducts = {};
    this.organizations.appgroups.apps.keys.apiproducts.updateAppGroupAppKeyApiProduct = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.organizations.appgroups.apps.keys.apiproducts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.hostSecurityReports = {};
    this.organizations.hostSecurityReports.create = (params) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'POST', params);
    this.organizations.hostSecurityReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostSecurityReports.getResult = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostSecurityReports.getResultView = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.hostSecurityReports.list = (params) => this._makeRequest('v1/{+parent}/hostSecurityReports', 'GET', params);

    this.organizations.securityProfiles = {};
    this.organizations.securityProfiles.create = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', params);
    this.organizations.securityProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.securityProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.securityProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.securityProfiles.list = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', params);
    this.organizations.securityProfiles.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    this.organizations.securityProfiles.environments = {};
    this.organizations.securityProfiles.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);
    this.organizations.securityProfiles.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.securityProfiles.environments.computeEnvironmentScores = (params) => this._makeRequest('v1/{+profileEnvironment}:computeEnvironmentScores', 'POST', params);

    this.organizations.securityAssessmentResults = {};
    this.organizations.securityAssessmentResults.batchCompute = (params) => this._makeRequest('v1/{+name}:batchCompute', 'POST', params);

    this.organizations.securityProfilesV2 = {};
    this.organizations.securityProfilesV2.create = (params) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'POST', params);
    this.organizations.securityProfilesV2.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.securityProfilesV2.list = (params) => this._makeRequest('v1/{+parent}/securityProfilesV2', 'GET', params);
    this.organizations.securityProfilesV2.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.securityProfilesV2.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.securityMonitoringConditions = {};
    this.organizations.securityMonitoringConditions.create = (params) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'POST', params);
    this.organizations.securityMonitoringConditions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.securityMonitoringConditions.list = (params) => this._makeRequest('v1/{+parent}/securityMonitoringConditions', 'GET', params);
    this.organizations.securityMonitoringConditions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.securityMonitoringConditions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.keyvaluemaps = {};
    this.organizations.keyvaluemaps.create = (params) => this._makeRequest('v1/{+parent}/keyvaluemaps', 'POST', params);
    this.organizations.keyvaluemaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.keyvaluemaps.entries = {};
    this.organizations.keyvaluemaps.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.keyvaluemaps.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.keyvaluemaps.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);
    this.organizations.keyvaluemaps.entries.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.keyvaluemaps.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    this.organizations.sites = {};

    this.organizations.sites.apicategories = {};
    this.organizations.sites.apicategories.create = (params) => this._makeRequest('v1/{+parent}/apicategories', 'POST', params);
    this.organizations.sites.apicategories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.sites.apicategories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.sites.apicategories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.sites.apicategories.list = (params) => this._makeRequest('v1/{+parent}/apicategories', 'GET', params);

    this.organizations.sites.apidocs = {};
    this.organizations.sites.apidocs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.sites.apidocs.create = (params) => this._makeRequest('v1/{+parent}/apidocs', 'POST', params);
    this.organizations.sites.apidocs.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.organizations.sites.apidocs.list = (params) => this._makeRequest('v1/{+parent}/apidocs', 'GET', params);
    this.organizations.sites.apidocs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.sites.apidocs.updateDocumentation = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.sites.apidocs.getDocumentation = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.endpointAttachments = {};
    this.organizations.endpointAttachments.create = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', params);
    this.organizations.endpointAttachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.endpointAttachments.list = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', params);
    this.organizations.endpointAttachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.dnsZones = {};
    this.organizations.dnsZones.create = (params) => this._makeRequest('v1/{+parent}/dnsZones', 'POST', params);
    this.organizations.dnsZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.dnsZones.list = (params) => this._makeRequest('v1/{+parent}/dnsZones', 'GET', params);
    this.organizations.dnsZones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects = {};
    this.projects.provisionOrganization = (params) => this._makeRequest('v1/{+project}:provisionOrganization', 'POST', params);
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
