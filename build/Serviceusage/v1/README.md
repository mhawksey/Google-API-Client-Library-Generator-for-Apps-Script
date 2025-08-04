# Service Usage API - Apps Script Client Library

Auto-generated client library for using the **Service Usage API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:46:38 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:46:38 GMT
- **Created:** Sun, 20 Jul 2025 16:54:33 GMT



---

## API Reference

### `services`

#### `services.batchEnable()`

Enable multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. To enable a single service, use the `EnableService` method instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent to enable services on. An example name would be: `projects/123` where `123` is the project number. The `BatchEnableServices` method currently only supports projects. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.list()`

List all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project. WARNING: If you need to query enabled services frequently or across an organization, you should use [Cloud Asset Inventory API](https://cloud.google.com/asset-inventory/docs/apis), which provides higher throughput and richer filtering capability.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token identifying which result to start with, which is returned by a previous list call. |
| `params.filter` | `string` | No | Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`. |
| `params.parent` | `string` | Yes | Parent to search for services on. An example name would be: `projects/123` where `123` is the project number. |
| `params.pageSize` | `integer` | No | Requested size of the next page of data. Requested page size cannot exceed 200. If not set, the default page size is 50. |

#### `services.disable()`

Disable a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to disable the service on. The enable and disable methods currently only support projects. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.enable()`

Enable a service so that it can be used with a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to enable the service on. The `EnableService` and `DisableService` methods currently only support projects. Enabling a service requires that the service is public or is shared with the user enabling the service. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number. |
| `params.resource` | `object` | Yes | The request body. |

#### `services.batchGet()`

Returns the service configurations and enabled states for a given list of services.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent to retrieve services from. If this is set, the parent of all of the services specified in `names` must match this field. An example name would be: `projects/123` where `123` is the project number. The `BatchGetServices` method currently only supports projects. |
| `params.names` | `string` | No | Names of the services to retrieve. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number. A single request can get a maximum of 30 services at a time. |

#### `services.get()`

Returns the service configuration and enabled state for a given service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the consumer and service to get the `ConsumerState` for. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number. |

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | No | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |