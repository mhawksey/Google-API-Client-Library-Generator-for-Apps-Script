# Assured Workloads API - Apps Script Client Library

Auto-generated client library for using the **Assured Workloads API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:35:16 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:35:16 GMT
- **Created:** Sun, 20 Jul 2025 16:13:24 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageSize` | `integer` | No | The standard list page size. |

### `organizations.locations.workloads`

#### `organizations.locations.workloads.restrictAllowedResources()`

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.get()`

Gets Assured Workload associated with a CRM Node

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". |

#### `organizations.locations.workloads.list()`

Lists Assured Workloads under a CRM Node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests. |
| `params.parent` | `string` | Yes | Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`. |
| `params.filter` | `string` | No | Optional. A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported. |
| `params.pageSize` | `integer` | No | Optional. Page size. |

#### `organizations.locations.workloads.enableResourceMonitoring()`

Enable resource violation monitoring for a workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |

#### `organizations.locations.workloads.analyzeWorkloadMove()`

Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | No | The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID. |
| `params.target` | `string` | Yes | Required. The resource name of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2" |
| `params.pageSize` | `integer` | No | Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50. |
| `params.assetTypes` | `string` | No | Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). |
| `params.pageToken` | `string` | No | Optional. The page token from the previous response. It needs to be passed in the second and following requests. |

#### `organizations.locations.workloads.create()`

Creates Assured Workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.externalId` | `string` | No | Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value. |
| `params.parent` | `string` | Yes | Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.enableComplianceUpdates()`

This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |

#### `organizations.locations.workloads.delete()`

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The etag of the workload. If this is provided, it must match the server's etag. |
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |

#### `organizations.locations.workloads.patch()`

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.workloads.violations`

#### `organizations.locations.workloads.violations.list()`

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to sort the results by. The default sort order is ascending; to sort in descending order, append ` desc` to the field name. For example, `update_time desc,category`. When `view` is `VIOLATION_VIEW_DATA_BOUNDARY`, the following fields are supported: `begin_time`, `update_time`, `resource_type`, `state`, and `category`. If not specified, results are sorted by `begin_time` in descending order. |
| `params.interval.startTime` | `string` | No | The start of the time window. |
| `params.view` | `string` | No | Optional. The violation view (`VIOLATION_VIEW_ASSURED_WORKLOADS` or `VIOLATION_VIEW_DATA_BOUNDARY`) to list violations for. If not specified, `VIOLATION_VIEW_ASSURED_WORKLOADS` is used. |
| `params.parent` | `string` | Yes | Required. The workload to list violations for. To list violations across all workloads in an organization, use `-` as the workload ID. When `view` is `VIOLATION_VIEW_DATA_BOUNDARY`, violations are listed for the entire organization and location, and the workload ID is ignored. Format: `organizations/{organization}/locations/{location}/workloads/{workload}` |
| `params.interval.endTime` | `string` | No | The end of the time window. |
| `params.filter` | `string` | No | Optional. A filter expression that restricts the violations that are returned. The syntax follows [AIP-160](https://google.aip.dev/160). Only the equality operator (`=`) is supported, and expressions can be combined with `AND`, `OR`, and `NOT`. When `view` is `VIOLATION_VIEW_DATA_BOUNDARY`, the following fields are supported: `violationId`, `category`, `state` (`UNRESOLVED`, `RESOLVED`, or `EXCEPTION`), `violationType` (`ORG_POLICY` or `RESOURCE`), `resourceType`, `resourceName`, `project`, `associatedOrgPolicyViolationId`, `cloudControlName`, `workloadDisplayName`, and `complianceType` (a framework ID). Example: `state = "UNRESOLVED" AND complianceType = "builtin-fedramp-high"` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListViolations` call. Provide this token to retrieve the subsequent page. When paginating, all other parameters that are provided to `ListViolations` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of violations to return. The service might return fewer violations than this value. If unspecified, at most 100 violations are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |

#### `organizations.locations.workloads.violations.get()`

Retrieves an Assured Workloads violation by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the violation to retrieve (that is, the value of `Violation.name`). Format: `organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}` |
| `params.view` | `string` | No | Optional. The violation view (`VIOLATION_VIEW_ASSURED_WORKLOADS` or `VIOLATION_VIEW_DATA_BOUNDARY`) that the violation belongs to. If not specified, `VIOLATION_VIEW_ASSURED_WORKLOADS` is used. |

#### `organizations.locations.workloads.violations.acknowledge()`

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the violation to acknowledge. Format: `organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.workloads.updates`

#### `organizations.locations.workloads.updates.apply()`

This endpoint creates a new operation to apply the given update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the update. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}/updates/{update_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.updates.list()`

This endpoint lists all updates for the given workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Page size. The default value is 20 and the max allowed value is 100. |
| `params.parent` | `string` | Yes | Required. organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |
| `params.pageToken` | `string` | No | Page token returned from previous request. |