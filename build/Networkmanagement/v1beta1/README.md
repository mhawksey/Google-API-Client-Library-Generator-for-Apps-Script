# Network Management API - Apps Script Client Library

Auto-generated client library for using the **Network Management API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:10:19 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:39 GMT
- **Created:** Sun, 20 Jul 2025 16:43:58 GMT



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
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.global`

### `projects.locations.global.operations`

#### `projects.locations.global.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.global.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.global.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.global.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.connectivityTests`

#### `projects.locations.global.connectivityTests.list()`

Lists all Connectivity Tests owned by a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global` |
| `params.pageSize` | `integer` | No | Number of `ConnectivityTests` to return. |
| `params.pageToken` | `string` | No | Page token from an earlier query, as returned in `next_page_token`. |
| `params.filter` | `string` | No | Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar |
| `params.orderBy` | `string` | No | Field to use to sort the list. |

#### `projects.locations.global.connectivityTests.get()`

Gets the details of a specific Connectivity Test.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. `ConnectivityTest` resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` |

#### `projects.locations.global.connectivityTests.create()`

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global` |
| `params.testId` | `string` | No | Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.connectivityTests.patch()`

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for more details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}` |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.connectivityTests.rerun()`

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.connectivityTests.delete()`

Deletes a specific `ConnectivityTest`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` |

#### `projects.locations.global.connectivityTests.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.connectivityTests.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.global.connectivityTests.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.vpcFlowLogsConfigs`

#### `projects.locations.vpcFlowLogsConfigs.list()`

Lists all `VpcFlowLogsConfigs` in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resourcs: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` |
| `params.pageSize` | `integer` | No | Optional. Number of `VpcFlowLogsConfigs` to return. |
| `params.pageToken` | `string` | No | Optional. Page token from an earlier query, as returned in `next_page_token`. |
| `params.filter` | `string` | No | Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `projects.locations.vpcFlowLogsConfigs.get()`

Gets the details of a specific `VpcFlowLogsConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level resources: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |

#### `projects.locations.vpcFlowLogsConfigs.create()`

Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well:

* name

* create_time

* update_time

* labels

* description

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` |
| `params.vpcFlowLogsConfigId` | `string` | No | Required. ID of the `VpcFlowLogsConfig`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.vpcFlowLogsConfigs.patch()`

Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well:

* name

* create_time

* update_time

* labels

* description

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" }` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.vpcFlowLogsConfigs.delete()`

Deletes a specific `VpcFlowLogsConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For an organization-level resource: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |

#### `projects.locations.vpcFlowLogsConfigs.queryOrgVpcFlowLogsConfigs()`

QueryOrgVpcFlowLogsConfigs returns a list of all organization-level VPC Flow Logs configurations applicable to the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the VpcFlowLogsConfig, specified in the following format: `projects/{project_id}/locations/global` |
| `params.pageSize` | `integer` | No | Optional. Number of `VpcFlowLogsConfigs` to return. |
| `params.pageToken` | `string` | No | Optional. Page token from an earlier query, as returned in `next_page_token`. |
| `params.filter` | `string` | No | Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). |

### `organizations`

### `organizations.locations`

#### `organizations.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `organizations.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `organizations.locations.global`

### `organizations.locations.global.operations`

#### `organizations.locations.global.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.locations.global.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.global.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.global.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations.locations.vpcFlowLogsConfigs`

#### `organizations.locations.vpcFlowLogsConfigs.list()`

Lists all `VpcFlowLogsConfigs` in a given organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resourcs: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` |
| `params.pageSize` | `integer` | No | Optional. Number of `VpcFlowLogsConfigs` to return. |
| `params.pageToken` | `string` | No | Optional. Page token from an earlier query, as returned in `next_page_token`. |
| `params.filter` | `string` | No | Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators). |
| `params.orderBy` | `string` | No | Optional. Field to use to sort the list. |

#### `organizations.locations.vpcFlowLogsConfigs.get()`

Gets the details of a specific `VpcFlowLogsConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level resources: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |

#### `organizations.locations.vpcFlowLogsConfigs.create()`

Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well:

* name

* create_time

* update_time

* labels

* description

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id}/locations/global` - For organization-level resources: `organizations/{organization_id}/locations/global` |
| `params.vpcFlowLogsConfigId` | `string` | No | Required. ID of the `VpcFlowLogsConfig`. |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.vpcFlowLogsConfigs.patch()`

Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well:

* name

* create_time

* update_time

* labels

* description

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For organization-level configurations: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" }` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.locations.vpcFlowLogsConfigs.delete()`

Deletes a specific `VpcFlowLogsConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` - For an organization-level resource: `organizations/{organization_id}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id}` |