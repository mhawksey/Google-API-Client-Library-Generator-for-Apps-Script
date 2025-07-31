# OS Config API - Apps Script Client Library

Auto-generated client library for using the **OS Config API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:45:26 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:43:16 GMT
- **Created:** Sun, 20 Jul 2025 16:44:38 GMT



---

## API Reference

### `projects`

### `projects.patchJobs`

#### `projects.patchJobs.execute()`

Patch VM instances by creating and running a patch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project in which to run this patch in the form `projects/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patchJobs.get()`

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the patch in the form `projects/*/patchJobs/*` |

#### `projects.patchJobs.cancel()`

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the patch in the form `projects/*/patchJobs/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patchJobs.list()`

Get a list of patch jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. In the form of `projects/*` |
| `params.pageSize` | `integer` | No | The maximum number of instance status to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call that indicates where this listing should continue from. |
| `params.filter` | `string` | No | If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field. |

### `projects.patchJobs.instanceDetails`

#### `projects.patchJobs.instanceDetails.list()`

Get a list of instance details for a given patch job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent for the instances are in the form of `projects/*/patchJobs/*`. |
| `params.pageSize` | `integer` | No | The maximum number of instance details records to return. Default is 100. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call that indicates where this listing should continue from. |
| `params.filter` | `string` | No | A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`. |

### `projects.patchDeployments`

#### `projects.patchDeployments.create()`

Create an OS Config patch deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to apply this patch deployment to in the form `projects/*`. |
| `params.patchDeploymentId` | `string` | No | Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patchDeployments.get()`

Get an OS Config patch deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`. |

#### `projects.patchDeployments.list()`

Get a page of OS Config patch deployments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent in the form `projects/*`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of patch deployments to return. Default is 100. |
| `params.pageToken` | `string` | No | Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from. |

#### `projects.patchDeployments.delete()`

Delete an OS Config patch deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`. |

#### `projects.patchDeployments.patch()`

Update an OS Config patch deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. |
| `params.updateMask` | `string` | No | Optional. Field mask that controls which fields of the patch deployment should be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patchDeployments.pause()`

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patchDeployments.resume()`

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.guestPolicies`

#### `projects.guestPolicies.create()`

Create an OS Config guest policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent using one of the following forms: `projects/{project_number}`. |
| `params.guestPolicyId` | `string` | No | Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.guestPolicies.get()`

Get an OS Config guest policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. |

#### `projects.guestPolicies.list()`

Get a page of OS Config guest policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent using one of the following forms: `projects/{project_number}`. |
| `params.pageSize` | `integer` | No | The maximum number of guest policies to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from. |

#### `projects.guestPolicies.patch()`

Update an OS Config guest policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. |
| `params.updateMask` | `string` | No | Field mask that controls which fields of the guest policy should be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.guestPolicies.delete()`

Delete an OS Config guest policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. |

### `projects.zones`

### `projects.zones.instances`

#### `projects.zones.instances.lookupEffectiveGuestPolicy()`

Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.instance` | `string` | Yes | Required. The VM instance whose policies are being looked up. |
| `params.resource` | `object` | Yes | The request body. |