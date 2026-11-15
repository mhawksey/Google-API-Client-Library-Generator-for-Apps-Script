# Audit Manager API - Apps Script Client Library

Auto-generated client library for using the **Audit Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:35:28 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:35:28 GMT
- **Created:** Sun, 15 Nov 2026 15:35:28 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

#### `organizations.locations.enrollResource()`

Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.auditSchedules`

#### `organizations.locations.auditSchedules.list()`

Lists audit schedules in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |

#### `organizations.locations.auditSchedules.get()`

Gets details of a single audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}` |

#### `organizations.locations.auditSchedules.patch()`

Updates an existing audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule} |
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.updateMask` | `string` | No | Optional. List of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.auditSchedules.create()`

Creates a new audit schedule in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.auditScheduleId` | `string` | No | Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name. |
| `params.parent` | `string` | Yes | Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.standards`

### `organizations.locations.standards.controls`

#### `organizations.locations.standards.controls.list()`

Lists the controls that you must implement to become compliant to a regulatory standard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |

### `organizations.locations.auditScopeReports`

#### `organizations.locations.auditScopeReports.generate()`

Generates an audit scope report for the given standard. The report includes the following:

* The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework.

* A list of Google Cloud services and resources that are within the scope of the framework.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.auditReports`

#### `organizations.locations.auditReports.list()`

Lists the audit reports for the organization, folder, or project that you specify as the parent scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.parent` | `string` | Yes | Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |

#### `organizations.locations.auditReports.generate()`

Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.auditReports.get()`

Gets the full metadata and findings for an audit report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}` |

### `organizations.locations.operations`

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.resourceEnrollmentStatuses`

#### `organizations.locations.resourceEnrollmentStatuses.get()`

Gets a resource and its enrollment status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` |

#### `organizations.locations.resourceEnrollmentStatuses.list()`

Lists all the folders and projects in an organization or folder, along with their enrollments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent organization or folder to list enrollment statuses for, in one of the following formats: * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |

### `organizations.locations.operationDetails`

#### `organizations.locations.operationDetails.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `organizations.locations.operationIds`

#### `organizations.locations.operationIds.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.enrollResource()`

Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

### `projects.locations.resourceEnrollmentStatuses`

#### `projects.locations.resourceEnrollmentStatuses.get()`

Gets a resource and its enrollment status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` |

### `projects.locations.standards`

### `projects.locations.standards.controls`

#### `projects.locations.standards.controls.list()`

Lists the controls that you must implement to become compliant to a regulatory standard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}` |

### `projects.locations.auditScopeReports`

#### `projects.locations.auditScopeReports.generate()`

Generates an audit scope report for the given standard. The report includes the following:

* The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework.

* A list of Google Cloud services and resources that are within the scope of the framework.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operationIds`

#### `projects.locations.operationIds.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.operationDetails`

#### `projects.locations.operationDetails.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.auditSchedules`

#### `projects.locations.auditSchedules.get()`

Gets details of a single audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}` |

#### `projects.locations.auditSchedules.patch()`

Updates an existing audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. List of fields to update. |
| `params.name` | `string` | Yes | Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule} |
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.auditSchedules.create()`

Creates a new audit schedule in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` |
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.auditScheduleId` | `string` | No | Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.auditSchedules.list()`

Lists audit schedules in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.parent` | `string` | Yes | Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |

### `projects.locations.auditReports`

#### `projects.locations.auditReports.list()`

Lists the audit reports for the organization, folder, or project that you specify as the parent scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |

#### `projects.locations.auditReports.get()`

Gets the full metadata and findings for an audit report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}` |

#### `projects.locations.auditReports.generate()`

Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `folders`

### `folders.locations`

#### `folders.locations.enrollResource()`

Adds your project, folder, or organization to Audit Manager. This method creates the Audit Manager service agent in your workload and grants required permissions to the service agent. If you make this request on a workload that's already enrolled, then this method overrides the existing set of destinations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project to enroll in Audit Manager, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.locations.auditReports`

#### `folders.locations.auditReports.generate()`

Registers audit report generation requests. This method returns the operation identifier that you can use to track the report generation progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Organization, folder, or project that the audit applies to, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.auditReports.list()`

Lists the audit reports for the organization, folder, or project that you specify as the parent scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent organization, folder, or project to list reports for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |

#### `folders.locations.auditReports.get()`

Gets the full metadata and findings for an audit report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit report, in one of the following formats: * `projects/{project}/locations/{location}/auditReports/{audit_report}` * `folders/{folder}/locations/{location}/auditReports/{audit_report}` * `organizations/{organization}/locations/{location}/auditReports/{audit_report}` |

### `folders.locations.auditScopeReports`

#### `folders.locations.auditScopeReports.generate()`

Generates an audit scope report for the given standard. The report includes the following:

* The technical attributes and constraints that Audit Manager uses to verify your compliance with a framework.

* A list of Google Cloud services and resources that are within the scope of the framework.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.scope` | `string` | Yes | Required. Project or folder that the audit scope report is generated for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.locations.auditSchedules`

#### `folders.locations.auditSchedules.create()`

Creates a new audit schedule in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or folder that this audit schedule is for, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` |
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not create the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.auditScheduleId` | `string` | No | Required. ID to use for the audit schedule, which becomes the final component of the audit schedule's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.auditSchedules.get()`

Gets details of a single audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the audit schedule to retrieve, in one of the following formats: * `projects/{project}/locations/{location}/auditSchedules/{audit_schedule}` * `folders/{folder}/locations/{location}/auditSchedules/{audit_schedule}` * `organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule}` |

#### `folders.locations.auditSchedules.list()`

Lists audit schedules in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent for the audit schedule, in one of the following formats: * `projects/{project}/locations/{location}` * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |

#### `folders.locations.auditSchedules.patch()`

Updates an existing audit schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. List of fields to update. |
| `params.name` | `string` | Yes | Identifier. Unique identifier for the audit schedule. Format: projects/{project}/locations/{location}/auditSchedules/{audit_schedule} folders/{folder}/locations/{location}/auditSchedules/{audit_schedule} organizations/{organization}/locations/{location}/auditSchedules/{audit_schedule} |
| `params.validateOnly` | `boolean` | No | Optional. If `true`, only validates the request and does not update the audit schedule. This executes standard request validation (such as schema, framework existence, scope, and IAM checks) and skips the apply phase. Use this field for the following purposes: * **Infrastructure as Code (IaC)**: Allow tools like Terraform to run dry-run mutations (e.g., `terraform plan`) without creating real resources or incurring costs. * **User Interface Validation**: Enable real-time form and permission validation in custom UIs before submitting requests. * **CI/CD & Automation**: Test your scripts, permissions, and parameters safely without consuming resource quotas. |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.locations.operationDetails`

#### `folders.locations.operationDetails.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `folders.locations.standards`

### `folders.locations.standards.controls`

#### `folders.locations.standards.controls.list()`

Lists the controls that you must implement to become compliant to a regulatory standard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |
| `params.parent` | `string` | Yes | Required. Standard to list controls for, in one of the following formats: * `projects/{project}/locations/{location}/standards/{standard}` * `folders/{folder}/locations/{location}/standards/{standard}` * `organizations/{organization}/locations/{location}/standards/{standard}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |

### `folders.locations.operationIds`

#### `folders.locations.operationIds.get()`

Gets details about the long-running operation to generate audit reports.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `folders.locations.resourceEnrollmentStatuses`

#### `folders.locations.resourceEnrollmentStatuses.get()`

Gets a resource and its enrollment status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource enrollment status, in one of the following formats: * `folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` * `organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}` |

#### `folders.locations.resourceEnrollmentStatuses.list()`

Lists all the folders and projects in an organization or folder, along with their enrollments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of items to return in a single page. The service might return fewer items than this value. If unspecified, the service picks an appropriate default. The maximum value is 100; values above 100 are reduced to 100. |
| `params.parent` | `string` | Yes | Required. Parent organization or folder to list enrollment statuses for, in one of the following formats: * `folders/{folder}/locations/{location}` * `organizations/{organization}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous call, to retrieve the next page of results. |