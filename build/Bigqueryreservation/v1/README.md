# BigQuery Reservation API - Apps Script Client Library

Auto-generated client library for using the **BigQuery Reservation API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:08 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:19 GMT
- **Created:** Sun, 20 Jul 2025 16:14:19 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.searchAssignments()`

Deprecated: Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`. |
| `params.query` | `string` | No | Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456` |
| `params.pageSize` | `integer` | No | The maximum number of items to return per page. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.searchAllAssignments()`

Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`. |
| `params.query` | `string` | No | Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456` |
| `params.pageSize` | `integer` | No | The maximum number of items to return per page. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.getBiReservation()`

Retrieves a BI reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested reservation, for example: `projects/{project_id}/locations/{location_id}/biReservation` |

#### `projects.locations.updateBiReservation()`

Updates a BI reservation. Only fields specified in the `field_mask` are updated. A singleton BI reservation always exists with default size 0. In order to reserve BI capacity it needs to be updated to an amount greater than 0. In order to release BI capacity reservation size must be set to 0.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/biReservation`. |
| `params.updateMask` | `string` | No | A list of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.reservations`

#### `projects.locations.reservations.create()`

Creates a new reservation resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project, location. E.g., `projects/myproject/locations/US` |
| `params.reservationId` | `string` | No | The reservation ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.list()`

Lists all the reservations for the project in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US` |
| `params.pageSize` | `integer` | No | The maximum number of items to return per page. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.reservations.get()`

Returns information about the reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod` |

#### `projects.locations.reservations.delete()`

Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod` |

#### `projects.locations.reservations.patch()`

Updates an existing reservation resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`. The reservation_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.failoverReservation()`

Fail over a reservation to the secondary location. The operation should be done in the current secondary location, which will be promoted to the new primary location for the reservation. Attempting to failover a reservation in the current primary location will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the reservation to failover. E.g., `projects/myproject/locations/US/reservations/team1-prod` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.getIamPolicy()`

Gets the access control policy for a resource. May return:

* A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it.

* An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.reservations.setIamPolicy()`

Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.testIamPermissions()`

Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.reservations.assignments`

#### `projects.locations.reservations.assignments.create()`

Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example:

* The organization `organizationA` contains two projects, `project1` and `project2`.

* Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. "None" assignments represent an absence of the assignment. Projects assigned to None use on-demand pricing. To create a "None" assignment, use "none" as a reservation_id in the parent. Example parent: `projects/myproject/locations/US/reservations/none`. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod` |
| `params.assignmentId` | `string` | No | The optional assignment ID. Assignment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. Max length is 64 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.assignments.list()`

Lists assignments. Only explicitly created assignments will be returned. Example:

* Organization `organizationA` contains two projects, `project1` and `project2`.

* Reservation `res1` exists and was created previously.

* CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-` |
| `params.pageSize` | `integer` | No | The maximum number of items to return per page. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.reservations.assignments.delete()`

Deletes a assignment. No expansion will happen. Example:

* Organization `organizationA` contains two projects, `project1` and `project2`.

* Reservation `res1` exists and was created previously.

* CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123` |

#### `projects.locations.reservations.assignments.move()`

Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.assignments.patch()`

Updates an existing assignment. Only the `priority` field can be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.assignments.getIamPolicy()`

Gets the access control policy for a resource. May return:

* A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it.

* An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Reservations - ReservationAssignments To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.getIamPolicy` to get policies on reservations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.reservations.assignments.setIamPolicy()`

Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Reservations To call this method, you must have the following Google IAM permissions: - `bigqueryreservation.reservations.setIamPolicy` to set policies on reservations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservations.assignments.testIamPermissions()`

Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Reservations No Google IAM permissions are required to call this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.capacityCommitments`

#### `projects.locations.capacityCommitments.create()`

Creates a new capacity commitment resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US` |
| `params.enforceSingleAdminProjectPerOrg` | `boolean` | No | If true, fail the request if another project in the organization has a capacity commitment. |
| `params.capacityCommitmentId` | `string` | No | The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.capacityCommitments.list()`

Lists all the capacity commitments for the admin project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US` |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.capacityCommitments.get()`

Returns information about the capacity commitment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the capacity commitment to retrieve. E.g., `projects/myproject/locations/US/capacityCommitments/123` |

#### `projects.locations.capacityCommitments.delete()`

Deletes a capacity commitment. Attempting to delete capacity commitment before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the capacity commitment to delete. E.g., `projects/myproject/locations/US/capacityCommitments/123` |
| `params.force` | `boolean` | No | Can be used to force delete commitments even if assignments exist. Deleting commitments with assignments may cause queries to fail if they no longer have access to slots. |

#### `projects.locations.capacityCommitments.patch()`

Updates an existing capacity commitment. Only `plan` and `renewal_plan` fields can be updated. Plan can only be changed to a plan of a longer commitment period. Attempting to change to a plan with shorter commitment period will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.capacityCommitments.split()`

Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you delete the first one after the commitment end time passes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.capacityCommitments.merge()`

Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.reservationGroups`

#### `projects.locations.reservationGroups.create()`

Creates a new reservation group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project, location. E.g., `projects/myproject/locations/US` |
| `params.reservationGroupId` | `string` | No | Required. The reservation group ID. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.reservationGroups.get()`

Returns information about the reservation group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod` |

#### `projects.locations.reservationGroups.delete()`

Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` when reservation has assignments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the reservation group to retrieve. E.g., `projects/myproject/locations/US/reservationGroups/team1-prod` |

#### `projects.locations.reservationGroups.list()`

Lists all the reservation groups for the project in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US` |
| `params.pageSize` | `integer` | No | The maximum number of items to return per page. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |