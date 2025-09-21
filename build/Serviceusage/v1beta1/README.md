# Service Usage API - Apps Script Client Library

Auto-generated client library for using the **Service Usage API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:48:14 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:48:14 GMT
- **Created:** Sun, 20 Jul 2025 16:54:29 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |

### `services`

#### `services.list()`

Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token identifying which result to start with, which is returned by a previous list call. |
| `params.parent` | `string` | Yes | Parent to search for services on. An example name would be: `projects/123` where `123` is the project number (not project ID). |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. Requested page size cannot exceed 200. If not set, the default page size is 50. |
| `params.filter` | `string` | No | Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`. |

#### `services.enable()`

Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to enable the service on. The `EnableService` and `DisableService` methods currently only support projects. Enabling a service requires that the service is public or is shared with the user enabling the service. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.get()`

Returns the service configuration and enabled state for a given service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to get the `ConsumerState` for. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID). |

#### `services.disable()`

Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to disable the service on. The enable and disable methods currently only support projects. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.generateServiceIdentity()`

Generates service identity for service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the consumer and service to generate an identity for. The `GenerateServiceIdentity` methods currently support projects, folders, organizations. Example parents would be: `projects/123/services/example.googleapis.com` `folders/123/services/example.googleapis.com` `organizations/123/services/example.googleapis.com` |

#### `services.batchEnable()`

Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent to enable services on. An example name would be: `projects/123` where `123` is the project number (not project ID). The `BatchEnableServices` method currently only supports projects. |
| `params.requestBody` | `object` | Yes | The request body. |

### `services.consumerQuotaMetrics`

#### `services.consumerQuotaMetrics.importAdminOverrides()`

Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.list()`

Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |
| `params.parent` | `string` | Yes | Parent of the quotas resource. Some example names would be: `projects/123/services/serviceconsumermanagement.googleapis.com` `folders/345/services/serviceconsumermanagement.googleapis.com` `organizations/456/services/serviceconsumermanagement.googleapis.com` |

#### `services.consumerQuotaMetrics.get()`

Retrieves a summary of quota information for a specific quota metric

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |
| `params.name` | `string` | Yes | The resource name of the quota. An example name would be: `projects/123/services/serviceusage.googleapis.com/consumerQuotaMetrics/serviceusage.googleapis.com%2Fmutate_requests` |

#### `services.consumerQuotaMetrics.importConsumerOverrides()`

Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com` |
| `params.requestBody` | `object` | Yes | The request body. |

### `services.consumerQuotaMetrics.limits`

#### `services.consumerQuotaMetrics.limits.get()`

Retrieves a summary of quota information for a specific quota limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the quota limit. Use the quota limit resource name returned by previous ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls. |
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |

### `services.consumerQuotaMetrics.limits.consumerOverrides`

#### `services.consumerQuotaMetrics.limits.consumerOverrides.list()`

Lists all consumer overrides on this limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |

#### `services.consumerQuotaMetrics.limits.consumerOverrides.create()`

Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.force` | `boolean` | No | Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.consumerOverrides.patch()`

Updates a consumer override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.updateMask` | `string` | No | Update only the specified fields of the override. If unset, all fields will be updated. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.name` | `string` | Yes | The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.consumerOverrides.delete()`

Deletes a consumer override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.name` | `string` | Yes | The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d` |
| `params.force` | `boolean` | No | Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |

### `services.consumerQuotaMetrics.limits.adminOverrides`

#### `services.consumerQuotaMetrics.limits.adminOverrides.delete()`

Deletes an admin override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.name` | `string` | Yes | The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d` |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |

#### `services.consumerQuotaMetrics.limits.adminOverrides.create()`

Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.force` | `boolean` | No | Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.adminOverrides.patch()`

Updates an admin override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Update only the specified fields of the override. If unset, all fields will be updated. |
| `params.name` | `string` | Yes | The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d` |
| `params.force` | `boolean` | No | Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.adminOverrides.list()`

Lists all admin overrides on this limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |