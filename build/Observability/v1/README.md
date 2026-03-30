# Observability API - Apps Script Client Library

Auto-generated client library for using the **Observability API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 30 Mar 2026 20:31:25 GMT
- **Last Modified:** Wed, 18 Mar 2026 21:58:15 GMT
- **Created:** Sun, 20 Jul 2025 16:44:22 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getSettings()`

Get Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" |

#### `projects.locations.updateSettings()`

Update Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the settings. |
| `params.updateMask` | `string` | No | Optional. The field mask specifying which fields of the settings are to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.scopes`

#### `projects.locations.scopes.get()`

Gets details of a single Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. |

#### `projects.locations.scopes.patch()`

Updates the parameters of a single Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Scope resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten when it is in the mask. If the user does not provide a mask, then all fields present in the request are overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.buckets`

#### `projects.locations.buckets.get()`

Get bucket resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the bucket to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID] |

#### `projects.locations.buckets.list()`

List buckets of a project in a particular location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of buckets. The format is: projects/[PROJECT_ID]/locations/[LOCATION] |
| `params.pageSize` | `integer` | No | Optional. The maximum number of buckets to return. If unspecified, then at most 100 buckets are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Optional. If true, then the response will include deleted buckets. |

### `projects.locations.buckets.datasets`

#### `projects.locations.buckets.datasets.get()`

Get a dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the dataset to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] |

#### `projects.locations.buckets.datasets.list()`

List datasets of a bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent bucket that owns this collection of datasets. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID] |
| `params.pageSize` | `integer` | No | Optional. The maximum number of datasets to return. If unspecified, then at most 100 datasets are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDatasets` call. Provide this to retrieve the subsequent page. |
| `params.showDeleted` | `boolean` | No | Optional. If true, then the response will include deleted datasets. |

### `projects.locations.buckets.datasets.views`

#### `projects.locations.buckets.datasets.views.get()`

Get a view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the view to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/views/[VIEW_ID] |

#### `projects.locations.buckets.datasets.views.list()`

List views of a dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Dataset whose views are to be listed. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] |
| `params.pageSize` | `integer` | No | Optional. The maximum number of views to return. If unspecified, then at most 100 views are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListViews` call. Provide this to retrieve the subsequent page. |

### `projects.locations.buckets.datasets.links`

#### `projects.locations.buckets.datasets.links.get()`

Get a link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the link to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] |

#### `projects.locations.buckets.datasets.links.list()`

List links of a dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent dataset that owns this collection of links. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] |
| `params.pageSize` | `integer` | No | Optional. The maximum number of links to return. If unspecified, then at most 100 links are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLinks` call. Provide this to retrieve the subsequent page. |

#### `projects.locations.buckets.datasets.links.create()`

Create a new link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the containing dataset for this link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] |
| `params.linkId` | `string` | No | Required. Id of the link to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.buckets.datasets.links.patch()`

Update a link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.buckets.datasets.links.delete()`

Delete a link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the link to delete. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] |

### `projects.locations.traceScopes`

#### `projects.locations.traceScopes.get()`

Get TraceScope resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the trace scope: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope |

#### `projects.locations.traceScopes.list()`

List TraceScopes of a project in a particular location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The full resource name of the location to look for trace scopes: projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `projects.locations.traceScopes.create()`

Create a new TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The full resource name of the location where the trace scope should be created projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global |
| `params.traceScopeId` | `string` | No | Required. A client-assigned identifier for the trace scope. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.traceScopes.patch()`

Update a TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.traceScopes.delete()`

Delete a TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the trace scope to delete: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope |

### `folders`

### `folders.locations`

#### `folders.locations.getSettings()`

Get Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" |

#### `folders.locations.updateSettings()`

Update Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the settings. |
| `params.updateMask` | `string` | No | Optional. The field mask specifying which fields of the settings are to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `folders.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `folders.locations.operations`

#### `folders.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `folders.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `folders.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `folders.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

#### `organizations.locations.getSettings()`

Get Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" |

#### `organizations.locations.updateSettings()`

Update Settings

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the settings. |
| `params.updateMask` | `string` | No | Optional. The field mask specifying which fields of the settings are to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `organizations.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |