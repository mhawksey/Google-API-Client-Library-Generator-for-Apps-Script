
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dlp.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.content = {};
    this.projects.content.inspect = (params) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', params);
    this.projects.content.deidentify = (params) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', params);
    this.projects.content.reidentify = (params) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', params);

    this.projects.locations = {};

    this.projects.locations.content = {};
    this.projects.locations.content.inspect = (params) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', params);
    this.projects.locations.content.deidentify = (params) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', params);
    this.projects.locations.content.reidentify = (params) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', params);

    this.projects.locations.image = {};
    this.projects.locations.image.redact = (params) => this._makeRequest('v2/{+parent}/image:redact', 'POST', params);

    this.projects.locations.infoTypes = {};
    this.projects.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.projects.locations.inspectTemplates = {};
    this.projects.locations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);
    this.projects.locations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);
    this.projects.locations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.deidentifyTemplates = {};
    this.projects.locations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);
    this.projects.locations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);
    this.projects.locations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.jobTriggers = {};
    this.projects.locations.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);
    this.projects.locations.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.jobTriggers.hybridInspect = (params) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', params);
    this.projects.locations.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);
    this.projects.locations.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.jobTriggers.activate = (params) => this._makeRequest('v2/{+name}:activate', 'POST', params);

    this.projects.locations.discoveryConfigs = {};
    this.projects.locations.discoveryConfigs.create = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', params);
    this.projects.locations.discoveryConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.discoveryConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.discoveryConfigs.list = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', params);
    this.projects.locations.discoveryConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.dlpJobs = {};
    this.projects.locations.dlpJobs.create = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', params);
    this.projects.locations.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);
    this.projects.locations.dlpJobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.dlpJobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.dlpJobs.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);
    this.projects.locations.dlpJobs.hybridInspect = (params) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', params);
    this.projects.locations.dlpJobs.finish = (params) => this._makeRequest('v2/{+name}:finish', 'POST', params);

    this.projects.locations.storedInfoTypes = {};
    this.projects.locations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);
    this.projects.locations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);
    this.projects.locations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.projectDataProfiles = {};
    this.projects.locations.projectDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', params);
    this.projects.locations.projectDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.tableDataProfiles = {};
    this.projects.locations.tableDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', params);
    this.projects.locations.tableDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.tableDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.columnDataProfiles = {};
    this.projects.locations.columnDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', params);
    this.projects.locations.columnDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.fileStoreDataProfiles = {};
    this.projects.locations.fileStoreDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', params);
    this.projects.locations.fileStoreDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.fileStoreDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.connections = {};
    this.projects.locations.connections.create = (params) => this._makeRequest('v2/{+parent}/connections', 'POST', params);
    this.projects.locations.connections.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.connections.list = (params) => this._makeRequest('v2/{+parent}/connections', 'GET', params);
    this.projects.locations.connections.search = (params) => this._makeRequest('v2/{+parent}/connections:search', 'GET', params);
    this.projects.locations.connections.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.connections.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.image = {};
    this.projects.image.redact = (params) => this._makeRequest('v2/{+parent}/image:redact', 'POST', params);

    this.projects.inspectTemplates = {};
    this.projects.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);
    this.projects.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);
    this.projects.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.deidentifyTemplates = {};
    this.projects.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);
    this.projects.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);
    this.projects.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.jobTriggers = {};
    this.projects.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);
    this.projects.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);
    this.projects.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.jobTriggers.activate = (params) => this._makeRequest('v2/{+name}:activate', 'POST', params);

    this.projects.dlpJobs = {};
    this.projects.dlpJobs.create = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', params);
    this.projects.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);
    this.projects.dlpJobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.dlpJobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.dlpJobs.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.storedInfoTypes = {};
    this.projects.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);
    this.projects.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);
    this.projects.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.infoTypes = {};
    this.infoTypes.list = (params) => this._makeRequest('v2/infoTypes', 'GET', params);

    this.locations = {};

    this.locations.infoTypes = {};
    this.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.infoTypes = {};
    this.organizations.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.organizations.locations.inspectTemplates = {};
    this.organizations.locations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);
    this.organizations.locations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);
    this.organizations.locations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.deidentifyTemplates = {};
    this.organizations.locations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);
    this.organizations.locations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);
    this.organizations.locations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.jobTriggers = {};
    this.organizations.locations.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);
    this.organizations.locations.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);
    this.organizations.locations.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.discoveryConfigs = {};
    this.organizations.locations.discoveryConfigs.create = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', params);
    this.organizations.locations.discoveryConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.discoveryConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.discoveryConfigs.list = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', params);
    this.organizations.locations.discoveryConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.dlpJobs = {};
    this.organizations.locations.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);

    this.organizations.locations.storedInfoTypes = {};
    this.organizations.locations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);
    this.organizations.locations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.locations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);
    this.organizations.locations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.projectDataProfiles = {};
    this.organizations.locations.projectDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', params);
    this.organizations.locations.projectDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.tableDataProfiles = {};
    this.organizations.locations.tableDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', params);
    this.organizations.locations.tableDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.tableDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.columnDataProfiles = {};
    this.organizations.locations.columnDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', params);
    this.organizations.locations.columnDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.fileStoreDataProfiles = {};
    this.organizations.locations.fileStoreDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', params);
    this.organizations.locations.fileStoreDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.fileStoreDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.connections = {};
    this.organizations.locations.connections.create = (params) => this._makeRequest('v2/{+parent}/connections', 'POST', params);
    this.organizations.locations.connections.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.locations.connections.list = (params) => this._makeRequest('v2/{+parent}/connections', 'GET', params);
    this.organizations.locations.connections.search = (params) => this._makeRequest('v2/{+parent}/connections:search', 'GET', params);
    this.organizations.locations.connections.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.organizations.locations.connections.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.organizations.inspectTemplates = {};
    this.organizations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);
    this.organizations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);
    this.organizations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.deidentifyTemplates = {};
    this.organizations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);
    this.organizations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);
    this.organizations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.storedInfoTypes = {};
    this.organizations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);
    this.organizations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);
    this.organizations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
