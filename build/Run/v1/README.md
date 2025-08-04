# Cloud Run Admin API - Apps Script Client Library

Auto-generated client library for using the **Cloud Run Admin API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:44:52 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:44:52 GMT
- **Created:** Sun, 20 Jul 2025 16:52:52 GMT



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

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. To query for all of the operations for a project. |
| `params.filter` | `string` | No | Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project. |
| `params.pageSize` | `integer` | No | The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. . |
| `params.pageToken` | `string` | No | Token identifying which result to start with, which is returned by a previous list call. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.authorizeddomains`

#### `projects.locations.authorizeddomains.list()`

List authorized domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent Project resource. Example: `projects/myproject`. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

### `projects.locations.revisions`

#### `projects.locations.revisions.list()`

List revisions. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `projects.locations.revisions.get()`

Get information about a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `projects.locations.revisions.delete()`

Delete a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. |
| `params.kind` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

### `projects.locations.configurations`

#### `projects.locations.configurations.list()`

List configurations. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number. |
| `params.limit` | `integer` | No | Optional. The maximum number of the records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not supported by Cloud Run. |
| `params.fieldSelector` | `string` | No | Not supported by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Not supported by Cloud Run. |
| `params.watch` | `boolean` | No | Not supported by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `projects.locations.configurations.get()`

Get information about a configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number. |

### `projects.locations.domainmappings`

#### `projects.locations.domainmappings.create()`

Create a new domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.domainmappings.list()`

List all domain mappings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `projects.locations.domainmappings.get()`

Get information about a domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `projects.locations.domainmappings.delete()`

Delete a domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information. |
| `params.kind` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

### `projects.locations.jobs`

#### `projects.locations.jobs.getIamPolicy()`

Get the IAM Access Control policy currently in effect for the given job. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.jobs.setIamPolicy()`

Sets the IAM Access control policy for the specified job. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.testIamPermissions()`

Returns permissions that a caller has on the specified job. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.routes`

#### `projects.locations.routes.list()`

List routes. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `projects.locations.routes.get()`

Get information about a route.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

### `projects.locations.services`

#### `projects.locations.services.list()`

Lists services for the given project and region. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.limit` | `integer` | No | The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not supported, and ignored by Cloud Run. |
| `params.fieldSelector` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.watch` | `boolean` | No | Not supported, and ignored by Cloud Run. |
| `params.continue` | `string` | No | Encoded string to continue paging. |

#### `projects.locations.services.get()`

Gets information about a service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |

#### `projects.locations.services.create()`

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.replaceService()`

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.delete()`

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |
| `params.propagationPolicy` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.kind` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.apiVersion` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

#### `projects.locations.services.getIamPolicy()`

Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.services.setIamPolicy()`

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.services.testIamPermissions()`

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workerpools`

#### `projects.locations.workerpools.getIamPolicy()`

Get the IAM Access Control policy currently in effect for the given worker pool. This result does not include any inherited policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.workerpools.setIamPolicy()`

Sets the IAM Access control policy for the specified worker pool. Overwrites any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerpools.testIamPermissions()`

Returns permissions that a caller has on the specified worker pool. There are no permissions required for making this API call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.authorizeddomains`

#### `projects.authorizeddomains.list()`

List authorized domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent Project resource. Example: `projects/myproject`. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

### `namespaces`

### `namespaces.authorizeddomains`

#### `namespaces.authorizeddomains.list()`

List authorized domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent Project resource. Example: `projects/myproject`. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

### `namespaces.revisions`

#### `namespaces.revisions.list()`

List revisions. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `namespaces.revisions.get()`

Get information about a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `namespaces.revisions.delete()`

Delete a revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. |
| `params.kind` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

### `namespaces.configurations`

#### `namespaces.configurations.list()`

List configurations. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number. |
| `params.limit` | `integer` | No | Optional. The maximum number of the records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not supported by Cloud Run. |
| `params.fieldSelector` | `string` | No | Not supported by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Not supported by Cloud Run. |
| `params.watch` | `boolean` | No | Not supported by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `namespaces.configurations.get()`

Get information about a configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number. |

### `namespaces.domainmappings`

#### `namespaces.domainmappings.create()`

Create a new domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.domainmappings.list()`

List all domain mappings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `namespaces.domainmappings.get()`

Get information about a domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `namespaces.domainmappings.delete()`

Delete a domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information. |
| `params.kind` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Cloud Run currently ignores this parameter. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

### `namespaces.tasks`

#### `namespaces.tasks.get()`

Get information about a task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the task to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `namespaces.tasks.list()`

List tasks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace from which the tasks should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.fieldSelector` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.labelSelector` | `string` | No | Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted. |
| `params.resourceVersion` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.watch` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.continue` | `string` | No | Optional. Optional encoded string to continue paging. |

### `namespaces.executions`

#### `namespaces.executions.delete()`

Delete an execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the execution to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting. |
| `params.kind` | `string` | No | Optional. Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Optional. Cloud Run currently ignores this parameter. |

#### `namespaces.executions.get()`

Get information about an execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the execution to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `namespaces.executions.list()`

List executions. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace from which the executions should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of the records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.fieldSelector` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.labelSelector` | `string` | No | Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.watch` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.continue` | `string` | No | Optional. Optional encoded string to continue paging. |

#### `namespaces.executions.cancel()`

Cancel an execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the execution to cancel. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.resource` | `object` | Yes | The request body. |

### `namespaces.jobs`

#### `namespaces.jobs.create()`

Create a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace in which the job should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.jobs.replaceJob()`

Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.jobs.delete()`

Delete a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.propagationPolicy` | `string` | No | Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information. |
| `params.kind` | `string` | No | Optional. Cloud Run currently ignores this parameter. |
| `params.apiVersion` | `string` | No | Optional. Cloud Run currently ignores this parameter. |

#### `namespaces.jobs.get()`

Get information about a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

#### `namespaces.jobs.list()`

List jobs. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The namespace from which the jobs should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.fieldSelector` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.labelSelector` | `string` | No | Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Optional. Not supported by Cloud Run. |
| `params.watch` | `boolean` | No | Optional. Not supported by Cloud Run. |
| `params.continue` | `string` | No | Optional. Optional encoded string to continue paging. |

#### `namespaces.jobs.run()`

Trigger creation of a new execution of this job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.resource` | `object` | Yes | The request body. |

### `namespaces.routes`

#### `namespaces.routes.list()`

List routes. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |
| `params.limit` | `integer` | No | Optional. The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not currently used by Cloud Run. |
| `params.fieldSelector` | `string` | No | Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run. |
| `params.watch` | `boolean` | No | Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run. |
| `params.continue` | `string` | No | Optional. Encoded string to continue paging. |

#### `namespaces.routes.get()`

Get information about a route.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID |

### `namespaces.services`

#### `namespaces.services.list()`

Lists services for the given project and region. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.limit` | `integer` | No | The maximum number of records that should be returned. |
| `params.includeUninitialized` | `boolean` | No | Not supported, and ignored by Cloud Run. |
| `params.fieldSelector` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.labelSelector` | `string` | No | Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. |
| `params.resourceVersion` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.watch` | `boolean` | No | Not supported, and ignored by Cloud Run. |
| `params.continue` | `string` | No | Encoded string to continue paging. |

#### `namespaces.services.get()`

Gets information about a service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |

#### `namespaces.services.create()`

Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.services.replaceService()`

Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.services.delete()`

Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}` |
| `params.propagationPolicy` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.kind` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.apiVersion` | `string` | No | Not supported, and ignored by Cloud Run. |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |

### `namespaces.workerpools`

#### `namespaces.workerpools.list()`

Lists worker pools for the given project and region. Results are sorted by creation time, descending.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.limit` | `integer` | No | The maximum number of records that should be returned. |
| `params.labelSelector` | `string` | No | =, !=, exists, in, and notIn. |
| `params.continue` | `string` | No | Encoded string to continue paging. |

#### `namespaces.workerpools.get()`

Gets information about a worker pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the worker pool to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` |

#### `namespaces.workerpools.create()`

Creates a new WorkerPool. WorkerPool creation will trigger a new deployment. Use GetWorkerPool, and check worker_pool.status to determine if the WorkerPool is ready.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.workerpools.replaceWorkerPool()`

Replaces a worker pool. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the worker pool to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |
| `params.resource` | `object` | Yes | The request body. |

#### `namespaces.workerpools.delete()`

Deletes the provided worker pool. This will cause the WorkerPool to stop all instances and will delete all associated WorkerPoolRevisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully qualified name of the worker pool to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}` |
| `params.dryRun` | `string` | No | Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all` |