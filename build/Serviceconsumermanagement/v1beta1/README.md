# Service Consumer Management API - Apps Script Client Library

Auto-generated client library for using the **Service Consumer Management API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:20:04 GMT
- **Last Modified:** Sun, 27 Jul 2025 16:20:04 GMT
- **Created:** Sun, 20 Jul 2025 16:54:00 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `services`

### `services.consumerQuotaMetrics`

#### `services.consumerQuotaMetrics.get()`

Retrieves a summary of quota information for a specific quota metric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |
| `params.name` | `string` | Yes | The resource name of the quota metric, returned by a ListConsumerQuotaMetrics call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus` |

#### `services.consumerQuotaMetrics.importProducerQuotaPolicies()`

Create or update multiple producer quota policies atomically, all on the same ancestor, but on many different metrics or limits. The name field in the quota policy message should not be set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the consumer. An example name would be: `services/compute.googleapis.com/organizations/123` |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.importProducerOverrides()`

Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123` |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.list()`

Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123` |
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |

### `services.consumerQuotaMetrics.limits`

#### `services.consumerQuotaMetrics.limits.get()`

Retrieves a summary of quota information for a specific quota limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.view` | `string` | No | Specifies the level of detail for quota information in the response. |

### `services.consumerQuotaMetrics.limits.producerOverrides`

#### `services.consumerQuotaMetrics.limits.producerOverrides.delete()`

Deletes a producer override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d` |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.force` | `boolean` | No | Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. |

#### `services.consumerQuotaMetrics.limits.producerOverrides.create()`

Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. |
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.producerOverrides.list()`

Lists all producer overrides on this limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |
| `params.parent` | `string` | Yes | The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |

#### `services.consumerQuotaMetrics.limits.producerOverrides.patch()`

Updates a producer override.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d` |
| `params.forceOnly` | `string` | No | The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. |
| `params.force` | `boolean` | No | Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. |
| `params.updateMask` | `string` | No | Update only the specified fields. If unset, all modifiable fields will be updated. |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.resource` | `object` | Yes | The request body. |

### `services.consumerQuotaMetrics.limits.producerQuotaPolicies`

#### `services.consumerQuotaMetrics.limits.producerQuotaPolicies.delete()`

Deletes a producer quota policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the deletion of the quota policy. If the policy deletion would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction. |
| `params.validateOnly` | `boolean` | No | If set to true, validate the request, but do not actually update. |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.name` | `string` | Yes | Required. The resource name of the policy to delete. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d` |

#### `services.consumerQuotaMetrics.limits.producerQuotaPolicies.list()`

Lists all producer policies created at current consumer node for a limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested size of the next page of data. |
| `params.parent` | `string` | Yes | Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.pageToken` | `string` | No | Token identifying which result to start with; returned by a previous list call. |

#### `services.consumerQuotaMetrics.limits.producerQuotaPolicies.create()`

Creates a producer quota policy. A producer quota policy is applied by the owner or administrator of a service at an org or folder node to set the default quota limit for all consumers under the node where the policy is created. To create multiple policies at once, use ImportProducerQuotaPolicies instead. If a policy with the specified dimensions already exists, this call will fail. To overwrite an existing policy if one is already present ("upsert" semantics), use ImportProducerQuotaPolicies instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the creation of the quota policy. If the policy creation would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction. |
| `params.parent` | `string` | Yes | Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.validateOnly` | `boolean` | No | If set to true, validate the request, but do not actually update. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.consumerQuotaMetrics.limits.producerQuotaPolicies.patch()`

Updates a producer quota policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Whether to force the update of the quota policy. If the policy update would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction. |
| `params.updateMask` | `string` | No | Update only the specified fields. If unset, all modifiable fields will be updated. |
| `params.validateOnly` | `boolean` | No | If set to true, validate the request, but do not actually update. |
| `params.forceJustification` | `string` | No | If force option is set to true, force_justification is suggested to be set to log the reason in audit logs. |
| `params.name` | `string` | Yes | The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d` |
| `params.resource` | `object` | Yes | The request body. |