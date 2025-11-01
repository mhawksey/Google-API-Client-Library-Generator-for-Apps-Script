
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://logging.googleapis.com/';
    this._servicePath = '';


    this.sinks = {};
    this.sinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'DELETE', apiParams, clientConfig);
    this.sinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'GET', apiParams, clientConfig);
    this.sinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'POST', apiParams, clientConfig);
    this.sinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PUT', apiParams, clientConfig);
    this.sinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'GET', apiParams, clientConfig);

    this.monitoredResourceDescriptors = {};
    this.monitoredResourceDescriptors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/monitoredResourceDescriptors', 'GET', apiParams, clientConfig);

    this.logs = {};
    this.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);
    this.logs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+logName}', 'DELETE', apiParams, clientConfig);

    this.v2 = {};
    this.v2.updateCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', apiParams, clientConfig);
    this.v2.getCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', apiParams, clientConfig);
    this.v2.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'GET', apiParams, clientConfig);
    this.v2.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'PATCH', apiParams, clientConfig);

    this.billingAccounts = {};
    this.billingAccounts.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'GET', apiParams, clientConfig);
    this.billingAccounts.getCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', apiParams, clientConfig);

    this.billingAccounts.sinks = {};
    this.billingAccounts.sinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PUT', apiParams, clientConfig);
    this.billingAccounts.sinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PATCH', apiParams, clientConfig);
    this.billingAccounts.sinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'POST', apiParams, clientConfig);
    this.billingAccounts.sinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.sinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'GET', apiParams, clientConfig);
    this.billingAccounts.sinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations = {};
    this.billingAccounts.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.savedQueries = {};
    this.billingAccounts.locations.savedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.locations.savedQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.savedQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.billingAccounts.locations.savedQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.savedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.recentQueries = {};
    this.billingAccounts.locations.recentQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.buckets = {};
    this.billingAccounts.locations.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.updateAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:updateAsync', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.createAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.billingAccounts.locations.buckets.links = {};
    this.billingAccounts.locations.buckets.links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.buckets.views = {};
    this.billingAccounts.locations.buckets.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'POST', apiParams, clientConfig);
    this.billingAccounts.locations.buckets.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.billingAccounts.locations.buckets.views.logs = {};
    this.billingAccounts.locations.buckets.views.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.operations = {};
    this.billingAccounts.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
    this.billingAccounts.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.billingAccounts.logs = {};
    this.billingAccounts.logs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+logName}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.billingAccounts.exclusions = {};
    this.billingAccounts.exclusions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.billingAccounts.exclusions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'GET', apiParams, clientConfig);
    this.billingAccounts.exclusions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.billingAccounts.exclusions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.billingAccounts.exclusions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'POST', apiParams, clientConfig);

    this.projects = {};
    this.projects.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'GET', apiParams, clientConfig);
    this.projects.getCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', apiParams, clientConfig);

    this.projects.exclusions = {};
    this.projects.exclusions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'POST', apiParams, clientConfig);
    this.projects.exclusions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.exclusions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.exclusions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'GET', apiParams, clientConfig);
    this.projects.exclusions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.recentQueries = {};
    this.projects.locations.recentQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', apiParams, clientConfig);

    this.projects.locations.savedQueries = {};
    this.projects.locations.savedQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.savedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', apiParams, clientConfig);
    this.projects.locations.savedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.savedQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', apiParams, clientConfig);
    this.projects.locations.savedQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.logScopes = {};
    this.projects.locations.logScopes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'POST', apiParams, clientConfig);
    this.projects.locations.logScopes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'GET', apiParams, clientConfig);
    this.projects.locations.logScopes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.logScopes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.logScopes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.buckets = {};
    this.projects.locations.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.buckets.createAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.updateAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:updateAsync', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.buckets.links = {};
    this.projects.locations.buckets.links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.buckets.links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'POST', apiParams, clientConfig);

    this.projects.locations.buckets.views = {};
    this.projects.locations.buckets.views.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.buckets.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.buckets.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.views.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.buckets.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.buckets.views.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.buckets.views.logs = {};
    this.projects.locations.buckets.views.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.projects.sinks = {};
    this.projects.sinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'GET', apiParams, clientConfig);
    this.projects.sinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PATCH', apiParams, clientConfig);
    this.projects.sinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PUT', apiParams, clientConfig);
    this.projects.sinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'DELETE', apiParams, clientConfig);
    this.projects.sinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'POST', apiParams, clientConfig);
    this.projects.sinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'GET', apiParams, clientConfig);

    this.projects.logs = {};
    this.projects.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);
    this.projects.logs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+logName}', 'DELETE', apiParams, clientConfig);

    this.projects.metrics = {};
    this.projects.metrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+metricName}', 'GET', apiParams, clientConfig);
    this.projects.metrics.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+metricName}', 'PUT', apiParams, clientConfig);
    this.projects.metrics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+metricName}', 'DELETE', apiParams, clientConfig);
    this.projects.metrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/metrics', 'GET', apiParams, clientConfig);
    this.projects.metrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/metrics', 'POST', apiParams, clientConfig);

    this.folders = {};
    this.folders.getCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', apiParams, clientConfig);
    this.folders.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'GET', apiParams, clientConfig);
    this.folders.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'PATCH', apiParams, clientConfig);

    this.folders.locations = {};
    this.folders.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
    this.folders.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.folders.locations.logScopes = {};
    this.folders.locations.logScopes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'POST', apiParams, clientConfig);
    this.folders.locations.logScopes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.locations.logScopes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.logScopes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.locations.logScopes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'GET', apiParams, clientConfig);

    this.folders.locations.buckets = {};
    this.folders.locations.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.locations.buckets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.updateAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:updateAsync', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.createAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.folders.locations.buckets.views = {};
    this.folders.locations.buckets.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.views.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.views.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.locations.buckets.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.views.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.folders.locations.buckets.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.locations.buckets.views.logs = {};
    this.folders.locations.buckets.views.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.folders.locations.buckets.links = {};
    this.folders.locations.buckets.links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.locations.buckets.links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.buckets.links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'POST', apiParams, clientConfig);

    this.folders.locations.operations = {};
    this.folders.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.folders.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);

    this.folders.locations.savedQueries = {};
    this.folders.locations.savedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', apiParams, clientConfig);
    this.folders.locations.savedQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.locations.savedQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.locations.savedQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', apiParams, clientConfig);
    this.folders.locations.savedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.folders.locations.recentQueries = {};
    this.folders.locations.recentQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', apiParams, clientConfig);

    this.folders.exclusions = {};
    this.folders.exclusions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.exclusions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'GET', apiParams, clientConfig);
    this.folders.exclusions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'POST', apiParams, clientConfig);
    this.folders.exclusions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.exclusions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.folders.logs = {};
    this.folders.logs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+logName}', 'DELETE', apiParams, clientConfig);
    this.folders.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.folders.sinks = {};
    this.folders.sinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PATCH', apiParams, clientConfig);
    this.folders.sinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'POST', apiParams, clientConfig);
    this.folders.sinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PUT', apiParams, clientConfig);
    this.folders.sinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'DELETE', apiParams, clientConfig);
    this.folders.sinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'GET', apiParams, clientConfig);
    this.folders.sinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'GET', apiParams, clientConfig);

    this.organizations = {};
    this.organizations.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'PATCH', apiParams, clientConfig);
    this.organizations.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/settings', 'GET', apiParams, clientConfig);
    this.organizations.getCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', apiParams, clientConfig);
    this.organizations.updateCmekSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', apiParams, clientConfig);

    this.organizations.locations = {};
    this.organizations.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
    this.organizations.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.buckets = {};
    this.organizations.locations.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'GET', apiParams, clientConfig);
    this.organizations.locations.buckets.updateAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:updateAsync', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.buckets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.buckets.createAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.buckets.links = {};
    this.organizations.locations.buckets.links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.buckets.links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.buckets.links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'GET', apiParams, clientConfig);

    this.organizations.locations.buckets.views = {};
    this.organizations.locations.buckets.views.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.views.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.buckets.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.buckets.views.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.organizations.locations.buckets.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'GET', apiParams, clientConfig);
    this.organizations.locations.buckets.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.buckets.views.logs = {};
    this.organizations.locations.buckets.views.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);

    this.organizations.locations.logScopes = {};
    this.organizations.locations.logScopes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'GET', apiParams, clientConfig);
    this.organizations.locations.logScopes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.logScopes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.logScopes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logScopes', 'POST', apiParams, clientConfig);
    this.organizations.locations.logScopes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.recentQueries = {};
    this.organizations.locations.recentQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', apiParams, clientConfig);

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.organizations.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);

    this.organizations.locations.savedQueries = {};
    this.organizations.locations.savedQueries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', apiParams, clientConfig);
    this.organizations.locations.savedQueries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.savedQueries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.savedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', apiParams, clientConfig);
    this.organizations.locations.savedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.exclusions = {};
    this.organizations.exclusions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.exclusions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.exclusions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'GET', apiParams, clientConfig);
    this.organizations.exclusions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.exclusions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'POST', apiParams, clientConfig);

    this.organizations.logs = {};
    this.organizations.logs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logs', 'GET', apiParams, clientConfig);
    this.organizations.logs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+logName}', 'DELETE', apiParams, clientConfig);

    this.organizations.sinks = {};
    this.organizations.sinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PATCH', apiParams, clientConfig);
    this.organizations.sinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'GET', apiParams, clientConfig);
    this.organizations.sinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'GET', apiParams, clientConfig);
    this.organizations.sinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sinks', 'POST', apiParams, clientConfig);
    this.organizations.sinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'PUT', apiParams, clientConfig);
    this.organizations.sinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+sinkName}', 'DELETE', apiParams, clientConfig);

    this.locations = {};
    this.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);

    this.locations.operations = {};
    this.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
    this.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.locations.buckets = {};
    this.locations.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'GET', apiParams, clientConfig);
    this.locations.buckets.updateAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:updateAsync', 'POST', apiParams, clientConfig);
    this.locations.buckets.createAsync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', apiParams, clientConfig);
    this.locations.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.locations.buckets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.locations.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.buckets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/buckets', 'POST', apiParams, clientConfig);
    this.locations.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.locations.buckets.views = {};
    this.locations.buckets.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.locations.buckets.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'GET', apiParams, clientConfig);
    this.locations.buckets.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.buckets.views.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.locations.buckets.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/views', 'POST', apiParams, clientConfig);
    this.locations.buckets.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.buckets.views.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.locations.buckets.views.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.locations.buckets.links = {};
    this.locations.buckets.links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'GET', apiParams, clientConfig);
    this.locations.buckets.links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.buckets.links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.locations.buckets.links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/links', 'POST', apiParams, clientConfig);

    this.exclusions = {};
    this.exclusions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'POST', apiParams, clientConfig);
    this.exclusions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.exclusions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.exclusions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.exclusions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/exclusions', 'GET', apiParams, clientConfig);

    this.entries = {};
    this.entries.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/entries:copy', 'POST', apiParams, clientConfig);
    this.entries.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/entries:write', 'POST', apiParams, clientConfig);
    this.entries.tail = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/entries:tail', 'POST', apiParams, clientConfig);
    this.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/entries:list', 'POST', apiParams, clientConfig);
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
