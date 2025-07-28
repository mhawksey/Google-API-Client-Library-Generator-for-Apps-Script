# My Business Notifications API - Apps Script Client Library

Auto-generated client library for using the **My Business Notifications API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:09:53 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:19 GMT
- **Created:** Sun, 20 Jul 2025 16:43:34 GMT



---

## API Reference

### `accounts`

#### `accounts.getNotificationSetting()`

Returns the pubsub notification settings for the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the notification setting we are trying to fetch. |

#### `accounts.updateNotificationSetting()`

Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`. |
| `params.updateMask` | `string` | No | Required. The specific fields that should be updated. The only editable field is notification_setting. |
| `params.resource` | `object` | Yes | The request body. |