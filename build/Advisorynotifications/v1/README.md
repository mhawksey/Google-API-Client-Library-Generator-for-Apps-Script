# Advisory Notifications API - Apps Script Client Library

Auto-generated client library for using the **Advisory Notifications API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:21:21 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:29 GMT
- **Created:** Sun, 20 Jul 2025 16:11:19 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

#### `organizations.locations.getSettings()`

Get notification settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. |

#### `organizations.locations.updateSettings()`

Update notification settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.notifications`

#### `organizations.locations.notifications.list()`

Lists notifications under a given parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}". |
| `params.pageSize` | `integer` | No | The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. |
| `params.view` | `string` | No | Specifies which parts of the notification resource should be returned in the response. |
| `params.languageCode` | `string` | No | ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. |

#### `organizations.locations.notifications.get()`

Gets a notification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}. |
| `params.languageCode` | `string` | No | ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. |

### `projects`

### `projects.locations`

#### `projects.locations.getSettings()`

Get notification settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. |

#### `projects.locations.updateSettings()`

Update notification settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notifications`

#### `projects.locations.notifications.list()`

Lists notifications under a given parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}". |
| `params.pageSize` | `integer` | No | The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. |
| `params.pageToken` | `string` | No | A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. |
| `params.view` | `string` | No | Specifies which parts of the notification resource should be returned in the response. |
| `params.languageCode` | `string` | No | ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. |

#### `projects.locations.notifications.get()`

Gets a notification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}. |
| `params.languageCode` | `string` | No | ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. |