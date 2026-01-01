# Search Ads 360 API - Apps Script Client Library

Auto-generated client library for using the **Search Ads 360 API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:43:40 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:43:40 GMT
- **Created:** Sun, 20 Jul 2025 16:32:30 GMT



---

## API Reference

### `reports`

#### `reports.request()`

Inserts a report request into the reporting system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `reports.generate()`

Generates and returns a report immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `reports.get()`

Polls for the status of a report request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.reportId` | `string` | Yes | ID of the report request being polled. |

#### `reports.getIdMappingFile()`

Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Legacy SA360 advertiser ID. |
| `params.agencyId` | `string` | Yes | Legacy SA360 agency ID. |

#### `reports.getFile()`

Downloads a report file encoded in UTF-8.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.reportId` | `string` | Yes | ID of the report. |
| `params.reportFragment` | `integer` | Yes | The index of the report fragment to download. |

### `savedColumns`

#### `savedColumns.list()`

Retrieve the list of saved columns for a specified advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.agencyId` | `string` | Yes | DS ID of the agency. |
| `params.advertiserId` | `string` | Yes | DS ID of the advertiser. |

### `conversion`

#### `conversion.get()`

Retrieves a list of conversions from a DoubleClick Search engine account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startRow` | `integer` | Yes | The 0-based starting index for retrieving conversions results. |
| `params.adId` | `string` | No | Numeric ID of the ad. |
| `params.engineAccountId` | `string` | Yes | Numeric ID of the engine account. |
| `params.adGroupId` | `string` | No | Numeric ID of the ad group. |
| `params.rowCount` | `integer` | Yes | The number of conversions to return per call. |
| `params.startDate` | `integer` | Yes | First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. |
| `params.endDate` | `integer` | Yes | Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. |
| `params.advertiserId` | `string` | Yes | Numeric ID of the advertiser. |
| `params.customerId` | `string` | No | Customer ID of a client account in the new Search Ads 360 experience. |
| `params.agencyId` | `string` | Yes | Numeric ID of the agency. |
| `params.criterionId` | `string` | No | Numeric ID of the criterion. |
| `params.campaignId` | `string` | No | Numeric ID of the campaign. |

#### `conversion.update()`

Updates a batch of conversions in DoubleClick Search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `conversion.updateAvailability()`

Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `conversion.getByCustomerId()`

Retrieves a list of conversions from a DoubleClick Search engine account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endDate` | `integer` | Yes | Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd. |
| `params.startDate` | `integer` | Yes | First date (inclusive) on which to retrieve conversions. Format is yyyymmdd. |
| `params.startRow` | `integer` | Yes | The 0-based starting index for retrieving conversions results. |
| `params.criterionId` | `string` | No | Numeric ID of the criterion. |
| `params.campaignId` | `string` | No | Numeric ID of the campaign. |
| `params.rowCount` | `integer` | Yes | The number of conversions to return per call. |
| `params.adGroupId` | `string` | No | Numeric ID of the ad group. |
| `params.advertiserId` | `string` | No | Numeric ID of the advertiser. |
| `params.customerId` | `string` | Yes | Customer ID of a client account in the new Search Ads 360 experience. |
| `params.agencyId` | `string` | No | Numeric ID of the agency. |
| `params.adId` | `string` | No | Numeric ID of the ad. |
| `params.engineAccountId` | `string` | No | Numeric ID of the engine account. |

#### `conversion.insert()`

Inserts a batch of new conversions into DoubleClick Search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |