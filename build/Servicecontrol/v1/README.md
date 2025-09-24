# Service Control API - Apps Script Client Library

Auto-generated client library for using the **Service Control API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:47:50 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:47:50 GMT
- **Created:** Sun, 20 Jul 2025 16:54:07 GMT



---

## API Reference

### `services`

#### `services.allocateQuota()`

Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`. See google.api.Service for the definition of a service name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.check()`

Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.report()`

Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. |
| `params.requestBody` | `object` | Yes | The request body. |