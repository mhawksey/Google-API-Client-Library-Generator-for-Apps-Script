
/**
 * Google Apps Script client library for the Cloud Logging API
 * Documentation URL: https://cloud.google.com/logging/docs/
 * @class
 */
class Logging {
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
    this._rootUrl = 'https://logging.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};
    this.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.locations.operations = {};
    this.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.locations.buckets = {};
    this.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);
    this.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);
    this.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);
    this.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);
    this.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.locations.buckets.views = {};
    this.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);
    this.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);
    this.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.locations.buckets.links = {};
    this.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);
    this.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);
    this.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.exclusions = {};
    this.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);
    this.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);
    this.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.sinks = {};
    this.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);
    this.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);
    this.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);
    this.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);
    this.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.v2 = {};
    this.v2.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);
    this.v2.updateCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', params);
    this.v2.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);
    this.v2.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.projects = {};
    this.projects.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);
    this.projects.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.buckets = {};
    this.projects.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);
    this.projects.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);
    this.projects.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);
    this.projects.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);
    this.projects.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.projects.locations.buckets.views = {};
    this.projects.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);
    this.projects.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);
    this.projects.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.buckets.views.logs = {};
    this.projects.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.projects.locations.buckets.links = {};
    this.projects.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);
    this.projects.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);
    this.projects.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.logScopes = {};
    this.projects.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);
    this.projects.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);
    this.projects.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.savedQueries = {};
    this.projects.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);
    this.projects.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);
    this.projects.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.recentQueries = {};
    this.projects.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.projects.exclusions = {};
    this.projects.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);
    this.projects.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);
    this.projects.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.sinks = {};
    this.projects.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);
    this.projects.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);
    this.projects.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);
    this.projects.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);
    this.projects.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);
    this.projects.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.projects.logs = {};
    this.projects.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);
    this.projects.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.projects.metrics = {};
    this.projects.metrics.list = (params) => this._makeRequest('v2/{+parent}/metrics', 'GET', params);
    this.projects.metrics.get = (params) => this._makeRequest('v2/{+metricName}', 'GET', params);
    this.projects.metrics.create = (params) => this._makeRequest('v2/{+parent}/metrics', 'POST', params);
    this.projects.metrics.update = (params) => this._makeRequest('v2/{+metricName}', 'PUT', params);
    this.projects.metrics.delete = (params) => this._makeRequest('v2/{+metricName}', 'DELETE', params);

    this.organizations = {};
    this.organizations.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);
    this.organizations.updateCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', params);
    this.organizations.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);
    this.organizations.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.organizations.locations = {};
    this.organizations.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.organizations.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.organizations.locations.buckets = {};
    this.organizations.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);
    this.organizations.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);
    this.organizations.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);
    this.organizations.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);
    this.organizations.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.organizations.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.organizations.locations.buckets.views = {};
    this.organizations.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.organizations.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.organizations.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);
    this.organizations.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);
    this.organizations.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.buckets.views.logs = {};
    this.organizations.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.organizations.locations.buckets.links = {};
    this.organizations.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);
    this.organizations.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);
    this.organizations.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.logScopes = {};
    this.organizations.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);
    this.organizations.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);
    this.organizations.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.savedQueries = {};
    this.organizations.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);
    this.organizations.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);
    this.organizations.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.recentQueries = {};
    this.organizations.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.organizations.exclusions = {};
    this.organizations.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);
    this.organizations.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);
    this.organizations.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.sinks = {};
    this.organizations.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);
    this.organizations.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);
    this.organizations.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);
    this.organizations.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);
    this.organizations.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);
    this.organizations.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.organizations.logs = {};
    this.organizations.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);
    this.organizations.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.folders = {};
    this.folders.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);
    this.folders.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);
    this.folders.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.folders.locations = {};
    this.folders.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.folders.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.folders.locations.operations = {};
    this.folders.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.folders.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.folders.locations.buckets = {};
    this.folders.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);
    this.folders.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);
    this.folders.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);
    this.folders.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);
    this.folders.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.folders.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.folders.locations.buckets.views = {};
    this.folders.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.folders.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.folders.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.folders.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);
    this.folders.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);
    this.folders.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.buckets.views.logs = {};
    this.folders.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.folders.locations.buckets.links = {};
    this.folders.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);
    this.folders.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);
    this.folders.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.logScopes = {};
    this.folders.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);
    this.folders.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);
    this.folders.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.savedQueries = {};
    this.folders.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);
    this.folders.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);
    this.folders.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.recentQueries = {};
    this.folders.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.folders.exclusions = {};
    this.folders.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);
    this.folders.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);
    this.folders.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.sinks = {};
    this.folders.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);
    this.folders.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);
    this.folders.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);
    this.folders.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);
    this.folders.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);
    this.folders.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.folders.logs = {};
    this.folders.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);
    this.folders.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.billingAccounts = {};
    this.billingAccounts.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);
    this.billingAccounts.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    this.billingAccounts.locations = {};
    this.billingAccounts.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.billingAccounts.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.billingAccounts.locations.operations = {};
    this.billingAccounts.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.billingAccounts.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.billingAccounts.locations.buckets = {};
    this.billingAccounts.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);
    this.billingAccounts.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);
    this.billingAccounts.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);
    this.billingAccounts.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);
    this.billingAccounts.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.billingAccounts.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.billingAccounts.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.billingAccounts.locations.buckets.views = {};
    this.billingAccounts.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);
    this.billingAccounts.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);
    this.billingAccounts.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.billingAccounts.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.buckets.views.logs = {};
    this.billingAccounts.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.billingAccounts.locations.buckets.links = {};
    this.billingAccounts.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);
    this.billingAccounts.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);
    this.billingAccounts.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.savedQueries = {};
    this.billingAccounts.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);
    this.billingAccounts.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);
    this.billingAccounts.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.billingAccounts.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.recentQueries = {};
    this.billingAccounts.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.billingAccounts.exclusions = {};
    this.billingAccounts.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);
    this.billingAccounts.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.billingAccounts.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);
    this.billingAccounts.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.billingAccounts.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.sinks = {};
    this.billingAccounts.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);
    this.billingAccounts.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);
    this.billingAccounts.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);
    this.billingAccounts.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);
    this.billingAccounts.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);
    this.billingAccounts.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.billingAccounts.logs = {};
    this.billingAccounts.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);
    this.billingAccounts.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.entries = {};
    this.entries.copy = (params) => this._makeRequest('v2/entries:copy', 'POST', params);
    this.entries.write = (params) => this._makeRequest('v2/entries:write', 'POST', params);
    this.entries.list = (params) => this._makeRequest('v2/entries:list', 'POST', params);
    this.entries.tail = (params) => this._makeRequest('v2/entries:tail', 'POST', params);

    this.logs = {};
    this.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);
    this.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.monitoredResourceDescriptors = {};
    this.monitoredResourceDescriptors.list = (params) => this._makeRequest('v2/monitoredResourceDescriptors', 'GET', params);
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
