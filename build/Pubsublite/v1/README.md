# Pub/Sub Lite API - Apps Script Client Library

Auto-generated client library for using the **Pub/Sub Lite API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:18:40 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:45:20 GMT
- **Created:** Sun, 20 Jul 2025 16:52:01 GMT



---

## API Reference

### `admin`

### `admin.projects`

### `admin.projects.locations`

### `admin.projects.locations.operations`

#### `admin.projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `admin.projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `admin.projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `admin.projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `admin.projects.locations.topics`

#### `admin.projects.locations.topics.create()`

Creates a new topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`. |
| `params.topicId` | `string` | No | Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.topics.get()`

Returns the topic configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic whose configuration to return. |

#### `admin.projects.locations.topics.getPartitions()`

Returns the partition information for the requested topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The topic whose partition information to return. |

#### `admin.projects.locations.topics.list()`

Returns the list of topics for the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token. |

#### `admin.projects.locations.topics.patch()`

Updates properties of the specified topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} |
| `params.updateMask` | `string` | No | Required. A mask specifying the topic fields to change. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.topics.delete()`

Deletes the specified topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic to delete. |

### `admin.projects.locations.topics.subscriptions`

#### `admin.projects.locations.topics.subscriptions.list()`

Lists the subscriptions attached to the specified topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic whose subscriptions to list. |
| `params.pageSize` | `integer` | No | The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token. |

### `admin.projects.locations.subscriptions`

#### `admin.projects.locations.subscriptions.create()`

Creates a new subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`. |
| `params.subscriptionId` | `string` | No | Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`. |
| `params.skipBacklog` | `boolean` | No | If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.subscriptions.get()`

Returns the subscription configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription whose configuration to return. |

#### `admin.projects.locations.subscriptions.list()`

Returns the list of subscriptions for the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token. |

#### `admin.projects.locations.subscriptions.patch()`

Updates properties of the specified subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} |
| `params.updateMask` | `string` | No | Required. A mask specifying the subscription fields to change. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.subscriptions.delete()`

Deletes the specified subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription to delete. |

#### `admin.projects.locations.subscriptions.seek()`

Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription to seek. |
| `params.resource` | `object` | Yes | The request body. |

### `admin.projects.locations.reservations`

#### `admin.projects.locations.reservations.create()`

Creates a new reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`. |
| `params.reservationId` | `string` | No | Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.reservations.get()`

Returns the reservation configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the reservation whose configuration to return. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} |

#### `admin.projects.locations.reservations.list()`

Returns the list of reservations for the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token. |

#### `admin.projects.locations.reservations.patch()`

Updates properties of the specified reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} |
| `params.updateMask` | `string` | No | Required. A mask specifying the reservation fields to change. |
| `params.resource` | `object` | Yes | The request body. |

#### `admin.projects.locations.reservations.delete()`

Deletes the specified reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the reservation to delete. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} |

### `admin.projects.locations.reservations.topics`

#### `admin.projects.locations.reservations.topics.list()`

Lists the topics attached to the specified reservation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} |
| `params.pageSize` | `integer` | No | The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token. |

### `cursor`

### `cursor.projects`

### `cursor.projects.locations`

### `cursor.projects.locations.subscriptions`

#### `cursor.projects.locations.subscriptions.commitCursor()`

Updates the committed cursor.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The subscription for which to update the cursor. |
| `params.resource` | `object` | Yes | The request body. |

### `cursor.projects.locations.subscriptions.cursors`

#### `cursor.projects.locations.subscriptions.cursors.list()`

Returns all committed cursor information for a subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`. |
| `params.pageSize` | `integer` | No | The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token. |

### `topicStats`

### `topicStats.projects`

### `topicStats.projects.locations`

### `topicStats.projects.locations.topics`

#### `topicStats.projects.locations.topics.computeMessageStats()`

Compute statistics about a range of messages in a given topic and partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The topic for which we should compute message stats. |
| `params.resource` | `object` | Yes | The request body. |

#### `topicStats.projects.locations.topics.computeHeadCursor()`

Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The topic for which we should compute the head cursor. |
| `params.resource` | `object` | Yes | The request body. |

#### `topicStats.projects.locations.topics.computeTimeCursor()`

Compute the corresponding cursor for a publish or event time in a topic partition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The topic for which we should compute the cursor. |
| `params.resource` | `object` | Yes | The request body. |