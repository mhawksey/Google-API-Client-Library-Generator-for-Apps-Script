# Oracle Database@Google Cloud API - Apps Script Client Library

Auto-generated client library for using the **Oracle Database@Google Cloud API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:45:44 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:34:50 GMT
- **Created:** Sun, 20 Jul 2025 16:44:30 GMT



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

### `projects.locations.cloudExadataInfrastructures`

#### `projects.locations.cloudExadataInfrastructures.list()`

Lists Exadata Infrastructures in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.cloudExadataInfrastructures.get()`

Gets details of a single Exadata Infrastructure.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. |

#### `projects.locations.cloudExadataInfrastructures.create()`

Creates a new Exadata Infrastructure in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. |
| `params.cloudExadataInfrastructureId` | `string` | No | Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.cloudExadataInfrastructures.delete()`

Deletes a single Exadata Infrastructure.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted. |

### `projects.locations.cloudExadataInfrastructures.dbServers`

#### `projects.locations.cloudExadataInfrastructures.dbServers.list()`

Lists the database servers of an Exadata Infrastructure instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for database server in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloudExadataInfrastructure}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.cloudVmClusters`

#### `projects.locations.cloudVmClusters.list()`

Lists the VM Clusters in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000. |
| `params.pageToken` | `string` | No | Optional. A token identifying the page of results the server returns. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. |

#### `projects.locations.cloudVmClusters.get()`

Gets details of a single VM Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. |

#### `projects.locations.cloudVmClusters.create()`

Creates a new VM Cluster in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent in the following format: projects/{project}/locations/{location}. |
| `params.cloudVmClusterId` | `string` | No | Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.cloudVmClusters.delete()`

Deletes a single VM Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted. |

### `projects.locations.cloudVmClusters.dbNodes`

#### `projects.locations.cloudVmClusters.dbNodes.list()`

Lists the database nodes of a VM Cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. . |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the node should return. |

### `projects.locations.entitlements`

#### `projects.locations.entitlements.list()`

Lists the entitlements in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the entitlement in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.giVersions`

#### `projects.locations.giVersions.list()`

Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Only the shape and gi_version fields are supported in this format: `shape="{shape}"`. |

### `projects.locations.dbSystemShapes`

#### `projects.locations.dbSystemShapes.list()`

Lists the database system shapes available for the project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for Database System Shapes in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.autonomousDatabases`

#### `projects.locations.autonomousDatabases.list()`

Lists the Autonomous Databases in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. |
| `params.orderBy` | `string` | No | Optional. An expression for ordering the results of the request. |

#### `projects.locations.autonomousDatabases.get()`

Gets the details of a single Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |

#### `projects.locations.autonomousDatabases.create()`

Creates a new Autonomous Database in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent in the following format: projects/{project}/locations/{location}. |
| `params.autonomousDatabaseId` | `string` | No | Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.delete()`

Deletes a single Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.autonomousDatabases.restore()`

Restores a single Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.generateWallet()`

Generates a wallet for an Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.stop()`

Stops an Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.start()`

Starts an Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.restart()`

Restarts an Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.autonomousDatabases.switchover()`

Initiates a switchover of specified autonomous database to the associated peer database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.autonomousDbVersions`

#### `projects.locations.autonomousDbVersions.list()`

Lists all the available Autonomous Database versions for a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.autonomousDatabaseCharacterSets`

#### `projects.locations.autonomousDatabaseCharacterSets.list()`

Lists Autonomous Database Character Sets in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`. |

### `projects.locations.autonomousDatabaseBackups`

#### `projects.locations.autonomousDatabaseBackups.list()`

Lists the long-term and automatic backups of an Autonomous Database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project}/locations/{location}. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.odbNetworks`

#### `projects.locations.odbNetworks.list()`

Lists the ODB Networks in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the ODB Network in the following format: projects/{project}/locations/{location}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. |
| `params.orderBy` | `string` | No | Optional. An expression for ordering the results of the request. |

#### `projects.locations.odbNetworks.get()`

Gets details of a single ODB Network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OdbNetwork in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. |

#### `projects.locations.odbNetworks.create()`

Creates a new ODB Network in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the OdbNetwork in the following format: projects/{project}/locations/{location}. |
| `params.odbNetworkId` | `string` | No | Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.odbNetworks.delete()`

Deletes a single ODB Network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.odbNetworks.odbSubnets`

#### `projects.locations.odbNetworks.odbSubnets.list()`

Lists all the ODB Subnets in a given ODB Network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. |
| `params.orderBy` | `string` | No | Optional. An expression for ordering the results of the request. |

#### `projects.locations.odbNetworks.odbSubnets.get()`

Gets details of a single ODB Subnet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |

#### `projects.locations.odbNetworks.odbSubnets.create()`

Creates a new ODB Subnet in a given ODB Network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. |
| `params.odbSubnetId` | `string` | No | Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.odbNetworks.odbSubnets.delete()`

Deletes a single ODB Subnet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| `params.requestId` | `string` | No | Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |