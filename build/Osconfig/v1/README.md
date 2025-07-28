# OS Config API - Apps Script Client Library

Auto-generated client library for using the **OS Config API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:11:09 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:43:20 GMT
- **Created:** Sun, 20 Jul 2025 16:44:43 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.global`

#### `projects.locations.global.getProjectFeatureSettings()`

GetProjectFeatureSettings returns the VM Manager feature settings for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name specifies the URL for the ProjectFeatureSettings resource: projects/project_id/locations/global/projectFeatureSettings. |

#### `projects.locations.global.updateProjectFeatureSettings()`

UpdateProjectFeatureSettings sets the VM Manager features for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Immutable. Name specifies the URL for the ProjectFeatureSettings resource: projects/project_id/locations/global/projectFeatureSettings. |
| `params.updateMask` | `string` | No | Optional. Field mask that controls which fields of the ProjectFeatureSettings should be updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.osPolicyAssignments`

#### `projects.locations.osPolicyAssignments.create()`

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name in the form: projects/{project}/locations/{location}. Note: Specify the zone of your VMs as the location. |
| `params.osPolicyAssignmentId` | `string` | No | Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.osPolicyAssignments.patch()`

Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment. |
| `params.updateMask` | `string` | No | Optional. Field mask that controls which fields of the assignment should be updated. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the OS policy assignment is not found, a new OS policy assignment will be created. In this situation, `update_mask` is ignored. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.osPolicyAssignments.get()`

Retrieve an existing OS policy assignment. This method always returns the latest revision. In order to retrieve a previous revision of the assignment, also provide the revision ID in the `name` parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of OS policy assignment. Format: `projects/{project}/locations/{location}/osPolicyAssignments/{os_policy_assignment}@{revisionId}` |

#### `projects.locations.osPolicyAssignments.list()`

List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | The maximum number of assignments to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from. |

#### `projects.locations.osPolicyAssignments.listRevisions()`

List the OS policy assignment revisions for a given OS policy assignment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OS policy assignment to list revisions for. |
| `params.pageSize` | `integer` | No | The maximum number of revisions to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from. |

#### `projects.locations.osPolicyAssignments.delete()`

Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the OS policy assignment to be deleted |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. |

### `projects.locations.osPolicyAssignments.operations`

#### `projects.locations.osPolicyAssignments.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.osPolicyAssignments.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.instances`

### `projects.locations.instances.osPolicyAssignments`

### `projects.locations.instances.osPolicyAssignments.reports`

#### `projects.locations.instances.osPolicyAssignments.reports.get()`

Get the OS policy assignment report for the specified Compute Engine VM instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API resource name for OS policy assignment report. Format: `/projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/report` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance_id}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id}`, the OSPolicyAssignment id must be provided. |

#### `projects.locations.instances.osPolicyAssignments.reports.list()`

List OS policy assignment reports for all Compute Engine VM instances in the specified zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/reports` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance} or {assignment} must be `-`. For example: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/{assignment-id}/reports` returns all the reports for the given assignment across all instances. `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. |
| `params.filter` | `string` | No | If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from. |

### `projects.locations.instances.inventories`

#### `projects.locations.instances.inventories.get()`

Get inventory data for the specified VM instance. If the VM has no associated inventory, the message `NOT_FOUND` is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API resource name for inventory resource. Format: `projects/{project}/locations/{location}/instances/{instance}/inventory` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either Compute Engine `instance-id` or `instance-name` can be provided. |
| `params.view` | `string` | No | Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC. |

#### `projects.locations.instances.inventories.list()`

List inventory data for all VM instances in the specified zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided. |
| `params.view` | `string` | No | Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from. |
| `params.filter` | `string` | No | If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response. |

### `projects.locations.instances.vulnerabilityReports`

#### `projects.locations.instances.vulnerabilityReports.get()`

Gets the vulnerability report for the specified VM instance. Only VMs with inventory data have vulnerability reports associated with them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API resource name for vulnerability resource. Format: `projects/{project}/locations/{location}/instances/{instance}/vulnerabilityReport` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either Compute Engine `instance-id` or `instance-name` can be provided. |

#### `projects.locations.instances.vulnerabilityReports.list()`

List vulnerability reports for all VM instances in the specified zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from. |
| `params.filter` | `string` | No | This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL` |

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