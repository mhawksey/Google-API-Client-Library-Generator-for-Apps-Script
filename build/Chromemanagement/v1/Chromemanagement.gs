
/**
 * Google Apps Script client library for the Chrome Management API
 * Documentation URL: https://developers.google.com/chrome/management/
 * @class
 */
class Chromemanagement {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chromemanagement.googleapis.com/';
    this._servicePath = '';


    this.customers = {};

    this.customers.apps = {};

    /**
     * Generate summary of app installation requests.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.orderBy - Field used to order results. Supported fields: * request_count * latest_request_time
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit.
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
     * @param {string} apiParams.pageToken - Token to specify the page of the request to be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.countChromeAppRequests = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:countChromeAppRequests', 'GET', apiParams, clientConfig);

    /**
     * Get a list of devices that have requested to install an extension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} apiParams.extensionId - Required. The extension for which we want to find requesting devices.
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     * @param {string} apiParams.pageToken - Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.fetchDevicesRequestingExtension = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:fetchDevicesRequestingExtension', 'GET', apiParams, clientConfig);

    /**
     * Get a list of users that have requested to install an extension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} apiParams.extensionId - Required. The extension for which we want to find the requesting users.
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     * @param {string} apiParams.pageToken - Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.fetchUsersRequestingExtension = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:fetchUsersRequestingExtension', 'GET', apiParams, clientConfig);

    this.customers.apps.chrome = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.chrome.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.apps.android = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.android.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.apps.web = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.apps.web.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.reports = {};

    /**
     * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} apiParams.maxAueDate - Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
     * @param {string} apiParams.minAueDate - Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
     * @param {string} apiParams.orgUnitId - Optional. The organizational unit ID, if omitted, will return data for all organizational units.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeDevicesReachingAutoExpirationDate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesReachingAutoExpirationDate', 'GET', apiParams, clientConfig);

    /**
     * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} apiParams.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @param {string} apiParams.readMask - Required. Mask of the fields that should be populated in the returned report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeDevicesThatNeedAttention = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesThatNeedAttention', 'GET', apiParams, clientConfig);

    /**
     * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} apiParams.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeBrowsersNeedingAttention = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeBrowsersNeedingAttention', 'GET', apiParams, clientConfig);

    /**
     * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer ID or "my_customer".
     * @param {string} apiParams.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @param {string} apiParams.readMask - Required. Mask of the fields that should be populated in the returned report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeHardwareFleetDevices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeHardwareFleetDevices', 'GET', apiParams, clientConfig);

    /**
     * Generate report of app installations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score
     * @param {string} apiParams.orderBy - Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit.
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} apiParams.pageToken - Token to specify the page of the request to be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countInstalledApps = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countInstalledApps', 'GET', apiParams, clientConfig);

    /**
     * Generate report of managed Chrome browser devices that have a specified app installed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appId - Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     * @param {string} apiParams.appType - Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID.
     * @param {string} apiParams.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     * @param {string} apiParams.orderBy - Field used to order results. Supported order by fields: * machine * device_id
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit.
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} apiParams.pageToken - Token to specify the page of the request to be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.findInstalledAppDevices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:findInstalledAppDevices', 'GET', apiParams, clientConfig);

    /**
     * Generate report of installed Chrome versions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     * @param {string} apiParams.orgUnitId - The ID of the organizational unit.
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} apiParams.pageToken - Token to specify the page of the request to be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeVersions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeVersions', 'GET', apiParams, clientConfig);

    /**
     * Get a summary of printing done by each user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     * @param {string} apiParams.orderBy - Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} apiParams.pageToken - Token to specify the page of the response to be returned.
     * @param {string} apiParams.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countPrintJobsByUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByUser', 'GET', apiParams, clientConfig);

    /**
     * Get a summary of printing done by each printer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     * @param {string} apiParams.orderBy - Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} apiParams.pageToken - Token to specify the page of the response to be returned.
     * @param {string} apiParams.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countPrintJobsByPrinter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByPrinter', 'GET', apiParams, clientConfig);

    /**
     * Get a list of print jobs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
     * @param {string} apiParams.orderBy - Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
     * @param {integer} apiParams.pageSize - The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
     * @param {string} apiParams.pageToken - A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
     * @param {string} apiParams.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.enumeratePrintJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:enumeratePrintJobs', 'GET', apiParams, clientConfig);

    /**
     * Get a count of Chrome crash events.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Customer ID.
     * @param {string} apiParams.filter - Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`.
     * @param {string} apiParams.orderBy - Field used to order results. Supported order by fields: * browser_version * count * date
     * @param {string} apiParams.orgUnitId - If specified, only count the number of crash events of the devices in this organizational unit.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.reports.countChromeCrashEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeCrashEvents', 'GET', apiParams, clientConfig);

    this.customers.telemetry = {};

    this.customers.telemetry.devices = {};

    /**
     * List all telemetry devices.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} apiParams.pageToken - Token to specify next page in the list.
     * @param {string} apiParams.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.readMask - Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/devices', 'GET', apiParams, clientConfig);

    /**
     * Get telemetry device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the `TelemetryDevice` to return.
     * @param {string} apiParams.readMask - Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.telemetry.events = {};

    /**
     * List telemetry events.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     * @param {integer} apiParams.pageSize - Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} apiParams.pageToken - Optional. Token to specify next page in the list.
     * @param {string} apiParams.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.readMask - Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/events', 'GET', apiParams, clientConfig);

    this.customers.telemetry.users = {};

    /**
     * List all telemetry users.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
     * @param {integer} apiParams.pageSize - Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} apiParams.pageToken - Token to specify next page in the list.
     * @param {string} apiParams.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} apiParams.readMask - Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/users', 'GET', apiParams, clientConfig);

    /**
     * Get telemetry user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the `TelemetryUser` to return.
     * @param {string} apiParams.readMask - Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.telemetry.notificationConfigs = {};

    /**
     * List all telemetry notification configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns the notification configs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * Create a telemetry notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this notification config will be created. Format: `customers/{customer}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * Delete a telemetry notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.telemetry.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.customers.profiles = {};

    /**
     * Gets a Chrome browser profile with customer ID and profile permanent ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists Chrome browser profiles of a customer based on the given search and sorting criteria.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '>', '<=' and '>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id}', please note that only single OU ID matching is supported.
     * @param {string} apiParams.orderBy - Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200.
     * @param {string} apiParams.pageToken - Optional. The page token used to retrieve a specific page of the listing request.
     * @param {string} apiParams.parent - (Required) Required. Format: customers/{customer_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/profiles', 'GET', apiParams, clientConfig);

    /**
     * Deletes the data collected from a Chrome browser profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.customers.profiles.commands = {};

    /**
     * Creates a Chrome browser profile remote command.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.commands.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/commands', 'POST', apiParams, clientConfig);

    /**
     * Gets a Chrome browser profile remote command.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}/commands/{command_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.commands.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists remote commands of a Chrome browser profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100.
     * @param {string} apiParams.pageToken - Optional. The page token used to retrieve a specific page of the listing request.
     * @param {string} apiParams.parent - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.profiles.commands.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/commands', 'GET', apiParams, clientConfig);

    this.customers.thirdPartyProfileUsers = {};

    /**
     * Moves a third party chrome profile user to a destination OU. All profiles associated to that user will be moved to the destination OU.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: customers/{customer_id}/thirdPartyProfileUsers/{third_party_profile_user_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.thirdPartyProfileUsers.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);
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
