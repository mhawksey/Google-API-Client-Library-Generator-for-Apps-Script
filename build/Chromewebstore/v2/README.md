# Chrome Web Store API - Apps Script Client Library

Auto-generated client library for using the **Chrome Web Store API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:38:46 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:38:46 GMT
- **Created:** Sat, 01 Nov 2025 00:25:41 GMT



---

## API Reference

### `publishers`

### `publishers.items`

#### `publishers.items.rollback()`

Rolls back an item's published CRX package to a specified previously published CRX package and publishes it to all users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to rollback in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.setPublishedDeployPercentage()`

Set a higher target deploy percentage for the item's published revision. This will be updated without the item being submitted for review. This is only available to items with over 10,000 seven-day active users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to update the published revision of in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.publish()`

Submit the item to be published in the store. The item will be submitted for review unless `skip_review` is set to true, or the item is staged from a previous submission with `publish_type` set to `STAGED_PUBLISH`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.cancelSubmission()`

Cancel the current active submission of an item if present. This can be used to cancel the review of a pending submission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to cancel the submission of in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `publishers.items.fetchStatus()`

Fetch the status of an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to retrieve the status of in the form `publishers/{publisherId}/items/{itemId}` |

#### `publishers.items.getRatingSummary()`

Gets the RatingSummary for the publishers item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rating summary to retrieve. Format: publishers/{publisher}/items/{item}/ratingSummary |

#### `publishers.items.queryMetrics()`

Query the metrics for an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.timeSpec.firstDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.timeSpec.lastDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.metrics` | `string` | No | Required. The metrics to query the metric set for. **Supported metrics:** - installs: Count of item installs. - installs-7d: Count of item installs in the last 7 days. - uninstalls: Count of item uninstalls. - users: Count of daily active users of the item. - users-7d: Count of 7-day active users of the item. - impressions: Count of item impressions across the entire store front. - page-views: Count of individual views of the item's detail page. |
| `params.timeSpec.lastDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. |
| `params.timeSpec.firstDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.timeSpec.lastDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.timeSpec.firstDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.name` | `string` | Yes | Required. The name of the item to query the metrics for. Format: publishers/{publisher}/items/{item} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of rows to return. If unspecified, at most 100 rows will be returned. The maximum value is 1000; Values above 1000 will be coerced to 1000. |
| `params.dimensions` | `string` | No | Optional. Dimensions to slice the metrics by. At most one dimension can be specified. **Supported dimensions:** - os: The operating system of the user. - app-version: The version of the item. - country: The country of the user. - install-source: The source of the install. - install-type: The type of install (from webstore, inline, or other). - language: The language of the user. - enabled: If the item is enabled or disabled. - utm-campaign: The UTM campaign of the user. - utm-content: The UTM content of the user. - utm-medium: The UTM medium of the user. - utm-source: The UTM source of the user. - utm-term: The UTM term of the user. |

#### `publishers.items.fetchReviews()`

Fetch user reviews for an item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of reviews to return. The service may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 200; values above 200 will be coerced to 200. |
| `params.name` | `string` | Yes | Required. The item resource name whose reviews are being fetched. Format: publishers/{publisher_id}/items/{item_id} |
| `params.filter` | `string` | No | Optional. A filter to apply to the reviews. Only equality comparison on rating is supported, e.g. `rating = 5`. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FetchItemReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchItemReviews` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. An optional comma-separated list of fields by which to sort the results. The default sort order is ascending (`asc`). Supported fields are: - `rating`: Supported orders are `asc` (default) and `desc`. - `create_time`: Only `desc` (most recent first) is supported; `desc` must be explicitly specified since the default is `asc`. Example: `rating desc`, `create_time desc`, or `rating desc, create_time desc`. |

### `media`

#### `media.upload()`

Upload a new package to an existing item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the item to upload the new package to in the form `publishers/{publisherId}/items/{itemId}` |
| `params.requestBody` | `object` | Yes | The request body. |