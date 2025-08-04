
/**
 * Google Apps Script client library for the Google Cloud Data Catalog API
 * Documentation URL: https://cloud.google.com/data-catalog/docs/
 * @class
 */
class Datacatalog {
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
    this._rootUrl = 'https://datacatalog.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.setConfig = (params) => this._makeRequest('v1/{+name}:setConfig', 'POST', params);
    this.projects.locations.retrieveEffectiveConfig = (params) => this._makeRequest('v1/{+name}:retrieveEffectiveConfig', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.entryGroups = {};
    this.projects.locations.entryGroups.create = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'POST', params);
    this.projects.locations.entryGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.entryGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.list = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'GET', params);
    this.projects.locations.entryGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.entryGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.entryGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries = {};
    this.projects.locations.entryGroups.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);
    this.projects.locations.entryGroups.entries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.entryGroups.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);
    this.projects.locations.entryGroups.entries.modifyEntryOverview = (params) => this._makeRequest('v1/{+name}:modifyEntryOverview', 'POST', params);
    this.projects.locations.entryGroups.entries.modifyEntryContacts = (params) => this._makeRequest('v1/{+name}:modifyEntryContacts', 'POST', params);
    this.projects.locations.entryGroups.entries.star = (params) => this._makeRequest('v1/{+name}:star', 'POST', params);
    this.projects.locations.entryGroups.entries.unstar = (params) => this._makeRequest('v1/{+name}:unstar', 'POST', params);
    this.projects.locations.entryGroups.entries.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.entryGroups.entries.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.entryGroups.entries.import = (params) => this._makeRequest('v1/{+parent}/entries:import', 'POST', params);

    this.projects.locations.entryGroups.entries.tags = {};
    this.projects.locations.entryGroups.entries.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);
    this.projects.locations.entryGroups.entries.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.entries.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.entries.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);
    this.projects.locations.entryGroups.entries.tags.reconcile = (params) => this._makeRequest('v1/{+parent}/tags:reconcile', 'POST', params);

    this.projects.locations.entryGroups.tags = {};
    this.projects.locations.entryGroups.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);
    this.projects.locations.entryGroups.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.entryGroups.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.entryGroups.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);

    this.projects.locations.tagTemplates = {};
    this.projects.locations.tagTemplates.create = (params) => this._makeRequest('v1/{+parent}/tagTemplates', 'POST', params);
    this.projects.locations.tagTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tagTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tagTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tagTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.tagTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.tagTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.tagTemplates.fields = {};
    this.projects.locations.tagTemplates.fields.create = (params) => this._makeRequest('v1/{+parent}/fields', 'POST', params);
    this.projects.locations.tagTemplates.fields.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tagTemplates.fields.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);
    this.projects.locations.tagTemplates.fields.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tagTemplates.fields.enumValues = {};
    this.projects.locations.tagTemplates.fields.enumValues.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);

    this.projects.locations.taxonomies = {};
    this.projects.locations.taxonomies.create = (params) => this._makeRequest('v1/{+parent}/taxonomies', 'POST', params);
    this.projects.locations.taxonomies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.taxonomies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.taxonomies.list = (params) => this._makeRequest('v1/{+parent}/taxonomies', 'GET', params);
    this.projects.locations.taxonomies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.taxonomies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.taxonomies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.taxonomies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.taxonomies.replace = (params) => this._makeRequest('v1/{+name}:replace', 'POST', params);
    this.projects.locations.taxonomies.import = (params) => this._makeRequest('v1/{+parent}/taxonomies:import', 'POST', params);
    this.projects.locations.taxonomies.export = (params) => this._makeRequest('v1/{+parent}/taxonomies:export', 'GET', params);

    this.projects.locations.taxonomies.policyTags = {};
    this.projects.locations.taxonomies.policyTags.create = (params) => this._makeRequest('v1/{+parent}/policyTags', 'POST', params);
    this.projects.locations.taxonomies.policyTags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.taxonomies.policyTags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.taxonomies.policyTags.list = (params) => this._makeRequest('v1/{+parent}/policyTags', 'GET', params);
    this.projects.locations.taxonomies.policyTags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.taxonomies.policyTags.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.taxonomies.policyTags.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.taxonomies.policyTags.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.catalog = {};
    this.catalog.search = (params) => this._makeRequest('v1/catalog:search', 'POST', params);

    this.entries = {};
    this.entries.lookup = (params) => this._makeRequest('v1/entries:lookup', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};
    this.organizations.locations.setConfig = (params) => this._makeRequest('v1/{+name}:setConfig', 'POST', params);
    this.organizations.locations.retrieveConfig = (params) => this._makeRequest('v1/{+name}:retrieveConfig', 'GET', params);
    this.organizations.locations.retrieveEffectiveConfig = (params) => this._makeRequest('v1/{+name}:retrieveEffectiveConfig', 'GET', params);
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
