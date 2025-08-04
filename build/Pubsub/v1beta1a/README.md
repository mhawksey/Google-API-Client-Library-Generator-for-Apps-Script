# Cloud Pub/Sub API - Apps Script Client Library

Auto-generated client library for using the **Cloud Pub/Sub API (version: v1beta1a)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:43:47 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:43:47 GMT
- **Created:** Sun, 20 Jul 2025 16:46:48 GMT



---

## API Reference

### `topics`

#### `topics.create()`

Creates the given topic with the given name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `topics.publish()`

Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `topics.publishBatch()`

Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `topics.get()`

Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | The name of the topic to get. |

#### `topics.list()`

Lists matching topics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | A valid label query expression. |
| `params.maxResults` | `integer` | No | Maximum number of topics to return. |
| `params.pageToken` | `string` | No | The value obtained in the last ListTopicsResponse for continuation. |

#### `topics.delete()`

Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Name of the topic to delete. |

### `subscriptions`

#### `subscriptions.create()`

Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.get()`

Gets the configuration details of a subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The name of the subscription to get. |

#### `subscriptions.list()`

Lists matching subscriptions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | A valid label query expression. |
| `params.maxResults` | `integer` | No | Maximum number of subscriptions to return. |
| `params.pageToken` | `string` | No | The value obtained in the last ListSubscriptionsResponse for continuation. |

#### `subscriptions.delete()`

Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The subscription to delete. |

#### `subscriptions.modifyPushConfig()`

Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.pull()`

Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.pullBatch()`

Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.modifyAckDeadline()`

Modifies the Ack deadline for a message received from a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `subscriptions.acknowledge()`

Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |