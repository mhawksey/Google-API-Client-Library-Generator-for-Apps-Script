# Cloud Document AI API - Apps Script Client Library

Auto-generated client library for using the **Cloud Document AI API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:33:53 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:01 GMT
- **Created:** Sun, 20 Jul 2025 16:32:17 GMT



---

## API Reference

### `projects`

### `projects.operations`

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations`

#### `projects.locations.fetchProcessorTypes()`

Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`. |

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

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.processors`

#### `projects.locations.processors.process()`

Processes a single document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.batchProcess()`

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.list()`

Lists all processors which belong to this project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of processors to return. If unspecified, at most `50` processors will be returned. The maximum value is `100`. Values above `100` will be coerced to `100`. |
| `params.pageToken` | `string` | No | We will return the processors sorted by creation time. The page token will point to the next processor. |

#### `projects.locations.processors.get()`

Gets a processor detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name. |

#### `projects.locations.processors.create()`

Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.delete()`

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be deleted. |

#### `projects.locations.processors.enable()`

Enables a processor

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be enabled. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.disable()`

Disables a processor

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be disabled. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.setDefaultProcessorVersion()`

Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.processor` | `string` | Yes | Required. The resource name of the Processor to change default version. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.processors.processorVersions`

#### `projects.locations.processors.processorVersions.process()`

Processes a single document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.batchProcess()`

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.train()`

Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.get()`

Gets a processor version detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name. |

#### `projects.locations.processors.processorVersions.list()`

Lists all versions of a processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}` |
| `params.pageSize` | `integer` | No | The maximum number of processor versions to return. If unspecified, at most `10` processor versions will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`. |
| `params.pageToken` | `string` | No | We will return the processor versions sorted by creation time. The page token will point to the next processor version. |

#### `projects.locations.processors.processorVersions.delete()`

Deletes the processor version, all artifacts under the processor version will be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be deleted. |

#### `projects.locations.processors.processorVersions.deploy()`

Deploys the processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be deployed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.undeploy()`

Undeploys the processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be undeployed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.evaluateProcessorVersion()`

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.processorVersion` | `string` | Yes | Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.processors.processorVersions.evaluations`

#### `projects.locations.processors.processorVersions.evaluations.get()`

Retrieves a specific evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Evaluation to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}` |

#### `projects.locations.processors.processorVersions.evaluations.list()`

Retrieves a set of evaluations for a given processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.pageSize` | `integer` | No | The standard list page size. If unspecified, at most `5` evaluations are returned. The maximum value is `100`. Values above `100` are coerced to `100`. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page. |

### `projects.locations.processors.humanReviewConfig`

#### `projects.locations.processors.humanReviewConfig.reviewDocument()`

Send a document for Human Review. The input document should be processed by the specified processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.humanReviewConfig` | `string` | Yes | Required. The resource name of the HumanReviewConfig that the document will be reviewed with. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.processorTypes`

#### `projects.locations.processorTypes.list()`

Lists the processor types that exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of processor types to return. If unspecified, at most `100` processor types will be returned. The maximum value is `500`. Values above `500` will be coerced to `500`. |
| `params.pageToken` | `string` | No | Used to retrieve the next page of results, empty if at the end of the list. |

#### `projects.locations.processorTypes.get()`

Gets a processor type detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor type resource name. |

### `operations`

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |