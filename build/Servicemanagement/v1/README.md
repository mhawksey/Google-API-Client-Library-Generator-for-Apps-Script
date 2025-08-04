# Service Management API - Apps Script Client Library

Auto-generated client library for using the **Service Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:46:22 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:46:22 GMT
- **Created:** Sun, 20 Jul 2025 16:54:20 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists service operations that match the specified filter in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Not used. |
| `params.filter` | `string` | No | A string for filtering Operations. The following filter fields are supported: * serviceName: Required. Only `=` operator is allowed. * startTime: The time this job was started, in ISO 8601 format. Allowed operators are `>=`, `>`, `<=`, and `<`. * status: Can be `done`, `in_progress`, or `failed`. Allowed operators are `=`, and `!=`. Filter expression supports conjunction (AND) and disjunction (OR) logical operators. However, the serviceName restriction must be at the top-level and can only be combined with other restrictions via the AND logical operator. Examples: * `serviceName={some-service}.googleapis.com` * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"` * `serviceName={some-service}.googleapis.com AND status=done` * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")` |
| `params.pageSize` | `integer` | No | The maximum number of operations to return. If unspecified, defaults to 50. The maximum value is 100. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `services`

#### `services.list()`

Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.producerProjectId` | `string` | No | Include services produced by the specified project. |
| `params.pageSize` | `integer` | No | The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 500. |
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |
| `params.consumerId` | `string` | No | Include services consumed by the specified consumer. The Google Service Management implementation accepts the following forms: - project: |

#### `services.get()`

Gets a managed service. Authentication is required unless the service is public.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the `ServiceManager` overview for naming requirements. For example: `example.googleapis.com`. |

#### `services.create()`

Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `services.delete()`

Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |

#### `services.undelete()`

Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |

#### `services.getConfig()`

Gets a service configuration (version) for a managed service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.configId` | `string` | No | Required. The id of the service configuration resource. This field must be specified for the server to return all fields, including `SourceInfo`. |
| `params.view` | `string` | No | Specifies which parts of the Service Config should be returned in the response. |

#### `services.generateConfigReport()`

Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `services.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `services.configs`

#### `services.configs.list()`

Lists the history of the service configuration for a managed service, from the newest to the oldest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.pageToken` | `string` | No | The token of the page to retrieve. |
| `params.pageSize` | `integer` | No | The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 100. |

#### `services.configs.get()`

Gets a service configuration (version) for a managed service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.configId` | `string` | Yes | Required. The id of the service configuration resource. This field must be specified for the server to return all fields, including `SourceInfo`. |
| `params.view` | `string` | No | Specifies which parts of the Service Config should be returned in the response. |

#### `services.configs.create()`

Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.configs.submit()`

Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.resource` | `object` | Yes | The request body. |

### `services.rollouts`

#### `services.rollouts.list()`

Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.pageToken` | `string` | No | The token of the page to retrieve. |
| `params.pageSize` | `integer` | No | The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 100. |
| `params.filter` | `string` | No | Required. Use `filter` to return subset of rollouts. The following filters are supported: -- By status. For example, `filter='status=SUCCESS'` -- By strategy. For example, `filter='strategy=TrafficPercentStrategy'` |

#### `services.rollouts.get()`

Gets a service configuration rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.rolloutId` | `string` | Yes | Required. The id of the rollout resource. |

#### `services.rollouts.create()`

Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`. |
| `params.resource` | `object` | Yes | The request body. |

### `services.consumers`

#### `services.consumers.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumers.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumers.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |