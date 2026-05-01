# Storage Batch Operations API - Apps Script Client Library

Auto-generated client library for using the **Storage Batch Operations API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:35:00 GMT
- **Last Modified:** Fri, 01 May 2026 00:35:00 GMT
- **Created:** Sun, 20 Jul 2025 16:55:12 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

### `projects.locations.operations`

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.filter` | `string` | No | The standard list filter. |

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

### `projects.locations.jobs`

#### `projects.locations.jobs.cancel()`

Cancels a batch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` of the job to cancel. Format: projects/{project_id}/locations/global/jobs/{job_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.list()`

Lists Jobs in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The list page token. |
| `params.pageSize` | `integer` | No | Optional. The list page size. default page size is 100. |
| `params.filter` | `string` | No | Optional. Filters results as defined by https://google.aip.dev/160. |
| `params.parent` | `string` | Yes | Required. Format: projects/{project_id}/locations/global. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Supported fields are name, create_time. |

#### `projects.locations.jobs.delete()`

Deletes a batch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` of the job to delete. Format: projects/{project_id}/locations/global/jobs/{job_id} . |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, any child bucket operations of the job will also be deleted. Highly recommended to be set to true by all clients. Users cannot mutate bucket operations directly, so only the jobs.delete permission is required to delete a job (and its child bucket operations). |

#### `projects.locations.jobs.get()`

Gets a batch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `name` of the job to retrieve. Format: projects/{project_id}/locations/global/jobs/{job_id} . |

#### `projects.locations.jobs.create()`

Creates a batch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.jobId` | `string` | No | Required. The optional `job_id` for this Job . If not specified, an id is generated. `job_id` should be no more than 128 characters and must include only characters available in DNS names, as defined by RFC-1123. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` will be ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.jobs.bucketOperations`

#### `projects.locations.jobs.bucketOperations.get()`

Gets a BucketOperation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `name` of the bucket operation to retrieve. Format: projects/{project_id}/locations/global/jobs/{job_id}/bucketOperations/{bucket_operation_id}. |

#### `projects.locations.jobs.bucketOperations.list()`

Lists BucketOperations in a given project and job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The list page token. |
| `params.pageSize` | `integer` | No | Optional. The list page size. Default page size is 100. |
| `params.filter` | `string` | No | Optional. Filters results as defined by https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Supported fields are name, create_time. |
| `params.parent` | `string` | Yes | Required. Format: projects/{project_id}/locations/global/jobs/{job_id}. |