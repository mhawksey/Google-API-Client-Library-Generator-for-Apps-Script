
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

    this.projects.subscriptions = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.setIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.getIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.testIamPermissions = (params) => this._makeRequest('v1beta2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a subscription to a given topic. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic. Note that for REST API requests, you must specify a name.
     * @param {string} params.name - (Required) The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.create = (params) => this._makeRequest('v1beta2/{+name}', 'PUT', params);

    /**
     * Gets the configuration details of a subscription.
     * @param {string} params.subscription - (Required) The name of the subscription to get.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.get = (params) => this._makeRequest('v1beta2/{+subscription}', 'GET', params);

    /**
     * Lists matching subscriptions.
     * @param {integer} params.pageSize - Maximum number of subscriptions to return.
     * @param {string} params.pageToken - The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.project - (Required) The name of the cloud project that subscriptions belong to.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.list = (params) => this._makeRequest('v1beta2/{+project}/subscriptions', 'GET', params);

    /**
     * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
     * @param {string} params.subscription - (Required) The subscription to delete.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.delete = (params) => this._makeRequest('v1beta2/{+subscription}', 'DELETE', params);

    /**
     * Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
     * @param {string} params.subscription - (Required) The name of the subscription.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.modifyAckDeadline = (params) => this._makeRequest('v1beta2/{+subscription}:modifyAckDeadline', 'POST', params);

    /**
     * Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
     * @param {string} params.subscription - (Required) The subscription whose message is being acknowledged.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.acknowledge = (params) => this._makeRequest('v1beta2/{+subscription}:acknowledge', 'POST', params);

    /**
     * Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
     * @param {string} params.subscription - (Required) The subscription from which messages should be pulled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.pull = (params) => this._makeRequest('v1beta2/{+subscription}:pull', 'POST', params);

    /**
     * Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
     * @param {string} params.subscription - (Required) The name of the subscription.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.subscriptions.modifyPushConfig = (params) => this._makeRequest('v1beta2/{+subscription}:modifyPushConfig', 'POST', params);

    this.projects.topics = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.setIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.topics.getIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.testIamPermissions = (params) => this._makeRequest('v1beta2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates the given topic with the given name.
     * @param {string} params.name - (Required) The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.create = (params) => this._makeRequest('v1beta2/{+name}', 'PUT', params);

    /**
     * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
     * @param {string} params.topic - (Required) The messages in the request will be published on this topic.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.topics.publish = (params) => this._makeRequest('v1beta2/{+topic}:publish', 'POST', params);

    /**
     * Gets the configuration of a topic.
     * @param {string} params.topic - (Required) The name of the topic to get.
     * @return {object} The API response object.
     */
    this.projects.topics.get = (params) => this._makeRequest('v1beta2/{+topic}', 'GET', params);

    /**
     * Lists matching topics.
     * @param {integer} params.pageSize - Maximum number of topics to return.
     * @param {string} params.pageToken - The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
     * @param {string} params.project - (Required) The name of the cloud project that topics belong to.
     * @return {object} The API response object.
     */
    this.projects.topics.list = (params) => this._makeRequest('v1beta2/{+project}/topics', 'GET', params);

    /**
     * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
     * @param {string} params.topic - (Required) Name of the topic to delete.
     * @return {object} The API response object.
     */
    this.projects.topics.delete = (params) => this._makeRequest('v1beta2/{+topic}', 'DELETE', params);

    this.projects.topics.subscriptions = {};

    /**
     * Lists the name of the subscriptions for this topic.
     * @param {integer} params.pageSize - Maximum number of subscription names to return.
     * @param {string} params.pageToken - The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.topic - (Required) The name of the topic that subscriptions are attached to.
     * @return {object} The API response object.
     */
    this.projects.topics.subscriptions.list = (params) => this._makeRequest('v1beta2/{+topic}/subscriptions', 'GET', params);
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
