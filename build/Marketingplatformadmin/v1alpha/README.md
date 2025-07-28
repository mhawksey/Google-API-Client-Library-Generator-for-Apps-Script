# Google Marketing Platform Admin API - Apps Script Client Library

Auto-generated client library for using the **Google Marketing Platform Admin API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:57:12 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:35:10 GMT
- **Created:** Sun, 20 Jul 2025 16:42:16 GMT



---

## API Reference

### `organizations`

#### `organizations.get()`

Lookup for a single organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Organization to retrieve. Format: organizations/{org_id} |

### `organizations.analyticsAccountLinks`

#### `organizations.analyticsAccountLinks.list()`

Lists the Google Analytics accounts link to the specified Google Marketing Platform organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token. |

#### `organizations.analyticsAccountLinks.create()`

Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.analyticsAccountLinks.delete()`

Deletes the AnalyticsAccountLink, which detaches the Analytics account from the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account in order to delete the link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Analytics account link to delete. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} |

#### `organizations.analyticsAccountLinks.setPropertyServiceLevel()`

Updates the service level for an Analytics property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.analyticsAccountLink` | `string` | Yes | Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} |
| `params.resource` | `object` | Yes | The request body. |