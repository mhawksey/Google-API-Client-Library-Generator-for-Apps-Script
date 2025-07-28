# VM Migration API - Apps Script Client Library

Auto-generated client library for using the **VM Migration API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:09:15 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:48:40 GMT
- **Created:** Sun, 20 Jul 2025 17:02:41 GMT



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

### `projects.locations.sources`

#### `projects.locations.sources.list()`

Lists Sources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of sources. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.get()`

Gets details of a single Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Source name. |

#### `projects.locations.sources.create()`

Creates a new Source in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Source's parent. |
| `params.sourceId` | `string` | No | Required. The source identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.patch()`

Updates the parameters of a single Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The Source name. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Source resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.delete()`

Deletes a single Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Source name. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.sources.fetchInventory()`

List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | Yes | Required. The name of the Source. |
| `params.forceRefresh` | `boolean` | No | If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower. |
| `params.pageSize` | `integer` | No | The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token. |

### `projects.locations.sources.utilizationReports`

#### `projects.locations.sources.utilizationReports.list()`

Lists Utilization Reports of the given Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Utilization Reports parent. |
| `params.view` | `string` | No | Optional. The level of details of each report. Defaults to BASIC. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.utilizationReports.get()`

Gets a single Utilization Report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Utilization Report name. |
| `params.view` | `string` | No | Optional. The level of details of the report. Defaults to FULL |

#### `projects.locations.sources.utilizationReports.create()`

Creates a new UtilizationReport.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Utilization Report's parent. |
| `params.utilizationReportId` | `string` | No | Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.utilizationReports.delete()`

Deletes a single Utilization Report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Utilization Report name. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.sources.datacenterConnectors`

#### `projects.locations.sources.datacenterConnectors.list()`

Lists DatacenterConnectors in a given Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of connectors. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.datacenterConnectors.get()`

Gets details of a single DatacenterConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DatacenterConnector. |

#### `projects.locations.sources.datacenterConnectors.create()`

Creates a new DatacenterConnector in a given Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source` |
| `params.datacenterConnectorId` | `string` | No | Required. The datacenterConnector identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.datacenterConnectors.delete()`

Deletes a single DatacenterConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The DatacenterConnector name. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.sources.datacenterConnectors.upgradeAppliance()`

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.datacenterConnector` | `string` | Yes | Required. The DatacenterConnector name. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sources.migratingVms`

#### `projects.locations.sources.migratingVms.create()`

Creates a new MigratingVm in a given Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The MigratingVm's parent. |
| `params.migratingVmId` | `string` | No | Required. The migratingVm identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.list()`

Lists MigratingVms in a given Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of MigratingVms. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |
| `params.view` | `string` | No | Optional. The level of details of each migrating VM. |

#### `projects.locations.sources.migratingVms.get()`

Gets details of a single MigratingVm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.view` | `string` | No | Optional. The level of details of the migrating VM. |

#### `projects.locations.sources.migratingVms.patch()`

Updates the parameters of a single MigratingVm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The identifier of the MigratingVm. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the MigratingVm resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.delete()`

Deletes a single MigratingVm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the MigratingVm. |

#### `projects.locations.sources.migratingVms.startMigration()`

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migratingVm` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.resumeMigration()`

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migratingVm` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.pauseMigration()`

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migratingVm` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.finalizeMigration()`

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migratingVm` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.extendMigration()`

Extend the migrating VM time to live.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.migratingVm` | `string` | Yes | Required. The name of the MigratingVm. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sources.migratingVms.cloneJobs`

#### `projects.locations.sources.migratingVms.cloneJobs.create()`

Initiates a Clone of a specific migrating VM.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Clone's parent. |
| `params.cloneJobId` | `string` | No | Required. The clone job identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.cloneJobs.cancel()`

Initiates the cancellation of a running clone job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The clone job id |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.cloneJobs.list()`

Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of source VMs. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.migratingVms.cloneJobs.get()`

Gets details of a single CloneJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CloneJob. |

### `projects.locations.sources.migratingVms.cutoverJobs`

#### `projects.locations.sources.migratingVms.cutoverJobs.create()`

Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Cutover's parent. |
| `params.cutoverJobId` | `string` | No | Required. The cutover job identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.cutoverJobs.cancel()`

Initiates the cancellation of a running cutover job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The cutover job id |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sources.migratingVms.cutoverJobs.list()`

Lists the CutoverJobs of a migrating VM. Only 25 most recent CutoverJobs are listed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of migrating VMs. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.migratingVms.cutoverJobs.get()`

Gets details of a single CutoverJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CutoverJob. |

### `projects.locations.sources.migratingVms.replicationCycles`

#### `projects.locations.sources.migratingVms.replicationCycles.list()`

Lists ReplicationCycles in a given MigratingVM.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of ReplicationCycles. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.sources.migratingVms.replicationCycles.get()`

Gets details of a single ReplicationCycle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ReplicationCycle. |

### `projects.locations.groups`

#### `projects.locations.groups.list()`

Lists Groups in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of groups. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.groups.get()`

Gets details of a single Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The group name. |

#### `projects.locations.groups.create()`

Creates a new Group in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Group's parent. |
| `params.groupId` | `string` | No | Required. The group identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.groups.patch()`

Updates the parameters of a single Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The Group name. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Group resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.groups.delete()`

Deletes a single Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Group name. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.groups.addGroupMigration()`

Adds a MigratingVm to a Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.group` | `string` | Yes | Required. The full path name of the Group to add to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.groups.removeGroupMigration()`

Removes a MigratingVm from a Group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.group` | `string` | Yes | Required. The name of the Group. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.targetProjects`

#### `projects.locations.targetProjects.list()`

Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of targets. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request. |
| `params.orderBy` | `string` | No | Optional. the order by fields for the result. |

#### `projects.locations.targetProjects.get()`

Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TargetProject name. |

#### `projects.locations.targetProjects.create()`

Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The TargetProject's parent. |
| `params.targetProjectId` | `string` | No | Required. The target_project identifier. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.targetProjects.patch()`

Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of the target project. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.targetProjects.delete()`

Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TargetProject name. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.imageImports`

#### `projects.locations.imageImports.list()`

Lists ImageImports in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of targets. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListImageImports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImports` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request (according to AIP-160). |
| `params.orderBy` | `string` | No | Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field. |

#### `projects.locations.imageImports.get()`

Gets details of a single ImageImport.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ImageImport name. |

#### `projects.locations.imageImports.create()`

Creates a new ImageImport in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ImageImport's parent. |
| `params.imageImportId` | `string` | No | Required. The image import identifier. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.imageImports.delete()`

Deletes a single ImageImport.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ImageImport name. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.imageImports.imageImportJobs`

#### `projects.locations.imageImports.imageImportJobs.list()`

Lists ImageImportJobs in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of targets. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListImageImportJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImportJobs` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. The filter request (according to AIP-160). |
| `params.orderBy` | `string` | No | Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field. |

#### `projects.locations.imageImports.imageImportJobs.get()`

Gets details of a single ImageImportJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ImageImportJob name. |

#### `projects.locations.imageImports.imageImportJobs.cancel()`

Initiates the cancellation of a running clone job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The image import job id. |
| `params.resource` | `object` | Yes | The request body. |