# Firebase Data Connect API - Apps Script Client Library

Auto-generated client library for using the **Firebase Data Connect API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:34:54 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:56 GMT
- **Created:** Sun, 20 Jul 2025 16:33:29 GMT



---

## API Reference

### `projects`

### `projects.locations`

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

### `projects.locations.services`

#### `projects.locations.services.executeGraphql()`

Execute any GraphQL query and mutation against the Firebase Data Connect's generated GraphQL schema. Grants full read and write access to the connected data sources. Note: Use introspection query to explore the generated GraphQL schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of Firebase Data Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.executeGraphqlRead()`

Execute any GraphQL query against the Firebase Data Connect's generated GraphQL schema. Grants full read to the connected data sources. `ExecuteGraphqlRead` is identical to `ExecuteGraphql` except it only accepts read-only query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The relative resource name of Firebase Data Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.list()`

Lists Services in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value of parent. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListServices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListServices` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `projects.locations.services.get()`

Gets details of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the service to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` |

#### `projects.locations.services.create()`

Creates a new Service in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value of parent. |
| `params.serviceId` | `string` | No | Required. The ID to use for the service, which will become the final component of the service's resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Service, but do not actually create it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.patch()`

Updates the parameters of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The relative resource name of the Firebase Data Connect service, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` Note that the service ID is specific to Firebase Data Connect and does not correspond to any of the instance IDs of the underlying data source connections. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Service is not found, a new Service will be created. In this case, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Service, but do not actually update it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.delete()`

Deletes a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the service to delete, in the format: ``` projects/{project}/locations/{location}/services/{service} ``` |
| `params.force` | `boolean` | No | Optional. If set to true, any child resources (i.e. Schema, SchemaRevisions, Connectors, and ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Service has no child resources. |
| `params.etag` | `string` | No | Optional. The etag of the Service. If this is provided, it must match the server's etag. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Service is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Service, but do not actually delete it. |

### `projects.locations.services.connectors`

#### `projects.locations.services.connectors.executeQuery()`

Execute a predefined query in a Connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the connector to find the predefined query, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.connectors.executeMutation()`

Execute a predefined mutation in a Connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the connector to find the predefined mutation, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.connectors.list()`

Lists Connectors in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value of parent. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `projects.locations.services.connectors.get()`

Gets details of a single Connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` |

#### `projects.locations.services.connectors.create()`

Creates a new Connector in a given project and location. The operations are validated against and must be compatible with the active schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.connectorId` | `string` | No | Required. The ID to use for the connector, which will become the final component of the connector's resource name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Connector, but do not actually create it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.connectors.patch()`

Updates the parameters of a single Connector, and creates a new ConnectorRevision with the updated Connector. The operations are validated against and must be compatible with the live schema. If the operations and schema are not compatible or if the schema is not present, this will result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The relative resource name of the connector, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Connector is not found, a new Connector will be created. In this case, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Connector, but do not actually update it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.connectors.delete()`

Deletes a single Connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connector to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/connectors/{connector} ``` |
| `params.force` | `boolean` | No | Optional. If set to true, any child resources (i.e. ConnectorRevisions) will also be deleted. Otherwise, the request will only work if the Connector has no child resources. |
| `params.etag` | `string` | No | Optional. The etag of the Connector. If this is provided, it must match the server's etag. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Connector is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Connector, but do not actually delete it. |

### `projects.locations.services.schemas`

#### `projects.locations.services.schemas.get()`

Gets details of a single Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to retrieve, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` |

#### `projects.locations.services.schemas.list()`

Lists Schemas in a given project and location. Note that only `schemas/main` is supported, so this will always return at most one Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value of parent. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSchemas` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `projects.locations.services.schemas.create()`

Creates a new Schema in a given project and location. Only creation of `schemas/main` is supported and calling create with any other schema ID will result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.schemaId` | `string` | No | Required. The ID to use for the schema, which will become the final component of the schema's resource name. Currently, only `main` is supported and any other schema ID will result in an error. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Schema, but do not actually update it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.schemas.patch()`

Updates the parameters of a single Schema, and creates a new SchemaRevision with the updated Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The relative resource name of the schema, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` Right now, the only supported schema is "main". |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Schema resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Schema is not found, a new Schema will be created. In this case, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Schema, but do not actually update it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.schemas.delete()`

Deletes a single Schema. Because the schema and connectors must be compatible at all times, if this is called while any connectors are active, this will result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to delete, in the format: ``` projects/{project}/locations/{location}/services/{service}/schemas/{schema} ``` |
| `params.force` | `boolean` | No | Optional. If set to true, any child resources (i.e. SchemaRevisions) will also be deleted. |
| `params.etag` | `string` | No | Optional. The etag of the Schema. If this is provided, it must match the server's etag. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If true and the Schema is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the Schema, but do not actually delete it. |