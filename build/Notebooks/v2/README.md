# Notebooks API - Apps Script Client Library

Auto-generated client library for using the **Notebooks API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:45:10 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:57 GMT
- **Created:** Sun, 20 Jul 2025 16:44:17 GMT



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

### `projects.locations.instances`

#### `projects.locations.instances.list()`

Lists instances in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `parent=projects/{project_id}/locations/{location}` |
| `params.pageSize` | `integer` | No | Optional. Maximum return size of the list call. |
| `params.pageToken` | `string` | No | Optional. A previous returned page token that can be used to continue listing from the last result. |
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
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.patch()`

UpdateInstance updates an Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.updateMask` | `string` | No | Required. Mask used to update an instance. Updatable fields: * `labels` * `gce_setup.min_cpu_platform` * `gce_setup.metadata` * `gce_setup.machine_type` * `gce_setup.accelerator_configs` * `gce_setup.accelerator_configs.type` * `gce_setup.accelerator_configs.core_count` * `gce_setup.gpu_driver_config` * `gce_setup.gpu_driver_config.enable_gpu_driver` * `gce_setup.gpu_driver_config.custom_gpu_driver_path` * `gce_setup.shielded_instance_config` * `gce_setup.shielded_instance_config.enable_secure_boot` * `gce_setup.shielded_instance_config.enable_vtpm` * `gce_setup.shielded_instance_config.enable_integrity_monitoring` * `gce_setup.reservation_affinity` * `gce_setup.reservation_affinity.consume_reservation_type` * `gce_setup.reservation_affinity.key` * `gce_setup.reservation_affinity.values` * `gce_setup.tags` * `gce_setup.container_image` * `gce_setup.container_image.repository` * `gce_setup.container_image.tag` * `gce_setup.disable_public_ip` * `disable_proxy_access` |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.delete()`

Deletes a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.requestId` | `string` | No | Optional. Idempotent request UUID. |

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

#### `projects.locations.instances.checkUpgradability()`

Checks whether a notebook instance is upgradable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notebookInstance` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |

#### `projects.locations.instances.upgrade()`

Upgrades a notebook instance to the latest version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.resizeDisk()`

Resize a notebook instance disk to a higher capacity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notebookInstance` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
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

#### `projects.locations.instances.getConfig()`

Returns various configuration parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}` |

#### `projects.locations.instances.restore()`

RestoreInstance restores an Instance from a BackupSource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.reportInfoSystem()`

Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.upgradeSystem()`

Allows notebook instances to upgrade themselves. Do not use this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.checkAuthorization()`

Initiated by Cloud Console for Oauth consent flow for Workbench Instances. Do not use this method directly. Design doc: go/wbi-euc:auth-dd

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Notebook Instance resource. Format: `projects/{project}/locations/{location}/instances/{instance}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.generateAccessToken()`

Called by VM to return an EUC for the instance owner. Do not use this method directly. Design doc: go/wbi-euc:dd

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance_id}` |
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