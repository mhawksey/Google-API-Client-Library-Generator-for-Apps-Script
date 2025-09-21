# Connectors API - Apps Script Client Library

Auto-generated client library for using the **Connectors API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:32:05 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:04:43 GMT
- **Created:** Sun, 20 Jul 2025 16:23:46 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getRuntimeConfig()`

Gets the runtimeConfig of a location. RuntimeConfig is a singleton resource for each location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/runtimeConfig` |

#### `projects.locations.getRegionalSettings()`

GetRegionalSettings gets settings of a region. RegionalSettings is a singleton resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Regional Settings. |

#### `projects.locations.updateRegionalSettings()`

Update the settings of a region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.connections`

#### `projects.locations.connections.listenEvent()`

ListenEvent listens to the event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourcePath` | `string` | Yes | Required. Resource path for request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.list()`

Lists Connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the Connection, of the form: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |
| `params.view` | `string` | No | Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view. |

#### `projects.locations.connections.search()`

Returns Top matching Connections for a given query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Parent resource of the Connection, of the form: `projects/*/locations/*/connections` |
| `params.query` | `string` | No | Required. The query against which the search needs to be done. |
| `params.pageSize` | `integer` | No | Optional. The number of top matching connectors to return |
| `params.pageToken` | `string` | No | Optional. page_token |

#### `projects.locations.connections.get()`

Gets details of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*` |
| `params.view` | `string` | No | Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view. |

#### `projects.locations.connections.create()`

Creates a new Connection in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the Connection, of the form: `projects/*/locations/*` |
| `params.connectionId` | `string` | No | Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.patch()`

Updates the parameters of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Fields are specified relative to the connection. A field will be overwritten if it is in the mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. You can modify only the fields listed below. To lock/unlock a connection: * `lock_config` To suspend/resume a connection: * `suspended` To update the connection details: * `description` * `labels` * `connector_version` * `config_variables` * `auth_config` * `destination_configs` * `node_config` * `log_config` * `ssl_config` * `eventing_enablement_type` * `eventing_config` * `auth_override_enabled` * `async_operations_enabled` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.delete()`

Deletes a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*` |
| `params.force` | `boolean` | No | Optional. If set to true, any child EndUserAuthentication/EventSubscription resources will also be deleted. Otherwise, the request will fail if the connection has any children. Followed the best practice from https://aip.dev/135#cascading-delete |

#### `projects.locations.connections.getConnectionSchemaMetadata()`

Gets schema metadata of a connection. SchemaMetadata is a singleton resource for each connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Connection name Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |

#### `projects.locations.connections.repairEventing()`

RepaiEventing tries to repair eventing related event subscriptions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.connections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.connections.connectionSchemaMetadata`

#### `projects.locations.connections.connectionSchemaMetadata.refresh()`

Refresh runtime schema of a connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.connectionSchemaMetadata.listEntityTypes()`

List entity types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |
| `params.pageSize` | `integer` | No | Page size. If unspecified, at most 50 entity types will be returned. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Required. Filter Wildcards are not supported in the filter currently. |
| `params.view` | `string` | No | Specifies which fields are returned in response. Defaults to BASIC view. |

#### `projects.locations.connections.connectionSchemaMetadata.listActions()`

List actions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name format. projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |
| `params.pageSize` | `integer` | No | Page size. If unspecified, at most 50 actions will be returned. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Required. Filter Wildcards are not supported in the filter currently. |
| `params.view` | `string` | No | Specifies which fields are returned in response. Defaults to BASIC view. |

#### `projects.locations.connections.connectionSchemaMetadata.getEntityType()`

Get entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |
| `params.entityId` | `string` | No | Required. Id of the entity type. |

#### `projects.locations.connections.connectionSchemaMetadata.getAction()`

Get action.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |
| `params.actionId` | `string` | No | Required. Id of the action. |

### `projects.locations.connections.runtimeEntitySchemas`

#### `projects.locations.connections.runtimeEntitySchemas.list()`

List schema of a runtime entities filtered by entity name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of RuntimeEntitySchema Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Required. Filter Format: entity="{entityId}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently. |

### `projects.locations.connections.runtimeActionSchemas`

#### `projects.locations.connections.runtimeActionSchemas.list()`

List schema of a runtime actions filtered by action name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of RuntimeActionSchema Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Required. Filter Format: action="{actionId}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently. |
| `params.schemaAsString` | `boolean` | No | Optional. Flag to indicate if schema should be returned as string or not |

### `projects.locations.connections.eventSubscriptions`

#### `projects.locations.connections.eventSubscriptions.list()`

List EventSubscriptions in a given project,location and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the EventSubscription, of the form: `projects/*/locations/*/connections/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |

#### `projects.locations.connections.eventSubscriptions.get()`

Gets details of a single EventSubscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*/eventSubscriptions/*` |

#### `projects.locations.connections.eventSubscriptions.create()`

Creates a new EventSubscription in a given project,location and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the EventSubscription, of the form: `projects/*/locations/*/connections/*` |
| `params.eventSubscriptionId` | `string` | No | Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.eventSubscriptions.patch()`

Updates the parameters of a single EventSubscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Fields are specified relative to the Subscription. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EventSubscription details: * `serviceAccount` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.eventSubscriptions.delete()`

Deletes a single EventSubscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*/eventsubscriptions/*` |

#### `projects.locations.connections.eventSubscriptions.retry()`

RetryEventSubscription retries the registration of Subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*/eventSubscriptions/*` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.connections.endUserAuthentications`

#### `projects.locations.connections.endUserAuthentications.list()`

List EndUserAuthentications in a given project,location and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the EndUserAuthentication, of the form: `projects/*/locations/*/connections/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |

#### `projects.locations.connections.endUserAuthentications.get()`

Gets details of a single EndUserAuthentication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*/EndUserAuthentications/*` |
| `params.view` | `string` | No | Optional. View of the EndUserAuthentication to return. |

#### `projects.locations.connections.endUserAuthentications.create()`

Creates a new EndUserAuthentication in a given project,location and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the EndUserAuthentication, of the form: `projects/*/locations/*/connections/*` |
| `params.endUserAuthenticationId` | `string` | No | Required. Identifier to assign to the EndUserAuthentication. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.endUserAuthentications.patch()`

Updates the parameters of a single EndUserAuthentication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project}/locations/{location}/connections/{connection}/endUserAuthentications/{end_user_authentication} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EndUserAuthentication details: * `notify_endpoint_destination` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.endUserAuthentications.delete()`

Deletes a single EndUserAuthentication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/connections/*/endUserAuthentication/*` |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

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

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.providers`

#### `projects.locations.providers.list()`

Lists Providers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the API, of the form: `projects/*/locations/*` Only global location is supported for Provider resource. |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |

#### `projects.locations.providers.get()`

Gets details of a provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/providers/*` Only global location is supported for Provider resource. |

#### `projects.locations.providers.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.providers.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.providers.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.providers.connectors`

#### `projects.locations.providers.connectors.list()`

Lists Connectors in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the connectors, of the form: `projects/*/locations/*/providers/*` Only global location is supported for Connector resource. |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter string. |

#### `projects.locations.providers.connectors.get()`

Gets details of a single Connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/providers/*/connectors/*` Only global location is supported for Connector resource. |

### `projects.locations.providers.connectors.versions`

#### `projects.locations.providers.connectors.versions.list()`

Lists Connector Versions in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.view` | `string` | No | Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view. |

#### `projects.locations.providers.connectors.versions.get()`

Gets details of a single connector version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/providers/*/connectors/*/versions/*` Only global location is supported for ConnectorVersion resource. |
| `params.view` | `string` | No | Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view. |

#### `projects.locations.providers.connectors.versions.fetchAuthSchema()`

fetch and return the list of auth config variables required to override the connection backend auth.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Parent resource of the Connector Version, of the form: `projects/*/locations/*/providers/*/connectors/*/versions/*` |
| `params.view` | `string` | No | Optional. View of the AuthSchema. The default value is BASIC. |

### `projects.locations.providers.connectors.versions.eventtypes`

#### `projects.locations.providers.connectors.versions.eventtypes.list()`

Lists Event Types in a given Connector Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the connectors, of the form: `projects/*/locations/*/providers/*/connectors/*/versions/*` Only global location is supported for EventType resource. |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |

#### `projects.locations.providers.connectors.versions.eventtypes.get()`

Gets details of a single event type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/providers/*/connectors/*/versions/*/eventtypes/*` Only global location is supported for EventType resource. |

### `projects.locations.global`

#### `projects.locations.global.getSettings()`

GetGlobalSettings gets settings of a project. GlobalSettings is a singleton resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Settings. |

#### `projects.locations.global.updateSettings()`

Update the global settings of a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.managedZones`

#### `projects.locations.global.managedZones.list()`

List ManagedZones in a given project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the Managed Zone, of the form: `projects/*/locations/global` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. |

#### `projects.locations.global.managedZones.get()`

Gets details of a single ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/global/managedZones/*` |

#### `projects.locations.global.managedZones.create()`

Creates a new ManagedZone in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the ManagedZone, of the form: `projects/*/locations/global` |
| `params.managedZoneId` | `string` | No | Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.managedZones.patch()`

Updates the parameters of a single ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.managedZones.delete()`

Deletes a single ManagedZone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/global/managedZones/*` |

### `projects.locations.global.customConnectors`

#### `projects.locations.global.customConnectors.delete()`

Deletes a single CustomConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{connector}` |
| `params.force` | `boolean` | No | Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete |

#### `projects.locations.global.customConnectors.list()`

List CustomConnectorVersions in a given project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the custom connectors, of the form: `projects/*/locations/*` Only global location is supported for CustomConnector resource. |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter string. |

#### `projects.locations.global.customConnectors.get()`

Gets details of a single CustomConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/customConnectors/*` |

#### `projects.locations.global.customConnectors.create()`

Creates a new CustomConnector in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/*` |
| `params.customConnectorId` | `string` | No | Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.global.customConnectors.patch()`

Updates the parameters of a CustomConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Set the mask as "*" for full replacement, which means all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.global.customConnectors.customConnectorVersions`

#### `projects.locations.global.customConnectors.customConnectorVersions.list()`

List CustomConnectorVersions in a given project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the connectors, of the form: `projects/*/locations/{location}/customConnectors/*/customConnectorVersions/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |

#### `projects.locations.global.customConnectors.customConnectorVersions.get()`

Gets details of a single CustomConnectorVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/{location}/customConnectors/*/customConnectorVersions/*` |

#### `projects.locations.global.customConnectors.customConnectorVersions.create()`

Creates a new CustomConnectorVersion in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}` |
| `params.customConnectorVersionId` | `string` | No | Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.endpointAttachments`

#### `projects.locations.endpointAttachments.list()`

List EndpointAttachments in a given project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource od the EndpointAttachment, of the form: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |
| `params.view` | `string` | No | Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view. |

#### `projects.locations.endpointAttachments.get()`

Gets details of a single EndpointAttachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/endpointAttachments/*` |
| `params.view` | `string` | No | Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view. |

#### `projects.locations.endpointAttachments.create()`

Creates a new EndpointAttachment in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the EndpointAttachment, of the form: `projects/*/locations/*` |
| `params.endpointAttachmentId` | `string` | No | Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource. The regex is: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpointAttachments.patch()`

Updates the parameters of a single EndpointAttachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Fields are specified relative to the endpointAttachment. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the endpointAttachment details: * `description` * `labels` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpointAttachments.delete()`

Deletes a single EndpointAttachment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/*/locations/*/endpointAttachments/*` |

### `projects.locations.customConnectors`

#### `projects.locations.customConnectors.validateCustomConnectorSpec()`

Validates a Custom Connector Spec.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location at which the custom connector is being created. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.customConnectors.customConnectorVersions`

#### `projects.locations.customConnectors.customConnectorVersions.delete()`

Deletes a single CustomConnectorVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` |

#### `projects.locations.customConnectors.customConnectorVersions.deprecate()`

Deprecates a single CustomConnectorVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.customConnectors.customConnectorVersions.publish()`

Publish request for the CustomConnectorVersion. Once approved, the CustomConnectorVersion will be published as PartnerConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.customConnectors.customConnectorVersions.withdraw()`

Withdraw the publish request for the CustomConnectorVersion. This can only be used before the CustomConnectorVersion is published.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` |
| `params.resource` | `object` | Yes | The request body. |