# Chrome Web Store API - Apps Script Client Library

Auto-generated client library for using the **Chrome Web Store API (version: v1.1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:33:06 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:33:06 GMT
- **Created:** Sat, 01 Nov 2025 00:25:37 GMT



---

## API Reference

### `items`

#### `items.insert()`

Inserts a new item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.publisherEmail` | `string` | No | The email of the publisher who owns the items. Defaults to the caller's email address. |

#### `items.get()`

Gets your own Chrome Web Store item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projection` | `string` | No | Determines which subset of the item information to return. |
| `params.itemId` | `string` | Yes | Unique identifier representing the Chrome App, Chrome Extension, or the Chrome Theme. |

#### `items.publish()`

Publishes an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deployPercentage` | `integer` | No | The deploy percentage you want to set for your item. Valid values are [0, 100]. If set to any number less than 100, only that many percentage of users will be allowed to get the update. |
| `params.reviewExemption` | `boolean` | No | Optional. The caller request to exempt the review and directly publish because the update is within the list that we can automatically validate. The API will check if the exemption can be granted using real time data. |
| `params.itemId` | `string` | Yes | The ID of the item to publish. |
| `params.publishTarget` | `string` | No | Provide defined publishTarget in URL (case sensitive): publishTarget="trustedTesters" or publishTarget="default". Defaults to publishTarget="default". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `items.update()`

Updates an existing item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.itemId` | `string` | Yes | The ID of the item to upload. |
| `params.requestBody` | `object` | Yes | The request body. |