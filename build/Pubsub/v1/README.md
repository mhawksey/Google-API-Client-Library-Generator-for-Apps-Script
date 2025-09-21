# Cloud Pub/Sub API - Apps Script Client Library

Auto-generated client library for using the **Cloud Pub/Sub API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:45:48 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:45:48 GMT
- **Created:** Sun, 20 Jul 2025 16:46:53 GMT



---

## API Reference

### `projects`

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

Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.patch()`

Updates an existing topic by updating the fields specified in the update mask. Note that certain properties of a topic are not modifiable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.publish()`

Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.topics.get()`

Gets the configuration of a topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The name of the topic to get. Format is `projects/{project}/topics/{topic}`. |

#### `projects.topics.list()`

Lists matching topics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project in which to list topics. Format is `projects/{project-id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of topics to return. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data. |

#### `projects.topics.delete()`

Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. Name of the topic to delete. Format is `projects/{project}/topics/{topic}`. |

### `projects.topics.subscriptions`

#### `projects.topics.subscriptions.list()`

Lists the names of the attached subscriptions on this topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of subscription names to return. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data. |

### `projects.topics.snapshots`

#### `projects.topics.snapshots.list()`

Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.topic` | `string` | Yes | Required. The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of snapshot names to return. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data. |

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

#### `projects.subscriptions.detach()`

Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The subscription to detach. Format is `projects/{project}/subscriptions/{subscription}`. |

#### `projects.subscriptions.create()`

Creates a subscription to a given topic. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Subscription object. Note that for REST API requests, you must specify a name in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.get()`

Gets the configuration details of a subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`. |

#### `projects.subscriptions.patch()`

Updates an existing subscription by updating the fields specified in the update mask. Note that certain properties of a subscription, such as its topic, are not modifiable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.list()`

Lists matching subscriptions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project in which to list subscriptions. Format is `projects/{project-id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of subscriptions to return. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data. |

#### `projects.subscriptions.delete()`

Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`. |

#### `projects.subscriptions.modifyAckDeadline()`

Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.acknowledge()`

Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.pull()`

Pulls messages from the server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.modifyPushConfig()`

Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.subscriptions.seek()`

Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.subscription` | `string` | Yes | Required. The subscription to affect. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.snapshots`

#### `projects.snapshots.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.snapshots.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.snapshots.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.snapshots.get()`

Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshot` | `string` | Yes | Required. The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`. |

#### `projects.snapshots.list()`

Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The name of the project in which to list snapshots. Format is `projects/{project-id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of snapshots to return. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data. |

#### `projects.snapshots.create()`

Creates a snapshot from the requested subscription. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. If the snapshot already exists, returns `ALREADY_EXISTS`. If the requested subscription doesn't exist, returns `NOT_FOUND`. If the backlog in the subscription is too old -- and the resulting snapshot would expire in less than 1 hour -- then `FAILED_PRECONDITION` is returned. See also the `Snapshot.expire_time` field. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Snapshot object. Note that for REST API requests, you must specify a name in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. User-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name. See the [resource name rules](https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). Format is `projects/{project}/snapshots/{snap}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.snapshots.patch()`

Updates an existing snapshot by updating the fields specified in the update mask. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The name of the snapshot. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.snapshots.delete()`

Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshot` | `string` | Yes | Required. The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`. |

### `projects.schemas`

#### `projects.schemas.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.schemas.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.create()`

Creates a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to create the schema. Format is `projects/{project-id}`. |
| `params.schemaId` | `string` | No | The ID to use for the schema, which will become the final component of the schema's resource name. See https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names for resource name constraints. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.get()`

Gets a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to get. Format is `projects/{project}/schemas/{schema}`. |
| `params.view` | `string` | No | The set of fields to return in the response. If not set, returns a Schema with all fields filled out. Set to `BASIC` to omit the `definition`. |

#### `projects.schemas.list()`

Lists schemas in a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to list schemas. Format is `projects/{project-id}`. |
| `params.view` | `string` | No | The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields. |
| `params.pageSize` | `integer` | No | Maximum number of schemas to return. |
| `params.pageToken` | `string` | No | The value returned by the last `ListSchemasResponse`; indicates that this is a continuation of a prior `ListSchemas` call, and that the system should return the next page of data. |

#### `projects.schemas.listRevisions()`

Lists all schema revisions for the named schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema to list revisions for. |
| `params.view` | `string` | No | The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields. |
| `params.pageSize` | `integer` | No | The maximum number of revisions to return per page. |
| `params.pageToken` | `string` | No | The page token, received from a previous ListSchemaRevisions call. Provide this to retrieve the subsequent page. |

#### `projects.schemas.commit()`

Commits a new schema revision to an existing schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema we are revising. Format is `projects/{project}/schemas/{schema}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.rollback()`

Creates a new schema revision that is a copy of the provided revision_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The schema being rolled back with revision id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.deleteRevision()`

Deletes a specific schema revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the schema revision to be deleted, with a revision ID explicitly included. Example: `projects/123/schemas/my-schema@c7cfa2a8` |
| `params.revisionId` | `string` | No | Optional. This field is deprecated and should not be used for specifying the revision ID. The revision ID should be specified via the `name` parameter. |

#### `projects.schemas.delete()`

Deletes a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the schema to delete. Format is `projects/{project}/schemas/{schema}`. |

#### `projects.schemas.validate()`

Validates a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.schemas.validateMessage()`

Validates a message against a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`. |
| `params.requestBody` | `object` | Yes | The request body. |