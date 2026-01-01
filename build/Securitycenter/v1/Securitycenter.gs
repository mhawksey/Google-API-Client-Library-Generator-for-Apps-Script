
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};
    this.organizations.getOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.resourceValueConfigs = {};
    this.organizations.resourceValueConfigs.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs:batchCreate', 'POST', apiParams, clientConfig);
    this.organizations.resourceValueConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs', 'GET', apiParams, clientConfig);
    this.organizations.resourceValueConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.resourceValueConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.resourceValueConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.muteConfigs = {};
    this.organizations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);
    this.organizations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    this.organizations.valuedResources = {};
    this.organizations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.attackPaths = {};
    this.organizations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations = {};
    this.organizations.simulations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackPaths = {};
    this.organizations.simulations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources = {};
    this.organizations.simulations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);
    this.organizations.simulations.valuedResources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources.attackPaths = {};
    this.organizations.simulations.valuedResources.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults = {};

    this.organizations.simulations.attackExposureResults.valuedResources = {};
    this.organizations.simulations.attackExposureResults.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults.attackPaths = {};
    this.organizations.simulations.attackExposureResults.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.locations = {};

    this.organizations.locations.muteConfigs = {};
    this.organizations.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.assets = {};
    this.organizations.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);
    this.organizations.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);
    this.organizations.assets.runDiscovery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:runDiscovery', 'POST', apiParams, clientConfig);

    this.organizations.sources = {};
    this.organizations.sources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'POST', apiParams, clientConfig);
    this.organizations.sources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);
    this.organizations.sources.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.organizations.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.sources.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.sources.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    this.organizations.sources.findings = {};
    this.organizations.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);
    this.organizations.sources.findings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'POST', apiParams, clientConfig);
    this.organizations.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);
    this.organizations.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);
    this.organizations.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    this.organizations.sources.findings.externalSystems = {};
    this.organizations.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.notificationConfigs = {};
    this.organizations.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);
    this.organizations.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);
    this.organizations.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.findings = {};
    this.organizations.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.organizations.operations = {};
    this.organizations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings = {};

    this.organizations.securityHealthAnalyticsSettings.customModules = {};
    this.organizations.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations.bigQueryExports = {};
    this.organizations.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);
    this.organizations.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);
    this.organizations.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings = {};
    this.organizations.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.customModules = {};
    this.organizations.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders = {};

    this.folders.muteConfigs = {};
    this.folders.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);
    this.folders.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    this.folders.bigQueryExports = {};
    this.folders.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);
    this.folders.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);
    this.folders.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.locations = {};

    this.folders.locations.muteConfigs = {};
    this.folders.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.sources = {};
    this.folders.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.folders.sources.findings = {};
    this.folders.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);
    this.folders.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);
    this.folders.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);
    this.folders.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);
    this.folders.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.sources.findings.externalSystems = {};
    this.folders.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.findings = {};
    this.folders.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.folders.assets = {};
    this.folders.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);
    this.folders.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);
    this.folders.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings = {};
    this.folders.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.customModules = {};
    this.folders.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.folders.notificationConfigs = {};
    this.folders.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);
    this.folders.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);
    this.folders.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings = {};

    this.folders.securityHealthAnalyticsSettings.customModules = {};
    this.folders.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.muteConfigs = {};
    this.projects.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);
    this.projects.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);
    this.projects.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.bigQueryExports = {};
    this.projects.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);
    this.projects.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.muteConfigs = {};
    this.projects.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.assets = {};
    this.projects.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);
    this.projects.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);
    this.projects.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings = {};

    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings.customModules = {};
    this.projects.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);
    this.projects.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.notificationConfigs = {};
    this.projects.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);
    this.projects.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);
    this.projects.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.sources = {};
    this.projects.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.projects.sources.findings = {};
    this.projects.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);
    this.projects.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);
    this.projects.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);
    this.projects.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    this.projects.sources.findings.externalSystems = {};
    this.projects.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.findings = {};
    this.projects.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings = {};
    this.projects.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.customModules = {};
    this.projects.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);
    this.projects.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
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
