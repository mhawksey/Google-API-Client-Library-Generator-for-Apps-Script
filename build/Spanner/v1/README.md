# Cloud Spanner API - Apps Script Client Library

Auto-generated client library for using the **Cloud Spanner API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:20:58 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:40:24 GMT
- **Created:** Sun, 20 Jul 2025 16:54:53 GMT



---

## API Reference

### `scans`

#### `scans.list()`

Return available scans given a Database-specific resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The unique name of the parent resource, specific to the Database service implementing this interface. |
| `params.view` | `string` | No | Specifies which parts of the Scan should be returned in the response. Note, only the SUMMARY view (the default) is currently supported for ListScans. |
| `params.filter` | `string` | No | A filter expression to restrict the results based on information present in the available Scan collection. The filter applies to all fields within the Scan message except for `data`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

### `projects`

### `projects.instanceConfigs`

#### `projects.instanceConfigs.list()`

Lists the supported instance configurations for a given project. Returns both Google-managed configurations and user-managed configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/`. |
| `params.pageSize` | `integer` | No | Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse. |

#### `projects.instanceConfigs.get()`

Gets information about a particular instance configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested instance configuration. Values are of the form `projects//instanceConfigs/`. |

#### `projects.instanceConfigs.create()`

Creates an instance configuration and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance configuration. The instance configuration name is assigned by the caller. If the named instance configuration already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns:

* The instance configuration is readable via the API, with all requested attributes. The instance configuration's reconciling field is set to true. Its state is `CREATING`. While the operation is pending:

* Cancelling the operation renders the instance configuration immediately unreadable via the API.

* Except for deleting the creating resource, all other attempts to modify the instance configuration are rejected. Upon completion of the returned operation:

* Instances can be created using the instance configuration.

* The instance configuration's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance configuration. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to create the instance configuration. Values are of the form `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instanceConfigs.patch()`

Updates an instance configuration. The returned long-running operation can be used to track the progress of updating the instance. If the named instance configuration does not exist, returns `NOT_FOUND`. Only user-managed configurations can be updated. Immediately after the request returns:

* The instance configuration's reconciling field is set to true. While the operation is pending:

* Cancelling the operation sets its metadata's cancel_time. The operation is guaranteed to succeed at undoing all changes, after which point it terminates with a `CANCELLED` status.

* All other attempts to modify the instance configuration are rejected.

* Reading the instance configuration via the API continues to give the pre-request values. Upon completion of the returned operation:

* Creating instances using the instance configuration uses the new values.

* The new values of the instance configuration are readable via the API.

* The instance configuration's reconciling field becomes false. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance configuration modification. The metadata field type is UpdateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.update` permission on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`. User instance configuration must start with `custom-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instanceConfigs.delete()`

Deletes the instance configuration. Deletion is only allowed when no instances are using the configuration. If any instances are using the configuration, returns `FAILED_PRECONDITION`. Only user-managed configurations can be deleted. Authorization requires `spanner.instanceConfigs.delete` permission on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the instance configuration to be deleted. Values are of the form `projects//instanceConfigs/` |
| `params.etag` | `string` | No | Used for optimistic concurrency control as a way to help prevent simultaneous deletes of an instance configuration from overwriting each other. If not empty, the API only deletes the instance configuration when the etag provided matches the current status of the requested instance configuration. Otherwise, deletes the instance configuration without checking the current status of the requested instance configuration. |
| `params.validateOnly` | `boolean` | No | An option to validate, but not actually execute, a request, and provide the same response. |

### `projects.instanceConfigs.operations`

#### `projects.instanceConfigs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instanceConfigs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instanceConfigs.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instanceConfigs.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instanceConfigs.ssdCaches`

### `projects.instanceConfigs.ssdCaches.operations`

#### `projects.instanceConfigs.ssdCaches.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instanceConfigs.ssdCaches.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instanceConfigs.ssdCaches.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instanceConfigs.ssdCaches.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instanceConfigOperations`

#### `projects.instanceConfigOperations.list()`

Lists the user-managed instance configuration long-running operations in the given project. An instance configuration operation has a name of the form `projects//instanceConfigs//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project of the instance configuration operations. Values are of the form `projects/`. |
| `params.filter` | `string` | No | An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateInstanceConfigMetadata is `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=` \ `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata) AND` \ `(metadata.instance_config.name:custom-config) AND` \ `(metadata.progress.start_time < \"2021-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is CreateInstanceConfigMetadata. * The instance configuration name contains "custom-config". * The operation started before 2021-03-28T14:50:00Z. * The operation resulted in an error. |
| `params.pageSize` | `integer` | No | Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigOperationsResponse to the same `parent` and with the same `filter`. |

### `projects.instances`

#### `projects.instances.list()`

Lists all instances in the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project for which a list of instances is requested. Values are of the form `projects/`. |
| `params.pageSize` | `integer` | No | Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse. |
| `params.filter` | `string` | No | An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `display_name` * `labels.key` where key is the name of a label Some examples of using filters are: * `name:*` --> The instance has a name. * `name:Howl` --> The instance's name contains the string "howl". * `name:HOWL` --> Equivalent to above. * `NAME:howl` --> Equivalent to above. * `labels.env:*` --> The instance has the label "env". * `labels.env:dev` --> The instance has the label "env" and the value of the label contains the string "dev". * `name:howl labels.env:dev` --> The instance's name contains "howl" and it has the label "env" with its value containing "dev". |
| `params.instanceDeadline` | `string` | No | Deadline used while retrieving metadata for instances. Instances whose metadata cannot be retrieved within this deadline will be added to unreachable in ListInstancesResponse. |

#### `projects.instances.get()`

Gets information about a particular instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested instance. Values are of the form `projects//instances/`. |
| `params.fieldMask` | `string` | No | If field_mask is present, specifies the subset of Instance fields that should be returned. If absent, all Instance fields are returned. |

#### `projects.instances.create()`

Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request:

* The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation:

* Cancelling the operation renders the instance immediately unreadable via the API.

* The instance can be deleted.

* All other attempts to modify the instance are rejected. Upon completion of the returned operation:

* Billing for all successfully-allocated resources begins (some types may have lower than the requested levels).

* Databases can be created in the instance.

* The instance's allocated resource levels are readable via the API.

* The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to create the instance. Values are of the form `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.patch()`

Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`. Immediately upon completion of this request:

* For resource types for which a decrease in the instance's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation:

* Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status.

* All other attempts to modify the instance are rejected.

* Reading the instance via the API continues to give the pre-request resource levels. Upon completion of the returned operation:

* Billing begins for all successfully-allocated resources (some types may have lower than the requested levels).

* All newly-reserved resources are available for serving the instance's tables.

* The instance's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance modification. The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful. Authorization requires `spanner.instances.update` permission on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.delete()`

Deletes an instance. Immediately upon completion of the request:

* Billing ceases for all of the instance's reserved resources. Soon afterward:

* The instance and *all of its databases* immediately and irrevocably disappear from the API. All data in the databases is permanently deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the instance to be deleted. Values are of the form `projects//instances/` |

#### `projects.instances.setIamPolicy()`

Sets the access control policy on an instance resource. Replaces any existing policy. Authorization requires `spanner.instances.setIamPolicy` on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.getIamPolicy()`

Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set. Authorization requires `spanner.instances.getIamPolicy` on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.testIamPermissions()`

Returns permissions that the caller has on the specified instance resource. Attempting this RPC on a non-existent Cloud Spanner instance resource will result in a NOT_FOUND error if the user has `spanner.instances.list` permission on the containing Google Cloud Project. Otherwise returns an empty set of permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.move()`

Moves an instance to the target instance configuration. You can use the returned long-running operation to track the progress of moving the instance. `MoveInstance` returns `FAILED_PRECONDITION` if the instance meets any of the following criteria:

* Is undergoing a move to a different instance configuration

* Has backups

* Has an ongoing update

* Contains any CMEK-enabled databases

* Is a free trial instance While the operation is pending:

* All other attempts to modify the instance, including changes to its compute capacity, are rejected.

* The following database and backup admin operations are rejected:

* `DatabaseAdmin.CreateDatabase`

* `DatabaseAdmin.UpdateDatabaseDdl` (disabled if default_leader is specified in the request.)

* `DatabaseAdmin.RestoreDatabase`

* `DatabaseAdmin.CreateBackup`

* `DatabaseAdmin.CopyBackup`

* Both the source and target instance configurations are subject to hourly compute and storage charges.

* The instance might experience higher read-write latencies and a higher transaction abort rate. However, moving an instance doesn't cause any downtime. The returned long-running operation has a name of the format `/operations/` and can be used to track the move instance operation. The metadata field type is MoveInstanceMetadata. The response field type is Instance, if successful. Cancelling the operation sets its metadata's cancel_time. Cancellation is not immediate because it involves moving any data previously moved to the target instance configuration back to the original instance configuration. You can use this operation to track the progress of the cancellation. Upon successful completion of the cancellation, the operation terminates with `CANCELLED` status. If not cancelled, upon completion of the returned operation:

* The instance successfully moves to the target instance configuration.

* You are billed for compute and storage in target instance configuration. Authorization requires the `spanner.instances.update` permission on the resource instance. For more details, see [Move an instance](https://cloud.google.com/spanner/docs/move-instance).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The instance to move. Values are of the form `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.databases`

#### `projects.instances.databases.getScans()`

Request a specific scan with Database-specific data for Cloud Key Visualizer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name of the scan containing the requested information, specific to the Database service implementing this interface. |
| `params.view` | `string` | No | Specifies which parts of the Scan should be returned in the response. Note, if left unspecified, the FULL view is assumed. |
| `params.startTime` | `string` | No | These fields restrict the Database-specific information returned in the `Scan.data` field. If a `View` is provided that does not include the `Scan.data` field, these are ignored. This range of time must be entirely contained within the defined time range of the targeted scan. The lower bound for the time range to retrieve Scan data for. |
| `params.endTime` | `string` | No | The upper bound for the time range to retrieve Scan data for. |

#### `projects.instances.databases.list()`

Lists Cloud Spanner databases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance whose databases should be listed. Values are of the form `projects//instances/`. |
| `params.pageSize` | `integer` | No | Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse. |

#### `projects.instances.databases.create()`

Creates a new Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the instance that will serve the new database. Values are of the form `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.get()`

Gets the state of a Cloud Spanner database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested database. Values are of the form `projects//instances//databases/`. |

#### `projects.instances.databases.patch()`

Updates a Cloud Spanner database. The returned long-running operation can be used to track the progress of updating the database. If the named database does not exist, returns `NOT_FOUND`. While the operation is pending:

* The database's reconciling field is set to true.

* Cancelling the operation is best-effort. If the cancellation succeeds, the operation metadata's cancel_time is set, the updates are reverted, and the operation terminates with a `CANCELLED` status.

* New UpdateDatabase requests will return a `FAILED_PRECONDITION` error until the pending operation is done (returns successfully or with error).

* Reading the database via the API continues to give the pre-request values. Upon completion of the returned operation:

* The new values are in effect and readable via the API.

* The database's reconciling field becomes false. The returned long-running operation will have a name of the format `projects//instances//databases//operations/` and can be used to track the database modification. The metadata field type is UpdateDatabaseMetadata. The response field type is Database, if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database. |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.updateDdl()`

Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `/operations/` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.dropDatabase()`

Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database to be dropped. |

#### `projects.instances.databases.getDdl()`

Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database whose schema we wish to get. Values are of the form `projects//instances//databases/` |

#### `projects.instances.databases.changequorum()`

`ChangeQuorum` is strictly restricted to databases that use dual-region instance configurations. Initiates a background operation to change the quorum of a database from dual-region mode to single-region mode or vice versa. The returned long-running operation has a name of the format `projects//instances//databases//operations/` and can be used to track execution of the `ChangeQuorum`. The metadata field type is ChangeQuorumMetadata. Authorization requires `spanner.databases.changequorum` permission on the resource database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the database in which to apply `ChangeQuorum`. Values are of the form `projects//instances//databases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.setIamPolicy()`

Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.setIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.getIamPolicy()`

Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.getIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.testIamPermissions()`

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance. Calling this method on a backup schedule that does not exist will result in a NOT_FOUND error if the user has `spanner.backupSchedules.list` permission on the containing database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.restore()`

Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the instance in which to create the restored database. This instance must be in the same project and have the same instance configuration as the instance containing the source backup. Values are of the form `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.addSplitPoints()`

Adds split points to specified tables and indexes of a database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database on whose tables or indexes the split points are to be added. Values are of the form `projects//instances//databases/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.databases.operations`

#### `projects.instances.databases.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instances.databases.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instances.databases.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instances.databases.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instances.databases.sessions`

#### `projects.instances.databases.sessions.adapter()`

Creates a new session to be used for requests made by the adapter. A session identifies a specific incarnation of a database resource and is meant to be reused across many `AdaptMessage` calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The database in which the new session is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.adaptMessage()`

Handles a single message from the client and returns the result as a stream. The server will interpret the message frame and respond with message frames to the client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The database session in which the adapter request is processed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.create()`

Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it's a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions when no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, for example, `"SELECT 1"`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database in which the new session is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.batchCreate()`

Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database in which the new sessions are created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.get()`

Gets a session. Returns `NOT_FOUND` if the session doesn't exist. This is mainly useful for determining whether a session is still alive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session to retrieve. |

#### `projects.instances.databases.sessions.list()`

Lists all sessions in a given database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database in which to list sessions. |
| `params.pageSize` | `integer` | No | Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse. |
| `params.filter` | `string` | No | An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `labels.key` where key is the name of a label Some examples of using filters are: * `labels.env:*` --> The session has the label "env". * `labels.env:dev` --> The session has the label "env" and the value of the label contains the string "dev". |

#### `projects.instances.databases.sessions.delete()`

Ends a session, releasing server resources associated with it. This asynchronously triggers the cancellation of any operations that are running with this session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session to delete. |

#### `projects.instances.databases.sessions.executeSql()`

Executes an SQL statement, returning all results in a single reply. This method can't be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the SQL query should be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.executeStreamingSql()`

Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB. The query string can be SQL or [Graph Query Language (GQL)](https://cloud.google.com/spanner/docs/reference/standard-sql/graph-intro).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the SQL query should be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.executeBatchDml()`

Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the DML statements should be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.read()`

Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method can't be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the read should be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.streamingRead()`

Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the read should be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.beginTransaction()`

Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the transaction runs. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.commit()`

Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should retry the transaction from the beginning, reusing the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the transaction to be committed is running. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.rollback()`

Rolls back a transaction, releasing any locks it holds. It's a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction isn't found. `Rollback` never returns `ABORTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the transaction to roll back is running. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.partitionQuery()`

Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the `PartitionQueryRequest` used to create the partition tokens and the `ExecuteSqlRequests` that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the query, and the whole operation must be restarted from the beginning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session used to create the partitions. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.partitionRead()`

Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the `PartitionReadRequest` used to create the partition tokens and the `ReadRequests` that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual `StreamingRead` call issued with a `partition_token`. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it isn't possible to resume the read, and the whole operation must be restarted from the beginning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session used to create the partitions. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.sessions.batchWrite()`

Batches the supplied mutation groups in a collection of efficient transactions. All mutations in a group are committed atomically. However, mutations across groups can be committed non-atomically in an unspecified order and thus, they must be independent of each other. Partial failure is possible, that is, some groups might have been committed successfully, while some might have failed. The results of individual batches are streamed into the response as the batches are applied. `BatchWrite` requests are not replay protected, meaning that each mutation group can be applied more than once. Replays of non-idempotent mutations can have undesirable effects. For example, replays of an insert mutation can produce an already exists error or if you use generated or commit timestamp-based keys, it can result in additional rows being added to the mutation's table. We recommend structuring your mutation groups to be idempotent to avoid this issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The session in which the batch request is to be run. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.databases.backupSchedules`

#### `projects.instances.databases.backupSchedules.setIamPolicy()`

Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.setIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.backupSchedules.getIamPolicy()`

Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.getIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.backupSchedules.testIamPermissions()`

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance. Calling this method on a backup schedule that does not exist will result in a NOT_FOUND error if the user has `spanner.backupSchedules.list` permission on the containing database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.backupSchedules.create()`

Creates a new backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the database that this backup schedule applies to. |
| `params.backupScheduleId` | `string` | No | Required. The Id to use for the backup schedule. The `backup_schedule_id` appended to `parent` forms the full backup schedule name of the form `projects//instances//databases//backupSchedules/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.backupSchedules.get()`

Gets backup schedule for the input schedule name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schedule to retrieve. Values are of the form `projects//instances//databases//backupSchedules/`. |

#### `projects.instances.databases.backupSchedules.patch()`

Updates a backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Output only for the CreateBackupSchedule operation. Required for the UpdateBackupSchedule operation. A globally unique identifier for the backup schedule which cannot be changed. Values are of the form `projects//instances//databases//backupSchedules/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. |
| `params.updateMask` | `string` | No | Required. A mask specifying which fields in the BackupSchedule resource should be updated. This mask is relative to the BackupSchedule resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.backupSchedules.delete()`

Deletes a backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schedule to delete. Values are of the form `projects//instances//databases//backupSchedules/`. |

#### `projects.instances.databases.backupSchedules.list()`

Lists all the backup schedules for the database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Database is the parent resource whose backup schedules should be listed. Values are of the form projects//instances//databases/ |
| `params.pageSize` | `integer` | No | Optional. Number of backup schedules to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | Optional. If non-empty, `page_token` should contain a next_page_token from a previous ListBackupSchedulesResponse to the same `parent`. |

### `projects.instances.databases.databaseRoles`

#### `projects.instances.databases.databaseRoles.testIamPermissions()`

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance. Calling this method on a backup schedule that does not exist will result in a NOT_FOUND error if the user has `spanner.backupSchedules.list` permission on the containing database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.databases.databaseRoles.list()`

Lists Cloud Spanner database roles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The database whose roles should be listed. Values are of the form `projects//instances//databases/`. |
| `params.pageSize` | `integer` | No | Number of database roles to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseRolesResponse. |

### `projects.instances.operations`

#### `projects.instances.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instances.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instances.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instances.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instances.instancePartitions`

#### `projects.instances.instancePartitions.list()`

Lists all instance partitions for the given instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance whose instance partitions should be listed. Values are of the form `projects//instances/`. Use `{instance} = '-'` to list instance partitions for all Instances in a project, e.g., `projects/myproject/instances/-`. |
| `params.pageSize` | `integer` | No | Number of instance partitions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListInstancePartitionsResponse. |
| `params.instancePartitionDeadline` | `string` | No | Optional. Deadline used while retrieving metadata for instance partitions. Instance partitions whose metadata cannot be retrieved within this deadline will be added to unreachable in ListInstancePartitionsResponse. |

#### `projects.instances.instancePartitions.get()`

Gets information about a particular instance partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the requested instance partition. Values are of the form `projects/{project}/instances/{instance}/instancePartitions/{instance_partition}`. |

#### `projects.instances.instancePartitions.create()`

Creates an instance partition and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance partition. The instance partition name is assigned by the caller. If the named instance partition already exists, `CreateInstancePartition` returns `ALREADY_EXISTS`. Immediately upon completion of this request:

* The instance partition is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation:

* Cancelling the operation renders the instance partition immediately unreadable via the API.

* The instance partition can be deleted.

* All other attempts to modify the instance partition are rejected. Upon completion of the returned operation:

* Billing for all successfully-allocated resources begins (some types may have lower than the requested levels).

* Databases can start using this instance partition.

* The instance partition's allocated resource levels are readable via the API.

* The instance partition's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance partition. The metadata field type is CreateInstancePartitionMetadata. The response field type is InstancePartition, if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the instance in which to create the instance partition. Values are of the form `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.instancePartitions.delete()`

Deletes an existing instance partition. Requires that the instance partition is not used by any database or backup and is not the default instance partition of an instance. Authorization requires `spanner.instancePartitions.delete` permission on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the instance partition to be deleted. Values are of the form `projects/{project}/instances/{instance}/instancePartitions/{instance_partition}` |
| `params.etag` | `string` | No | Optional. If not empty, the API only deletes the instance partition when the etag provided matches the current status of the requested instance partition. Otherwise, deletes the instance partition without checking the current status of the requested instance partition. |

#### `projects.instances.instancePartitions.patch()`

Updates an instance partition, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance partition. If the named instance partition does not exist, returns `NOT_FOUND`. Immediately upon completion of this request:

* For resource types for which a decrease in the instance partition's allocation has been requested, billing is based on the newly-requested level. Until completion of the returned operation:

* Cancelling the operation sets its metadata's cancel_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status.

* All other attempts to modify the instance partition are rejected.

* Reading the instance partition via the API continues to give the pre-request resource levels. Upon completion of the returned operation:

* Billing begins for all successfully-allocated resources (some types may have lower than the requested levels).

* All newly-reserved resources are available for serving the instance partition's tables.

* The instance partition's new resource levels are readable via the API. The returned long-running operation will have a name of the format `/operations/` and can be used to track the instance partition modification. The metadata field type is UpdateInstancePartitionMetadata. The response field type is InstancePartition, if successful. Authorization requires `spanner.instancePartitions.update` permission on the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A unique identifier for the instance partition. Values are of the form `projects//instances//instancePartitions/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. An instance partition's name cannot be changed after the instance partition is created. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.instances.instancePartitions.operations`

#### `projects.instances.instancePartitions.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instances.instancePartitions.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instances.instancePartitions.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instances.instancePartitions.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instances.instancePartitionOperations`

#### `projects.instances.instancePartitionOperations.list()`

Lists instance partition long-running operations in the given instance. An instance partition operation has a name of the form `projects//instances//instancePartitions//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation. Authorization requires `spanner.instancePartitionOperations.list` permission on the resource parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent instance of the instance partition operations. Values are of the form `projects//instances/`. |
| `params.filter` | `string` | No | Optional. An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateInstancePartitionMetadata is `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstancePartitionMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=` \ `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstancePartitionMetadata) AND` \ `(metadata.instance_partition.name:custom-instance-partition) AND` \ `(metadata.start_time < \"2021-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is CreateInstancePartitionMetadata. * The instance partition name contains "custom-instance-partition". * The operation started before 2021-03-28T14:50:00Z. * The operation resulted in an error. |
| `params.pageSize` | `integer` | No | Optional. Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | Optional. If non-empty, `page_token` should contain a next_page_token from a previous ListInstancePartitionOperationsResponse to the same `parent` and with the same `filter`. |
| `params.instancePartitionDeadline` | `string` | No | Optional. Deadline used while retrieving metadata for instance partition operations. Instance partitions whose operation metadata cannot be retrieved within this deadline will be added to unreachable_instance_partitions in ListInstancePartitionOperationsResponse. |

### `projects.instances.backups`

#### `projects.instances.backups.setIamPolicy()`

Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.setIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.getIamPolicy()`

Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource. For backup schedules, authorization requires `spanner.backupSchedules.getIamPolicy` permission on resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.testIamPermissions()`

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance. Calling this method on a backup schedule that does not exist will result in a NOT_FOUND error if the user has `spanner.backupSchedules.list` permission on the containing database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.create()`

Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the instance in which the backup will be created. This must be the same instance that contains the database the backup will be created from. The backup will be stored in the location(s) specified in the instance configuration of this instance. Values are of the form `projects//instances/`. |
| `params.backupId` | `string` | No | Required. The id of the backup to be created. The `backup_id` appended to `parent` forms the full backup name of the form `projects//instances//backups/`. |
| `params.encryptionConfig.encryptionType` | `string` | No | Required. The encryption type of the backup. |
| `params.encryptionConfig.kmsKeyName` | `string` | No | Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`. |
| `params.encryptionConfig.kmsKeyNames` | `string` | No | Optional. Specifies the KMS configuration for the one or more keys used to protect the backup. Values are of the form `projects//locations//keyRings//cryptoKeys/`. The keys referenced by `kms_key_names` must fully cover all regions of the backup's instance configuration. Some examples: * For regional (single-region) instance configurations, specify a regional location KMS key. * For multi-region instance configurations of type `GOOGLE_MANAGED`, either specify a multi-region location KMS key or multiple regional location KMS keys that cover all regions in the instance configuration. * For an instance configuration of type `USER_MANAGED`, specify only regional location KMS keys to cover each region in the instance configuration. Multi-region location KMS keys aren't supported for `USER_MANAGED` type instance configurations. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.copy()`

Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects//instances/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.get()`

Gets metadata on a pending or completed Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup. Values are of the form `projects//instances//backups/`. |

#### `projects.instances.backups.patch()`

Updates a pending or completed Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`. |
| `params.updateMask` | `string` | No | Required. A mask specifying which fields (e.g. `expire_time`) in the Backup resource should be updated. This mask is relative to the Backup resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally by clients that do not know about them. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.instances.backups.delete()`

Deletes a pending or completed Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup to delete. Values are of the form `projects//instances//backups/`. |

#### `projects.instances.backups.list()`

Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance to list backups from. Values are of the form `projects//instances/`. |
| `params.filter` | `string` | No | An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `name` * `database` * `state` * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` * `backup_schedules` You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `name:Howl` - The backup's name contains the string "howl". * `database:prod` - The database's name contains the string "prod". * `state:CREATING` - The backup is pending creation. * `state:READY` - The backup is fully created and ready for use. * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")` - The backup name contains the string "howl" and `create_time` of the backup is before 2018-03-28T14:50:00Z. * `expire_time < \"2018-03-28T14:50:00Z\"` - The backup `expire_time` is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` - The backup's size is greater than 10GB * `backup_schedules:daily` - The backup is created from a schedule with "daily" in its name. |
| `params.pageSize` | `integer` | No | Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`. |

### `projects.instances.backups.operations`

#### `projects.instances.backups.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.instances.backups.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.instances.backups.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.instances.backups.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.instances.databaseOperations`

#### `projects.instances.databaseOperations.list()`

Lists database longrunning-operations. A database operation has a name of the form `projects//instances//databases//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance of the database operations. Values are of the form `projects//instances/`. |
| `params.filter` | `string` | No | An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for RestoreDatabaseMetadata is `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \ `(metadata.source_type:BACKUP) AND` \ `(metadata.backup_info.backup:backup_howl) AND` \ `(metadata.name:restored_howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is RestoreDatabaseMetadata. * The database is restored from a backup. * The backup name contains "backup_howl". * The restored database's name contains "restored_howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error. |
| `params.pageSize` | `integer` | No | Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseOperationsResponse to the same `parent` and with the same `filter`. |

### `projects.instances.backupOperations`

#### `projects.instances.backupOperations.list()`

Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects//instances//backups//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance of the backup operations. Values are of the form `projects//instances/`. |
| `params.filter` | `string` | No | An expression that filters the list of returned backup operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateBackupMetadata is `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `metadata.database:prod` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The source database name of backup contains the string "prod". * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.name:howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The backup name contains the string "howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test) AND` \ `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CopyBackupMetadata. * The source backup name contains the string "test". * The operation started before 2022-01-18T14:50:00Z. * The operation resulted in an error. * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.database:test_db)) OR` \ `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test_bkp)) AND` \ `(error:*)` - Returns operations where: * The operation's metadata matches either of criteria: * The operation's metadata type is CreateBackupMetadata AND the source database name of the backup contains the string "test_db" * The operation's metadata type is CopyBackupMetadata AND the source backup name contains the string "test_bkp" * The operation resulted in an error. |
| `params.pageSize` | `integer` | No | Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size. |
| `params.pageToken` | `string` | No | If non-empty, `page_token` should contain a next_page_token from a previous ListBackupOperationsResponse to the same `parent` and with the same `filter`. |