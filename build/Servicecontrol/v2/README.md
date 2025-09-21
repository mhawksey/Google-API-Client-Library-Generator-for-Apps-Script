# Service Control API - Apps Script Client Library

Auto-generated client library for using the **Service Control API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:47:53 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:47:53 GMT
- **Created:** Sun, 20 Jul 2025 16:54:10 GMT



---

## API Reference

### `services`

#### `services.check()`

This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `services.report()`

This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 100 operations and 1MB per Report call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serviceName` | `string` | Yes | The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. |
| `params.requestBody` | `object` | Yes | The request body. |