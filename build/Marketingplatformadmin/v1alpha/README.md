# Google Marketing Platform Admin API - Apps Script Client Library

Auto-generated client library for using the **Google Marketing Platform Admin API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:30:26 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:30:26 GMT
- **Created:** Sun, 20 Jul 2025 16:42:16 GMT



---

## API Reference

### `organizations`

#### `organizations.reportPropertyUsage()`

Gets the usage and billing data for properties within the organization for the specified month. Per direct client org, user needs to be OrgAdmin/BillingAdmin on the organization in order to view the billing and usage data. Per sales partner client org, user needs to be OrgAdmin/BillingAdmin on the sales partner org in order to view the billing and usage data, or OrgAdmin/BillingAdmin on the sales partner client org in order to view the usage data only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.organization` | `string` | Yes | Required. Specifies the organization whose property usage will be listed. Format: organizations/{org_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.findSalesPartnerManagedClients()`

Returns a list of clients managed by the sales partner organization. User needs to be an OrgAdmin/BillingAdmin on the sales partner organization in order to view the end clients.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.organization` | `string` | Yes | Required. The name of the sales partner organization. Format: organizations/{org_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.get()`

Looks up a single organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Organization to retrieve. Format: organizations/{org_id} |

#### `organizations.list()`

Returns a list of organizations that the user has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListOrganizations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrganizations` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of organizations to return in one call. The service may return fewer than this value. If unspecified, at most 50 organizations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `organizations.userGroups`

#### `organizations.userGroups.delete()`

Deletes a user group in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user group to delete. Format: organizations/{org_id}/userGroups/{user_group_id} |

#### `organizations.userGroups.create()`

Creates a user group in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this UserGroup will be created. Format: organizations/{org_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.userGroups.get()`

Looks up a single user group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the UserGroup to retrieve. Format: organizations/{org_id}/userGroups/{user_group_id} |

#### `organizations.userGroups.patch()`

Updates a user group in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of this UserGroup. Format: organizations/{org_id}/userGroups/{user_group_id} Example: "organizations/123abc/userGroups/456def" |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.userGroups.list()`

Returns a list of user groups in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent org where this UserGroup will be listed. Format: organizations/{org_id} |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListUserGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroups` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of user groups to return in one call. The service may return fewer than this value. If unspecified, at most 50 user groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `organizations.userGroups.members`

#### `organizations.userGroups.members.delete()`

Deletes a member in the specified GMP user group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user group member to delete. Format: organizations/{org_id}/userGroups/{user_group_id}/members/{member_id} |

#### `organizations.userGroups.members.list()`

Returns a list of members in the specified user group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of user group members to return in one call. The service may return fewer than this value. If unspecified, at most 50 user group members will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListUserGroupMembers call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserGroupMembers` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent user group where this UserGroupMember will be listed. Format: organizations/{org_id}/userGroups/{user_group_id} |

#### `organizations.userGroups.members.patch()`

Updates a member in the specified GMP user group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.name` | `string` | Yes | Identifier. The resource name of this UserGroupMember. Format: organizations/{org_id}/userGroups/{user_group_id}/members/{member_id} Example: "organizations/123abc/userGroups/456def/members/789ghi" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.userGroups.members.get()`

Looks up a single user group member.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user group member to retrieve. Format: organizations/{org_id}/userGroups/{user_group_id}/members/{member_id} |

#### `organizations.userGroups.members.create()`

Adds a member to the specified GMP user group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this UserGroupMember will be created. Format: organizations/{org_id}/userGroups/{user_group_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.analyticsAccountLinks`

#### `organizations.analyticsAccountLinks.create()`

Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.analyticsAccountLinks.setPropertyServiceLevel()`

Updates the service level for an Analytics property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.analyticsAccountLink` | `string` | Yes | Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.analyticsAccountLinks.delete()`

Deletes the AnalyticsAccountLink, which detaches the Analytics account from the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account in order to delete the link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Analytics account link to delete. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} |

#### `organizations.analyticsAccountLinks.list()`

Lists the Google Analytics accounts link to the specified Google Marketing Platform organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `organizations.adminAccessBindings`

#### `organizations.adminAccessBindings.get()`

Looks up a single admin access binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AdminAccessBinding to retrieve. Format: organizations/{org_id}/adminAccessBindings/{admin_access_binding_id} |

#### `organizations.adminAccessBindings.list()`

Returns a list of admin access bindings in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListAdminAccessBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdminAccessBindings` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. The parent organization, which owns this collection of Admin Access Bindings. Format: organizations/{org_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Admin Access Bindings to return in one call. The service may return fewer than this value. If unspecified, at most 50 Admin Access Bindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

#### `organizations.adminAccessBindings.patch()`

Updates an admin access binding in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of this AdminAccessBinding. Format: organizations/{org_id}/adminAccessBindings/{admin_access_binding_id} Example: "organizations/123abc/adminAccessBindings/456def" |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.adminAccessBindings.create()`

Creates an admin access binding in the specified GMP organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization, which owns this Admin Access Binding. Format: organizations/{org_id} |
| `params.requestBody` | `object` | Yes | The request body. |