# Cloud Controls Partner API - Apps Script Client Library

Auto-generated client library for using the **Cloud Controls Partner API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:37:12 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:22 GMT
- **Created:** Sun, 20 Jul 2025 16:21:32 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

#### `organizations.locations.getPartner()`

Get details of a Partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `organizations/{organization}/locations/{location}/partner` |

### `organizations.locations.customers`

#### `organizations.locations.customers.get()`

Gets details of a single customer

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}` |

#### `organizations.locations.customers.list()`

Lists customers of a partner identified by its Google Cloud organization ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource Format: `organizations/{organization}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of Customers to return. The service may return fewer than this value. If unspecified, at most 500 Customers will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCustomers` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `organizations.locations.customers.create()`

Creates a new customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource Format: `organizations/{organization}/locations/{location}` |
| `params.customerId` | `string` | No | Required. The customer id to use for the customer, which will become the final component of the customer's resource name. The specified value must be a valid Google cloud organization id. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.customers.patch()`

Update details of a single customer

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.customers.delete()`

Delete details of a single customer

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. name of the resource to be deleted format: name=organizations/*/locations/*/customers/* |

### `organizations.locations.customers.workloads`

#### `organizations.locations.customers.workloads.get()`

Gets details of a single workload

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` |

#### `organizations.locations.customers.workloads.list()`

Lists customer workloads for a given customer org id

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}` |
| `params.pageSize` | `integer` | No | The maximum number of workloads to return. The service may return fewer than this value. If unspecified, at most 500 workloads will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkloads` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `organizations.locations.customers.workloads.getEkmConnections()`

Gets the EKM connections associated with a workload

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections` |

#### `organizations.locations.customers.workloads.getPartnerPermissions()`

Gets the partner permissions granted for a workload

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource to get in the format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/partnerPermissions` |

### `organizations.locations.customers.workloads.accessApprovalRequests`

#### `organizations.locations.customers.workloads.accessApprovalRequests.list()`

Deprecated: Only returns access approval requests directly associated with an assured workload folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAccessApprovalRequests` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

### `organizations.locations.customers.workloads.violations`

#### `organizations.locations.customers.workloads.violations.list()`

Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource Format `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListViolations` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.interval.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.interval.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |

#### `organizations.locations.customers.workloads.violations.get()`

Gets details of a single Violation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}` |