# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: datasources_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:57:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:41:27 GMT
- **Created:** Sun, 20 Jul 2025 16:42:33 GMT



---

## API Reference

### `accounts`

### `accounts.dataSources`

#### `accounts.dataSources.get()`

Retrieves the data source configuration for the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source to retrieve. Format: `accounts/{account}/dataSources/{datasource}` |

#### `accounts.dataSources.list()`

Lists the configurations for data sources for the given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list data sources for. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of data sources to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of data sources will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDataSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataSources` must match the call that provided the page token. |

#### `accounts.dataSources.create()`

Creates the new data source configuration for the given account. This method always creates a new data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where this data source will be created. Format: `accounts/{account}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.dataSources.patch()`

Updates the existing data source configuration. The fields that are set in the update mask but not provided in the resource will be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The name of the data source. Format: `accounts/{account}/dataSources/{datasource}` |
| `params.updateMask` | `string` | No | Required. The list of data source fields to be updated. Fields specified in the update mask without a value specified in the body will be deleted from the data source. Providing special "*" value for full data source replacement is not supported. For example, If you insert `updateMask=displayName` in the request, it will only update the `displayName` leaving all other fields untouched. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.dataSources.delete()`

Deletes a data source from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source to delete. Format: `accounts/{account}/dataSources/{datasource}` |

#### `accounts.dataSources.fetch()`

Performs the data fetch immediately (even outside fetch schedule) on a data source from your Merchant Center Account. If you need to call this method more than once per day, you should use the Products service to update your product data instead. This method only works on data sources with a file input set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source resource to fetch. Format: `accounts/{account}/dataSources/{datasource}` |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.dataSources.fileUploads`

#### `accounts.dataSources.fileUploads.get()`

Gets the latest data source file upload. Only the `latest` alias is accepted for a file upload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source file upload to retrieve. Format: `accounts/{account}/dataSources/{datasource}/fileUploads/latest` |