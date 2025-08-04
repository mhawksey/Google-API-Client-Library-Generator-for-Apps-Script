
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chromemanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};

    this.customers.apps = {};

    /**
     * Generate summary of app installation requests.
     * @param {string} params.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.orderBy - Field used to order results. Supported fields: * request_count * latest_request_time
     * @param {string} params.orgUnitId - The ID of the organizational unit.
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.
     * @param {string} params.pageToken - Token to specify the page of the request to be returned.
     * @return {object} The API response object.
     */
    this.customers.apps.countChromeAppRequests = (params) => this._makeRequest('v1/{+customer}/apps:countChromeAppRequests', 'GET', params);

    /**
     * Get a list of devices that have requested to install an extension.
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} params.extensionId - Required. The extension for which we want to find requesting devices.
     * @param {string} params.orgUnitId - The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     * @param {string} params.pageToken - Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     * @return {object} The API response object.
     */
    this.customers.apps.fetchDevicesRequestingExtension = (params) => this._makeRequest('v1/{+customer}/apps:fetchDevicesRequestingExtension', 'GET', params);

    /**
     * Get a list of users that have requested to install an extension.
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} params.extensionId - Required. The extension for which we want to find the requesting users.
     * @param {string} params.orgUnitId - The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50.
     * @param {string} params.pageToken - Optional. Token to specify the page of the request to be returned. Token expires after 1 day.
     * @return {object} The API response object.
     */
    this.customers.apps.fetchUsersRequestingExtension = (params) => this._makeRequest('v1/{+customer}/apps:fetchUsersRequestingExtension', 'GET', params);

    this.customers.apps.chrome = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {string} params.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @return {object} The API response object.
     */
    this.customers.apps.chrome.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.apps.android = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {string} params.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @return {object} The API response object.
     */
    this.customers.apps.android.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.apps.web = {};

    /**
     * Get a specific app for a customer by its resource name.
     * @param {string} params.name - (Required) Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version.
     * @return {object} The API response object.
     */
    this.customers.apps.web.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.reports = {};

    /**
     * Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} params.maxAueDate - Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.
     * @param {string} params.minAueDate - Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.
     * @param {string} params.orgUnitId - Optional. The organizational unit ID, if omitted, will return data for all organizational units.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeDevicesReachingAutoExpirationDate = (params) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesReachingAutoExpirationDate', 'GET', params);

    /**
     * Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} params.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @param {string} params.readMask - Required. Mask of the fields that should be populated in the returned report.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeDevicesThatNeedAttention = (params) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesThatNeedAttention', 'GET', params);

    /**
     * Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer" prefixed with "customers/".
     * @param {string} params.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeBrowsersNeedingAttention = (params) => this._makeRequest('v1/{+customer}/reports:countChromeBrowsersNeedingAttention', 'GET', params);

    /**
     * Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
     * @param {string} params.customer - (Required) Required. The customer ID or "my_customer".
     * @param {string} params.orgUnitId - Optional. The ID of the organizational unit. If omitted, all data will be returned.
     * @param {string} params.readMask - Required. Mask of the fields that should be populated in the returned report.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeHardwareFleetDevices = (params) => this._makeRequest('v1/{+customer}/reports:countChromeHardwareFleetDevices', 'GET', params);

    /**
     * Generate report of app installations.
     * @param {string} params.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score
     * @param {string} params.orderBy - Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score
     * @param {string} params.orgUnitId - The ID of the organizational unit.
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} params.pageToken - Token to specify the page of the request to be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.countInstalledApps = (params) => this._makeRequest('v1/{+customer}/reports:countInstalledApps', 'GET', params);

    /**
     * Generate report of managed Chrome browser devices that have a specified app installed.
     * @param {string} params.appId - Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     * @param {string} params.appType - Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID.
     * @param {string} params.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     * @param {string} params.orderBy - Field used to order results. Supported order by fields: * machine * device_id
     * @param {string} params.orgUnitId - The ID of the organizational unit.
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} params.pageToken - Token to specify the page of the request to be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.findInstalledAppDevices = (params) => this._makeRequest('v1/{+customer}/reports:findInstalledAppDevices', 'GET', params);

    /**
     * Generate report of installed Chrome versions.
     * @param {string} params.customer - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
     * @param {string} params.orgUnitId - The ID of the organizational unit.
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} params.pageToken - Token to specify the page of the request to be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeVersions = (params) => this._makeRequest('v1/{+customer}/reports:countChromeVersions', 'GET', params);

    /**
     * Get a summary of printing done by each user.
     * @param {string} params.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     * @param {string} params.orderBy - Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} params.pageToken - Token to specify the page of the response to be returned.
     * @param {string} params.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted.
     * @return {object} The API response object.
     */
    this.customers.reports.countPrintJobsByUser = (params) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByUser', 'GET', params);

    /**
     * Get a summary of printing done by each printer.
     * @param {string} params.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
     * @param {string} params.orderBy - Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
     * @param {integer} params.pageSize - Maximum number of results to return. Maximum and default are 100.
     * @param {string} params.pageToken - Token to specify the page of the response to be returned.
     * @param {string} params.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.countPrintJobsByPrinter = (params) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByPrinter', 'GET', params);

    /**
     * Get a list of print jobs.
     * @param {string} params.customer - (Required) Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id
     * @param {string} params.orderBy - Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email
     * @param {integer} params.pageSize - The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50.
     * @param {string} params.pageToken - A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token.
     * @param {string} params.printerOrgUnitId - The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned.
     * @return {object} The API response object.
     */
    this.customers.reports.enumeratePrintJobs = (params) => this._makeRequest('v1/{+customer}/reports:enumeratePrintJobs', 'GET', params);

    /**
     * Get a count of Chrome crash events.
     * @param {string} params.customer - (Required) Customer ID.
     * @param {string} params.filter - Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`.
     * @param {string} params.orderBy - Field used to order results. Supported order by fields: * browser_version * count * date
     * @param {string} params.orgUnitId - If specified, only count the number of crash events of the devices in this organizational unit.
     * @return {object} The API response object.
     */
    this.customers.reports.countChromeCrashEvents = (params) => this._makeRequest('v1/{+customer}/reports:countChromeCrashEvents', 'GET', params);

    this.customers.telemetry = {};

    this.customers.telemetry.devices = {};

    /**
     * List all telemetry devices.
     * @param {string} params.filter - Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     * @param {integer} params.pageSize - Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} params.pageToken - Token to specify next page in the list.
     * @param {string} params.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.readMask - Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     * @return {object} The API response object.
     */
    this.customers.telemetry.devices.list = (params) => this._makeRequest('v1/{+parent}/telemetry/devices', 'GET', params);

    /**
     * Get telemetry device.
     * @param {string} params.name - (Required) Required. Name of the `TelemetryDevice` to return.
     * @param {string} params.readMask - Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report
     * @return {object} The API response object.
     */
    this.customers.telemetry.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.telemetry.events = {};

    /**
     * List telemetry events.
     * @param {string} params.filter - Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} params.pageToken - Optional. Token to specify next page in the list.
     * @param {string} params.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.readMask - Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event
     * @return {object} The API response object.
     */
    this.customers.telemetry.events.list = (params) => this._makeRequest('v1/{+parent}/telemetry/events', 'GET', params);

    this.customers.telemetry.users = {};

    /**
     * List all telemetry users.
     * @param {string} params.filter - Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
     * @param {integer} params.pageSize - Maximum number of results to return. Default value is 100. Maximum value is 1000.
     * @param {string} params.pageToken - Token to specify next page in the list.
     * @param {string} params.parent - (Required) Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     * @param {string} params.readMask - Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     * @return {object} The API response object.
     */
    this.customers.telemetry.users.list = (params) => this._makeRequest('v1/{+parent}/telemetry/users', 'GET', params);

    /**
     * Get telemetry user.
     * @param {string} params.name - (Required) Required. Name of the `TelemetryUser` to return.
     * @param {string} params.readMask - Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report
     * @return {object} The API response object.
     */
    this.customers.telemetry.users.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.telemetry.notificationConfigs = {};

    /**
     * List all telemetry notification configs.
     * @param {integer} params.pageSize - The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent which owns the notification configs.
     * @return {object} The API response object.
     */
    this.customers.telemetry.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'GET', params);

    /**
     * Create a telemetry notification config.
     * @param {string} params.parent - (Required) Required. The parent resource where this notification config will be created. Format: `customers/{customer}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.telemetry.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'POST', params);

    /**
     * Delete a telemetry notification config.
     * @param {string} params.name - (Required) Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}`
     * @return {object} The API response object.
     */
    this.customers.telemetry.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.customers.profiles = {};

    /**
     * Gets a Chrome browser profile with customer ID and profile permanent ID.
     * @param {string} params.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @return {object} The API response object.
     */
    this.customers.profiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Chrome browser profiles of a customer based on the given search and sorting criteria.
     * @param {string} params.filter - Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '>', '<=' and '>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id}', please note that only single OU ID matching is supported.
     * @param {string} params.orderBy - Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time.
     * @param {integer} params.pageSize - Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200.
     * @param {string} params.pageToken - Optional. The page token used to retrieve a specific page of the listing request.
     * @param {string} params.parent - (Required) Required. Format: customers/{customer_id}
     * @return {object} The API response object.
     */
    this.customers.profiles.list = (params) => this._makeRequest('v1/{+parent}/profiles', 'GET', params);

    /**
     * Deletes the data collected from a Chrome browser profile.
     * @param {string} params.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @return {object} The API response object.
     */
    this.customers.profiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.customers.profiles.commands = {};

    /**
     * Creates a Chrome browser profile remote command.
     * @param {string} params.parent - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.profiles.commands.create = (params) => this._makeRequest('v1/{+parent}/commands', 'POST', params);

    /**
     * Gets a Chrome browser profile remote command.
     * @param {string} params.name - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}/commands/{command_id}
     * @return {object} The API response object.
     */
    this.customers.profiles.commands.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists remote commands of a Chrome browser profile.
     * @param {integer} params.pageSize - Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100.
     * @param {string} params.pageToken - Optional. The page token used to retrieve a specific page of the listing request.
     * @param {string} params.parent - (Required) Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}
     * @return {object} The API response object.
     */
    this.customers.profiles.commands.list = (params) => this._makeRequest('v1/{+parent}/commands', 'GET', params);

    this.customers.thirdPartyProfileUsers = {};

    /**
     * Moves a third party chrome profile user to a destination OU. All profiles associated to that user will be moved to the destination OU.
     * @param {string} params.name - (Required) Required. Format: customers/{customer_id}/thirdPartyProfileUsers/{third_party_profile_user_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.thirdPartyProfileUsers.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);
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
