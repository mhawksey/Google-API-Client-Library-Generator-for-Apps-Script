# BigQuery Data Transfer API - Apps Script Client Library

Auto-generated client library for using the **BigQuery Data Transfer API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:05 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:17 GMT
- **Created:** Sun, 20 Jul 2025 16:14:15 GMT



---

## API Reference

### `projects`

#### `projects.enrollDataSources()`

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project resource in the form: `projects/{project_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.dataSources`

#### `projects.dataSources.get()`

Retrieves a supported data source and returns its settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` |

#### `projects.dataSources.list()`

Lists supported data sources and returns their settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}` |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |

#### `projects.dataSources.checkValidCreds()`

Returns true if valid credentials exist for the given data source and requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.transferConfigs`

#### `projects.transferConfigs.create()`

Creates a new data transfer configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail. |
| `params.authorizationCode` | `string` | No | Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. |
| `params.versionInfo` | `string` | No | Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. |
| `params.serviceAccountName` | `string` | No | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.transferConfigs.patch()`

Updates a data transfer configuration. All fields must be set, even if they are not updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. |
| `params.authorizationCode` | `string` | No | Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. |
| `params.updateMask` | `string` | No | Required. Required list of fields to be updated in this request. |
| `params.versionInfo` | `string` | No | Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. |
| `params.serviceAccountName` | `string` | No | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.transferConfigs.delete()`

Deletes a data transfer configuration, including any associated transfer runs and logs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |

#### `projects.transferConfigs.get()`

Returns information about a data transfer config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |

#### `projects.transferConfigs.list()`

Returns information about all transfer configs owned by a project in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}` |
| `params.dataSourceIds` | `string` | No | When specified, only configurations of requested data sources are returned. |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |

#### `projects.transferConfigs.scheduleRuns()`

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.transferConfigs.startManualRuns()`

Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.transferConfigs.runs`

#### `projects.transferConfigs.runs.get()`

Returns information about the particular transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |

#### `projects.transferConfigs.runs.delete()`

Deletes the specified transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |

#### `projects.transferConfigs.runs.list()`

Returns information about running and completed transfer runs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.states` | `string` | No | When specified, only transfer runs with requested states are returned. |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |
| `params.runAttempt` | `string` | No | Indicates how run attempts are to be pulled. |

### `projects.transferConfigs.runs.transferLogs`

#### `projects.transferConfigs.runs.transferLogs.list()`

Returns log messages for the transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |
| `params.messageTypes` | `string` | No | Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. |

### `projects.locations`

#### `projects.locations.enrollDataSources()`

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project resource in the form: `projects/{project_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.unenrollDataSources()`

Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project resource in the form: `projects/{project_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.dataSources`

#### `projects.locations.dataSources.get()`

Retrieves a supported data source and returns its settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` |

#### `projects.locations.dataSources.list()`

Lists supported data sources and returns their settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}` |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |

#### `projects.locations.dataSources.checkValidCreds()`

Returns true if valid credentials exist for the given data source and requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.transferConfigs`

#### `projects.locations.transferConfigs.create()`

Creates a new data transfer configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail. |
| `params.authorizationCode` | `string` | No | Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. |
| `params.versionInfo` | `string` | No | Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. |
| `params.serviceAccountName` | `string` | No | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.transferConfigs.patch()`

Updates a data transfer configuration. All fields must be set, even if they are not updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. |
| `params.authorizationCode` | `string` | No | Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. |
| `params.updateMask` | `string` | No | Required. Required list of fields to be updated in this request. |
| `params.versionInfo` | `string` | No | Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. |
| `params.serviceAccountName` | `string` | No | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.transferConfigs.delete()`

Deletes a data transfer configuration, including any associated transfer runs and logs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |

#### `projects.locations.transferConfigs.get()`

Returns information about a data transfer config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |

#### `projects.locations.transferConfigs.list()`

Returns information about all transfer configs owned by a project in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}` |
| `params.dataSourceIds` | `string` | No | When specified, only configurations of requested data sources are returned. |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |

#### `projects.locations.transferConfigs.scheduleRuns()`

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.transferConfigs.startManualRuns()`

Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.transferConfigs.runs`

#### `projects.locations.transferConfigs.runs.get()`

Returns information about the particular transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |

#### `projects.locations.transferConfigs.runs.delete()`

Deletes the specified transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |

#### `projects.locations.transferConfigs.runs.list()`

Returns information about running and completed transfer runs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` |
| `params.states` | `string` | No | When specified, only transfer runs with requested states are returned. |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |
| `params.runAttempt` | `string` | No | Indicates how run attempts are to be pulled. |

### `projects.locations.transferConfigs.runs.transferLogs`

#### `projects.locations.transferConfigs.runs.transferLogs.list()`

Returns log messages for the transfer run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` |
| `params.pageToken` | `string` | No | Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. |
| `params.pageSize` | `integer` | No | Page size. The default page size is the maximum value of 1000 results. |
| `params.messageTypes` | `string` | No | Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. |