# Deep Review API - Apps Script Client Library

Auto-generated client library for using the **Deep Review API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:06:42 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:06:42 GMT
- **Created:** Sun, 15 Nov 2026 16:06:42 GMT



---

## API Reference

### `documents`

#### `documents.estimateReviewCost()`

Estimates what a review of a document would cost on the caller's Gemini API key. The estimate comes from what past reviews with the same model, depth, and thinking level cost, adjusted to this document's size and repriced at the Gemini API's current list prices. It covers one review attempt that runs to completion, and doesn't include retries after errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.document` | `string` | Yes | Required. The document to review. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.get()`

Retrieves document metadata. The returned document includes its `latest_review_summary` when a review exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the document to retrieve. |

#### `documents.delete()`

Deletes a document and its stored content. If `force` is set to `true`, any associated reviews are also deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the document to delete. |
| `params.force` | `boolean` | No | Optional. If set to `true`, any child resources (e.g. review resources) are also deleted. If `false` and the document has existing reviews, the request fails with `FAILED_PRECONDITION`. |
| `params.allowMissing` | `boolean` | No | Optional. If set to `true`, and the document is not found, the request succeeds. |

#### `documents.list()`

Lists documents for the authenticated caller with cursor pagination. Each returned document includes its `latest_review_summary` when a review exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Custom filter expressions are not currently supported; non-empty values return INVALID_ARGUMENT. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of documents to return in a single page. The server may return fewer than this value. If unspecified, at most 50 documents will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListDocuments` call. |
| `params.orderBy` | `string` | No | Optional. Custom order_by expressions are not currently supported; non-empty values return INVALID_ARGUMENT. |

### `documents.reviews`

#### `documents.reviews.create()`

Creates and initiates an asynchronous multi-agent review for a document. Returns a google.longrunning.Operation. When the operation completes, the `response` field contains a `Review` and the `metadata` field contains `CreateReviewMetadata`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string. |
| `params.reviewId` | `string` | No | Optional. The ID to use for the review, which will become the final component of the review's resource name. If not provided, a unique server-generated UUID will be assigned. |
| `params.parent` | `string` | Yes | Required. The parent Document resource name where this review will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `documents.reviews.get()`

Retrieves a specific review execution result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the review to retrieve. |

#### `documents.reviews.list()`

Lists all review execution runs for a document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Custom filter expressions are not currently supported; non-empty values return INVALID_ARGUMENT. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListReviews` call. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reviews to return in a single page. The server may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.parent` | `string` | Yes | Required. The parent Document resource name. |
| `params.orderBy` | `string` | No | Optional. Custom order_by expressions are not currently supported; non-empty values return INVALID_ARGUMENT. |

### `media`

#### `media.download()`

Downloads the original document content (PDF binary) using media streaming. Pass `alt=media` as a query parameter to stream the binary PDF bytes. Without `alt=media`, a JSON response is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the document to download. |

#### `media.upload()`

Creates a new Document resource and ingests the manuscript using media upload or Google Drive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string. |
| `params.documentId` | `string` | No | Optional. The ID to use for the document, which will become the final component of the document's resource name. If not provided, a unique server-generated UUID will be assigned. |
| `params.requestBody` | `object` | Yes | The request body. |

### `v1`

#### `v1.getUserQuota()`

Retrieves the review quota limits and sliding-window usage for the authenticated caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the singleton user quota to retrieve. |

### `operations`

### `operations.documents`

### `operations.documents.reviews`

#### `operations.documents.reviews.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |