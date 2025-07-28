
/**
 * Google Apps Script client library for the Admin SDK API
 * Documentation URL: https://developers.google.com/workspace/admin/
 * @class
 */
class AdminDirectory {
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
    this._rootUrl = 'https://admin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.chromeosdevices = {};
    this.chromeosdevices.action = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action', 'POST', params);
    this.chromeosdevices.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'GET', params);
    this.chromeosdevices.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos', 'GET', params);
    this.chromeosdevices.moveDevicesToOu = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu', 'POST', params);
    this.chromeosdevices.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PATCH', params);
    this.chromeosdevices.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PUT', params);

    this.customer = {};

    this.customer.devices = {};

    this.customer.devices.chromeos = {};
    this.customer.devices.chromeos.issueCommand = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand', 'POST', params);
    this.customer.devices.chromeos.batchChangeStatus = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus', 'POST', params);

    this.customer.devices.chromeos.commands = {};
    this.customer.devices.chromeos.commands.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}', 'GET', params);

    this.asps = {};
    this.asps.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'DELETE', params);
    this.asps.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'GET', params);
    this.asps.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps', 'GET', params);

    this.channels = {};
    this.channels.stop = (params) => this._makeRequest('admin/directory_v1/channels/stop', 'POST', params);

    this.customers = {};
    this.customers.get = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'GET', params);
    this.customers.update = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PUT', params);
    this.customers.patch = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PATCH', params);

    this.customers.chrome = {};

    this.customers.chrome.printers = {};
    this.customers.chrome.printers.listPrinterModels = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:listPrinterModels', 'GET', params);
    this.customers.chrome.printers.list = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'GET', params);
    this.customers.chrome.printers.get = (params) => this._makeRequest('admin/directory/v1/{+name}', 'GET', params);
    this.customers.chrome.printers.create = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'POST', params);
    this.customers.chrome.printers.batchCreatePrinters = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters', 'POST', params);
    this.customers.chrome.printers.patch = (params) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', params);
    this.customers.chrome.printers.delete = (params) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', params);
    this.customers.chrome.printers.batchDeletePrinters = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters', 'POST', params);

    this.customers.chrome.printServers = {};
    this.customers.chrome.printServers.list = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'GET', params);
    this.customers.chrome.printServers.get = (params) => this._makeRequest('admin/directory/v1/{+name}', 'GET', params);
    this.customers.chrome.printServers.create = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'POST', params);
    this.customers.chrome.printServers.batchCreatePrintServers = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchCreatePrintServers', 'POST', params);
    this.customers.chrome.printServers.patch = (params) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', params);
    this.customers.chrome.printServers.delete = (params) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', params);
    this.customers.chrome.printServers.batchDeletePrintServers = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchDeletePrintServers', 'POST', params);

    this.domainAliases = {};
    this.domainAliases.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'DELETE', params);
    this.domainAliases.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'GET', params);
    this.domainAliases.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'POST', params);
    this.domainAliases.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'GET', params);

    this.domains = {};
    this.domains.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'DELETE', params);
    this.domains.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'GET', params);
    this.domains.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'POST', params);
    this.domains.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'GET', params);

    this.groups = {};
    this.groups.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'DELETE', params);
    this.groups.get = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'GET', params);
    this.groups.insert = (params) => this._makeRequest('admin/directory/v1/groups', 'POST', params);
    this.groups.list = (params) => this._makeRequest('admin/directory/v1/groups', 'GET', params);
    this.groups.update = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PUT', params);
    this.groups.patch = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PATCH', params);

    this.groups.aliases = {};
    this.groups.aliases.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases/{alias}', 'DELETE', params);
    this.groups.aliases.insert = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'POST', params);
    this.groups.aliases.list = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'GET', params);

    this.members = {};
    this.members.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'DELETE', params);
    this.members.get = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'GET', params);
    this.members.hasMember = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}', 'GET', params);
    this.members.insert = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'POST', params);
    this.members.list = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'GET', params);
    this.members.update = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PUT', params);
    this.members.patch = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PATCH', params);

    this.mobiledevices = {};
    this.mobiledevices.action = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action', 'POST', params);
    this.mobiledevices.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'DELETE', params);
    this.mobiledevices.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'GET', params);
    this.mobiledevices.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile', 'GET', params);

    this.orgunits = {};
    this.orgunits.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'DELETE', params);
    this.orgunits.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'GET', params);
    this.orgunits.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'POST', params);
    this.orgunits.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'GET', params);
    this.orgunits.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PUT', params);
    this.orgunits.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PATCH', params);

    this.privileges = {};
    this.privileges.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/ALL/privileges', 'GET', params);

    this.roleAssignments = {};
    this.roleAssignments.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'DELETE', params);
    this.roleAssignments.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'GET', params);
    this.roleAssignments.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'POST', params);
    this.roleAssignments.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'GET', params);

    this.resources = {};

    this.resources.buildings = {};
    this.resources.buildings.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'DELETE', params);
    this.resources.buildings.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'GET', params);
    this.resources.buildings.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'POST', params);
    this.resources.buildings.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'GET', params);
    this.resources.buildings.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PUT', params);
    this.resources.buildings.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PATCH', params);

    this.resources.calendars = {};
    this.resources.calendars.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'DELETE', params);
    this.resources.calendars.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'GET', params);
    this.resources.calendars.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'POST', params);
    this.resources.calendars.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'GET', params);
    this.resources.calendars.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PUT', params);
    this.resources.calendars.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PATCH', params);

    this.resources.features = {};
    this.resources.features.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'DELETE', params);
    this.resources.features.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'GET', params);
    this.resources.features.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'POST', params);
    this.resources.features.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'GET', params);
    this.resources.features.rename = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename', 'POST', params);
    this.resources.features.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PUT', params);
    this.resources.features.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PATCH', params);

    this.roles = {};
    this.roles.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'DELETE', params);
    this.roles.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'GET', params);
    this.roles.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'POST', params);
    this.roles.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'GET', params);
    this.roles.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PUT', params);
    this.roles.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PATCH', params);

    this.schemas = {};
    this.schemas.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'DELETE', params);
    this.schemas.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'GET', params);
    this.schemas.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'POST', params);
    this.schemas.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'GET', params);
    this.schemas.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PATCH', params);
    this.schemas.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PUT', params);

    this.tokens = {};
    this.tokens.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'DELETE', params);
    this.tokens.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'GET', params);
    this.tokens.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens', 'GET', params);

    this.twoStepVerification = {};
    this.twoStepVerification.turnOff = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/twoStepVerification/turnOff', 'POST', params);

    this.users = {};
    this.users.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'DELETE', params);
    this.users.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'GET', params);
    this.users.insert = (params) => this._makeRequest('admin/directory/v1/users', 'POST', params);
    this.users.list = (params) => this._makeRequest('admin/directory/v1/users', 'GET', params);
    this.users.makeAdmin = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/makeAdmin', 'POST', params);
    this.users.patch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PATCH', params);
    this.users.undelete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/undelete', 'POST', params);
    this.users.update = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PUT', params);
    this.users.watch = (params) => this._makeRequest('admin/directory/v1/users/watch', 'POST', params);
    this.users.signOut = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/signOut', 'POST', params);

    this.users.aliases = {};
    this.users.aliases.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/{alias}', 'DELETE', params);
    this.users.aliases.insert = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'POST', params);
    this.users.aliases.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'GET', params);
    this.users.aliases.watch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/watch', 'POST', params);

    this.users.photos = {};
    this.users.photos.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'DELETE', params);
    this.users.photos.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'GET', params);
    this.users.photos.update = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PUT', params);
    this.users.photos.patch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PATCH', params);

    this.verificationCodes = {};
    this.verificationCodes.generate = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/generate', 'POST', params);
    this.verificationCodes.invalidate = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/invalidate', 'POST', params);
    this.verificationCodes.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes', 'GET', params);
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
