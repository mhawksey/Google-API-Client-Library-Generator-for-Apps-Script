# API Management API - Apps Script Client Library

Auto-generated client library for using the **API Management API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:34:31 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:23 GMT
- **Created:** Sun, 20 Jul 2025 16:12:47 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.listApiObservationTags()`

ListApiObservationTags lists all extant tags on any observation in the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of tags. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of tags to return. The service may return fewer than this value. If unspecified, at most 10 tags will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListApiObservationTags` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservationTags` must match the call that provided the page token. |

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

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.observationSources`

#### `projects.locations.observationSources.create()`

CreateObservationSource creates a new ObservationSource but does not affect any deployed infrastructure. It is a configuration that can be used in an Observation Job to collect data about APIs running in user's dataplane.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.observationSourceId` | `string` | No | Required. The ID to use for the Observation Source. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.observationSources.get()`

GetObservationSource retrieves a single ObservationSource by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ObservationSource to retrieve. Format: projects/{project}/locations/{location}/observationSources/{source} |

#### `projects.locations.observationSources.list()`

ListObservationSources gets all ObservationSources for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of ObservationSources. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of ObservationSources to return. The service may return fewer than this value. If unspecified, at most 10 ObservationSources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListObservationSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationSources` must match the call that provided the page token. |

#### `projects.locations.observationSources.delete()`

DeleteObservationSource deletes an observation source. This method will fail if the observation source is currently being used by any ObservationJob, even if not enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource Format: projects/{project}/locations/{location}/observationSources/{source} |

### `projects.locations.observationJobs`

#### `projects.locations.observationJobs.create()`

CreateObservationJob creates a new ObservationJob but does not have any effecton its own. It is a configuration that can be used in an Observation Job to collect data about existing APIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this ObservationJob will be created. Format: projects/{project}/locations/{location} |
| `params.observationJobId` | `string` | No | Required. The ID to use for the Observation Job. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.observationJobs.get()`

GetObservationJob retrieves a single ObservationJob by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ObservationJob to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{job} |

#### `projects.locations.observationJobs.list()`

ListObservationJobs gets all ObservationJobs for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of ObservationJobs. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of ObservationJobs to return. The service may return fewer than this value. If unspecified, at most 10 ObservationJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListObservationJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationJobs` must match the call that provided the page token. |

#### `projects.locations.observationJobs.delete()`

DeleteObservationJob deletes an ObservationJob. This method will fail if the observation job is currently being used by any ObservationSource, even if not enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource Format: projects/{project}/locations/{location}/observationJobs/{observation_job} |

#### `projects.locations.observationJobs.enable()`

Enables the given ObservationJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ObservationJob to enable. Format: projects/{project}/locations/{location}/observationJobs/{job} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.observationJobs.disable()`

Disables the given ObservationJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ObservationJob to disable. Format: projects/{project}/locations/{location}/observationJobs/{job} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.observationJobs.apiObservations`

#### `projects.locations.observationJobs.apiObservations.get()`

GetApiObservation retrieves a single ApiObservation by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ApiObservation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation} |

#### `projects.locations.observationJobs.apiObservations.list()`

ListApiObservations gets all ApiObservations for a given project and location and ObservationJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of ApiObservations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListApiObservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservations` must match the call that provided the page token. |

#### `projects.locations.observationJobs.apiObservations.batchEditTags()`

BatchEditTagsApiObservations adds or removes Tags for ApiObservations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all ApiObservations being edited. Format: projects/{project}/locations/{location}/observationJobs/{observation_job} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.observationJobs.apiObservations.apiOperations`

#### `projects.locations.observationJobs.apiObservations.apiOperations.get()`

GetApiOperation retrieves a single ApiOperation by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ApiOperation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation}/apiOperation/{api_operation} |

#### `projects.locations.observationJobs.apiObservations.apiOperations.list()`

ListApiOperations gets all ApiOperations for a given project and location and ObservationJob and ApiObservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of ApiOperations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of ApiOperations to return. The service may return fewer than this value. If unspecified, at most 10 ApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListApiApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiApiOperations` must match the call that provided the page token. |