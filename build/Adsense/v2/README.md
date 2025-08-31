# AdSense Management API - Apps Script Client Library

Auto-generated client library for using the **AdSense Management API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:21:12 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:50:54 GMT
- **Created:** Sun, 20 Jul 2025 16:11:08 GMT



---

## API Reference

### `accounts`

#### `accounts.get()`

Gets information about the selected AdSense account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Account to get information about. Format: accounts/{account} |

#### `accounts.list()`

Lists all accounts available to this user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token. |

#### `accounts.listChildAccounts()`

Lists all accounts directly managed by the given AdSense account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account, which owns the child accounts. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token. |

#### `accounts.getAdBlockingRecoveryTag()`

Gets the ad blocking recovery tag of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to get the tag for. Format: accounts/{account} |

### `accounts.adclients`

#### `accounts.adclients.list()`

Lists all the ad clients available in an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the collection of ad clients. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of ad clients to include in the response, used for paging. If unspecified, at most 10000 ad clients will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAdClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdClients` must match the call that provided the page token. |

#### `accounts.adclients.get()`

Gets the ad client from the given resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ad client to retrieve. Format: accounts/{account}/adclients/{adclient} |

#### `accounts.adclients.getAdcode()`

Gets the AdSense code for a given ad client. This returns what was previously known as the 'auto ad code'. This is only supported for ad clients with a product_code of AFC. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the ad client for which to get the adcode. Format: accounts/{account}/adclients/{adclient} |

### `accounts.adclients.adunits`

#### `accounts.adclients.adunits.get()`

Gets an ad unit from a specified account and ad client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. AdUnit to get information about. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit} |

#### `accounts.adclients.adunits.list()`

Lists all ad units under a specified account and ad client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ad client which owns the collection of ad units. Format: accounts/{account}/adclients/{adclient} |
| `params.pageSize` | `integer` | No | The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdUnits` must match the call that provided the page token. |

#### `accounts.adclients.adunits.getAdcode()`

Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the adunit for which to get the adcode. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit} |

#### `accounts.adclients.adunits.create()`

Creates an ad unit. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Ad client to create an ad unit under. Format: accounts/{account}/adclients/{adclient} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.adclients.adunits.patch()`

Updates an ad unit. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method. For now, this method can only be used to update `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the ad unit. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit} |
| `params.updateMask` | `string` | No | The list of fields to update. If empty, a full update is performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.adclients.adunits.listLinkedCustomChannels()`

Lists all the custom channels available for an ad unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ad unit which owns the collection of custom channels. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit} |
| `params.pageSize` | `integer` | No | The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListLinkedCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedCustomChannels` must match the call that provided the page token. |

### `accounts.adclients.customchannels`

#### `accounts.adclients.customchannels.listLinkedAdUnits()`

Lists all the ad units available for a custom channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The custom channel which owns the collection of ad units. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel} |
| `params.pageSize` | `integer` | No | The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListLinkedAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedAdUnits` must match the call that provided the page token. |

#### `accounts.adclients.customchannels.get()`

Gets information about the selected custom channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel} |

#### `accounts.adclients.customchannels.list()`

Lists all the custom channels available in an ad client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ad client which owns the collection of custom channels. Format: accounts/{account}/adclients/{adclient} |
| `params.pageSize` | `integer` | No | The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomChannels` must match the call that provided the page token. |

#### `accounts.adclients.customchannels.create()`

Creates a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ad client to create a custom channel under. Format: accounts/{account}/adclients/{adclient} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.adclients.customchannels.patch()`

Updates a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel} |
| `params.updateMask` | `string` | No | The list of fields to update. If empty, a full update is performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.adclients.customchannels.delete()`

Deletes a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the custom channel to delete. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel} |

### `accounts.adclients.urlchannels`

#### `accounts.adclients.urlchannels.get()`

Gets information about the selected url channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the url channel to retrieve. Format: accounts/{account}/adclients/{adclient}/urlchannels/{urlchannel} |

#### `accounts.adclients.urlchannels.list()`

Lists active url channels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ad client which owns the collection of url channels. Format: accounts/{account}/adclients/{adclient} |
| `params.pageSize` | `integer` | No | The maximum number of url channels to include in the response, used for paging. If unspecified, at most 10000 url channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListUrlChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUrlChannels` must match the call that provided the page token. |

### `accounts.alerts`

#### `accounts.alerts.list()`

Lists all the alerts available in an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the collection of alerts. Format: accounts/{account} |
| `params.languageCode` | `string` | No | The language to use for translating alert messages. If unspecified, this defaults to the user's display language. If the given language is not supported, alerts will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag). |

### `accounts.payments`

#### `accounts.payments.list()`

Lists all the payments available for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the collection of payments. Format: accounts/{account} |

### `accounts.policyIssues`

#### `accounts.policyIssues.get()`

Gets information about the selected policy issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the policy issue. Format: accounts/{account}/policyIssues/{policy_issue} |

#### `accounts.policyIssues.list()`

Lists all the policy issues where the specified account is involved, both directly and through any AFP child accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account for which policy issues are being retrieved. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of policy issues to include in the response, used for paging. If unspecified, at most 10000 policy issues will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListPolicyIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPolicyIssues` must match the call that provided the page token. |

### `accounts.reports`

#### `accounts.reports.getSaved()`

Gets the saved report from the given resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the saved report to retrieve. Format: accounts/{account}/reports/{report} |

#### `accounts.reports.generate()`

Generates an ad hoc report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.account` | `string` | Yes | Required. The account which owns the collection of reports. Format: accounts/{account} |
| `params.dimensions` | `string` | No | Dimensions to base the report on. |
| `params.metrics` | `string` | No | Required. Reporting metrics. |
| `params.filters` | `string` | No | A list of [filters](/adsense/management/reporting/filtering) to apply to the report. All provided filters must match in order for the data to be included in the report. |
| `params.dateRange` | `string` | No | Date range of the report, if unset the range will be considered CUSTOM. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.orderBy` | `string` | No | The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending. |
| `params.languageCode` | `string` | No | The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag). |
| `params.currencyCode` | `string` | No | The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set. |
| `params.limit` | `integer` | No | The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`. |
| `params.reportingTimeZone` | `string` | No | Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725). |

#### `accounts.reports.generateCsv()`

Generates a csv formatted ad hoc report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.account` | `string` | Yes | Required. The account which owns the collection of reports. Format: accounts/{account} |
| `params.dimensions` | `string` | No | Dimensions to base the report on. |
| `params.metrics` | `string` | No | Required. Reporting metrics. |
| `params.filters` | `string` | No | A list of [filters](/adsense/management/reporting/filtering) to apply to the report. All provided filters must match in order for the data to be included in the report. |
| `params.dateRange` | `string` | No | Date range of the report, if unset the range will be considered CUSTOM. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.orderBy` | `string` | No | The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending. |
| `params.languageCode` | `string` | No | The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag). |
| `params.currencyCode` | `string` | No | The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set. |
| `params.limit` | `integer` | No | The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`. |
| `params.reportingTimeZone` | `string` | No | Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725). |

### `accounts.reports.saved`

#### `accounts.reports.saved.generate()`

Generates a saved report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the saved report. Format: accounts/{account}/reports/{report} |
| `params.dateRange` | `string` | No | Date range of the report, if unset the range will be considered CUSTOM. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.languageCode` | `string` | No | The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag). |
| `params.currencyCode` | `string` | No | The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set. |
| `params.reportingTimeZone` | `string` | No | Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725). |

#### `accounts.reports.saved.generateCsv()`

Generates a csv formatted saved report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the saved report. Format: accounts/{account}/reports/{report} |
| `params.dateRange` | `string` | No | Date range of the report, if unset the range will be considered CUSTOM. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.languageCode` | `string` | No | The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag). |
| `params.currencyCode` | `string` | No | The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set. |
| `params.reportingTimeZone` | `string` | No | Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725). |

#### `accounts.reports.saved.list()`

Lists saved reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the collection of reports. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of reports to include in the response, used for paging. If unspecified, at most 10000 reports will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSavedReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSavedReports` must match the call that provided the page token. |

### `accounts.sites`

#### `accounts.sites.get()`

Gets information about the selected site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the site. Format: accounts/{account}/sites/{site} |

#### `accounts.sites.list()`

Lists all the sites available in an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account which owns the collection of sites. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token. |