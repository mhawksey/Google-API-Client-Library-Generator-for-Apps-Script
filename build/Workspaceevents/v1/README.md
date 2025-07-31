# Google Workspace Events API - Apps Script Client Library

Auto-generated client library for using the **Google Workspace Events API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:57:26 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:44 GMT
- **Created:** Sun, 20 Jul 2025 17:03:24 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `subscriptions`

#### `subscriptions.create()`

Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription). 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. If set to `true`, validates and previews the request, but doesn't create the subscription. |
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.delete()`

Deletes a Google Workspace subscription. To learn how to use this method, see [Delete a Google Workspace subscription](https://developers.google.com/workspace/events/guides/delete-subscription).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription to delete. Format: `subscriptions/{subscription}` |
| `params.validateOnly` | `boolean` | No | Optional. If set to `true`, validates and previews the request, but doesn't delete the subscription. |
| `params.allowMissing` | `boolean` | No | Optional. If set to `true` and the subscription isn't found, the request succeeds but doesn't delete the subscription. |
| `params.etag` | `string` | No | Optional. Etag of the subscription. If present, it must match with the server's etag. Otherwise, request fails with the status `ABORTED`. |

#### `subscriptions.get()`

Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](https://developers.google.com/workspace/events/guides/get-subscription).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription. Format: `subscriptions/{subscription}` |

#### `subscriptions.list()`

Lists Google Workspace subscriptions. To learn how to use this method, see [List Google Workspace subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of subscriptions to return. The service might return fewer than this value. If unspecified or set to `0`, up to 50 subscriptions are returned. The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. |
| `params.filter` | `string` | No | Required. A query filter. You can filter subscriptions by event type (`event_types`) and target resource (`target_resource`). You must specify at least one event type in your query. To filter for multiple event types, use the `OR` operator. To filter by both event type and target resource, use the `AND` operator and specify the full resource name, such as `//chat.googleapis.com/spaces/{space}`. For example, the following queries are valid: ``` event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" event_types:"google.workspace.chat.message.v1.created" AND target_resource="//chat.googleapis.com/spaces/{space}" ( event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" ) AND target_resource="//chat.googleapis.com/spaces/{space}" ``` The server rejects invalid queries with an `INVALID_ARGUMENT` error. |

#### `subscriptions.patch()`

Updates or renews a Google Workspace subscription. To learn how to use this method, see [Update or renew a Google Workspace subscription](https://developers.google.com/workspace/events/guides/update-subscription).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the subscription. Format: `subscriptions/{subscription}` |
| `params.updateMask` | `string` | No | Optional. The field to update. If omitted, updates any fields included in the request. You can update one of the following fields in a subscription: * `expire_time`: The timestamp when the subscription expires. * `ttl`: The time-to-live (TTL) or duration of the subscription. * `event_types`: The list of event types to receive about the target resource. When using the `*` wildcard (equivalent to `PUT`), omitted fields are set to empty values and rejected if they're invalid. |
| `params.validateOnly` | `boolean` | No | Optional. If set to `true`, validates and previews the request, but doesn't update the subscription. |
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.reactivate()`

Reactivates a suspended Google Workspace subscription. This method resets your subscription's `State` field to `ACTIVE`. Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see [Reactivate a Google Workspace subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription. Format: `subscriptions/{subscription}` |
| `params.resource` | `object` | Yes | The request body. |