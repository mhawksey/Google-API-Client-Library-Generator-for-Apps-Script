
/**
 * Google Apps Script client library for the Sensitive Data Protection (DLP)
 * Documentation URL: https://cloud.google.com/sensitive-data-protection/docs/
 * @class
 */
class Dlp {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dlp.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};

    this.organizations.deidentifyTemplates = {};
    this.organizations.deidentifyTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.deidentifyTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', apiParams, clientConfig);
    this.organizations.deidentifyTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.deidentifyTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.deidentifyTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', apiParams, clientConfig);

    this.organizations.storedInfoTypes = {};
    this.organizations.storedInfoTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.storedInfoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', apiParams, clientConfig);
    this.organizations.storedInfoTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', apiParams, clientConfig);
    this.organizations.storedInfoTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.storedInfoTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations = {};

    this.organizations.locations.storedInfoTypes = {};
    this.organizations.locations.storedInfoTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.storedInfoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', apiParams, clientConfig);
    this.organizations.locations.storedInfoTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.storedInfoTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.storedInfoTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', apiParams, clientConfig);

    this.organizations.locations.tableDataProfiles = {};
    this.organizations.locations.tableDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.tableDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', apiParams, clientConfig);
    this.organizations.locations.tableDataProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.projectDataProfiles = {};
    this.organizations.locations.projectDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.projectDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', apiParams, clientConfig);

    this.organizations.locations.fileStoreDataProfiles = {};
    this.organizations.locations.fileStoreDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.fileStoreDataProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.fileStoreDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', apiParams, clientConfig);

    this.organizations.locations.inspectTemplates = {};
    this.organizations.locations.inspectTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.inspectTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', apiParams, clientConfig);
    this.organizations.locations.inspectTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.inspectTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', apiParams, clientConfig);
    this.organizations.locations.inspectTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.infoTypes = {};
    this.organizations.locations.infoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', apiParams, clientConfig);

    this.organizations.locations.columnDataProfiles = {};
    this.organizations.locations.columnDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', apiParams, clientConfig);
    this.organizations.locations.columnDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.deidentifyTemplates = {};
    this.organizations.locations.deidentifyTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', apiParams, clientConfig);
    this.organizations.locations.deidentifyTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.deidentifyTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.deidentifyTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', apiParams, clientConfig);
    this.organizations.locations.deidentifyTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.discoveryConfigs = {};
    this.organizations.locations.discoveryConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.discoveryConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', apiParams, clientConfig);
    this.organizations.locations.discoveryConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', apiParams, clientConfig);
    this.organizations.locations.discoveryConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.discoveryConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.connections = {};
    this.organizations.locations.connections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.connections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections', 'GET', apiParams, clientConfig);
    this.organizations.locations.connections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections', 'POST', apiParams, clientConfig);
    this.organizations.locations.connections.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections:search', 'GET', apiParams, clientConfig);
    this.organizations.locations.connections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.locations.jobTriggers = {};
    this.organizations.locations.jobTriggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', apiParams, clientConfig);
    this.organizations.locations.jobTriggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.jobTriggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.jobTriggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.jobTriggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', apiParams, clientConfig);

    this.organizations.locations.dlpJobs = {};
    this.organizations.locations.dlpJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', apiParams, clientConfig);

    this.organizations.inspectTemplates = {};
    this.organizations.inspectTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.inspectTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.inspectTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', apiParams, clientConfig);
    this.organizations.inspectTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.inspectTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.deidentifyTemplates = {};
    this.projects.deidentifyTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', apiParams, clientConfig);
    this.projects.deidentifyTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', apiParams, clientConfig);
    this.projects.deidentifyTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.deidentifyTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.deidentifyTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.infoTypes = {};
    this.projects.locations.infoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', apiParams, clientConfig);

    this.projects.locations.image = {};
    this.projects.locations.image.redact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/image:redact', 'POST', apiParams, clientConfig);

    this.projects.locations.columnDataProfiles = {};
    this.projects.locations.columnDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', apiParams, clientConfig);
    this.projects.locations.columnDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.discoveryConfigs = {};
    this.projects.locations.discoveryConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.discoveryConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.discoveryConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.discoveryConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.discoveryConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.content = {};
    this.projects.locations.content.reidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', apiParams, clientConfig);
    this.projects.locations.content.deidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', apiParams, clientConfig);
    this.projects.locations.content.inspect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', apiParams, clientConfig);

    this.projects.locations.deidentifyTemplates = {};
    this.projects.locations.deidentifyTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deidentifyTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.deidentifyTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deidentifyTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.deidentifyTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.storedInfoTypes = {};
    this.projects.locations.storedInfoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.storedInfoTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.storedInfoTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.storedInfoTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.storedInfoTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', apiParams, clientConfig);

    this.projects.locations.connections = {};
    this.projects.locations.connections.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections:search', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/connections', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.dlpJobs = {};
    this.projects.locations.dlpJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dlpJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dlpJobs.finish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:finish', 'POST', apiParams, clientConfig);
    this.projects.locations.dlpJobs.hybridInspect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', apiParams, clientConfig);
    this.projects.locations.dlpJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.dlpJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.dlpJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', apiParams, clientConfig);

    this.projects.locations.inspectTemplates = {};
    this.projects.locations.inspectTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.inspectTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.inspectTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.inspectTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.inspectTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.jobTriggers = {};
    this.projects.locations.jobTriggers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:activate', 'POST', apiParams, clientConfig);
    this.projects.locations.jobTriggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.jobTriggers.hybridInspect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', apiParams, clientConfig);
    this.projects.locations.jobTriggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', apiParams, clientConfig);
    this.projects.locations.jobTriggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', apiParams, clientConfig);
    this.projects.locations.jobTriggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.jobTriggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.projectDataProfiles = {};
    this.projects.locations.projectDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.projectDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', apiParams, clientConfig);

    this.projects.locations.tableDataProfiles = {};
    this.projects.locations.tableDataProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tableDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', apiParams, clientConfig);
    this.projects.locations.tableDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.fileStoreDataProfiles = {};
    this.projects.locations.fileStoreDataProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.fileStoreDataProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.fileStoreDataProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', apiParams, clientConfig);

    this.projects.storedInfoTypes = {};
    this.projects.storedInfoTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.storedInfoTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', apiParams, clientConfig);
    this.projects.storedInfoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', apiParams, clientConfig);
    this.projects.storedInfoTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.storedInfoTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.dlpJobs = {};
    this.projects.dlpJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.dlpJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.dlpJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', apiParams, clientConfig);
    this.projects.dlpJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', apiParams, clientConfig);
    this.projects.dlpJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.jobTriggers = {};
    this.projects.jobTriggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', apiParams, clientConfig);
    this.projects.jobTriggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.jobTriggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', apiParams, clientConfig);
    this.projects.jobTriggers.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:activate', 'POST', apiParams, clientConfig);
    this.projects.jobTriggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.jobTriggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.inspectTemplates = {};
    this.projects.inspectTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', apiParams, clientConfig);
    this.projects.inspectTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', apiParams, clientConfig);
    this.projects.inspectTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.inspectTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.inspectTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.content = {};
    this.projects.content.deidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', apiParams, clientConfig);
    this.projects.content.inspect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', apiParams, clientConfig);
    this.projects.content.reidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', apiParams, clientConfig);

    this.projects.image = {};
    this.projects.image.redact = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/image:redact', 'POST', apiParams, clientConfig);

    this.locations = {};

    this.locations.infoTypes = {};
    this.locations.infoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', apiParams, clientConfig);

    this.infoTypes = {};
    this.infoTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/infoTypes', 'GET', apiParams, clientConfig);
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
