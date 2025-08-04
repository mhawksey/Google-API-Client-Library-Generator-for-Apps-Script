
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

    /**
     * Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.resourceId - (Required) The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.chromeosdevices.action = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action', 'POST', params);

    /**
     * Retrieves a Chrome OS device's properties.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method.
     * @param {string} params.projection - Determines whether the response contains the full list of properties or only a subset.
     * @return {object} The API response object.
     */
    this.chromeosdevices.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'GET', params);

    /**
     * Retrieves a paginated list of Chrome OS devices within an account.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {boolean} params.includeChildOrgunits - Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
     * @param {integer} params.maxResults - Maximum number of results to return. Value should not exceed 300.
     * @param {string} params.orderBy - Device property to use for sorting results.
     * @param {string} params.orgUnitPath - The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {string} params.pageToken - The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.
     * @param {string} params.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {string} params.query - Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/list-query-operators
     * @param {string} params.sortOrder - Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     * @return {object} The API response object.
     */
    this.chromeosdevices.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos', 'GET', params);

    /**
     * Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
     * @param {string} params.customerId - (Required) Immutable. ID of the Google Workspace account
     * @param {string} params.orgUnitPath - (Required) Full path of the target organizational unit or its ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.chromeosdevices.moveDevicesToOu = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu', 'POST', params);

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method.
     * @param {string} params.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.chromeosdevices.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PATCH', params);

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method.
     * @param {string} params.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.chromeosdevices.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PUT', params);

    this.customer = {};

    this.customer.devices = {};

    this.customer.devices.chromeos = {};

    /**
     * Issues a command for the device to execute.
     * @param {string} params.customerId - (Required) Immutable. ID of the Google Workspace account.
     * @param {string} params.deviceId - (Required) Immutable. ID of Chrome OS Device.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customer.devices.chromeos.issueCommand = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand', 'POST', params);

    /**
     * Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).
     * @param {string} params.customerId - (Required) Required. Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customer.devices.chromeos.batchChangeStatus = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus', 'POST', params);

    this.customer.devices.chromeos.commands = {};

    /**
     * Gets command data a specific command issued to the device.
     * @param {string} params.commandId - (Required) Immutable. ID of Chrome OS Device Command.
     * @param {string} params.customerId - (Required) Immutable. ID of the Google Workspace account.
     * @param {string} params.deviceId - (Required) Immutable. ID of Chrome OS Device.
     * @return {object} The API response object.
     */
    this.customer.devices.chromeos.commands.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}', 'GET', params);

    this.asps = {};

    /**
     * Deletes an ASP issued by a user.
     * @param {integer} params.codeId - (Required) The unique ID of the ASP to be deleted.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.asps.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'DELETE', params);

    /**
     * Gets information about an ASP issued by a user.
     * @param {integer} params.codeId - (Required) The unique ID of the ASP.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.asps.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'GET', params);

    /**
     * Lists the ASPs issued by a user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.asps.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/asps', 'GET', params);

    this.channels = {};

    /**
     * Stops watching resources through this channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.stop = (params) => this._makeRequest('admin/directory_v1/channels/stop', 'POST', params);

    this.customers = {};

    /**
     * Retrieves a customer.
     * @param {string} params.customerKey - (Required) Id of the customer to be retrieved
     * @return {object} The API response object.
     */
    this.customers.get = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'GET', params);

    /**
     * Updates a customer.
     * @param {string} params.customerKey - (Required) Id of the customer to be updated
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.update = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PUT', params);

    /**
     * Patches a customer.
     * @param {string} params.customerKey - (Required) Id of the customer to be updated
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.patch = (params) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PATCH', params);

    this.customers.chrome = {};

    this.customers.chrome.printers = {};

    /**
     * Lists the supported printer models.
     * @param {string} params.filter - Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.
     * @param {integer} params.pageSize - The maximum number of objects to return. The service may return fewer than this value.
     * @param {string} params.pageToken - A page token, received from a previous call.
     * @param {string} params.parent - (Required) Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.listPrinterModels = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:listPrinterModels', 'GET', params);

    /**
     * List printers configs.
     * @param {string} params.filter - Search query. Search syntax is shared between this api and Admin Console printers pages.
     * @param {string} params.orderBy - The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.
     * @param {string} params.orgUnitId - Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.
     * @param {integer} params.pageSize - The maximum number of objects to return. The service may return fewer than this value.
     * @param {string} params.pageToken - A page token, received from a previous call.
     * @param {string} params.parent - (Required) Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.list = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'GET', params);

    /**
     * Returns a `Printer` resource (printer's config).
     * @param {string} params.name - (Required) Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printer_id}
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.get = (params) => this._makeRequest('admin/directory/v1/{+name}', 'GET', params);

    /**
     * Creates a printer under given Organization Unit.
     * @param {string} params.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.create = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'POST', params);

    /**
     * Creates printers under given Organization Unit.
     * @param {string} params.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.batchCreatePrinters = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters', 'POST', params);

    /**
     * Updates a `Printer` resource.
     * @param {string} params.clearMask - The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     * @param {string} params.name - (Required) Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)
     * @param {string} params.updateMask - The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.patch = (params) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', params);

    /**
     * Deletes a `Printer`.
     * @param {string} params.name - (Required) Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printer_id}
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.delete = (params) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', params);

    /**
     * Deletes printers in batch.
     * @param {string} params.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printers.batchDeletePrinters = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters', 'POST', params);

    this.customers.chrome.printServers = {};

    /**
     * Lists print server configurations.
     * @param {string} params.filter - Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.
     * @param {string} params.orderBy - Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order.
     * @param {string} params.orgUnitId - If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.
     * @param {integer} params.pageSize - The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.
     * @param {string} params.pageToken - A generated token to paginate results (the `next_page_token` from a previous call).
     * @param {string} params.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.list = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'GET', params);

    /**
     * Returns a print server's configuration.
     * @param {string} params.name - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.get = (params) => this._makeRequest('admin/directory/v1/{+name}', 'GET', params);

    /**
     * Creates a print server.
     * @param {string} params.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.create = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'POST', params);

    /**
     * Creates multiple print servers.
     * @param {string} params.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.batchCreatePrintServers = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchCreatePrintServers', 'POST', params);

    /**
     * Updates a print server's configuration.
     * @param {string} params.name - (Required) Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
     * @param {string} params.updateMask - The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.patch = (params) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', params);

    /**
     * Deletes a print server.
     * @param {string} params.name - (Required) Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}`
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.delete = (params) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', params);

    /**
     * Deletes multiple print servers.
     * @param {string} params.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.chrome.printServers.batchDeletePrintServers = (params) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchDeletePrintServers', 'POST', params);

    this.domainAliases = {};

    /**
     * Deletes a domain Alias of the customer.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.domainAliasName - (Required) Name of domain alias to be retrieved.
     * @return {object} The API response object.
     */
    this.domainAliases.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'DELETE', params);

    /**
     * Retrieves a domain alias of the customer.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.domainAliasName - (Required) Name of domain alias to be retrieved.
     * @return {object} The API response object.
     */
    this.domainAliases.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'GET', params);

    /**
     * Inserts a domain alias of the customer.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.domainAliases.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'POST', params);

    /**
     * Lists the domain aliases of the customer.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.parentDomainName - Name of the parent domain for which domain aliases are to be fetched.
     * @return {object} The API response object.
     */
    this.domainAliases.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'GET', params);

    this.domains = {};

    /**
     * Deletes a domain of the customer.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.domainName - (Required) Name of domain to be deleted
     * @return {object} The API response object.
     */
    this.domains.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'DELETE', params);

    /**
     * Retrieves a domain of the customer.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.domainName - (Required) Name of domain to be retrieved
     * @return {object} The API response object.
     */
    this.domains.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'GET', params);

    /**
     * Inserts a domain of the customer.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.domains.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'POST', params);

    /**
     * Lists the domains of the customer.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @return {object} The API response object.
     */
    this.domains.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'GET', params);

    this.groups = {};

    /**
     * Deletes a group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @return {object} The API response object.
     */
    this.groups.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'DELETE', params);

    /**
     * Retrieves a group's properties.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @return {object} The API response object.
     */
    this.groups.get = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'GET', params);

    /**
     * Creates a group.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.groups.insert = (params) => this._makeRequest('admin/directory/v1/groups', 'POST', params);

    /**
     * Retrieves all groups of a domain or of a user given a userKey (paginated).
     * @param {string} params.customer - The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.domain - The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.
     * @param {integer} params.maxResults - Maximum number of results to return. Max allowed value is 200.
     * @param {string} params.orderBy - Column to use for sorting results
     * @param {string} params.pageToken - Token to specify next page in the list
     * @param {string} params.query - Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups
     * @param {string} params.sortOrder - Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param {string} params.userKey - Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object. Cannot be used with the `customer` parameter.
     * @return {object} The API response object.
     */
    this.groups.list = (params) => this._makeRequest('admin/directory/v1/groups', 'GET', params);

    /**
     * Updates a group's properties.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.groups.update = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PUT', params);

    /**
     * Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.groups.patch = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PATCH', params);

    this.groups.aliases = {};

    /**
     * Removes an alias.
     * @param {string} params.alias - (Required) The alias to be removed
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @return {object} The API response object.
     */
    this.groups.aliases.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases/{alias}', 'DELETE', params);

    /**
     * Adds an alias for the group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.groups.aliases.insert = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'POST', params);

    /**
     * Lists all aliases for a group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @return {object} The API response object.
     */
    this.groups.aliases.list = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'GET', params);

    this.members = {};

    /**
     * Removes a member from a group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} params.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @return {object} The API response object.
     */
    this.members.delete = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'DELETE', params);

    /**
     * Retrieves a group member's properties.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} params.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @return {object} The API response object.
     */
    this.members.get = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'GET', params);

    /**
     * Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} params.memberKey - (Required) Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
     * @return {object} The API response object.
     */
    this.members.hasMember = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}', 'GET', params);

    /**
     * Adds a user to the specified group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.members.insert = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'POST', params);

    /**
     * Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {boolean} params.includeDerivedMembership - Whether to list indirect memberships. Default: false.
     * @param {integer} params.maxResults - Maximum number of results to return. Max allowed value is 200.
     * @param {string} params.pageToken - Token to specify next page in the list.
     * @param {string} params.roles - The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.
     * @return {object} The API response object.
     */
    this.members.list = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'GET', params);

    /**
     * Updates the membership of a user in the specified group.
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} params.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.members.update = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PUT', params);

    /**
     * Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {string} params.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} params.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.members.patch = (params) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PATCH', params);

    this.mobiledevices = {};

    /**
     * Takes an action that affects a mobile device. For example, remotely wiping a device.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.mobiledevices.action = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action', 'POST', params);

    /**
     * Removes a mobile device.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @return {object} The API response object.
     */
    this.mobiledevices.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'DELETE', params);

    /**
     * Retrieves a mobile device's properties.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.projection - Restrict information returned to a set of selected fields.
     * @param {string} params.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @return {object} The API response object.
     */
    this.mobiledevices.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'GET', params);

    /**
     * Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {integer} params.maxResults - Maximum number of results to return. Max allowed value is 100.
     * @param {string} params.orderBy - Device property to use for sorting results.
     * @param {string} params.pageToken - Token to specify next page in the list
     * @param {string} params.projection - Restrict information returned to a set of selected fields.
     * @param {string} params.query - Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/search-operators
     * @param {string} params.sortOrder - Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     * @return {object} The API response object.
     */
    this.mobiledevices.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile', 'GET', params);

    this.orgunits = {};

    /**
     * Removes an organizational unit.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @return {object} The API response object.
     */
    this.orgunits.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'DELETE', params);

    /**
     * Retrieves an organizational unit.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @return {object} The API response object.
     */
    this.orgunits.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'GET', params);

    /**
     * Adds an organizational unit.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.orgunits.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'POST', params);

    /**
     * Retrieves a list of all organizational units for an account.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.orgUnitPath - The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.
     * @param {string} params.type - Whether to return all sub-organizations or just immediate children.
     * @return {object} The API response object.
     */
    this.orgunits.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'GET', params);

    /**
     * Updates an organizational unit.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.orgunits.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PUT', params);

    /**
     * Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch)
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} params.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.orgunits.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PATCH', params);

    this.privileges = {};

    /**
     * Retrieves a paginated list of all privileges for a customer.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @return {object} The API response object.
     */
    this.privileges.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/ALL/privileges', 'GET', params);

    this.roleAssignments = {};

    /**
     * Deletes a role assignment.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.roleAssignmentId - (Required) Immutable ID of the role assignment.
     * @return {object} The API response object.
     */
    this.roleAssignments.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'DELETE', params);

    /**
     * Retrieves a role assignment.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.roleAssignmentId - (Required) Immutable ID of the role assignment.
     * @return {object} The API response object.
     */
    this.roleAssignments.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'GET', params);

    /**
     * Creates a role assignment.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.roleAssignments.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'POST', params);

    /**
     * Retrieves a paginated list of all roleAssignments.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {boolean} params.includeIndirectRoleAssignments - When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @param {string} params.roleId - Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     * @param {string} params.userKey - The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.
     * @return {object} The API response object.
     */
    this.roleAssignments.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'GET', params);

    this.resources = {};

    this.resources.buildings = {};

    /**
     * Deletes a building.
     * @param {string} params.buildingId - (Required) The id of the building to delete.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @return {object} The API response object.
     */
    this.resources.buildings.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'DELETE', params);

    /**
     * Retrieves a building.
     * @param {string} params.buildingId - (Required) The unique ID of the building to retrieve.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @return {object} The API response object.
     */
    this.resources.buildings.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'GET', params);

    /**
     * Inserts a building.
     * @param {string} params.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.buildings.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'POST', params);

    /**
     * Retrieves a list of buildings for an account.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @return {object} The API response object.
     */
    this.resources.buildings.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'GET', params);

    /**
     * Updates a building.
     * @param {string} params.buildingId - (Required) The id of the building to update.
     * @param {string} params.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.buildings.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PUT', params);

    /**
     * Patches a building.
     * @param {string} params.buildingId - (Required) The id of the building to update.
     * @param {string} params.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.buildings.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PATCH', params);

    this.resources.calendars = {};

    /**
     * Deletes a calendar resource.
     * @param {string} params.calendarResourceId - (Required) The unique ID of the calendar resource to delete.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @return {object} The API response object.
     */
    this.resources.calendars.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'DELETE', params);

    /**
     * Retrieves a calendar resource.
     * @param {string} params.calendarResourceId - (Required) The unique ID of the calendar resource to retrieve.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @return {object} The API response object.
     */
    this.resources.calendars.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'GET', params);

    /**
     * Inserts a calendar resource.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.calendars.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'POST', params);

    /**
     * Retrieves a list of calendar resources for an account.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.orderBy - Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @param {string} params.query - String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.
     * @return {object} The API response object.
     */
    this.resources.calendars.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'GET', params);

    /**
     * Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
     * @param {string} params.calendarResourceId - (Required) The unique ID of the calendar resource to update.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.calendars.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PUT', params);

    /**
     * Patches a calendar resource.
     * @param {string} params.calendarResourceId - (Required) The unique ID of the calendar resource to update.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.calendars.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PATCH', params);

    this.resources.features = {};

    /**
     * Deletes a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} params.featureKey - (Required) The unique ID of the feature to delete.
     * @return {object} The API response object.
     */
    this.resources.features.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'DELETE', params);

    /**
     * Retrieves a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} params.featureKey - (Required) The unique ID of the feature to retrieve.
     * @return {object} The API response object.
     */
    this.resources.features.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'GET', params);

    /**
     * Inserts a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.features.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'POST', params);

    /**
     * Retrieves a list of features for an account.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @return {object} The API response object.
     */
    this.resources.features.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'GET', params);

    /**
     * Renames a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} params.oldName - (Required) The unique ID of the feature to rename.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.features.rename = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename', 'POST', params);

    /**
     * Updates a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} params.featureKey - (Required) The unique ID of the feature to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.features.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PUT', params);

    /**
     * Patches a feature.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} params.featureKey - (Required) The unique ID of the feature to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.resources.features.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PATCH', params);

    this.roles = {};

    /**
     * Deletes a role.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.roleId - (Required) Immutable ID of the role.
     * @return {object} The API response object.
     */
    this.roles.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'DELETE', params);

    /**
     * Retrieves a role.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.roleId - (Required) Immutable ID of the role.
     * @return {object} The API response object.
     */
    this.roles.get = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'GET', params);

    /**
     * Creates a role.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.roles.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'POST', params);

    /**
     * Retrieves a paginated list of all the roles in a domain.
     * @param {string} params.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.pageToken - Token to specify the next page in the list.
     * @return {object} The API response object.
     */
    this.roles.list = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'GET', params);

    /**
     * Updates a role.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.roleId - (Required) Immutable ID of the role.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.roles.update = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PUT', params);

    /**
     * Patches a role.
     * @param {string} params.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.roleId - (Required) Immutable ID of the role.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.roles.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PATCH', params);

    this.schemas = {};

    /**
     * Deletes a schema.
     * @param {string} params.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.schemaKey - (Required) Name or immutable ID of the schema.
     * @return {object} The API response object.
     */
    this.schemas.delete = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'DELETE', params);

    /**
     * Retrieves a schema.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.schemaKey - (Required) Name or immutable ID of the schema.
     * @return {object} The API response object.
     */
    this.schemas.get = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'GET', params);

    /**
     * Creates a schema.
     * @param {string} params.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.schemas.insert = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'POST', params);

    /**
     * Retrieves all schemas for a customer.
     * @param {string} params.customerId - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @return {object} The API response object.
     */
    this.schemas.list = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'GET', params);

    /**
     * Patches a schema.
     * @param {string} params.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.schemas.patch = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PATCH', params);

    /**
     * Updates a schema.
     * @param {string} params.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} params.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.schemas.update = (params) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PUT', params);

    this.tokens = {};

    /**
     * Deletes all access tokens issued by a user for an application.
     * @param {string} params.clientId - (Required) The Client ID of the application the token is issued to.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.tokens.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'DELETE', params);

    /**
     * Gets information about an access token issued by a user.
     * @param {string} params.clientId - (Required) The Client ID of the application the token is issued to.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.tokens.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'GET', params);

    /**
     * Returns the set of tokens specified user has issued to 3rd party applications.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.tokens.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens', 'GET', params);

    this.twoStepVerification = {};

    /**
     * Turns off 2-Step Verification for user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.twoStepVerification.turnOff = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/twoStepVerification/turnOff', 'POST', params);

    this.users = {};

    /**
     * Deletes a user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'DELETE', params);

    /**
     * Retrieves a user.
     * @param {string} params.customFieldMask - A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     * @param {string} params.projection - What subset of fields to fetch for this user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {string} params.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'GET', params);

    /**
     * Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.
     * @param {boolean} params.resolveConflictAccount - Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.insert = (params) => this._makeRequest('admin/directory/v1/users', 'POST', params);

    /**
     * Retrieves a paginated list of either deleted users or all users in a domain.
     * @param {string} params.customFieldMask - A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     * @param {string} params.customer - The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all users for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} params.domain - The domain name. Use this field to get users from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.
     * @param {string} params.event - Event on which subscription is intended (if subscribing)
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.orderBy - Property to use for sorting results.
     * @param {string} params.pageToken - Token to specify next page in the list. The page token is only valid for three days.
     * @param {string} params.projection - What subset of fields to fetch for this user.
     * @param {string} params.query - Query string for searching user fields. For more information on constructing user queries, see [Search for Users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users).
     * @param {string} params.showDeleted - If set to `true`, retrieves the list of deleted users. (Default: `false`)
     * @param {string} params.sortOrder - Whether to return results in ascending or descending order, ignoring case.
     * @param {string} params.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @return {object} The API response object.
     */
    this.users.list = (params) => this._makeRequest('admin/directory/v1/users', 'GET', params);

    /**
     * Makes a user a super administrator.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.makeAdmin = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/makeAdmin', 'POST', params);

    /**
     * Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.patch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PATCH', params);

    /**
     * Undeletes a deleted user.
     * @param {string} params.userKey - (Required) The immutable id of the user
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.undelete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/undelete', 'POST', params);

    /**
     * Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.update = (params) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PUT', params);

    /**
     * Watches for changes in users list.
     * @param {string} params.customFieldMask - Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     * @param {string} params.customer - Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param {string} params.domain - Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
     * @param {string} params.event - Events to watch for.
     * @param {integer} params.maxResults - Maximum number of results to return.
     * @param {string} params.orderBy - Column to use for sorting results
     * @param {string} params.pageToken - Token to specify next page in the list
     * @param {string} params.projection - What subset of fields to fetch for this user.
     * @param {string} params.query - Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
     * @param {string} params.showDeleted - If set to true, retrieves the list of deleted users. (Default: false)
     * @param {string} params.sortOrder - Whether to return results in ascending or descending order.
     * @param {string} params.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.watch = (params) => this._makeRequest('admin/directory/v1/users/watch', 'POST', params);

    /**
     * Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
     * @param {string} params.userKey - (Required) Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.signOut = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/signOut', 'POST', params);

    this.users.aliases = {};

    /**
     * Removes an alias.
     * @param {string} params.alias - (Required) The alias to be removed.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.aliases.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/{alias}', 'DELETE', params);

    /**
     * Adds an alias.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.aliases.insert = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'POST', params);

    /**
     * Lists all aliases for a user.
     * @param {string} params.event - Events to watch for.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.aliases.list = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'GET', params);

    /**
     * Watches for changes in users list.
     * @param {string} params.event - Events to watch for.
     * @param {string} params.userKey - (Required) Email or immutable ID of the user
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.aliases.watch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/watch', 'POST', params);

    this.users.photos = {};

    /**
     * Removes the user's photo.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.photos.delete = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'DELETE', params);

    /**
     * Retrieves the user's photo.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
    this.users.photos.get = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'GET', params);

    /**
     * Adds a photo for the user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.photos.update = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PUT', params);

    /**
     * Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.photos.patch = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PATCH', params);

    this.verificationCodes = {};

    /**
     * Generates new backup verification codes for the user.
     * @param {string} params.userKey - (Required) Email or immutable ID of the user
     * @return {object} The API response object.
     */
    this.verificationCodes.generate = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/generate', 'POST', params);

    /**
     * Invalidates the current backup verification codes for the user.
     * @param {string} params.userKey - (Required) Email or immutable ID of the user
     * @return {object} The API response object.
     */
    this.verificationCodes.invalidate = (params) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/invalidate', 'POST', params);

    /**
     * Returns the current set of valid backup verification codes for the specified user.
     * @param {string} params.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @return {object} The API response object.
     */
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
