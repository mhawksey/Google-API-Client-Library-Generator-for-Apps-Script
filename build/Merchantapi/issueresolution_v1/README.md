# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: issueresolution_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:34:37 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:34:37 GMT
- **Created:** Sun, 31 Aug 2025 23:43:36 GMT



---

## API Reference

### `accounts`

### `accounts.aggregateProductStatuses`

#### `accounts.aggregateProductStatuses.list()`

Lists the `AggregateProductStatuses` resources for your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list aggregate product statuses for. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of aggregate product statuses to return. The service may return fewer than this value. If unspecified, at most 25 aggregate product statuses are returned. The maximum value is 250; values above 250 are coerced to 250. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAggregateProductStatuses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAggregateProductStatuses` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A filter expression that filters the aggregate product statuses. Filtering is only supported by the `reporting_context` and `country` field. For example: `reporting_context = "SHOPPING_ADS" AND country = "US"`. |

### `issueresolution`

#### `issueresolution.renderaccountissues()`

Provide a list of business's account issues with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The account to fetch issues for. Format: `accounts/{account}` |
| `params.languageCode` | `string` | No | Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize issue resolution content. If not set, the result will be in default language `en-US`. |
| `params.timeZone` | `string` | No | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `issueresolution.renderproductissues()`

Provide a list of issues for business's product with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the product to fetch issues for. Format: `accounts/{account}/products/{product}` |
| `params.languageCode` | `string` | No | Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize an issue resolution content. If not set, the result will be in default language `en-US`. |
| `params.timeZone` | `string` | No | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `issueresolution.triggeraction()`

Start an action. The action can be requested by a business in third-party application. Before the business can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The business's account that is triggering the action. Format: `accounts/{account}` |
| `params.languageCode` | `string` | No | Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`. |
| `params.requestBody` | `object` | Yes | The request body. |