# Agent Registry API - Apps Script Client Library

Auto-generated client library for using the **Agent Registry API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:26:19 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:26:19 GMT
- **Created:** Mon, 30 Mar 2026 19:58:45 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |

### `projects.locations.aiApplications`

#### `projects.locations.aiApplications.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.aiApplications.list()`

Lists AI Applications in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.parent` | `string` | Yes | Required. Parent project and location to query. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.aiApplications.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.aiApplications.get()`

Gets details of a single AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Target AI Application resource name. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}` |

#### `projects.locations.aiApplications.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.aiApplications.agents`

#### `projects.locations.aiApplications.agents.get()`

Gets details of a single Agent under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/agents/{agent}` |

#### `projects.locations.aiApplications.agents.list()`

Lists Agents under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. Parent value (AI Application) for ListAiApplicationAgentsRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}` |

### `projects.locations.aiApplications.mcpServers`

#### `projects.locations.aiApplications.mcpServers.get()`

Gets details of a single McpServer under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/mcpServers/{mcp_server}` |

#### `projects.locations.aiApplications.mcpServers.list()`

Lists McpServers under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value (AI Application) for ListAiApplicationMcpServersRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}` |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

### `projects.locations.aiApplications.endpoints`

#### `projects.locations.aiApplications.endpoints.get()`

Gets details of a single Endpoint under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/endpoints/{endpoint}` |

#### `projects.locations.aiApplications.endpoints.list()`

Lists Endpoints under an AI Application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value (AI Application) for ListAiApplicationEndpointsRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.operations`

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.mcpServers`

#### `projects.locations.mcpServers.list()`

Lists McpServers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.parent` | `string` | Yes | Required. Parent value for ListMcpServersRequest. Format: `projects/{project}/locations/{location}`. |

#### `projects.locations.mcpServers.get()`

Gets details of a single McpServer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.mcpServers.search()`

Searches McpServers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for SearchMcpServersRequest. Format: `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.services`

#### `projects.locations.services.get()`

Gets details of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |

#### `projects.locations.services.delete()`

Deletes a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |

#### `projects.locations.services.patch()`

Updates the parameters of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.services.create()`

Creates a new Service in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The project and location to create the Service in. Expected format: `projects/{project}/locations/{location}`. |
| `params.serviceId` | `string` | No | Required. The ID to use for the service, which will become the final component of the service's resource name. This value should be 4-63 characters, and valid characters are `/a-z-/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.services.list()`

Lists Services in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. A query string used to filter the list of services returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, and `labels` fields. Some examples: * `name = "projects/p1/locations/l1/services/s1"` * `display_name = "my-service"` * `description : "myservice description"` * `labels.env = "prod"` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.parent` | `string` | Yes | Required. The project and location to list services in. Expected format: `projects/{project}/locations/{location}`. |

### `projects.locations.endpoints`

#### `projects.locations.endpoints.list()`

Lists Endpoints in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.parent` | `string` | Yes | Required. The project and location to list endpoints in. Expected format: `projects/{project}/locations/{location}`. |
| `params.filter` | `string` | No | Optional. A query string used to filter the list of endpoints returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, `version`, and `interfaces` fields. Some examples: * `name = "projects/p1/locations/l1/endpoints/e1"` * `display_name = "my-endpoint"` * `description = "my-endpoint-description"` * `version = "v1"` * `interfaces.transport = "HTTP_JSON"` |

#### `projects.locations.endpoints.get()`

Gets details of a single Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint to retrieve. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |

### `projects.locations.agents`

#### `projects.locations.agents.list()`

Lists Agents in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.parent` | `string` | Yes | Required. Parent value for ListAgentsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.agents.get()`

Gets details of a single Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.agents.search()`

Searches Agents in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for SearchAgentsRequest. Format: `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.publishers`

#### `projects.locations.publishers.get()`

Fetches details of a specific Publisher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Target publisher resource name. Format: `projects/{project}/locations/{location}/publishers/{publisher}` |

#### `projects.locations.publishers.list()`

Lists all Publishers in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent location to query. Format: `projects/{project}/locations/{location}` |
| `params.pageToken` | `string` | No | Optional. Page offset token. |
| `params.pageSize` | `integer` | No | Optional. Page limit size. |

### `projects.locations.skills`

#### `projects.locations.skills.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.skills.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.skills.list()`

Lists logical Skills available in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListSkillsRequest |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Use this field to specify filter criteria on list results. Filter expressions can be used to restrict results based upon filterable fields, where equality operators can be used. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `<`, `>`, `NOT`, `AND`, `OR`, and `()`. | Field | `=` | `<`, `>` | |--------------|-----|----------| | state | Yes | No | | targetState | Yes | No | | createTime | Yes | Yes | | updateTime | Yes | Yes | Examples: * `state=ACTIVE` to restrict results to skills in the `ACTIVE` state. |

#### `projects.locations.skills.search()`

Custom deep-search method to filter by frontmatter or query SKILL.md text blobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for SearchSkillsRequest. Format: `projects/{project}/locations/{location}`. |
| `params.filter` | `string` | No | Optional. Use this field to specify additional filter criteria on search results. Filter expressions can be used to restrict results based upon filterable fields, where equality operators can be used. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `<`, `>`, `NOT`, `AND`, `OR`, and `()`. | Field | `=` | `<`, `>` | |--------------|-----|----------| | state | Yes | No | | targetState | Yes | No | | createTime | Yes | Yes | | updateTime | Yes | Yes | Examples: * `state=ACTIVE` to restrict results to skills in the `ACTIVE` state. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of search results to return per page. The page size is capped at `100`, even if a larger value is specified. A negative value will result in an `INVALID_ARGUMENT` error. If unspecified or set to `0`, a default value of `20` will be used. The server may return fewer results than requested. |
| `params.searchType` | `string` | No | Optional. The type of search. |
| `params.searchString` | `string` | No | Optional. Search criteria used to select the Skills to return. If no search criteria is specified then all accessible Skills will be returned. Search expressions can be used to restrict results based upon searchable fields, where the operators can be used along with the suffix wildcard symbol `*`. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`. Searchable fields: | Field | `=` | `:` | `*` | Keyword Search | |---------------------------|-----|-----|-----|----------------| | skillId | Yes | Yes | Yes | Included | | name | No | Yes | Yes | Included | | displayName | No | Yes | Yes | Included | | description | No | Yes | No | Included | | frontmatter.name | No | Yes | No | Included | | frontmatter.description | No | Yes | No | Included | | frontmatter.compatibility | No | Yes | No | Included | | frontmatter.license | No | Yes | No | Included | Examples: * `skillId="urn:skill:projects-1234:locations:global:private-important-skill"` to find the skill with the specified skill ID. * `name:important` to find skills whose name contains `important` as a word. * `displayName:works*` to find skills whose display name contains words that start with `works`. |
| `params.pageToken` | `string` | No | Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call. |

#### `projects.locations.skills.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

#### `projects.locations.skills.delete()`

Deletes a Skill container along with all its revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Signed UUID request idempotency token. |
| `params.force` | `boolean` | No | Optional. If set to true, any child SkillRevisions under this Skill will also be deleted. Otherwise, the request will only succeed if the Skill has no child SkillRevisions. |
| `params.name` | `string` | Yes | Required. Target Skill container name to remove. |

#### `projects.locations.skills.patch()`

Updates Skill metadata or overrides active pointers/state using REST standard PATCH.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. Signed UUID request idempotency token. |
| `params.name` | `string` | Yes | Identifier. Resource name of the Skill. Format: `projects/{project}/locations/{location}/skills/{skill}` The `{skill}` segment acts as the resource ID. If the skill is associated with a Publisher, this segment typically uses a hyphenated namespace prefix corresponding to the publisher (e.g., `google-workspace-create-docs`). |
| `params.updateMask` | `string` | No | Optional. Standard update target mask mapping relative fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.skills.create()`

========================================================================= # Skills Collection APIs Creates a Skill resource container, optionally publishing the initial SkillRevision inline in a single, atomic CRUD roundtrip.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location location to bootstrap. |
| `params.requestId` | `string` | No | Optional. Signed UUID request idempotency token. |
| `params.skillId` | `string` | No | Required. Custom, user-defined unique container identifier. Must be unique within the parent project and location. This value should be 4-64 characters, and valid characters are `/a-z-/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.skills.get()`

Fetches the active configuration and metadata of a Skill.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Target resource container name. |

### `projects.locations.skills.revisions`

#### `projects.locations.skills.revisions.create()`

Creates a new immutable revision and triggers validation pipelines.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.skillRevisionId` | `string` | No | Optional. Custom, user-defined unique revision identifier. Format: 4-63 characters, matching regex `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$` |
| `params.parent` | `string` | Yes | Required. Parent logical container name. |
| `params.requestId` | `string` | No | Optional. Signed UUID request idempotency token. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.skills.revisions.delete()`

Deletes a specific revision (restricted to admins to purge accidentally committed secrets).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Target revision name to remove. |
| `params.requestId` | `string` | No | Optional. Signed UUID request idempotency token. |

#### `projects.locations.skills.revisions.list()`

Lists all revisions belonging to a parent Skill.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Page limit size. |
| `params.parent` | `string` | Yes | Required. Parent logical container name to query. |
| `params.pageToken` | `string` | No | Optional. Page offset token. |

#### `projects.locations.skills.revisions.get()`

Gets details of a single immutable Revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Target revision name. |

### `projects.locations.bindings`

#### `projects.locations.bindings.create()`

Creates a new Binding in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bindingId` | `string` | No | Required. The ID to use for the binding, which will become the final component of the binding's resource name. This value should be 4-63 characters, and must conform to RFC-1034. Specifically, it must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The project and location to create the Binding in. Expected format: `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.bindings.get()`

Gets details of a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |

#### `projects.locations.bindings.fetchAvailable()`

Fetches available Bindings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. |
| `params.targetIdentifier` | `string` | No | Optional. The identifier of the target Agent, MCP Server, or Endpoint. Format: * `urn:agent:{publisher}:{namespace}:{name}` * `urn:mcp:{publisher}:{namespace}:{name}` * `urn:endpoint:{publisher}:{namespace}:{name}` |
| `params.sourceIdentifier` | `string` | No | The identifier of the source Agent. Format: * `urn:agent:{publisher}:{namespace}:{name}` |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.bindings.delete()`

Deletes a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |

#### `projects.locations.bindings.list()`

Lists Bindings in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. A query string used to filter the list of bindings returned. The filter expression must follow AIP-160 syntax. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.parent` | `string` | Yes | Required. The project and location to list bindings in. Expected format: `projects/{project}/locations/{location}`. |

#### `projects.locations.bindings.patch()`

Updates the parameters of a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Binding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.findings`

#### `projects.locations.findings.get()`

Gets details of a single Finding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Finding to retrieve. Format: `projects/{project}/locations/{location}/findings/{finding}`. |

#### `projects.locations.findings.list()`

Lists Findings in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.parent` | `string` | Yes | Required. Parent value for ListFindingsRequest. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |