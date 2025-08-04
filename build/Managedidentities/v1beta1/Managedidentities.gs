
/**
 * Google Apps Script client library for the Managed Service for Microsoft Active Directory API
 * Documentation URL: https://cloud.google.com/managed-microsoft-ad/
 * @class
 */
class Managedidentities {
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
    this._rootUrl = 'https://managedidentities.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.global = {};

    this.projects.locations.global.operations = {};
    this.projects.locations.global.operations.list = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.global.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.global.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.global.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.global.domains = {};
    this.projects.locations.global.domains.create = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', params);
    this.projects.locations.global.domains.resetAdminPassword = (params) => this._makeRequest('v1beta1/{+name}:resetAdminPassword', 'POST', params);
    this.projects.locations.global.domains.list = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', params);
    this.projects.locations.global.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.global.domains.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.global.domains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.global.domains.attachTrust = (params) => this._makeRequest('v1beta1/{+name}:attachTrust', 'POST', params);
    this.projects.locations.global.domains.reconfigureTrust = (params) => this._makeRequest('v1beta1/{+name}:reconfigureTrust', 'POST', params);
    this.projects.locations.global.domains.detachTrust = (params) => this._makeRequest('v1beta1/{+name}:detachTrust', 'POST', params);
    this.projects.locations.global.domains.validateTrust = (params) => this._makeRequest('v1beta1/{+name}:validateTrust', 'POST', params);
    this.projects.locations.global.domains.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'POST', params);
    this.projects.locations.global.domains.getLdapssettings = (params) => this._makeRequest('v1beta1/{+name}/ldapssettings', 'GET', params);
    this.projects.locations.global.domains.updateLdapssettings = (params) => this._makeRequest('v1beta1/{+name}/ldapssettings', 'PATCH', params);
    this.projects.locations.global.domains.extendSchema = (params) => this._makeRequest('v1beta1/{+domain}:extendSchema', 'POST', params);
    this.projects.locations.global.domains.enableMigration = (params) => this._makeRequest('v1beta1/{+domain}:enableMigration', 'POST', params);
    this.projects.locations.global.domains.disableMigration = (params) => this._makeRequest('v1beta1/{+domain}:disableMigration', 'POST', params);
    this.projects.locations.global.domains.checkMigrationPermission = (params) => this._makeRequest('v1beta1/{+domain}:checkMigrationPermission', 'POST', params);
    this.projects.locations.global.domains.domainJoinMachine = (params) => this._makeRequest('v1beta1/{+domain}:domainJoinMachine', 'POST', params);
    this.projects.locations.global.domains.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.global.domains.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.global.domains.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.domains.sqlIntegrations = {};
    this.projects.locations.global.domains.sqlIntegrations.list = (params) => this._makeRequest('v1beta1/{+parent}/sqlIntegrations', 'GET', params);
    this.projects.locations.global.domains.sqlIntegrations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.global.domains.backups = {};
    this.projects.locations.global.domains.backups.create = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', params);
    this.projects.locations.global.domains.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);
    this.projects.locations.global.domains.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.global.domains.backups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.global.domains.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.global.domains.backups.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.global.domains.backups.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.global.domains.backups.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.peerings = {};
    this.projects.locations.global.peerings.create = (params) => this._makeRequest('v1beta1/{+parent}/peerings', 'POST', params);
    this.projects.locations.global.peerings.list = (params) => this._makeRequest('v1beta1/{+parent}/peerings', 'GET', params);
    this.projects.locations.global.peerings.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.global.peerings.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.global.peerings.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.global.peerings.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.global.peerings.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.global.peerings.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
