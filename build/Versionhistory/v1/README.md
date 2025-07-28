# versionhistory.googleapis.com API - Apps Script Client Library

Auto-generated client library for using the **versionhistory.googleapis.com API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:08:56 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:48:03 GMT
- **Created:** Sun, 20 Jul 2025 16:56:38 GMT



---

## API Reference

### `platforms`

#### `platforms.list()`

Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The product, which owns this collection of platforms. Format: {product} |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page. |

### `platforms.channels`

#### `platforms.channels.list()`

Returns list of channels that are available for a given platform.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform} |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page. |

### `platforms.channels.versions`

#### `platforms.channels.versions.list()`

Returns list of version for the given platform/channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel} |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page. |
| `params.orderBy` | `string` | No | Optional. Ordering string. Valid order_by strings are "version", "name", "platform", and "channel". Optionally, you can append " desc" or " asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) "...?order_by=version asc" Ex) "...?order_by=platform desc, channel, version" |
| `params.filter` | `string` | No | Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", and "channel". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 |

### `platforms.channels.versions.releases`

#### `platforms.channels.versions.releases.list()`

Returns list of releases of the given version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version} |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. |
| `params.orderBy` | `string` | No | Optional. Ordering string. Valid order_by strings are "version", "name", "starttime", "endtime", "platform", "channel", and "fraction". Optionally, you can append "desc" or "asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) "...?order_by=starttime asc" Ex) "...?order_by=platform desc, channel, startime desc" |
| `params.filter` | `string` | No | Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", "channel", "fraction" "starttime", and "endtime". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 Ex) "...?filter=starttime>2020-01-01T00:00:00Z |