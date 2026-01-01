# Cloud Document AI API - Apps Script Client Library

Auto-generated client library for using the **Cloud Document AI API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:43:28 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:43:28 GMT
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

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.fetchProcessorTypes()`

Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`. |

### `projects.locations.schemas`

#### `projects.locations.schemas.create()`

Creates a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) under which to create the Schema. Format: `projects/{project}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.schemas.delete()`

Deletes a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, any child resources of this Schema will also be deleted. (Otherwise, the request will only work if the Schema has no child resources.) |
| `params.name` | `string` | Yes | Required. The name of the Schema to be deleted. Format: `projects/{project}/locations/{location}/schemas/{schema}` |

#### `projects.locations.schemas.list()`

Lists Schemas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. We will return the schema groups sorted by creation time. The page token will point to the next Schema. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of schema groups to return. If unspecified, at most `10` Schema will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`. |

#### `projects.locations.schemas.get()`

Gets a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Schema to get. Format: `projects/{project}/locations/{location}/schemas/{schema}` |

#### `projects.locations.schemas.patch()`

Updates a schema. Editable fields are: - `display_name` - `labels`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The update mask to apply to the resource. **Note:** Only the following fields can be updated: - display_name. - labels. |
| `params.name` | `string` | Yes | Identifier. The resource name of the Schema. Format: `projects/{project}/locations/{location}/schemas/{schema}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.schemas.schemaVersions`

#### `projects.locations.schemas.schemaVersions.get()`

Gets a schema version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SchemaVersion to get. Format: `projects/{project}/locations/{location}/schemas/{schema}/schemaVersions/{schema_version}` |

#### `projects.locations.schemas.schemaVersions.list()`

Lists SchemaVersions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. We will return the SchemaVersion sorted by creation time. The page token will point to the next SchemaVersion. |
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/schemas/{schema}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of SchemaVersion to return. If unspecified, at most `10` SchemaVersion will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`. |

#### `projects.locations.schemas.schemaVersions.delete()`

Deletes a schema version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SchemaVersion to delete. Format: `projects/{project}/locations/{location}/schemas/{schema}/schemaVersions/{schema_version}` |

#### `projects.locations.schemas.schemaVersions.create()`

Creates a schema version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) under which to create the SchemaVersion. Format: `projects/{project}/locations/{location}/schemas/{schema}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.schemas.schemaVersions.generate()`

Generates a schema version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project, location and schema) under which to generate the SchemaVersion. Format: `projects/{project}/locations/{location}/schemas/{schema}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.schemas.schemaVersions.patch()`

Updates a schema version. Editable fields are: - `display_name` - `labels`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the SchemaVersion. Format: `projects/{project}/locations/{location}/schemas/{schema}/schemaVersions/{schema_version}` |
| `params.updateMask` | `string` | No | Optional. The update mask to apply to the resource. **Note:** Only the following fields can be updated: - display_name. - labels. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.processorTypes`

#### `projects.locations.processorTypes.get()`

Gets a processor type detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor type resource name. |

#### `projects.locations.processorTypes.list()`

Lists the processor types that exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`. |
| `params.pageToken` | `string` | No | Used to retrieve the next page of results, empty if at the end of the list. |
| `params.pageSize` | `integer` | No | The maximum number of processor types to return. If unspecified, at most `100` processor types will be returned. The maximum value is `500`. Values above `500` will be coerced to `500`. |

### `projects.locations.processors`

#### `projects.locations.processors.batchProcess()`

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.list()`

Lists all processors which belong to this project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of processors to return. If unspecified, at most `50` processors will be returned. The maximum value is `100`. Values above `100` will be coerced to `100`. |
| `params.pageToken` | `string` | No | We will return the processors sorted by creation time. The page token will point to the next processor. |

#### `projects.locations.processors.enable()`

Enables a processor

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be enabled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.delete()`

Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be deleted. |

#### `projects.locations.processors.get()`

Gets a processor detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name. |

#### `projects.locations.processors.disable()`

Disables a processor

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name to be disabled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.setDefaultProcessorVersion()`

Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.processor` | `string` | Yes | Required. The resource name of the Processor to change default version. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.process()`

Processes a single document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.create()`

Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.processors.humanReviewConfig`

#### `projects.locations.processors.humanReviewConfig.reviewDocument()`

Send a document for Human Review. The input document should be processed by the specified processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.humanReviewConfig` | `string` | Yes | Required. The resource name of the HumanReviewConfig that the document will be reviewed with. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.processors.processorVersions`

#### `projects.locations.processors.processorVersions.undeploy()`

Undeploys the processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be undeployed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.train()`

Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.get()`

Gets a processor version detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor resource name. |

#### `projects.locations.processors.processorVersions.deploy()`

Deploys the processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be deployed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.process()`

Processes a single document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.delete()`

Deletes the processor version, all artifacts under the processor version will be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The processor version resource name to be deleted. |

#### `projects.locations.processors.processorVersions.evaluateProcessorVersion()`

Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.processorVersion` | `string` | Yes | Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.processors.processorVersions.list()`

Lists all versions of a processor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}` |
| `params.pageToken` | `string` | No | We will return the processor versions sorted by creation time. The page token will point to the next processor version. |
| `params.pageSize` | `integer` | No | The maximum number of processor versions to return. If unspecified, at most `10` processor versions will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`. |

#### `projects.locations.processors.processorVersions.batchProcess()`

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.processors.processorVersions.evaluations`

#### `projects.locations.processors.processorVersions.evaluations.list()`

Retrieves a set of evaluations for a given processor version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}` |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page. |
| `params.pageSize` | `integer` | No | The standard list page size. If unspecified, at most `5` evaluations are returned. The maximum value is `100`. Values above `100` are coerced to `100`. |

#### `projects.locations.processors.processorVersions.evaluations.get()`

Retrieves a specific evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Evaluation to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}` |

### `operations`

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |