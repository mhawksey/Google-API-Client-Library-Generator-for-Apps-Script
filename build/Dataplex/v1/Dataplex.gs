
/**
 * Google Apps Script client library for the Cloud Dataplex API
 * Documentation URL: https://cloud.google.com/dataplex/docs
 * @class
 */
class Dataplex {
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
    this._rootUrl = 'https://dataplex.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.lookupEntry = (params) => this._makeRequest('v1/{+name}:lookupEntry', 'GET', params);
    this.projects.locations.searchEntries = (params) => this._makeRequest('v1/{+name}:searchEntries', 'POST', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.entryTypes = {};
    this.projects.locations.entryTypes.create = (params) => this._makeRequest('v1/{+parent}/entryTypes', 'POST', params);
    this.projects.locations.entryTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryTypes.list = (params) => this._makeRequest('v1/{+parent}/entryTypes', 'GET', params);
    this.projects.locations.entryTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.entryTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.entryTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.entryTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.aspectTypes = {};
    this.projects.locations.aspectTypes.create = (params) => this._makeRequest('v1/{+parent}/aspectTypes', 'POST', params);
    this.projects.locations.aspectTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.aspectTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.aspectTypes.list = (params) => this._makeRequest('v1/{+parent}/aspectTypes', 'GET', params);
    this.projects.locations.aspectTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.aspectTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.aspectTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.aspectTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups = {};
    this.projects.locations.entryGroups.create = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'POST', params);
    this.projects.locations.entryGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.list = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'GET', params);
    this.projects.locations.entryGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.entryGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.entryGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.entryGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries = {};
    this.projects.locations.entryGroups.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);
    this.projects.locations.entryGroups.entries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);
    this.projects.locations.entryGroups.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.entryGroups.entryLinks = {};
    this.projects.locations.entryGroups.entryLinks.create = (params) => this._makeRequest('v1/{+parent}/entryLinks', 'POST', params);
    this.projects.locations.entryGroups.entryLinks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.entryLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.metadataJobs = {};
    this.projects.locations.metadataJobs.create = (params) => this._makeRequest('v1/{+parent}/metadataJobs', 'POST', params);
    this.projects.locations.metadataJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataJobs.list = (params) => this._makeRequest('v1/{+parent}/metadataJobs', 'GET', params);
    this.projects.locations.metadataJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.glossaries = {};
    this.projects.locations.glossaries.create = (params) => this._makeRequest('v1/{+parent}/glossaries', 'POST', params);
    this.projects.locations.glossaries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.glossaries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.glossaries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.glossaries.list = (params) => this._makeRequest('v1/{+parent}/glossaries', 'GET', params);
    this.projects.locations.glossaries.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.glossaries.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.glossaries.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.glossaries.categories = {};
    this.projects.locations.glossaries.categories.create = (params) => this._makeRequest('v1/{+parent}/categories', 'POST', params);
    this.projects.locations.glossaries.categories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.glossaries.categories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.glossaries.categories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.glossaries.categories.list = (params) => this._makeRequest('v1/{+parent}/categories', 'GET', params);
    this.projects.locations.glossaries.categories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.glossaries.categories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.glossaries.categories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.glossaries.terms = {};
    this.projects.locations.glossaries.terms.create = (params) => this._makeRequest('v1/{+parent}/terms', 'POST', params);
    this.projects.locations.glossaries.terms.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.glossaries.terms.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.glossaries.terms.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.glossaries.terms.list = (params) => this._makeRequest('v1/{+parent}/terms', 'GET', params);
    this.projects.locations.glossaries.terms.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.glossaries.terms.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.glossaries.terms.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.lakes = {};
    this.projects.locations.lakes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.create = (params) => this._makeRequest('v1/{+parent}/lakes', 'POST', params);
    this.projects.locations.lakes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.list = (params) => this._makeRequest('v1/{+parent}/lakes', 'GET', params);
    this.projects.locations.lakes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones = {};
    this.projects.locations.lakes.zones.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.zones.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.zones.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.zones.create = (params) => this._makeRequest('v1/{+parent}/zones', 'POST', params);
    this.projects.locations.lakes.zones.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.zones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.zones.list = (params) => this._makeRequest('v1/{+parent}/zones', 'GET', params);
    this.projects.locations.lakes.zones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones.assets = {};
    this.projects.locations.lakes.zones.assets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.zones.assets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.zones.assets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.zones.assets.create = (params) => this._makeRequest('v1/{+parent}/assets', 'POST', params);
    this.projects.locations.lakes.zones.assets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.zones.assets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.zones.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);
    this.projects.locations.lakes.zones.assets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones.assets.actions = {};
    this.projects.locations.lakes.zones.assets.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.lakes.zones.entities = {};
    this.projects.locations.lakes.zones.entities.create = (params) => this._makeRequest('v1/{+parent}/entities', 'POST', params);
    this.projects.locations.lakes.zones.entities.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.lakes.zones.entities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.zones.entities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.zones.entities.list = (params) => this._makeRequest('v1/{+parent}/entities', 'GET', params);

    this.projects.locations.lakes.zones.entities.partitions = {};
    this.projects.locations.lakes.zones.entities.partitions.create = (params) => this._makeRequest('v1/{+parent}/partitions', 'POST', params);
    this.projects.locations.lakes.zones.entities.partitions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.zones.entities.partitions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.zones.entities.partitions.list = (params) => this._makeRequest('v1/{+parent}/partitions', 'GET', params);

    this.projects.locations.lakes.zones.actions = {};
    this.projects.locations.lakes.zones.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.lakes.tasks = {};
    this.projects.locations.lakes.tasks.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.tasks.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.tasks.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.tasks.create = (params) => this._makeRequest('v1/{+parent}/tasks', 'POST', params);
    this.projects.locations.lakes.tasks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.tasks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.tasks.list = (params) => this._makeRequest('v1/{+parent}/tasks', 'GET', params);
    this.projects.locations.lakes.tasks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.tasks.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    this.projects.locations.lakes.tasks.jobs = {};
    this.projects.locations.lakes.tasks.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);
    this.projects.locations.lakes.tasks.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.tasks.jobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.lakes.environments = {};
    this.projects.locations.lakes.environments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.environments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.environments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);
    this.projects.locations.lakes.environments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.environments.list = (params) => this._makeRequest('v1/{+parent}/environments', 'GET', params);
    this.projects.locations.lakes.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.environments.sessions = {};
    this.projects.locations.lakes.environments.sessions.list = (params) => this._makeRequest('v1/{+parent}/sessions', 'GET', params);

    this.projects.locations.lakes.contentitems = {};
    this.projects.locations.lakes.contentitems.create = (params) => this._makeRequest('v1/{+parent}/contentitems', 'POST', params);
    this.projects.locations.lakes.contentitems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.contentitems.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.contentitems.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.contentitems.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.contentitems.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.contentitems.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.contentitems.list = (params) => this._makeRequest('v1/{+parent}/contentitems', 'GET', params);

    this.projects.locations.lakes.content = {};
    this.projects.locations.lakes.content.create = (params) => this._makeRequest('v1/{+parent}/content', 'POST', params);
    this.projects.locations.lakes.content.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.lakes.content.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.lakes.content.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.lakes.content.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.lakes.content.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.lakes.content.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.lakes.content.list = (params) => this._makeRequest('v1/{+parent}/content', 'GET', params);

    this.projects.locations.lakes.actions = {};
    this.projects.locations.lakes.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.dataScans = {};
    this.projects.locations.dataScans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataScans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataScans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.dataScans.create = (params) => this._makeRequest('v1/{+parent}/dataScans', 'POST', params);
    this.projects.locations.dataScans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.dataScans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataScans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataScans.list = (params) => this._makeRequest('v1/{+parent}/dataScans', 'GET', params);
    this.projects.locations.dataScans.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);
    this.projects.locations.dataScans.generateDataQualityRules = (params) => this._makeRequest('v1/{+name}:generateDataQualityRules', 'POST', params);

    this.projects.locations.dataScans.jobs = {};
    this.projects.locations.dataScans.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataScans.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);
    this.projects.locations.dataScans.jobs.generateDataQualityRules = (params) => this._makeRequest('v1/{+name}:generateDataQualityRules', 'POST', params);

    this.projects.locations.dataTaxonomies = {};
    this.projects.locations.dataTaxonomies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataTaxonomies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataTaxonomies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.dataTaxonomies.create = (params) => this._makeRequest('v1/{+parent}/dataTaxonomies', 'POST', params);
    this.projects.locations.dataTaxonomies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.dataTaxonomies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataTaxonomies.list = (params) => this._makeRequest('v1/{+parent}/dataTaxonomies', 'GET', params);
    this.projects.locations.dataTaxonomies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataTaxonomies.attributes = {};
    this.projects.locations.dataTaxonomies.attributes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataTaxonomies.attributes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataTaxonomies.attributes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.dataTaxonomies.attributes.create = (params) => this._makeRequest('v1/{+parent}/attributes', 'POST', params);
    this.projects.locations.dataTaxonomies.attributes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.dataTaxonomies.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataTaxonomies.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);
    this.projects.locations.dataTaxonomies.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataAttributeBindings = {};
    this.projects.locations.dataAttributeBindings.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataAttributeBindings.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataAttributeBindings.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.dataAttributeBindings.create = (params) => this._makeRequest('v1/{+parent}/dataAttributeBindings', 'POST', params);
    this.projects.locations.dataAttributeBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.dataAttributeBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataAttributeBindings.list = (params) => this._makeRequest('v1/{+parent}/dataAttributeBindings', 'GET', params);
    this.projects.locations.dataAttributeBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.entryLinkTypes = {};
    this.projects.locations.entryLinkTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.entryLinkTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.entryLinkTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.governanceRules = {};
    this.projects.locations.governanceRules.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.governanceRules.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.governanceRules.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.dataProducts = {};
    this.projects.locations.dataProducts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataProducts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataProducts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.dataProducts.dataAssets = {};
    this.projects.locations.dataProducts.dataAssets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.dataProducts.dataAssets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.dataProducts.dataAssets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.encryptionConfigs = {};
    this.organizations.locations.encryptionConfigs.create = (params) => this._makeRequest('v1/{+parent}/encryptionConfigs', 'POST', params);
    this.organizations.locations.encryptionConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.encryptionConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.encryptionConfigs.list = (params) => this._makeRequest('v1/{+parent}/encryptionConfigs', 'GET', params);
    this.organizations.locations.encryptionConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.encryptionConfigs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.locations.encryptionConfigs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.organizations.locations.encryptionConfigs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
