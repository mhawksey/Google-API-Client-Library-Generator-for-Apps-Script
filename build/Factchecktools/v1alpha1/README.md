# Fact Check Tools API - Apps Script Client Library

Auto-generated client library for using the **Fact Check Tools API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:14:56 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:14:56 GMT
- **Created:** Sun, 20 Jul 2025 16:32:52 GMT



---

## API Reference

### `claims`

#### `claims.search()`

Search through fact-checked claims.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | Textual query string. Required unless `review_publisher_site_filter` is specified. |
| `params.languageCode` | `string` | No | The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region. |
| `params.reviewPublisherSiteFilter` | `string` | No | The review publisher site to filter results by, e.g. nytimes.com. |
| `params.maxAgeDays` | `integer` | No | The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer. |
| `params.pageSize` | `integer` | No | The pagination size. We will return up to that many results. Defaults to 10 if not set. |
| `params.pageToken` | `string` | No | The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request. |
| `params.offset` | `integer` | No | An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result. |

#### `claims.imageSearch()`

Search through fact-checked claims using an image as the query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.imageUri` | `string` | No | Required. The URI of the source image. This must be a publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. |
| `params.languageCode` | `string` | No | Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region. |
| `params.pageSize` | `integer` | No | Optional. The pagination size. We will return up to that many results. Defaults to 10 if not set. |
| `params.pageToken` | `string` | No | Optional. The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request. |
| `params.offset` | `integer` | No | Optional. An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result. |

### `pages`

#### `pages.create()`

Create `ClaimReview` markup on a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `pages.get()`

Get all `ClaimReview` markup on a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the resource to get, in the form of `pages/{page_id}`. |

#### `pages.list()`

List the `ClaimReview` markup pages for a specific URL or for an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.url` | `string` | No | The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization. |
| `params.organization` | `string` | No | The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL. |
| `params.pageSize` | `integer` | No | The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested. |
| `params.pageToken` | `string` | No | The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request. |
| `params.offset` | `integer` | No | An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result. |

#### `pages.update()`

Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user. |
| `params.resource` | `object` | Yes | The request body. |

#### `pages.delete()`

Delete all `ClaimReview` markup on a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the resource to delete, in the form of `pages/{page_id}`. |