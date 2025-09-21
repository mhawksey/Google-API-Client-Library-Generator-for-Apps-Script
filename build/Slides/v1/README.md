# Google Slides API - Apps Script Client Library

Auto-generated client library for using the **Google Slides API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:55:07 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:46:48 GMT
- **Created:** Sun, 20 Jul 2025 16:54:43 GMT



---

## API Reference

### `presentations`

#### `presentations.get()`

Gets the latest version of the specified presentation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.presentationId` | `string` | Yes | The ID of the presentation to retrieve. |

#### `presentations.create()`

Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `presentations.batchUpdate()`

Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.presentationId` | `string` | Yes | The presentation to apply the updates to. |
| `params.resource` | `object` | Yes | The request body. |

### `presentations.pages`

#### `presentations.pages.get()`

Gets the latest version of the specified page in the presentation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.presentationId` | `string` | Yes | The ID of the presentation to retrieve. |
| `params.pageObjectId` | `string` | Yes | The object ID of the page to retrieve. |

#### `presentations.pages.getThumbnail()`

Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](https://developers.google.com/workspace/slides/limits) for quota purposes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.presentationId` | `string` | Yes | The ID of the presentation to retrieve. |
| `params.pageObjectId` | `string` | Yes | The object ID of the page whose thumbnail to retrieve. |
| `params.thumbnailProperties.mimeType` | `string` | No | The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG. |
| `params.thumbnailProperties.thumbnailSize` | `string` | No | The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image. |