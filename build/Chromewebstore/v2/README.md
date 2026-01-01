# Chrome Web Store API - Apps Script Client Library

Auto-generated client library for using the **Chrome Web Store API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:31:23 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:25:41 GMT
- **Created:** Sat, 01 Nov 2025 00:25:41 GMT



---

## API Reference

### `publishers`

### `publishers.items`

#### `publishers.items.publish()`

Submit the item to be published in the store. The item will be submitted for review unless `skip_review` is set to true, or the item is staged from a previous submission with `publish_type` set to `STAGED_PUBLISH`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.fetchStatus()`

Fetch the status of an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to retrieve the status of in the form `publishers/{publisherId}/items/{itemId}` |

#### `publishers.items.cancelSubmission()`

Cancel the current active submission of an item if present. This can be used to cancel the review of a pending submission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to cancel the submission of in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.setPublishedDeployPercentage()`

Set a higher target deploy percentage for the item's published revision. This will be updated without the item being submitted for review. This is only available to items with over 10,000 seven-day active users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to update the published revision of in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `media`

#### `media.upload()`

Upload a new package to an existing item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to upload the new package to in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |