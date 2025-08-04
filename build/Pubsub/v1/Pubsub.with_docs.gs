
/**
 * Google Apps Script client library for the Cloud Pub/Sub API
 * Documentation URL: https://cloud.google.com/pubsub/docs
 * @class
 */
class Pubsub {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://pubsub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.topics = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.topics.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names).
     * @param {string} params.name - (Required) Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Updates an existing topic by updating the fields specified in the update mask. Note that certain properties of a topic are not modifiable.
     * @param {string} params.name - (Required) Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
     * @param {string} params.topic - (Required) Required. The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.publish = (params) => this._makeRequest('v1/{+topic}:publish', 'POST', params);

    /**
     * Gets the configuration of a topic.
     * @param {string} params.topic - (Required) Required. The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
     * @return {object} The API response object.
     */
    this.projects.topics.get = (params) => this._makeRequest('v1/{+topic}', 'GET', params);

    /**
     * Lists matching topics.
     * @param {integer} params.pageSize - Optional. Maximum number of topics to return.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
     * @param {string} params.project - (Required) Required. The name of the project in which to list topics. Format is `projects/{project-id}`.
     * @return {object} The API response object.
     */
    this.projects.topics.list = (params) => this._makeRequest('v1/{+project}/topics', 'GET', params);

    /**
     * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
     * @param {string} params.topic - (Required) Required. Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
     * @return {object} The API response object.
     */
    this.projects.topics.delete = (params) => this._makeRequest('v1/{+topic}', 'DELETE', params);

    this.projects.topics.subscriptions = {};

    /**
     * Lists the names of the attached subscriptions on this topic.
     * @param {integer} params.pageSize - Optional. Maximum number of subscription names to return.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.topic - (Required) Required. The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.
     * @return {object} The API response object.
     */
    this.projects.topics.subscriptions.list = (params) => this._makeRequest('v1/{+topic}/subscriptions', 'GET', params);

    this.projects.topics.snapshots = {};

    /**
     * Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @param {integer} params.pageSize - Optional. Maximum number of snapshot names to return.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data.
     * @param {string} params.topic - (Required) Required. The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.
     * @return {object} The API response object.
     */
    this.projects.topics.snapshots.list = (params) => this._makeRequest('v1/{+topic}/snapshots', 'GET', params);

    this.projects.subscriptions = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
     * @param {string} params.subscription - (Required) Required. The subscription to detach. Format is `projects/{project}/subscriptions/{subscription}`.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.detach = (params) => this._makeRequest('v1/{+subscription}:detach', 'POST', params);

    /**
     * Creates a subscription to a given topic. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Subscription object. Note that for REST API requests, you must specify a name in the request.
     * @param {string} params.name - (Required) Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Gets the configuration details of a subscription.
     * @param {string} params.subscription - (Required) Required. The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.get = (params) => this._makeRequest('v1/{+subscription}', 'GET', params);

    /**
     * Updates an existing subscription by updating the fields specified in the update mask. Note that certain properties of a subscription, such as its topic, are not modifiable.
     * @param {string} params.name - (Required) Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists matching subscriptions.
     * @param {integer} params.pageSize - Optional. Maximum number of subscriptions to return.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.project - (Required) Required. The name of the project in which to list subscriptions. Format is `projects/{project-id}`.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.list = (params) => this._makeRequest('v1/{+project}/subscriptions', 'GET', params);

    /**
     * Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
     * @param {string} params.subscription - (Required) Required. The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.delete = (params) => this._makeRequest('v1/{+subscription}', 'DELETE', params);

    /**
     * Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
     * @param {string} params.subscription - (Required) Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.modifyAckDeadline = (params) => this._makeRequest('v1/{+subscription}:modifyAckDeadline', 'POST', params);

    /**
     * Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
     * @param {string} params.subscription - (Required) Required. The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.acknowledge = (params) => this._makeRequest('v1/{+subscription}:acknowledge', 'POST', params);

    /**
     * Pulls messages from the server.
     * @param {string} params.subscription - (Required) Required. The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.pull = (params) => this._makeRequest('v1/{+subscription}:pull', 'POST', params);

    /**
     * Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
     * @param {string} params.subscription - (Required) Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.modifyPushConfig = (params) => this._makeRequest('v1/{+subscription}:modifyPushConfig', 'POST', params);

    /**
     * Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
     * @param {string} params.subscription - (Required) Required. The subscription to affect.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.seek = (params) => this._makeRequest('v1/{+subscription}:seek', 'POST', params);

    this.projects.snapshots = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snapshots.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.snapshots.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snapshots.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @param {string} params.snapshot - (Required) Required. The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
     * @return {object} The API response object.
     */
    this.projects.snapshots.get = (params) => this._makeRequest('v1/{+snapshot}', 'GET', params);

    /**
     * Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @param {integer} params.pageSize - Optional. Maximum number of snapshots to return.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
     * @param {string} params.project - (Required) Required. The name of the project in which to list snapshots. Format is `projects/{project-id}`.
     * @return {object} The API response object.
     */
    this.projects.snapshots.list = (params) => this._makeRequest('v1/{+project}/snapshots', 'GET', params);

    /**
     * Creates a snapshot from the requested subscription. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. If the snapshot already exists, returns `ALREADY_EXISTS`. If the requested subscription doesn't exist, returns `NOT_FOUND`. If the backlog in the subscription is too old -- and the resulting snapshot would expire in less than 1 hour -- then `FAILED_PRECONDITION` is returned. See also the `Snapshot.expire_time` field. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription, conforming to the [resource name format] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). The generated name is populated in the returned Snapshot object. Note that for REST API requests, you must specify a name in the request.
     * @param {string} params.name - (Required) Required. User-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name. See the [resource name rules](https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names). Format is `projects/{project}/snapshots/{snap}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snapshots.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Updates an existing snapshot by updating the fields specified in the update mask. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @param {string} params.name - (Required) Optional. The name of the snapshot.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.snapshots.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
     * @param {string} params.snapshot - (Required) Required. The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
     * @return {object} The API response object.
     */
    this.projects.snapshots.delete = (params) => this._makeRequest('v1/{+snapshot}', 'DELETE', params);

    this.projects.schemas = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.schemas.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a schema.
     * @param {string} params.parent - (Required) Required. The name of the project in which to create the schema. Format is `projects/{project-id}`.
     * @param {string} params.schemaId - The ID to use for the schema, which will become the final component of the schema's resource name. See https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names for resource name constraints.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.create = (params) => this._makeRequest('v1/{+parent}/schemas', 'POST', params);

    /**
     * Gets a schema.
     * @param {string} params.name - (Required) Required. The name of the schema to get. Format is `projects/{project}/schemas/{schema}`.
     * @param {string} params.view - The set of fields to return in the response. If not set, returns a Schema with all fields filled out. Set to `BASIC` to omit the `definition`.
     * @return {object} The API response object.
     */
    this.projects.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists schemas in a project.
     * @param {integer} params.pageSize - Maximum number of schemas to return.
     * @param {string} params.pageToken - The value returned by the last `ListSchemasResponse`; indicates that this is a continuation of a prior `ListSchemas` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the project in which to list schemas. Format is `projects/{project-id}`.
     * @param {string} params.view - The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields.
     * @return {object} The API response object.
     */
    this.projects.schemas.list = (params) => this._makeRequest('v1/{+parent}/schemas', 'GET', params);

    /**
     * Lists all schema revisions for the named schema.
     * @param {string} params.name - (Required) Required. The name of the schema to list revisions for.
     * @param {integer} params.pageSize - The maximum number of revisions to return per page.
     * @param {string} params.pageToken - The page token, received from a previous ListSchemaRevisions call. Provide this to retrieve the subsequent page.
     * @param {string} params.view - The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields.
     * @return {object} The API response object.
     */
    this.projects.schemas.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    /**
     * Commits a new schema revision to an existing schema.
     * @param {string} params.name - (Required) Required. The name of the schema we are revising. Format is `projects/{project}/schemas/{schema}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.commit = (params) => this._makeRequest('v1/{+name}:commit', 'POST', params);

    /**
     * Creates a new schema revision that is a copy of the provided revision_id.
     * @param {string} params.name - (Required) Required. The schema being rolled back with revision id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);

    /**
     * Deletes a specific schema revision.
     * @param {string} params.name - (Required) Required. The name of the schema revision to be deleted, with a revision ID explicitly included. Example: `projects/123/schemas/my-schema@c7cfa2a8`
     * @param {string} params.revisionId - Optional. This field is deprecated and should not be used for specifying the revision ID. The revision ID should be specified via the `name` parameter.
     * @return {object} The API response object.
     */
    this.projects.schemas.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);

    /**
     * Deletes a schema.
     * @param {string} params.name - (Required) Required. Name of the schema to delete. Format is `projects/{project}/schemas/{schema}`.
     * @return {object} The API response object.
     */
    this.projects.schemas.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Validates a schema.
     * @param {string} params.parent - (Required) Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.validate = (params) => this._makeRequest('v1/{+parent}/schemas:validate', 'POST', params);

    /**
     * Validates a message against a schema.
     * @param {string} params.parent - (Required) Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.schemas.validateMessage = (params) => this._makeRequest('v1/{+parent}/schemas:validateMessage', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
