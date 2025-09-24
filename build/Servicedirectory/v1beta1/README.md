# Service Directory API - Apps Script Client Library

Auto-generated client library for using the **Service Directory API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:47:57 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:47:57 GMT
- **Created:** Sun, 20 Jul 2025 16:54:14 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.namespaces`

#### `projects.locations.namespaces.create()`

Creates a namespace, and returns the new namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project and location the namespace will be created in. |
| `params.namespaceId` | `string` | No | Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.list()`

Lists all namespaces.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project and location whose namespaces you'd like to list. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. The default value is 100. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `labels.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `labels.owner` returns namespaces that have a label with the key `owner`, this is the same as `labels:owner` * `labels.owner=sd` returns namespaces that have key/value `owner=sd` * `name>projects/my-project/locations/us-east1/namespaces/namespace-c` returns namespaces that have name that is alphabetically later than the string, so "namespace-e" is returned but "namespace-a" is not * `labels.owner!=sd AND labels.foo=bar` returns namespaces that have `owner` in label key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that namespace doesn't have a field called "doesnotexist". Since the filter does not match any namespaces, it returns no results * `attributes.managed_registration=true` returns namespaces that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order. |

#### `projects.locations.namespaces.get()`

Gets a namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the namespace to retrieve. |

#### `projects.locations.namespaces.patch()`

Updates a namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name for the namespace in the format `projects/*/locations/*/namespaces/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.delete()`

Deletes a namespace. This also deletes all services and endpoints in the namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the namespace to delete. |

#### `projects.locations.namespaces.getIamPolicy()`

Gets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.setIamPolicy()`

Sets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.testIamPermissions()`

Tests IAM permissions for a resource (namespace, service or service workload only).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.namespaces.services`

#### `projects.locations.namespaces.services.resolve()`

Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the service to resolve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.create()`

Creates a service, and returns the new service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the namespace this service will belong to. |
| `params.serviceId` | `string` | No | Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.list()`

Lists all services belonging to a namespace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the namespace whose services you'd like to list. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. The default value is 100. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name` or `metadata.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns services that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns services that have key/value `protocol=gRPC` * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns services that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that service doesn't have a field called "doesnotexist". Since the filter does not match any services, it returns no results * `attributes.managed_registration=true` returns services that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order. |

#### `projects.locations.namespaces.services.get()`

Gets a service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the service to get. |

#### `projects.locations.namespaces.services.patch()`

Updates a service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name for the service in the format `projects/*/locations/*/namespaces/*/services/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.delete()`

Deletes a service. This also deletes all endpoints associated with the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the service to delete. |

#### `projects.locations.namespaces.services.getIamPolicy()`

Gets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.setIamPolicy()`

Sets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.testIamPermissions()`

Tests IAM permissions for a resource (namespace, service or service workload only).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.namespaces.services.endpoints`

#### `projects.locations.namespaces.services.endpoints.create()`

Creates an endpoint, and returns the new endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the service that this endpoint provides. |
| `params.endpointId` | `string` | No | Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.endpoints.list()`

Lists all endpoints.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the service whose endpoints you'd like to list. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. The default value is 100. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, `metadata.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns endpoints that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns endpoints that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn't have a field called "doesnotexist". Since the filter does not match any endpoints, it returns no results * `attributes.kubernetes_resource_type=KUBERNETES_RESOURCE_TYPE_CLUSTER_ IP` returns endpoints with the corresponding kubernetes_resource_type For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows values: `name`, `address`, `port` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order. |

#### `projects.locations.namespaces.services.endpoints.get()`

Gets an endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint to get. |

#### `projects.locations.namespaces.services.endpoints.patch()`

Updates an endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name for the endpoint in the format `projects/*/locations/*/namespaces/*/services/*/endpoints/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.services.endpoints.delete()`

Deletes an endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint to delete. |

### `projects.locations.namespaces.workloads`

#### `projects.locations.namespaces.workloads.getIamPolicy()`

Gets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.workloads.setIamPolicy()`

Sets the IAM Policy for a resource

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.namespaces.workloads.testIamPermissions()`

Tests IAM permissions for a resource (namespace, service or service workload only).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |