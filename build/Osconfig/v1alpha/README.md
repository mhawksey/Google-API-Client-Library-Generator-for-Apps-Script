# OS Config API - Apps Script Client Library

Auto-generated client library for using the **OS Config API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:46:11 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:37:28 GMT
- **Created:** Sun, 20 Jul 2025 16:44:35 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.osPolicyAssignments`

#### `projects.locations.osPolicyAssignments.create()`

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name in the form: projects/{project}/locations/{location} |
| `params.osPolicyAssignmentId` | `string` | No | Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.osPolicyAssignments.patch()`

Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment. |
| `params.updateMask` | `string` | No | Optional. Field mask that controls which fields of the assignment should be updated. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the OS policy assignment is not found, a new OS policy assignment will be created. In this situation, `update_mask` is ignored. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. |
| `params.requestBody` | `object` | Yes | The request body. |

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

Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.instanceOSPoliciesCompliances`

#### `projects.locations.instanceOSPoliciesCompliances.get()`

Get OS policies compliance data for the specified Compute Engine VM instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. API resource name for instance OS policies compliance resource. Format: `projects/{project}/locations/{location}/instanceOSPoliciesCompliances/{instance}` For `{project}`, either Compute Engine project-number or project-id can be provided. For `{instance}`, either Compute Engine VM instance-id or instance-name can be provided. |

#### `projects.locations.instanceOSPoliciesCompliances.list()`

List OS policies compliance data for all Compute Engine VM instances in the specified zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}` For `{project}`, either Compute Engine project-number or project-id can be provided. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. |
| `params.pageToken` | `string` | No | A pagination token returned from a previous call to `ListInstanceOSPoliciesCompliances` that indicates where this listing should continue from. |
| `params.filter` | `string` | No | If provided, this field specifies the criteria that must be met by a `InstanceOSPoliciesCompliance` API resource to be included in the response. |

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