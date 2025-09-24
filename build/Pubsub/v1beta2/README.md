# Cloud Pub/Sub API - Apps Script Client Library

Auto-generated client library for using the **Cloud Pub/Sub API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:45:44 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:45:44 GMT
- **Created:** Sun, 20 Jul 2025 16:46:51 GMT



---

## API Reference

### `projects`

### `projects.subscriptions`

#### `projects.subscriptions.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.subscriptions.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.create()`

Creates a subscription to a given topic. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic. Note that for REST API requests, you must specify a name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.get()`

Gets the configuration details of a subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The name of the subscription to get. |

#### `projects.subscriptions.list()`

Lists matching subscriptions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The name of the cloud project that subscriptions belong to. |
| `params.pageSize` | `integer` | No | Maximum number of subscriptions to return. |
| `params.pageToken` | `string` | No | The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data. |

#### `projects.subscriptions.delete()`

Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The subscription to delete. |

#### `projects.subscriptions.modifyAckDeadline()`

Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The name of the subscription. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.acknowledge()`

Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The subscription whose message is being acknowledged. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.pull()`

Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The subscription from which messages should be pulled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.modifyPushConfig()`

Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | The name of the subscription. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.topics`

#### `projects.topics.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.topics.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.create()`

Creates the given topic with the given name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.publish()`

Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | The messages in the request will be published on this topic. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.get()`

Gets the configuration of a topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | The name of the topic to get. |

#### `projects.topics.list()`

Lists matching topics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The name of the cloud project that topics belong to. |
| `params.pageSize` | `integer` | No | Maximum number of topics to return. |
| `params.pageToken` | `string` | No | The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data. |

#### `projects.topics.delete()`

Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Name of the topic to delete. |

### `projects.topics.subscriptions`

#### `projects.topics.subscriptions.list()`

Lists the name of the subscriptions for this topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | The name of the topic that subscriptions are attached to. |
| `params.pageSize` | `integer` | No | Maximum number of subscription names to return. |
| `params.pageToken` | `string` | No | The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data. |