# Notebooks API - Apps Script Client Library

Auto-generated client library for using the **Notebooks API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:45:07 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:55 GMT
- **Created:** Sun, 20 Jul 2025 16:44:14 GMT



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

### `projects.locations.runtimes`

#### `projects.locations.runtimes.list()`

Lists Runtimes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum return size of the list call. |
| `params.pageToken` | `string` | No | A previous returned page token that can be used to continue listing from the last result. |
| `params.orderBy` | `string` | No | Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | Optional. List filter. |

#### `projects.locations.runtimes.get()`

Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |

#### `projects.locations.runtimes.create()`

Creates a new Runtime in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.runtimeId` | `string` | No | Required. User-defined unique ID of this Runtime. |
| `params.requestId` | `string` | No | Idempotent request UUID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.patch()`

Update Notebook Runtime configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}` |
| `params.updateMask` | `string` | No | Required. Specifies the path, relative to `Runtime`, of the field to update. For example, to change the software configuration kernels, the `update_mask` parameter would be specified as `software_config.kernels`, and the `PATCH` request body would specify the new value, as follows: { "software_config":{ "kernels": [{ 'repository': 'gcr.io/deeplearning-platform-release/pytorch-gpu', 'tag': 'latest' }], } } Currently, only the following fields can be updated: - `software_config.kernels` - `software_config.post_startup_script` - `software_config.custom_gpu_driver_path` - `software_config.idle_shutdown` - `software_config.idle_shutdown_timeout` - `software_config.disable_terminal` - `labels` |
| `params.requestId` | `string` | No | Idempotent request UUID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.delete()`

Deletes a single Runtime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.requestId` | `string` | No | Idempotent request UUID. |

#### `projects.locations.runtimes.start()`

Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.stop()`

Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.switch()`

Switch a Managed Notebook Runtime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.reset()`

Resets a Managed Notebook Runtime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.upgrade()`

Upgrades a Managed Notebook Runtime to the latest version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.reportEvent()`

Reports and processes a runtime event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.refreshRuntimeTokenInternal()`

Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.diagnose()`

Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtimes_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.migrate()`

Migrate an existing Runtime to a new Workbench Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.runtimes.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.runtimes.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.instances`

#### `projects.locations.instances.list()`

Lists instances in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum return size of the list call. |
| `params.pageToken` | `string` | No | A previous returned page token that can be used to continue listing from the last result. |
| `params.orderBy` | `string` | No | Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | Optional. List filter. |

#### `projects.locations.instances.get()`

Gets details of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |

#### `projects.locations.instances.create()`

Creates a new Instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.instanceId` | `string` | No | Required. User-defined unique ID of this instance. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.register()`

Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.setAccelerator()`

Updates the guest accelerators of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.setMachineType()`

Updates the machine type of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.updateConfig()`

Update Notebook Instance configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.updateShieldedInstanceConfig()`

Updates the Shielded instance configuration of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.setLabels()`

Replaces all the labels of an Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.updateMetadataItems()`

Add/update metadata items for an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.delete()`

Deletes a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |

#### `projects.locations.instances.start()`

Starts a notebook instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.stop()`

Stops a notebook instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reset()`

Resets a notebook instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.report()`

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.isUpgradeable()`

Checks whether a notebook instance is upgradable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notebookInstance` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.type` | `string` | No | Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance. |

#### `projects.locations.instances.getInstanceHealth()`

Checks whether a notebook instance is healthy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |

#### `projects.locations.instances.upgrade()`

Upgrades a notebook instance to the latest version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.rollback()`

Rollbacks a notebook instance to the previous version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.diagnose()`

Creates a Diagnostic File and runs Diagnostic Tool given an Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.upgradeInternal()`

Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reportEvent()`

Reports and processes an instance event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.migrate()`

Migrates an existing User-Managed Notebook to Workbench Instances.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.instances.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.environments`

#### `projects.locations.environments.list()`

Lists environments in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum return size of the list call. |
| `params.pageToken` | `string` | No | A previous returned page token that can be used to continue listing from the last result. |

#### `projects.locations.environments.get()`

Gets details of a single Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` |

#### `projects.locations.environments.create()`

Creates a new Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}` |
| `params.environmentId` | `string` | No | Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.environments.delete()`

Deletes a single Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}` |

### `projects.locations.schedules`

#### `projects.locations.schedules.list()`

Lists schedules in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum return size of the list call. |
| `params.pageToken` | `string` | No | A previous returned page token that can be used to continue listing from the last result. |
| `params.filter` | `string` | No | Filter applied to resulting schedules. |
| `params.orderBy` | `string` | No | Field to order results by. |

#### `projects.locations.schedules.get()`

Gets details of schedule

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` |

#### `projects.locations.schedules.delete()`

Deletes schedule and all underlying jobs

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}` |

#### `projects.locations.schedules.create()`

Creates a new Scheduled Notebook in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.scheduleId` | `string` | No | Required. User-defined unique ID of this schedule. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.schedules.trigger()`

Triggers execution of an existing schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}/schedules/{schedule_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.executions`

#### `projects.locations.executions.list()`

Lists executions in a given project and location

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum return size of the list call. |
| `params.pageToken` | `string` | No | A previous returned page token that can be used to continue listing from the last result. |
| `params.filter` | `string` | No | Filter applied to resulting executions. Currently only supports filtering executions by a specified `schedule_id`. Format: `schedule_id=` |
| `params.orderBy` | `string` | No | Sort by field. |

#### `projects.locations.executions.get()`

Gets details of executions

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` |

#### `projects.locations.executions.delete()`

Deletes execution

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}` |

#### `projects.locations.executions.create()`

Creates a new Execution in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.executionId` | `string` | No | Required. User-defined unique ID of this execution. |
| `params.resource` | `object` | Yes | The request body. |