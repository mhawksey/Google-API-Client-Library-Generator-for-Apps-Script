
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


    this.chromeosdevices = {};

    /**
     * Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.resourceId - (Required) The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.action = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a Chrome OS device's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method.
     * @param {string} apiParams.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of Chrome OS devices within an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {boolean} apiParams.includeChildOrgunits - Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
     * @param {integer} apiParams.maxResults - Maximum number of results to return. Value should not exceed 300.
     * @param {string} apiParams.orderBy - Device property to use for sorting results.
     * @param {string} apiParams.orgUnitPath - The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {string} apiParams.pageToken - The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.
     * @param {string} apiParams.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {string} apiParams.query - Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/list-query-operators
     * @param {string} apiParams.sortOrder - Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos', 'GET', apiParams, clientConfig);

    /**
     * Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable. ID of the Google Workspace account
     * @param {string} apiParams.orgUnitPath - (Required) Full path of the target organizational unit or its ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.moveDevicesToOu = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu', 'POST', apiParams, clientConfig);

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method.
     * @param {string} apiParams.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.deviceId - (Required) The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method.
     * @param {string} apiParams.projection - Determines whether the response contains the full list of properties or only a subset.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chromeosdevices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}', 'PUT', apiParams, clientConfig);

    this.customer = {};

    this.customer.devices = {};

    this.customer.devices.chromeos = {};

    /**
     * Issues a command for the device to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable. ID of the Google Workspace account.
     * @param {string} apiParams.deviceId - (Required) Immutable. ID of Chrome OS Device.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customer.devices.chromeos.issueCommand = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand', 'POST', apiParams, clientConfig);

    /**
     * Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customer.devices.chromeos.batchChangeStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus', 'POST', apiParams, clientConfig);

    this.customer.devices.chromeos.commands = {};

    /**
     * Gets command data a specific command issued to the device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.commandId - (Required) Immutable. ID of Chrome OS Device Command.
     * @param {string} apiParams.customerId - (Required) Immutable. ID of the Google Workspace account.
     * @param {string} apiParams.deviceId - (Required) Immutable. ID of Chrome OS Device.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customer.devices.chromeos.commands.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}', 'GET', apiParams, clientConfig);

    this.asps = {};

    /**
     * Deletes an ASP issued by a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.codeId - (Required) The unique ID of the ASP to be deleted.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.asps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets information about an ASP issued by a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.codeId - (Required) The unique ID of the ASP.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.asps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps/{codeId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the ASPs issued by a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.asps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/asps', 'GET', apiParams, clientConfig);

    this.channels = {};

    /**
     * Stops watching resources through this channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory_v1/channels/stop', 'POST', apiParams, clientConfig);

    this.customers = {};

    /**
     * Retrieves a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerKey - (Required) Id of the customer to be retrieved
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'GET', apiParams, clientConfig);

    /**
     * Updates a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerKey - (Required) Id of the customer to be updated
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerKey - (Required) Id of the customer to be updated
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customers/{customerKey}', 'PATCH', apiParams, clientConfig);

    this.customers.chrome = {};

    this.customers.chrome.printers = {};

    /**
     * Lists the supported printer models.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.
     * @param {integer} apiParams.pageSize - The maximum number of objects to return. The service may return fewer than this value.
     * @param {string} apiParams.pageToken - A page token, received from a previous call.
     * @param {string} apiParams.parent - (Required) Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.listPrinterModels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:listPrinterModels', 'GET', apiParams, clientConfig);

    /**
     * List printers configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Search query. Search syntax is shared between this api and Admin Console printers pages.
     * @param {string} apiParams.orderBy - The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.
     * @param {string} apiParams.orgUnitId - Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.
     * @param {integer} apiParams.pageSize - The maximum number of objects to return. The service may return fewer than this value.
     * @param {string} apiParams.pageToken - A page token, received from a previous call.
     * @param {string} apiParams.parent - (Required) Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'GET', apiParams, clientConfig);

    /**
     * Returns a `Printer` resource (printer's config).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printer_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a printer under given Organization Unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers', 'POST', apiParams, clientConfig);

    /**
     * Creates printers under given Organization Unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.batchCreatePrinters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters', 'POST', apiParams, clientConfig);

    /**
     * Updates a `Printer` resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clearMask - The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)
     * @param {string} apiParams.updateMask - The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a `Printer`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printer_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes printers in batch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the customer. Format: customers/{customer_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printers.batchDeletePrinters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters', 'POST', apiParams, clientConfig);

    this.customers.chrome.printServers = {};

    /**
     * Lists print server configurations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.
     * @param {string} apiParams.orderBy - Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order.
     * @param {string} apiParams.orgUnitId - If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.
     * @param {integer} apiParams.pageSize - The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.
     * @param {string} apiParams.pageToken - A generated token to paginate results (the `next_page_token` from a previous call).
     * @param {string} apiParams.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'GET', apiParams, clientConfig);

    /**
     * Returns a print server's configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a print server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers', 'POST', apiParams, clientConfig);

    /**
     * Creates multiple print servers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.batchCreatePrintServers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchCreatePrintServers', 'POST', apiParams, clientConfig);

    /**
     * Updates a print server's configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`
     * @param {string} apiParams.updateMask - The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a print server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Deletes multiple print servers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.chrome.printServers.batchDeletePrintServers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/{+parent}/chrome/printServers:batchDeletePrintServers', 'POST', apiParams, clientConfig);

    this.domainAliases = {};

    /**
     * Deletes a domain Alias of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.domainAliasName - (Required) Name of domain alias to be retrieved.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domainAliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a domain alias of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.domainAliasName - (Required) Name of domain alias to be retrieved.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domainAliases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a domain alias of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domainAliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'POST', apiParams, clientConfig);

    /**
     * Lists the domain aliases of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.parentDomainName - Name of the parent domain for which domain aliases are to be fetched.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domainAliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domainaliases', 'GET', apiParams, clientConfig);

    this.domains = {};

    /**
     * Deletes a domain of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.domainName - (Required) Name of domain to be deleted
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a domain of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.domainName - (Required) Name of domain to be retrieved
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains/{domainName}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a domain of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'POST', apiParams, clientConfig);

    /**
     * Lists the domains of the customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/domains', 'GET', apiParams, clientConfig);

    this.groups = {};

    /**
     * Deletes a group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a group's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'GET', apiParams, clientConfig);

    /**
     * Creates a group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves all groups of a domain or of a user given a userKey (paginated).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.domain - The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.
     * @param {integer} apiParams.maxResults - Maximum number of results to return. Max allowed value is 200.
     * @param {string} apiParams.orderBy - Column to use for sorting results
     * @param {string} apiParams.pageToken - Token to specify next page in the list
     * @param {string} apiParams.query - Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/workspace/admin/directory/v1/guides/search-groups
     * @param {string} apiParams.sortOrder - Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param {string} apiParams.userKey - Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object. Cannot be used with the `customer` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups', 'GET', apiParams, clientConfig);

    /**
     * Updates a group's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PUT', apiParams, clientConfig);

    /**
     * Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}', 'PATCH', apiParams, clientConfig);

    this.groups.aliases = {};

    /**
     * Removes an alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.alias - (Required) The alias to be removed
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases/{alias}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds an alias for the group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.aliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'POST', apiParams, clientConfig);

    /**
     * Lists all aliases for a group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.groups.aliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/aliases', 'GET', apiParams, clientConfig);

    this.members = {};

    /**
     * Removes a member from a group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} apiParams.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a group member's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} apiParams.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'GET', apiParams, clientConfig);

    /**
     * Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} apiParams.memberKey - (Required) Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.hasMember = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}', 'GET', apiParams, clientConfig);

    /**
     * Adds a user to the specified group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {boolean} apiParams.includeDerivedMembership - Whether to list indirect memberships. Default: false.
     * @param {integer} apiParams.maxResults - Maximum number of results to return. Max allowed value is 200.
     * @param {string} apiParams.pageToken - Token to specify next page in the list.
     * @param {string} apiParams.roles - The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members', 'GET', apiParams, clientConfig);

    /**
     * Updates the membership of a user in the specified group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} apiParams.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PUT', apiParams, clientConfig);

    /**
     * Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.groupKey - (Required) Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     * @param {string} apiParams.memberKey - (Required) Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/groups/{groupKey}/members/{memberKey}', 'PATCH', apiParams, clientConfig);

    this.mobiledevices = {};

    /**
     * Takes an action that affects a mobile device. For example, remotely wiping a device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobiledevices.action = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action', 'POST', apiParams, clientConfig);

    /**
     * Removes a mobile device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobiledevices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a mobile device's properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields.
     * @param {string} apiParams.resourceId - (Required) The unique ID the API service uses to identify the mobile device.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobiledevices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {integer} apiParams.maxResults - Maximum number of results to return. Max allowed value is 100.
     * @param {string} apiParams.orderBy - Device property to use for sorting results.
     * @param {string} apiParams.pageToken - Token to specify next page in the list
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields.
     * @param {string} apiParams.query - Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/search-operators
     * @param {string} apiParams.sortOrder - Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobiledevices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/devices/mobile', 'GET', apiParams, clientConfig);

    this.orgunits = {};

    /**
     * Removes an organizational unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves an organizational unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'GET', apiParams, clientConfig);

    /**
     * Adds an organizational unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of all organizational units for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.orgUnitPath - The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.
     * @param {string} apiParams.type - Whether to return all sub-organizations or just immediate children.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits', 'GET', apiParams, clientConfig);

    /**
     * Updates an organizational unit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PUT', apiParams, clientConfig);

    /**
     * Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users).
     * @param {string} apiParams.orgUnitPath - (Required) The full path of the organizational unit (minus the leading `/`) or its unique ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orgunits.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}', 'PATCH', apiParams, clientConfig);

    this.privileges = {};

    /**
     * Retrieves a paginated list of all privileges for a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.privileges.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/ALL/privileges', 'GET', apiParams, clientConfig);

    this.roleAssignments = {};

    /**
     * Deletes a role assignment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.roleAssignmentId - (Required) Immutable ID of the role assignment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roleAssignments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a role assignment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.roleAssignmentId - (Required) Immutable ID of the role assignment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roleAssignments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a role assignment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roleAssignments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of all roleAssignments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {boolean} apiParams.includeIndirectRoleAssignments - When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Token to specify the next page in the list.
     * @param {string} apiParams.roleId - Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     * @param {string} apiParams.userKey - The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roleAssignments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roleassignments', 'GET', apiParams, clientConfig);

    this.resources = {};

    this.resources.buildings = {};

    /**
     * Deletes a building.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.buildingId - (Required) The id of the building to delete.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a building.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.buildingId - (Required) The unique ID of the building to retrieve.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a building.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of buildings for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Token to specify the next page in the list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings', 'GET', apiParams, clientConfig);

    /**
     * Updates a building.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.buildingId - (Required) The id of the building to update.
     * @param {string} apiParams.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a building.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.buildingId - (Required) The id of the building to update.
     * @param {string} apiParams.coordinatesSource - Source from which Building.coordinates are derived.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.buildings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}', 'PATCH', apiParams, clientConfig);

    this.resources.calendars = {};

    /**
     * Deletes a calendar resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarResourceId - (Required) The unique ID of the calendar resource to delete.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a calendar resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarResourceId - (Required) The unique ID of the calendar resource to retrieve.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a calendar resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of calendar resources for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.orderBy - Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.
     * @param {string} apiParams.pageToken - Token to specify the next page in the list.
     * @param {string} apiParams.query - String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars', 'GET', apiParams, clientConfig);

    /**
     * Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarResourceId - (Required) The unique ID of the calendar resource to update.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a calendar resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarResourceId - (Required) The unique ID of the calendar resource to update.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.calendars.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}', 'PATCH', apiParams, clientConfig);

    this.resources.features = {};

    /**
     * Deletes a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} apiParams.featureKey - (Required) The unique ID of the feature to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} apiParams.featureKey - (Required) The unique ID of the feature to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of features for an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Token to specify the next page in the list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features', 'GET', apiParams, clientConfig);

    /**
     * Renames a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} apiParams.oldName - (Required) The unique ID of the feature to rename.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename', 'POST', apiParams, clientConfig);

    /**
     * Updates a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} apiParams.featureKey - (Required) The unique ID of the feature to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     * @param {string} apiParams.featureKey - (Required) The unique ID of the feature to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.resources.features.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/resources/features/{featureKey}', 'PATCH', apiParams, clientConfig);

    this.roles = {};

    /**
     * Deletes a role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.roleId - (Required) Immutable ID of the role.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.roleId - (Required) Immutable ID of the role.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of all the roles in a domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Token to specify the next page in the list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles', 'GET', apiParams, clientConfig);

    /**
     * Updates a role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.roleId - (Required) Immutable ID of the role.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PUT', apiParams, clientConfig);

    /**
     * Patches a role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.roleId - (Required) Immutable ID of the role.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customer}/roles/{roleId}', 'PATCH', apiParams, clientConfig);

    this.schemas = {};

    /**
     * Deletes a schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'GET', apiParams, clientConfig);

    /**
     * Creates a schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'POST', apiParams, clientConfig);

    /**
     * Retrieves all schemas for a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas', 'GET', apiParams, clientConfig);

    /**
     * Patches a schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Immutable ID of the Google Workspace account.
     * @param {string} apiParams.schemaKey - (Required) Name or immutable ID of the schema.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.schemas.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/customer/{customerId}/schemas/{schemaKey}', 'PUT', apiParams, clientConfig);

    this.tokens = {};

    /**
     * Deletes all access tokens issued by a user for an application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientId - (Required) The Client ID of the application the token is issued to.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets information about an access token issued by a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clientId - (Required) The Client ID of the application the token is issued to.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens/{clientId}', 'GET', apiParams, clientConfig);

    /**
     * Returns the set of tokens specified user has issued to 3rd party applications.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/tokens', 'GET', apiParams, clientConfig);

    this.twoStepVerification = {};

    /**
     * Turns off 2-Step Verification for user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.twoStepVerification.turnOff = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/twoStepVerification/turnOff', 'POST', apiParams, clientConfig);

    this.users = {};

    /**
     * Deletes a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customFieldMask - A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     * @param {string} apiParams.projection - What subset of fields to fetch for this user.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {string} apiParams.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'GET', apiParams, clientConfig);

    /**
     * Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.resolveConflictAccount - Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a paginated list of either deleted users or all users in a domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customFieldMask - A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     * @param {string} apiParams.customer - The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all users for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     * @param {string} apiParams.domain - The domain name. Use this field to get users from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.
     * @param {string} apiParams.event - Event on which subscription is intended (if subscribing)
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.orderBy - Property to use for sorting results.
     * @param {string} apiParams.pageToken - Token to specify next page in the list. The page token is only valid for three days.
     * @param {string} apiParams.projection - What subset of fields to fetch for this user.
     * @param {string} apiParams.query - Query string for searching user fields. For more information on constructing user queries, see [Search for Users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users).
     * @param {string} apiParams.showDeleted - If set to `true`, retrieves the list of deleted users. (Default: `false`)
     * @param {string} apiParams.sortOrder - Whether to return results in ascending or descending order, ignoring case.
     * @param {string} apiParams.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users', 'GET', apiParams, clientConfig);

    /**
     * Makes a user a super administrator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.makeAdmin = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/makeAdmin', 'POST', apiParams, clientConfig);

    /**
     * Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PATCH', apiParams, clientConfig);

    /**
     * Undeletes a deleted user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) The immutable id of the user
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/undelete', 'POST', apiParams, clientConfig);

    /**
     * Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}', 'PUT', apiParams, clientConfig);

    /**
     * Watches for changes in users list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customFieldMask - Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     * @param {string} apiParams.customer - Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param {string} apiParams.domain - Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
     * @param {string} apiParams.event - Events to watch for.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.orderBy - Column to use for sorting results
     * @param {string} apiParams.pageToken - Token to specify next page in the list
     * @param {string} apiParams.projection - What subset of fields to fetch for this user.
     * @param {string} apiParams.query - Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/workspace/admin/directory/v1/guides/search-users
     * @param {string} apiParams.showDeleted - If set to true, retrieves the list of deleted users. (Default: false)
     * @param {string} apiParams.sortOrder - Whether to return results in ascending or descending order.
     * @param {string} apiParams.viewType - Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/watch', 'POST', apiParams, clientConfig);

    /**
     * Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.signOut = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/signOut', 'POST', apiParams, clientConfig);

    this.users.aliases = {};

    /**
     * Removes an alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.alias - (Required) The alias to be removed.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/{alias}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds an alias.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.aliases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'POST', apiParams, clientConfig);

    /**
     * Lists all aliases for a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.event - Events to watch for.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.aliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases', 'GET', apiParams, clientConfig);

    /**
     * Watches for changes in users list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.event - Events to watch for.
     * @param {string} apiParams.userKey - (Required) Email or immutable ID of the user
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.aliases.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/aliases/watch', 'POST', apiParams, clientConfig);

    this.users.photos = {};

    /**
     * Removes the user's photo.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.photos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves the user's photo.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.photos.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'GET', apiParams, clientConfig);

    /**
     * Adds a photo for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.photos.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PUT', apiParams, clientConfig);

    /**
     * Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.photos.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/photos/thumbnail', 'PATCH', apiParams, clientConfig);

    this.verificationCodes = {};

    /**
     * Generates new backup verification codes for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Email or immutable ID of the user
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.verificationCodes.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/generate', 'POST', apiParams, clientConfig);

    /**
     * Invalidates the current backup verification codes for the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Email or immutable ID of the user
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.verificationCodes.invalidate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes/invalidate', 'POST', apiParams, clientConfig);

    /**
     * Returns the current set of valid backup verification codes for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userKey - (Required) Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.verificationCodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('admin/directory/v1/users/{userKey}/verificationCodes', 'GET', apiParams, clientConfig);
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
