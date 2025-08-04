# Cloud Identity API - Apps Script Client Library

Auto-generated client library for using the **Cloud Identity API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:02:29 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:02:29 GMT
- **Created:** Sun, 20 Jul 2025 16:22:01 GMT



---

## API Reference

### `devices`

#### `devices.create()`

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.get()`

Retrieves the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in the format: `devices/{device}`, where device is the unique ID assigned to the Device. |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in the format: `customers/{customer}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |

#### `devices.list()`

Lists/Searches devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer in the format: `customers/{customer}`, where customer is the customer to whom the device belongs. If you're using this API for your own organization, use `customers/my_customer`. If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |
| `params.filter` | `string` | No | Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally at the end to specify results to be sorted in descending order. Default order is ascending. |
| `params.view` | `string` | No | Optional. The view to use for the List request. |

#### `devices.delete()`

Deletes the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique ID assigned to the Device. |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |

#### `devices.wipe()`

Wipes all data on the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.cancelWipe()`

Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique ID assigned to the Device. |
| `params.resource` | `object` | Yes | The request body. |

### `devices.deviceUsers`

#### `devices.deviceUsers.get()`

Retrieves the specified DeviceUser

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |

#### `devices.deviceUsers.list()`

Lists/Searches DeviceUsers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device} |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |
| `params.filter` | `string` | No | Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Order specification for devices in the response. |

#### `devices.deviceUsers.delete()`

Deletes the specified DeviceUser. This also revokes the user's access to device data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |

#### `devices.deviceUsers.lookup()`

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user. |
| `params.pageSize` | `integer` | No | The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token. |
| `params.androidId` | `string` | No | Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID). |
| `params.rawResourceId` | `string` | No | Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. * macOS: ~/.secureConnect/context_aware_config.json * Windows: %USERPROFILE%\AppData\Local\Google\Endpoint Verification\accounts.json * Linux: ~/.secureConnect/context_aware_config.json |
| `params.userId` | `string` | No | The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user. |

#### `devices.deviceUsers.approve()`

Approves device to access user data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.deviceUsers.block()`

Blocks device from accessing user data

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.deviceUsers.wipe()`

Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.deviceUsers.cancelWipe()`

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}/deviceUsers/{device_user}`, where device is the unique ID assigned to the Device, and device_user is the unique ID assigned to the User. |
| `params.resource` | `object` | Yes | The request body. |

### `devices.deviceUsers.clientStates`

#### `devices.deviceUsers.clientStates.get()`

Gets the client state for the device user

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientStates/{partner}`, where `device` is the unique ID assigned to the Device, `device_user` is the unique ID assigned to the User and `partner` identifies the partner storing the data. To get the client state for devices belonging to your own organization, the `partnerId` is in the format: `customerId-*anystring*`. Where the `customerId` is your organization's customer ID and `anystring` is any suffix. This suffix is used in setting up Custom Access Levels in Context-Aware Access. You may use `my_customer` instead of the customer ID for devices managed by your own organization. You may specify `-` in place of the `{device}`, so the ClientState resource name can be: `devices/-/deviceUsers/{device_user_resource}/clientStates/{partner}`. |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |

#### `devices.deviceUsers.clientStates.list()`

Lists the client states for the given search query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. To list all ClientStates, set this to "devices/-/deviceUsers/-". To list all ClientStates owned by a DeviceUser, set this to the resource name of the DeviceUser. Format: devices/{device}/deviceUsers/{deviceUser} |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |
| `params.filter` | `string` | No | Optional. Additional restrictions when fetching list of client states. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListClientStates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClientStates` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Order specification for client states in the response. |

#### `devices.deviceUsers.clientStates.patch()`

Updates the client state for the device user **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C') |
| `params.customer` | `string` | No | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs. |
| `params.updateMask` | `string` | No | Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated. |
| `params.resource` | `object` | Yes | The request body. |

### `groups`

#### `groups.create()`

Creates a Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.initialGroupConfig` | `string` | No | Optional. The initial configuration option for the `Group`. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.get()`

Retrieves a `Group`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group}`. |

#### `groups.getSecuritySettings()`

Get Security Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The security settings to retrieve. Format: `groups/{group_id}/securitySettings` |
| `params.readMask` | `string` | No | Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`. |

#### `groups.patch()`

Updates a `Group`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group}`. |
| `params.updateMask` | `string` | No | Required. The names of fields to update. May only contain the following field names: `display_name`, `description`, `labels`. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.updateSecuritySettings()`

Update Security Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`. |
| `params.updateMask` | `string` | No | Required. The fully-qualified names of fields to update. May only contain the following field: `member_restriction.query`. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.delete()`

Deletes a `Group`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group}`. |

#### `groups.lookup()`

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey.id` | `string` | No | The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. Email addresses need to adhere to [name guidelines for users and groups](https://support.google.com/a/answer/9193374). For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. |
| `params.groupKey.namespace` | `string` | No | The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source}`. |

#### `groups.search()`

Searches for `Group` resources matching a specified query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | Required. The search query. * Must be specified in [Common Expression Language](https://opensource.google/projects/cel). * Must contain equality operators on the parent, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) * Can contain optional inclusion operators on `labels` such as `'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). * Can contain an optional equality operator on `domain_name`. e.g. `domain_name == 'examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `group_key`, e.g. `group_key.startsWith('dev')`, `group_key.contains('dev'), group_key == 'dev@examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `display_name`, such as `display_name.startsWith('dev')` , `display_name.contains('dev')`, `display_name == 'dev'` |
| `params.view` | `string` | No | The level of detail to be returned. If unspecified, defaults to `View.BASIC`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous search request, if any. |

#### `groups.list()`

Lists the `Group` resources under a customer or namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) |
| `params.view` | `string` | No | The level of detail to be returned. If unspecified, defaults to `View.BASIC`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous list request, if any. |

### `groups.memberships`

#### `groups.memberships.create()`

Creates a `Membership`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.memberships.get()`

Retrieves a `Membership`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve. Must be of the form `groups/{group}/memberships/{membership}`. |

#### `groups.memberships.delete()`

Deletes a `Membership`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete. Must be of the form `groups/{group}/memberships/{membership}` |

#### `groups.memberships.lookup()`

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group}`. |
| `params.memberKey.id` | `string` | No | The ID of the entity. For Google-managed entities, the `id` should be the email address of an existing group or user. Email addresses need to adhere to [name guidelines for users and groups](https://support.google.com/a/answer/9193374). For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. |
| `params.memberKey.namespace` | `string` | No | The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source}`. |

#### `groups.memberships.list()`

Lists the `Membership`s within a `Group`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group}`. |
| `params.view` | `string` | No | The level of detail to be returned. If unspecified, defaults to `View.BASIC`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous search request, if any. |

#### `groups.memberships.modifyMembershipRoles()`

Modifies the `MembershipRole`s of a `Membership`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group}/memberships/{membership}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.memberships.searchTransitiveMemberships()`

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group}`, where `group` is the unique ID assigned to the Group. |
| `params.pageSize` | `integer` | No | The default page size is 200 (max 1000). |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous list request, if any. |

#### `groups.memberships.searchTransitiveGroups()`

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group}`, where `group` is always '-' as this API will search across all groups for a given member. |
| `params.query` | `string` | No | Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels` Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissions on the input customer. Example query: `member_key_id == 'member_key_id_value' && in labels && parent == 'customers/C046psxkn'` |
| `params.pageSize` | `integer` | No | The default page size is 200 (max 1000). |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous list request, if any. |

#### `groups.memberships.checkTransitiveMembership()`

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group}`, where `group` is the unique id assigned to the Group to which the Membership belongs to. |
| `params.query` | `string` | No | Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'` |

#### `groups.memberships.getMembershipGraph()`

Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group}`, where `group` is the unique ID assigned to the Group to which the Membership belongs to. group can be a wildcard collection id "-". When a group is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned. |
| `params.query` | `string` | No | Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels` |

#### `groups.memberships.searchDirectGroups()`

Searches direct groups of a member.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: groups/{group_id}, where group_id is always '-' as this API will search across all groups for a given member. |
| `params.query` | `string` | No | Required. A CEL expression that MUST include member specification AND label(s). Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && 'label_value' in labels` |
| `params.pageSize` | `integer` | No | The default page size is 200 (max 1000). |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous list request, if any |
| `params.orderBy` | `string` | No | The ordering of membership relation for the display name or email in the response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending display name: order_by="group_name" or order_by="group_name asc". Sort by the descending display name: order_by="group_name desc". Sort by the ascending group key: order_by="group_key" or order_by="group_key asc". Sort by the descending group key: order_by="group_key desc". |

### `inboundSamlSsoProfiles`

#### `inboundSamlSsoProfiles.create()`

Creates an InboundSamlSsoProfile for a customer. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `inboundSamlSsoProfiles.patch()`

Updates an InboundSamlSsoProfile. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `inboundSamlSsoProfiles.delete()`

Deletes an InboundSamlSsoProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSamlSsoProfile to delete. Format: `inboundSamlSsoProfiles/{sso_profile_id}` |

#### `inboundSamlSsoProfiles.get()`

Gets an InboundSamlSsoProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSamlSsoProfile to get. Format: `inboundSamlSsoProfiles/{sso_profile_id}` |

#### `inboundSamlSsoProfiles.list()`

Lists InboundSamlSsoProfiles for a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to. |
| `params.pageSize` | `integer` | No | The maximum number of InboundSamlSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListInboundSamlSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSamlSsoProfiles` must match the call that provided the page token. |

### `inboundSamlSsoProfiles.idpCredentials`

#### `inboundSamlSsoProfiles.idpCredentials.delete()`

Deletes an IdpCredential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the IdpCredential to delete. Format: `inboundSamlSsoProfiles/{sso_profile_id}/idpCredentials/{idp_credential_id}` |

#### `inboundSamlSsoProfiles.idpCredentials.get()`

Gets an IdpCredential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the IdpCredential to retrieve. Format: `inboundSamlSsoProfiles/{sso_profile_id}/idpCredentials/{idp_credential_id}` |

#### `inboundSamlSsoProfiles.idpCredentials.list()`

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of `IdpCredential`s. Format: `inboundSamlSsoProfiles/{sso_profile_id}` |
| `params.pageSize` | `integer` | No | The maximum number of `IdpCredential`s to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListIdpCredentials` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdpCredentials` must match the call that provided the page token. |

#### `inboundSamlSsoProfiles.idpCredentials.add()`

Adds an IdpCredential. Up to 2 credentials are allowed. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The InboundSamlSsoProfile that owns the IdpCredential. Format: `inboundSamlSsoProfiles/{sso_profile_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `inboundSsoAssignments`

#### `inboundSsoAssignments.get()`

Gets an InboundSsoAssignment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to fetch. Format: `inboundSsoAssignments/{assignment}` |

#### `inboundSsoAssignments.create()`

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `inboundSsoAssignments.patch()`

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `inboundSsoAssignments.delete()`

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to delete. Format: `inboundSsoAssignments/{assignment}` |

#### `inboundSsoAssignments.list()`

Lists the InboundSsoAssignments for a `Customer`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A CEL expression to filter the results. The only supported filter is filtering by customer. For example: `customer==customers/C0123abc`. Omitting the filter or specifying a filter of `customer==customers/my_customer` will return the assignments for the customer that the caller (authenticated user) belongs to. |
| `params.pageSize` | `integer` | No | The maximum number of assignments to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as having this maximum value. This may increase in the futue. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListInboundSsoAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSsoAssignments` must match the call that provided the page token. |

### `policies`

#### `policies.get()`

Get a Policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the policy to retrieve. Format: "policies/{policy}". |

#### `policies.list()`

List Policies

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. The service can return fewer than this number. If omitted or set to 0, the default is 50 results per page. The maximum allowed value is 100. `page_size` values greater than 100 default to 100. |
| `params.pageToken` | `string` | No | Optional. The pagination token received from a prior call to PoliciesService.ListPolicies to retrieve the next page of results. When paginating, all other parameters provided to `ListPoliciesRequest` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A CEL expression for filtering the results. Policies can be filtered by application with this expression: setting.type.matches('^settings/gmail\\..*$') Policies can be filtered by setting type with this expression: setting.type.matches('^.*\\.service_status$') A maximum of one of the above setting.type clauses can be used. Policies can be filtered by customer with this expression: customer == "customers/{customer}" Where `customer` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may use `customers/my_customer` to specify your own organization. When no customer is mentioned it will be default to customers/my_customer. A maximum of one customer clause can be used. The above clauses can only be combined together in a single filter expression with the `&&` operator. |

### `customers`

### `customers.userinvitations`

#### `customers.userinvitations.get()`

Retrieves a UserInvitation resource. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` |

#### `customers.userinvitations.list()`

Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserInvitations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A query string for filtering `UserInvitation` results by their current state, in the format: `"state=='invited'"`. |
| `params.orderBy` | `string` | No | Optional. The sort order of the list results. You can sort the results in descending order based on either email or last update timestamp but not both, using `order_by="email desc"`. Currently, sorting is supported for `update_time asc`, `update_time desc`, `email asc`, and `email desc`. If not specified, results will be returned based on `email asc` order. |

#### `customers.userinvitations.send()`

Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.userinvitations.cancel()`

Cancels a UserInvitation that was already sent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.userinvitations.isInvitableUser()`

Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria:

* the email address is a consumer account and it's the primary email address of the account, and

* the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` |