# Chrome Management API - Apps Script Client Library

Auto-generated client library for using the **Chrome Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:38:27 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:38:27 GMT
- **Created:** Sun, 20 Jul 2025 16:15:10 GMT



---

## API Reference

### `customers`

#### `customers.getSubscriptionInfo()`

Gets the aggregated subscription and license information for a given customer as a singleton resource. Note: Because the data is snapshotted for ChromeOS devices, the exact numbers can be delayed by up to 10 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the customer subscription info to retrieve. Format: customers/{customer}/subscriptionInfo |

### `customers.connectorConfigs`

#### `customers.connectorConfigs.patch()`

Updates a connector config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Format: customers/{customer}/connectorConfigs/{connector_config} |
| `params.updateMask` | `string` | No | Optional. The update mask that can be used to specify which fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.connectorConfigs.list()`

Lists connector configs of a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer} |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConnectorConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectorConfigs` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of connector configs to return. The default page size is 50 if page_size is unspecified, and the maximum page size allowed is 100. Values above 100 will be capped at 100. |

#### `customers.connectorConfigs.get()`

Gets a connector config with customer ID and config ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer}/connectorConfigs/{connector_config} |

#### `customers.connectorConfigs.create()`

Creates a connector config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer} |
| `params.connectorConfigId` | `string` | No | Optional. ID to use for the connector config, which becomes the final component of the connector config's resource name. If provided, the ID must be 1-36 characters long, and contain only lowercase letters, digits, and hyphens. It must start with a letter, and end with a letter or number. If not provided, the connector config will be assigned a random UUID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.connectorConfigs.delete()`

Deletes a connector config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer}/connectorConfigs/{connector_config} |

### `customers.apps`

#### `customers.apps.countChromeAppRequests()`

Generate summary of app installation requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.orderBy` | `string` | No | Field used to order results. Supported fields: * request_count * latest_request_time |
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |

#### `customers.apps.fetchDevicesRequestingExtension()`

Get a list of devices that have requested to install an extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extensionId` | `string` | No | Required. The extension for which we want to find requesting devices. |
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. Token expires after 1 day. |

#### `customers.apps.fetchUsersRequestingExtension()`

Get a list of users that have requested to install an extension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. Token expires after 1 day. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 50. Any page size larger than 50 will be coerced to 50. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. Only consider devices that directly belong to this org unit, i.e. sub-orgunits are not counted. If omitted, all data will be returned. |
| `params.extensionId` | `string` | No | Required. The extension for which we want to find the requesting users. |
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |

### `customers.apps.web`

#### `customers.apps.web.get()`

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

### `customers.apps.chrome`

#### `customers.apps.chrome.get()`

Get a specific app for a customer by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The app for which details are being queried. Examples: "customers/my_customer/apps/chrome/gmbmikajjgmnabiglmofipeabaddhgne@2.1.2" for the Save to Google Drive Chrome extension version 2.1.2, "customers/my_customer/apps/android/com.google.android.apps.docs" for the Google Drive Android app's latest version. |

### `customers.thirdPartyProfileUsers`

#### `customers.thirdPartyProfileUsers.move()`

Moves a third party chrome profile user to a destination OU. All profiles associated to that user will be moved to the destination OU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/thirdPartyProfileUsers/{third_party_profile_user_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.enrollmentTokens`

#### `customers.enrollmentTokens.create()`

Creates a new enrollment token for a browser device. Creation fails if there is already an active token for this customer under the same org unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this enrollment token will be created. Format: customers/{customer} |
| `params.enrollmentTokenId` | `string` | No | Optional. The ID to use for the enrollment token, which will become the final component of the enrollment token's resource name. This value must be local-unique under the customer and is optional. If not provided, it will be auto-generated. If provided, it must be 1-63 characters long and match the regular expression `[a-zA-Z0-9._-]+`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.enrollmentTokens.list()`

Lists all browser device enrollment tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this enrollment token will be created. Format: customers/{customer} |
| `params.filter` | `string` | No | Optional. Filter to apply to list results. The following fields can be used in the filter: * `device_type` (currently only `"CHROME_BROWSER"` is supported) * `token_state` (supported values: `"ACTIVE"`, `"EXPIRED"`, `"REVOKED"`) * `org_unit_path` The full path of the org unit, such as `/Montreal/Sales`. * `org_unit_id` The obfuscated id of the org unit, not the full path. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Optional. Token to specify next page in the list. |

#### `customers.enrollmentTokens.get()`

Gets a browser device enrollment token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enrollment token to retrieve. Format: customers/{customer}/enrollmentTokens/{token_permanent_id} |

#### `customers.enrollmentTokens.revoke()`

Revokes a browser device enrollment token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enrollment token to revoke. Format: customers/{customer}/enrollmentTokens/{token_permanent_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.certificateProvisioningProcesses`

#### `customers.certificateProvisioningProcesses.get()`

Retrieves a certificate provisioning process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer}/certificateProvisioningProcesses/{certificate_provisioning_process}` with `{customer}` being the obfuscated customer id and `{certificate_provisioning_process}` being the certificate provisioning process id. |

#### `customers.certificateProvisioningProcesses.setFailure()`

Marks a certificate provisioning process as failed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer}/certificateProvisioningProcesses/{certificate_provisioning_process}` with `{customer}` being the obfuscated customer id and `{certificate_provisioning_process}` being the certificate provisioning process id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.certificateProvisioningProcesses.claim()`

Claims a certificate provisioning process. For each certificate provisioning process, this operation can succeed only for one `caller_instance_id`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `CertificateProvisioningProcess` to claim. The name pattern is given as `customers/{customer}/certificateProvisioningProcesses/{certificate_provisioning_process}` with `{customer}` being the obfuscated customer id and `{certificate_provisioning_process}` being the certificate provisioning process id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.certificateProvisioningProcesses.signData()`

Requests the client that initiated a certificate provisioning process to sign data. This should only be called after `ClaimCertificateProvisioningProcess` has been successfully executed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer}/certificateProvisioningProcesses/{certificate_provisioning_process}` with `{customer}` being the obfuscated customer id and `{certificate_provisioning_process}` being the certificate provisioning process id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.certificateProvisioningProcesses.uploadCertificate()`

Uploads a successfully issued certificate for a certificate provisioning process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `CertificateProvisioningProcess` to return. The name pattern is given as `customers/{customer}/certificateProvisioningProcesses/{certificate_provisioning_process}` with `{customer}` being the obfuscated customer id and `{certificate_provisioning_process}` being the certificate provisioning process id. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.certificateProvisioningProcesses.operations`

#### `customers.certificateProvisioningProcesses.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `customers.profiles`

#### `customers.profiles.list()`

Lists Chrome browser profiles of a customer based on the given search and sorting criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The page token used to retrieve a specific page of the listing request. |
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of profiles to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 200. |
| `params.filter` | `string` | No | Optional. The filter used to filter profiles. The following fields can be used in the filter: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version - ouId Any of the above fields can be used to specify a filter, and filtering by multiple fields is supported with AND operator. String type fields and enum type fields support '=' and '!=' operators. The integer type and the timestamp type fields support '=', '!=', '<', '>', '<=' and '>=' operators. Timestamps expect an RFC-3339 formatted string (e.g. 2012-04-21T11:30:00-04:00). Wildcard '*' can be used with a string type field filter. In addition, string literal filtering is also supported, for example, 'ABC' as a filter maps to a filter that checks if any of the filterable string type fields contains 'ABC'. Organization unit number can be used as a filtering criteria here by specifying 'ouId = ${your_org_unit_id}', please note that only single OU ID matching is supported. |
| `params.orderBy` | `string` | No | Optional. The fields used to specify the ordering of the results. The supported fields are: - profile_id - display_name - user_email - last_activity_time - last_policy_sync_time - last_status_report_time - first_enrollment_time - os_platform_type - os_version - browser_version - browser_channel - policy_count - extension_count - identity_provider - affiliation_state - os_platform_version By default, sorting is in ascending order, to specify descending order for a field, a suffix " desc" should be added to the field name. The default ordering is the descending order of last_status_report_time. |

#### `customers.profiles.delete()`

Deletes the data collected from a Chrome browser profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |

#### `customers.profiles.get()`

Gets a Chrome browser profile with customer ID and profile permanent ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |

### `customers.profiles.commands`

#### `customers.profiles.commands.create()`

Creates a Chrome browser profile remote command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.profiles.commands.get()`

Gets a Chrome browser profile remote command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id}/commands/{command_id} |

#### `customers.profiles.commands.list()`

Lists remote commands of a Chrome browser profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The page token used to retrieve a specific page of the listing request. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of commands to return. The default page size is 100 if page_size is unspecified, and the maximum page size allowed is 100. |
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id}/profiles/{profile_permanent_id} |

### `customers.telemetry`

### `customers.telemetry.notificationConfigs`

#### `customers.telemetry.notificationConfigs.list()`

List all telemetry notification configs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTelemetryNotificationConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTelemetryNotificationConfigs` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The maximum number of notification configs to return. The service may return fewer than this value. If unspecified, at most 100 notification configs will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.parent` | `string` | Yes | Required. The parent which owns the notification configs. |

#### `customers.telemetry.notificationConfigs.create()`

Create a telemetry notification config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this notification config will be created. Format: `customers/{customer}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.telemetry.notificationConfigs.delete()`

Delete a telemetry notification config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the notification config to delete. Format: `customers/{customer}/telemetry/notificationConfigs/{notification_config}` |

### `customers.telemetry.devices`

#### `customers.telemetry.devices.list()`

List all telemetry devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token to specify next page in the list. |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report  |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter. Requests that don't specify a "reports_timestamp" value will default to returning only recent reports. Specify "reports_timestamp>=0" to get all report data. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823". |

#### `customers.telemetry.devices.get()`

Get telemetry device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the `TelemetryDevice` to return. |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - device_id - serial_number - cpu_info - cpu_status_report - memory_info - memory_status_report - network_info - network_diagnostics_report - network_status_report - os_update_status - graphics_info - graphics_status_report - battery_info - battery_status_report - storage_info - storage_status_report - thunderbolt_info - audio_status_report - boot_performance_report - heartbeat_status_report - network_bandwidth_report - peripherals_report - kiosk_app_status_report - app_report - runtime_counters_report  |

### `customers.telemetry.users`

#### `customers.telemetry.users.list()`

List all telemetry users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id  |
| `params.readMask` | `string` | No | Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report  |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. |

#### `customers.telemetry.users.get()`

Get telemetry user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readMask` | `string` | No | Read mask to specify which fields to return. Supported read_mask paths are: - name - org_unit_id - user_id - user_email - user_device.device_id - user_device.audio_status_report - user_device.device_activity_report - user_device.network_bandwidth_report - user_device.peripherals_report - user_device.app_report  |
| `params.name` | `string` | Yes | Required. Name of the `TelemetryUser` to return. |

### `customers.telemetry.events`

#### `customers.telemetry.events.list()`

List telemetry events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.readMask` | `string` | No | Required. Read mask to specify which fields to return. Although currently required, this field will become optional, while the filter parameter with an event type will be come required. Supported read_mask paths are: - device - user - audio_severe_underrun_event - usb_peripherals_event - https_latency_change_event - network_state_change_event - wifi_signal_strength_event - vpn_connection_state_change_event - app_install_event - app_uninstall_event - app_launch_event - os_crash_event - external_displays_event  |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. Token to specify next page in the list. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter. Although this parameter is currently optional, this parameter will be required- please specify at least 1 event type. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823". |

### `customers.enterprise`

### `customers.enterprise.securityInsights`

#### `customers.enterprise.securityInsights.disable()`

Disables insights for the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer to disable insights for. Format: customers/{customer} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.enterprise.securityInsights.queryUrlVisitsBreakdowns()`

Returns summaries of URL visits for a given metric and breakdown dimension. Requires a Chrome Enterprise Premium subscription. If the customer does not have this subscription, query results will be empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.metric` | `string` | No | Optional. The metric to return the breakdowns for. Defaults to URL_VISITS_METRIC_TOTAL_SUSPICIOUS_URL_VISITS. |
| `params.breakdown` | `string` | No | Optional. The dimension to break down the URL visits by. Defaults to USER. |
| `params.fixedTimeRange` | `string` | No | Optional. The fixed time range to return the breakdowns for. Defaults to FIXED_TIME_RANGE_FOUR_WEEKS. Fixed time ranges are used to allow for precomputation and optimize response times. |
| `params.filter` | `string` | No | Optional. The filter to apply to the request. For syntax, see AIP-160. Data is not available for events older than 180 days or more recent than 48 hours ago. If `event_time` is not specified, results will end 48 hours ago. Supported fields for filtering: - `user` - `event_domain` - `event_time` Filtering by `user` or `event_domain` requires the `breakdown` dimension to be set to the corresponding value (e.g., you must set `breakdown = USER` to filter by `user`). Supported operators: - `=` for `user` and `event_domain`. - `<=` for `event_time`. Supported conjunctions: - `AND` Example: `user = "testuser" AND event_time <= "2024-01-02T00:00:00Z"` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of breakdowns to return. The service may return fewer than this value. If unspecified, at most 50 breakdowns will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `QueryUrlVisitsBreakdowns` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryUrlVisitsBreakdowns` must match the call that provided the page token. |
| `params.customer` | `string` | Yes | Required. The customer ID in the format "customers/{customer_id}". |

#### `customers.enterprise.securityInsights.enable()`

Enables insights for the customer and sets up required chrome connectors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer to enable insights for. Format: customers/{customer} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.enterprise.securityInsights.queryContentTransfers()`

Returns a high-level summary of content transfers for a given customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID in the format "customers/{customer_id}". |
| `params.filter` | `string` | No | Optional. The filter to apply to the request. For syntax, see AIP-160. Data is not available for events older than 180 days, and may be unavailable or inaccurate for time ranges less than 4 hours. If `event_time` is not specified, results will be returned for the last 30 days. Supported fields for filtering: - `event_time` Supported operators: - `>=` and `<=` for `event_time` Supported conjunctions: - `AND` Example: `event_time >= "2024-01-01T00:00:00Z" AND event_time <= "2024-01-02T00:00:00Z"` |

#### `customers.enterprise.securityInsights.checkEnablementStatus()`

Gets the setting state of the insights feature for the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer to check the enablement status for. Format: customers/{customer_id} |

#### `customers.enterprise.securityInsights.queryUrlVisits()`

Returns a high-level summary of URL visits for a given customer. Requires a Chrome Enterprise Premium subscription. If the customer does not have this subscription, query results will be empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID in the format "customers/{customer_id}". |
| `params.filter` | `string` | No | Optional. The filter to apply to the request. For syntax, see AIP-160. Data is not available for events older than 180 days, and may be unavailable or inaccurate for time ranges less than 4 hours. If `event_time` is not specified, results will be returned for the last 30 days. Supported fields for filtering: - `event_time` Supported operators: - `>=` and `<=` for `event_time` Supported conjunctions: - `AND` Example: `event_time >= "2024-01-01T00:00:00Z" AND event_time <= "2024-01-02T00:00:00Z"` |

#### `customers.enterprise.securityInsights.queryContentTransfersBreakdowns()`

Returns summaries of content transfers for a given metric and breakdown dimension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.breakdown` | `string` | No | Optional. The dimension to break down the content transfers by. Defaults to USER. |
| `params.customer` | `string` | Yes | Required. The customer ID in the format "customers/{customer_id}". |
| `params.fixedTimeRange` | `string` | No | Optional. The fixed time range to return the breakdowns for. Defaults to FIXED_TIME_RANGE_FOUR_WEEKS. Fixed time ranges are used to allow for precomputation and optimize response times. |
| `params.metric` | `string` | No | Optional. The metric to return the breakdowns for. Defaults to CONTENT_TRANSFERS_METRIC_TOTAL_TRANSFERS. |
| `params.filter` | `string` | No | Optional. The filter to apply to the request. For syntax, see AIP-160. Data is not available for events older than 180 days or more recent than 48 hours ago. If `event_time` is not specified, results will end 48 hours ago. Supported fields for filtering: - `user` - `event_domain` - `content_category` - `event_time` Filtering by `user` or `event_domain` requires the `breakdown` dimension to be set to the corresponding value (e.g., you must set `breakdown = USER` to filter by `user`). Supported operators: - `=` for `user`, `event_domain`, and `content_category`. - `<=` for `event_time`. Supported conjunctions: - `AND` Example: `user = "testuser" AND event_time <= "2024-01-02T00:00:00Z"` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of breakdowns to return. The service may return fewer than this value. If unspecified, at most 50 breakdowns will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `QueryContentTransfersBreakdowns` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryContentTransfersBreakdowns` must match the call that provided the page token. |

### `customers.chromeBrowsers`

#### `customers.chromeBrowsers.delete()`

Deletes the data collected from a Chrome browser profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/chromeBrowsers/{browser_permanent_id} |

#### `customers.chromeBrowsers.move()`

Moves managed Chrome Browsers to a new Organizational Unit (OU). If there is an error while moving any of the browsers, none of the browsers will be moved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chromeBrowsers.get()`

Retrieves a single Chrome Browser identified by its customer ID and resource ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: customers/{customer_id}/chromeBrowsers/{browser_permanent_id} |

#### `customers.chromeBrowsers.list()`

Retrieves all Chrome Browsers of a customer (paginated).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 100. |
| `params.orderBy` | `string` | No | Optional. The fields used to specify the ordering of the results. The supported fields are: * `browser_permanent_id` * `virtual_device_id` * `last_policy_fetch_time` * `annotated_user` * `annotated_location` * `annotated_asset_id` * `annotated_notes` * `org_unit_path` * `os_version` * `last_registration_time` * `extension_count` * `policy_count` * `last_device_user` * `machine_name` * `browser_version_channel` * `os_platform_version` * `last_activity_time` * `browser_version` By default, sorting is in ascending order, to specify descending order for a field, a suffix ` desc` should be added to the field name. The default ordering is the ascending order of `browser_permanent_id`. |
| `params.filter` | `string` | No | Optional. The filter used to filter browsers. The following fields can be used in the filter: * `browser_permanent_id` * `virtual_device_id` * `last_policy_fetch_time` * `os_platform` * `os_architecture` * `os_version` * `machine_name` * `annotated_location` * `annotated_user` * `annotated_asset_id` * `annotated_note` * `org_unit_path` * `org_unit_id` * `last_registration_time` * `os_platform_version` * `browser_version` * `last_status_report_time` * `extension_count` * `policy_count` * `last_device_user` * `last_activity_time` * `device_id_collision` The following functions can be used in the filter: * `in_group(string)`: Filters browsers that belong to the specified Cloud Identity group resource name (e.g. `in_group("groups/{group_id}")`). Any of the above fields or functions can be used to specify a filter, and filtering by multiple fields or functions is supported with AND operator. String type, Integer type fields and enum type fields support `=` and `:` operators. The timestamp type fields support `=`, `<=` and `>=` operators. Timestamps expect an RFC-3339 formatted string enclosed in double quotes (e.g., `"2012-04-21T11:30:00-04:00"`). Wildcard `*` is only supported for `machine_name`, `annotated_asset_id`, and `browser_version`. In addition, global string literal filtering without a field name is supported: a single term (e.g., `ABC`) matches if any indexed string field contains `ABC`, and multiple terms joined by `AND` or whitespace (e.g., `machine AND 73` or `machine 73`) match browsers where every term appears in at least one indexed string field (whereas a single quoted phrase like `"machine 73"` matches the contiguous phrase within a single field). |
| `params.pageToken` | `string` | No | Optional. Token to specify next page in the list. |
| `params.parent` | `string` | Yes | Required. Format: customers/{customer_id} |

#### `customers.chromeBrowsers.patch()`

Updates annotation information for a Chrome Browser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The update mask that can be used to specify which fields to update. |
| `params.name` | `string` | Yes | Identifier. Format: customers/{customer_id}/chromeBrowsers/{browser_permanent_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.reports`

#### `customers.reports.countDevicesPerReleaseChannel()`

Get a count of devices per channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.date.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.date.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.date.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |

#### `customers.reports.countPrintJobsByUser()`

Get a summary of printing done by each user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Field used to order results. If omitted, results will be ordered in ascending order of the 'user_email' field. Supported order_by fields: * user_email * job_count * printer_count * device_count |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time |
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |
| `params.pageToken` | `string` | No | Token to specify the page of the response to be returned. |
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only print jobs initiated with printers from the specified organizational unit will be counted. If omitted, all print jobs will be counted. |

#### `customers.reports.countChromeDevicesThatNeedAttention()`

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.readMask` | `string` | No | Required. Mask of the fields that should be populated in the returned report. |

#### `customers.reports.findSaasUsageProfiles()`

Find SaaS usage reports of a customer grouped by profiles based on the given search and sorting criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. The filter expression to narrow down the SaaS profile reports to return. Supported operators are: =, !=, <, <=, >, >=, :. Logical operators AND, OR, and NOT are supported. Supported fields: * email * org_unit_id * os_platform * first_navigation_time * last_navigation_time |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FindSaasUsageProfiles` call. Provide this to retrieve the subsequent page. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 100 reports will be returned. The maximum value is 200; values above 200 will be coerced to 200. |
| `params.orderBy` | `string` | No | Optional. The order by expression to sort the SaaS profile reports. Supported fields: * email * os_platform * first_navigation_time * last_navigation_time Default order is ascending. To specify descending order for a field, append " desc". |
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |
| `params.app` | `string` | No | Required. The name of the SaaS application (e.g., `ChatGPT`, `Gemini`). |

#### `customers.reports.enumeratePrintJobs()`

Get a list of print jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only print jobs submitted to printers from the specified organizational unit will be returned. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported for `complete_time`. Note: Only = comparator supported for `user_id` and `printer_id`. Supported filter fields: * complete_time * printer_id * user_id |
| `params.pageToken` | `string` | No | A page token received from a previous `EnumeratePrintJobs` call. Provide this to retrieve the subsequent page. If omitted, the first page of results will be returned. When paginating, all other parameters provided to `EnumeratePrintJobs` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The number of print jobs in the page from 0 to 100 inclusive, if page_size is not specified or zero, the size will be 50. |
| `params.orderBy` | `string` | No | Field used to order results. If not specified, results will be ordered in descending order of the `complete_time` field. Supported order by fields: * title * state * create_time * complete_time * document_page_count * color_mode * duplex_mode * printer * user_email |
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |

#### `customers.reports.countChromeDevicesReachingAutoExpirationDate()`

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxAueDate` | `string` | No | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date. |
| `params.minAueDate` | `string` | No | Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date. |
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | Optional. The organizational unit ID, if omitted, will return data for all organizational units. |

#### `customers.reports.countChromeProfileVersions()`

Generate report of installed Chrome versions on managed profiles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. If omitted, all data will be returned. |
| `params.filter` | `string` | No | Optional. Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. |

#### `customers.reports.findSaasUsage()`

Find SaaS usage reports of a customer based on the given search and sorting criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FindSaasUsageReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FindSaasUsageReports` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The order by expression to sort the SaaS reports. Supported fields: * app * category * organization * founded_year * headquarters * primary_domain * visits_count * distinct_users_count * distinct_browsers_count * content_transfer_count Default order is ascending. To specify descending order for a field, append " desc". Example: `visits_count desc` |
| `params.filter` | `string` | No | Optional. The filter expression to narrow down the SaaS reports to return. Supported operators are: =, !=, <, <=, >, >=, :. Logical operators AND, OR, and NOT are supported. Supported fields: * app * org_unit_id * first_navigation_time * last_navigation_time * category * organization * founded_year * headquarters * primary_domain * domains * encryption_protocols * visits_count * distinct_users_count * distinct_browsers_count * content_transfer_count Example: `(first_navigation_time < "2026-01-31T00:00:00Z" AND last_navigation_time > "2026-01-01T00:00:00Z") AND visits_count > 100` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 100 reports will be returned. The maximum value is 200; values above 200 will be coerced to 200. |

#### `customers.reports.findInstalledAppDevices()`

Generate report of managed Chrome browser devices that have a specified app installed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appId` | `string` | No | Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). |
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * machine * device_id |
| `params.appType` | `string` | No | Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |

#### `customers.reports.countChromeHardwareFleetDevices()`

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer". |
| `params.readMask` | `string` | No | Required. Mask of the fields that should be populated in the returned report. |

#### `customers.reports.findInstalledAppProfiles()`

Generate report of managed Chrome profiles that have a specified app installed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. Maximum and default are 100. |
| `params.orderBy` | `string` | No | Optional. Field used to order results. Supported order by fields: * email * profile_id * profile_permanent_id |
| `params.appId` | `string` | No | Required. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). |
| `params.pageToken` | `string` | No | Optional. Token to specify the page of the request to be returned. |
| `params.appType` | `string` | No | Type of the app. Optional. If not provided, an app type will be inferred from the format of the app ID. |
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Optional. Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |

#### `customers.reports.countChromeBrowsersNeedingAttention()`

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer ID or "my_customer" prefixed with "customers/". |
| `params.orgUnitId` | `string` | No | Optional. The ID of the organizational unit. If omitted, all data will be returned. |

#### `customers.reports.findSaasUsageBrowsers()`

Find SaaS usage reports of a customer grouped by browsers based on the given search and sorting criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |
| `params.filter` | `string` | No | Optional. The filter expression to narrow down the SaaS browser reports to return. Supported operators are: =, !=, <, <=, >, >=, :. Logical operators AND, OR, and NOT are supported. Supported fields: * machine * os_platform * first_navigation_time * last_navigation_time * org_unit_id |
| `params.app` | `string` | No | Required. The name of the SaaS application (e.g., `ChatGPT`, `Gemini`). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of browsers to return. The service may return fewer than this value. If unspecified, at most 100 browsers will be returned. The maximum value is 200; values above 200 will be coerced to 200. |
| `params.orderBy` | `string` | No | Optional. The order by expression to sort the SaaS browser reports. Supported fields: * machine * os_platform * first_navigation_time * last_navigation_time Default order is ascending. To specify descending order for a field, append " desc". |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FindSaasUsageBrowsers` call. Provide this to retrieve the subsequent page. |

#### `customers.reports.countChromeVersions()`

Generate report of installed Chrome versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |

#### `customers.reports.countPrintJobsByPrinter()`

Get a summary of printing done by each printer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.printerOrgUnitId` | `string` | No | The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned. |
| `params.pageToken` | `string` | No | Token to specify the page of the response to be returned. |
| `params.customer` | `string` | Yes | Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request. |

#### `customers.reports.countDevicesPerBootType()`

Get a count of devices per boot type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.date.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.date.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |
| `params.date.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

#### `customers.reports.countInstalledApps()`

Generate report of app installations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id * manifest_versions * risk_score |
| `params.pageToken` | `string` | No | Token to specify the page of the request to be returned. |
| `params.pageSize` | `integer` | No | Maximum number of results to return. Maximum and default are 100. |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id * manifest_versions * risk_score |
| `params.orgUnitId` | `string` | No | The ID of the organizational unit. |
| `params.customer` | `string` | Yes | Required. Customer id or "my_customer" to use the customer associated to the account making the request. |

#### `customers.reports.countActiveDevices()`

Get a count of active devices per set time frames.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.date.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.date.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.date.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.customer` | `string` | Yes | Required. Obfuscated customer ID prefixed with "customers/C" or "customers/my_customer". |

#### `customers.reports.countChromeCrashEvents()`

Get a count of Chrome crash events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orgUnitId` | `string` | No | If specified, only count the number of crash events of the devices in this organizational unit. |
| `params.customer` | `string` | Yes | Customer ID. |
| `params.filter` | `string` | No | Query string to filter results, AND-separated fields in EBNF syntax. Supported filter fields: * major_browser_version * minor_browser_version * browser_channel * device_platform * past_number_days Example: `major_browser_version = 'M115' AND past_number_days = '28'`. |
| `params.orderBy` | `string` | No | Field used to order results. Supported order by fields: * browser_version * count * date |

### `operations`

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |