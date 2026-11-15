# Google Docs API - Apps Script Client Library

Auto-generated client library for using the **Google Docs API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:10:39 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:10:39 GMT
- **Created:** Sun, 20 Jul 2025 16:32:11 GMT



---

## API Reference

### `documents`

#### `documents.create()`

Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.batchUpdate()`

Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.documentId` | `string` | Yes | The ID of the document to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.get()`

Gets the latest version of the specified document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commentsViewMode` | `string` | No | The comments view mode to apply to the document. This allows viewing the document with comments omitted or included. If one is not specified, COMMENTS_VIEW_MODE_OMITTED is used. If you set comments_view_mode to any value, you must also set include_tabs_content to `true` or use a field mask that references the Document.tabs field (or any subfield). If you set comments_view_mode to COMMENTS_VIEW_MODE_INCLUDED, you must also explicitly set suggestions_view_mode to SUGGESTIONS_INLINE. If you set comments_view_mode to COMMENTS_VIEW_MODE_INCLUDED or COMMENTS_VIEW_MODE_DEFAULT_FOR_CURRENT_ACCESS, you may not set suggestions_view_mode to PREVIEW_WITHOUT_SUGGESTIONS or PREVIEW_SUGGESTIONS_ACCEPTED. |
| `params.suggestionsViewMode` | `string` | No | The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used. |
| `params.documentId` | `string` | Yes | The ID of the document to retrieve. |
| `params.includeTabsContent` | `boolean` | No | Whether to populate the `Document.tabs` field instead of the text content fields like `body` and `documentStyle` on `Document`. - When `true`: Document content populates in the `Document.tabs` field instead of the text content fields in `Document`. - When `false`: The content of the document's first tab populates the content fields in `Document` excluding `Document.tabs`. If a document has only one tab, then that tab is used to populate the document content. `Document.tabs` will be empty. If you use a field mask that references the `Document.tabs` field (or any subfield), the API implicitly treats the request as if you set `include_tabs_content` to `true`. |