# Cloud Asset API - Apps Script Client Library

Auto-generated client library for using the **Cloud Asset API (version: v1p5beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:24:21 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:01:09 GMT
- **Created:** Sun, 20 Jul 2025 16:20:58 GMT



---

## API Reference

### `assets`

#### `assets.list()`

Lists assets with time and resource types and returns paged results in response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the organization or project the assets belong to. Format: "organizations/[organization-number]" (such as "organizations/123"), "projects/[project-id]" (such as "projects/my-project-id"), or "projects/[project-number]" (such as "projects/12345"). |
| `params.readTime` | `string` | No | Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. |
| `params.assetTypes` | `string` | No | A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk". Regular expression is also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types. |
| `params.contentType` | `string` | No | Asset content type. If not specified, no content but the asset name will be returned. |
| `params.pageSize` | `integer` | No | The maximum number of assets to be returned in a single response. Default is 100, minimum is 1, and maximum is 1000. |
| `params.pageToken` | `string` | No | The `next_page_token` returned from the previous `ListAssetsResponse`, or unspecified for the first `ListAssetsRequest`. It is a continuation of a prior `ListAssets` call, and the API should return the next page of assets. |