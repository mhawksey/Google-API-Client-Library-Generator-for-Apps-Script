# Business Profile Performance API - Apps Script Client Library

Auto-generated client library for using the **Business Profile Performance API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:54:58 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:54:58 GMT
- **Created:** Sun, 20 Jul 2025 16:14:53 GMT



---

## API Reference

### `locations`

#### `locations.getDailyMetricsTimeSeries()`

 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. |
| `params.dailyMetric` | `string` | No | Required. The metric to retrieve time series. |
| `params.dailyRange.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.dailyRange.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.dailyRange.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.dailyRange.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.dailyRange.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.dailyRange.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.dailySubEntityType.dayOfWeek` | `string` | No | Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. |
| `params.dailySubEntityType.timeOfDay.hours` | `integer` | No | Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `params.dailySubEntityType.timeOfDay.minutes` | `integer` | No | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| `params.dailySubEntityType.timeOfDay.seconds` | `integer` | No | Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. |
| `params.dailySubEntityType.timeOfDay.nanos` | `integer` | No | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |

#### `locations.fetchMultiDailyMetricsTimeSeries()`

 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. |
| `params.dailyMetrics` | `string` | No | Required. The metrics to retrieve time series for. |
| `params.dailyRange.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.dailyRange.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.dailyRange.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.dailyRange.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.dailyRange.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.dailyRange.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |

### `locations.searchkeywords`

### `locations.searchkeywords.impressions`

### `locations.searchkeywords.impressions.monthly`

#### `locations.searchkeywords.impressions.monthly.list()`

Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. |
| `params.monthlyRange.startMonth.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.monthlyRange.startMonth.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.monthlyRange.startMonth.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.monthlyRange.endMonth.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.monthlyRange.endMonth.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.monthlyRange.endMonth.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.pageSize` | `integer` | No | Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100. |
| `params.pageToken` | `string` | No | Optional. A token indicating the next paginated result to be returned. |