# Assured Workloads API - Apps Script Client Library

Auto-generated client library for using the **Assured Workloads API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:22:44 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:45 GMT
- **Created:** Sun, 20 Jul 2025 16:13:24 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `organizations.locations.workloads`

#### `organizations.locations.workloads.create()`

Creates Assured Workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. |
| `params.externalId` | `string` | No | Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.patch()`

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.restrictAllowedResources()`

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.workloads.delete()`

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |
| `params.etag` | `string` | No | Optional. The etag of the workload. If this is provided, it must match the server's etag. |

#### `organizations.locations.workloads.get()`

Gets Assured Workload associated with a CRM Node

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1". |

#### `organizations.locations.workloads.analyzeWorkloadMove()`

Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.target` | `string` | Yes | Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2" |
| `params.project` | `string` | No | The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID. |
| `params.pageSize` | `integer` | No | Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50. |
| `params.pageToken` | `string` | No | Optional. The page token from the previous response. It needs to be passed in the second and following requests. |
| `params.assetTypes` | `string` | No | Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). |

#### `organizations.locations.workloads.list()`

Lists Assured Workloads under a CRM Node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests. |
| `params.filter` | `string` | No | A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported. |

#### `organizations.locations.workloads.enableResourceMonitoring()`

Enable resource violation monitoring for a workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |

#### `organizations.locations.workloads.enableComplianceUpdates()`

This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |

### `organizations.locations.workloads.violations`

#### `organizations.locations.workloads.violations.list()`

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`. |
| `params.interval.startTime` | `string` | No | The start of the time window. |
| `params.interval.endTime` | `string` | No | The end of the time window. |
| `params.pageSize` | `integer` | No | Optional. Page size. |
| `params.pageToken` | `string` | No | Optional. Page token returned from previous request. |
| `params.filter` | `string` | No | Optional. A custom filter for filtering by the Violations properties. |

#### `organizations.locations.workloads.violations.get()`

Retrieves Assured Workload Violation based on ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} |

#### `organizations.locations.workloads.violations.acknowledge()`

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.workloads.updates`

#### `organizations.locations.workloads.updates.list()`

This endpoint lists all updates for the given workload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. organizations/{org_id}/locations/{location_id}/workloads/{workload_id} |
| `params.pageSize` | `integer` | No | Page size. The default value is 20 and the max allowed value is 100. |
| `params.pageToken` | `string` | No | Page token returned from previous request. |

#### `organizations.locations.workloads.updates.apply()`

This endpoint creates a new operation to apply the given update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the update. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}/updates/{update_id} |
| `params.resource` | `object` | Yes | The request body. |