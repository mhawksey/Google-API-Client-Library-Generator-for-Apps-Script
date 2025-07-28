# Eventarc API - Apps Script Client Library

Auto-generated client library for using the **Eventarc API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:54:21 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:25 GMT
- **Created:** Sun, 20 Jul 2025 16:32:49 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getGoogleChannelConfig()`

Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the config to get. |

#### `projects.locations.updateGoogleChannelConfig()`

Update a single GoogleChannelConfig

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. In API responses, the config name always includes the projectID, regardless of whether the projectID or projectNumber was provided. |
| `params.updateMask` | `string` | No | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.resource` | `object` | Yes | The request body. |

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

### `projects.locations.triggers`

#### `projects.locations.triggers.get()`

Get a single trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the trigger to get. |

#### `projects.locations.triggers.list()`

List triggers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list triggers on. |
| `params.pageSize` | `integer` | No | The maximum number of triggers to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`. |
| `params.filter` | `string` | No | Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination. |

#### `projects.locations.triggers.create()`

Create a new trigger in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this trigger. |
| `params.triggerId` | `string` | No | Required. The user-provided ID to be assigned to the trigger. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.patch()`

Update a single trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format. |
| `params.updateMask` | `string` | No | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.allowMissing` | `boolean` | No | If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.delete()`

Delete a single trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the trigger to be deleted. |
| `params.etag` | `string` | No | If provided, the trigger will only be deleted if the etag matches the current etag on the resource. |
| `params.allowMissing` | `boolean` | No | If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.triggers.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.triggers.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.channels`

#### `projects.locations.channels.get()`

Get a single Channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the channel to get. |

#### `projects.locations.channels.list()`

List channels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list channels on. |
| `params.pageSize` | `integer` | No | The maximum number of channels to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`. |

#### `projects.locations.channels.create()`

Create a new channel in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this channel. |
| `params.channelId` | `string` | No | Required. The user-provided ID to be assigned to the channel. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.channels.patch()`

Update a single channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format. |
| `params.updateMask` | `string` | No | The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.channels.delete()`

Delete a single channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the channel to be deleted. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.channels.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.channels.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.channels.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.providers`

#### `projects.locations.providers.get()`

Get a single Provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the provider to get. |

#### `projects.locations.providers.list()`

List providers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the provider to get. |
| `params.pageSize` | `integer` | No | The maximum number of providers to return on each page. |
| `params.pageToken` | `string` | No | The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`. |
| `params.filter` | `string` | No | The filter field that the list request will filter on. |

### `projects.locations.channelConnections`

#### `projects.locations.channelConnections.get()`

Get a single ChannelConnection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the channel connection to get. |

#### `projects.locations.channelConnections.list()`

List channel connections.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection from which to list channel connections. |
| `params.pageSize` | `integer` | No | The maximum number of channel connections to return on each page. Note: The service may send fewer responses. |
| `params.pageToken` | `string` | No | The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token. |

#### `projects.locations.channelConnections.create()`

Create a new ChannelConnection in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this channel connection. |
| `params.channelConnectionId` | `string` | No | Required. The user-provided ID to be assigned to the channel connection. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.channelConnections.delete()`

Delete a single ChannelConnection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the channel connection to delete. |

#### `projects.locations.channelConnections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.channelConnections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.channelConnections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.messageBuses`

#### `projects.locations.messageBuses.get()`

Get a single MessageBus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the message bus to get. |

#### `projects.locations.messageBuses.list()`

List message buses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list message buses on. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| `params.filter` | `string` | No | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |

#### `projects.locations.messageBuses.listEnrollments()`

List message bus enrollments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent message bus to list enrollments on. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |

#### `projects.locations.messageBuses.create()`

Create a new MessageBus in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this message bus. |
| `params.messageBusId` | `string` | No | Required. The user-provided ID to be assigned to the MessageBus. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.messageBuses.patch()`

Update a single message bus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the form projects/{project}/locations/{location}/messageBuses/{message_bus} |
| `params.updateMask` | `string` | No | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created. In this situation, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.messageBuses.delete()`

Delete a single message bus.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the MessageBus to be deleted. |
| `params.etag` | `string` | No | Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.messageBuses.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.messageBuses.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.messageBuses.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.enrollments`

#### `projects.locations.enrollments.get()`

Get a single Enrollment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Enrollment to get. |

#### `projects.locations.enrollments.list()`

List Enrollments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list triggers on. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| `params.filter` | `string` | No | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |

#### `projects.locations.enrollments.create()`

Create a new Enrollment in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this enrollment. |
| `params.enrollmentId` | `string` | No | Required. The user-provided ID to be assigned to the Enrollment. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.enrollments.patch()`

Update a single Enrollment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the form projects/{project}/locations/{location}/enrollments/{enrollment} |
| `params.updateMask` | `string` | No | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.enrollments.delete()`

Delete a single Enrollment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Enrollment to be deleted. |
| `params.etag` | `string` | No | Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.enrollments.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.enrollments.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.enrollments.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.pipelines`

#### `projects.locations.pipelines.get()`

Get a single Pipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pipeline to get. |

#### `projects.locations.pipelines.list()`

List pipelines.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list pipelines on. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| `params.filter` | `string` | No | Optional. The filter field that the list request will filter on. Possible filters are described in https://google.aip.dev/160. |

#### `projects.locations.pipelines.create()`

Create a new Pipeline in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this pipeline. |
| `params.pipelineId` | `string` | No | Required. The user-provided ID to be assigned to the Pipeline. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelines.patch()`

Update a single pipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Pipeline. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/pipelines/{pipeline}` format. |
| `params.updateMask` | `string` | No | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In this situation, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelines.delete()`

Delete a single pipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Pipeline to be deleted. |
| `params.etag` | `string` | No | Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the resource. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the Pipeline is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.pipelines.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.pipelines.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.pipelines.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.googleApiSources`

#### `projects.locations.googleApiSources.get()`

Get a single GoogleApiSource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the google api source to get. |

#### `projects.locations.googleApiSources.list()`

List GoogleApiSources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection to list GoogleApiSources on. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return on each page. Note: The service may send fewer. |
| `params.pageToken` | `string` | No | Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. |
| `params.filter` | `string` | No | Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. |

#### `projects.locations.googleApiSources.create()`

Create a new GoogleApiSource in a particular project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection in which to add this google api source. |
| `params.googleApiSourceId` | `string` | No | Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.googleApiSources.patch()`

Update a single GoogleApiSource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the form projects/{project}/locations/{location}/googleApiSources/{google_api_source} |
| `params.updateMask` | `string` | No | Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be created. In this situation, `update_mask` is ignored. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.googleApiSources.delete()`

Delete a single GoogleApiSource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the GoogleApiSource to be deleted. |
| `params.etag` | `string` | No | Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not post it. |

#### `projects.locations.googleApiSources.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.googleApiSources.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.googleApiSources.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.kafkaSources`

#### `projects.locations.kafkaSources.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.kafkaSources.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.kafkaSources.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |