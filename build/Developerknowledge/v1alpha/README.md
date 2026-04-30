# Developer Knowledge API - Apps Script Client Library

Auto-generated client library for using the **Developer Knowledge API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:45:35 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:45:35 GMT
- **Created:** Thu, 30 Apr 2026 23:45:35 GMT



---

## API Reference

### `documents`

#### `documents.searchDocumentChunks()`

Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Applies a strict filter to the search results. The expression supports a subset of the syntax described at https://google.aip.dev/160. While `SearchDocumentChunks` returns DocumentChunks, the filter is applied to `DocumentChunk.document` fields. Supported fields for filtering: * `data_source` (STRING): The source of the document, e.g. `docs.cloud.google.com`. See https://developers.google.com/knowledge/reference/corpus-reference for the complete list of data sources in the corpus. * `update_time` (TIMESTAMP): The timestamp of when the document was last meaningfully updated. A meaningful update is one that changes document's markdown content or metadata. * `uri` (STRING): The document URI, e.g. `https://docs.cloud.google.com/bigquery/docs/tables`. STRING fields support `=` (equals) and `!=` (not equals) operators for **exact match** on the whole string. Partial match, prefix match, and regexp match are not supported. TIMESTAMP fields support `=`, `<`, `<=`, `>`, and `>=` operators. Timestamps must be in RFC-3339 format, e.g., `"2025-01-01T00:00:00Z"`. You can combine expressions using `AND`, `OR`, and `NOT` (or `-`) logical operators. `OR` has higher precedence than `AND`. Use parentheses for explicit precedence grouping. Examples: * `data_source = "docs.cloud.google.com" OR data_source = "firebase.google.com"` * `data_source != "firebase.google.com"` * `update_time < "2024-01-01T00:00:00Z"` * `update_time >= "2025-01-22T00:00:00Z" AND (data_source = "developer.chrome.com" OR data_source = "web.dev")` * `uri = "https://docs.cloud.google.com/release-notes"` The `filter` string must not exceed 500 characters; values longer than 500 characters will result in an `INVALID_ARGUMENT` error. |
| `params.query` | `string` | No | Required. Provides the raw query string provided by the user, such as "How to create a Cloud Storage bucket?". |
| `params.pageSize` | `integer` | No | Optional. Specifies the maximum number of results to return. The service may return fewer than this value. If unspecified, at most 5 results will be returned. The maximum value is 20; values above 20 will result in an INVALID_ARGUMENT error. |
| `params.pageToken` | `string` | No | Optional. Contains a page token, received from a previous `SearchDocumentChunks` call. Provide this to retrieve the subsequent page. |

#### `documents.get()`

Retrieves a single document with its full Markdown content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Specifies the name of the document to retrieve. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` |
| `params.view` | `string` | No | Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.GetDocument defaults to `DOCUMENT_VIEW_CONTENT`. |

#### `documents.batchGet()`

Retrieves multiple documents, each with its full Markdown content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.names` | `string` | No | Required. Specifies the names of the documents to retrieve. A maximum of 20 documents can be retrieved in a batch. The documents are returned in the same order as the `names` in the request. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` |
| `params.view` | `string` | No | Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.BatchGetDocuments defaults to `DOCUMENT_VIEW_CONTENT`. |

### `v1alpha`

#### `v1alpha.answerQuery()`

Answers a query using grounded generation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |