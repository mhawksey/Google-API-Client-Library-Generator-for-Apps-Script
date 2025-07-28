
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.folders = {};

    this.folders.findings = {};
    this.folders.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.folders.securityHealthAnalyticsSettings = {};

    this.folders.securityHealthAnalyticsSettings.customModules = {};
    this.folders.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.folders.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.folders.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.folders.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);
    this.folders.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.folders.muteConfigs = {};
    this.folders.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);
    this.folders.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);
    this.folders.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.notificationConfigs = {};
    this.folders.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);
    this.folders.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);
    this.folders.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.locations = {};

    this.folders.locations.muteConfigs = {};
    this.folders.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.bigQueryExports = {};
    this.folders.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);
    this.folders.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.folders.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.folders.assets = {};
    this.folders.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);
    this.folders.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);
    this.folders.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.sources = {};
    this.folders.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    this.folders.sources.findings = {};
    this.folders.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);
    this.folders.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);
    this.folders.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);
    this.folders.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);
    this.folders.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.folders.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.sources.findings.externalSystems = {};
    this.folders.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.eventThreatDetectionSettings = {};
    this.folders.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.folders.eventThreatDetectionSettings.customModules = {};
    this.folders.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.folders.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.folders.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.folders.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.projects = {};

    this.projects.findings = {};
    this.projects.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.projects.securityHealthAnalyticsSettings = {};

    this.projects.securityHealthAnalyticsSettings.customModules = {};
    this.projects.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.projects.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.projects.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.projects.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);
    this.projects.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.projects.muteConfigs = {};
    this.projects.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);
    this.projects.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);
    this.projects.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.notificationConfigs = {};
    this.projects.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);
    this.projects.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);
    this.projects.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations = {};

    this.projects.locations.muteConfigs = {};
    this.projects.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.bigQueryExports = {};
    this.projects.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);
    this.projects.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.projects.assets = {};
    this.projects.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);
    this.projects.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);
    this.projects.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.sources = {};
    this.projects.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    this.projects.sources.findings = {};
    this.projects.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);
    this.projects.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);
    this.projects.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);
    this.projects.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);
    this.projects.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.sources.findings.externalSystems = {};
    this.projects.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.eventThreatDetectionSettings = {};
    this.projects.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.projects.eventThreatDetectionSettings.customModules = {};
    this.projects.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.projects.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.projects.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.projects.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations = {};
    this.organizations.getOrganizationSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.updateOrganizationSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.operations = {};
    this.organizations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.findings = {};
    this.organizations.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.organizations.securityHealthAnalyticsSettings = {};

    this.organizations.securityHealthAnalyticsSettings.customModules = {};
    this.organizations.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);
    this.organizations.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules = {};
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations.sources = {};
    this.organizations.sources.create = (params) => this._makeRequest('v1/{+parent}/sources', 'POST', params);
    this.organizations.sources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.organizations.sources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);
    this.organizations.sources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.sources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.organizations.sources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.sources.findings = {};
    this.organizations.sources.findings.create = (params) => this._makeRequest('v1/{+parent}/findings', 'POST', params);
    this.organizations.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);
    this.organizations.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);
    this.organizations.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);
    this.organizations.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);
    this.organizations.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.sources.findings.externalSystems = {};
    this.organizations.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.muteConfigs = {};
    this.organizations.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);
    this.organizations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);
    this.organizations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.notificationConfigs = {};
    this.organizations.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);
    this.organizations.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);
    this.organizations.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations = {};

    this.organizations.locations.muteConfigs = {};
    this.organizations.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.simulations = {};
    this.organizations.simulations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.simulations.valuedResources = {};
    this.organizations.simulations.valuedResources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.simulations.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.simulations.valuedResources.attackPaths = {};
    this.organizations.simulations.valuedResources.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.simulations.attackExposureResults = {};

    this.organizations.simulations.attackExposureResults.valuedResources = {};
    this.organizations.simulations.attackExposureResults.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.simulations.attackExposureResults.attackPaths = {};
    this.organizations.simulations.attackExposureResults.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.simulations.attackPaths = {};
    this.organizations.simulations.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.bigQueryExports = {};
    this.organizations.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);
    this.organizations.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.organizations.assets = {};
    this.organizations.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);
    this.organizations.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);
    this.organizations.assets.runDiscovery = (params) => this._makeRequest('v1/{+parent}/assets:runDiscovery', 'POST', params);
    this.organizations.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.eventThreatDetectionSettings = {};
    this.organizations.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.organizations.eventThreatDetectionSettings.customModules = {};
    this.organizations.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);
    this.organizations.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);
    this.organizations.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);
    this.organizations.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.eventThreatDetectionSettings.effectiveCustomModules = {};
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations.resourceValueConfigs = {};
    this.organizations.resourceValueConfigs.batchCreate = (params) => this._makeRequest('v1/{+parent}/resourceValueConfigs:batchCreate', 'POST', params);
    this.organizations.resourceValueConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.resourceValueConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.resourceValueConfigs.list = (params) => this._makeRequest('v1/{+parent}/resourceValueConfigs', 'GET', params);
    this.organizations.resourceValueConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.valuedResources = {};
    this.organizations.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.attackPaths = {};
    this.organizations.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);
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
