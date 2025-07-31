# Chrome Management API - Apps Script Client Library

Auto-generated client library for using the **Chrome Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:23:50 GMT
- **Last Modified:** Thu, 31 Jul 2025 23:23:50 GMT
- **Created:** Sun, 20 Jul 2025 16:15:10 GMT



---

## API Reference

### `customers`

### `customers.apps`

#### `customers.apps.countChromeAppRequests()`

Generate summary of app installation requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.orderBy` | `string` | No | Field used to order results. Supported fields: * request_count * latest_request_time |

#### `customers.apps.fetchDevicesRequestingExtension()`

Get a list of devices that have requested to install an extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned. |
| `params.extensionId` | `string` | No | Required. The extension for which we want to find requesting devices. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. Token expires after 1 day. |

#### `customers.apps.fetchUsersRequestingExtension()`

Get a list of users that have requested to install an extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned. |
| `params.extensionId` | `string` | No | Required. The extension for which we want to find the requesting users. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. Token expires after 1 day. |

### `customers.apps.chrome`

#### `customers.apps.chrome.get()`

Get a specific app for a customer by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version. |

### `customers.apps.android`

#### `customers.apps.android.get()`

Get a specific app for a customer by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version. |

### `customers.apps.web`

#### `customers.apps.web.get()`

Get a specific app for a customer by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version. |

### `customers.reports`

#### `customers.reports.countChromeDevicesReachingAutoExpirationDate()`

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | Optional. The organizational unit ID, if omitted, will return data for all organizational units. |
| `params.minAueDate` | `string` | No | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date. |
| `params.maxAueDate` | `string` | No | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date. |

#### `customers.reports.countChromeDevicesThatNeedAttention()`

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |
| `params.readMask` | `string` | No | Required. Mask of the fields that should be populated in the returned report. |

#### `customers.reports.countChromeBrowsersNeedingAttention()`

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |

#### `customers.reports.countChromeHardwareFleetDevices()`

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer". |
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |
| `params.readMask` | `string` | No | Required. Mask of the fields that should be populated in the returned report. |

#### `customers.reports.countInstalledApps()`

Generate report of app installations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score |

#### `customers.reports.findInstalledAppDevices()`

Generate report of managed Chrome browser devices that have a specified app installed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.appId` | `string` | No | Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). |
| `params.appType` | `string` | No | Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * machine * device_id |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |

#### `customers.reports.countChromeVersions()`

Generate report of installed Chrome versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |

#### `customers.reports.countPrintJobsByUser()`

Get a summary of printing done by each user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the response to be returned. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time |
| `params.orderBy` | `string` | No | Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count |

#### `customers.reports.countPrintJobsByPrinter()`

Get a summary of printing done by each printer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the response to be returned. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time |
| `params.orderBy` | `string` | No | Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count |

#### `customers.reports.enumeratePrintJobs()`

Get a list of print jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned. |
| `params.pageSize` | `integer` | No | The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50. |
| `params.pageToken` | `string` | No | A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id |
| `params.orderBy` | `string` | No | Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email |

#### `customers.reports.countChromeCrashEvents()`

Get a count of Chrome crash events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Customer ID. |
| `params.orgUnitId` | `string` | No | If specified, only count the number of crash events of the devices in this organizational unit. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`. |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * browser_version * count * date |

### `customers.telemetry`

### `customers.telemetry.devices`

#### `customers.telemetry.devices.list()`

List all telemetry devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823". |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report  |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. |

#### `customers.telemetry.devices.get()`

Get telemetry device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the `TelemetryDevice` to return. |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report  |

### `customers.telemetry.events`

#### `customers.telemetry.events.list()`

List telemetry events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823". |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event  |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token to specify next page in the list. |

### `customers.telemetry.users`

#### `customers.telemetry.users.list()`

List all telemetry users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id  |
| `params.readMask` | `string` | No | Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report  |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. |

#### `customers.telemetry.users.get()`

Get telemetry user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the `TelemetryUser` to return. |
| `params.readMask` | `string` | No | Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report  |

### `customers.telemetry.notificationConfigs`

#### `customers.telemetry.notificationConfigs.list()`

List all telemetry notification configs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent which owns the notification configs. |
| `params.pageSize` | `integer` | No | The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token. |

#### `customers.telemetry.notificationConfigs.create()`

Create a telemetry notification config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this notification config will be created. Format: `customers/{customer}` |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.telemetry.notificationConfigs.delete()`

Delete a telemetry notification config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}` |

### `customers.profiles`

#### `customers.profiles.get()`

Gets a Chrome browser profile with customer ID and profile permanent ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |

#### `customers.profiles.list()`

Lists Chrome browser profiles of a customer based on the given search and sorting criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200. |
| `params.pageToken` | `string` | No | Optional. The page token used to retrieve a specific page of the listing request. |
| `params.filter` | `string` | No | Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '>', '<=' and '>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id}', please note that only single OU ID matching is supported. |
| `params.orderBy` | `string` | No | Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time. |

#### `customers.profiles.delete()`

Deletes the data collected from a Chrome browser profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |

### `customers.profiles.commands`

#### `customers.profiles.commands.create()`

Creates a Chrome browser profile remote command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.profiles.commands.get()`

Gets a Chrome browser profile remote command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}/commands/{command_id} |

#### `customers.profiles.commands.list()`

Lists remote commands of a Chrome browser profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100. |
| `params.pageToken` | `string` | No | Optional. The page token used to retrieve a specific page of the listing request. |

### `customers.thirdPartyProfileUsers`

#### `customers.thirdPartyProfileUsers.move()`

Moves a third party chrome profile user to a destination OU. All profiles associated to that user will be moved to the destination OU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/thirdPartyProfileUsers/{third_party_profile_user_id} |
| `params.resource` | `object` | Yes | The request body. |