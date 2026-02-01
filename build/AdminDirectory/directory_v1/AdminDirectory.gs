
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://admin.googleapis.com/';
    this._servicePath = '';


    this.orgunits = {};
    this.orgunits.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PATCH', apiParams, clientConfig);
    this.orgunits.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'GET', apiParams, clientConfig);
    this.orgunits.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PUT', apiParams, clientConfig);
    this.orgunits.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'DELETE', apiParams, clientConfig);
    this.orgunits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'GET', apiParams, clientConfig);
    this.orgunits.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'POST', apiParams, clientConfig);

    this.customer = {};

    this.customer.devices = {};

    this.customer.devices.chromeos = {};
    this.customer.devices.chromeos.issueCommand = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand', 'POST', apiParams, clientConfig);
    this.customer.devices.chromeos.batchChangeStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus', 'POST', apiParams, clientConfig);

    this.customer.devices.chromeos.commands = {};
    this.customer.devices.chromeos.commands.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}', 'GET', apiParams, clientConfig);

    this.users = {};
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users', 'GET', apiParams, clientConfig);
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PUT', apiParams, clientConfig);
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PATCH', apiParams, clientConfig);
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'DELETE', apiParams, clientConfig);
    this.users.makeAdmin = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/makeAdmin', 'POST', apiParams, clientConfig);
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users', 'POST', apiParams, clientConfig);
    this.users.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/undelete', 'POST', apiParams, clientConfig);
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'GET', apiParams, clientConfig);
    this.users.createGuest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users:createGuest', 'POST', apiParams, clientConfig);
    this.users.signOut = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/signOut', 'POST', apiParams, clientConfig);
    this.users.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/watch', 'POST', apiParams, clientConfig);

    this.users.photos = {};
    this.users.photos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'DELETE', apiParams, clientConfig);
    this.users.photos.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PATCH', apiParams, clientConfig);
    this.users.photos.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PUT', apiParams, clientConfig);
    this.users.photos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'GET', apiParams, clientConfig);

    this.users.aliases = {};
    this.users.aliases.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/watch', 'POST', apiParams, clientConfig);
    this.users.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/{alias}', 'DELETE', apiParams, clientConfig);
    this.users.aliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'GET', apiParams, clientConfig);
    this.users.aliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'POST', apiParams, clientConfig);

    this.channels = {};
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory_v1/channels/stop', 'POST', apiParams, clientConfig);

    this.roles = {};
    this.roles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PUT', apiParams, clientConfig);
    this.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'GET', apiParams, clientConfig);
    this.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'DELETE', apiParams, clientConfig);
    this.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PATCH', apiParams, clientConfig);
    this.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'GET', apiParams, clientConfig);
    this.roles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'POST', apiParams, clientConfig);

    this.groups = {};
    this.groups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PUT', apiParams, clientConfig);
    this.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups', 'GET', apiParams, clientConfig);
    this.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'DELETE', apiParams, clientConfig);
    this.groups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups', 'POST', apiParams, clientConfig);
    this.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'GET', apiParams, clientConfig);
    this.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PATCH', apiParams, clientConfig);

    this.groups.aliases = {};
    this.groups.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases/{alias}', 'DELETE', apiParams, clientConfig);
    this.groups.aliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'POST', apiParams, clientConfig);
    this.groups.aliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'GET', apiParams, clientConfig);

    this.domainAliases = {};
    this.domainAliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'DELETE', apiParams, clientConfig);
    this.domainAliases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'GET', apiParams, clientConfig);
    this.domainAliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'POST', apiParams, clientConfig);
    this.domainAliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'GET', apiParams, clientConfig);

    this.tokens = {};
    this.tokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'DELETE', apiParams, clientConfig);
    this.tokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'GET', apiParams, clientConfig);
    this.tokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens', 'GET', apiParams, clientConfig);

    this.customers = {};
    this.customers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PUT', apiParams, clientConfig);
    this.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PATCH', apiParams, clientConfig);
    this.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'GET', apiParams, clientConfig);

    this.customers.chrome = {};

    this.customers.chrome.printServers = {};
    this.customers.chrome.printServers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.chrome.printServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.chrome.printServers.batchDeletePrintServers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchDeletePrintServers', 'POST', apiParams, clientConfig);
    this.customers.chrome.printServers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'POST', apiParams, clientConfig);
    this.customers.chrome.printServers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.customers.chrome.printServers.batchCreatePrintServers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchCreatePrintServers', 'POST', apiParams, clientConfig);
    this.customers.chrome.printServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'GET', apiParams, clientConfig);

    this.customers.chrome.printers = {};
    this.customers.chrome.printers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'GET', apiParams, clientConfig);
    this.customers.chrome.printers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.chrome.printers.batchDeletePrinters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters', 'POST', apiParams, clientConfig);
    this.customers.chrome.printers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'POST', apiParams, clientConfig);
    this.customers.chrome.printers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.customers.chrome.printers.batchCreatePrinters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters', 'POST', apiParams, clientConfig);
    this.customers.chrome.printers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.chrome.printers.listPrinterModels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:listPrinterModels', 'GET', apiParams, clientConfig);

    this.verificationCodes = {};
    this.verificationCodes.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/generate', 'POST', apiParams, clientConfig);
    this.verificationCodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes', 'GET', apiParams, clientConfig);
    this.verificationCodes.invalidate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/invalidate', 'POST', apiParams, clientConfig);

    this.mobiledevices = {};
    this.mobiledevices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'GET', apiParams, clientConfig);
    this.mobiledevices.action = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action', 'POST', apiParams, clientConfig);
    this.mobiledevices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'DELETE', apiParams, clientConfig);
    this.mobiledevices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile', 'GET', apiParams, clientConfig);

    this.twoStepVerification = {};
    this.twoStepVerification.turnOff = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/twoStepVerification/turnOff', 'POST', apiParams, clientConfig);

    this.privileges = {};
    this.privileges.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/ALL/privileges', 'GET', apiParams, clientConfig);

    this.resources = {};

    this.resources.features = {};
    this.resources.features.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PUT', apiParams, clientConfig);
    this.resources.features.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'POST', apiParams, clientConfig);
    this.resources.features.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PATCH', apiParams, clientConfig);
    this.resources.features.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'DELETE', apiParams, clientConfig);
    this.resources.features.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'GET', apiParams, clientConfig);
    this.resources.features.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'GET', apiParams, clientConfig);
    this.resources.features.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename', 'POST', apiParams, clientConfig);

    this.resources.calendars = {};
    this.resources.calendars.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PATCH', apiParams, clientConfig);
    this.resources.calendars.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'GET', apiParams, clientConfig);
    this.resources.calendars.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'DELETE', apiParams, clientConfig);
    this.resources.calendars.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'POST', apiParams, clientConfig);
    this.resources.calendars.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PUT', apiParams, clientConfig);
    this.resources.calendars.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'GET', apiParams, clientConfig);

    this.resources.buildings = {};
    this.resources.buildings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PATCH', apiParams, clientConfig);
    this.resources.buildings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'GET', apiParams, clientConfig);
    this.resources.buildings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PUT', apiParams, clientConfig);
    this.resources.buildings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'POST', apiParams, clientConfig);
    this.resources.buildings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'DELETE', apiParams, clientConfig);
    this.resources.buildings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'GET', apiParams, clientConfig);

    this.asps = {};
    this.asps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'GET', apiParams, clientConfig);
    this.asps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'DELETE', apiParams, clientConfig);
    this.asps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps', 'GET', apiParams, clientConfig);

    this.schemas = {};
    this.schemas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PATCH', apiParams, clientConfig);
    this.schemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'GET', apiParams, clientConfig);
    this.schemas.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PUT', apiParams, clientConfig);
    this.schemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'DELETE', apiParams, clientConfig);
    this.schemas.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'POST', apiParams, clientConfig);
    this.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'GET', apiParams, clientConfig);

    this.roleAssignments = {};
    this.roleAssignments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'POST', apiParams, clientConfig);
    this.roleAssignments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'GET', apiParams, clientConfig);
    this.roleAssignments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'GET', apiParams, clientConfig);
    this.roleAssignments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'DELETE', apiParams, clientConfig);

    this.members = {};
    this.members.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'POST', apiParams, clientConfig);
    this.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'GET', apiParams, clientConfig);
    this.members.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PATCH', apiParams, clientConfig);
    this.members.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PUT', apiParams, clientConfig);
    this.members.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'DELETE', apiParams, clientConfig);
    this.members.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'GET', apiParams, clientConfig);
    this.members.hasMember = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}', 'GET', apiParams, clientConfig);

    this.domains = {};
    this.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'GET', apiParams, clientConfig);
    this.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'GET', apiParams, clientConfig);
    this.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'DELETE', apiParams, clientConfig);
    this.domains.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'POST', apiParams, clientConfig);

    this.chromeosdevices = {};
    this.chromeosdevices.moveDevicesToOu = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu', 'POST', apiParams, clientConfig);
    this.chromeosdevices.action = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action', 'POST', apiParams, clientConfig);
    this.chromeosdevices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'GET', apiParams, clientConfig);
    this.chromeosdevices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos', 'GET', apiParams, clientConfig);
    this.chromeosdevices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PUT', apiParams, clientConfig);
    this.chromeosdevices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PATCH', apiParams, clientConfig);
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
