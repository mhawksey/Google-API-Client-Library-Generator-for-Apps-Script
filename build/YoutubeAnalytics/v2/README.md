# YouTube Analytics API - Apps Script Client Library

Auto-generated client library for using the **YouTube Analytics API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:57:06 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:57:06 GMT
- **Created:** Sun, 20 Jul 2025 17:03:34 GMT



---

## API Reference

### `groups`

#### `groups.insert()`

Creates a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.list()`

Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.id` | `string` | No | The `id` parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. Each group must be owned by the authenticated user. In a `group` resource, the `id` property specifies the group's YouTube group ID. Note that if you do not specify a value for the `id` parameter, then you must set the `mine` parameter to `true`. |
| `params.mine` | `boolean` | No | This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve all groups owned by the authenticated user. |
| `params.pageToken` | `string` | No | The `pageToken` parameter identifies a specific page in the result set that should be returned. In an API response, the `nextPageToken` property identifies the next page that can be retrieved. |

#### `groups.update()`

Modifies a group. For example, you could change a group's title.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.delete()`

Deletes a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.id` | `string` | No | The `id` parameter specifies the YouTube group ID of the group that is being deleted. |

### `groupItems`

#### `groupItems.insert()`

Creates a group item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `groupItems.list()`

Returns a collection of group items that match the API request parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.groupId` | `string` | No | The `groupId` parameter specifies the unique ID of the group for which you want to retrieve group items. |

#### `groupItems.delete()`

Removes an item from a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.id` | `string` | No | The `id` parameter specifies the YouTube group item ID of the group item that is being deleted. |

### `reports`

#### `reports.query()`

Retrieve your YouTube Analytics reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ids` | `string` | No | Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the `ids` parameter value to `channel==CHANNEL_ID`, where `CHANNEL_ID` specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the `ids` parameter value to `contentOwner==OWNER_NAME`, where `OWNER_NAME` is the CMS name of the content owner. required: true, pattern: [a-zA-Z]+==[a-zA-Z0-9_+-]+ |
| `params.startDate` | `string` | No | The start date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2} |
| `params.endDate` | `string` | No | The end date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: [0-9]{4}-[0-9]{2}-[0-9]{2} |
| `params.metrics` | `string` | No | A comma-separated list of YouTube Analytics metrics, such as `views` or `likes,dislikes`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the metrics available in each report, and see the [Metrics](/youtube/analytics/v2/dimsmets/mets) document for definitions of those metrics. required: true, pattern: [0-9a-zA-Z,]+ |
| `params.dimensions` | `string` | No | A comma-separated list of YouTube Analytics dimensions, such as `views` or `ageGroup,gender`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document for definitions of those dimensions." pattern: [0-9a-zA-Z,]+ |
| `params.currency` | `string` | No | The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.", pattern: [A-Z]{3} |
| `params.filters` | `string` | No | A list of filters that should be applied when retrieving YouTube Analytics data. The [Available Reports](/youtube/analytics/v2/available_reports) document identifies the dimensions that can be used to filter each report, and the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (`;`), and the returned result table will satisfy both filters. For example, a filters parameter value of `video==dMH0bHeiRNg;country==IT` restricts the result set to include data for the given video in Italy.", |
| `params.includeHistoricalChannelData` | `boolean` | No | If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.", |
| `params.maxResults` | `integer` | No | The maximum number of rows to include in the response.", minValue: 1 |
| `params.sort` | `string` | No | A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '`-`' prefix causes descending sort order.", pattern: [-0-9a-zA-Z,]+ |
| `params.startIndex` | `integer` | No | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).", minValue: 1 |